(this.webpackJsonpwebsource=this.webpackJsonpwebsource||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(4),r=t.n(s),i=(t(13),t(5)),o=t(6),d=t(8),l=t(7),m=(t(14),t(0)),g=function(e){e.searchField;var a=e.searchChange;return Object(m.jsx)("div",{className:"d-flex",children:Object(m.jsx)("input",{className:"d-flex me-2",type:"search",placeholder:"Search",onChange:a})})},u=(t(16),function(e){return Object(m.jsx)("div",{className:"col-xs-12 col-md-6 col-lg-4 d-flex align-items-stretch",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{className:"card-img-top",src:"".concat(e.image),alt:"".concat(e.image)}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:e.title}),Object(m.jsx)("p",{className:"card-text",children:e.desc}),Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{href:e.docs,children:Object(m.jsx)("button",{className:"btn btn-primary",children:"Docs"})}),Object(m.jsx)("a",{href:e.download,children:Object(m.jsx)("button",{className:"btn",children:"Download"})})]})]})]})})}),h=function(e){var a=e.resources;return Object(m.jsx)("div",{className:"row",children:a.map((function(e,a){return Object(m.jsx)(u,{title:e.name,desc:e.desc,image:e.image},a)}))})},b=[{id:1,name:"HTML5",image:"./img/html5.png",desc:"HTML5 is a markup language used for structuring and presenting content on the World Wide Web."},{id:2,name:"CSS3",image:"./img/css3.png",desc:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."},{id:3,name:"JavaScript",image:"./img/javascript.png",desc:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification."},{id:4,name:"Bootstrap",image:"./img/bootstrap.png",desc:"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."},{id:5,name:"React",image:"./img/react.png",desc:"React is an open-source, front end, JavaScript library for building user interfaces or UI components."},{id:6,name:"node.js",image:"./img/react.png",desc:"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser."},{id:7,name:"npm",image:"./img/react.png",desc:"npm is a package manager for the JavaScript programming language."},{id:8,name:"MySQL",image:"./img/react.png",desc:"MySQL is an open-source relational database management system."}],j=(t(3),t(17),function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={resources:b,searchField:""},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state.resources.filter((function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{children:Object(m.jsx)("nav",{className:"navbar navbar-dark",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("a",{className:"navbar-brand",href:"https://www.google.com/",children:"Websource"}),Object(m.jsx)(g,{searchChange:this.onSearchChange})]})})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(h,{resources:a})})]})}}]),t}(n.Component)),p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.bdff6565.chunk.js.map