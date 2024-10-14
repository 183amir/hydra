"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4417],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){return function(n){var t=p(n.components);return a.createElement(e,i({},n,{components:t}))}},p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,s(s({ref:n},l),{},{components:t})):a.createElement(g,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49595:(e,n,t)=>{t.d(n,{A:()=>c,C:()=>l});var a=t(58168),o=t(96540),i=t(75489),r=t(44586),s=t(74098);function c(e){return o.createElement(i.default,(0,a.A)({},e,{to:(n=e.to,c=(0,s.useActiveVersion)(),(0,r.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==c?void 0:c.name)?t:"current"]+n),target:"_blank"}));var n,t,c}function l(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(c,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},20674:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=t(58168),o=t(98587),i=(t(96540),t(15680)),r=t(49595),s=["components"],c={id:"config_groups",title:"Config Groups"},l=void 0,d={unversionedId:"tutorials/structured_config/config_groups",id:"version-1.3/tutorials/structured_config/config_groups",title:"Config Groups",description:"Structured Configs can be used to implement config groups. Special care needs to be taken when specifying a",source:"@site/versioned_docs/version-1.3/tutorials/structured_config/3_config_groups.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/config_groups",permalink:"/docs/1.3/tutorials/structured_config/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/tutorials/structured_config/3_config_groups.md",tags:[],version:"1.3",lastUpdatedBy:"jesszzzz",lastUpdatedAt:1728927266,formattedLastUpdatedAt:"10/14/2024",sidebarPosition:3,frontMatter:{id:"config_groups",title:"Config Groups"},sidebar:"docs",previous:{title:"A hierarchical static configuration",permalink:"/docs/1.3/tutorials/structured_config/hierarchical_static_config"},next:{title:"Defaults List",permalink:"/docs/1.3/tutorials/structured_config/defaults"}},p=[{value:"Config inheritance",id:"config-inheritance",children:[],level:3},{value:"Missing fields",id:"missing-fields",children:[],level:3}],m={toc:p};function u(e){var n=e.components,t=(0,o.A)(e,s);return(0,i.mdx)("wrapper",(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(r.C,{to:"examples/tutorials/structured_configs/3_config_groups/my_app.py",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"Structured Configs can be used to implement config groups. Special care needs to be taken when specifying a\ndefault value for fields populated by a config group. We will look at why below."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Defining a config group for database" {16-17,22-23}',title:'"Defining',a:!0,config:!0,group:!0,for:!0,'database"':!0,"{16-17,22-23}":!0},'from dataclasses import dataclass\n\nimport hydra\nfrom hydra.core.config_store import ConfigStore\n\n@dataclass\nclass MySQLConfig:\n    driver: str = "mysql"\n    host: str = "localhost"\n    port: int = 3306\n\n@dataclass\nclass PostGreSQLConfig:\n    driver: str = "postgresql"\n    host: str = "localhost"\n    port: int = 5432\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # We will populate db using composition.\n    db: Any\n\n# Create config group `db` with options \'mysql\' and \'postgreqsl\'\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n@hydra.main(version_base=None, config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The ",(0,i.mdx)("em",{parentName:"p"},"Config")," class is ",(0,i.mdx)("strong",{parentName:"p"},"NOT")," the Defaults list. We will see the Defaults list in the next page."))),(0,i.mdx)("p",null,"You can select the database from the command line:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  host: localhost\n  password: drowssap\n  port: 5432\n  timeout: 10\n  user: postgres_user\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"+")," above is required because there is no default choice for the config group ",(0,i.mdx)("inlineCode",{parentName:"p"},"db"),".\nThe next page will reintroduce the Defaults List, eliminating the need for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"+"),"."),(0,i.mdx)("h3",{id:"config-inheritance"},"Config inheritance"),(0,i.mdx)(r.C,{to:"examples/tutorials/structured_configs/3_config_groups/my_app_with_inheritance.py",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"Standard Python inheritance can be used to get improved type safety, and to move common fields to the parent class."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Defining a config group for database using inheritance"',title:'"Defining',a:!0,config:!0,group:!0,for:!0,database:!0,using:!0,'inheritance"':!0},'from omegaconf import MISSING\n\n@dataclass\nclass DBConfig:\n    host: str = "localhost"\n    port: int = MISSING\n    driver: str = MISSING\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    port: int = 5432\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # We can now annotate db as DBConfig which\n    # improves both static and dynamic type safety.\n    db: DBConfig\n')),(0,i.mdx)("h3",{id:"missing-fields"},"Missing fields"),(0,i.mdx)("p",null,"Assign ",(0,i.mdx)("em",{parentName:"p"},"MISSING")," to a field to indicates that it does not have a default value. This is equivalent to\nthe ",(0,i.mdx)("inlineCode",{parentName:"p"},"???")," literal we have seen in OmegaConf configs before."),(0,i.mdx)("p",null,"Omitting a default value is equivalent to assigning ",(0,i.mdx)("em",{parentName:"p"},"MISSING")," to it, although it is sometimes\nconvenient to be able to assign MISSING it to a field."),(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Do not confuse ",(0,i.mdx)("strong",{parentName:"p"},"omegaconf.MISSING")," with ",(0,i.mdx)("strong",{parentName:"p"},"dataclass.MISSING"),"."))))}u.isMDXComponent=!0}}]);