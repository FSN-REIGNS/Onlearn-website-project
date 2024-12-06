import{N as s,o as i,c as d,a as n,d as h,C as b,Z as m}from"./CRdEc3un.js";/**
 * @license lucide-vue-next v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=({size:e,strokeWidth:t=2,absoluteStrokeWidth:a,color:r,iconNode:c,name:u,class:k,...g},{slots:l})=>s("svg",{...o,width:e||o.width,height:e||o.height,stroke:r||o.stroke,"stroke-width":a?Number(t)*24/Number(e):t,class:["lucide",`lucide-${w(u??"icon")}`],...g},[...c.map(f=>s(...f)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>(a,{slots:r})=>s(y,{...a,iconNode:t,name:e},r),v=["disabled","aria-busy"],x={key:0,class:"inline-flex items-center"},C={__name:"button",props:{variant:{type:String,default:"primary"},rounded:{type:String,default:"default"},className:{type:String,default:"px-6 py-2"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e){return(t,a)=>(i(),d("button",m({class:["transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",e.variant==="primary"&&"bg-[#20B486] hover:bg-[#1a906b] text-white focus:ring-[#20B486]",e.variant==="secondary"&&"bg-[#FF6636] hover:bg-[#e65c31] text-white focus:ring-[#FF6636]",e.variant==="text"&&"text-gray-600 hover:text-gray-900",e.variant==="outline"&&"border-2 border-[#20B486] text-[#20B486] hover:bg-[#20B486] hover:text-white",e.rounded==="full"?"rounded-full":"rounded-lg",e.className],disabled:e.disabled||e.loading,"aria-busy":e.loading},t.$attrs),[e.loading?(i(),d("span",x,a[0]||(a[0]=[n("svg",{class:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[n("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),n("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),h(" Loading... ")]))):b(t.$slots,"default",{key:1})],16,v))}};export{C as _,p as c};
