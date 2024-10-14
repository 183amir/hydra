"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7885],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69436:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(58168),o=n(96540),a=n(20053),l=n(68382);var i=n(21312),c=n(36888);const s={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var u=n(94785);const p=function(){var e=(0,c.useThemeConfig)().prism,t=(0,u.A)().isDarkTheme,n=e.theme||s,r=e.darkTheme||n;return t?r:n},d="codeBlockContainer_J+bg",f="codeBlockContent_csEI",m="codeBlockTitle_oQzk",y="codeBlock_rtdJ",A="copyButton_M3SB",g="codeBlockLines_1zSZ";function h(e){var t,n=e.children,s=e.className,u=e.metastring,h=e.title,b=(0,c.useThemeConfig)().prism,v=(0,o.useState)(!1),E=v[0],k=v[1],w=(0,o.useState)(!1),O=w[0],j=w[1];(0,o.useEffect)((function(){j(!0)}),[]);var C=(0,c.parseCodeBlockTitle)(u)||h,N=p(),T=Array.isArray(n)?n.join(""):n,P=null!=(t=(0,c.parseLanguage)(s))?t:b.defaultLanguage,B=(0,c.parseLines)(T,u,P),I=B.highlightLines,L=B.code,M=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}o.remove(),i&&(l.removeAllRanges(),l.addRange(i)),a&&a.focus()}(L),k(!0),setTimeout((function(){return k(!1)}),2e3)};return o.createElement(l.Ay,(0,r.A)({},l.Gs,{key:String(O),theme:N,code:L,language:P}),(function(e){var t=e.className,n=e.style,l=e.tokens,u=e.getLineProps,p=e.getTokenProps;return o.createElement("div",{className:(0,a.default)(d,s,c.ThemeClassNames.common.codeBlock)},C&&o.createElement("div",{style:n,className:m},C),o.createElement("div",{className:(0,a.default)(f,P)},o.createElement("pre",{tabIndex:0,className:(0,a.default)(t,y,"thin-scrollbar"),style:n},o.createElement("code",{className:g},l.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=u({line:e,key:t});return I.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.A)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,r.A)({key:t},p({token:e,key:t})))})),o.createElement("br",null))})))),o.createElement("button",{type:"button","aria-label":(0,i.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.default)(A,"clean-btn"),onClick:M},E?o.createElement(i.default,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(i.default,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},42508:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(58168),o=n(98587),a=n(96540),l=n(38895),i=n(75489),c=n(43463),s=n.n(c),u=n(20053),p=n(21312),d=n(36888);const f="anchorWithStickyNavbar_y2LR",m="anchorWithHideOnScrollNavbar_3ly5";var y=["id"],A=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,r.A)({},t,{id:void 0}),t.children))};const g=function(e){return"h1"===e?A:(t=e,function(e){var n,l=e.id,i=(0,o.A)(e,y),c=(0,d.useThemeConfig)().navbar.hideOnScroll;return l?a.createElement(t,(0,r.A)({},i,{className:(0,u.default)("anchor",(n={},n[m]=c,n[f]=!c,n)),id:l}),i.children,a.createElement("a",{className:"hash-link",href:"#"+l,title:(0,p.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,i)});var t},h="details_h+cY";function b(e){var t=Object.assign({},e);return a.createElement(d.Details,(0,r.A)({},t,{className:(0,u.default)("alert alert--info",h,t.className)}))}var v=["mdxType","originalType"];const E={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,o.A)(r,v));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(l.A,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(s(),e):a.createElement("code",e)},a:function(e){return a.createElement(i.default,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(s(),(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(b,(0,r.A)({},e,{summary:n}),o)},h1:g("h1"),h2:g("h2"),h3:g("h3"),h4:g("h4"),h5:g("h5"),h6:g("h6")}},83929:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default="data:image/png;base64,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"},43463:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(96540)),a=r(n(69436)),l=r(n(44586)),i=r(n(92303)),c=n(14423),s=r(n(65716)),u=r(n(83929)),p=r(n(98669)),d=[{names:["fbsource","fbs"],project:"fbsource",canonicalName:"fbsource"},{names:["www"],project:"facebook-www",canonicalName:"www"}];t.default=function(e){var t,n,r,f,m,y,A,g,h=l.default().siteConfig,b=i.default(),v=a.default(e);if(!b)return v;if("string"!=typeof e.file)return v;if(c.isInternal()){if(!h.customFields)return v;var E=h.customFields,k=E.fbRepoName,w=E.ossRepoPath;if("string"!=typeof k)return v;t="string"==typeof w?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e.startsWith("/")?e.slice(1):e})).map((function(e){return e.endsWith("/")?e.slice(0,e.length-1):e})).join("/")}(w,e.file):e.file;var O=d.find((function(e){return e.names.includes(k.toLowerCase())}));if(void 0===O)return v;n=function(e,t){var n=new URL("https://www.internalfb.com");return n.pathname="/code/"+e.canonicalName+"/"+t,n.toString()}(O,t),r=function(e,t){var n=new URL("https://www.internalfb.com/intern/nuclide/open/arc");return n.searchParams.append("project",e.project),n.searchParams.append("paths[0]",t),n.toString()}(O,t),f=function(e,t){if("fbsource"!==e.canonicalName||!t.startsWith("fbandroid"))return null;var n=new URL("fb-ide-opener://open");return n.searchParams.append("ide","intellij"),n.searchParams.append("filepath","/fbsource/"+t),n.toString()}(O,t)}else{if("string"!=typeof h.organizationName||"string"!=typeof h.projectName)return v;t=e.file,m=h.organizationName,y=h.projectName,A=e.file,(g=new URL("https://github.com")).pathname="/"+m+"/"+y+"/blob/master/"+A,n=g.toString(),r=null,f=null}var j=t.split("/"),C=j[j.length-1];return o.default.createElement("div",null,o.default.createElement("a",{href:n,title:"Browse entire file",target:"_blank",rel:"noreferrer",onClick:function(){return c.feedback.reportFeatureUsage({featureName:"browse-file",id:t})},className:p.default.CodeBlockFilenameTab},C),null!==r?o.default.createElement("a",{target:"_blank",rel:"noreferrer",href:r,onClick:function(){return c.feedback.reportFeatureUsage({featureName:"open-in-vscode",id:t})}},o.default.createElement("img",{style:{padding:"0 6px",height:"16px"},title:"Open in VSCode @ FB",src:s.default})):null,null!==f?o.default.createElement("a",{target:"_blank",rel:"noreferrer",href:f,onClick:function(){return c.feedback.reportFeatureUsage({featureName:"open-in-android-studio",id:t})}},o.default.createElement("img",{style:{padding:"0 6px",height:"16px"},title:"Open in Android Studio",src:u.default})):null,v)}},65716:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAG/0lEQVR42r2XbVBU5xXH/yB1mpk6Tqa1k1Fsa9hFzdhJJhknzfRDZ2rHdpx2mklDbdOZ1tpWg0GhgK/4shIBESTaqiNjTaOGoMsCu4ggb8E3UqQUd3mxRUVjaBKbMO7dF5Zl793n9NxnL9wdGMcvJP/ZM+d57of9/8459z57FzMvSkCafZZc2mmWjC9NNlsiDKURzTbXXwaI3W4abG869s0jAw8W1wfPpNb871mwvtiO2NqTjNUs7GxtxJtdlLijnRa3EC1uGCOrS6m2OkZeNKdEiZgxrSv/isxrT85BXvN1FHQRtjePJ21rjVprvGpqfVAsadNBwpTq8jVY7J//YAbNu2PmGZXzsaP5FvL/QdyBcWxrpqStLWSp9lJqXYCNAypHdAl3ZCnDpNZ4Dz6yE3KWRAl4nMoN86yapWz+ALZrXHlLBHmthK1NlLSl2QAIktUZkJHqDERS63kktf7QU4VX5k1/fGySyLxhHld57vmXuN1B7L4szTmIYQhbLlLS5maRUvWQ5x9kw8AEhLDWhchS4/Mml32wAJOKr7jE8yL2t8w1q3zEzLPrfoptTYS894mzym3XM4Nw3tyoJW1poRSHogMIHcAIkVo3xp3xKQuLr803K59QmacU5cOEt/qGUNS1fKITBmDC5N2eU/873VhWvPWiprc8FhdjMDsuUVJOQ9BSpYSszlGyVvvJWhPgYAAXAzhMALP60t5ynPiEcGgggiN3ON8klLgzYCjOPAe7LkszbrUms4zGqNzbPiBkOTvnbji5kiv93OoKc8UBwSGz1TkFQCr92JM42DeOw4OEsn4VZQMaB+H4MPFIKrHG9tWY+YVi7LrKxmwWCzJCxdZmHsclQqbjbwBmLzhy/esWu+Kz1obY0C84ZJb7KsUEmLzxdrf9Hm/9m/RgGA0H+wVHBMc/1qH+iewLZ5DbSsht1DgENjcQh76PgA8d7kwY60//AYYWFLcnW+xexVqjG/oFhwSQe3s8QDzE9oZXUdKr4RB3orRPRWk/8V7F4duEw0NcaauGDTWE7Ho2bBDcEQ07r3DLXf1YfeB56GonOaqFxc3zU84piqU6RCk6gN0vs9yfMwHiIWIzzq5agWJPUDeUMCV9hAN9UZT0MxCPZXcHIb1WIPM8YcdlwkbHaQBzJ+8T4wdpoa15/tNnFSXFwYZ2v0g555dZ7s9OAZj27K/7+3ex330XZdyJ4t4oA+hZBkMI7PsXIaNuFK8dXTOti0QJEwAplV7FUqVXLAFk5r0J8Mhn/OWi7yC9eggFN7gLA1Hs90wC8FrwNT2P8tH7y/gTdBrAewbAWb/gkNli532lCTD9dEuveAGZdT78uZGwvlqD7TqPgCGKPBqKdACOIoYoZohD9wgFPcfij+cJgG9IAEV5hg2XsfHSSj8b650I0dPvTQVIM+jTz/0ImS4VOWyeVacio5awrkrFni5C2R02dmsodBMKPXoIuT/0IfG1buy8vCg2ioHZYG080Zm8pMKroGKUcEoROOOjZZU+8ax9lBZVMIBt6mO4wf4qsupJxianhk0uIWFy2whr3+3Dro5alN3VjTVpXsAQMtwRlN7W8yj2dv4Cpubg1MOHa/l9ILcpIF5z+QnvMMipID3Ho5EAZgf2z8XG2rBhrvI6ypmQ20LcFReWr3oKuvKuHkXpEGGfO2oExeKGisI+eoJBEvO7D4KljEbWf+rTSI0SCf5ENEH3H2qirGOccMKrvPKX9mTEKQGvV57G5jZi8wiyLnB2Ef74Tt70s+LSXhTfIrzp1iNqZErk9bwCt8DeQeq9671PpsTUddPNkBd4e97UH6NE/Ond48huImxwfITVZSsnjOWNFf9zndu0CQUDbOwh5PdoyL9BiwoYJKdbODo+0YgVFfwRMcO6jjCtLg3QuqNBGg2LKLFCofE0sKZCJODXR3+CH77x7Ue8EyRMXstq+A1sPdz+fvpaPo9gdw8tP9BLwXDMX2MCXe7bEcIrCq3cF6C/OkM6gEYx9WLal8tKzZY/9iX0Dccq7Oke+1bRTa6+Sy1x3iWWLN3wpytunvkqhW5+qMq9ECJ+LMtgKt74sa9k5tG99tRLlr3dI8jto4pLw5EJE5XrvPepRif5KcBvfeS8Gqahj1W+Lr0nurBiRl7H03KOP4P0jnsn3x8hloQYiwhChk+af3+Pn/BzhVYUBshQ1Mjfm8H/BMsXppd7PBRTRO/ArWGVys+HCGt8dLZtjIY/0+LNP+OYgxmRebM++WDE3yVdohTW81XPOOHHCt36SJXT4etjBkAhZlJ2ikF0tjcka5r2X8NEa+sej+Bnitp7R43EVX+NIxEzLTIgBgcHF6iquECsrttEeJno/ohBFKW3yfjj+sVBmOvnL3aGM/Ern63nP5F03i+BlGn+f10JyvFCZOA3AAAAAElFTkSuQmCC"},50210:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(42508)),a=n(14423),l=Object.assign(Object.assign({},o.default),{FbInternalOnly:a.FbInternalOnly,FBInternalOnly:a.FbInternalOnly,OssOnly:a.OssOnly,OSSOnly:a.OssOnly});t.default=l},98669:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={CodeBlockFilenameTab:"CodeBlockFilenameTab_-TQn"}},68382:(e,t,n)=>{n.d(t,{Ay:()=>m,Gs:()=>l});var r=n(61258);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(96540),l={Prism:r.default,theme:o};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=c({},n,{backgroundColor:null}),o};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=c({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?c({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=c({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?c({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,i=[],c=[i];l>-1;){for(;(a=r[l]++)<o[l];){var d=void 0,f=t[l],m=n[l][a];if("string"==typeof m?(f=l>0?f:["plain"],d=m):(f=p(f,m.type),m.alias&&(f=p(f,m.alias)),d=m.content),"string"==typeof d){var y=d.split(s),A=y.length;i.push({types:f,content:y[0]});for(var g=1;g<A;g++)u(i),c.push(i=[]),i.push({types:f,content:y[g]})}else l++,t.push(f),n.push(d),r.push(0),o.push(d.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return u(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)}}]);