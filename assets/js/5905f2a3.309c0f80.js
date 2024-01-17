"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",slug:"refine-pixels-4",authors:"abdullah_numan",tags:["refine-week","refine","supabase"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Fsocial.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/refine-pixels-4",source:"@site/blog/2023-02-17-refine-pixels-4.md",title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"}],readingTime:10.15,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",slug:"refine-pixels-4",authors:"abdullah_numan",tags:["refine-week","refine","supabase"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Fsocial.png",hide_table_of_contents:!1},prevItem:{title:"Creating an Admin Dashboard with refine",permalink:"/blog/refine-pixels-5"},nextItem:{title:"Adding CRUD Actions and Authentication",permalink:"/blog/refine-pixels-3"},relatedPosts:[{title:"Using Material UI DataGrid component with refine app",description:"How to use Material UI DataGrid component with refine apps?",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.88,date:"2022-08-23T00:00:00.000Z"},{title:"Build Access Control Mechanism using Permify",description:"We'll examine how to build an Access Control mechanism in Refine using Permify, an authorization as a service that helps you create any kind of authorization system easily with its panel.",permalink:"/blog/access-control",formattedDate:"January 9, 2024",authors:[{name:"Ege Ayt\u0131n",title:"Software Developer",url:"https://github.com/EgeAytin",imageURL:"https://github.com/EgeAytin.png",key:"ege"}],readingTime:10.66,date:"2024-01-09T00:00:00.000Z"},{title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",permalink:"/blog/react-hot-toast",formattedDate:"October 6, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:12.935,date:"2023-10-06T00:00:00.000Z"}],authorPosts:[{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.45,date:"2022-10-03T00:00:00.000Z"},{title:"How to Use Tailwind CSS Grid",description:"We look at how to implement responsive layouts with CSS Grid using TailwindCSS Grid classes.",permalink:"/blog/tailwind-grid",formattedDate:"October 21, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.75,date:"2022-10-21T00:00:00.000Z"},{title:"React useMemo Hook Guide with Examples",description:"Improve React app performance with the useMemo() hook",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.875,date:"2022-09-16T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"RefineWeek series",id:"refineweek-series",level:3},{value:"Overview",id:"overview",level:2},{value:"Setting Up Supabase Realtime",id:"setting-up-supabase-realtime",level:2},{value:"<code>&lt;Refine /&gt;</code>&#39;s <code>liveProvider</code> Prop",id:"refine-s-liveprovider-prop",level:2},{value:"refine&#39;s Supabase <code>liveProvider</code> Object",id:"refines-supabase-liveprovider-object",level:3},{value:"Broadcasting",id:"broadcasting",level:2},{value:"refine <code>usePublish()</code> Hook",id:"refine-usepublish-hook",level:3},{value:"Subscription",id:"subscription",level:2},{value:"refine <code>useResourceSubscription()</code> Hook",id:"refine-useresourcesubscription-hook",level:3},{value:"Summary",id:"summary",level:2}],u={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this post, we implement realtime broadcast and subscription of ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," updates in our ",(0,a.kt)("strong",{parentName:"p"},"refine")," based ",(0,a.kt)("strong",{parentName:"p"},"Pixels")," app. We do this with the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"liveProvider"))," prop on ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," and ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime"},(0,a.kt)("strong",{parentName:"a"},"Supabase"),"'s ",(0,a.kt)("strong",{parentName:"a"},"Realtime servers")),". Applying a PubSub feature allows us to receive instant updates in one part of our app for database changes triggered from another part or by a different client."),(0,a.kt)("p",null,"Here's a quick rundown of the features we'll work on:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Allow multiple users to draw pixels on a canvas."),(0,a.kt)("li",{parentName:"ol"},"All contributors can see realtime updates on the canvas.")),(0,a.kt)("p",null,"This is Day 4 in the series titled ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/week-of-refine/"},(0,a.kt)("strong",{parentName:"a"},"RefineWeek")),". ",(0,a.kt)("strong",{parentName:"p"},"RefineWeek")," is a quickfire tutorial guide that aims to help developers learn the ins-and-outs of ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s powerful capabilities and get going with ",(0,a.kt)("strong",{parentName:"p"},"refine")," within a week."),(0,a.kt)("h3",{id:"refineweek-series"},"RefineWeek series"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Day 1 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-1/"},"Pilot & refine architecture")),(0,a.kt)("li",{parentName:"ul"},"Day 2 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-2/"},"Setting Up the Client App")),(0,a.kt)("li",{parentName:"ul"},"Day 3 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-3/"},"Adding CRUD Actions and Authentication")),(0,a.kt)("li",{parentName:"ul"},"Day 4 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-4/"},"Adding Realtime Collaboration")),(0,a.kt)("li",{parentName:"ul"},"Day 5 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-5/"},"Creating an Admin Dashboard with refine")),(0,a.kt)("li",{parentName:"ul"},"Day 6 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-6/"},"Implementing Role Based Access Control")),(0,a.kt)("li",{parentName:"ul"},"Day 7 - ",(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-7/"},"Audit Log With refine"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"On Day Three, we implemented CRUD operations using ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," methods and the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop, which leveraged RESTful routes in the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/router-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"routerProvider"))," object under the hood."),(0,a.kt)("p",null,"Today, we are going to explore the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"liveProvider"))," prop as we implement realtime collaboration on a ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," so that ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," drawn on a ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," by one user is instantly seen by anyone else viewing it from another client."),(0,a.kt)("p",null,"There are two parts to our endeavor in this post, one in the ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," backend and one in our ",(0,a.kt)("strong",{parentName:"p"},"refine")," app:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Spin up Realtime servers from ",(0,a.kt)("strong",{parentName:"li"},"Supabase")," dashboard for the resource we want to publish changes for and subscribe to."),(0,a.kt)("li",{parentName:"ol"},"Registering the ",(0,a.kt)("inlineCode",{parentName:"li"},"liveProvider")," prop inside ",(0,a.kt)("inlineCode",{parentName:"li"},"<Refine />")," component and enabling subscription with ",(0,a.kt)("inlineCode",{parentName:"li"},"liveMode: auto"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," has already added the implementation code for ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," provider in the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," object it created for us during project initialization. We will mostly play the laymen role here as we tour around the underlying principles and the magic at work behind the scenes."),(0,a.kt)("p",null,"Let's start by first making sure ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," servers are set up for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table in the ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," backend."),(0,a.kt)("h2",{id:"setting-up-supabase-realtime"},"Setting Up Supabase Realtime"),(0,a.kt)("p",null,"In order to make drawing collaborative between our users, we have to run ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime"},(0,a.kt)("strong",{parentName:"a"},"Supabase")," ",(0,a.kt)("strong",{parentName:"a"},"Realtime"))," servers and create channels for our ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," resource."),(0,a.kt)("p",null,"We can do this from the ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," dashboard for the database we created. If you haven't already, please go ahead and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Realtime")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table from its editor:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-11-refine-pixels-4%2Frealtime.png",alt:"supabase realtime"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Behind the scenes, ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," spins up globally distributed ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," servers that facilitate low latency communication between our app and ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," database tables. ",(0,a.kt)("strong",{parentName:"p"},"Supabase"),"'s ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," feature spares a ",(0,a.kt)("strong",{parentName:"p"},"channel")," for each resource to be broadcasted. Any change in the resource is published in the channel, and clients that subscribe to the channel receive updates as soon as the change is made."),(0,a.kt)("p",null,"We are using ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("strong",{parentName:"p"},"Realtime"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/realtime#postgres-cdc"},(0,a.kt)("strong",{parentName:"a"},"PostgreSQL Change Data Capture"))," feature which will now allow our app to publish mutation events to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel and also listen to those changes from a subscriber component."),(0,a.kt)("p",null,"This means mutation hooks such as ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useCreate/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCreate()"))," can now publish events to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel and consumer hooks like ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useList/"},(0,a.kt)("inlineCode",{parentName:"a"},"useList()"))," are able to get instant updates for any change to ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels"),"."),(0,a.kt)("h2",{id:"refine-s-liveprovider-prop"},(0,a.kt)("inlineCode",{parentName:"h2"},"<Refine />"),"'s ",(0,a.kt)("inlineCode",{parentName:"h2"},"liveProvider")," Prop"),(0,a.kt)("p",null,"Now, it's time to move our attention back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component in our app."),(0,a.kt)("p",null,"We already have the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop passed in with the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider()")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/supabase"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { liveProvider } from "@refinedev/supabase";\nimport { supabaseClient } from "./utility";\n\nfunction App() {\n  return (\n    <Refine\n      // ...\n      liveProvider={liveProvider(supabaseClient)}\n    />\n  );\n}\n')),(0,a.kt)("p",null,"And that's it! The channel for ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," resource that was specified above in ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," will broadcast all mutations on the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table. And any subscriber will be able to receive real time updates about the changes."),(0,a.kt)("p",null,"Now, let's try opening the app in two browsers, one with Google account and one with GitHub. Navigate to a canvas page, the same one in both and try adding some ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," from each. We'll see that ",(0,a.kt)("inlineCode",{parentName:"p"},"pixel"),"s created in one are displayed in the other in real time:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-18-refine-pixels-5/live-provider.gif",alt:"supabase realtime"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"This looks like a magic, because we don't know how this is happening. And very pleasant because ",(0,a.kt)("inlineCode",{parentName:"p"},"create refine-app")," already generated the code that handles the PubSub logic for ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("strong",{parentName:"p"},"PostregSQL CDC"),". Let's have a look to see what's happening in the ",(0,a.kt)("strong",{parentName:"p"},"Supabase")," ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," object."),(0,a.kt)("h3",{id:"refines-supabase-liveprovider-object"},"refine's Supabase ",(0,a.kt)("inlineCode",{parentName:"h3"},"liveProvider")," Object"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," object has the following signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const liveProvider = {\n    subscribe: ({ channel, params: { ids }, types, callback }) => any,\n    unsubscribe: (subscription) => void,\n    publish?: (event) => void,\n};\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/packages/supabase/src/liveProvider/index.ts"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/supabase"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"version 5.0.0"),", at the time of publishing this article, the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," consists of only the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unsubscribe")," methods. Its implementation looks like this:"),(0,a.kt)("p",null,"Let's have a look."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show `liveProvider` code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="@refinedev/supabase liveProvider"',title:'"@refinedev/supabase','liveProvider"':!0},'import { LiveProvider, CrudFilter, CrudFilters } from "@refinedev/core";\nimport { RealtimeChannel, RealtimePostgresChangesPayload, SupabaseClient } from "@supabase/supabase-js";\nimport { liveTypes, supabaseTypes } from "../types";\nimport { mapOperator } from "../utils";\n\nexport const liveProvider = (supabaseClient: SupabaseClient): LiveProvider => {\n  return {\n    subscribe: ({ channel, types, params, callback }): RealtimeChannel => {\n      const resource = channel.replace("resources/", "");\n\n      const listener = (payload: RealtimePostgresChangesPayload<any>) => {\n        if (types.includes("*") || types.includes(liveTypes[payload.eventType])) {\n          if (\n            liveTypes[payload.eventType] !== "created" &&\n            params?.ids !== undefined &&\n            payload.new?.id !== undefined\n          ) {\n            if (params.ids.map(String).includes(payload.new.id.toString())) {\n              callback({\n                channel,\n                type: liveTypes[payload.eventType],\n                date: new Date(payload.commit_timestamp),\n                payload: payload.new,\n              });\n            }\n          } else {\n            callback({\n              channel,\n              type: liveTypes[payload.eventType],\n              date: new Date(payload.commit_timestamp),\n              payload: payload.new,\n            });\n          }\n        }\n      };\n\n      const mapFilter = (filters?: CrudFilters): string | undefined => {\n        if (!filters || filters?.length === 0) {\n          return;\n        }\n\n        return filters\n          .map((filter: CrudFilter): string | undefined => {\n            if ("field" in filter) {\n              return `${filter.field}=${mapOperator(filter.operator)}.${filter.value}`;\n            }\n            return;\n          })\n          .filter(Boolean)\n          .join(",");\n      };\n\n      const client = supabaseClient.channel("any").on(\n        "postgres_changes",\n        {\n          event: supabaseTypes[types[0]] as any,\n          schema: "public",\n          table: resource,\n          filter: mapFilter(params?.filters),\n        },\n        listener,\n      );\n\n      return client.subscribe();\n    },\n\n    unsubscribe: async (channel: RealtimeChannel) => {\n      supabaseClient.removeChannel(channel);\n    },\n  };\n};\n')))),(0,a.kt)("p",null,"Both methods are concerned with subscription to the changes. That's because the publishing the event is done by mutation methods. In our case, it is done from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-create"},(0,a.kt)("inlineCode",{parentName:"a"},"useCreate()"))," hook we invoke to create a pixel."),(0,a.kt)("h2",{id:"broadcasting"},"Broadcasting"),(0,a.kt)("p",null,"If we look inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasShow />")," component that is rendered at ",(0,a.kt)("inlineCode",{parentName:"p"},"/canvases/:id"),", we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasItem />")," component which basically displays all ",(0,a.kt)("inlineCode",{parentName:"p"},"pixel"),"s that belong to the ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," item being visited. ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasItem />")," is also the component from where a ",(0,a.kt)("inlineCode",{parentName:"p"},"pixel")," is created, so let's look at that now:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/components/canvas/item.tsx"',title:'"src/pages/components/canvas/item.tsx"'},'import React from "react";\nimport { Typography } from "antd";\n\nimport { Pixel, Canvas } from "../../types";\nimport { DEFAULT_SCALE, PIXEL_SIZE } from "../../utility/constants";\n\nconst { Text } = Typography;\n\ntype CanvasItemProps = {\n  canvas: Canvas;\n  pixels: Pixel[] | undefined;\n  scale?: number;\n  border?: boolean;\n  active?: boolean;\n  onPixelClick?: (x: number, y: number) => void;\n};\n\nexport const CanvasItem: React.FC<CanvasItemProps> = ({\n  canvas: { id, name, width, height },\n  pixels,\n  scale = DEFAULT_SCALE,\n  border = true,\n  active = true,\n  onPixelClick,\n}) => {\n  return (\n    <div>\n      {Array.from({ length: height }).map((_, i) => (\n        <div key={`row-${i}`} style={{ display: "flex" }}>\n          {Array.from({ length: width }).map((_, j) => (\n            <div key={`row-${i}-col-${j}`}>\n              <div\n                onClick={() => {\n                  if (onPixelClick && active) {\n                    onPixelClick(j, i);\n                  }\n                }}\n                style={{\n                  cursor: active ? "pointer" : undefined,\n                  width: PIXEL_SIZE * scale,\n                  height: PIXEL_SIZE * scale,\n                  border: border ? "0.5px solid rgba(0,0,0,0.05)" : undefined,\n                  background: pixels?.find((el) => el.x === j && el.y === i)?.color ?? "transparent",\n                }}\n              />\n            </div>\n          ))}\n        </div>\n      ))}\n      {!active && <Text className="canvas-name-text">{name ?? id}</Text>}\n    </div>\n  );\n};\n')),(0,a.kt)("p",null,"The most relevant thing to look in the component above is the ",(0,a.kt)("inlineCode",{parentName:"p"},"onPixelClick")," click event handler. It is a prop received by the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasItem />")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasShow />")," component. It's original value is the ",(0,a.kt)("inlineCode",{parentName:"p"},"onSubmit()")," function defined inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasShow />")," component."),(0,a.kt)("p",null,"We'd like to focus on this ",(0,a.kt)("inlineCode",{parentName:"p"},"onSubmit")," event handler, because it is what facilitates the creation of a ",(0,a.kt)("inlineCode",{parentName:"p"},"pixel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/canvases/show.tsx"',title:'"src/pages/canvases/show.tsx"'},'import { useCreate, useNavigation } from "@refinedev/core";\n\nexport const CanvasShow: React.FC = () => {\n  // ...\n\n  const { push } = useNavigation();\n  const { mutate } = useCreate();\n\n  const onSubmit = (x: number, y: number) => {\n    if (!authenticated) {\n      if (pathname) {\n        return push(`/login?to=${encodeURIComponent(pathname)}`);\n      }\n\n      return push(`/login`);\n    }\n\n    if (typeof x === "number" && typeof y === "number" && canvas?.id) {\n      mutate({\n        resource: "pixels",\n        values: {\n          x,\n          y,\n          color,\n          canvas_id: canvas?.id,\n          user_id: identity.id,\n        },\n        meta: {\n          canvas,\n        },\n        successNotification: false,\n      });\n    }\n  };\n\n  return /* ... */;\n};\n')),(0,a.kt)("p",null,"As we can see, with the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCreate()")," hook, a new entry is being added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table upon every click on the canvas."),(0,a.kt)("p",null,"And since we enabled realtime for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table, each successful ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," action broadcasts the change to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel for subscribers to pick."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"refine-usepublish-hook"},"refine ",(0,a.kt)("a",{parentName:"h3",href:"https://refine.dev/docs/api-reference/core/hooks/live/usePublish/"},(0,a.kt)("inlineCode",{parentName:"a"},"usePublish()"))," Hook"),(0,a.kt)("p",null,"The exact way it happens looks like this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"useCreate()")," hook is called from the consumer component."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"useCreate()"),", behind the scenes, uses the live ",(0,a.kt)("inlineCode",{parentName:"li"},"usePublish()")," hook to publish the ",(0,a.kt)("inlineCode",{parentName:"li"},"created")," event to the ",(0,a.kt)("inlineCode",{parentName:"li"},"pixels")," channel on ",(0,a.kt)("strong",{parentName:"li"},"Supabase")," ",(0,a.kt)("strong",{parentName:"li"},"Realtime")," servers.")),(0,a.kt)("p",null,"The published event for ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," action produces an object with the following signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    channel: `resources/pixels`,\n    type: "created",\n    payload: {\n            ids: ["id-of-created-pixel"]\n    },\n    date: new Date(),\n}\n')),(0,a.kt)("p",null,"Feel free to go through the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/#publish-events-from-hooks"},"live hooks docs")," for details about how live publishing is supported by ",(0,a.kt)("inlineCode",{parentName:"p"},"useCreate()")," and other mutation hooks."),(0,a.kt)("h2",{id:"subscription"},"Subscription"),(0,a.kt)("p",null,"The changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," table can be subscribed by consumer components with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," hook. We are showing the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CanvasShow />")," component itself, but they are fetched inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DisplayCanvas />")," render-props component."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," hook inside ",(0,a.kt)("inlineCode",{parentName:"p"},"<DisplayCanvas />")," looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/canvas/display.tsx"',title:'"src/components/canvas/display.tsx"'},'import React, { ReactElement } from "react";\nimport { useList } from "@refinedev/core";\n\nimport { Canvas } from "../../types/canvas";\nimport { Pixel } from "../../types/pixel";\n\ntype DisplayCanvasProps = {\n  canvas: Canvas;\n  children: (pixels: Pixel[] | undefined) => ReactElement;\n};\n\nexport const DisplayCanvas: React.FC<DisplayCanvasProps> = ({ canvas: { id }, children }) => {\n  const { data } = useList<Pixel>({\n    resource: "pixels",\n    liveMode: "auto",\n    meta: {\n      select: "*, users(id, full_name, avatar_url)",\n    },\n    filters: [\n      {\n        field: "canvas_id",\n        operator: "eq",\n        value: id,\n      },\n    ],\n    sorters: [\n      {\n        field: "created_at",\n        order: "desc",\n      },\n    ],\n    pagination: {\n      mode: "off",\n    },\n  });\n\n  const pixels = data?.data;\n\n  return <>{children(pixels)}</>;\n};\n')),(0,a.kt)("p",null,"Among the loads of arguments and options passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," hook, we have used the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveMode: auto")," property which allows us to subscribe to the ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," channel for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," resource."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," disabled in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component, ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," acts as a normal ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," hook."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," activated, under the hood, ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," banks on ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useResourceSubscription()")," live hook to communicate with the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel."),(0,a.kt)("h3",{id:"refine-useresourcesubscription-hook"},"refine ",(0,a.kt)("inlineCode",{parentName:"h3"},"useResourceSubscription()")," Hook"),(0,a.kt)("p",null,"The actual subscription is done by the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider.subscribe()")," method."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," method is called from inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"useResourceSubscription()")," hook in order to subscribe to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," channel."),(0,a.kt)("p",null,"If you want to dive into the details, please feel free to do so in the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"liveProvider")," docs here"),"."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In today's part, we implemented real time collaboration for drawing ",(0,a.kt)("inlineCode",{parentName:"p"},"pixels")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"canvas")," items using ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component's ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop and its supporting hooks for publishing and subscribing to ",(0,a.kt)("strong",{parentName:"p"},"Supabase"),"'s ",(0,a.kt)("strong",{parentName:"p"},"Realtime")," servers."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe()")," method on ",(0,a.kt)("strong",{parentName:"p"},"Supabase"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," object allows us to subscribe to a channel created for a resource. Subscription for the resource is triggered by the ",(0,a.kt)("inlineCode",{parentName:"p"},"useResourceSubscription()")," hook called from data hooks that support live subscription - the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," hook in our example."),(0,a.kt)("p",null,"Broadcasting, in turn, is initiated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePublish()")," hook called from a supported mutation hook for our resource - the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCreate()")," hook in this case."),(0,a.kt)("p",null,"We implemented real time collaboration very effortlessly due to the out-of-box solutions provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/supabase")," package."),(0,a.kt)("p",null,"With this now, we have enabled multiple users to draw on a canvas at the same time and receive updates instantly."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/refine-pixels-5/"},'Click here to read "Creating an Admin Dashboard with refine" article. ',"\u2192")))}m.isMDXComponent=!0}}]);