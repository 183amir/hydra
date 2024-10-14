"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8252],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49595:(e,t,n)=>{n.d(t,{A:()=>l,C:()=>c});var a=n(58168),r=n(96540),o=n(75489),s=n(44586),i=n(74098);function l(e){return r.createElement(o.default,(0,a.A)({},e,{to:(t=e.to,l=(0,i.useActiveVersion)(),(0,s.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function c(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return r.createElement(l,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},57509:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(58168),r=n(98587),o=(n(96540),n(15680)),s=n(49595),i=["components"],l={id:"config_files",title:"Config files example",sidebar_label:"Config files example"},c=void 0,d={unversionedId:"advanced/instantiate_objects/config_files",id:"version-1.1/advanced/instantiate_objects/config_files",title:"Config files example",description:"This example demonstrates the use of config files to instantiated objects.",source:"@site/versioned_docs/version-1.1/advanced/instantiate_objects/config_files.md",sourceDirName:"advanced/instantiate_objects",slug:"/advanced/instantiate_objects/config_files",permalink:"/docs/1.1/advanced/instantiate_objects/config_files",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/instantiate_objects/config_files.md",tags:[],version:"1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728940470,formattedLastUpdatedAt:"10/14/2024",frontMatter:{id:"config_files",title:"Config files example",sidebar_label:"Config files example"},sidebar:"version-1.1/docs",previous:{title:"Overview",permalink:"/docs/1.1/advanced/instantiate_objects/overview"},next:{title:"Structured Configs example",permalink:"/docs/1.1/advanced/instantiate_objects/structured_config"}},p=[],f={toc:p};function m(e){var t=e.components,n=(0,r.A)(e,i);return(0,o.mdx)("wrapper",(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(s.C,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"This example demonstrates the use of config files to instantiated objects."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'class DBConnection:\n    def connect(self):\n        ...\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n\n    def connect(self) -> None:\n        print(f"MySQL connecting to {self.host}")\n\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str, database: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n        self.database = database\n\n    def connect(self) -> None:\n        print(f"PostgreSQL connecting to {self.host}")\n')),(0,o.mdx)("p",null,"To support this, we can have a parallel config structure:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),(0,o.mdx)("p",null,"Config files:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"_target_: my_app.MySQLConnection\nhost: localhost\nuser: root\npassword: 1234\n\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml"',title:'"db/postgresql.yaml"'},"_target_: my_app.PostgreSQLConnection\nhost: localhost\nuser: root\npassword: 1234\ndatabase: tutorial\n")))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),(0,o.mdx)("p",null,"With this, you can instantiate the object from the configuration with a single line of code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg):\n    connection = hydra.utils.instantiate(cfg.db)\n    connection.connect()\n')))}m.isMDXComponent=!0}}]);