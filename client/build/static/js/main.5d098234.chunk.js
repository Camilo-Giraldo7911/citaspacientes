(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{11:function(e,a,t){e.exports=t(27)},16:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=(t(16),t(10)),i=t(2),m=t(4),s=t(8),u=t(9),p=t.n(u),h=function(e){var a=e.crearCita,t=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),r=Object(i.a)(t,2),c=r[0],o=r[1],u=Object(n.useState)(!1),h=Object(i.a)(u,2),E=h[0],d=h[1],f=function(e){o(Object(s.a)({},c,Object(m.a)({},e.target.name,e.target.value)))},b=c.mascota,g=c.propietario,v=c.fecha,N=c.hora,w=c.sintomas;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear Citas"),E?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son obligatoorios"):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==b.trim()&&""!==g.trim()&&""!==v.trim()&&""!==N.trim()&&""!==w.trim()?(d(!1),c.id=p()(),console.log(c),a(c),o({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})):d(!0)}},l.a.createElement("label",null,"Nombre de la Mascota"),l.a.createElement("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre de la Mascota",onChange:f,value:b}),l.a.createElement("label",null,"Nombre del Due\xf1o"),l.a.createElement("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"Nombre del Due\xf1o",onChange:f,value:g}),l.a.createElement("label",null,"Fecha"),l.a.createElement("input",{type:"date",name:"fecha",className:"u-full-width",onChange:f,value:v}),l.a.createElement("label",null,"Hora"),l.a.createElement("input",{type:"time",name:"hora",className:"u-full-width",onChange:f,value:N}),l.a.createElement("label",null,"Sintomas"),l.a.createElement("textarea",{className:"u-full-width",name:"sintomas",onChange:f,value:w}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar cita")))},E=t(5),d=t.n(E),f=function(e){var a=e.cita,t=e.eliminarCita;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota: ",l.a.createElement("span",null,a.mascota)),l.a.createElement("p",null,"Due\xf1o: ",l.a.createElement("span",null,a.propietario)),l.a.createElement("p",null,"Fecha: ",l.a.createElement("span",null,a.fecha)),l.a.createElement("p",null,"Hora: ",l.a.createElement("span",null,a.hora)),l.a.createElement("p",null,"Sintomas: ",l.a.createElement("span",null,a.sintomas)),l.a.createElement("button",{className:"button eliminar u-full width",onClick:function(){return t(a.id)}},"Eliminar \xd7"))};f.protTypes={cita:d.a.object.isRequired,eliminarCita:d.a.func.isRequired};var b=f;var g=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var a=Object(n.useState)(e),t=Object(i.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("citas"))?localStorage.setItem("citas",JSON.stringify(r)):localStorage.setItem("citas",JSON.stringify([]))}),[r]);var m=function(e){var a=r.filter((function(a){return a.id!==e}));c(a)},s=0===r.length?"No hay Citas":"Administra tus Citas";return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Administrador de Pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(h,{crearCita:function(e){c([].concat(Object(o.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,s),r.map((function(e){return l.a.createElement(b,{key:e.id,cita:e,eliminarCita:m})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.5d098234.chunk.js.map