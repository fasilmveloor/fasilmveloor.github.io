(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3697:function(e,t,s){Promise.resolve().then(s.bind(s,3294))},3294:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var n=s(7437);s(5610);var r=s(2265),a=s(7381),l=s(4033);let o=["light","dark"],i="(prefers-color-scheme: dark)",c="undefined"==typeof window,d=(0,r.createContext)(void 0),m={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(d))&&void 0!==e?e:m},h=e=>(0,r.useContext)(d)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),x=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:s=!0,enableColorScheme:n=!0,storageKey:a="theme",themes:l=x,defaultTheme:c=s?"system":"light",attribute:m="data-theme",value:u,children:h,nonce:f})=>{let[j,g]=(0,r.useState)(()=>v(a,c)),[k,w]=(0,r.useState)(()=>v(a)),$=u?Object.values(u):l,N=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&s&&(r=p());let a=u?u[r]:r,l=t?y():null,i=document.documentElement;if("class"===m?(i.classList.remove(...$),a&&i.classList.add(a)):a?i.setAttribute(m,a):i.removeAttribute(m),n){let e=o.includes(c)?c:null,t=o.includes(r)?r:e;i.style.colorScheme=t}null==l||l()},[]),C=(0,r.useCallback)(e=>{g(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),S=(0,r.useCallback)(t=>{let n=p(t);w(n),"system"===j&&s&&!e&&N("system")},[j,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(i);return e.addListener(S),S(e),()=>e.removeListener(S)},[S]),(0,r.useEffect)(()=>{let e=e=>{e.key===a&&C(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{N(null!=e?e:j)},[e,j]);let E=(0,r.useMemo)(()=>({theme:j,setTheme:C,forcedTheme:e,resolvedTheme:"system"===j?k:j,themes:s?[...l,"system"]:l,systemTheme:s?k:void 0}),[j,C,e,k,s,l]);return r.createElement(d.Provider,{value:E},r.createElement(b,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:s,enableColorScheme:n,storageKey:a,themes:l,defaultTheme:c,attribute:m,value:u,children:h,attrs:$,nonce:f}),h)},b=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:s,enableSystem:n,enableColorScheme:a,defaultTheme:l,value:c,attrs:d,nonce:m})=>{let u="system"===l,h="class"===s?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${s}',s='setAttribute';`,x=a?o.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=(e,t=!1,n=!0)=>{let r=c?c[e]:e,l=t?e+"|| ''":`'${r}'`,i="";return a&&n&&!t&&o.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===s?i+=t||r?`c.add(${l})`:"null":r&&(i+=`d[s](n,${l})`),i},b=e?`!function(){${h}${f(e)}}()`:n?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${f(c?"x[e]":"e",!0)}}${u?"":"else{"+f(l,!1,!1)+"}"}${x}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${f(c?"x[e]":"e",!0)}}else{${f(l,!1,!1)};}${x}}catch(t){}}();`;return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:b}})},()=>!0),v=(e,t)=>{let s;if(!c){try{s=localStorage.getItem(e)||void 0}catch(e){}return s||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light");var j=s(5391),g=s(2410);let k=[{label:"Home",page:"home"},{label:"About",page:"about"},{label:"Projects",page:"projects"}];function w(){let{systemTheme:e,theme:t,setTheme:s}=u();(0,l.usePathname)();let[o,i]=(0,r.useState)(!1);return(0,n.jsx)("header",{className:"w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600",children:(0,n.jsxs)("div",{className:"justify-between md:items-center md:flex",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex items-center justify-between py-3 md:py-5 md:block",children:[(0,n.jsx)(a.rU,{to:"home",children:(0,n.jsx)("div",{className:"container flex items-center space-x-2",children:(0,n.jsx)("h2",{className:"text-2xl font-bold",children:"Hosna Qasmei"})})}),(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsx)("button",{className:"p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",onClick:()=>i(!o),children:o?(0,n.jsx)(g.QAE,{size:30}):(0,n.jsx)(g.tgG,{size:30})})})]})}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ".concat(o?"block":"hidden"),children:(0,n.jsxs)("div",{className:"items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0",children:[k.map((e,t)=>(0,n.jsx)(a.rU,{to:e.page,className:"block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100",activeClass:"active",spy:!0,smooth:!0,offset:-100,duration:500,onClick:()=>i(!o),children:e.label},t)),"dark"===("system"===t?e:t)?(0,n.jsx)("button",{onClick:()=>s("light"),className:"bg-slate-100 p-2 rounded-xl",children:(0,n.jsx)(j.sEY,{size:25,color:"black"})}):(0,n.jsx)("button",{onClick:()=>s("dark"),className:"bg-slate-100 p-2 rounded-xl",children:(0,n.jsx)(j.BUV,{size:25})})]})})})]})})}var $=s(9150),N=()=>(0,n.jsxs)("footer",{className:"mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ",children:[(0,n.jsx)("hr",{className:"w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"}),(0,n.jsxs)("div",{className:"mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100",children:["Mohammed Fasil V",(0,n.jsx)("a",{href:"/",className:"hover:underline"})]}),(0,n.jsxs)("div",{className:"flex flex-row items-center justify-center space-x-2 mb-1",children:[(0,n.jsx)("a",{href:"https://github.com/fasilmveloor",rel:"noreferrer",target:"_blank",children:(0,n.jsx)($.idJ,{className:"hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100",size:30})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/fasilmveloor/",rel:"noreferrer",target:"_blank",children:(0,n.jsx)($.Rti,{className:"hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100",size:30})})]})]})]});function C(e){let{children:t}=e;return(0,n.jsxs)("html",{lang:"en",children:[(0,n.jsx)("head",{}),(0,n.jsx)("body",{className:"dark:bg-stone-900",children:(0,n.jsxs)(h,{enableSystem:!0,attribute:"class",children:[(0,n.jsx)(w,{}),t,(0,n.jsx)(N,{})]})})]})}},5610:function(){},4033:function(e,t,s){e.exports=s(8165)}},function(e){e.O(0,[929,400,712,14,971,596,744],function(){return e(e.s=3697)}),_N_E=e.O()}]);