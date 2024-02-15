"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4823],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return u},mdx:function(){return y},useMDXComponents:function(){return m},withMDXComponents:function(){return s}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){return function(n){var t=m(n.components);return r.createElement(e,a({},n,{components:t}))}},m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=m(t),u=o,d=s["".concat(i,".").concat(u)]||s[u]||f[u]||a;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return p},T:function(){return c}});var r=t(87462),o=t(67294),a=t(39960),i=t(52263),l=t(80907);function p(e){return o.createElement(a.default,(0,r.Z)({},e,{to:(n=e.to,p=(0,l.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==p?void 0:p.name)?t:"current"]+n),target:"_blank"}));var n,t,p}function c(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(p,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},35916:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=t(93899),l=["components"],p={id:"config_file",title:"Specifying a config file"},c=void 0,s={unversionedId:"tutorials/basic/your_first_app/config_file",id:"version-1.1/tutorials/basic/your_first_app/config_file",title:"Specifying a config file",description:"It can get tedious to type all those command line arguments.",source:"@site/versioned_docs/version-1.1/tutorials/basic/your_first_app/2_config_file.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/config_file",permalink:"/docs/1.1/tutorials/basic/your_first_app/config_file",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/basic/your_first_app/2_config_file.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha Sommer-Simpson",lastUpdatedAt:1708023691,formattedLastUpdatedAt:"2/15/2024",sidebarPosition:2,frontMatter:{id:"config_file",title:"Specifying a config file"},sidebar:"version-1.1/docs",previous:{title:"A simple command-line application",permalink:"/docs/1.1/tutorials/basic/your_first_app/simple_cli"},next:{title:"Using the config object",permalink:"/docs/1.1/tutorials/basic/your_first_app/using_config"}},m=[],u={toc:m};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(i.T,{to:"examples/tutorials/basic/your_first_hydra_app/2_config_file",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"It can get tedious to type all those command line arguments.\nYou can solve it by creating a configuration file next to my_app.py.\nHydra configuration files are yaml files and should have the .yaml file extension."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db: \n  driver: mysql\n  user: omry\n  password: secret\n")),(0,a.mdx)("p",null,"Specify the config name by passing a ",(0,a.mdx)("inlineCode",{parentName:"p"},"config_name")," parameter to the ",(0,a.mdx)("strong",{parentName:"p"},"@hydra.main()")," decorator.\nNote that you should omit the ",(0,a.mdx)("strong",{parentName:"p"},".yaml")," extension.\nHydra also needs to know where to find your config. Specify the directory containing it relative to the application by passing ",(0,a.mdx)("inlineCode",{parentName:"p"},"config_path"),": "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {4}',title:'"my_app.py"',"{4}":!0},'from omegaconf import DictConfig, OmegaConf\nimport hydra\n\n@hydra.main(config_path=".", config_name="config")\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),(0,a.mdx)("p",null,"You can override values in the loaded config from the command line.",(0,a.mdx)("br",{parentName:"p"}),"\n","Note the lack of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"+")," prefix."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-5}","{4-5}":!0},"$ python my_app.py db.user=root db.password=1234\ndb:\n  driver: mysql\n  user: root\n  password: 1234\n")),(0,a.mdx)("p",null,"Use ",(0,a.mdx)("inlineCode",{parentName:"p"},"++")," to override a config value if it's already in the config, or add it otherwise.\ne.g:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"# Override an existing item\n$ python my_app.py ++db.password=1234\n\n# Add a new item\n$ python my_app.py ++db.timeout=5\n")),(0,a.mdx)("p",null,"You can enable ",(0,a.mdx)("a",{parentName:"p",href:"/docs/1.1/tutorials/basic/running_your_app/tab_completion"},"tab completion")," for your Hydra applications."))}f.isMDXComponent=!0}}]);