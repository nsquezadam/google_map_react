(this.webpackJsonpapp_google_map=this.webpackJsonpapp_google_map||[]).push([[0],{17:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(4),l=n.n(c),r=(n(17),n(12)),i=n(3),s=n(6),u=n(24),j=(n(9),n.p+"static/media/compass.de577570.svg"),b=n(1),g=function(t){var e=t.panTo;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{className:"locate",onClick:function(){console.log("boton para volver a la misma posicion"),navigator.geolocation.getCurrentPosition((function(t){e({lat:t.coords.latitude,lng:t.coords.longitude}),console.log(t.coords.latitude)}),(function(){return null}))},children:Object(b.jsx)("img",{src:j,alt:"compass"})})})},d=(n(19),n(11)),p=n.n(d);n(21);p.a.setApiKey("AIzaSyCGIRHlHQX_miCOxHGMs0I9G4gydRT3Eek");var O=function(t){var e=t.panTo,n=Object(a.useState)(""),o=Object(i.a)(n,2),c=o[0],l=o[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],j=s[1],g=parseFloat(c),d=parseFloat(u);return Object(b.jsx)("div",{className:"searchCoordinate",children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(c,u)},children:[Object(b.jsx)("input",{type:"text",value:c,onChange:function(t){return l(t.target.value)},placeholder:"Ingresa Latitud"}),Object(b.jsx)("input",{type:"text",value:u,onChange:function(t){return j(t.target.value)},placeholder:"Ingresa Longitud"}),Object(b.jsx)("button",{type:"submit",onClick:function(){e({lat:g,lng:d})},children:"Buscar"})]})})},m=["places"],h={lat:-33.436884,lng:-70.634395};console.log(h);var f={disableDefaultUI:!0,zoomControl:!0},x=function(t){var e=Object(a.useState)(!1),n=Object(i.a)(e,2),o=(n[0],n[1],Object(a.useState)([])),c=Object(i.a)(o,2),l=c[0],j=c[1],d=Object(a.useState)(null),p=Object(i.a)(d,2),x=p[0],v=p[1],C=Object(a.useCallback)((function(t){j((function(e){return[].concat(Object(r.a)(e),[{lat:t.latLng.lat(),lng:t.latLng.lng(),time:new Date}])}))}),[]),k=Object(a.useRef)(),I=Object(a.useCallback)((function(t){k.current=t}),[]),S=Object(a.useCallback)((function(t){var e=t.lat,n=t.lng;k.current.panTo({lat:e,lng:n}),k.current.setZoom(18)}),[]),y=Object(s.d)({googleMapsApiKey:"AIzaSyCGIRHlHQX_miCOxHGMs0I9G4gydRT3Eek",libraries:m}),L=y.isLoaded;return y.loadError?"Error loading Map":L?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{panTo:S}),Object(b.jsx)(O,{panTo:S}),Object(b.jsxs)(s.a,{mapContainerStyle:{width:"100vw",height:"100vh"},zoom:10,center:h,options:f,onClick:C,onLoad:I,children:[l.map((function(t){return Object(b.jsx)(s.c,{position:{lat:t.lat,lng:t.lng},onClick:function(){return v(t)}},t.time.toISOString())})),x?Object(b.jsx)(s.b,{position:{lat:x.lat,lng:x.lng},onCloseClick:function(){v(null)},children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Info"}),Object(b.jsxs)("p",{children:["Fecha ",Object(u.a)(x.time,new Date)]})]})}):null]})]}):"Loading Map"},v=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(x,{})})};l.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.0c59e43f.chunk.js.map