import { cp, mkdir, readdir, copyFile } from 'node:fs/promises';
for(const file of await readdir('identities')) {
 const id=file.slice(0,-4),root=`plugins/${id}`;await mkdir(root,{recursive:true});
 await cp('runtime',root,{recursive:true});await copyFile(`manifests/${id}.json`,`${root}/tunnelde-plugin.json`);await copyFile(`identities/${file}`,`${root}/lib/identity.mjs`);
}
