"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4686],{481177:(e,t,i)=>{i.d(t,{Z:()=>n});let n={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},847160:(e,t,i)=>{i.d(t,{Bx:()=>o,N4:()=>a,is:()=>l,lt:()=>n,oM:()=>r});let n=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),o=e=>e._('Log in to save this Pin', 'limitedLogin.modalHeader.repin', 'Title on mobile web limited login modal to prompt users to login after they clicked save button.'),r=e=>e._('Log in to edit this Pin', 'limitedLogin.modalHeader.editPin', 'Title on mobile web limited login modal to prompt users to login after they clicked edit button.'),a=({i18n:e,toFollow:t})=>t?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.'),l=e=>e._('Log in to create a Pin or board', 'limitedLogin.modalHeader.create', 'Title on mobile web limited login modal to prompt users to login to create a Pin or board.')},515278:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(847160),o=i(140017),r=i(166770);let a=()=>{let{loginForMore:e,viewer:t,limitedLoginModalSubheader:i}=(0,r.H)(),a=(0,o.ZP)();return"AUTH"===t.type?null:t=>{e?.setVisible(!0),i?.setText(t?.loginModalHeader||n.lt(a))}}},775089:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});var n=i(667294),o=i(883119),r=i(214877),a=i(103322);function l(e,t,i){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let s={};function d(e){let t=s[e];return t&&t.screenWidth===window.innerWidth||(s[e]={screenWidth:window.innerWidth}),s[e]}let m=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class u{constructor(){l(this,"idMap",new Map),l(this,"objMap",new WeakMap)}get(e){let t=m(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=m(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let i=m(e);i&&this.idMap.set(i,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var c=i(547643),p=i(213377),_=i(406893),h=i(340523),b=i(5859),f=i(554786),g=i(953565),y=i(84768),x=i(785893);function w({analyticsData:e,children:t,idx:i,isMeasuring:o,masonryV2ExpName:r,masonryV2ExpGroup:l}){let s=(0,f.ZP)(),{isAuthenticated:d}=(0,b.B)(),m=(0,y.MM)();return(0,n.useEffect)(()=>{if(e.current[i]){let{fetchTimestamp:t,measureTimestamp:n,hasRendered:a,pageCount:u}=e.current[i]??{},c={deviceType:s,experimentName:r,experimentGroup:l,handlerId:m,isAuthenticated:d,pageCount:u};o&&!n&&(e.current[i].measureTimestamp=Date.now(),(0,g.LY)("webapp.masonry.itemMeasureStart",Date.now()-t,{tags:c})),o||a||((0,g.LY)("webapp.masonry.itemRenderStart",Date.now()-n,{tags:c}),e.current[i].hasRendered=!0)}},[o]),(0,x.jsx)(a.Z,{name:"MasonryItem",children:t})}function C(e){let{align:t,cacheKey:i,id:l,isGridCentered:s=!0,items:m,layout:C,loadItems:v,masonryRef:M,renderItem:S,scrollContainerRef:E,virtualize:P=!0,_getColumnSpanConfig:$}=e,A=(0,f.ZP)(),{isAuthenticated:T,isRTL:R}=(0,b.B)(),{logContextEvent:j}=(0,r.v)(),L=(0,h.F)(),I="desktop"===A,D=(0,y.MM)(),O=(0,n.useRef)(m.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),k=e.columnWidth??p.yF,N=e.gutterWidth??(I?p.oX:1),W=e.minCols??p.yc,z=e.serverRender??!!I,H="flexible"===C||"desktop"!==A,Z=z?"serverRenderedFlexible":"flexible",B=(0,n.useRef)(0),F=k+N,V=function(e){if(null==e)return;let t=d(e);return t.positionCache||(t.positionCache=new u),t.positionCache}(i),G=function(e){if(null==e)return;let t=d(e);return t.measurementCache||(t.measurementCache=new u),t.measurementCache}(i),X=(0,n.useCallback)(()=>E?.current||window,[E]),Y=(0,n.useRef)(!0),{anyEnabled:U}=L.checkExperiment("web_masonry_ssr_container_query"),J=s&&Y.current?"gridCentered":"",{className:K,styles:Q}=function(e){let t=`m_${Object.keys(e).reduce((t,i)=>{let n=e[i];return null==n||"object"==typeof n||"function"==typeof n?t:"boolean"==typeof n?t+(n?"t":"f"):t+n},"").replace(/\:/g,"\\:")}`,{flexible:i,gutterWidth:n,isRTL:o,itemWidth:r,maxColumns:a,minColumns:l,items:s,_getColumnSpanConfig:d}=e,m=d?s.map((e,t)=>({index:t,columnSpanConfig:d(e)??1})).filter(e=>1!==e.columnSpanConfig):[],u=r+n,c=Array.from({length:a+1-l},(e,t)=>t+l).map(e=>{let s=e===l?0:e*u,d=e===a?null:(e+1)*u-1,{styles:c,numberOfVisibleItems:p}=m.reduce((o,a)=>{let{columnSpanConfig:l}=a,s=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:l}),e),d=null!=a.index&&o.numberOfVisibleItems>=s+a.index,m=i?100/e*s:r*s+n*(s-1),{numberOfVisibleItems:u}=o;return d?u-=s-1:a.index<u&&(u+=1),{styles:o.styles.concat(function({className:e,index:t,columnSpanConfig:i,visible:n,width:o,flexible:r}){let a="number"==typeof i?i:btoa(JSON.stringify(i));return r?`
      .${e} .static[data-column-span="${a}"]:nth-child(${t+1}) {
        visibility: ${n?"visible":"hidden"} !important;
        position: ${n?"inherit":"absolute"} !important;
        width: ${o}% !important;
      }`:`
      .${e} .static[data-column-span="${a}"]:nth-child(${t+1}) {
        visibility: ${n?"visible":"hidden"} !important;
        position: ${n?"inherit":"absolute"} !important;
        width: ${o}px !important;
      }`}({className:t,index:a.index,columnSpanConfig:l,visible:d,width:m,flexible:i})),numberOfVisibleItems:u}},{styles:"",numberOfVisibleItems:e}),_=i?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*u}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:s,maxWidth:d,styles:`
      .${t} .static:nth-child(-n+${p}) {
        position: static !important;
        visibility: visible !important;
        float: ${o?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${n/2}px;
      }

      ${_}

      ${c}
    `}}),p=c.map(({minWidth:e,maxWidth:t,styles:i})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${i}
    }
  `),_=c.map(({minWidth:e,maxWidth:t,styles:i})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${i}
    }
  `),h=e.enableContainerQuery?`
    ${p.join("")}
    @supports not (container-type: inline-size) {
      ${_.join("")}
    }
  `:_.join("");return{className:t,styles:`
    .masonryContainer {
      container-type: inline-size;
    }

    .gridCentered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${h}
  `}}({gutterWidth:N,flexible:H,items:m,isRTL:R,itemWidth:k,maxColumns:e.maxColumns??(m.length||p.g5),minColumns:W,enableContainerQuery:U,_getColumnSpanConfig:$}),q=`${J} ${K}`.trim(),{anyEnabled:ee,expName:et,group:ei,isMeasureAllEnabled:en}=(0,c.Z)(),eo=(0,n.useMemo)(()=>!G||m.every(e=>!G.has(e)),[]),er=ei&&eo,ea=(0,n.useRef)(),el=(0,n.useRef)(m.length),es=(0,n.useRef)(0);(0,n.useEffect)(()=>{er&&m.forEach((e,t)=>{O.current[t]||(O.current[t]={fetchTimestamp:Date.now(),measureTimestamp:0,hasRendered:!1,pageCount:es.current})}),el.current=m.length,es.current+=1},[m]),(0,n.useEffect)(()=>{Y.current&&(Y.current=!1)},[]),(0,n.useEffect)(()=>{let e=()=>B.current+=1;return er&&(ea.current=Date.now(),window.addEventListener("scroll",e)),()=>{if(er){let t=O.current;window.removeEventListener("scroll",e);let i=t.filter(e=>!!e.measureTimestamp).length,n=t.filter(e=>e.hasRendered).length,o=el.current,r={deviceType:A,experimentName:et,experimentGroup:ei,handlerId:D,isAuthenticated:T};(0,g.LY)("webapp.masonry.timeSpent",ea.current?Date.now()-ea.current:0,{tags:r}),(0,g.S0)("webapp.masonry.itemsFetched",o,{tags:r}),(0,g.S0)("webapp.masonry.itemsMeasured",i,{tags:r}),(0,g.S0)("webapp.masonry.itemsMeasuredPercentage",Math.floor(i/o*100),{tags:r}),(0,g.S0)("webapp.masonry.itemsRendered",n,{tags:r}),(0,g.S0)("webapp.masonry.itemsRenderedPercentage",Math.floor(n/o*100),{tags:r}),(0,g.S0)("webapp.masonry.scrollCount",B.current,{tags:r})}}},[]);let ed=(0,n.useCallback)(e=>er?(0,x.jsx)(w,{analyticsData:O,idx:e.itemIdx,isMeasuring:e.isMeasuring,masonryV2ExpGroup:ei,masonryV2ExpName:et,children:(0,x.jsx)(a.Z,{name:"MasonryItem",children:S(e)})}):(0,x.jsx)(a.Z,{name:"MasonryItem",children:S(e)}),[S]);return(0,x.jsx)("div",{className:"masonryContainer","data-test-id":"masonry-container",id:l,children:(0,x.jsxs)("div",{className:q,children:[z&&Y.current?(0,x.jsx)(_.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:Q}):null,(0,x.jsx)(o.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?F*e.maxColumns:void 0,children:ee?(0,x.jsx)(o.GX,{ref:e=>{M&&(M.current=e)},_getColumnSpanConfig:$,_logTwoColWhitespace:e=>{(0,g.S0)("webapp.masonry.twoColWhitespace",e,{sampleRate:1,tags:{columnWidth:k,minCols:W}}),j({event_type:14705,component:14468,aux_data:{whitespace_px:e}})},_measureAll:en,align:t,columnWidth:k,gutterWidth:N,items:m,layout:H?Z:C??"basic",loadItems:v,measurementStore:G,minCols:W,positionStore:V,renderItem:ed,scrollContainer:X,virtualBufferFactor:.3,virtualize:P}):(0,x.jsx)(o.Rk,{ref:e=>{M&&(M.current=e)},_getColumnSpanConfig:$,_logTwoColWhitespace:e=>{(0,g.S0)("webapp.masonry.twoColWhitespace",e,{sampleRate:1,tags:{columnWidth:k,minCols:W}}),j({event_type:14705,component:14468,aux_data:{whitespace_px:e}})},align:t,columnWidth:k,gutterWidth:N,items:m,layout:H?Z:C??"basic",loadItems:v,measurementStore:G,minCols:W,positionStore:V,renderItem:ed,scrollContainer:X,virtualBufferFactor:.3,virtualize:P})})]})})}},984571:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(958881);let o=/\{\s*(\w+)\s*\}/g,r=(e,t)=>(0,n.Z)(o,e,t);function a({args:e,format:t}){return r(t,(e||[]).reduce((e,t,i)=>({...e,[i]:t.text}),{}))}},180338:(e,t,i)=>{i.d(t,{H:()=>n,W:()=>o});let{Provider:n,useMaybeHook:o}=(0,i(342513).Z)("PinCreateDeleteContext")},282008:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(883119),o=i(214877),r=i(213377),a=i(666472),l=i(984571),s=i(575742),d=i(818385),m=i(785893);let u=r.yF;function c({contextLogData:e,bubbles:t,id:i,referringSource:r,slotIndex:c,storyType:p,title:_,titleIcon:h,viewType:b,viewParameter:f}){let{logContextEvent:g}=(0,o.v)(),y=t.map(({type:e,id:t})=>e+":"+t).join("|"),x={story_type:p,...e,content_ids:y};return(0,m.jsx)(a.F,{componentType:200,contextLogData:x,impressionType:"Story",loggingId:i,objectIdStr:i,slotIndex:c,viewParameter:f,viewType:b,children:({impressionTrackerRef:e})=>(0,m.jsxs)(n.xu,{ref:e,children:[_&&(0,m.jsxs)(n.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginBottom:1,children:["number"==typeof h&&h!==s.J&&(0,m.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{paddingTop:1}},marginEnd:2,children:(0,m.jsx)(n.JO,{accessibilityLabel:"",color:"default",icon:(0,s.Z)(h),size:14})}),(0,m.jsx)(n.xv,{weight:"bold",children:(0,l.Z)(_)})]}),t.map((e,t)=>(0,m.jsx)(n.xu,{flex:"none",paddingY:1,children:(0,m.jsx)(d.Z,{bubble:e,contextLogData:x,height:103,onClick:e=>{g({event_type:101,object_id_str:e,view_type:b,view_parameter:f,component:200,aux_data:x})},referringSource:r,slotIndex:t,storyId:i,viewParameter:f,viewType:b,width:u})},`bubble-${e.id}`))]})})}},166770:(e,t,i)=>{i.d(t,{H:()=>o,o:()=>n});let{Provider:n,useHook:o}=(0,i(342513).Z)("LimitedLogin")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/4686-4cdcb6add0da4ca3.mjs.map