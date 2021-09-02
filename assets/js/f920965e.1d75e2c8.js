(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2109],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3899:function(e,n,t){"use strict";t.d(n,{Z:function(){return s},T:function(){return u}});var r=t(2122),a=t(7294),o=t(6742),i=t(2263),l=t(907);function s(e){return a.createElement(o.Z,(0,r.Z)({},e,{to:(n=e.to,s=(0,l.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==s?void 0:s.name)?t:"current"]+n),target:"_blank"}));var n,t,s}function u(e){var n,t=null!=(n=e.text)?n:"Example";return a.createElement(s,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}},5684:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=t(3899),l=["components"],s={id:"intro",title:"Overview",sidebar_label:"Introduction"},u=void 0,c={unversionedId:"configure_hydra/intro",id:"version-1.1/configure_hydra/intro",isDocsHomePage:!1,title:"Overview",description:"Hydra is highly configurable. Many of its aspects and subsystems can be configured, including:",source:"@site/versioned_docs/version-1.1/configure_hydra/Intro.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/intro",permalink:"/docs/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/configure_hydra/Intro.md",version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1630600937,formattedLastUpdatedAt:"9/2/2021",frontMatter:{id:"intro",title:"Overview",sidebar_label:"Introduction"},sidebar:"version-1.1/docs",previous:{title:"Read-only config",permalink:"/docs/patterns/write_protect_config_node"},next:{title:"Job Configuration",permalink:"/docs/configure_hydra/job"}},d=[{value:"Accessing the Hydra config",id:"accessing-the-hydra-config",children:[{value:"hydra.job:",id:"hydrajob",children:[]},{value:"hydra.runtime:",id:"hydraruntime",children:[]},{value:"Resolvers provided by Hydra",id:"resolvers-provided-by-hydra",children:[]}]}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hydra is highly configurable. Many of its aspects and subsystems can be configured, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Launcher"),(0,o.kt)("li",{parentName:"ul"},"The Sweeper"),(0,o.kt)("li",{parentName:"ul"},"Logging"),(0,o.kt)("li",{parentName:"ul"},"Output directory patterns"),(0,o.kt)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),(0,o.kt)("p",null,"The Hydra config can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),(0,o.kt)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/config"',title:'"hydra/config"'},"defaults:\n  - job_logging : default     # Job's logging config\n  - launcher: basic           # Launcher config\n  - sweeper: basic            # Sweeper config\n  - output: default           # Output directory\n")),(0,o.kt)("p",null,"You can view the Hydra config structure ",(0,o.kt)(i.Z,{to:"hydra/conf/__init__.py",mdxType:"GithubLink"},"here"),"."),(0,o.kt)("p",null,"You can view the Hydra config using ",(0,o.kt)("inlineCode",{parentName:"p"},"--cfg hydra"),":"),(0,o.kt)("details",null,(0,o.kt)("summary",null," $ python my_app.p ",(0,o.kt)("b",null,"--cfg hydra")," (Click to expand)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n  sweep:\n    dir: multirun/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${hydra.job.num}\n  launcher:\n    _target_: hydra._internal.core_plugins.basic_launcher.BasicLauncher\n  sweeper:\n    _target_: hydra._internal.core_plugins.basic_sweeper.BasicSweeper\n    max_batch_size: null\n  hydra_logging:\n    version: 1\n    formatters:\n    ...\n"))),(0,o.kt)("h2",{id:"accessing-the-hydra-config"},"Accessing the Hydra config"),(0,o.kt)("p",null,"The Hydra config is large. To reduce clutter in your own config it's being deleted from the config object\nHydra is passing to the function annotated by ",(0,o.kt)("inlineCode",{parentName:"p"},"@hydra.main()"),"."),(0,o.kt)("p",null,"There are two ways to access the Hydra config:"),(0,o.kt)("h4",{id:"in-your-config-using-the-hydra-resolver"},"In your config, using the ",(0,o.kt)("inlineCode",{parentName:"h4"},"hydra")," resolver:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"config_name: ${hydra:job.name}\n")),(0,o.kt)("p",null,"Pay close attention to the syntax: The resolver name is ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is passed after the colon."),(0,o.kt)("h4",{id:"in-your-code-using-the-hydraconfig-singleton"},"In your code, using the HydraConfig singleton."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from hydra.core.hydra_config import HydraConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print(HydraConfig.get().job.name)\n")),(0,o.kt)("p",null,"The following variables are populated at runtime.  "),(0,o.kt)("h3",{id:"hydrajob"},"hydra.job:"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"hydra.job")," node is used for configuring some aspects of your job.\nBelow is a short summary of the fields in ",(0,o.kt)("strong",{parentName:"p"},"hydra.job"),".\nYou can find more details in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure_hydra/job"},"Job Configuration")," page."),(0,o.kt)("p",null,"Fields under ",(0,o.kt)("strong",{parentName:"p"},"hydra.job"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," : Job name, defaults to the Python file name without the suffix. can be overridden."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"override_dirname")," : Pathname derived from the overrides for this job"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"id")," : Job ID in the underlying jobs system (SLURM etc)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"num")," : job serial number in sweep"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"config_name")," : The name of the config used by the job (Output only)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"env_set"),": Environment variable to set for the launched job"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"env_copy"),": Environment variable to copy from the launching machine"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"config"),": fine-grained configuration for job")),(0,o.kt)("h3",{id:"hydraruntime"},"hydra.runtime:"),(0,o.kt)("p",null,"Fields under ",(0,o.kt)("strong",{parentName:"p"},"hydra.runtime")," are populated automatically and should not be overridden."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"version"),": Hydra's version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cwd"),": Original working directory the app was executed from"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"choices"),": A dictionary containing the final config group choices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"config_sources"),": The final list of config sources used to compose the config.")),(0,o.kt)("h3",{id:"resolvers-provided-by-hydra"},"Resolvers provided by Hydra"),(0,o.kt)("p",null,"Hydra provides the following ",(0,o.kt)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#resolvers"},"OmegaConf resolvers")," by default."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"hydra"),": Interpolates into the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra")," config node. e.g. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"${hydra:job.name}")," to get the Hydra job name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"now"),": Creates a string representing the current time using\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior"},"strftime"),".\ne.g. for formatting the time you can use something like",(0,o.kt)("inlineCode",{parentName:"p"},"${now:%H-%M-%S}"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"python_version"),": Return a string representing the runtime python version by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"sys.version_info"),".\nTakes an optional argument of a string with the values major, minor or macro.\ne.g:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"default: ${python_version:}          # 3.8\nmajor:   ${python_version:major}     # 3\nminor:   ${python_version:minor}     # 3.8\nmicro:   ${python_version:micro}     # 3.8.2\n")),(0,o.kt)("p",null,"You can learn more about OmegaConf ",(0,o.kt)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"here"),"."))}m.isMDXComponent=!0}}]);