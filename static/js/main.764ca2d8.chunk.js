(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},110:function(e,t,n){e.exports=n(186)},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},183:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(29),i=n.n(a),l=(n(115),n(63)),c=(n(116),n(195)),s=n(196),u=n(187),d=n(188),h=n(189),m=n(190),g=n(191),f=n(6),w=n.n(f),p=["#f44336","#3f51b5","#4caf50","#ff9800","#2196f3","#374046","#cddc39","#2196f3","#9c27b0","#ffc107","#009688","#673ab7","#ffeb3b","#cddc39","#795548"],v=[{title:"Basic",description:"Basic example of a grid with items having static size",source:"https://github.com/makdv/react-virtualized-examples/blob/master/src/components/collections/Basic.js"},{title:"With placeholder",description:"Optimized example of using placeholder instead of a real item when scrolling. It's usefull for performance optimizations. Placeholder does not replace items which are already mounted into the DOM and appears only for items, which are outside of the visible part. If you scroll very fast - you will see the placeholder",source:"https://github.com/makdv/react-virtualized-examples/blob/master/src/components/collections/PlaceholderOnScroll.js"},{title:"Dynamic item size",description:"Example of grid, where size of items can be changed, including non-static size. It's using CellMeasurer component to show how to calculate item size and CellMeasurerCache component for an optimization. (In general, CellMeasurer can be avoided for known static sizes)",source:"https://github.com/makdv/react-virtualized-examples/blob/master/src/components/collections/WithDynamicCardSize.js"},{title:"Infinite Loader",description:"Example with InfiniteLoader component, loading items on scroll",source:"https://github.com/makdv/react-virtualized-examples/blob/master/src/components/collections/WithInfiniteLoader.js"}],b=function(e){return p[e%p.length]},R=function(e){var t={};return e.forEach(function(e){t[e]=e}),Object.values(t)},C=n(101),y=n.n(C);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}),E=function(e){var t=e.svgRef,n=k(e,["svgRef"]);return r.a.createElement("svg",x({width:30,height:30,viewBox:"0 0 16 16",fill:"white","aria-hidden":"true",ref:t},n),S)},I=r.a.forwardRef(function(e,t){return r.a.createElement(E,x({svgRef:t},e))}),O=(n.p,n(117),function(e){var t=e.activeTab,n=e.toggle,a=Object(o.useState)(),i=Object(l.a)(a,2),f=i[0],p=i[1],b=function(){return window.innerWidth>900?p(!1):p(!0)};return Object(o.useEffect)(function(){return b(),window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}},[]),r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"App-header__left"},r.a.createElement("img",{src:y.a,className:"App-header__logo-image",alt:"logo"}),!f&&r.a.createElement("div",{className:"App-header__logo-label"},"RV Grids"),f?r.a.createElement(c.a,{setActiveFromChild:!0},r.a.createElement(s.a,{caret:!0},v[t-1].title),r.a.createElement(u.a,null,v.map(function(e,t){return r.a.createElement(d.a,{key:e.title,onClick:function(){n(t+1)}},e.title)}))):r.a.createElement(h.a,{tabs:!0},v.map(function(e,o){return r.a.createElement(m.a,{key:o},r.a.createElement(g.a,{className:w()({active:t===o+1}),onClick:function(){n(o+1)}},e.title),r.a.createElement("span",{className:"nav-item__border-bottom"}))}))),r.a.createElement("a",{href:"https://github.com/makdv/react-virtualized-examples",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(I,null)))}),j=n(192),H=n(193),z=n(194),W=n(18),M=n(31),L=n(32),T=n(34),A=n(33),N=n(35),P=n(12),_=(n(183),function(e){var t=e.style,n=e.children;return r.a.createElement("div",{className:"virtual-card",style:t},n)}),B=function(e){function t(e){var n;Object(M.a)(this,t),n=Object(T.a)(this,Object(A.a)(t).call(this,e));var o=e.dimensions,r=n.getColumnWidth(o),a=n.getRowHeight(o);return n.state={itemSize:o,columnWidth:r,rowHeight:a},n}return Object(N.a)(t,e),Object(L.a)(t,[{key:"getColumnWidth",value:function(e){return e.width+this.props.distance}},{key:"getColumnCount",value:function(e,t){return Math.floor(e/t)}},{key:"getRowHeight",value:function(e){return e.height+this.props.distance}},{key:"getRowCount",value:function(e){return Math.ceil(this.props.collection.length/e)}},{key:"cellRenderer",value:function(e){var t=this;return function(n){var o=n.columnIndex,a=n.key,i=n.rowIndex,l=n.style,c=t.props,s=c.collection,u=c.dimensions,d=u.width,h=u.height,m=i*e+o,g=b(m),f=s[m];return m>=s.length?null:r.a.createElement(_,{key:a,style:Object(W.a)({},l,{backgroundColor:g,width:d,height:h})},f)}}},{key:"render",value:function(){var e=this,t=this.state,n=t.columnWidth,o=t.rowHeight;return r.a.createElement(P.f,null,function(t){var a=t.height,i=t.isScrolling,l=t.scrollTop;return r.a.createElement(P.a,{disableHeight:!0},function(t){var c=t.width,s=e.getColumnCount(c,n),u=e.getRowCount(s),d=e.cellRenderer(s);return r.a.createElement(P.d,{autoHeight:!0,isScrolling:i,scrollTop:l,cellRenderer:d,columnCount:s,columnWidth:n,rowCount:u,rowHeight:o,overscanRowCount:3,height:a,width:s*n-e.props.distance})})})}}]),t}(o.Component);B.defaultProps={distance:20,dimensions:{width:150,height:300}};var D=function(e){function t(e){var n;Object(M.a)(this,t),(n=Object(T.a)(this,Object(A.a)(t).call(this,e))).cellRangeRenderer=function(e){var t=Object(P.g)(e);return n.rowStartIndex=e.rowStartIndex,n.rowStopIndex=e.rowStopIndex,t};var o=e.dimensions,r=n.getColumnWidth(o),a=n.getRowHeight(o);return n.state={itemSize:o,columnWidth:r,rowHeight:a},n}return Object(N.a)(t,e),Object(L.a)(t,[{key:"getColumnWidth",value:function(e){return e.width+this.props.distance}},{key:"getColumnCount",value:function(e,t){return Math.floor(e/t)}},{key:"getRowHeight",value:function(e){return e.height+this.props.distance}},{key:"getRowCount",value:function(e){return Math.ceil(this.props.collection.length/e)}},{key:"cellRenderer",value:function(e){var t=this;return function(n){var o=n.columnIndex,a=n.key,i=n.rowIndex,l=n.style,c=n.isScrolling,s=n.isVisible,u=t.props,d=u.collection,h=u.dimensions,m=h.width,g=h.height,f=i*e+o,w=b(f),p=d[f],v=null;return f>=d.length?v:(v=c&&!s||c&&(i<t.visibleRowsRange.rowStartIndex||i>t.visibleRowsRange.rowStopIndex)?r.a.createElement(_,{key:a,style:Object(W.a)({},l,{backgroundColor:"#374046",width:m,height:g})},"Loading..."):r.a.createElement(_,{key:a,style:Object(W.a)({},l,{backgroundColor:w,width:m,height:g})},p),t.visibleRowsRange={rowStopIndex:t.rowStopIndex,rowStartIndex:t.rowStartIndex},v)}}},{key:"render",value:function(){var e=this,t=this.state,n=t.columnWidth,o=t.rowHeight;return r.a.createElement(P.f,null,function(t){var a=t.height,i=t.isScrolling,l=t.scrollTop;return r.a.createElement(P.a,{disableHeight:!0},function(t){var c=t.width,s=e.getColumnCount(c,n),u=e.getRowCount(s),d=e.cellRenderer(s);return r.a.createElement(P.d,{autoHeight:!0,isScrolling:i,scrollTop:l,cellRenderer:d,cellRangeRenderer:e.cellRangeRenderer,columnCount:s,columnWidth:n,rowCount:u,rowHeight:o,overscanRowCount:3,height:a,width:c})})})}}]),t}(o.Component);D.defaultProps={distance:20,dimensions:{width:150,height:300}};var G,V=n(44),F=["Small","Default","Large","Random"],J=(G={},Object(V.a)(G,F[0],{width:100,height:200,label:F[0]}),Object(V.a)(G,F[1],{width:150,height:300,label:F[1]}),Object(V.a)(G,F[2],{width:215,height:400,label:F[2]}),G),U=function(e){function t(){var e,n;Object(M.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(T.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(a)))).visibleRowsRange=null,n.Grid=r.a.createRef(),n.state=n.getState(),n.cellRangeRenderer=function(e){var t=Object(P.g)(e);return n.rowStartIndex=e.rowStartIndex,n.rowStopIndex=e.rowStopIndex,t},n}return Object(N.a)(t,e),Object(L.a)(t,[{key:"onSelectItemSize",value:function(e){var t=this,n=this.getState(e);this.setState(n,function(){t.Grid.current.recomputeGridSize()})}},{key:"getState",value:function(e){var t=e?J[e]:J.Default,n=this.getColumnWidth(t),o=this.getRowHeight(t),r=t.label===F[3];return{itemSize:t,columnWidth:n,estimatedRowHeight:o,useAutoHeight:r,cache:this.getCache(n,o,r)}}},{key:"getCache",value:function(e,t,n){var o={defaultWidth:e,fixedWidth:!0,keyMapper:function(){return 1}};return n||(o=Object(W.a)({},o,{defaultHeight:t,fixedHeight:!0})),new P.c(o)}},{key:"getColumnWidth",value:function(e){return e.width+this.props.distance}},{key:"getColumnCount",value:function(e,t){return Math.floor(e/t)}},{key:"getRowHeight",value:function(e){return e.height+this.props.distance}},{key:"getRowCount",value:function(e){return Math.ceil(this.props.collection.length/e)}},{key:"cellRenderer",value:function(e,t){var n=this;return function(o){var a=o.columnIndex,i=o.key,l=o.rowIndex,c=o.style,s=o.isScrolling,u=o.isVisible,d=o.parent,h=n.props.collection,m=n.state.itemSize,g=m.width,f=m.height,w=l*e+a,p=b(w),v=h[w],R=null;return w>=h.length?R:(R=s&&!u||s&&(l<n.visibleRowsRange.rowStartIndex||l>n.visibleRowsRange.rowStopIndex)?r.a.createElement(_,{style:{backgroundColor:"#374046",width:g,height:f}},"Loading..."):r.a.createElement(_,{style:{backgroundColor:p,width:g,height:f}},v),n.visibleRowsRange={rowStopIndex:n.rowStopIndex,rowStartIndex:n.rowStartIndex},r.a.createElement(P.b,{cache:n.state.cache,columnIndex:a,key:i,parent:d,rowIndex:l},r.a.createElement("div",{style:Object(W.a)({},c,{width:t})},R)))}}},{key:"render",value:function(){var e=this,t=this.state,n=t.columnWidth,o=t.itemSize,a=t.estimatedRowHeight,i=t.useAutoHeight,l=t.cache;return r.a.createElement("div",null,r.a.createElement(c.a,{setActiveFromChild:!0,style:{display:"flex",marginBottom:"20px"}},r.a.createElement(s.a,{caret:!0},o.label),r.a.createElement(u.a,null,F.map(function(t){return r.a.createElement(d.a,{key:t,disabled:t===F[3],onClick:function(){return e.onSelectItemSize(t)}},t)}))),r.a.createElement(P.f,null,function(t){var o=t.height,c=t.isScrolling,s=t.scrollTop;return r.a.createElement(P.a,{disableHeight:!0},function(t){var u=t.width,d=e.getColumnCount(u,n),h=e.getRowCount(d),m=e.cellRenderer(d,n),g=i?l.rowHeight:a;return r.a.createElement(P.d,{ref:e.Grid,autoHeight:!0,isScrolling:c,scrollTop:s,deferredMeasurementCache:l,estimatedRowSize:a,cellRenderer:m,cellRangeRenderer:e.cellRangeRenderer,scrollingResetTimeInterval:0,columnCount:d,columnWidth:n,rowCount:h,rowHeight:g,overscanRowCount:3,height:o,width:u})})}))}}]),t}(o.Component);U.defaultProps={distance:20};var $=n(80),q=n.n($),K=n(81),Q=n(109),X=1,Y=2,Z=function(e){function t(e){var n;Object(M.a)(this,t),(n=Object(T.a)(this,Object(A.a)(t).call(this,e))).loadMoreRows=function(){var e=Object(Q.a)(q.a.mark(function e(t){var o,r,a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.startIndex,r=t.stopIndex,n.setState({loadedRowsMap:n.getLoadedRowsMap({startIndex:o,stopIndex:r,status:X})}),e.next=4,new Promise(function(e){setTimeout(function(){var t=n.props.collection.slice(o,r+1);e({items:R([].concat(Object(K.a)(n.state.data.items),Object(K.a)(t))),totalCount:n.props.collection.length})},400)});case 4:a=e.sent,n.setState({data:a,loadedRowsMap:n.getLoadedRowsMap({startIndex:o,stopIndex:r,status:Y})});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.cellRangeRenderer=function(e){var t=Object(P.g)(e);return n.rowStartIndex=e.rowStartIndex,n.rowStopIndex=e.rowStopIndex,t},n.isRowLoaded=function(e){var t=e.index;return!!n.state.loadedRowsMap[t]},n.onSectionRendered=function(e){var t=e.columnStartIndex,o=e.columnStopIndex,r=e.rowStartIndex,a=e.rowStopIndex,i=r*n.columnCount+t,l=a*n.columnCount+o;n.onRowsRendered({startIndex:i,stopIndex:l})};var o=e.dimensions,r=n.getColumnWidth(o),a=n.getRowHeight(o);return n.state={itemSize:o,columnWidth:r,rowHeight:a,data:{totalCount:0,items:[]},loading:!0,loadedRowsMap:{}},n}return Object(N.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.columnWidth,o=t.rowHeight;return r.a.createElement(P.e,{isRowLoaded:this.isRowLoaded,loadMoreRows:this.loadMoreRows,rowCount:this.state.data.totalCount||30},function(t){var a=t.onRowsRendered,i=t.registerChild;return e.onRowsRendered=a,r.a.createElement(P.f,null,function(t){var a=t.height,l=t.isScrolling,c=t.scrollTop;return r.a.createElement(P.a,{disableHeight:!0},function(t){var s=t.width;e.columnCount=e.getColumnCount(s,n);var u=e.getRowCount(e.columnCount),d=e.cellRenderer(e.columnCount);return r.a.createElement(P.d,{autoHeight:!0,onSectionRendered:e.onSectionRendered,ref:i,isScrolling:l,scrollTop:c,cellRenderer:d,cellRangeRenderer:e.cellRangeRenderer,columnCount:e.columnCount,columnWidth:n,rowCount:u,rowHeight:o,overscanRowCount:3,height:a,width:s})})})})}},{key:"getColumnWidth",value:function(e){return e.width+this.props.distance}},{key:"getColumnCount",value:function(e,t){return Math.floor(e/t)}},{key:"getRowHeight",value:function(e){return e.height+this.props.distance}},{key:"getRowCount",value:function(e){return Math.ceil((this.state.data.totalCount||30)/e)}},{key:"cellRenderer",value:function(e){var t=this;return function(n){var o=n.columnIndex,a=n.key,i=n.rowIndex,l=n.style,c=n.isScrolling,s=n.isVisible,u=t.props.dimensions,d=u.width,h=u.height,m=t.state,g=m.data,f=g.items,w=g.totalCount,p=m.loadedRowsMap,v=i*e+o,R=null;if(v>=w)return R;var C=b(v),y=f[v];return R=p[v]===X||c&&!s||c&&(i<t.visibleRowsRange.rowStartIndex||i>t.visibleRowsRange.rowStopIndex)?r.a.createElement(_,{key:a,style:Object(W.a)({},l,{backgroundColor:"#374046",width:d,height:h})},"Loading..."):r.a.createElement(_,{key:a,style:Object(W.a)({},l,{backgroundColor:C,width:d,height:h})},y),t.visibleRowsRange={rowStopIndex:t.rowStopIndex,rowStartIndex:t.rowStartIndex},R}}},{key:"getLoadedRowsMap",value:function(e){for(var t=e.startIndex,n=e.stopIndex,o=e.status,r={},a=this.state.loadedRowsMap,i=t;i<=n;i++)r[i]=o;return Object(W.a)({},a,r)}}]),t}(o.Component);Z.defaultProps={distance:20,dimensions:{width:150,height:300}};n(185);var ee=Array(1e3).fill(1).map(function(e,t){return t+1}),te=function(e){var t=e.activeTab,n=v[t-1],o=B;switch(t){case 1:o=B;break;case 2:o=D;break;case 3:o=U;break;case 4:o=Z;break;default:return B}return r.a.createElement("main",{id:"main"},r.a.createElement(j.a,{activeTab:t},r.a.createElement(H.a,{tabId:t},r.a.createElement(z.a,null,n.description,r.a.createElement("div",null,r.a.createElement("a",{href:n.source,target:"_blank",rel:"noopener noreferrer"},"source"))),r.a.createElement(o,{collection:ee}))))},ne=function(){var e=Object(o.useState)(1),t=Object(l.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(O,{activeTab:n,toggle:function(e){n!==e&&a(e)}}),r.a.createElement("div",{className:"App-intro"},r.a.createElement(te,{activeTab:n})))},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(ne,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-virtualized-examples",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-virtualized-examples","/service-worker.js");oe?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):re(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):re(e)})}}()}},[[110,1,2]]]);
//# sourceMappingURL=main.764ca2d8.chunk.js.map