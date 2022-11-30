"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{6165:function(e,t,l){l.d(t,{Z:function(){return o}});var n=l(5893),s=l(7294),r=l(1664),a=l.n(r),c=l(1637),i=l(606);function o(e){let{label:t,icon:l,iconSize:r,href:o,target:d,type:m,color:u="white",className:x="",asAnchor:h=!1,small:j=!1,outline:f=!1,active:p=!1,disabled:b=!1,roundedFull:g=!1,onClick:w}=e,N=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",b?"cursor-not-allowed":"cursor-pointer",g?"rounded-full":"rounded",(0,c.pQ)(u,f,!b,p),x];!t&&l?N.push("p-1"):j?N.push("text-sm",g?"px-3 py-1":"p-1"):N.push("py-2",g?"px-6":"px-3"),b&&N.push(f?"opacity-50":"opacity-70");let v=N.join(" "),Z=(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)(i.Z,{path:l,size:r}),t&&(0,n.jsx)("span",{className:j&&l?"px-1":"px-2",children:t})]});return o&&!b?(0,n.jsx)(a(),{href:o,target:d,className:v,children:Z}):s.createElement(h?"a":"button",{className:v,type:null!=m?m:"button",target:d,disabled:b,onClick:w},Z)}},8951:function(e,t,l){var n=l(5893),s=l(7294);let r=e=>{let{type:t="justify-start",mb:l="-mb-3",classAddon:r="mr-3 last:mr-0 mb-3",noWrap:a=!1,children:c}=e;return(0,n.jsx)("div",{className:"flex items-center ".concat(t," ").concat(l," ").concat(a?"flex-nowrap":"flex-wrap"),children:s.Children.map(c,e=>e?(0,s.cloneElement)(e,{className:"".concat(r," ").concat(e.props.className)}):null)})};t.Z=r},2708:function(e,t,l){l.d(t,{Z:function(){return c}});var n=l(5893),s=l(7294);function r(e){let{noPadding:t=!1,className:l,children:s}=e;return(0,n.jsx)("div",{className:"flex-1 ".concat(t?"":"p-6"," ").concat(l),children:s})}function a(e){let{className:t,children:l}=e;return(0,n.jsx)("footer",{className:"p-6 ".concat(t),children:l})}function c(e){let{rounded:t="rounded-2xl",flex:l="flex-col",className:c="",hasComponentLayout:i=!1,hasTable:o=!1,isHoverable:d=!1,isModal:m=!1,children:u,footer:x,onClick:h}=e,j=["bg-white flex",c,t,l,m?"dark:bg-slate-900":"dark:bg-slate-900/70"];return d&&j.push("hover:shadow-lg transition-shadow duration-500"),s.createElement("div",{className:j.join(" "),onClick:h},i?u:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{noPadding:o,children:u}),x&&(0,n.jsx)(a,{children:x})]}))}},4375:function(e,t,l){var n=l(5893);l(7294);let s=e=>{let{title:t,children:l}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,n.jsx)("h1",{className:"text-2xl",children:t}),l]})};t.Z=s},1559:function(e,t,l){var n=l(5893),s=l(5317),r=l(6165),a=l(8951),c=l(2708),i=l(4375),o=l(2766);let d=e=>{let{title:t,buttonColor:l,buttonLabel:d,isActive:m,children:u,onConfirm:x,onCancel:h}=e;if(!m)return null;let j=(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(r.Z,{label:d,color:l,onClick:x}),!!h&&(0,n.jsx)(r.Z,{label:"Cancel",color:l,outline:!0,onClick:h})]});return(0,n.jsx)(o.Z,{onClick:h,className:h?"cursor-pointer":"",children:(0,n.jsxs)(c.Z,{className:"transition-transform shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50",isModal:!0,footer:j,children:[(0,n.jsx)(i.Z,{title:t,children:!!h&&(0,n.jsx)(r.Z,{icon:s.r5M,color:"whiteDark",small:!0,roundedFull:!0})}),(0,n.jsx)("div",{className:"space-y-3",children:u})]})})};t.Z=d},1058:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(5893);l(7294);var s=l(1637),r=l(606);function a(e){let{icon:t,color:l,w:a="w-12",h:c="h-12",bg:i=!1,className:o=""}=e,d=i?s.RH[l]:"".concat(s.uK[l]," bg-gray-50 dark:bg-slate-800");return(0,n.jsx)(r.Z,{path:t,w:a,h:c,size:"24",className:"rounded-full ".concat(d," ").concat(o)})}},4062:function(e,t,l){var n=l(5893),s=l(5317),r=l(7294),a=l(1637),c=l(6165),i=l(606);let o=e=>{let{outline:t=!1,children:l,...o}=e,d=t?a.bN[o.color]:a.RH[o.color],[m,u]=(0,r.useState)(!1),x=e=>{e.preventDefault(),u(!0)};return m?null:(0,n.jsx)("div",{className:"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150 ".concat(d),children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center mb-6 md:mb-0",children:[o.icon&&(0,n.jsx)(i.Z,{path:o.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",className:"md:mr-2"}),(0,n.jsx)("span",{className:"text-center md:text-left md:py-2",children:l})]}),o.button,!o.button&&(0,n.jsx)(c.Z,{icon:s.r5M,color:"white",onClick:x,small:!0,roundedFull:!0})]})})};t.Z=o},5301:function(e,t,l){l.d(t,{Z:function(){return r}});var n=l(5893);l(7294);var s=l(929);function r(e){let{children:t}=e;return(0,n.jsx)("section",{className:"p-6 ".concat(s.DV),children:t})}},3813:function(e,t,l){l.d(t,{Z:function(){return o}});var n=l(5893),s=l(5317),r=l(7294),a=l(6165),c=l(606),i=l(1058);function o(e){let{icon:t,title:l,main:o=!1,children:d}=e,m=!!r.Children.count(d);return(0,n.jsxs)("section",{className:"".concat(o?"":"pt-6"," mb-6 flex items-center justify-between"),children:[(0,n.jsxs)("div",{className:"flex items-center justify-start",children:[t&&o&&(0,n.jsx)(i.Z,{icon:t,color:"light",className:"mr-3",bg:!0}),t&&!o&&(0,n.jsx)(c.Z,{path:t,className:"mr-2",size:"20"}),(0,n.jsx)("h1",{className:"leading-tight ".concat(o?"text-3xl":"text-2xl"),children:l})]}),d,!m&&(0,n.jsx)(a.Z,{icon:s.Shd,color:"whiteDark"})]})}},5807:function(e,t,l){var n=l(5893),s=l(5317),r=l(7294),a=l(7587),c=l(6165),i=l(8951),o=l(1559),d=l(8492);let m=()=>{let{clients:e}=(0,a.X)(),[t,l]=(0,r.useState)(0),m=e.slice(5*t,5*(t+1)),u=e.length/5,x=[];for(let h=0;h<u;h++)x.push(h);let[j,f]=(0,r.useState)(!1),[p,b]=(0,r.useState)(!1),g=()=>{f(!1),b(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.Z,{title:"Sample modal",buttonColor:"info",buttonLabel:"Done",isActive:j,onConfirm:g,onCancel:g,children:[(0,n.jsxs)("p",{children:["Lorem ipsum dolor sit amet ",(0,n.jsx)("b",{children:"adipiscing elit"})]}),(0,n.jsx)("p",{children:"This is sample modal"})]}),(0,n.jsxs)(o.Z,{title:"Please confirm",buttonColor:"danger",buttonLabel:"Confirm",isActive:p,onConfirm:g,onCancel:g,children:[(0,n.jsxs)("p",{children:["Lorem ipsum dolor sit amet ",(0,n.jsx)("b",{children:"adipiscing elit"})]}),(0,n.jsx)("p",{children:"This is sample modal"})]}),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{}),(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Company"}),(0,n.jsx)("th",{children:"City"}),(0,n.jsx)("th",{children:"Progress"}),(0,n.jsx)("th",{children:"Created"}),(0,n.jsx)("th",{})]})}),(0,n.jsx)("tbody",{children:m.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"border-b-0 lg:w-6 before:hidden",children:(0,n.jsx)(d.Z,{username:e.name,className:"w-24 h-24 mx-auto lg:w-6 lg:h-6"})}),(0,n.jsx)("td",{"data-label":"Name",children:e.name}),(0,n.jsx)("td",{"data-label":"Company",children:e.company}),(0,n.jsx)("td",{"data-label":"City",children:e.city}),(0,n.jsx)("td",{"data-label":"Progress",className:"lg:w-32",children:(0,n.jsx)("progress",{className:"flex w-2/5 self-center lg:w-full",max:"100",value:e.progress,children:e.progress})}),(0,n.jsx)("td",{"data-label":"Created",className:"lg:w-1 whitespace-nowrap",children:(0,n.jsx)("small",{className:"text-gray-500 dark:text-slate-400",children:e.created})}),(0,n.jsx)("td",{className:"before:hidden lg:w-1 whitespace-nowrap",children:(0,n.jsxs)(i.Z,{type:"justify-start lg:justify-end",noWrap:!0,children:[(0,n.jsx)(c.Z,{color:"info",icon:s.rgx,onClick:()=>f(!0),small:!0}),(0,n.jsx)(c.Z,{color:"danger",icon:s.QGK,onClick:()=>b(!0),small:!0})]})})]},e.id))})]}),(0,n.jsx)("div",{className:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800",children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between py-3 md:py-0",children:[(0,n.jsx)(i.Z,{children:x.map(e=>(0,n.jsx)(c.Z,{active:e===t,label:e+1,color:e===t?"lightDark":"whiteDark",small:!0,onClick:()=>l(e)},e))}),(0,n.jsxs)("small",{className:"mt-6 md:mt-0",children:["Page ",t+1," of ",u]})]})})]})};t.Z=m},7587:function(e,t,l){l.d(t,{X:function(){return r},p:function(){return a}});var n=l(8100);let s=e=>fetch(e).then(e=>e.json()),r=()=>{var e;let{data:t,error:l}=(0,n.ZP)("/admin-one-react-tailwind/data-sources/clients.json",s);return{clients:null!==(e=null==t?void 0:t.data)&&void 0!==e?e:[],isLoading:!l&&!t,isError:l}},a=()=>{var e;let{data:t,error:l}=(0,n.ZP)("/admin-one-react-tailwind/data-sources/history.json",s);return{transactions:null!==(e=null==t?void 0:t.data)&&void 0!==e?e:[],isLoading:!l&&!t,isError:l}}}}]);