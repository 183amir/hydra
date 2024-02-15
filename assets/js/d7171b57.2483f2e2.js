"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5353],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return f},mdx:function(){return g},useMDXComponents:function(){return s},withMDXComponents:function(){return c}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){return function(n){var t=s(n.components);return r.createElement(e,i({},n,{components:t}))}},s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),f=o,d=c["".concat(a,".").concat(f)]||c[f]||m[f]||i;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21382:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={id:"config_groups",title:"Config groups",sidebar_label:"Config groups"},l=void 0,u={unversionedId:"tutorial/config_groups",id:"version-0.11/tutorial/config_groups",title:"Config groups",description:"This is the most important concept in Hydra.",source:"@site/versioned_docs/version-0.11/tutorial/3_config_groups.md",sourceDirName:"tutorial",slug:"/tutorial/config_groups",permalink:"/docs/0.11/tutorial/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/3_config_groups.md",tags:[],version:"0.11",lastUpdatedBy:"Jasha Sommer-Simpson",lastUpdatedAt:1708023691,formattedLastUpdatedAt:"2/15/2024",sidebarPosition:3,frontMatter:{id:"config_groups",title:"Config groups",sidebar_label:"Config groups"},sidebar:"version-0.11/docs",previous:{title:"Configuration file",permalink:"/docs/0.11/tutorial/config_file"},next:{title:"Defaults",permalink:"/docs/0.11/tutorial/defaults"}},c=[],s={toc:c};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This is the most important concept in Hydra."),(0,i.mdx)("p",null,"Suppose you want to benchmark PostgreSQL and MySQL for your application.\nWhen running of the application, you will need either MySQL or PostgreSQL - but not both."),(0,i.mdx)("p",null,"The way to do this with Hydra is with a ",(0,i.mdx)("strong",{parentName:"p"},"Config group"),".\nA config group is a mutually exclusive set of configuration files."),(0,i.mdx)("p",null,"To create a config group, create a directory - ",(0,i.mdx)("inlineCode",{parentName:"p"},"db")," - that will hold\na file for each database configuration alternative.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration\nfiles into a ",(0,i.mdx)("inlineCode",{parentName:"p"},"conf")," directory."),(0,i.mdx)("p",null,"Python file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_app.py")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf")\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n')),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"config_path")," can specify your config file as in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/0.11/tutorial/simple_cli"},"previous command line example"),", or the root directory for your configuration files.\nIf a config file is specified, its directory is the root directory."),(0,i.mdx)("p",null,"The directory structure of our application now looks like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 db\n\u2502\xa0\xa0     \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,i.mdx)("p",null,"If you run it, it prints an empty config because no configuration was specified."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\n{}\n")),(0,i.mdx)("p",null,"You can now choose which database configuration to use from the command line:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\n")),(0,i.mdx)("p",null,"Like before, you can still override individual values in the resulting config:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),(0,i.mdx)("p",null,"This simple example demonstrated a very powerful feature of Hydra:\nYou can compose your configuration object from multiple configuration files."))}f.isMDXComponent=!0}}]);