(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3437],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=l(n),m=o,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return s},T:function(){return l}});var r=n(2122),o=n(7294),a=n(6742),i=n(2263),p=n(907);function s(e){return o.createElement(a.Z,(0,r.Z)({},e,{to:(t=e.to,s=(0,p.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function l(e){var t,n=null!=(t=e.text)?t:"Example";return o.createElement(s,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},2393:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(3899),p=["components"],s={id:"config_groups",title:"Grouping config files"},l=void 0,u={unversionedId:"tutorials/basic/your_first_app/config_groups",id:"version-1.0/tutorials/basic/your_first_app/config_groups",isDocsHomePage:!1,title:"Grouping config files",description:"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups.",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/4_config_groups.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/config_groups",permalink:"/docs/1.0/tutorials/basic/your_first_app/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/4_config_groups.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1630600937,formattedLastUpdatedAt:"9/2/2021",sidebarPosition:4,frontMatter:{id:"config_groups",title:"Grouping config files"},sidebar:"version-1.0/docs",previous:{title:"Using the config object",permalink:"/docs/1.0/tutorials/basic/your_first_app/using_config"},next:{title:"Selecting defaults for config groups",permalink:"/docs/1.0/tutorials/basic/your_first_app/defaults"}},c=[{value:"Using config groups",id:"using-config-groups",children:[]},{value:"More advanced usages of config groups",id:"more-advanced-usages-of-config-groups",children:[]}],g={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.T,{to:"examples/tutorials/basic/your_first_hydra_app/4_config_groups",mdxType:"ExampleGithubLink"}),(0,a.kt)("p",null,"Suppose you want to benchmark your application on each of PostgreSQL and MySQL. To do this, use config groups. "),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Config Group"))," is a named group with a set of valid options."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The config options are mutually exclusive. Only one can be selected."),(0,a.kt)("li",{parentName:"ul"},"Selecting a non-existent config option generates an error message with the valid options.")),(0,a.kt)("p",null,"To create a config group, create a directory. e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," to hold a file for each database configuration option.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration files\ninto a ",(0,a.kt)("inlineCode",{parentName:"p"},"conf")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory layout"',title:'"Directory','layout"':!0},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 db\n\u2502\xa0\xa0     \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\ndriver: mysql\nuser: omry\npassword: secret\n")),(0,a.kt)("p",null,"The config group determines the ",(0,a.kt)("inlineCode",{parentName:"p"},"package")," of the config content inside the final config object.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Interpretation of db/mysql.yaml" {1}',title:'"Interpretation',of:!0,'db/mysql.yaml"':!0,"{1}":!0},"db:\n  driver: mysql\n  user: omry\n  password: secret \n")),(0,a.kt)("p",null,"In Hydra 1.1 ",(0,a.kt)("inlineCode",{parentName:"p"},"_group_")," will become the default package.",(0,a.kt)("br",{parentName:"p"}),"\n","For now, add ",(0,a.kt)("inlineCode",{parentName:"p"},"# @package _group_")," at the top of your config group files.",(0,a.kt)("br",{parentName:"p"}),"\n","Learn more about packages directive ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/advanced/overriding_packages"},"here"),". "),(0,a.kt)("h3",{id:"using-config-groups"},"Using config groups"),(0,a.kt)("p",null,"Since we moved all the configs into the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf")," directory, we need to tell Hydra where to find them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"config_path")," parameter.\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"config_path")," is a directory relative to ",(0,a.kt)("inlineCode",{parentName:"strong"},"my_app.py")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {1}',title:'"my_app.py"',"{1}":!0},'@hydra.main(config_path="conf")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"my_app.py")," without requesting a configuration will print an empty config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\n{}\n")),(0,a.kt)("p",null,"You can append an item a config group to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Defaults List"),".",(0,a.kt)("br",{parentName:"p"}),"\n","The ",(0,a.kt)("inlineCode",{parentName:"p"},"Defaults List")," is described on the next page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\n")),(0,a.kt)("p",null,"Like before, you can still override individual values in the resulting config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),(0,a.kt)("h3",{id:"more-advanced-usages-of-config-groups"},"More advanced usages of config groups"),(0,a.kt)("p",null,"Config groups can be nested. For example the config group ",(0,a.kt)("inlineCode",{parentName:"p"},"db/mysql/storage_engine")," can contain ",(0,a.kt)("inlineCode",{parentName:"p"},"innodb.yaml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"myisam.yaml"),".\nWhen selecting an option from a nested config group, use ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ python my_app.py +db=mysql +db/mysql/storage_engine=innodb\ndb:\n  driver: mysql\n  user: omry\n  password: secret \n  mysql:\n    storage_engine:\n      innodb_data_file_path: /var/lib/mysql/ibdata1\n      max_file_size: 1G\n")),(0,a.kt)("p",null,"This simple example also demonstrated a very powerful feature of Hydra:\nYou can compose your configuration object from multiple configuration groups."))}m.isMDXComponent=!0}}]);