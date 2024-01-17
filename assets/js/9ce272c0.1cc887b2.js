"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>k,toc:()=>f});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={toc:[]};function s(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},l,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  padding: 4px;\n  background: white;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px",live:!0,url:"http://localhost:3000/products",previewHeight:"300px"},'setInitialRoutes(["/products"]);\n// visible-block-start\nimport { useState } from "react";\nimport { useMany, HttpError } from "@refinedev/core";\n\ninterface IProduct {\n  id: number;\n  name: string;\n  material: string;\n}\n\nconst ProductList: React.FC = () => {\n  const [ids, setIds] = useState([1, 2, 3]);\n\n  const { data, isLoading, isError } = useMany<IProduct, HttpError>({\n    resource: "products",\n    ids,\n  });\n\n  const products = data?.data ?? [];\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (isError) {\n    return <div>Something went wrong!</div>;\n  }\n\n  return (\n    <div>\n      {products.map((product) => (\n        <ul key={product.id}>\n          <li key={product.id}>\n            {product.id} - {product.name}{" "}\n            <button onClick={() => setIds((prev) => prev.filter((id) => id !== product.id))}>remove</button>\n          </li>\n        </ul>\n      ))}\n\n      <button\n        onClick={() => {\n          setIds((prev) => [...prev, Math.floor(Math.random() * 1000) + 1]);\n        }}\n      >\n        Add new product\n      </button>\n    </div>\n  );\n};\n\n// visible-block-end\nsetRefineProps({\n  resources: [\n    {\n      name: "products",\n      list: ProductList,\n    },\n  ],\n});\nrender(<RefineHeadlessDemo />);\n')))}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}s.isMDXComponent=!0;const c={title:"useMany",siderbar_label:"useMany",source:"packages/core/src/hooks/data/useMany.ts"},m=void 0,k={unversionedId:"data/hooks/use-many/index",id:"data/hooks/use-many/index",title:"useMany",description:"useMany is an extended version of TanStack Query's useQuery that supports all of its features and adds some more.",source:"@site/docs/data/hooks/use-many/index.md",sourceDirName:"data/hooks/use-many",slug:"/data/hooks/use-many/",permalink:"/docs/data/hooks/use-many/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-many/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1705491734,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"useMany",siderbar_label:"useMany",source:"packages/core/src/hooks/data/useMany.ts"},sidebar:"mainSidebar",previous:{title:"useOne",permalink:"/docs/data/hooks/use-one/"},next:{title:"useCreate",permalink:"/docs/data/hooks/use-create/"}},h={},f=[{value:"Usage",id:"usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Properties",id:"properties",level:2},{value:"resource <PropTag required />",id:"resource-",level:3},{value:"ids <PropTag required />",id:"ids-",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"queryOptions",id:"queryoptions",level:3},{value:"meta",id:"meta",level:3},{value:"successNotification",id:"successnotification",level:3},{value:"errorNotification",id:"errornotification",level:3},{value:"liveMode",id:"livemode",level:3},{value:"onLiveEvent",id:"onliveevent",level:3},{value:"liveParams",id:"liveparams",level:3},{value:"overtimeOptions",id:"overtimeoptions",level:3},{value:"Return Values",id:"return-values",level:2},{value:"Additional Values",id:"additional-values",level:3},{value:"overtime",id:"overtime",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values-1",level:3}],v=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},y=v("PropTag"),N=v("PropsTable"),b={toc:f};function g(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)("wrapper",d(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," is an extended version of TanStack Query's ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery"))," that supports all of its features and adds some more."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," method as the ",(0,r.kt)("strong",{parentName:"p"},"query function")," from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It uses a query key to cache the data. The ",(0,r.kt)("strong",{parentName:"p"},"query key")," is generated from the provided properties. You can see the query key by using the TanStack Query devtools."))),(0,r.kt)("p",null,"It is useful when you want to fetch multiple records from the API. It will return the data and some functions to control the query."),(0,r.kt)("p",null,"If your data provider does not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," method, ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getOne")," method instead. This is not recommended, as it will make requests one by one for each id. It is better to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," method in the data provider."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," hook expects a ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ids")," property, which will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,r.kt)("p",null,"When these properties are changed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," hook will trigger a new request."),(0,r.kt)(s,{mdxType:"BasicUsageLivePreview"}),(0,r.kt)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},"Live Provider"),".")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," hook is mounted, it will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," etc. It is useful when you want to subscribe to live updates."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"resource-"},"resource ",(0,r.kt)(y,{required:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"This parameter will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. t is usually used as an API endpoint path but it all depends on how you handle the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n  resource: "categories",\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},"creating a data provider tutorial ","\u2192"))),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("h3",{id:"ids-"},"ids ",(0,r.kt)(y,{required:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"This prop will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMany")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which records to fetch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useMany({\n  ids: [1, 2, 3],\n});\n")),(0,r.kt)("h3",{id:"dataprovidername"},"dataProviderName"),(0,r.kt)("p",null,"This prop allows you to specify which ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," if you have more than one. Just pass it like in the example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n  dataProviderName: "second-data-provider",\n});\n')),(0,r.kt)("h3",{id:"queryoptions"},"queryOptions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useMany({\n  queryOptions: {\n    retry: 3,\n    enabled: false,\n  },\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation","\u2192"))),(0,r.kt)("h3",{id:"meta"},"meta"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,r.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,r.kt)("p",null,"In the following example, we pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { stringify } from "query-string";\n\nuseMany({\n  // highlight-start\n  meta: {\n    headers: { "x-meta-data": "true" },\n  },\n  // highlight-end\n});\n\nconst myDataProvider = {\n  //...\n  getMany: async ({\n    resource,\n    ids,\n    // highlight-next-line\n    meta,\n  }) => {\n    // highlight-next-line\n    const headers = meta?.headers ?? {};\n    const url = `${apiUrl}/${resource}?${stringify({ id: ids })}`;\n\n    //...\n    //...\n\n    // highlight-next-line\n    const { data } = await httpClient.get(`${url}`, { headers });\n\n    return {\n      data,\n    };\n  },\n  //...\n};\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides-concepts/general-concepts/#meta-concept"},(0,r.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation","\u2192"))),(0,r.kt)("h3",{id:"successnotification"},"successNotification"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data is fetched successfully, ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," can call ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n  successNotification: (data, ids, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n')),(0,r.kt)("h3",{id:"errornotification"},"errorNotification"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data fetching is failed, ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n  errorNotification: (data, ids, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n')),(0,r.kt)("h3",{id:"livemode"},"liveMode"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,'Determines whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n  liveMode: "auto",\n});\n')),(0,r.kt)("h3",{id:"onliveevent"},"onLiveEvent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"The callback function is executed when new events from a subscription have arrived."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useMany({\n  onLiveEvent: (event) => {\n    console.log(event);\n  },\n});\n")),(0,r.kt)("h3",{id:"liveparams"},"liveParams"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"Params to pass to liveProvider's ",(0,r.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#subscribe"},"subscribe")," method."),(0,r.kt)("h3",{id:"overtimeoptions"},"overtimeOptions"),(0,r.kt)("p",null,"If you want loading overtime for the request, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"overtimeOptions")," prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.\n",(0,r.kt)("inlineCode",{parentName:"p"},"interval")," is the time interval in milliseconds. ",(0,r.kt)("inlineCode",{parentName:"p"},"onInterval")," is the function that will be called on each interval."),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"overtime")," object from this hook. ",(0,r.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useMany({\n  //...\n  overtimeOptions: {\n    interval: 1000,\n    onInterval(elapsedInterval) {\n      console.log(elapsedInterval);\n    },\n  },\n});\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n\n// You can use it like this:\n{\n  elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>;\n}\n")),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("p",null,"Returns an object with TanStack Query's ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," return values."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"}," ",(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation ","\u2192"))),(0,r.kt)("h3",{id:"additional-values"},"Additional Values"),(0,r.kt)("h4",{id:"overtime"},"overtime"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"overtime")," object is returned from this hook. ",(0,r.kt)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useMany();\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(N,{module:"@refinedev/core/useMany","successNotification-default":"`false`","errorNotification-default":'"Error (status code: `statusCode`)"',mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TQueryFnData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data returned by the query function. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data returned by the ",(0,r.kt)("inlineCode",{parentName:"td"},"select")," function. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")),". If not specified, the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"TQueryFnData")," will be used as the default value."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TQueryFnData"))))),(0,r.kt)("h3",{id:"return-values-1"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's ",(0,r.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData[]; error: TError }>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overtime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ elapsedTime?: number }"))))))}g.isMDXComponent=!0}}]);