import{o as p,m as $,j as u,D as v}from"./index-BdoqKkkJ.js";import{r as i}from"./router-Bu5b4_LN.js";const c="horizontal",m=["horizontal","vertical"],s=i.forwardRef((r,e)=>{const{decorative:t,orientation:o=c,...a}=r,n=d(o)?o:c,l=t?{role:"none"}:{"aria-orientation":n==="vertical"?n:void 0,role:"separator"};return i.createElement(p.div,$({"data-orientation":n},l,a,{ref:e}))});s.propTypes={orientation(r,e,t){const o=r[e],a=String(o);return o&&!d(o)?new Error(x(a,t)):null}};function x(r,e){return`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${e}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${c}\`.`}function d(r){return m.includes(r)}const f=s,h=i.forwardRef(({className:r,orientation:e="horizontal",decorative:t=!0,...o},a)=>u.jsx(f,{ref:a,decorative:t,orientation:e,className:v("shrink-0 bg-zinc-200 dark:bg-zinc-800",e==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",r),...o}));h.displayName=f.displayName;export{h as S};
