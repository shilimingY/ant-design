"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[31055],{489705:function(ie,x,e){e.d(x,{Z:function(){return L}});var D=e(487462),a=e(667294),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},i=v,g=e(713401),n=function(o,S){return a.createElement(g.Z,(0,D.Z)({},o,{ref:S,icon:i}))},L=a.forwardRef(n)},900366:function(ie,x,e){e.d(x,{Z:function(){return Ze}});var D=e(601413),a=e(487462),v=e(671002),i=e(297685),g=e(912402),n=e(667294),L=e(602788),F=e(440228),o=e(294184),S=e.n(o),V=e(908410),y=e(821770),T=e(366680);function A(h){var r=window.innerWidth||document.documentElement.clientWidth,u=window.innerHeight||document.documentElement.clientHeight,p=h.getBoundingClientRect(),m=p.top,z=p.right,B=p.bottom,ee=p.left;return m>=0&&ee>=0&&z<=r&&B<=u}function U(h,r,u){var p;return(p=u!=null?u:r)!==null&&p!==void 0?p:h===null?"center":"bottom"}function K(h,r,u,p){var m=(0,n.useState)(void 0),z=(0,i.Z)(m,2),B=z[0],ee=z[1];(0,V.Z)(function(){var l=typeof h=="function"?h():h;ee(l||null)});var O=(0,n.useState)(null),t=(0,i.Z)(O,2),f=t[0],c=t[1],d=(0,T.Z)(function(){if(B){!A(B)&&r&&B.scrollIntoView(p);var l=B.getBoundingClientRect(),_=l.left,s=l.top,H=l.width,W=l.height,$={left:_,top:s,width:H,height:W,radius:0};c(function(M){return JSON.stringify(M)!==JSON.stringify($)?$:M})}else c(null)}),C=function(_){var s;return(s=Array.isArray(u==null?void 0:u.offset)?u==null?void 0:u.offset[_]:u==null?void 0:u.offset)!==null&&s!==void 0?s:6};(0,V.Z)(function(){return d(),window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}},[B,r,d]);var E=(0,n.useMemo)(function(){if(!f)return f;var l=C(0),_=C(1),s=(u==null?void 0:u.radius)||2;return{left:f.left-l,top:f.top-_,width:f.width+l*2,height:f.height+_*2,radius:s}},[f,u]);return[E,B]}var k=e(807028),j={fill:"transparent",pointerEvents:"auto"},q=function(r){var u=r.prefixCls,p=r.rootClassName,m=r.pos,z=r.showMask,B=r.style,ee=B===void 0?{}:B,O=r.fill,t=O===void 0?"rgba(0,0,0,0.5)":O,f=r.open,c=r.animated,d=r.zIndex,C=(0,k.Z)(),E="".concat(u,"-mask-").concat(C),l=(0,v.Z)(c)==="object"?c==null?void 0:c.placeholder:c;return n.createElement(L.Z,{open:f,autoLock:!0},n.createElement("div",{className:S()("".concat(u,"-mask"),p),style:(0,D.Z)({position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:d,pointerEvents:"none"},ee)},z?n.createElement("svg",{style:{width:"100%",height:"100%"}},n.createElement("defs",null,n.createElement("mask",{id:E},n.createElement("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"}),m&&n.createElement("rect",{x:m.left,y:m.top,rx:m.radius,width:m.width,height:m.height,fill:"black",className:l?"".concat(u,"-placeholder-animated"):""}))),n.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:t,mask:"url(#".concat(E,")")}),m&&n.createElement(n.Fragment,null,n.createElement("rect",(0,a.Z)({},j,{x:"0",y:"0",width:"100%",height:m.top})),n.createElement("rect",(0,a.Z)({},j,{x:"0",y:"0",width:m.left,height:"100%"})),n.createElement("rect",(0,a.Z)({},j,{x:"0",y:m.top+m.height,width:"100%",height:"calc(100vh - ".concat(m.top+m.height,"px)")})),n.createElement("rect",(0,a.Z)({},j,{x:m.left+m.width,y:"0",width:"calc(100vw - ".concat(m.left+m.width,"px)"),height:"100%"})))):null))},P=q,xe={adjustX:1,adjustY:1},Pe=[0,0],ye={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function R(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,r={};return Object.keys(ye).forEach(function(u){r[u]=(0,D.Z)((0,D.Z)({},ye[u]),{},{autoArrow:h,targetOffset:Pe})}),r}var Oe=R(),Se=e(974902);function Me(h){var r=h.prefixCls,u=h.current,p=h.total,m=h.title,z=h.description,B=h.onClose,ee=h.onPrev,O=h.onNext,t=h.onFinish,f=h.className,c=h.closeIcon,d=c!==!1&&c!==null,C=c!==void 0&&c!==!0?c:n.createElement("span",{className:"".concat(r,"-close-x")},"\xD7");return n.createElement("div",{className:S()("".concat(r,"-content"),f)},n.createElement("div",{className:"".concat(r,"-inner")},d&&n.createElement("button",{type:"button",onClick:B,"aria-label":"Close",className:"".concat(r,"-close")},C),n.createElement("div",{className:"".concat(r,"-header")},n.createElement("div",{className:"".concat(r,"-title")},m)),n.createElement("div",{className:"".concat(r,"-description")},z),n.createElement("div",{className:"".concat(r,"-footer")},n.createElement("div",{className:"".concat(r,"-sliders")},p>1?(0,Se.Z)(Array.from({length:p}).keys()).map(function(E,l){return n.createElement("span",{key:E,className:l===u?"active":""})}):null),n.createElement("div",{className:"".concat(r,"-buttons")},u!==0?n.createElement("button",{className:"".concat(r,"-prev-btn"),onClick:ee},"Prev"):null,u===p-1?n.createElement("button",{className:"".concat(r,"-finish-btn"),onClick:t},"Finish"):n.createElement("button",{className:"".concat(r,"-next-btn"),onClick:O},"Next")))))}var Te=function(r){var u=r.current,p=r.renderPanel;return n.createElement(n.Fragment,null,typeof p=="function"?p(r,u):n.createElement(Me,r))},me=Te,Ae=["prefixCls","steps","defaultCurrent","current","onChange","onClose","onFinish","open","mask","arrow","rootClassName","placement","renderPanel","gap","animated","scrollIntoViewOptions","zIndex","closeIcon"],Re={left:"50%",top:"50%",width:1,height:1},je=function(r){var u=r.prefixCls,p=u===void 0?"rc-tour":u,m=r.steps,z=m===void 0?[]:m,B=r.defaultCurrent,ee=r.current,O=r.onChange,t=r.onClose,f=r.onFinish,c=r.open,d=r.mask,C=d===void 0?!0:d,E=r.arrow,l=E===void 0?!0:E,_=r.rootClassName,s=r.placement,H=r.renderPanel,W=r.gap,$=r.animated,M=r.scrollIntoViewOptions,te=M===void 0?!0:M,X=r.zIndex,w=X===void 0?1001:X,le=r.closeIcon,ne=(0,g.Z)(r,Ae),Z=n.useRef(),N=(0,y.default)(0,{value:ee,defaultValue:B}),re=(0,i.Z)(N,2),b=re[0],Y=re[1],I=(0,y.default)(void 0,{value:c,postState:function(ae){return b<0||b>=z.length?!1:ae!=null?ae:!0}}),se=(0,i.Z)(I,2),G=se[0],ge=se[1],ce=n.useRef(G);(0,V.Z)(function(){G&&!ce.current&&Y(0),ce.current=G},[G]);var J=z[b]||{},he=J.target,Ne=J.placement,We=J.style,_e=J.arrow,be=J.className,Ce=J.mask,ve=J.scrollIntoViewOptions,Ee=J.closeIcon,fe=G&&(Ce!=null?Ce:C),Le=Ee!=null?Ee:le,Ue=ve!=null?ve:te,oe=K(he,c,W,Ue),de=(0,i.Z)(oe,2),Q=de[0],De=de[1],He=U(De,s,Ne),Ie=De?typeof _e=="undefined"?l:_e:!1,Ke=(0,v.Z)(Ie)==="object"?Ie.pointAtCenter:!1;(0,V.Z)(function(){var ue;(ue=Z.current)===null||ue===void 0||ue.forceAlign()},[Ke,b]);var ze=function(ae){Y(ae),O==null||O(ae)};if(De===void 0)return null;var Fe=function(){ge(!1),t==null||t(b)},$e=function(){return n.createElement(me,(0,a.Z)({arrow:Ie,key:"content",prefixCls:p,total:z.length,renderPanel:H,onPrev:function(){ze(b-1)},onNext:function(){ze(b+1)},onClose:Fe,current:b,onFinish:function(){Fe(),f==null||f()},closeIcon:Le},z[b]))},Ve=typeof fe=="boolean"?fe:!!fe,pe=typeof fe=="boolean"?void 0:fe,Xe=function(ae){return ae||De||document.body};return n.createElement(n.Fragment,null,n.createElement(P,{zIndex:w,prefixCls:p,pos:Q,showMask:Ve,style:pe==null?void 0:pe.style,fill:pe==null?void 0:pe.color,open:G,animated:$,rootClassName:_}),n.createElement(F.Z,(0,a.Z)({builtinPlacements:R(Ke)},ne,{ref:Z,popupStyle:We,popupPlacement:He,popupVisible:G,popupClassName:S()(_,be),prefixCls:p,popup:$e,forceRender:!1,destroyPopupOnHide:!0,zIndex:w,getTriggerDOMNode:Xe,arrow:!!Ie}),n.createElement(L.Z,{open:G,autoLock:!0},n.createElement("div",{className:S()(_,"".concat(p,"-target-placeholder")),style:(0,D.Z)((0,D.Z)({},Q||Re),{},{position:"fixed",pointerEvents:"none"})}))))},Be=je,Ze=Be},739838:function(ie,x,e){e.d(x,{Z:function(){return ee}});var D=e(238416),a=e.n(D),v=e(242122),i=e.n(v),g=e(627424),n=e.n(g),L=e(670215),F=e.n(L),o=e(667294),S=e(900366),V=e(294184),y=e.n(V),T=e(566440),A=e(73287),U=e(301192),K=e(600861),k=e.n(K),j=e(740753),q=e.n(j),P=e(988872),xe=e(824504),Pe=e(667128),ye=e(46287),R=e(785893);function Oe(O){return O!=null}var Se=function(t){var f,c,d=t.stepProps,C=t.current,E=t.type,l=t.indicatorsRender,_=t.closeIcon,s=d.prefixCls,H=d.total,W=H===void 0?1:H,$=d.title,M=d.onClose,te=d.onPrev,X=d.onNext,w=d.onFinish,le=d.cover,ne=d.description,Z=d.nextButtonProps,N=d.prevButtonProps,re=d.type,b=d.closeIcon,Y=re!=null?re:E,I=b!=null?b:_,se=I!==!1&&I!==null,G=(0,ye.Z)(se,I,function(de){return(0,R.jsx)("span",{onClick:M,"aria-label":"Close",className:"".concat(s,"-close"),children:de})},(0,R.jsx)(q(),{className:"".concat(s,"-close-icon")}),!0),ge=n()(G,2),ce=ge[0],J=ge[1],he=C===W-1,Ne=function(){var Q;te==null||te(),N==null||(Q=N.onClick)===null||Q===void 0||Q.call(N)},We=function(){var Q;he?w==null||w():X==null||X(),Z==null||(Q=Z.onClick)===null||Q===void 0||Q.call(Z)},_e=Oe($)?(0,R.jsx)("div",{className:"".concat(s,"-header"),children:(0,R.jsx)("div",{className:"".concat(s,"-title"),children:$})}):null,be=Oe(ne)?(0,R.jsx)("div",{className:"".concat(s,"-description"),children:ne}):null,Ce=Oe(le)?(0,R.jsx)("div",{className:"".concat(s,"-cover"),children:le}):null,ve;l?ve=l(C,W):ve=k()(Array.from({length:W}).keys()).map(function(de,Q){return(0,R.jsx)("span",{className:y()(Q===C&&"".concat(s,"-indicator-active"),"".concat(s,"-indicator"))},de)});var Ee=Y==="primary"?"default":"primary",fe={type:"default",ghost:Y==="primary"},Le=(0,xe.Z)("Tour",Pe.Z.Tour),Ue=n()(Le,1),oe=Ue[0];return(0,R.jsx)("div",{className:"".concat(s,"-content"),children:(0,R.jsxs)("div",{className:"".concat(s,"-inner"),children:[ce&&J,Ce,_e,be,(0,R.jsxs)("div",{className:"".concat(s,"-footer"),children:[W>1&&(0,R.jsx)("div",{className:"".concat(s,"-indicators"),children:ve}),(0,R.jsxs)("div",{className:"".concat(s,"-buttons"),children:[C!==0?(0,R.jsx)(P.ZP,i()(i()(i()({},fe),N),{},{onClick:Ne,size:"small",className:y()("".concat(s,"-prev-btn"),N==null?void 0:N.className),children:(f=N==null?void 0:N.children)!==null&&f!==void 0?f:oe==null?void 0:oe.Previous})):null,(0,R.jsx)(P.ZP,i()(i()({type:Ee},Z),{},{onClick:We,size:"small",className:y()("".concat(s,"-next-btn"),Z==null?void 0:Z.className),children:(c=Z==null?void 0:Z.children)!==null&&c!==void 0?c:he?oe==null?void 0:oe.Finish:oe==null?void 0:oe.Next}))]})]})]})})},Me=Se,Te=e(974638),me=e(510274),Ae=e(548073),Re=e(39269),je=e(141035),Be=e(986943),Ze=function(t){var f,c,d,C,E,l=t.componentCls,_=t.lineHeight,s=t.padding,H=t.paddingXS,W=t.borderRadius,$=t.borderRadiusXS,M=t.colorPrimary,te=t.colorText,X=t.colorFill,w=t.indicatorHeight,le=t.indicatorWidth,ne=t.boxShadowTertiary,Z=t.tourZIndexPopup,N=t.fontSize,re=t.colorBgElevated,b=t.fontWeightStrong,Y=t.marginXS,I=t.colorTextLightSolid,se=t.tourBorderRadius,G=t.colorWhite,ge=t.colorBgTextHover,ce=t.tourCloseSize,J=t.motionDurationSlow,he=t.antCls;return[(E={},a()(E,l,i()(i()({},(0,Ae.Wf)(t)),{},(C={color:te,position:"absolute",zIndex:Z,display:"block",visibility:"visible",fontSize:N,lineHeight:_,width:520,"--antd-arrow-background-color":re,"&-pure":{maxWidth:"100%",position:"relative"}},a()(C,"&".concat(l,"-hidden"),{display:"none"}),a()(C,"".concat(l,"-content"),{position:"relative"}),a()(C,"".concat(l,"-inner"),(c={textAlign:"start",textDecoration:"none",borderRadius:se,boxShadow:ne,position:"relative",backgroundColor:re,border:"none",backgroundClip:"padding-box"},a()(c,"".concat(l,"-close"),{position:"absolute",top:s,insetInlineEnd:s,color:t.colorIcon,outline:"none",width:ce,height:ce,borderRadius:t.borderRadiusSM,transition:"background-color ".concat(t.motionDurationMid,", color ").concat(t.motionDurationMid),display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.wireframe?"transparent":t.colorFillContent}}),a()(c,"".concat(l,"-cover"),{textAlign:"center",padding:"".concat(s+ce+H,"px ").concat(s,"px 0"),img:{width:"100%"}}),a()(c,"".concat(l,"-header"),a()({padding:"".concat(s,"px ").concat(s,"px ").concat(H,"px")},"".concat(l,"-title"),{lineHeight:_,fontSize:N,fontWeight:b})),a()(c,"".concat(l,"-description"),{padding:"0 ".concat(s,"px"),lineHeight:_,wordWrap:"break-word"}),a()(c,"".concat(l,"-footer"),(f={padding:"".concat(H,"px ").concat(s,"px ").concat(s,"px"),textAlign:"end",borderRadius:"0 0 ".concat($,"px ").concat($,"px"),display:"flex"},a()(f,"".concat(l,"-indicators"),a()({display:"inline-block"},"".concat(l,"-indicator"),{width:le,height:w,display:"inline-block",borderRadius:"50%",background:X,"&:not(:last-child)":{marginInlineEnd:w},"&-active":{background:M}})),a()(f,"".concat(l,"-buttons"),a()({marginInlineStart:"auto"},"".concat(he,"-btn"),{marginInlineStart:Y})),f)),c)),a()(C,"".concat(l,"-primary, &").concat(l,"-primary"),a()({"--antd-arrow-background-color":M},"".concat(l,"-inner"),(d={color:I,textAlign:"start",textDecoration:"none",backgroundColor:M,borderRadius:W,boxShadow:ne},a()(d,"".concat(l,"-close"),{color:I}),a()(d,"".concat(l,"-indicators"),a()({},"".concat(l,"-indicator"),{background:new me.C(I).setAlpha(.15).toRgbString(),"&-active":{background:I}})),a()(d,"".concat(l,"-prev-btn"),{color:I,borderColor:new me.C(I).setAlpha(.15).toRgbString(),backgroundColor:M,"&:hover":{backgroundColor:new me.C(I).setAlpha(.15).toRgbString(),borderColor:"transparent"}}),a()(d,"".concat(l,"-next-btn"),{color:M,borderColor:"transparent",background:G,"&:hover":{background:new me.C(ge).onBackground(G).toRgbString()}}),d))),C))),a()(E,"".concat(l,"-mask"),a()({},"".concat(l,"-placeholder-animated"),{transition:"all ".concat(J)})),a()(E,["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(","),a()({},"".concat(l,"-inner"),{borderRadius:Math.min(se,Re.qN)})),E),(0,Re.ZP)(t,{colorBg:"var(--antd-arrow-background-color)",contentRadius:se,limitVerticalRadius:!0})]},h=(0,je.Z)("Tour",function(O){var t=O.borderRadiusLG,f=O.fontSize,c=O.lineHeight,d=(0,Be.TS)(O,{tourZIndexPopup:O.zIndexPopupBase+70,indicatorWidth:6,indicatorHeight:6,tourBorderRadius:t,tourCloseSize:f*c});return[Ze(d)]}),r=e(835981),u=["prefixCls","current","total","className","style","type"],p=function(t){var f=t.prefixCls,c=t.current,d=c===void 0?0:c,C=t.total,E=C===void 0?6:C,l=t.className,_=t.style,s=t.type,H=F()(t,u),W=o.useContext(A.E_),$=W.getPrefixCls,M=$("tour",f),te=h(M),X=n()(te,2),w=X[0],le=X[1];return w((0,R.jsx)(Te.t5,{prefixCls:M,hashId:le,className:y()(l,"".concat(M,"-pure"),s&&"".concat(M,"-").concat(s)),style:_,children:(0,R.jsx)(Me,{stepProps:i()(i()({},H),{},{prefixCls:M,total:E}),current:d,type:s})}))},m=(0,r.i)(p),z=["prefixCls","type","rootClassName","indicatorsRender","steps"],B=function(t){var f=t.prefixCls,c=t.type,d=t.rootClassName,C=t.indicatorsRender,E=t.steps,l=F()(t,z),_=(0,o.useContext)(A.E_),s=_.getPrefixCls,H=_.direction,W=s("tour",f),$=h(W),M=n()($,2),te=M[0],X=M[1],w=(0,U.Z)(),le=n()(w,2),ne=le[1],Z=(0,o.useMemo)(function(){return E==null?void 0:E.map(function(Y){var I;return i()(i()({},Y),{},{className:y()(Y.className,a()({},"".concat(W,"-primary"),((I=Y.type)!==null&&I!==void 0?I:c)==="primary"))})})},[E,c]),N=(0,T.Z)({arrowPointAtCenter:!0,autoAdjustOverflow:!0,offset:ne.marginXXS,arrowWidth:ne.sizePopupArrow,borderRadius:ne.borderRadius}),re=y()(a()({},"".concat(W,"-rtl"),H==="rtl"),X,d),b=function(I,se){return(0,R.jsx)(Me,{type:c,stepProps:I,current:se,indicatorsRender:C})};return te((0,R.jsx)(S.Z,i()(i()({},l),{},{rootClassName:re,prefixCls:W,animated:!0,renderPanel:b,builtinPlacements:N,steps:Z})))};B._InternalPanelDoNotUseOrYouWillBeFired=m;var ee=B},649150:function(ie,x,e){e.r(x);var D=e(627424),a=e.n(D),v=e(667294),i=e(489705),g=e(988872),n=e(315816),L=e(945016),F=e(739838),o=e(785893),S=function(){var y=(0,v.useRef)(null),T=(0,v.useRef)(null),A=(0,v.useRef)(null),U=(0,v.useState)(!1),K=a()(U,2),k=K[0],j=K[1],q=[{title:"Upload File",description:"Put your files here.",cover:(0,o.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return y.current}},{title:"Save",description:"Save your changes.",target:function(){return T.current}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return A.current}}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.ZP,{type:"primary",onClick:function(){return j(!0)},children:"Begin Tour"}),(0,o.jsx)(n.Z,{}),(0,o.jsxs)(L.Z,{children:[(0,o.jsx)(g.ZP,{ref:y,children:" Upload"}),(0,o.jsx)(g.ZP,{ref:T,type:"primary",children:"Save"}),(0,o.jsx)(g.ZP,{ref:A,icon:(0,o.jsx)(i.Z,{})})]}),(0,o.jsx)(F.Z,{open:k,onClose:function(){return j(!1)},steps:q})]})};x.default=S},870219:function(ie,x,e){e.r(x);var D=e(627424),a=e.n(D),v=e(489705),i=e(667294),g=e(988872),n=e(315816),L=e(945016),F=e(739838),o=e(785893),S=function(){var y=(0,i.useRef)(null),T=(0,i.useRef)(null),A=(0,i.useRef)(null),U=(0,i.useState)(!1),K=a()(U,2),k=K[0],j=K[1],q=[{title:"Upload File",description:"Put your files here.",target:function(){return y.current}},{title:"Save",description:"Save your changes.",target:function(){return T.current}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return A.current}}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.ZP,{type:"primary",onClick:function(){return j(!0)},children:"Begin Tour"}),(0,o.jsx)(n.Z,{}),(0,o.jsxs)(L.Z,{children:[(0,o.jsx)(g.ZP,{ref:y,children:"Upload"}),(0,o.jsx)(g.ZP,{ref:T,type:"primary",children:"Save"}),(0,o.jsx)(g.ZP,{ref:A,icon:(0,o.jsx)(v.Z,{})})]}),(0,o.jsx)(F.Z,{open:k,onClose:function(){return j(!1)},steps:q,indicatorsRender:function(xe,Pe){return(0,o.jsxs)("span",{children:[xe+1," / ",Pe]})}})]})};x.default=S},742240:function(ie,x,e){e.r(x);var D=e(627424),a=e.n(D),v=e(667294),i=e(489705),g=e(988872),n=e(315816),L=e(945016),F=e(739838),o=e(785893),S=function(){var y=(0,v.useRef)(null),T=(0,v.useRef)(null),A=(0,v.useRef)(null),U=(0,v.useState)(!1),K=a()(U,2),k=K[0],j=K[1],q=[{title:"Upload File",description:"Put your files here.",cover:(0,o.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return y.current}},{title:"Save",description:"Save your changes.",target:function(){return T.current},mask:{style:{boxShadow:"inset 0 0 15px #fff"},color:"rgba(40, 0, 255, .4)"}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return A.current},mask:!1}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.ZP,{type:"primary",onClick:function(){return j(!0)},children:"Begin Tour"}),(0,o.jsx)(n.Z,{}),(0,o.jsxs)(L.Z,{children:[(0,o.jsx)(g.ZP,{ref:y,children:" Upload"}),(0,o.jsx)(g.ZP,{ref:T,type:"primary",children:"Save"}),(0,o.jsx)(g.ZP,{ref:A,icon:(0,o.jsx)(i.Z,{})})]}),(0,o.jsx)(F.Z,{open:k,onClose:function(){return j(!1)},steps:q,mask:{style:{boxShadow:"inset 0 0 15px #333"},color:"rgba(80, 255, 255, .4)"}})]})};x.default=S},29332:function(ie,x,e){e.r(x);var D=e(627424),a=e.n(D),v=e(667294),i=e(489705),g=e(988872),n=e(315816),L=e(945016),F=e(739838),o=e(785893),S=function(){var y=(0,v.useRef)(null),T=(0,v.useRef)(null),A=(0,v.useRef)(null),U=(0,v.useState)(!1),K=a()(U,2),k=K[0],j=K[1],q=[{title:"Upload File",description:"Put your files here.",cover:(0,o.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),target:function(){return y.current}},{title:"Save",description:"Save your changes.",target:function(){return T.current}},{title:"Other Actions",description:"Click to see other actions.",target:function(){return A.current}}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.ZP,{type:"primary",onClick:function(){return j(!0)},children:"Begin non-modal Tour"}),(0,o.jsx)(n.Z,{}),(0,o.jsxs)(L.Z,{children:[(0,o.jsx)(g.ZP,{ref:y,children:" Upload"}),(0,o.jsx)(g.ZP,{ref:T,type:"primary",children:"Save"}),(0,o.jsx)(g.ZP,{ref:A,icon:(0,o.jsx)(i.Z,{})})]}),(0,o.jsx)(F.Z,{open:k,onClose:function(){return j(!1)},mask:!1,type:"primary",steps:q})]})};x.default=S},983405:function(ie,x,e){e.r(x);var D=e(627424),a=e.n(D),v=e(667294),i=e(988872),g=e(739838),n=e(785893),L=function(){var o=(0,v.useRef)(null),S=(0,v.useState)(!1),V=a()(S,2),y=V[0],T=V[1],A=[{title:"Center",description:"Displayed in the center of screen.",target:null},{title:"Right",description:"On the right of target.",placement:"right",target:function(){return o.current}},{title:"Top",description:"On the top of target.",placement:"top",target:function(){return o.current}}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.ZP,{type:"primary",onClick:function(){return T(!0)},ref:o,children:"Begin Tour"}),(0,n.jsx)(g.Z,{open:y,onClose:function(){return T(!1)},steps:A})]})};x.default=L},108559:function(ie,x,e){e.r(x);var D=e(667294),a=e(739838),v=e(785893),i=a.Z._InternalPanelDoNotUseOrYouWillBeFired;x.default=function(){return(0,v.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16,background:"rgba(50,0,0,0.65)",padding:8},children:[(0,v.jsx)(i,{title:"Hello World!",description:"Hello World?!"}),(0,v.jsx)(i,{title:"Hello World!",description:"Hello World?!",cover:(0,v.jsx)("img",{alt:"tour.png",src:"https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"}),current:5,total:7}),(0,v.jsx)(i,{title:"Hello World!",description:"Hello World?!",type:"primary",current:4,total:5})]})}}}]);
