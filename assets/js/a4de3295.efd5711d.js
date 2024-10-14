"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4824],{15680:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>b,useMDXComponents:()=>c,withMDXComponents:()=>l});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),l=function(e){return function(r){var t=c(r.components);return n.createElement(e,o({},r,{components:t}))}},c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(t),m=a,f=l["".concat(i,".").concat(m)]||l[m]||u[m]||o;return t?n.createElement(f,s(s({ref:r},d),{},{components:t})):n.createElement(f,s({ref:r},d))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33788:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=t(58168),a=t(98587),o=(t(96540),t(15680)),i=["components"],s={id:"version_base",title:"version_base"},p=void 0,d={unversionedId:"upgrades/version_base",id:"upgrades/version_base",title:"version_base",description:"Hydra since version 1.2 supports backwards compatible upgrades by default",source:"@site/docs/upgrades/version_base.md",sourceDirName:"upgrades",slug:"/upgrades/version_base",permalink:"/docs/upgrades/version_base",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/upgrades/version_base.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728940470,formattedLastUpdatedAt:"10/14/2024",frontMatter:{id:"version_base",title:"version_base"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/upgrades/intro"},next:{title:"Changes to @hydra.main() and hydra.initialize()",permalink:"/docs/upgrades/1.1_to_1.2/changes_to_hydra_main_config_path"}},l=[],c={toc:l};function m(e){var r=e.components,t=(0,a.A)(e,i);return(0,o.mdx)("wrapper",(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Hydra since version 1.2 supports backwards compatible upgrades by default\nthrough the use of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"version_base")," parameter to ",(0,o.mdx)("strong",{parentName:"p"},"@hydra.main()")," and ",(0,o.mdx)("strong",{parentName:"p"},"hydra.initialize()"),"."),(0,o.mdx)("p",null,"There are three classes of values that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"version_base")," parameter supports,\ngiven new and existing users greater control of the default behaviors to use."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If the ",(0,o.mdx)("inlineCode",{parentName:"p"},"version_base")," parameter is ",(0,o.mdx)("strong",{parentName:"p"},"not specified"),", Hydra 1.x will use defaults compatible with version 1.1.\nAlso in this case, a warning is issued to indicate an explicit ",(0,o.mdx)("inlineCode",{parentName:"p"},"version_base")," is preferred.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If the ",(0,o.mdx)("inlineCode",{parentName:"p"},"version_base")," parameter is ",(0,o.mdx)("strong",{parentName:"p"},"None"),", then the defaults are chosen for the current minor Hydra version.\nFor example for Hydra 1.2, then would imply ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path=None")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"hydra.job.chdir=False"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If the ",(0,o.mdx)("inlineCode",{parentName:"p"},"version_base")," parameter is an ",(0,o.mdx)("strong",{parentName:"p"},"explicit version string"),' like "1.1",\nthen the defaults appropriate to that version are used.'))))}m.isMDXComponent=!0}}]);