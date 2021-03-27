(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(277)),i={id:"config_path_changes",title:"Config path changes"},c={unversionedId:"upgrades/0.11_to_1.0/config_path_changes",id:"version-1.0/upgrades/0.11_to_1.0/config_path_changes",isDocsHomePage:!1,title:"Config path changes",description:"Overview",source:"@site/versioned_docs/version-1.0/upgrades/0.11_to_1.0/config_path_changes.md",slug:"/upgrades/0.11_to_1.0/config_path_changes",permalink:"/docs/upgrades/0.11_to_1.0/config_path_changes",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/upgrades/0.11_to_1.0/config_path_changes.md",version:"1.0",lastUpdatedBy:"monney",lastUpdatedAt:1616871785,formattedLastUpdatedAt:"3/27/2021",sidebar:"version-1.0/docs",previous:{title:"Release process",permalink:"/docs/development/release"},next:{title:"Adding an @package directive",permalink:"/docs/upgrades/0.11_to_1.0/adding_a_package_directive"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Migration examples",id:"migration-examples",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Hydra 1.0 adds a new ",Object(o.b)("inlineCode",{parentName:"p"},"config_name")," parameter to ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," and changes the meaning of the ",Object(o.b)("inlineCode",{parentName:"p"},"config_path"),".\nPreviously, ",Object(o.b)("inlineCode",{parentName:"p"},"config_path")," encapsulated two things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Search path relative to the declaring python file."),Object(o.b)("li",{parentName:"ul"},"Optional config file (.yaml) to load.")),Object(o.b)("p",null,"Having both of those things in the same parameter does not work well if you consider configs that are not files\nsuch as Structured Configs. In addition, it prevents overriding just the ",Object(o.b)("inlineCode",{parentName:"p"},"config_name")," or just the ",Object(o.b)("inlineCode",{parentName:"p"},"config_path")),Object(o.b)("p",null,"A second change is that the ",Object(o.b)("inlineCode",{parentName:"p"},"config_name")," no longer requires a file extension. For configs files the ",Object(o.b)("inlineCode",{parentName:"p"},".yaml")," extension\nwill be added automatically when the file is loaded."),Object(o.b)("p",null,"This change is backward compatible, but support for the old style is deprecated and will be removed in the next major Hydra version."),Object(o.b)("h2",{id:"migration-examples"},"Migration examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="config.yaml")\n')),Object(o.b)("p",null,"Becomes: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_name="config")\n')),Object(o.b)("p",null,"And"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="conf/config.yaml")\n')),Object(o.b)("p",null,"Becomes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_path="conf", config_name="config")\n')))}s.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(g,c(c({ref:t},p),{},{components:n})):r.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);