(this["webpackJsonptw-thrall-map"]=this["webpackJsonptw-thrall-map"]||[]).push([[0],{19:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var l,a=n(0),c=n.n(a),i=n(8),o=n.n(i),r=(n(19),n(20),n(10)),s=n(11),d=n(14),h=n(13),u=(n(21),n(5)),j=n(29),m=n(32),b=n(30),f=n(31),O=n(33),v=n(2),x=(n(22),n(1)),g=function(t){return Object(x.jsxs)("div",{className:"thrall-header",onClick:function(){return t.onSelect(t.thrall)},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"thrall-header-name",children:t.thrall.name}),Object(x.jsx)("div",{className:"thrall-header-type",children:t.thrall.type})]}),Object(x.jsx)("div",{style:{marginLeft:"auto",marginRight:"16px"},children:Object(x.jsx)("span",{className:"material-icons",style:{fontSize:"20pt"},children:t.icon})})]})},p=function(t){return Object(x.jsx)(g,{onSelect:t.onSelect,thrall:t.thrall,icon:"chevron_right"})};!function(t){t.ALCHEMIST="ALCHEMIST",t.BLACKSMITH="BLACKSMITH",t.ARMORER="ARMORER",t.CARPENTER="CARPENTER",t.TASKMASTER="TASKMASTER",t.GROOMER="GROOMER",t.SMELTER="SMELTER  "}(l||(l={}));n(24);var S=function(t){var e,n,a=t.focused?"thrall-details-sliding-in":"thrall-details-sliding-out";return Object(x.jsx)("div",{className:"thrall-details-container "+a,children:Object(x.jsxs)("div",{className:"thrall-details",children:[Object(x.jsx)(g,{thrall:t.thrall||{locations:[],name:"",type:l.ALCHEMIST,id:"ada"},icon:"chevron_left",onSelect:t.onDeSelect}),Object(x.jsx)("div",{className:"thrall-location-description",children:null===(e=t.thrall)||void 0===e?void 0:e.locationDescription}),Object(x.jsxs)("div",{className:"thrall-location-list-container",children:[Object(x.jsx)("div",{className:"thrall-location-list-header",children:"Locations"}),Object(x.jsx)("div",{className:"thrall-location-list-subheader",children:"Click a location to jump to it"}),null===(n=t.thrall)||void 0===n?void 0:n.locations.map((function(t){return Object(x.jsx)("div",{children:t.x+" "+t.y})}))]})]})})},T=(n(25),function(t){var e=t.selectedThrallFocused?"thrall-list-sliding-out":"thrall-list-sliding-in";return Object(x.jsxs)(c.a.Fragment,{children:[Object(x.jsx)(S,{focused:t.selectedThrallFocused,thrall:t.selectedThrall,onDeSelect:t.onDeselectThrall}),Object(x.jsx)("div",{className:"thrall-list "+e,children:t.thralls.sort((function(t,e){return t.name.localeCompare(e.name)})).map((function(e){return Object(x.jsx)(p,{onSelect:t.onSelectThrall,thrall:e},e.id)}))})]})});var R=new v.LatLng(-369398,-342934),E=new v.LatLng(444603,475140),L=new v.LatLngBounds(R,E);function C(){var t=Object(j.a)({click:function(t){console.log(t.latlng)},zoom:function(t){console.log(t.target._zoom)},drag:function(){t.panInsideBounds(L,{animate:!1})},locationfound:function(t){console.log("location found:",t)}});return null}function w(t){return null===t||void 0===t?void 0:t.locations.map((function(e){return function(t,e){return Object(x.jsx)(m.a,{radius:1e3,center:{lat:e.lat,lng:e.lng},children:Object(x.jsx)(b.a,{children:t.name})},e.lat+"_"+e.lng)}(t,function(t){return{lat:-1*t.y,lng:t.x}}(e))}))}function M(t){var e=Object(a.useState)(void 0),n=Object(u.a)(e,2),l=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(u.a)(i,2),r=o[0],s=o[1];return Object(x.jsxs)("div",{className:"thrall-map-wrapper",children:[Object(x.jsxs)(f.a,{center:[0,0],style:{height:"100vh",width:"calc(100vw - var(--sidebar-width))"},minZoom:-8.7,maxZoom:-4,zoomSnap:.1,zoomDelta:.1,crs:v.CRS.Simple,maxBounds:L,zoomControl:!0,zoom:-8.7,children:[Object(x.jsx)(O.a,{url:"/tw-map/fc_assets/full_map_low_quality.jpg",bounds:L}),Object(x.jsx)(C,{}),w(l)]}),Object(x.jsx)("div",{className:"sidebar-right",children:Object(x.jsx)(T,{thralls:t.data,selectedThrallFocused:r,selectedThrall:l,onDeselectThrall:function(){s(!1)},onSelectThrall:function(t){c(t),s(!0)}})})]})}var N=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var l;return Object(r.a)(this,n),(l=e.call(this,t)).state={data:[]},l}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch(window.location.href+"/data.json").then((function(t){return t.json()})).then((function(e){return t.setState({data:e})}))}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(M,{data:this.state.data})})}}]),n}(c.a.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,l=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),l(t),a(t),c(t),i(t)}))};o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root")),A()}},[[26,1,2]]]);
//# sourceMappingURL=main.5a5b6aed.chunk.js.map