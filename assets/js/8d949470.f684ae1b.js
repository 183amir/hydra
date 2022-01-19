"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7546],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,f=h["".concat(d,".").concat(u)]||h[u]||l[u]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4023:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},d=void 0,p={unversionedId:"upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",id:"upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",isDocsHomePage:!1,title:"Changes to @hydra.main() and hydra.initialize()",description:"Prior to Hydra 1.1, @hydra.main() and hydra.initialize() default config path was the directory containing the Python app (calling @hydra.main() or hydra.initialize()).",source:"@site/docs/upgrades/1.0_to_1.1/hydra_main_config_path.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",permalink:"/docs/next/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/upgrades/1.0_to_1.1/hydra_main_config_path.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1642633564,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"changes_to_hydra_main_config_path",title:"Changes to @hydra.main() and hydra.initialize()"},sidebar:"docs",previous:{title:"Changes to job's runtime working directory",permalink:"/docs/next/upgrades/1.1_to_1.2/changes_to_job_working_dir"},next:{title:"Changes to default composition order",permalink:"/docs/next/upgrades/1.0_to_1.1/default_composition_order"}},s=[{value:"Dedicated config directory",id:"dedicated-config-directory",children:[]},{value:"No config directory",id:"no-config-directory",children:[]},{value:"Using the application directory",id:"using-the-application-directory",children:[]}],l={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Prior to Hydra 1.1, ",(0,i.kt)("strong",{parentName:"p"},"@hydra.main()")," and ",(0,i.kt)("strong",{parentName:"p"},"hydra.initialize()")," default ",(0,i.kt)("inlineCode",{parentName:"p"},"config path")," was the directory containing the Python app (calling ",(0,i.kt)("strong",{parentName:"p"},"@hydra.main()")," or ",(0,i.kt)("strong",{parentName:"p"},"hydra.initialize()"),")."),(0,i.kt)("p",null,"This can cause unexpected behavior:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sibling directories are interpreted as config groups, which can lead to surprising results (See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/1533"},"#1533"),")."),(0,i.kt)("li",{parentName:"ul"},"The subtree added automatically can have many files/directories - which will cause ",(0,i.kt)("strong",{parentName:"li"},"--help")," to be very slow as it's scanning for all config groups/config files (See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/issues/759"},"#759"),").")),(0,i.kt)("p",null,"To address these issues, Hydra 1.1 issues a warning if the config_path is not specified.",(0,i.kt)("br",{parentName:"p"}),"\n","Your options are as follows:"),(0,i.kt)("h3",{id:"dedicated-config-directory"},"Dedicated config directory"),(0,i.kt)("p",null,'For applications with config files, specify a directory like "conf" to use a dedicated config directory relative to the application.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf")\n# or:\nhydra.initialize(config_path="conf")\n')),(0,i.kt)("h3",{id:"no-config-directory"},"No config directory"),(0,i.kt)("p",null,"For applications that do not define config files next to the Python script (typically applications using only Structured Configs), it is recommended that\nyou pass ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," as the config_path, indicating that no directory should be added to the config search path.\nThis will become the default in Hydra 1.2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path=None)\n# or:\nhydra.initialize(config_path=None)\n")),(0,i.kt)("h3",{id:"using-the-application-directory"},"Using the application directory"),(0,i.kt)("p",null,"Use the directory/module of the Python script.\nThis was the default behavior up to Hydra 1.0.",(0,i.kt)("br",{parentName:"p"}),"\n","This is not recommended as it can cause the surprising behavior outlined above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path=".")\n# or:\nhydra.initialize(config_path=".")\n')))}h.isMDXComponent=!0}}]);