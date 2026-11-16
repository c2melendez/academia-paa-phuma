import {cp,rm,mkdir} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const f of ['index.html','src','data'])await cp(f,`dist/${f}`,{recursive:true});
console.log('Build estático generado en dist/ (sin dependencias externas).');