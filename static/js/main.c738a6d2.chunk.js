(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{113:function(n,e,t){"use strict";t.r(e);var c,i,r,o,a,l,s,j,b,d,x,h=t(1),p=t.n(h),u=t(79),O=t.n(u),g=(t(97),t(128)),m=t(130),f=t(89),v=t(129),y=(t(98),t(35)),k=t(12),w=t(7),C=t(14),q=t(47),A=t(11),z=Object(C.gql)(c||(c=Object(w.a)(["\n  {\n    projectCollection {\n      items {\n        title\n        image {\n          url\n        }\n        sys {\n          id\n        }\n      }\n    }\n  }\n"]))),I=Object(C.gql)(i||(i=Object(w.a)(["\n  {\n    articleCollection {\n      items {\n        title\n        image {\n          url\n        }\n        sys {\n          id\n        }\n      }\n    }\n  }\n"]))),T=Object(C.gql)(a||(a=Object(w.a)(["\n  {\n    aboutCollection {\n      items {\n        text {\n          json\n        }\n        image {\n          url\n        }\n      }\n    }\n  }\n"]))),F=A.a.div(l||(l=Object(w.a)(["\n  padding: 50px, 50px;\n  max-width: 1500px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 80px;\n  border-radius: 10px;\n  border: 10px solid black;\n  background-color: white;\n  color: black;\n"]))),P=t(4),B=Object(A.b)(s||(s=Object(w.a)(["\n  0% { margin-bottom: 0; }\n  50% { margin-bottom: 15px }\n  100% { margin-bottom: 0 }\n"]))),E=A.a.div(j||(j=Object(w.a)(["\n  display: flex;\n  overflow: hidden;\n  height: 2em;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n  justify-content: center;\n"]))),L=A.a.div(b||(b=Object(w.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),M=A.a.div(d||(d=Object(w.a)(["\n  display: flex;\n  align-items: flex-start;\n  color: black;\n  font-weight: bold;\n  font-size: 20px;\n"]))),S=A.a.div(x||(x=Object(w.a)(["\n  background-color: black;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  margin: 0 5px;\n  animation: "," 0.5s linear infinite;\n  animation-delay: ",";\n"])),B,(function(n){return n.delay}));var D,Q,H,J=function(){return Object(P.jsxs)(E,{children:[Object(P.jsx)(M,{children:"Loading"}),Object(P.jsxs)(L,{children:[Object(P.jsx)(S,{delay:""}),Object(P.jsx)(S,{delay:".1s"}),Object(P.jsx)(S,{delay:".2s"})]})]})},R=A.a.div(D||(D=Object(w.a)(["\n  display: flex;\n"]))),N=A.a.p(Q||(Q=Object(w.a)(["\n  text-align: left;\n  max-width: 50%;\n  align-items: flex-start;\n  margin-left: 20px;\n  margin-right: 100px;\n"]))),U=A.a.img(H||(H=Object(w.a)(["\n  text-align: right;\n  align-items: flex-end;\n  width: 500px;\n  height: 500px;\n"])));var V,W,Y,_=function(){var n=Object(C.useQuery)(T),e=n.data,t=n.loading;return Object(P.jsxs)(F,{children:[Object(P.jsx)("h1",{children:"About"}),t?Object(P.jsx)(J,{}):e.aboutCollection.items.map((function(n){return Object(P.jsxs)(R,{children:[Object(P.jsx)(N,{children:Object(q.documentToReactComponents)(n.text.json)}),Object(P.jsx)(U,{src:n.image.url})]})}))]})},G=t(64),K=A.a.div(V||(V=Object(w.a)(["\n  width: 25%;\n  margin: 50px;\n  height: 300px;\n  border-radius: 10px;\n  border: 10px solid black;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n\n  &:hover div:before {\n    display: block;\n  }\n  &:hover div {\n    display: block;\n  }\n"]))),X=A.a.div(W||(W=Object(w.a)(["\n  height: 100%;\n  width: 100%;\n  background-image: url(",');\n  background-position: center;\n  background-size: cover;\n  vertical-align: bottom;\n  transition: all 0.5s;\n\n  &:before {\n    content: "";\n    display: none;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: gray;\n    opacity: 0.5;\n  }\n\n  &:hover {\n    transform: scale(1.2);\n  }\n'])),(function(n){return n.image})),Z=A.a.div(Y||(Y=Object(w.a)(["\n  display: none;\n  font-size: 35px;\n  font-weight: bold;\n  color: white !important;\n  text-align: center;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 50px;\n  text-decoration: none;\n"])));var $=function(n){return Object(P.jsx)(K,{children:Object(P.jsx)(y.b,{to:n.link,children:Object(P.jsx)(X,Object(G.a)(Object(G.a)({className:"project"},n),{},{children:Object(P.jsx)(Z,{children:n.title})}))})})};var nn=function(n){var e=n.query,t=n.collection,c=n.link,i=Object(C.useQuery)(e),r=i.data;return i.loading?Object(P.jsx)(J,{}):r[t].items.map((function(n){return Object(P.jsx)($,{title:n.title,image:n.image.url,link:c+n.sys.id},n.title)}))};var en=function(){return Object(P.jsxs)(F,{children:[Object(P.jsx)("h1",{children:"Articles"}),Object(P.jsx)(nn,{query:I,collection:"articleCollection",link:"/articles/"})]})};var tn=function(){return Object(P.jsxs)(F,{children:[Object(P.jsx)("h1",{children:"Projects"}),Object(P.jsx)(nn,{query:z,collection:"projectCollection",link:"/projects/"})]})};var cn,rn,on,an,ln,sn,jn=function(){return Object(P.jsxs)(F,{children:[Object(P.jsx)("h1",{children:"Contact"}),Object(P.jsx)(J,{}),Object(P.jsx)("h1",{children:"Under construction"})]})},bn=t(131),dn=[{label:"About",href:"/"},{label:"Projects",href:"/projects"},{label:"Articles",href:"/articles"},{label:"Contact",href:"/contact"}],xn=Object(A.a)(y.b)(cn||(cn=Object(w.a)(["\n  width: 189px;\n  height: 70px;\n  overflow: hidden;\n  border-radius: 20px;\n  text-decoration: none;\n  font-size: 2em;\n  color: black;\n  font-weight: bold;\n  padding: 0 0.5em;\n  margin: 0 1em;\n\n  &:hover {\n    background-color: rgba(122, 122, 122, 0.37);\n  }\n"]))),hn=function(){return Object(P.jsx)("div",{children:dn.map((function(n){var e=n.label,t=n.href;return Object(P.jsx)(xn,{to:t,children:e},e)}))})},pn=Object(A.a)(bn.a)(rn||(rn=Object(w.a)(["\n  box-sizing: border-box;\n  height: 79px;\n  background-color: #ffffff;\n  overflow: hidden;\n  border: 10px solid #000000;\n  display: flex;\n  justify-content: center;\n  box-flex: center;\n"]))),un=A.a.div(on||(on=Object(w.a)(["\n  text-align: right;\n  width: 50%;\n  display: inline-block;\n"]))),On=A.a.div(an||(an=Object(w.a)(["\n  text-align: left;\n  width: 49%;\n  display: inline-block;\n  font-size: 2em;\n  color: black;\n  font-weight: bold;\n  padding: 0 0.5em;\n"]))),gn=function(){return Object(P.jsx)(pn,{position:"static",children:Object(P.jsxs)("div",{children:[Object(P.jsx)(On,{children:"Tomas Henry Adams"}),Object(P.jsx)(un,{children:Object(P.jsx)(hn,{})})]})})},mn=A.a.img(ln||(ln=Object(w.a)(["\n  height: 150px;\n  width: 300px;\n  margin-top: 50px;\n  margin-bottom: 0px;\n"]))),fn=A.a.h1(sn||(sn=Object(w.a)(["\n  font-size: 40px;\n"])));var vn=function(n){var e=n.query,t=n.collection,c=Object(C.useQuery)(e),i=c.data;return c.loading?Object(P.jsx)(J,{}):Object(P.jsxs)("div",{children:[Object(P.jsx)(mn,{src:i[t].image.url,alt:""}),Object(P.jsx)(fn,{children:i.project.title}),Object(q.documentToReactComponents)(i.project.text.json)]})};var yn=function(n){var e,t=n.match;return Object(P.jsx)(F,{children:Object(P.jsx)(vn,{query:(e=t.params.projectId,Object(C.gql)(r||(r=Object(w.a)(['\n{\n  project(id: "','"){\n    title\n    image{url}\n    text{json}\n  }\n}\n'])),e)),collection:"project"})})};var kn=function(n){var e,t=n.match;return Object(P.jsx)(F,{children:Object(P.jsx)(vn,{query:(e=t.params.articleId,Object(C.gql)(o||(o=Object(w.a)(['\n{\n  article(id: "','"){\n    title\n    image{url}\n    text{json}\n  }\n}\n'])),e)),collection:"project"})})},wn=function(){return Object(P.jsxs)(y.a,{children:[Object(P.jsx)(gn,{}),Object(P.jsx)(k.a,{exact:!0,path:"/projects",component:tn}),Object(P.jsx)(k.a,{exact:!0,path:"/articles",component:en}),Object(P.jsx)(k.a,{exact:!0,path:"/",component:_}),Object(P.jsx)(k.a,{exact:!0,path:"/contact",component:jn}),Object(P.jsx)(k.a,{exact:!0,path:"/projects/:projectId",component:yn}),Object(P.jsx)(k.a,{exact:!0,path:"/articles/:articleId",component:kn})]})};var Cn=function(){var n=Object(g.a)("(prefers-color-scheme: dark)"),e=p.a.useMemo((function(){return Object(f.a)({palette:{primary:{main:"#EC4846"},success:{main:"#5ac328"},type:n?"dark":"light"},typography:{fontFamily:["Poppins","Arial"].join(",")}})}),[n]);return Object(P.jsxs)(v.a,{theme:e,children:[Object(P.jsx)(m.a,{}),Object(P.jsx)(wn,{})]})},qn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,132)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),c(n),i(n),r(n),o(n)}))},An=new C.ApolloClient({cache:new C.InMemoryCache,uri:"https://graphql.contentful.com/content/v1/spaces/pystbp1i77y9",headers:{Authorization:"Bearer v1kpSdemWSYklH6rtTBD5Mn8L4fEa0OOuVIoTckDF_E"}});O.a.render(Object(P.jsx)(p.a.StrictMode,{children:Object(P.jsx)(C.ApolloProvider,{client:An,children:Object(P.jsx)(Cn,{})})}),document.getElementById("root")),qn()},97:function(n,e,t){},98:function(n,e,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.c738a6d2.chunk.js.map