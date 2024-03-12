"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4929],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},51421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={title:"How to Use the JavaScript Ternary Operator",description:"We expound on the use of JS Ternary Operator with examples of what it is, how it works and discuss the best practices.",slug:"javascript-ternary-operator",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-15-js-ternary/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/javascript-ternary-operator",source:"@site/blog/2024-01-24-js-ternary.md",title:"How to Use the JavaScript Ternary Operator",description:"We expound on the use of JS Ternary Operator with examples of what it is, how it works and discuss the best practices.",date:"2024-01-24T00:00:00.000Z",formattedDate:"January 24, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:7.685,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use the JavaScript Ternary Operator",description:"We expound on the use of JS Ternary Operator with examples of what it is, how it works and discuss the best practices.",slug:"javascript-ternary-operator",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-15-js-ternary/social.png",hide_table_of_contents:!1},prevItem:{title:"TDD vs BDD - A Detailed Guide",permalink:"/blog/tdd-vs-bdd"},nextItem:{title:"gRPC vs REST - A Brief Comparison",permalink:"/blog/grpc-vs-rest"},relatedPosts:[{title:"Synchronous vs. Asynchronous Programming",description:"This article explains the differences between the Syncronous and Asynchronous programming and when to use each.",permalink:"/blog/synchronous-vs-asynchronous",formattedDate:"February 16, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.05,date:"2024-02-16T00:00:00.000Z"},{title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",permalink:"/blog/grpc-vs-rest",formattedDate:"January 22, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:15.055,date:"2024-01-22T00:00:00.000Z"},{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.365,date:"2022-01-18T00:00:00.000Z"}],authorPosts:[{title:"React Memo Guide with Examples",description:"Improve app performance with React.memo().",permalink:"/blog/react-memo-guide",formattedDate:"January 16, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:13.82,date:"2024-01-16T00:00:00.000Z"},{title:"Setting Up the Client App",description:"We'll initialize our Pixels app using Refine and get familiar with the boilerplate code to be created with the create refine-app CLI tool.",permalink:"/blog/refine-pixels-2",formattedDate:"February 15, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:15.07,date:"2023-02-15T00:00:00.000Z"},{title:"Developing Internal Tools in 2024",description:"JavaScript some method implementation on Array with examples",permalink:"/blog/internal-tools",formattedDate:"March 7, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.38,date:"2024-03-07T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is JavaScript Ternary Operator ?",id:"what-is-javascript-ternary-operator-",level:2},{value:"How JS Ternary Operator Works",id:"how-js-ternary-operator-works",level:2},{value:"What are Truthy/Falsy Values ?",id:"what-are-truthyfalsy-values-",level:3},{value:"When to Use the JS Ternary Operator ?",id:"when-to-use-the-js-ternary-operator-",level:2},{value:"JavaScript Ternary Operator: A Shorthand for <code>if/else</code>",id:"javascript-ternary-operator-a-shorthand-for-ifelse",level:3},{value:"Using the JavaScript Ternary Operator to Test a Function&#39;s Truthiness",id:"using-the-javascript-ternary-operator-to-test-a-functions-truthiness",level:3},{value:"Handling Nullish Values with JS Ternary Operator",id:"handling-nullish-values-with-js-ternary-operator",level:3},{value:"JavaScript Ternary Operator: When The Return Value Rules",id:"javascript-ternary-operator-when-the-return-value-rules",level:3},{value:"Chaining Ternary Operators in JavaScript",id:"chaining-ternary-operators-in-javascript",level:3},{value:"JavaScript Ternary Operator Best Practices",id:"javascript-ternary-operator-best-practices",level:2},{value:"Summary",id:"summary",level:2}],h={toc:c};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"This article was last updated on January 24, 2024 to add more detailed information and implementation of JavaScript Ternary Operator"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This post is about the Ternary Operator in JavaScript. We discuss what the ternary operator is and how it works. We go over some examples demonstrating when and why to use it and how it compares to other JavaScript control structures like ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else if/else")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),". We also learn about some of the best practices while using JS Ternary Operator."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-javascript-ternary-operator-"},"What is JavaScript Ternary Operator ?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-js-ternary-operator-works"},"How JS Ternary Operator Works"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-are-truthyfalsy-values-"},"What are Truthy/Falsy Values ?")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#when-to-use-the-js-ternary-operator-"},"When to Use the JS Ternary Operator ?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#javascript-ternary-operator-a-shorthand-for-ifelse"},"JavaScript Ternary Operator: A Shorthand for ",(0,r.kt)("inlineCode",{parentName:"a"},"if/else"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-the-javascript-ternary-operator-to-test-a-functions-truthiness"},"Using the JavaScript Ternary Operator to Test a Function's Truthiness")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#handling-nullish-values-with-js-ternary-operator"},"Handling Nullish Values with JS Ternary Operator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#javascript-ternary-operator-when-the-return-value-rules"},"JavaScript Ternary Operator: When The Return Value Rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#chaining-ternary-operators-in-javascript"},"Chaining Ternary Operators in JavaScript")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#javascript-ternary-operator-best-practices"},"JavaScript Ternary Operator Best Practices"))),(0,r.kt)("h2",{id:"what-is-javascript-ternary-operator-"},"What is JavaScript Ternary Operator ?"),(0,r.kt)("p",null,"The Ternary Operator in JavaScript is a conditional control structure that checks for the return value of an expression and executes a block of code based on whether the value is truthy or falsy. It then returns the return value of the executed block."),(0,r.kt)("p",null,"The JavaScript Ternary Operator is also referred to as the Conditional Operator."),(0,r.kt)("h2",{id:"how-js-ternary-operator-works"},"How JS Ternary Operator Works"),(0,r.kt)("p",null,"The Ternary Operator in JavaScript is denoted by the question mark: ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),". It is called so because it takes three operands:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The conditional expression that returns either ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," based on a check that evaluates to either ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Truthy"},"truthy")," or ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Falsy"},"falsy"),"."),(0,r.kt)("li",{parentName:"ol"},"The block of code which should be executed if the conditional check returns ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ol"},"The block that should run if it returns ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("p",null,"The syntax for the JavaScript Ternary Operator looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"conditionalExpression ? exprIfTruthy : exprIfFalsy;\n")),(0,r.kt)("p",null,"As we can see, the Ternary Operator places the conditional expression before the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," and accepts the executable expressions as two other operands that are separated by a colon, ",(0,r.kt)("inlineCode",{parentName:"p"},":"),"."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"conditionalExpression")," evaluates to a truthy value, ",(0,r.kt)("inlineCode",{parentName:"p"},"exprIfTruthy")," is executed. If it evaluates to a falsy value, ",(0,r.kt)("inlineCode",{parentName:"p"},"exprIfFalsy")," is executed."),(0,r.kt)("h3",{id:"what-are-truthyfalsy-values-"},"What are Truthy/Falsy Values ?"),(0,r.kt)("p",null,"In JavaScript, a ",(0,r.kt)("strong",{parentName:"p"},"truthy")," value corresponds to a value that is considered equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),' had that been converted to a Boolean. This is another way of saying "this thing exists". All values in JavaScript are truthy if they do not evaluate to or are not defined to be ',(0,r.kt)("strong",{parentName:"p"},"falsy"),"."),(0,r.kt)("p",null,"A falsy value is a value that is casted as ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when it is converted to a Boolean. In JavaScript, the following values are coerced / converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0n")," ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"document.all"),"."),(0,r.kt)("p",null,"Expressions that evaluate to anything other than these are considered ",(0,r.kt)("strong",{parentName:"p"},"truthy"),"."),(0,r.kt)("h2",{id:"when-to-use-the-js-ternary-operator-"},"When to Use the JS Ternary Operator ?"),(0,r.kt)("p",null,"We use the JavaScript Ternary Operator when we need to control execution flow between two paths based on a conditional check that returns a Boolean."),(0,r.kt)("p",null,"A simplest example involves testing the value of an expression stored in a variable to see whether it exists or not, and then pursue an execution path based on the outcome. If it exists, we do relevant stuff and return it; if not, do some other relevant stuff and return that. The below code shows how:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Example\n\nconst student = "Abd";\nconst welcomeStudent = student ? `Welcome, ${student}!` : "Welcome, Guest!";\n\nconsole.log(welcomeStudent); // Welcome, Abd!\n')),(0,r.kt)("p",null,"In the above snippet, ",(0,r.kt)("inlineCode",{parentName:"p"},"student ?")," tests to see if ",(0,r.kt)("inlineCode",{parentName:"p"},"student")," is truthy. The value from this conditional test is used to decide the value of the stored variable, ",(0,r.kt)("inlineCode",{parentName:"p"},"welcomeStudent"),". In other words, we are using the conditional operator to control the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"welcomeStudent")," based on the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"student"),"."),(0,r.kt)("p",null,"Notice that the return value of the executed block following the check is returned as the operator's return value. That allow us to store it in ",(0,r.kt)("inlineCode",{parentName:"p"},"welcomeStudent"),"."),(0,r.kt)("h3",{id:"javascript-ternary-operator-a-shorthand-for-ifelse"},"JavaScript Ternary Operator: A Shorthand for ",(0,r.kt)("inlineCode",{parentName:"h3"},"if/else")),(0,r.kt)("p",null,"The Ternary Operator is a concise alternative to ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else"),". For example, we could have written the above control flow like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const student = "Abd";\nlet welcomeStudent;\n\nif (student) {\n  welcomeStudent = `Welcome, ${student.name}!`;\n} else {\n  welcomeStudent = "Welcome, Guest!";\n}\n\nconsole.log(welcomeStudent); // Welcome, Abd!\n')),(0,r.kt)("p",null,"Notice how the ternary operator used previously helped avoid using the above procedural ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else")," flow. The Ternary Operator made the code more readable, reusable and the logic easier to follow."),(0,r.kt)("h3",{id:"using-the-javascript-ternary-operator-to-test-a-functions-truthiness"},"Using the JavaScript Ternary Operator to Test a Function's Truthiness"),(0,r.kt)("p",null,"The ternary operator can also be used when we need to test the return a value of a function. As in the ",(0,r.kt)("inlineCode",{parentName:"p"},"welcomeStudentTernary")," function below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// With if/else\nconst welcomeStudent = (student) => {\n  if (student) {\n    return `Welcome, ${student}!`;\n  } else {\n    return "Welcome, Guest!";\n  }\n};\n\nconsole.log(welcomeStudent("Abd")); // Welcome, Abd!\nconsole.log(welcomeStudent("")); // Welcome, Guest!\nconsole.log(welcomeStudent(null)); // Welcome, Guest!\n\n// With ternary operator\nconst welcomeStudentTernary = (student) =>\n  student ? `Welcome, ${student}!` : "Welcome, Guest!";\n\nconsole.log(welcomeStudentTernary("Abd")); // Welcome, Abd!\nconsole.log(welcomeStudentTernary("")); // Welcome, Guest!\nconsole.log(welcomeStudentTernary(null)); // Welcome, Guest!\n')),(0,r.kt)("p",null,"Again, it provides conciseness. And goes well with arrow functions."),(0,r.kt)("h3",{id:"handling-nullish-values-with-js-ternary-operator"},"Handling Nullish Values with JS Ternary Operator"),(0,r.kt)("p",null,"Notice how the nullish arguments are being considered in both cases. With just a few characters added, the Ternary one-liner offers more convenience to an efficient developer who doesn't want to waste lines for dealing with nullish logic."),(0,r.kt)("h3",{id:"javascript-ternary-operator-when-the-return-value-rules"},"JavaScript Ternary Operator: When The Return Value Rules"),(0,r.kt)("p",null,"It is important to notice that with the Ternary Operator, we are only interested in the return value of the conditional check as well as those of the two execution blocks. Side effects are less important."),(0,r.kt)("p",null,"For example, the Ternary Operator would not be useful for us had being polite or yelling was important to us:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const welcomeStudent = (student) => {\n  if (student) {\n    console.log("First YELL!");\n    return `Welcome, ${student}!`;\n  } else {\n    console.log("Be composed and polite.");\n    return "Welcome, Guest!";\n  }\n};\n\nconsole.log(welcomeStudent("Abd"));\n// "First YELL!"\n// Welcome, Abd!\nconsole.log(welcomeStudent());\n// "Be composed and polite."\n// Welcome, Guest!\n\n// With ternary operator\nconst welcomeStudentTernary = (student) =>\n  student ? `Welcome, ${student}!` : "Welcome, Guest!";\n\nconsole.log(welcomeStudentTernary("Abd")); // Welcome, Abd!\nconsole.log(welcomeStudentTernary("")); // Welcome, Guest!\n')),(0,r.kt)("p",null,"In the case when they are more important, we should be using ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else")," statements, as in ",(0,r.kt)("inlineCode",{parentName:"p"},"welcomeStudent"),". So, the JavaScript Ternary Operator is useful in cases when the return value of the expressions matter more. This is a major distinction between the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else")," and the Ternary operator in JavaScript."),(0,r.kt)("h3",{id:"chaining-ternary-operators-in-javascript"},"Chaining Ternary Operators in JavaScript"),(0,r.kt)("p",null,"We can chain ternary operators to emulate a ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else if/else")," control structure or a ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// With if/else if/else\nconst grade = (mark) => {\n  if (mark > 100) {\n    return;\n  } else if (mark > 80) {\n    return "A";\n  } else if (mark > 70) {\n    return "B";\n  } else if (mark > 60) {\n    return "C";\n  } else if (mark > 50) {\n    return "D";\n  } else {\n    return "F";\n  }\n};\n\nconsole.log(grade(100)); // A\nconsole.log(grade(1000)); // undefined\nconsole.log(grade(10)); // F\n\n// With chained ternary operators\nconst grade = (mark) =>\n  mark > 100\n    ? undefined\n    : mark > 80\n    ? "A"\n    : mark > 70\n    ? "B"\n    : mark > 60\n    ? "C"\n    : mark > 50\n    ? "D"\n    : "F";\n\nconsole.log(grade(100)); // A\nconsole.log(grade(1000)); // undefined\nconsole.log(grade(10)); // F\n')),(0,r.kt)("p",null,"Here, we chained an additional conditional operator into the third operand at each level."),(0,r.kt)("h2",{id:"javascript-ternary-operator-best-practices"},"JavaScript Ternary Operator Best Practices"),(0,r.kt)("p",null,"Many developers do not prefer chained ternary operators like the one above because multiple conditional checks hurt readability and maintainability. Instead of chaining ternary operators, using plain ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else if/else")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statements are recommended when there are multiple paths in a control flow."),(0,r.kt)("p",null,"So, here are some best practices:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the JavaScript Ternary Operator when there are only two paths in the control flow."),(0,r.kt)("li",{parentName:"ul"},"Use the JS Ternary Operator consistently."),(0,r.kt)("li",{parentName:"ul"},"Avoid using chained Ternary Operators as they make the code difficult to read and maintain."),(0,r.kt)("li",{parentName:"ul"},"Use a JavaScript Ternary Operator with arrow functions as they also produce good one-liners."),(0,r.kt)("li",{parentName:"ul"},"In the case complex conditional checks are involved, use parentheses to properly implement the logic. This also improves readability and maintainability")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this post, we expounded on the use of the Ternary Operator in JavaScript. We acknowledged its importance in writing concise code, especially in situations that involve a conditional check and two execution paths."),(0,r.kt)("p",null,"We saw with examples that the JS Ternary Operator is a good alternative to ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else")," and is preferable when the return values of the expressions matter more than side effects. We covered a case where it is useful for storing the value returned from evaluating primitives across the execution path as well as one where the same is done after executing a function."),(0,r.kt)("p",null,"We also encountered an example that shows JavaScript Ternary Operators can be chained to emulate ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else if/else")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," blocks, but the recommended way is to avoid chaining multiple Ternary Operators. We learned about other best practices such as using it consistently in situations where there are only two paths in the control flow, with arrow functions and with parentheses when needed."))}d.isMDXComponent=!0}}]);