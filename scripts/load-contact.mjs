import {readFileSync} from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const cache=new Map();
// Import production TS without adding a test SDK or making network calls.
export function moduleURL(path){
 const full=resolve(root,path);
 if(cache.has(full))return cache.get(full);
 let source=stripTypeScriptTypes(readFileSync(full,'utf8'));
 source=source.replace(/from\s+["']([^"']+)["']/g,(all,spec)=>{
  if(!spec.startsWith('.')&&!spec.startsWith('@/'))return all;
  const target=spec.startsWith('@/')?resolve(root,spec.slice(2)):resolve(dirname(full),spec);
  return `from ${JSON.stringify(moduleURL(target.endsWith('.ts')?target:target+'.ts'))}`;
 });
 const url='data:text/javascript;base64,'+Buffer.from(source).toString('base64');cache.set(full,url);return url;
}
export const load=path=>import(moduleURL(path));
