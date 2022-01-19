"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1642],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=o(n),h=a,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return p},T:function(){return o}});var r=n(7462),a=n(7294),i=n(6742),l=n(2263),u=n(907);function p(e){return a.createElement(i.Z,(0,r.Z)({},e,{to:(t=e.to,p=(0,u.zu)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==p?void 0:p.name)?n:"current"]+t),target:"_blank"}));var t,n,p}function o(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return a.createElement(p,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},6059:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(3899),u=["components"],p={id:"submitit_launcher",title:"Submitit Launcher plugin",sidebar_label:"Submitit Launcher plugin"},o=void 0,s={unversionedId:"plugins/submitit_launcher",id:"version-1.1/plugins/submitit_launcher",isDocsHomePage:!1,title:"Submitit Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.1/plugins/submitit_launcher.md",sourceDirName:"plugins",slug:"/plugins/submitit_launcher",permalink:"/docs/plugins/submitit_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/plugins/submitit_launcher.md",tags:[],version:"1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1642633564,formattedLastUpdatedAt:"1/19/2022",frontMatter:{id:"submitit_launcher",title:"Submitit Launcher plugin",sidebar_label:"Submitit Launcher plugin"},sidebar:"version-1.1/docs",previous:{title:"RQ Launcher plugin",permalink:"/docs/plugins/rq_launcher"},next:{title:"Ax Sweeper plugin",permalink:"/docs/plugins/ax_sweeper"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],m={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/hydra-submitit-launcher/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-submitit-launcher",alt:"PyPI"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-submitit-launcher",alt:"PyPI - License"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-submitit-launcher",alt:"PyPI - Python Version"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-submitit-launcher"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-submitit-launcher.svg",alt:"PyPI - Downloads"})),(0,i.kt)(l.T,{text:"Example application",to:"plugins/hydra_submitit_launcher/examples",mdxType:"ExampleGithubLink"}),(0,i.kt)(l.T,{text:"Plugin source",to:"plugins/hydra_submitit_launcher",mdxType:"ExampleGithubLink"})),(0,i.kt)("p",null,"The Submitit Launcher plugin provides a ",(0,i.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/documentation.html"},"SLURM")," Launcher based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/submitit"},"Submitit"),"."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-submitit-launcher --upgrade\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once installed, add ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_slurm")," to your command line. Alternatively, override ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: submitit_slurm\n")),(0,i.kt)("p",null,"There are several standard approaches for configuring plugins. Check ",(0,i.kt)("a",{parentName:"p",href:"/docs/patterns/configuring_plugins"},"this page")," for more information.\nNote that this plugin expects a valid environment in the target host. Usually this means a shared file system between\nthe launching host and the target host."),(0,i.kt)("p",null,"The Submitit Plugin implements 2 different launchers: ",(0,i.kt)("inlineCode",{parentName:"p"},"submitit_slurm")," to run on a SLURM cluster, and ",(0,i.kt)("inlineCode",{parentName:"p"},"submitit_local")," for basic local tests."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Discover the SLURM Launcher parameters ",(0,i.kt)("b",null,"(Expand)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=submitit_slurm --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"submitit_slurm","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\nsubmitit_folder: $&#123;hydra.sweep.dir/.submitit/%j\ntimeout_min: 60\ncpus_per_task: null\ngpus_per_node: null\ntasks_per_node: 1\nmem_gb: null\nnodes: 1\nname: ${hydra.job.name}\n_target_: hydra_plugins.hydra_submitit_launcher.submitit_launcher.SlurmLauncher\npartition: null\ncomment: null\nconstraint: null\nexclude: null\ncpus_per_gpu: null\ngpus_per_task: null\nmem_per_gpu: null\nmem_per_cpu: null\nsignal_delay_s: 120\nmax_num_timeout: 0\nadditional_parameters: {}\narray_parallelism: 256\nsetup: null\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Discover the Local Launcher parameters ",(0,i.kt)("b",null,"(Expand)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python example/my_app.py hydra/launcher=submitit_local --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"example/my_app.py":!0,"hydra/launcher":"submitit_local","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_submitit_launcher.submitit_launcher.LocalLauncher\nsubmitit_folder: ${hydra.sweep.dir}/.submitit/%j\ntimeout_min: 60\ncpus_per_task: 1\ngpus_per_node: 0\ntasks_per_node: 1\nmem_gb: 4\nnodes: 1\nname: ${hydra.job.name}\n"))),(0,i.kt)("br",null),"You can set all these parameters in your configuration file and/or override them in the command-line:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"python foo.py --multirun hydra/launcher=submitit_slurm hydra.launcher.timeout_min=3\n")),(0,i.kt)("p",null,"For more details, including descriptions for each parameter, check out the ",(0,i.kt)(l.Z,{to:"plugins/hydra_submitit_launcher/hydra_plugins/hydra_submitit_launcher/config.py",mdxType:"GithubLink"},"config file"),".\nYou can also check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/submitit"},"Submitit documentation"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Caution"),": use of ",(0,i.kt)("inlineCode",{parentName:"p"},"--multirun")," is required for the launcher to be picked up."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"An ",(0,i.kt)(l.Z,{to:"plugins/hydra_submitit_launcher/example",mdxType:"GithubLink"},"example application")," using this launcher is provided in the plugin repository."),(0,i.kt)("p",null,"Starting the app with ",(0,i.kt)("inlineCode",{parentName:"p"},"python my_app.py task=1,2,3 --multirun")," (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/basic/running_your_app/multi-run"},"Multi-run")," for details) will launch 3 executions (you can override the launcher to run locally for testing by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_local"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py task=1,2,3 --multirun\n[HYDRA] Sweep output dir : multirun/2020-05-28/15-05-22\n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n")),(0,i.kt)("p",null,"You will be able to see the output of the app in the output dir:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"$ tree\n.\n\u251c\u2500\u2500 0\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 1\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 2\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u2514\u2500\u2500 multirun.yaml\n\n$ cat 0/my_app.log \n[2020-05-28 15:05:23,511][__main__][INFO] - Process ID 15887 executing task 1 ...\n[2020-05-28 15:05:24,514][submitit][INFO] - Job completed successfully\n")))}h.isMDXComponent=!0}}]);