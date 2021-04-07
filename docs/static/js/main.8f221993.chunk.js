(this["webpackJsonptw-thrall-map"]=this["webpackJsonptw-thrall-map"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o,c=n(1),a=n.n(c),i=n(8),l=n.n(i),r=(n(21),n(22),n(12)),s=n(13),d=n(16),h=n(15),j=(n(23),n(4)),u=n(34),b=n(35),m=n(36),f=n(2),O=(n(24),n(0)),p=function(e){return Object(O.jsxs)("div",{className:"thrall-header",onClick:function(){return e.onSelect(e.thrall)},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"thrall-header-name",children:e.thrall.name}),Object(O.jsx)("div",{className:"thrall-header-type",children:e.thrall.type})]}),Object(O.jsx)("div",{style:{marginLeft:"auto",marginRight:"16px"},children:Object(O.jsx)("span",{className:"material-icons",style:{fontSize:"20pt"},children:e.icon})})]})},v=function(e){return Object(O.jsx)(p,{onSelect:e.onSelect,thrall:e.thrall,icon:"chevron_right"})};!function(e){e.ALCHEMIST="ALCHEMIST",e.BLACKSMITH="BLACKSMITH",e.ARMORER="ARMORER",e.CARPENTER="CARPENTER",e.TASKMASTER="TASKMASTER",e.GROOMER="GROOMER",e.SMELTER="SMELTER  "}(o||(o={}));n(26),n(27);var g=function(e){return Object(O.jsx)("div",{onClick:function(){return e.onSelectLocation(e.location)},className:"thrall-detail-single-location",children:Object(O.jsxs)("div",{className:"display-in-row display-in-center ",children:[Object(O.jsx)("div",{style:{marginRight:"16px"},children:Object(O.jsx)("img",{alt:"icon camp",src:"/tw-map/fc_assets/icon_camp.png"})}),Object(O.jsxs)("div",{style:{marginRight:"auto"},children:[Object(O.jsx)("div",{style:{fontSize:"14pt"},children:e.location.location}),Object(O.jsxs)("div",{style:{fontSize:"11pt"},children:["Spawns at the ",e.location.spawnSpot," spot."]}),Object(O.jsx)("div",{style:{fontSize:"9pt"},children:e.location.spawnSpotDetail}),Object(O.jsxs)("div",{style:{fontSize:"9pt"},children:["Coordiantes: ",e.location.x," / ",e.location.y," / ",e.location.z]})]})]})})},x=function(e){var t;return Object(O.jsx)("div",{className:"thrall-location-list-container",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"thrall-location-list-header",children:"Locations"}),Object(O.jsx)("div",{className:"thrall-location-list-subheader",children:"Click a location to jump to it"}),Object(O.jsx)("div",{className:"thrall-details-locations",children:null===(t=e.thrall)||void 0===t?void 0:t.locations.map((function(t,n){return Object(O.jsx)(g,{onSelectLocation:e.onSelectLocation,location:t},n)}))})]})})},S=function(e){var t,n=e.focused?"thrall-details-sliding-in":"thrall-details-sliding-out";return Object(O.jsx)("div",{className:"thrall-details-container "+n,children:Object(O.jsxs)("div",{className:"thrall-details",children:[Object(O.jsx)(p,{thrall:e.thrall||{locations:[],name:"",type:o.ALCHEMIST,id:"ada"},icon:"chevron_left",onSelect:e.onDeSelect}),Object(O.jsx)("div",{className:"thrall-location-description",children:null===(t=e.thrall)||void 0===t?void 0:t.locationDescription}),Object(O.jsx)(x,{thrall:e.thrall,onSelectLocation:e.onSelectLocation})]})})},C=(n(28),function(e){var t=e.selectedThrallFocused?"thrall-list-sliding-out":"thrall-list-sliding-in";return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(S,{focused:e.selectedThrallFocused,onSelectLocation:e.onSelectLocation,thrall:e.selectedThrall,onDeSelect:e.onDeselectThrall}),Object(O.jsx)("div",{className:"thrall-list "+t,children:e.thralls.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(t){return Object(O.jsx)(v,{onSelect:e.onSelectThrall,thrall:t},t.id)}))})]})});function y(e){return{lat:-1*e.y,lng:e.x}}var T=n(31);function w(e){var t=Object(T.a)();if(e.location&&!e.location.preventPan){var n=e.location.zoom?e.location.zoom:t.getZoom(),o=e.location.center?e.location.center:t.getCenter();t.flyTo(o,n)}return null}var N=n(32),k=n(33),L=Object(f.icon)({iconUrl:"/tw-map/fc_assets/icon_camp.png",iconSize:[24,24],tooltipAnchor:[0,12]});function z(e){Object(T.a)().getZoom();if(!e.focused)return[];var t=e.thrall;return t?t.locations.map((function(e){return function(e,t,n){return Object(O.jsx)(N.a,{icon:L,position:t,children:Object(O.jsx)(k.a,{direction:"bottom",children:e.name})},t.lat+"_"+t.lng)}(t,y(e))})):Object(O.jsx)(a.a.Fragment,{})}function R(e){var t=Object(T.b)({click:function(e){console.log(e.latlng)},zoom:function(n){e.onZoomCenterChange({zoom:t.getZoom(),center:t.getCenter(),preventPan:!0}),console.log(n.target._zoom)},drag:function(){t.panInsideBounds(e.mapBounds,{animate:!1}),e.onZoomCenterChange({zoom:t.getZoom(),center:t.getCenter(),preventPan:!0})},locationfound:function(e){console.log("location found:",e)}});return null}n(29);var _=function(e){return e.open?Object(O.jsx)("div",{className:"info-dialog-container",onClick:e.onClose,children:Object(O.jsxs)("div",{className:"info-dialog",onClick:function(e){"A"!==e.target.tagName&&e.preventDefault(),e.stopPropagation()},children:[Object(O.jsx)("div",{className:"info-dialog-header",children:"Information"}),Object(O.jsx)("div",{className:"info-dialog-subheader",children:"About"}),Object(O.jsxs)("div",{children:["This map contains information about the thralls added by the\xa0",Object(O.jsx)("a",{target:"_blank",href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1326031593",rel:"noreferrer",children:"Thrall Wars Dungeon Mod"}),".",Object(O.jsx)("br",{}),"Check out the mod page for more information!",Object(O.jsx)("br",{}),"You can find the source code over on ",Object(O.jsx)("a",{target:"_blank",href:"https://github.com/Nia292/tw-map",rel:"noreferrer",children:"GitHub"}),"."]}),Object(O.jsx)("div",{className:"info-dialog-subheader",children:"Privacy"}),Object(O.jsxs)("div",{children:["This site does not track your information. ",Object(O.jsx)("br",{}),"This site does not use cookies. ",Object(O.jsx)("br",{}),"This site does not store data on your local device aside from normal browser caching. ",Object(O.jsx)("br",{}),"Site provided by\xa0",Object(O.jsx)("a",{target:"_blank",href:"https://pages.github.com/",rel:"noreferrer",children:"GitHub pages"}),". Check out\xa0",Object(O.jsx)("a",{target:"_blank",href:"https://docs.github.com/en/github/site-policy/github-privacy-statement",rel:"noreferrer",children:"GitHub's privacy statement"}),"\xa0to find out what data GitHub collects."]}),Object(O.jsx)("div",{className:"info-dialog-subheader",children:"Contributing"}),Object(O.jsx)("div",{children:"This map is far from completed. Head over to GitHub to find out how to contribute data!"}),Object(O.jsx)("div",{className:"info-dialog-subheader",children:"More"}),Object(O.jsxs)("div",{children:["There is also the ",Object(O.jsx)("a",{target:"_blank",href:"https://nia292.github.io/tw-dice-calc/index.html",rel:"noreferrer",children:"TW Dice Calculator"})," to plan your RP characters!"]}),Object(O.jsx)("div",{className:"info-dialog-subheader",children:"Credits"}),Object(O.jsx)("div",{children:"Japata for helping me with the locations and general thrall information. \ud83d\udc0d"})]})}):Object(O.jsx)(a.a.Fragment,{})},E={lat:0,lng:0},M=new f.LatLng(-369398,-342934),A=new f.LatLng(444603,475140),D=new f.LatLngBounds(M,A);function H(e){var t=Object(c.useState)(void 0),n=Object(j.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(!1),l=Object(j.a)(i,2),r=l[0],s=l[1],d=Object(c.useState)(void 0),h=Object(j.a)(d,2),p=h[0],v=h[1],g=Object(c.useState)(!1),x=Object(j.a)(g,2),S=x[0],T=x[1],N=Object(c.useState)(!1),k=Object(j.a)(N,2),L=k[0],M=k[1];var A=(null===p||void 0===p?void 0:p.center)?p.center:E,H=(null===p||void 0===p?void 0:p.zoom)?p.zoom:-8.7;return Object(O.jsxs)("div",{className:"thrall-map-wrapper",children:[Object(O.jsx)("div",{id:"info-button",className:"display-in-center",onClick:function(e){return T(!0)},children:Object(O.jsx)("span",{className:"material-icons",style:{fontSize:"18pt"},children:"help_outline"})}),Object(O.jsxs)("div",{id:"hq-checkbox-wrapper",className:"display-in-center",children:[Object(O.jsx)("input",{id:"hq-checkbox",type:"checkbox",checked:L,onClick:function(e){var t=e.target;M(t.checked)}}),Object(O.jsx)("label",{htmlFor:"hq-checkbox",children:"HQ Map (11mb)"})]}),Object(O.jsx)(_,{open:S,onClose:function(){return T(!1)}}),Object(O.jsxs)(u.a,{center:A,style:{height:"100vh",width:"calc(100vw - var(--sidebar-width))"},minZoom:-8.7,maxZoom:-4,zoomSnap:.1,zoomDelta:.1,crs:f.CRS.Simple,maxBounds:D,zoomControl:!1,zoom:H,children:[Object(O.jsx)(b.a,{}),!L&&Object(O.jsx)(m.a,{url:"/tw-map/fc_assets/full_map_low_quality.jpg",bounds:D}),L&&Object(O.jsx)(m.a,{url:"/tw-map/fc_assets/full_map_hq.jpg",bounds:D}),Object(O.jsx)(R,{mapBounds:D,onZoomCenterChange:v}),Object(O.jsx)(w,{location:p}),Object(O.jsx)(z,{thrall:o,focused:r})]}),Object(O.jsx)("div",{className:"sidebar-right",children:Object(O.jsx)(C,{thralls:e.data,onSelectLocation:function(e){v({center:y(e),zoom:-7})},selectedThrallFocused:r,selectedThrall:o,onDeselectThrall:function(){s(!1),v({zoom:-8.7,center:E})},onSelectThrall:function(e){var t=function(e){if(e.length<=0)return null;if(e.length<=1)return y(e[0]);if(e.length<=2){var t=e.map((function(e){return y(e)}));return new f.Polyline(t).getBounds().getCenter()}var n=e.map((function(e){return y(e)}));return new f.Polygon(n).getBounds().getCenter()}(e.locations);t&&v({zoom:-8,center:t}),a(e),s(!0)}})})]})}var P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={data:[]},o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(window.location.href+"/data.json").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(H,{data:this.state.data})})}}]),n}(a.a.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))};l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),B()}},[[30,1,2]]]);
//# sourceMappingURL=main.8f221993.chunk.js.map