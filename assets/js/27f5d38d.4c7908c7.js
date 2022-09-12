"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[504],{3905:function(e,r,t){t.r(r),t.d(r,{MDXContext:function(){return d},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),c=function(e){return function(r){var t=p(r.components);return n.createElement(e,i({},r,{components:t}))}},p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,y=c["".concat(a,".").concat(m)]||c[m]||s[m]||i;return t?n.createElement(y,l(l({ref:r},d),{},{components:t})):n.createElement(y,l({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6417:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},u=void 0,d={unversionedId:"tutorial/working_directory",id:"version-0.11/tutorial/working_directory",title:"Output/Working directory",description:"Hydra solves the problem of your needing to specify a new output directory for each run, by",source:"@site/versioned_docs/version-0.11/tutorial/8_working_directory.md",sourceDirName:"tutorial",slug:"/tutorial/working_directory",permalink:"/docs/0.11/tutorial/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/8_working_directory.md",tags:[],version:"0.11",lastUpdatedBy:"Jasha10",lastUpdatedAt:1662993221,formattedLastUpdatedAt:"9/12/2022",sidebarPosition:8,frontMatter:{id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},sidebar:"version-0.11/docs",previous:{title:"Tab completion",permalink:"/docs/0.11/tutorial/tab_completion"},next:{title:"Logging",permalink:"/docs/0.11/tutorial/logging"}},c=[{value:"Original working directory",id:"original-working-directory",children:[],level:3}],p={toc:c};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that directory."),(0,i.mdx)("p",null,"The working directory is used to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),(0,i.mdx)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),(0,i.mdx)("p",null,"Every time you run the app, a new working directory is automatically created:"),(0,i.mdx)("p",null,"Python file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_app.py")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import os\n\n@hydra.main()\ndef my_app(_cfg):\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),(0,i.mdx)("p",null,"Let's take a look at one of those working directories:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),(0,i.mdx)("p",null,"We have the Hydra output directory (",(0,i.mdx)("inlineCode",{parentName:"p"},".hydra")," by default) and the application log file.\nInside the configuration output directory we have:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),(0,i.mdx)("p",null,"And in the main output directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),(0,i.mdx)("h3",{id:"original-working-directory"},"Original working directory"),(0,i.mdx)("p",null,"You can still access the original working directory if you need to:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import os\nimport hydra\nfrom hydra import utils\n\n@hydra.main()\ndef my_app(_cfg):\n    print("Current working directory  : {}".format(os.getcwd()))\n    print("Original working directory : {}".format(utils.get_original_cwd()))\n    print("to_absolute_path(\'foo\')    : {}".format(utils.to_absolute_path("foo")))\n    print("to_absolute_path(\'/foo\')   : {}".format(utils.to_absolute_path("/foo")))\n\n\n$ python examples/tutorial/8_working_directory/original_cwd.py\nCurrent working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path(\'foo\')    : /Users/omry/dev/hydra/foo\nto_absolute_path(\'/foo\')   : /foo\n')),(0,i.mdx)("p",null,"Working directory can be ",(0,i.mdx)("a",{parentName:"p",href:"/docs/0.11/configure_hydra/workdir"},"customized"),"."))}m.isMDXComponent=!0}}]);