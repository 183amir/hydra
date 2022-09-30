"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6328],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return u},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),m=function(e){return function(n){var r=s(n.components);return t.createElement(e,a({},n,{components:r}))}},s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=o,h=m["".concat(i,".").concat(c)]||m[c]||p[c]||a;return r?t.createElement(h,d(d({ref:n},u),{},{components:r})):t.createElement(h,d({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},97390:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],d={id:"intro",title:"Overview",sidebar_label:"Introduction"},l=void 0,u={unversionedId:"configure_hydra/intro",id:"version-1.0/configure_hydra/intro",title:"Overview",description:"Many things in Hydra can be customized. This includes:",source:"@site/versioned_docs/version-1.0/configure_hydra/Intro.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/intro",permalink:"/docs/1.0/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/configure_hydra/Intro.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1664558404,formattedLastUpdatedAt:"9/30/2022",frontMatter:{id:"intro",title:"Overview",sidebar_label:"Introduction"},sidebar:"version-1.0/docs",previous:{title:"Read-only config",permalink:"/docs/1.0/patterns/write_protect_config_node"},next:{title:"Job Configuration",permalink:"/docs/1.0/configure_hydra/job"}},m=[{value:"Runtime variables",id:"runtime-variables",children:[{value:"Hydra resolvers",id:"hydra-resolvers",children:[{value:"<code>now</code>",id:"now",children:[],level:4},{value:"<code>hydra</code>",id:"hydra",children:[],level:4},{value:"<code>python_version</code>",id:"python_version",children:[],level:4}],level:3}],level:2}],s={toc:m};function c(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Many things in Hydra can be customized. This includes:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Launcher configurations"),(0,a.mdx)("li",{parentName:"ul"},"Sweeper configuration"),(0,a.mdx)("li",{parentName:"ul"},"Logging configuration"),(0,a.mdx)("li",{parentName:"ul"},"Run and Multirun output directory patterns"),(0,a.mdx)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),(0,a.mdx)("p",null,"Hydra can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),(0,a.mdx)("p",null,"The Hydra configuration actually lives in the same config object as your configuration, but is removed prior to running\nyour function to reduce confusion.\nYou can view the configuration with ",(0,a.mdx)("inlineCode",{parentName:"p"},"--cfg hydra|job|all")),(0,a.mdx)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging : default     # Job's logging config\n  - hydra/launcher: basic           # Launcher config\n  - hydra/sweeper: basic            # Sweeper config\n  - hydra/output: default           # Output directory\n")),(0,a.mdx)("p",null,"You can view the Hydra config structure ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/hydra/conf"},"here"),"."),(0,a.mdx)("p",null,"This is a subset of the composed Hydra configuration node:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    # Output directory for normal runs\n    dir: ./outputs/${now:%Y-%m-%d_%H-%M-%S}\n  sweep:\n    # Output directory for sweep runs\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d_%H-%M-%S}\n    # Output sub directory for sweep runs.\n    subdir: ${hydra.job.num}_${hydra.job.id}\n")),(0,a.mdx)("h2",{id:"runtime-variables"},"Runtime variables"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra")," package is deleted from your config when the function runs to reduce the amount of noise\nin the config passed to the function.",(0,a.mdx)("br",{parentName:"p"}),"\n","You can still access all config nodes in Hydra through the custom resolver ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra"),". "),(0,a.mdx)("p",null,"For example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"config_name: ${hydra:job.config_name}\n")),(0,a.mdx)("p",null,"Pay close attention to the syntax: The resolver name is ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra"),", and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"key")," is passed after the colon."),(0,a.mdx)("p",null,"The following variables are some of the variables populated at runtime.",(0,a.mdx)("br",{parentName:"p"}),"\n","You can see the full Hydra config using ",(0,a.mdx)("inlineCode",{parentName:"p"},"--cfg hydra"),":"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"hydra.job"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"hydra.job.name")," : Job name, defaults to python file name without suffix. can be overridden."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"hydra.job.override_dirname")," : Pathname derived from the overrides for this job"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"hydra.job.num")," : job serial number in sweep"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"hydra.job.id")," : Job ID in the underlying jobs system (SLURM etc) ")),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"hydra.runtime"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"hydra.runtime.version"),": Hydra's version"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"hydra.runtime.cwd"),": Original working directory the app was executed from")),(0,a.mdx)("h3",{id:"hydra-resolvers"},"Hydra resolvers"),(0,a.mdx)("p",null,"Hydra supports ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/hydra/core/utils.py"},"several OmegaConf resolvers")," by default."),(0,a.mdx)("h4",{id:"now"},(0,a.mdx)("inlineCode",{parentName:"h4"},"now")),(0,a.mdx)("p",null,"Creates a string representing the current time using ",(0,a.mdx)("a",{parentName:"p",href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior"},"strftime"),".\nFor example, for formatting the time you can use something like",(0,a.mdx)("inlineCode",{parentName:"p"},"${now:%H-%M-%S}"),"."),(0,a.mdx)("h4",{id:"hydra"},(0,a.mdx)("inlineCode",{parentName:"h4"},"hydra")),(0,a.mdx)("p",null,"Interpolates into the ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra")," config node.\nFor example, use ",(0,a.mdx)("inlineCode",{parentName:"p"},"${hydra:job.name}")," to get the Hydra job name."),(0,a.mdx)("h4",{id:"python_version"},(0,a.mdx)("inlineCode",{parentName:"h4"},"python_version")),(0,a.mdx)("p",null,"Return a string representing the runtime python version by calling ",(0,a.mdx)("inlineCode",{parentName:"p"},"sys.version_info"),".\nYou can pass in a parameter to specify level of version returned. By default, the resolver returns the major and minor version."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"python_version: ${python_version:}                         # runtime python version, eg: 3.8\nmajor_version: ${python_version:major}                     # runtime python major version, eg: 3\nminor_version: ${python_version:minor}                     # runtime python version in the format major.minor, eg: 3.8\nmicro_version: ${python_version:micro}                     # runtime python version in the format major.minor.micro, eg: 3.8.2\n")),(0,a.mdx)("p",null,"You can learn more about OmegaConf ",(0,a.mdx)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"here"),"."))}c.isMDXComponent=!0}}]);