"use strict";(self.webpackChunk_001=self.webpackChunk_001||[]).push([[6],{2006:function(e,r,t){t.r(r),t.d(r,{default:function(){return M}});var a=t(2791),n=(0,t(5217).Z)((function(e){return{container1:{flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start"},container2:{flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start","& .MuiAvatar-root":{width:"240px",height:"240px",objectFit:"contain",display:"grid"}},gap8:{gap:"8px"},avatar:{width:"240px",height:"240px",objectFit:"contain"}}})),o=t(9448),i=t.n(o),c=t(885),l=t(3366),s=t(7462),u=t(8182),d=t(767),f=t(4238),v=t(2771),p=t(9201),m=t(184),h=(0,p.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),g=t(5159);function x(e){return(0,g.Z)("MuiAvatar",e)}(0,t(208).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var Z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],b=(0,f.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:r.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:r.palette.background.default,backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]})})),y=(0,f.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),k=(0,f.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var j=a.forwardRef((function(e,r){var t=(0,v.Z)({props:e,name:"MuiAvatar"}),n=t.alt,o=t.children,i=t.className,f=t.component,p=void 0===f?"div":f,h=t.imgProps,g=t.sizes,j=t.src,w=t.srcSet,S=t.variant,N=void 0===S?"circular":S,R=(0,l.Z)(t,Z),D=null,A=function(e){var r=e.crossOrigin,t=e.referrerPolicy,n=e.src,o=e.srcSet,i=a.useState(!1),l=(0,c.Z)(i,2),s=l[0],u=l[1];return a.useEffect((function(){if(n||o){u(!1);var e=!0,a=new Image;return a.onload=function(){e&&u("loaded")},a.onerror=function(){e&&u("error")},a.crossOrigin=r,a.referrerPolicy=t,a.src=n,o&&(a.srcset=o),function(){e=!1}}}),[r,t,n,o]),s}((0,s.Z)({},h,{src:j,srcSet:w})),M=j||w,P=M&&"error"!==A,C=(0,s.Z)({},t,{colorDefault:!P,component:p,variant:N}),I=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,d.Z)(t,x,r)}(C);return D=P?(0,m.jsx)(y,(0,s.Z)({alt:n,src:j,srcSet:w,sizes:g,ownerState:C,className:I.img},h)):null!=o?o:M&&n?n[0]:(0,m.jsx)(k,{className:I.fallback}),(0,m.jsx)(b,(0,s.Z)({as:p,ownerState:C,className:(0,u.Z)(I.root,i),ref:r},R,{children:D}))})),w=t(3767),S=t(890),N=t(6871),R=t(6030),D=t(1435),A=function(){var e,r=(0,R.I0)(),t=(0,R.v9)((function(e){return null===e||void 0===e?void 0:e.character})),n=(0,N.UO)().name;return(0,a.useEffect)((function(){r({type:D.x5,payload:{name:n}})}),[r,n]),{character:!(null!==t&&void 0!==t&&t.isError)&&(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.length)>0&&t.data[0]}},M=function(){var e=n(),r=i().bind(e),t=A().character,o=t.name,c=t.nickname,l=t.birthday,s=t.img,u=t.status,d=t.occupation,f=(0,a.useCallback)((function(){return d.map((function(e){return(0,m.jsx)(S.Z,{display:"block",component:"div",children:e},e)}))}),[d]);return(0,m.jsxs)(w.Z,{className:r(e.container1,e.gap8),children:[(0,m.jsxs)(w.Z,{className:r(e.container2,e.gap8),children:[(0,m.jsx)(j,{alt:o,src:s,className:e.avatar}),(0,m.jsxs)(w.Z,{className:e.container1,children:[(0,m.jsxs)(S.Z,{display:"block",component:"div",children:["Name: ",o]}),(0,m.jsxs)(S.Z,{display:"block",component:"div",children:["Nickname: ",c]}),(0,m.jsxs)(S.Z,{display:"block",component:"div",children:["Birthday: ",l]}),(0,m.jsxs)(S.Z,{display:"block",component:"div",children:["Status: ",u]})]})]}),(0,m.jsxs)(w.Z,{className:r(e.container1,e.gap8),children:[(0,m.jsx)(S.Z,{display:"block",component:"div",children:"Occupations:"}),d&&(null===d||void 0===d?void 0:d.length)>0&&f()]})]})}}}]);
//# sourceMappingURL=6.7e3bd062.chunk.js.map