"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1958],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return g},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=r.createContext({}),p=function(e){return function(n){var t=s(n.components);return r.createElement(e,i({},n,{components:t}))}},s=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(g.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,m=p["".concat(a,".").concat(d)]||p[d]||c[d]||i;return t?r.createElement(m,l(l({ref:n},g),{},{components:t})):r.createElement(m,l({ref:n},g))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=t[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return u},T:function(){return g}});var r=t(87462),o=t(67294),i=t(39960),a=t(52263),l=t(80907);function u(e){return o.createElement(i.default,(0,r.Z)({},e,{to:(n=e.to,u=(0,l.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==u?void 0:u.name)?t:"current"]+n),target:"_blank"}));var n,t,u}function g(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(u,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},93481:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return g},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=t(93899),l=["components"],u={id:"logging",title:"Logging",sidebar_label:"Logging"},g=void 0,p={unversionedId:"tutorials/basic/running_your_app/logging",id:"version-1.0/tutorials/basic/running_your_app/logging",title:"Logging",description:"People often do not use Python logging due to the setup cost.",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/4_logging.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/logging",permalink:"/docs/1.0/tutorials/basic/running_your_app/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/4_logging.md",tags:[],version:"1.0",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1651881627,formattedLastUpdatedAt:"5/7/2022",sidebarPosition:4,frontMatter:{id:"logging",title:"Logging",sidebar_label:"Logging"},sidebar:"version-1.0/docs",previous:{title:"Output/Working directory",permalink:"/docs/1.0/tutorials/basic/running_your_app/working_directory"},next:{title:"Debugging",permalink:"/docs/1.0/tutorials/basic/running_your_app/debugging"}},s=[],d={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(a.T,{to:"examples/tutorials/basic/running_your_hydra_app/4_logging/my_app.py",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves that by configuring the Python logging for you."),(0,i.mdx)("p",null,"By default Hydra logs at the INFO level to both the console and a log file in the automatic working directory."),(0,i.mdx)("p",null,"Example of logging with Hydra:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import logging\nfrom omegaconf import DictConfig\nimport hydra\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    log.info("Info level message")\n    log.debug("Debug level message")\n\nif __name__ == "__main__":\n    my_app()\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),(0,i.mdx)("p",null,"You can enable DEBUG level logging from the command line  by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.verbose"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.verbose")," can be a Boolean, a String or a List:"),(0,i.mdx)("p",null,"Examples:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=true")," : Sets the log level of ",(0,i.mdx)("strong",{parentName:"li"},"all")," loggers to ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEBUG")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=NAME")," : Sets the log level of the logger ",(0,i.mdx)("inlineCode",{parentName:"li"},"NAME")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEBUG")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=[NAME1,NAME2]"),": Sets the log level of the loggers ",(0,i.mdx)("inlineCode",{parentName:"li"},"NAME1")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"NAME2")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEBUG"))),(0,i.mdx)("p",null,"Example output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=[__main__,hydra]\n[2019-09-29 13:06:00,880] - Installed Hydra Plugins\n[2019-09-29 13:06:00,880] - ***********************\n...\n[2019-09-29 13:06:00,896][__main__][INFO] - Info level message\n[2019-09-29 13:06:00,896][__main__][DEBUG] - Debug level message\n")),(0,i.mdx)("p",null,"You can disable the logging output using by setting ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/job_logging")," to `disabled'   "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py hydra/job_logging=disabled\n<NO OUTPUT>\n")),(0,i.mdx)("p",null,"Logging can be ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.0/configure_hydra/logging"},"customized"),"."))}c.isMDXComponent=!0}}]);