(()=>{var e={};e.id=492,e.ids=[492],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},1684:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c});var n=o(8240),r=o(9263),s=o(4199),a=o.n(s),i=o(7496),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);o.d(t,l);let c=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.t.bind(o,917,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(o.bind(o,7421)),"/Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/apps-next/blog-starter-app/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(o.t.bind(o,917,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(o.t.bind(o,9528,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(o.t.bind(o,393,23)),"next/dist/client/components/unauthorized-error"]}],d=[],m={require:o,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7252:(e,t,o)=>{Promise.resolve().then(o.bind(o,7675))},3636:(e,t,o)=>{Promise.resolve().then(o.bind(o,9387))},1379:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,815,23)),Promise.resolve().then(o.t.bind(o,627,23)),Promise.resolve().then(o.t.bind(o,4199,23)),Promise.resolve().then(o.t.bind(o,7462,23)),Promise.resolve().then(o.t.bind(o,4997,23)),Promise.resolve().then(o.t.bind(o,5686,23)),Promise.resolve().then(o.t.bind(o,9405,23))},7035:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,1135,23)),Promise.resolve().then(o.t.bind(o,8131,23)),Promise.resolve().then(o.t.bind(o,983,23)),Promise.resolve().then(o.t.bind(o,550,23)),Promise.resolve().then(o.t.bind(o,4674,23)),Promise.resolve().then(o.t.bind(o,3830,23)),Promise.resolve().then(o.t.bind(o,9173,23))},9387:(e,t,o)=>{"use strict";let n;o.d(t,{ThemeSwitcher:()=>u});var r=o(8888),s=o(2724),a=o.n(s),i=o(22);let l="nextjs-blog-starter-theme",c=["system","dark","light"],d=e=>{let[t,o,n]=["system","dark","light"],r=()=>{let e=document.createElement("style");return e.textContent="*,*:after,*:before{transition:none !important;}",document.head.appendChild(e),()=>{getComputedStyle(document.body),setTimeout(()=>document.head.removeChild(e),1)}},s=matchMedia(`(prefers-color-scheme: ${o})`);window.updateDOM=()=>{let a=r(),i=localStorage.getItem(e)??t,l=s.matches?o:n,c=i===t?l:i,d=document.documentElement.classList;c===o?d.add(o):d.remove(o),document.documentElement.setAttribute("data-mode",i),a()},window.updateDOM(),s.addEventListener("change",window.updateDOM)},m=()=>{let[e,t]=(0,i.useState)(()=>("undefined"!=typeof localStorage&&localStorage.getItem(l))??"system");return(0,i.useEffect)(()=>{n=window.updateDOM,addEventListener("storage",e=>{e.key===l&&t(e.newValue)})},[]),(0,i.useEffect)(()=>{localStorage.setItem(l,e),n()},[e]),(0,r.jsx)("button",{suppressHydrationWarning:!0,className:a().switch,onClick:()=>{let o=c.indexOf(e);t(c[(o+1)%c.length])}})},p=(0,i.memo)(()=>(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:`(${d.toString()})('${l}')`}})),u=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(m,{})]})},2724:()=>{throw Error("Module build failed (from ../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nReferenceError: module is not defined in ES module scope\nThis file is being treated as an ES module because it has a '.js' file extension and '/Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/apps-next/blog-starter-app/package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\n    at file:///Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/apps-next/blog-starter-app/postcss.config.js:1:1\n    at ModuleJob.run (node:internal/modules/esm/module_job:268:25)\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)\n    at async findConfig (/Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/lib/find-config.js:85:25)\n    at async getPostCssPlugins (/Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/config/blocks/css/plugins.js:89:18)\n    at async /Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/config/blocks/css/index.js:124:36\n    at async /Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js:52:40\n    at async Span.traceAsyncFn (/Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_@opentelemetry+api@1.9.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/trace/trace.js:153:20)")},3057:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var n=o(6424);let r=({children:e})=>(0,n.jsx)("div",{className:"container mx-auto px-5",children:e})},7675:(e,t,o)=>{"use strict";o.d(t,{ThemeSwitcher:()=>r});var n=o(9804);(0,n.registerClientReference)(function(){throw Error("Attempted to call NoFOUCScript() from the server but NoFOUCScript is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/apps-next/blog-starter-app/src/app/_components/theme-switcher.tsx","NoFOUCScript");let r=(0,n.registerClientReference)(function(){throw Error("Attempted to call ThemeSwitcher() from the server but ThemeSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/mikeconnor/code/code-2024/turbo-test/mikeconnors-awesome-monorepo/apps-next/blog-starter-app/src/app/_components/theme-switcher.tsx","ThemeSwitcher")},7421:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>u,metadata:()=>p});var n=o(6424),r=o(3057),s=o(3671);let a=function(){return(0,n.jsx)("footer",{className:"bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800",children:(0,n.jsx)(r.A,{children:(0,n.jsxs)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[(0,n.jsx)("h3",{className:"text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"Statically Generated with Next.js."}),(0,n.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:[(0,n.jsx)("a",{href:"https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"}),(0,n.jsx)("a",{href:`https://github.com/vercel/next.js/tree/canary/examples/${s.PB}`,className:"mx-3 font-bold hover:underline",children:"View on GitHub"})]})]})})})};var i=o(8153),l=o.n(i),c=o(9800),d=o.n(c),m=o(7675);o(3445);let p={title:`Next.js Blog Example with ${s.yc}`,description:`A statically generated blog example using Next.js and ${s.yc}.`,openGraph:{images:[s.jl]}};function u({children:e}){return(0,n.jsxs)("html",{lang:"en",children:[(0,n.jsxs)("head",{children:[(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,n.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"})]}),(0,n.jsxs)("body",{className:d()(l().className,"dark:bg-slate-900 dark:text-slate-400"),children:[(0,n.jsx)(m.ThemeSwitcher,{}),(0,n.jsx)("div",{className:"min-h-screen",children:e}),(0,n.jsx)(a,{})]})]})}},3671:(e,t,o)=>{"use strict";o.d(t,{PB:()=>n,jl:()=>s,yc:()=>r});let n="blog-starter",r="Markdown",s="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"},3445:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),n=t.X(0,[618],()=>o(1684));module.exports=n})();