"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"index",title:"1. Intro",tutorial:{prev:"tutorial/introduction/select-framework",next:"tutorial/getting-started/prepare-env"}},p=void 0,s={unversionedId:"tutorial/getting-started/index",id:"tutorial/getting-started/index",title:"1. Intro",description:"Now that you have selected the Ant Design option as your UI preference, let's get started!",source:"@site/docs/tutorial/1-getting-started/0-intro.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/index",permalink:"/docs/tutorial/getting-started/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/0-intro.md",tags:[],version:"current",lastUpdatedBy:"Chirag Pipaliya",lastUpdatedAt:1707748084,formattedLastUpdatedAt:"Feb 12, 2024",sidebarPosition:0,frontMatter:{id:"index",title:"1. Intro",tutorial:{prev:"tutorial/introduction/select-framework",next:"tutorial/getting-started/prepare-env"}}},d={},c=[],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=m("UIConditional"),h=m("Checklist"),f=m("ChecklistItem"),k={toc:c};function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)(u,{is:"antd",mdxType:"UIConditional"},(0,n.kt)("p",null,"Now that you have selected the ",(0,n.kt)("strong",{parentName:"p"},"Ant Design")," option as your UI preference, let's get started!")),(0,n.kt)(u,{is:"chakra-ui",mdxType:"UIConditional"},(0,n.kt)("p",null,"Now that you have selected the ",(0,n.kt)("strong",{parentName:"p"},"Chakra UI")," option as your UI preference, let's get started!")),(0,n.kt)(u,{is:"headless",mdxType:"UIConditional"},(0,n.kt)("p",null,"Now that you have selected the ",(0,n.kt)("strong",{parentName:"p"},"headless")," option as your UI preference, let's get started!")),(0,n.kt)(u,{is:"mantine",mdxType:"UIConditional"},(0,n.kt)("p",null,"Now that you have selected the ",(0,n.kt)("strong",{parentName:"p"},"Mantine")," option as your UI preference, let's get started!")),(0,n.kt)(u,{is:"mui",mdxType:"UIConditional"},(0,n.kt)("p",null,"Now that you have selected the ",(0,n.kt)("strong",{parentName:"p"},"Material UI")," option as your UI preference, let's get started!")),(0,n.kt)("admonition",{title:"Using CodeSandbox?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Prefer to go through this tutorial in an online code editor? That's possible!"),(0,n.kt)("details",null,(0,n.kt)("summary",null,'Follow these instructions, then go directly to "Generate CRUD pages automatically with Inferencer" section!'),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Set up CodeSandBox")),(0,n.kt)(u,{is:"antd",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/github/refinedev/refine/tree/master/examples/template-antd?file=src%2FApp.tsx"},"here")," to open the Ant Design template."))),(0,n.kt)(u,{is:"chakra-ui",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/github/refinedev/refine/tree/master/examples/template-chakra-ui?file=src%2FApp.tsx"},"here")," to open the Chakra UI template."))),(0,n.kt)(u,{is:"headless",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/github/refinedev/refine/tree/master/examples/template-headless?file=src%2FApp.tsx"},"here")," to open the headless template."))),(0,n.kt)(u,{is:"mantine",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/github/refinedev/refine/tree/master/examples/template-mantine?file=src%2FApp.tsx"},"here")," to open the Mantine template."))),(0,n.kt)(u,{is:"mui",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/github/refinedev/refine/tree/master/examples/template-material-ui?file=src%2FApp.tsx"},"here")," to open the Material UI template."))),(0,n.kt)("ol",{parentName:"admonition",start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click \u201cSign in\u201d on the top right to log in using your GitHub credentials.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'In the upper right of the CodeSandBox editor window, click the "fork" button to fork the template (save to your own account dashboard).'))),(0,n.kt)(u,{is:"antd",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition",start:4},(0,n.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-antd-boilerplate\u201d starter."))),(0,n.kt)(u,{is:"chakra-ui",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition",start:4},(0,n.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-chakra-ui-boilerplate\u201d starter."))),(0,n.kt)(u,{is:"headless",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition",start:4},(0,n.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-headless-boilerplate\u201d starter."))),(0,n.kt)(u,{is:"mantine",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition",start:4},(0,n.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-mantine-boilerplate\u201d starter."))),(0,n.kt)(u,{is:"mui",mdxType:"UIConditional"},(0,n.kt)("ol",{parentName:"admonition",start:4},(0,n.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-mui-boilerplate\u201d starter."))),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Make Changes")),(0,n.kt)(u,{is:"antd",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"In the files panel, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer"))),(0,n.kt)(u,{is:"chakra-ui",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"In the files panel, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer"))),(0,n.kt)(u,{is:"headless",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"In the files panel, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer"))),(0,n.kt)(u,{is:"mantine",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"In the file pane, you should see ",(0,n.kt)("inlineCode",{parentName:"p"},"src/app.tsx"),". Click to open it, and follow ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mantine/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer")," to make a change to this file.")),(0,n.kt)(u,{is:"mui",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"In the files panel, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer"))),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Create a GitHub Repository")),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Press the "Connect Repository" button at the top of your list of files, enter a new name for your repository, and click "Create repo & push".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you have changes to be commit to GitHub, a \u201cCommit\u201d button will appear at the top left of your workspace. Clicking on this will allow you to enter a commit message, and update your repository."))),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"What's next?")),(0,n.kt)(u,{is:"antd",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with Refine!")),(0,n.kt)(u,{is:"chakra-ui",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with Refine!")),(0,n.kt)(u,{is:"headless",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with Refine!")),(0,n.kt)(u,{is:"mantine",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mantine/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with Refine!")),(0,n.kt)(u,{is:"mui",mdxType:"UIConditional"},(0,n.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with Refine!")))),(0,n.kt)("h3",null,"Where are we going?"),(0,n.kt)("p",null,"In this unit, we will be covering the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Setting up your development environment."),(0,n.kt)("li",{parentName:"ul"},"Creating a new project."),(0,n.kt)("li",{parentName:"ul"},"Generating CRUD pages for your data model."),(0,n.kt)("li",{parentName:"ul"},"Storing your project in a git repository."),(0,n.kt)("li",{parentName:"ul"},"Deploying your project to the cloud.")),(0,n.kt)("h3",null," What will we be building?"),(0,n.kt)(u,{is:"antd",mdxType:"UIConditional"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," is an interactive tool that lets you create Refine apps right in your browser. You can view the app we'll build during the tutorial from ",(0,n.kt)("a",{parentName:"p",href:"https://refine.new/preview/0b55628b-e3c9-468d-a228-78044bfe967b"},"this link"),"."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("a",{href:"https://refine.new/preview/0b55628b-e3c9-468d-a228-78044bfe967b"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/tutorial/antd-intro.png",alt:"tutorial antd"})))),(0,n.kt)(u,{is:"chakra-ui",mdxType:"UIConditional"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," is an interactive tool that lets you create Refine apps right in your browser. You can view the app we'll build during the tutorial from ",(0,n.kt)("a",{parentName:"p",href:"https://refine.new/preview/abc18685-8a6d-4511-aedd-860ca1b0b5a6"},"this link"),"."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("a",{href:"https://refine.new/preview/abc18685-8a6d-4511-aedd-860ca1b0b5a6"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/tutorial/chakra-intro.png",alt:"tutorial chakra"})))),(0,n.kt)(u,{is:"headless",mdxType:"UIConditional"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," is an interactive tool that lets you create Refine apps right in your browser. You can view the app we'll build during the tutorial from ",(0,n.kt)("a",{parentName:"p",href:"https://refine.new/preview/c8958d55-8995-4bb7-b91e-e5f924b53aa7"},"this link"),"."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("a",{href:"https://refine.new/preview/c8958d55-8995-4bb7-b91e-e5f924b53aa7"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/tutorial/headless-intro.png",alt:"tutorial headless"})))),(0,n.kt)(u,{is:"mantine",mdxType:"UIConditional"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," is an interactive tool that lets you create Refine apps right in your browser. You can view the app we'll build during the tutorial from ",(0,n.kt)("a",{parentName:"p",href:"https://refine.new/preview/3fd65b0d-534f-4a4b-89eb-c0a325cf6213"},"this link"),"."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("a",{href:"https://refine.new/preview/3fd65b0d-534f-4a4b-89eb-c0a325cf6213"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/tutorial/mantine-intro.png",alt:"tutorial mantine"})))),(0,n.kt)(u,{is:"mui",mdxType:"UIConditional"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," is an interactive tool that lets you create Refine apps right in your browser. You can view the app we'll build during the tutorial from ",(0,n.kt)("a",{parentName:"p",href:"https://refine.new/preview/8606c751-2ea8-47cd-a8fe-b8a01b4a0951"},"this link"),"."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("a",{href:"https://refine.new/preview/8606c751-2ea8-47cd-a8fe-b8a01b4a0951"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/tutorial/mui-intro.png",alt:"tutorial antd"})))),(0,n.kt)("br",null),(0,n.kt)("p",null,"\ud83c\udfc4 If you're a busy developer, you can quickly download the final version of the application by clicking on the ",(0,n.kt)("strong",{parentName:"p"},'"Build & Download"')," button."),(0,n.kt)("br",null),(0,n.kt)(h,{mdxType:"Checklist"},(0,n.kt)(f,{id:"getting-started",mdxType:"ChecklistItem"},"Let's prepare to build a Refine project!")))}g.isMDXComponent=!0}}]);