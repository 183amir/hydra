"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3478],{15680:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>d});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),d=function(e){return function(n){var a=s(n.components);return t.createElement(e,i({},n,{components:a}))}},s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return a?t.createElement(g,o(o({ref:n},c),{},{components:a})):t.createElement(g,o({ref:n},c))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<i;c++)p[c]=a[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},49595:(e,n,a)=>{a.d(n,{A:()=>l,C:()=>c});var t=a(58168),r=a(96540),i=a(75489),p=a(44586),o=a(74098);function l(e){return r.createElement(i.default,(0,t.A)({},e,{to:(n=e.to,l=(0,o.useActiveVersion)(),(0,p.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(a=null==l?void 0:l.name)?a:"current"]+n),target:"_blank"}));var n,a,l}function c(e){var n,a=null!=(n=e.text)?n:"Example (Click Here)";return r.createElement(l,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+a+"-informational",alt:"Example (Click Here)"}))}},26942:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var t=a(58168),r=a(98587),i=(a(96540),a(15680)),p=a(49595),o=["components"],l={id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},c=void 0,d={unversionedId:"advanced/app_packaging",id:"version-1.3/advanced/app_packaging",title:"Application packaging",description:"You can package your Hydra application along with its configuration.",source:"@site/versioned_docs/version-1.3/advanced/packaging.md",sourceDirName:"advanced",slug:"/advanced/app_packaging",permalink:"/docs/1.3/advanced/app_packaging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/advanced/packaging.md",tags:[],version:"1.3",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1728927266,formattedLastUpdatedAt:"10/14/2024",frontMatter:{id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},sidebar:"docs",previous:{title:"Plugin development",permalink:"/docs/1.3/advanced/plugins/develop"},next:{title:"Decorating the main function",permalink:"/docs/1.3/advanced/decorating_main"}},s=[],u={toc:s};function m(e){var n=e.components,a=(0,r.A)(e,o);return(0,i.mdx)("wrapper",(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(p.C,{to:"examples/advanced/hydra_app_example",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"You can package your Hydra application along with its configuration.\nAn example ",(0,i.mdx)(p.A,{to:"examples/advanced/hydra_app_example",mdxType:"GithubLink"},"standalone application")," is included in the repo."),(0,i.mdx)("p",null,"Run it with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python examples/advanced/hydra_app_example/hydra_app/main.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,i.mdx)("p",null,"Install it with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ pip install examples/advanced/hydra_app_example\n...\nSuccessfully installed hydra-app-0.1\n")),(0,i.mdx)("p",null,"Once installed, run the installed app with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ hydra_app\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,i.mdx)("p",null,"The installed app will use the packaged configuration files."))}m.isMDXComponent=!0}}]);