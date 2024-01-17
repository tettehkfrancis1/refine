"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),c=o,g=h["".concat(l,".").concat(c)]||h[c]||u[c]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"<AuthPage />",description:"<AuthPage> component from Refine is an authentication page that can be used to login, register, forgot password, and update password.",swizzle:!0,source:"packages/antd/src/components/pages/auth/index.tsx"},l=void 0,p={unversionedId:"ui-integrations/ant-design/components/auth-page/index",id:"ui-integrations/ant-design/components/auth-page/index",title:"<AuthPage />",description:"<AuthPage> component from Refine is an authentication page that can be used to login, register, forgot password, and update password.",source:"@site/docs/ui-integrations/ant-design/components/auth-page/index.md",sourceDirName:"ui-integrations/ant-design/components/auth-page",slug:"/ui-integrations/ant-design/components/auth-page/",permalink:"/docs/ui-integrations/ant-design/components/auth-page/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/auth-page/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1705491734,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"<AuthPage />",description:"<AuthPage> component from Refine is an authentication page that can be used to login, register, forgot password, and update password.",swizzle:!0,source:"packages/antd/src/components/pages/auth/index.tsx"},sidebar:"mainSidebar",previous:{title:"<ThemedLayout />",permalink:"/docs/ui-integrations/ant-design/components/themed-layout/"},next:{title:"Breadcrumb",permalink:"/docs/ui-integrations/ant-design/components/breadcrumb/"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:2},{value:"Login",id:"login",level:3},{value:"Register",id:"register",level:3},{value:"ForgotPassword",id:"forgotpassword",level:3},{value:"UpdatePassword",id:"updatepassword",level:3},{value:"Props",id:"props",level:2},{value:"hideForm",id:"hideform",level:3},{value:"providers",id:"providers",level:3},{value:"rememberMe",id:"rememberme",level:3},{value:"loginLink",id:"loginlink",level:3},{value:"registerLink",id:"registerlink",level:3},{value:"forgotPasswordLink",id:"forgotpasswordlink",level:3},{value:"wrapperProps",id:"wrapperprops",level:3},{value:"contentProps",id:"contentprops",level:3},{value:"formProps",id:"formprops",level:3},{value:"title",id:"title",level:3},{value:"renderContent",id:"rendercontent",level:3},{value:"FAQ",id:"faq",level:2},{value:"How can I remove the default title and logo ?",id:"how-can-i-remove-the-default-title-and-logo-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Interface",id:"interface",level:3}],h=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const g={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component from Refine for ",(0,r.kt)("strong",{parentName:"p"},"Ant Design")," contains authentication pages that can be used for the login, register, forgot password, and update password actions."),(0,r.kt)("p",null,"Before using ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component you need to add ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},"authProvider")," that will be used to handle authentication."),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.kt)("strong",{parentName:"a"},"Refine CLI")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live  shared",live:!0,"":!0,shared:!0},'const { useNavigation: useNavigationShared, useLogout: useLogoutShared } = RefineCore;\nconst {\n  Typography: { Title: SharedTitle },\n  Button,\n} = AntdCore;\n\nwindow.__refineAuthStatus = false;\n\nconst authProvider = {\n  login: () => {\n    window.__refineAuthStatus = true;\n    return {\n      success: true,\n      redirectTo: "/",\n    };\n  },\n  register: async () => {\n    return {\n      success: true,\n    };\n  },\n  forgotPassword: async () => {\n    return {\n      success: true,\n    };\n  },\n  updatePassword: async () => {\n    return {\n      success: true,\n    };\n  },\n  logout: async () => {\n    window.__refineAuthStatus = false;\n    return {\n      success: true,\n      redirectTo: "/",\n    };\n  },\n  check: async () => {\n    return {\n      authenticated: window.__refineAuthStatus ? true : false,\n      redirectTo: window.__refineAuthStatus ? undefined : "/login",\n    };\n  },\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  getPermissions: async () => null,\n  getIdentity: async () => null,\n};\n\nconst DashboardPage = () => {\n  const { mutate } = useLogoutShared();\n\n  return (\n    <div\n      style={{\n        width: "100%",\n        maxWidth: "400px",\n        margin: "0 auto",\n        textAlign: "center",\n      }}\n    >\n      <SharedTitle level={2}>Home Page</SharedTitle>\n      <br />\n      <button\n        onClick={() => {\n          mutate();\n        }}\n      >\n        Logout\n      </button>\n    </div>\n  );\n};\n\nconst GoogleIcon = (\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path\n      fill="#fff"\n      d="m23.7 12.3-.1-2.3H12.3v4.5h6.4a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.2 3.5-8.8Z M12.3 24c3.2 0 6-1 7.9-3l-3.9-3a7.2 7.2 0 0 1-10.8-3.7h-4v3c2 4 6 6.7 10.8 6.7Z M5.5 14.3a7 7 0 0 1 0-4.6v-3h-4a11.9 11.9 0 0 0 0 10.7l4-3.1Z M12.3 4.8c1.7 0 3.3.6 4.6 1.8L20.3 3A12 12 0 0 0 1.6 6.6l4 3.1c.9-2.8 3.5-5 6.7-5Z"\n    />\n  </svg>\n);\n\nconst GithubIcon = (\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path\n      fill="#fff"\n      d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z"\n    />\n  </svg>\n);\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component can be used like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/login previewHeight=600px",live:!0,url:"http://localhost:3000/login",previewHeight:"600px"},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { AuthPage, ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport routerProvider, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          routerProvider={routerProvider}\n          authProvider={authProvider}\n        >\n          <Routes>\n            <Route\n              element={\n                <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route index element={<DashboardPage />} />\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <NavigateToResource />\n                </Authenticated>\n              }\n            >\n              {/* highlight-start */}\n              <Route path="/login" element={<AuthPage type="login" />} />\n              {/* highlight-end */}\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component has the following types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#login"},(0,r.kt)("inlineCode",{parentName:"a"},"login"))," - a type of login page and default type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#register"},(0,r.kt)("inlineCode",{parentName:"a"},"register"))," - a type of registration page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#forgotpassword"},(0,r.kt)("inlineCode",{parentName:"a"},"forgotPassword"))," - a type of forgot password page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#updatepassword"},(0,r.kt)("inlineCode",{parentName:"a"},"updatePassword"))," - a type of update password page.")),(0,r.kt)("h3",{id:"login"},"Login"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"login")," will be used as the default type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component. The login page will be used to log in to the system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/login previewHeight=600px",live:!0,hideCode:!0,url:"http://localhost:3000/login",previewHeight:"600px"},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\n\nimport { AuthPage, ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          routerProvider={routerProvider}\n          authProvider={authProvider}\n        >\n          <Routes>\n            <Route\n              element={\n                <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route index element={<DashboardPage />} />\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <NavigateToResource />\n                </Authenticated>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/login" element={<AuthPage />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("p",null,"After form submission, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider#login-"},(0,r.kt)("inlineCode",{parentName:"a"},"login"))," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // --\n  login: async ({ email, password, remember, providerName }) => {\n    // You can handle the login process according to your needs.\n\n    // If the process is successful.\n    return {\n      success: true,\n    };\n\n    return {\n      success: false,\n      error: {\n        name: "Login Error",\n        message: "Invalid email or password",\n      },\n    };\n  },\n  // --\n};\n')),(0,r.kt)("h3",{id:"register"},"Register"),(0,r.kt)("p",null,"The register page will be used to register new users. You can use the following props for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component when the type is ",(0,r.kt)("inlineCode",{parentName:"p"},'"register"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/register previewHeight=600px",live:!0,hideCode:!0,url:"http://localhost:3000/register",previewHeight:"600px"},'setInitialRoutes(["/register"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\n\nimport { AuthPage, ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          routerProvider={routerProvider}\n          authProvider={authProvider}\n        >\n          <Routes>\n            <Route\n              element={\n                <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                </Authenticated>\n              }\n            >\n              <Route index element={<DashboardPage />} />\n            </Route>\n            <Route\n              element={\n                <Authenticated fallback={<Outlet />}>\n                  <NavigateToResource />\n                </Authenticated>\n              }\n            >\n              <Route path="/login" element={<AuthPage />} />\n              {/* highlight-next-line */}\n              <Route path="/register" element={<AuthPage type="register" />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("p",null,"After form submission, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider#register"},(0,r.kt)("inlineCode",{parentName:"a"},"register"))," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // --\n  register: async ({ email, password, providerName }) => {\n    // You can handle the register process according to your needs.\n\n    // If the process is successful.\n    return {\n      success: true,\n    };\n\n    return {\n      success: false,\n      error: {\n        name: "Register Error",\n        message: "Invalid email or password",\n      },\n    };\n  },\n  // --\n};\n')),(0,r.kt)("h3",{id:"forgotpassword"},"ForgotPassword"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"forgotPassword")," type is a page that allows users to reset their passwords. You can use this page to reset your password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/forgot-password previewHeight=600px",live:!0,hideCode:!0,url:"http://localhost:3000/forgot-password",previewHeight:"600px"},'setInitialRoutes(["/forgot-password"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\n\nimport { AuthPage, ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        routerProvider={routerProvider}\n        authProvider={authProvider}\n      >\n        <Routes>\n          <Route\n            element={\n              <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              </Authenticated>\n            }\n          >\n            <Route index element={<DashboardPage />} />\n          </Route>\n          <Route\n            element={\n              <Authenticated fallback={<Outlet />}>\n                <NavigateToResource />\n              </Authenticated>\n            }\n          >\n            <Route path="/login" element={<AuthPage />} />\n            <Route path="/register" element={<AuthPage type="register" />} />\n            {/* highlight-next-line */}\n            <Route path="/forgot-password" element={<AuthPage type="forgotPassword" />} />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("p",null,"After form submission, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider#forgotpassword"},(0,r.kt)("inlineCode",{parentName:"a"},"forgotPassword"))," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // --\n  forgotPassword: async ({ email }) => {\n    // You can handle the reset password process according to your needs.\n\n    // If the process is successful.\n    return {\n      success: true,\n    };\n\n    return {\n      success: false,\n      error: {\n        name: "Register Error",\n        message: "Invalid email",\n      },\n    };\n  },\n  // --\n};\n')),(0,r.kt)("h3",{id:"updatepassword"},"UpdatePassword"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"updatePassword")," type is the page used to update the password of the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/update-password previewHeight=600px",live:!0,hideCode:!0,url:"http://localhost:3000/update-password",previewHeight:"600px"},'setInitialRoutes(["/update-password"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, { CatchAllNavigate, NavigateToResource } from "@refinedev/react-router-v6";\n\nimport { AuthPage, ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        routerProvider={routerProvider}\n        authProvider={authProvider}\n      >\n        <Routes>\n          <Route\n            element={\n              <Authenticated fallback={<CatchAllNavigate to="/login" />}>\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              </Authenticated>\n            }\n          >\n            <Route index element={<DashboardPage />} />\n          </Route>\n          <Route\n            element={\n              <Authenticated fallback={<Outlet />}>\n                <NavigateToResource />\n              </Authenticated>\n            }\n          >\n            <Route path="/login" element={<AuthPage />} />\n            <Route path="/register" element={<AuthPage type="register" />} />\n            <Route path="/forgot-password" element={<AuthPage type="forgotPassword" />} />\n            {/* highlight-next-line */}\n            <Route path="/update-password" element={<AuthPage type="updatePassword" />} />\n          </Route>\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("p",null,"After form submission, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider#updatepassword"},(0,r.kt)("inlineCode",{parentName:"a"},"updatePassword"))," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // --\n  updatePassword: async ({ password, confirmPassword }) => {\n    // You can handle the update password process according to your needs.\n\n    // If the process is successful.\n    return {\n      success: true,\n    };\n\n    return {\n      success: false,\n      error: {\n        name: "Login Error",\n        message: "Invalid email or password",\n      },\n    };\n  },\n  // --\n};\n')),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"hideform"},"hideForm"),(0,r.kt)("p",null,"When you set ",(0,r.kt)("inlineCode",{parentName:"p"},"hideForm")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the form will be hidden. You can use this property to show only providers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login" // or "register"\n      hideForm={true}\n      providers={[\n        {\n          name: "google",\n          icon: GoogleIcon,\n          label: "Sign in with Google",\n        },\n        {\n          name: "github",\n          icon: GithubIcon,\n          label: "Sign in with GitHub",\n        },\n      ]}\n    />\n  );\n};\n')),(0,r.kt)("h3",{id:"providers"},"providers"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"providers")," property defines the list of providers used to handle login authentication. ",(0,r.kt)("inlineCode",{parentName:"p"},"providers")," accepts an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," type. This property is only available for types ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"register"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      providers={[\n        {\n          name: "google",\n          icon: GoogleIcon,\n          label: "Sign in with Google",\n        },\n        {\n          name: "github",\n          icon: GithubIcon,\n          label: "Sign in with GitHub",\n        },\n      ]}\n    />\n  );\n};\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#interface"},"Interface section ","\u2192"))),(0,r.kt)("h3",{id:"rememberme"},"rememberMe"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rememberMe")," property defines to render your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"<RememberMe>")," component or you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," to don't render it. This property is only available for type ",(0,r.kt)("inlineCode",{parentName:"p"},"login"),"."),(0,r.kt)("p",null,"You have to wrap your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"<RememberMe>")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Form.Item")," component from ",(0,r.kt)("strong",{parentName:"p"},"Ant Design")," and pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," prop to it then you can access its value from the ",(0,r.kt)("inlineCode",{parentName:"p"},"formProps")," ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinish")," function with ",(0,r.kt)("inlineCode",{parentName:"p"},"formValues"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      rememberMe={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            padding: 3,\n          }}\n        >\n          <Form.Item name="remember" valuePropName="checked" noStyle>\n            <Checkbox>Custom remember me</Checkbox>\n          </Form.Item>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("h3",{id:"loginlink"},"loginLink"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"loginLink")," property defines the link to the login page and also you can give a node to render. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"/login"'),". This property is only available for type ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"forgotPassword"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyRegisterPage = () => {\n  return (\n    <AuthPage\n      type="register"\n      // highlight-start\n      loginLink={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            padding: 3,\n          }}\n        >\n          <Link to="/login">Login</Link>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("h3",{id:"registerlink"},"registerLink"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"registerLink")," property defines the link to the registration page and also you can give a node to render. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"/register"'),". This property is only available for type ",(0,r.kt)("inlineCode",{parentName:"p"},"login"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      registerLink={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            marginTop: 5,\n            padding: 5,\n          }}\n        >\n          <Link to="/register">Register</Link>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("h3",{id:"forgotpasswordlink"},"forgotPasswordLink"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"forgotPasswordLink")," property defines the link to the forgot password page and also you can give a node to render. Its default value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"/forgot-password"'),". This property is only available for type ",(0,r.kt)("inlineCode",{parentName:"p"},"login"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      forgotPasswordLink={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            marginTop: 5,\n            padding: 5,\n          }}\n        >\n          <Link to="/forgot-password">Forgot Password</Link>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("h3",{id:"wrapperprops"},"wrapperProps"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," is used for passing props to the wrapper component. In the example below you can see that the background color is changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      wrapperProps={{\n        style: {\n          background: "#331049",\n        },\n      }}\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("h3",{id:"contentprops"},"contentProps"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps")," is used for passing props to the content component which is the card component. In the example below, you can see that the title, header, and content styles are changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      contentProps={{\n        title: "Login",\n        headStyle: {\n          background: "cornflowerblue",\n          color: "white",\n        },\n        bodyStyle: {\n          background: "#673ab742",\n        },\n      }}\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("h3",{id:"formprops"},"formProps"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"formProps")," is used for passing props to the form component. In the example below you can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialValues")," are changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"formProps")," and also the ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinish")," function is changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      formProps={{\n        initialValues: {\n          email: "demo@refine.dev",\n          password: "demo",\n        },\n        onFinish: (formValues) => alert(JSON.stringify(formValues, null, 2)),\n      }}\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("h3",{id:"title"},"title"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthPage")," uses text with icon on top of page. You can use this property to change the default title."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default text is: Refine Project"),(0,r.kt)("li",{parentName:"ul"},"Default icon is: Refine Logo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AuthPage, ThemedTitle } from "@refinedev/antd";\n\nconst MyLoginPage = () => {\n  return <AuthPage type="login" title={<h1>My Title</h1>} />;\n};\n')),(0,r.kt)("p",null,"Or you can customize the title with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemedTitle")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AuthPage } from "@refinedev/antd";\n\nconst MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      title={<ThemedTitleV2 title="My Title" icon={<img src="https://refine.dev/img/logo.png" />} />}\n    />\n  );\n};\n')),(0,r.kt)("h3",{id:"rendercontent"},"renderContent"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"renderContent")," is used to render the form content and the ",(0,r.kt)("a",{parentName:"p",href:"#title"},"title"),". You can use this property to render your own content, or change the default content and title that it gives you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AuthPage } from "@refinedev/antd";\n\nconst MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      renderContent={(content: React.ReactNode, title: React.ReactNode) => {\n        return (\n          <div\n            style={{\n              display: "flex",\n              flexDirection: "column",\n              justifyContent: "center",\n              alignItems: "center",\n            }}\n          >\n            {title}\n            <h1 style={{ color: "white" }}>Extra Header</h1>\n            {content}\n            <h1 style={{ color: "white" }}>Extra Footer</h1>\n          </div>\n        );\n      }}\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"how-can-i-remove-the-default-title-and-logo-"},"How can I remove the default title and logo ?"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"renderContent")," property to remove the default title and logo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AuthPage } from "@refinedev/antd";\n\nconst MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      renderContent={(\n        content: React.ReactNode,\n        title: React.ReactNode, // not return\n      ) => {\n        return content;\n      }}\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("p",null,"Or you can give ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," property to remove the default title."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AuthPage } from "@refinedev/antd";\n\nconst MyLoginPage = () => {\n  return (\n    <AuthPage\n      type="login"\n      // highlight-start\n      title={false}\n      // highlight-end\n    />\n  );\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(h,{module:"@refinedev/antd/AuthPage","formProps-type":"[`FormProps`](https://ant.design/components/form/#API)","wrapperProps-type":"[`WrapperProps`](https://ant.design/components/layout/#API)","contentProps-type":"[`CardProps`](https://ant.design/components/card/#API)","rememberMe-default":"[`<Checkbox>Remember me</Checkbox>`](/docs/ui-integrations/ant-design/components/auth-page#rememberme)",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"interface"},"Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"interface OAuthProvider {\n  name: string;\n  icon?: React.ReactNode;\n  label?: string;\n}\n")))}m.isMDXComponent=!0}}]);