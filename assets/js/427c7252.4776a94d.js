(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3549],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=i,m=c["".concat(d,".").concat(f)]||c[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7891:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],s={id:"defaults_list_override",title:"Defaults List Overrides"},d=void 0,l={unversionedId:"upgrades/1.0_to_1.1/defaults_list_override",id:"version-1.1/upgrades/1.0_to_1.1/defaults_list_override",isDocsHomePage:!1,title:"Defaults List Overrides",description:"Hydra versions prior to 1.1 supported overriding of Hydra config groups via the Defaults List in this manner:",source:"@site/versioned_docs/version-1.1/upgrades/1.0_to_1.1/defaults_list_override.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/defaults_list_override",permalink:"/docs/upgrades/1.0_to_1.1/defaults_list_override",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/1.0_to_1.1/defaults_list_override.md",version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1630600937,formattedLastUpdatedAt:"9/2/2021",frontMatter:{id:"defaults_list_override",title:"Defaults List Overrides"},sidebar:"version-1.1/docs",previous:{title:"Changes to default composition order",permalink:"/docs/upgrades/1.0_to_1.1/default_composition_order"},next:{title:"Defaults List interpolation",permalink:"/docs/upgrades/1.0_to_1.1/defaults_list_interpolation"}},u=[],p={toc:u};function c(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hydra versions prior to 1.1 supported overriding of Hydra config groups via the Defaults List in this manner:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"defaults:\n - model: resnet50\n - hydra/launcher: submitit\n")),(0,o.kt)("p",null,"As of Hydra 1.1, Config group overrides must be marked explicitly with the ",(0,o.kt)("inlineCode",{parentName:"p"},"override")," keyword:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"defaults:\n - model: resnet50\n - override hydra/launcher: submitit\n")),(0,o.kt)("p",null,"The Defaults List is described ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/defaults_list"},"here"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Omitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"override")," keyword when overriding Hydra's config groups will result in an error in Hydra 1.2"))))}c.isMDXComponent=!0}}]);