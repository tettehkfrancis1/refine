"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43039,4004,15435,97474,90034,3534,15758,96771,90636,3664,15766,69050,45619,35194,56490,68134,45603,34685,56326,68562,45243,50176,8407,50233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50551:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,r),hidden:t},e)}},53787:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),o=r(6379),l=r(93874),i=r(30358);const u="tabList__CuJ",s="tabItem_LNqP";function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function f({className:e,block:t,selectedValue:r,selectValue:l,tabValues:i}){var u;const c=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(f(t),l(a))},b=e=>{var t,r;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;var a;n=null!==(a=c[t])&&void 0!==a?a:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;var o;n=null!==(o=c[t])&&void 0!==o?o:c[c.length-1];break}}null===(r=n)||void 0===r||null===(t=r.focus)||void 0===t||t.call(r)};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>n.createElement("li",d(p({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>c.push(e),onKeyDown:b,onClick:m},o),{className:(0,a.Z)("tabs__item",s,null===(u=o)||void 0===u?void 0:u.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function m({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function b(e){const t=(0,l.Y)(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",u)},n.createElement(f,p({},e,t)),n.createElement(m,p({},e,t)))}function y(e){const t=(0,i.Z)();return n.createElement(b,p({key:String(t)},e))}},93874:(e,t,r)=>{r.d(t,{Y:()=>f});var n=r(67294),a=r(76775),o=r(47348);var l=r(76632);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e){return function(e){var t,r,a;return null!==(a=null===(r=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r||null===(t=r.filter)||void 0===t?void 0:t.call(r,Boolean))&&void 0!==a?a:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:s(r);return function(e){const t=function(e,t=((e,t)=>e===t)){return e.filter(((r,n)=>e.findIndex((e=>t(e,r)))!==n))}(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p({value:e,tabValues:t}){return t.some((t=>t.value===e))}function d({queryString:e=!1,groupId:t}){const r=(0,a.k6)(),l=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),s=(0,o._X)(l),c=(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[l,r]);return[s,c]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=c(e),[i,u]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,f]=d({queryString:r,groupId:a}),[m,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,l.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),y=(()=>{const e=null!=s?s:m;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),f(e),b(e)}),[f,b,o]),tabValues:o}}},52740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>f});r(67294);var n=r(3905),a=r(53787),o=r(50551);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"Quick Start Guide",displayed_sidebar:"mainSidebar"},c=void 0,p={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start Guide",description:"Refine works on any environment that can run React (incl. Vite, Next.js, Remix, and CRA(Legacy) etc.)",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/getting-started/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1708414653,formattedLastUpdatedAt:"Feb 20, 2024",frontMatter:{title:"Quick Start Guide",displayed_sidebar:"mainSidebar"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"General Concepts",permalink:"/docs/guides-concepts/general-concepts/"}},d={},f=[{value:"Next Steps",id:"next-steps",level:2}],m={toc:f};function b(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Refine")," works on any environment that can run ",(0,n.kt)("strong",{parentName:"p"},"React")," (incl. ",(0,n.kt)("em",{parentName:"p"},"Vite, Next.js, Remix, and CRA(Legacy)")," etc.)"),(0,n.kt)("p",null,"Although you could take the time to manually set up your environment and install the ",(0,n.kt)("strong",{parentName:"p"},"Refine")," packages afterwards, the optimal way to get started with ",(0,n.kt)("strong",{parentName:"p"},"Refine")," is using the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/?playground=true"},"Browser-based Scaffolder")," and ",(0,n.kt)("strong",{parentName:"p"},"CLI-based Scaffolder"),"."),(0,n.kt)("p",null,"Choose one of the methods below to bootstrap a Refine app:"),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Browser-based-scaffolder",label:"With Browser-based",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"This is an efficient tool that allows you to create Refine app seamlessly in your browser."),(0,n.kt)("p",null,"You can choose the libraries and frameworks you want to work with, and the tool will generate a boilerplate code for you."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/?playground=true"},"scaffolder")," and select libraries and frameworks you want to work with by using interactive UI."),(0,n.kt)("li",{parentName:"ol"},"Download the generated project by clicking on the ",(0,n.kt)("strong",{parentName:"li"},'"Build & Download"')," button.")),(0,n.kt)("div",{className:"flex justify-center"},(0,n.kt)("img",{alt:"React admin panel",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-25-refine-primereact/create-refine-project.gif",className:"border border-gray-200 rounded"})),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://refine.new/preview/1a5eb93b-ab9b-4112-b80e-7563b334c025"},"If you do not want to deal with the installation steps, you can use this pre-configured refine.new template ","\u2192"))),(0,n.kt)("br",null),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Next, navigate to the project folder, install the dependencies, and then start your project.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"> npm install\n\n> npm run dev\n"))),(0,n.kt)(o.Z,{value:"CLI",label:"With CLI-based",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"create refine-app")," provides built-in templates for ",(0,n.kt)("em",{parentName:"p"},"Vite"),", ",(0,n.kt)("em",{parentName:"p"},"Next.js"),", ",(0,n.kt)("em",{parentName:"p"},"Remix"),", and ",(0,n.kt)("em",{parentName:"p"},"CRA(Legacy)")," environments, so you can bootstrap a ",(0,n.kt)("strong",{parentName:"p"},"Refine")," project in just a couple of minutes. It also offers a wide range of options that you can easily configure for your ",(0,n.kt)("em",{parentName:"p"},"UI framework"),", ",(0,n.kt)("em",{parentName:"p"},"i18n"),", ",(0,n.kt)("em",{parentName:"p"},"router"),", ",(0,n.kt)("em",{parentName:"p"},"Auth.")," and ",(0,n.kt)("em",{parentName:"p"},"data provider")," preferences."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"To get started, run the following command. The ",(0,n.kt)("em",{parentName:"li"},"CLI wizard")," will assist you for the rest of the setup process:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm create refine-app@latest\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Once the setup is complete, navigate to the project folder and start your application with:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In case you select ",(0,n.kt)("inlineCode",{parentName:"p"},"Yes")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Do you want to add example pages?")," option while using the CLI wizard, the Refine will add sample CRUD pages utilizing ",(0,n.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/components/inferencer/"},(0,n.kt)("inlineCode",{parentName:"a"},"Refine Inferencer"))," and fill the ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," property."),(0,n.kt)("p",{parentName:"admonition"},"It is highly recommended to add example pages as it provides a clearer understanding of how ",(0,n.kt)("strong",{parentName:"p"},"Refine")," works and lets you test out the CRUD operation functionalities.")))),(0,n.kt)("br",null),(0,n.kt)("p",null,"Now, you can access the Refine application at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,n.kt)("p",null,"You will see the output as a table populated with ",(0,n.kt)("inlineCode",{parentName:"p"},"blog_posts")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"category")," data with filtering, sorting, and pagination features."),(0,n.kt)("br",null),(0,n.kt)("div",null,(0,n.kt)("img",{style:{width:"100%"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start-example.png",alt:"Example result"})),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"\ud83d\udc49 Jump to ",(0,n.kt)("a",{parentName:"p",href:"/tutorial"},"Tutorials")," and continue your work to turn your example project into a full-blown CRUD application! \ud83d\ude80"),(0,n.kt)("p",null,"\ud83d\udc49 Read more on ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/"},"Advanced Tutorials")," for different usage scenarios."),(0,n.kt)("p",null,"\ud83d\udc49 See ",(0,n.kt)("a",{parentName:"p",href:"/templates"},"real-life examples")," built using ",(0,n.kt)("strong",{parentName:"p"},"Refine")))}b.isMDXComponent=!0}}]);