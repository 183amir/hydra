"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[801],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return c},MDXProvider:function(){return s},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return p}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){return function(a){var t=m(a.components);return n.createElement(e,i({},a,{components:t}))}},m=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=m(e.components);return n.createElement(c.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=m(t),s=r,u=p["".concat(o,".").concat(s)]||p[s]||g[s]||i;return t?n.createElement(u,l(l({ref:a},c),{},{components:t})):n.createElement(u,l({ref:a},c))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60039:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"overriding_packages",title:"Overriding packages"},d=void 0,c={unversionedId:"advanced/overriding_packages",id:"version-1.0/advanced/overriding_packages",title:"Overriding packages",description:"Example application",source:"@site/versioned_docs/version-1.0/advanced/overriding_packages.md",sourceDirName:"advanced",slug:"/advanced/overriding_packages",permalink:"/docs/1.0/advanced/overriding_packages",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/advanced/overriding_packages.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1664558404,formattedLastUpdatedAt:"9/30/2022",frontMatter:{id:"overriding_packages",title:"Overriding packages"},sidebar:"version-1.0/docs",previous:{title:"Extended Override syntax",permalink:"/docs/1.0/advanced/override_grammar/extended"},next:{title:"Config Search Path",permalink:"/docs/1.0/advanced/search_path"}},p=[{value:"Package specification",id:"package-specification",children:[],level:3},{value:"Overriding the package in a file via a package directive",id:"overriding-the-package-in-a-file-via-a-package-directive",children:[{value:"Examples",id:"examples",children:[{value:"A package directive with a literal",id:"a-package-directive-with-a-literal",children:[],level:5},{value:"A package directive with <code>_group_</code> and <code>_name_</code>",id:"a-package-directive-with-_group_-and-_name_",children:[],level:5}],level:4}],level:3},{value:"Overriding the package via the defaults list",id:"overriding-the-package-via-the-defaults-list",children:[],level:3},{value:"History and future of the package directive",id:"history-and-future-of-the-package-directive",children:[],level:3}],m={toc:p};function s(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/advanced/package_overrides"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,i.mdx)("p",null,"The contents of a config file can be relocated, or replicated, within the config, via package overrides."),(0,i.mdx)("h3",{id:"package-specification"},"Package specification"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Definition of a package"',title:'"Definition',of:!0,a:!0,'package"':!0},"PACKAGE      : _global_ | COMPONENT[.COMPONENT]*\nCOMPONENT    : _group_ | _name_ | \\w+\n\n_global_     : the top level package (equivalent to the empty string).\n_group_      : the config group in dot notation: foo/bar/zoo.yaml -> foo.bar\n_name_       : the config file name: foo/bar/zoo.yaml -> zoo\n")),(0,i.mdx)("h3",{id:"overriding-the-package-in-a-file-via-a-package-directive"},"Overriding the package in a file via a package directive"),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},"@package directive")," specifies a common ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.0/terminology#package"},"package")," for all nodes in the config file.\nIt must be placed at the top of each ",(0,i.mdx)("inlineCode",{parentName:"p"},"config group file"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Package directive examples"',title:'"Package',directive:!0,'examples"':!0},"# @package foo.bar\n# @package _global_\n# @package _group_\n# @package _group_._name_\n# @package foo._group_._name_\n")),(0,i.mdx)("h4",{id:"examples"},"Examples"),(0,i.mdx)("h5",{id:"a-package-directive-with-a-literal"},"A package directive with a literal"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="mysql.yaml" {1-2}',title:'"mysql.yaml"',"{1-2}":!0},"# @package foo.bar\n\ndb:\n  host: localhost\n  port: 3306\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Interpretation" {1-2}',title:'"Interpretation"',"{1-2}":!0},"foo:\n  bar:\n    db:\n      host: localhost\n      port: 3306\n")))),(0,i.mdx)("h5",{id:"a-package-directive-with-_group_-and-_name_"},"A package directive with ",(0,i.mdx)("inlineCode",{parentName:"h5"},"_group_")," and ",(0,i.mdx)("inlineCode",{parentName:"h5"},"_name_")),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {1-2}',title:'"db/mysql.yaml"',"{1-2}":!0},"# @package _group_._name_\n\nhost: localhost\nport: 3306\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Interpretation" {1-2}',title:'"Interpretation"',"{1-2}":!0},"db:\n  mysql:\n    host: localhost\n    port: 3306\n")))),(0,i.mdx)("h3",{id:"overriding-the-package-via-the-defaults-list"},"Overriding the package via the defaults list"),(0,i.mdx)("p",null,"The following example adds the ",(0,i.mdx)("inlineCode",{parentName:"p"},"mysql")," config in the packages ",(0,i.mdx)("inlineCode",{parentName:"p"},"db.src")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"db.dst"),"."),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n - db@db.src: mysql\n - db@db.dst: mysql\n\n\n\n\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Interpretation"',title:'"Interpretation"'},"db:\n  src:\n    host: localhost\n    port: 3306\n  dst:\n    host: localhost\n    port: 3306\n")))),(0,i.mdx)("h3",{id:"history-and-future-of-the-package-directive"},"History and future of the package directive"),(0,i.mdx)("p",null,"The primary config, named in ",(0,i.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," should not have a package directive."),(0,i.mdx)("p",null,"For config files in config groups the default depends on the version:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In ",(0,i.mdx)("strong",{parentName:"li"},"Hydra 0.11"),", there was an implicit default of ",(0,i.mdx)("inlineCode",{parentName:"li"},"_global_")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Hydra 1.0")," the default is ",(0,i.mdx)("inlineCode",{parentName:"li"},"_global_"),(0,i.mdx)("br",{parentName:"li"}),"A warning is issued for each ",(0,i.mdx)("strong",{parentName:"li"},"config group file")," without a ",(0,i.mdx)("inlineCode",{parentName:"li"},"@package")," directive."),(0,i.mdx)("li",{parentName:"ul"},"In ",(0,i.mdx)("strong",{parentName:"li"},"Hydra 1.1")," the default for ",(0,i.mdx)("strong",{parentName:"li"},"config group files")," will become ",(0,i.mdx)("inlineCode",{parentName:"li"},"_group_"))),(0,i.mdx)("p",null,"By adding an explicit ",(0,i.mdx)("inlineCode",{parentName:"p"},"@package")," to your configs files, you guarantee that they",(0,i.mdx)("br",{parentName:"p"}),"\n","will not break when you upgrade to Hydra 1.1."))}s.isMDXComponent=!0}}]);