(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(15),i=n.n(s),c=(n(55),n(6)),l=n(7),b=n(10),j=n(9),o=(n(56),n(13)),u=n(14),h=n.n(u),d=n(2),m=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.onSubmitAddOrUpdateUser=function(e){e.preventDefault();var t=a.state,n=t.firstname,r=t.lastname,s=t.birthdate,i=t.email,c=t.age,l=t.phonenumber;h.a.post("/addOrUpdateUser",{firstname:n,lastname:r,email:i,birthdate:s,age:c,phonenumber:l}).then((function(e){alert(e.data)}))},a.state={firstname:"",lastname:"",birthdate:"",email:"",age:"",phonenumber:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.firstname,n=e.lastname,a=e.email,r=e.birthdate,s=e.age,i=e.phonenumber;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Add or Update User:"}),Object(d.jsxs)("form",{onSubmit:this.onSubmitAddOrUpdateUser,children:[Object(d.jsx)("label",{htmlFor:"firstname",children:"Enter first name"}),Object(d.jsx)("input",{name:"firstname",type:"text",value:t,onChange:this.onChange}),Object(d.jsx)("label",{htmlFor:"lastname",children:"Enter last name"}),Object(d.jsx)("input",{name:"lastname",type:"text",value:n,onChange:this.onChange}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"email",children:"Enter your email"}),Object(d.jsx)("input",{name:"email",type:"text",value:a,onChange:this.onChange}),Object(d.jsx)("label",{htmlFor:"birthdate",children:"Enter birthdate"}),Object(d.jsx)("input",{name:"birthdate",type:"text",value:r,onChange:this.onChange}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"age",children:"Enter age"}),Object(d.jsx)("input",{name:"age",type:"number",value:s,onChange:this.onChange}),Object(d.jsx)("label",{htmlFor:"phonenumber",children:"Enter phone number"}),Object(d.jsx)("input",{name:"phonenumber",type:"number",value:i,onChange:this.onChange}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:"Add/Update"})]}),Object(d.jsx)("br",{})]})}}]),n}(a.Component),O=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.onSubmitFindUser=function(e){e.preventDefault();var t=a.state.email2;h.a.post("/findUser",{email2:t}).then((function(e){var t=e.data;a.setState({response:t})}))},a.state={email2:"",response:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.email2;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Find User:"}),Object(d.jsxs)("form",{onSubmit:this.onSubmitFindUser,children:[Object(d.jsx)("label",{htmlFor:"email2",children:"Enter your email"}),Object(d.jsx)("input",{name:"email2",type:"text",value:e,onChange:this.onChange}),Object(d.jsx)("button",{children:"Find"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:this.state.response})]}),Object(d.jsx)("br",{})]})}}]),n}(a.Component),x=n(98),p=n(45),f=n.n(p),v=n(46),g=n.n(v),C=n(100),U=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.onSubmitGetAllUsers=function(e){e.preventDefault(),h.a.post("/getAllUsers").then((function(e){var t=e.data;a.setState({response:t})}))},a.renderAllUser=function(){try{return a.state.response.map((function(e){return Object(d.jsx)(x.a,{defaultCollapseIcon:Object(d.jsx)(f.a,{}),defaultExpandIcon:Object(d.jsx)(g.a,{}),children:Object(d.jsxs)(C.a,{nodeId:"1",label:e.email,children:[Object(d.jsx)(C.a,{nodeId:"2",label:"name:"+e.firstname+e.lastname}),Object(d.jsx)(C.a,{nodeId:"3",label:"birthdate:"+e.birthdate}),Object(d.jsx)(C.a,{nodeId:"4",label:"age:"+e.age}),Object(d.jsx)(C.a,{nodeId:"5",label:"phonenumber:"+e.phonenumber})]})})}))}catch(e){console.log(e)}},a.state={response:[]},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:["  ",Object(d.jsx)("h2",{children:"Get All Users"}),Object(d.jsxs)("form",{onSubmit:this.onSubmitGetAllUsers,children:[Object(d.jsx)("button",{children:"Get"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:this.renderAllUser()})]})]})}}]),n}(a.Component),S=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.onSubmitDeleteUser=function(e){e.preventDefault();var t=a.state.email3;h.a.put("/deleteUser",{email3:t}).then((function(e){alert(e.data)}))},a.state={email3:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.email3;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Delete User:"}),Object(d.jsxs)("form",{onSubmit:this.onSubmitDeleteUser,children:[Object(d.jsx)("label",{htmlFor:"email3",children:"Enter your email"}),Object(d.jsx)("input",{name:"email3",type:"text",value:e,onChange:this.onChange}),Object(d.jsx)("button",{children:"Delete"})]}),Object(d.jsx)("br",{})]})}}]),n}(a.Component),y=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.call(this)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)(O,{}),Object(d.jsx)(S,{}),Object(d.jsx)(U,{})]})}}]),n}(a.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),F()}},[[81,1,2]]]);
//# sourceMappingURL=main.62fbb11c.chunk.js.map