"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3720],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return g},useMDXComponents:function(){return f},withMDXComponents:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){return function(t){var n=f(t.components);return r.createElement(e,o({},t,{components:n}))}},f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=f(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"config_files",title:"Config files example",sidebar_label:"Config files example"},l=void 0,c={unversionedId:"patterns/instantiate_objects/config_files",id:"version-1.0/patterns/instantiate_objects/config_files",title:"Config files example",description:"Example application",source:"@site/versioned_docs/version-1.0/patterns/instantiate_objects/config_files.md",sourceDirName:"patterns/instantiate_objects",slug:"/patterns/instantiate_objects/config_files",permalink:"/docs/1.0/patterns/instantiate_objects/config_files",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/patterns/instantiate_objects/config_files.md",tags:[],version:"1.0",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1651881627,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"config_files",title:"Config files example",sidebar_label:"Config files example"},sidebar:"version-1.0/docs",previous:{title:"Overview",permalink:"/docs/1.0/patterns/instantiate_objects/overview"},next:{title:"Structured Configs example",permalink:"/docs/1.0/patterns/instantiate_objects/structured_config"}},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/patterns/instantiate_objects"},(0,o.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,o.mdx)("p",null,"This example demonstrates the use of config files to instantiated objects."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'class DBConnection:\n    def connect(self):\n        ...\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n\n    def connect(self) -> None:\n        print(f"MySQL connecting to {self.host}")\n\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str, database: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n        self.database = database\n\n    def connect(self) -> None:\n        print(f"PostgreSQL connecting to {self.host}")\n')),(0,o.mdx)("p",null,"To support this, we can have a parallel config structure:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),(0,o.mdx)("p",null,"Config files:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\n_target_: my_app.MySQLConnection\nhost: localhost\nuser: root\npassword: 1234\n\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml"',title:'"db/postgresql.yaml"'},"# @package _group_\n_target_: my_app.PostgreSQLConnection\nhost: localhost\nuser: root\npassword: 1234\ndatabase: tutorial\n")))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),(0,o.mdx)("p",null,"With this, you can instantiate the object from the configuration with a single line of code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg):\n    connection = hydra.utils.instantiate(cfg.db)\n    connection.connect()\n')))}m.isMDXComponent=!0}}]);