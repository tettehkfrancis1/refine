"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"useUpdateMany",title:"useUpdateMany","example-title":"Material UI useUpdateMany Hook","example-tags":["table","mui","refine-hooks","react-router"]},l=void 0,s={unversionedId:"examples/table/mui/useUpdateMany",id:"version-3.xx.xx/examples/table/mui/useUpdateMany",title:"useUpdateMany",description:"useUpdateMany is one of refine's data hooks. It performs the process of updating more than one data. In this example, we used the useUpdateMany hook to edit multiple data on the table. You can edit more than one data by selecting the rows you want to edit on your table. You can get more information by examining the example.",source:"@site/versioned_docs/version-3.xx.xx/examples/table/mui/useUpdateMany.md",sourceDirName:"examples/table/mui",slug:"/examples/table/mui/useUpdateMany",permalink:"/docs/3.xx.xx/examples/table/mui/useUpdateMany",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/table/mui/useUpdateMany.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1705491734,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{id:"useUpdateMany",title:"useUpdateMany","example-title":"Material UI useUpdateMany Hook","example-tags":["table","mui","refine-hooks","react-router"]},sidebar:"someSidebar",previous:{title:"useDeleteMany",permalink:"/docs/3.xx.xx/examples/table/mui/useDeleteMany"},next:{title:"Advanced",permalink:"/docs/3.xx.xx/examples/table/react-table/advanced-react-table"}},u={},c=[],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:c};function y(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," is one of refine's data hooks. It performs the process of updating more than one data. In this example, we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," hook to edit multiple data on the table. You can edit more than one data by selecting the rows you want to edit on your table. You can get more information by examining the example."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdateMany/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," useUpdateMany data hook documentation for more information. \u2192")),(0,r.kt)(d,{path:"table-material-ui-use-update-many",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);