"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2125],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return p},T:function(){return c}});var r=n(7462),i=n(7294),a=n(6742),o=n(2263),l=n(907);function p(e){return i.createElement(a.Z,(0,r.Z)({},e,{to:(t=e.to,p=(0,l.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==p?void 0:p.name)?n:"current"]+t),target:"_blank"}));var t,n,p}function c(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return i.createElement(p,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},3065:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(3899),l=["components"],p={id:"simple_cli",title:"A simple command-line application"},c=void 0,s={unversionedId:"tutorials/basic/your_first_app/simple_cli",id:"version-1.0/tutorials/basic/your_first_app/simple_cli",isDocsHomePage:!1,title:"A simple command-line application",description:"This is a simple Hydra application that prints your configuration.",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/1_simple_cli.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/simple_cli",permalink:"/docs/1.0/tutorials/basic/your_first_app/simple_cli",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/1_simple_cli.md",tags:[],version:"1.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1642633564,formattedLastUpdatedAt:"1/19/2022",sidebarPosition:1,frontMatter:{id:"simple_cli",title:"A simple command-line application"},sidebar:"version-1.0/docs",previous:{title:"Tutorials intro",permalink:"/docs/1.0/tutorials/intro"},next:{title:"Specifying a config file",permalink:"/docs/1.0/tutorials/basic/your_first_app/config_file"}},u=[],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.T,{to:"examples/tutorials/basic/your_first_hydra_app/1_simple_cli/my_app.py",mdxType:"ExampleGithubLink"}),(0,a.kt)("p",null,"This is a simple Hydra application that prints your configuration.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"my_app")," function is a place holder for your code.\nWe will slowly evolve this example to showcase more Hydra features."),(0,a.kt)("p",null,"The examples in this tutorial are available ",(0,a.kt)(o.Z,{to:"examples/tutorials/basic",mdxType:"GithubLink"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'from omegaconf import DictConfig, OmegaConf\nimport hydra\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,a.kt)("p",null,"In this example, Hydra creates an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"cfg")," object and pass it to the function annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@hydra.main"),"."),(0,a.kt)("p",null,"You can add config values via the command line. The ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," indicates that the field is new."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db.driver=mysql +db.user=omry +db.password=secret\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/advanced/hydra-command-line-flags"},"Hydra's command line flags")," and\n",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/advanced/override_grammar/basic"},"Basic Override Syntax")," for more information about the command line."))}d.isMDXComponent=!0}}]);