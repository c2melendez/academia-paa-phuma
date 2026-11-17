import { spawnSync } from 'node:child_process';
import { mkdirSync,writeFileSync } from 'node:fs';
const stages=[
 ['syntax','npm',['run','check:syntax']],
 ['tests','npm',['test']],
 ['coverage','npm',['run','audit']],
 ['quality','npm',['run','audit:quality']],
 ['games','npm',['run','audit:games']],
 ['inventory','node',['scripts/m0-reconcile.mjs']],
 ['build','npm',['run','build']]
];
export function evaluate(results,required=stages.map(s=>s[0])){
 const by=new Map(results.map(x=>[x.stage,x]));
 return {ok:required.every(name=>by.get(name)?.status==='PASS'),missing:required.filter(name=>!by.has(name)),failed:required.filter(name=>by.has(name)&&by.get(name).status!=='PASS')};
}
export function run({module='M0',stagesToRun=stages,execute=(cmd,args)=>spawnSync(cmd,args,{encoding:'utf8',maxBuffer:20*1024*1024})}={}){
 const results=[];
 for(const [name,cmd,args] of stagesToRun){
  const start=Date.now(),r=execute(cmd,args);
  const status=r.error||r.status!==0?'FAIL':'PASS';
  results.push({stage:name,status,exitCode:r.status??null,durationMs:Date.now()-start,error:r.error?.message||null});
  console.log('['+status+']',name,r.status??'spawn error');
  if(r.stdout)process.stdout.write(r.stdout);
  if(r.stderr)process.stderr.write(r.stderr);
 }
 const gate=evaluate(results);
 return {module,generatedAt:new Date().toISOString(),gitSha:process.env.GITHUB_SHA||null,results,...gate};
}
if(process.argv[1]&&import.meta.url===new URL('file://'+process.argv[1]).href){
 const report=run({module:process.argv[2]||'M0'});
 mkdirSync('reports',{recursive:true});
 writeFileSync('reports/qa-'+report.module.toLowerCase()+'.json',JSON.stringify(report,null,2)+'\n');
 if(!report.ok)process.exitCode=1;
}
