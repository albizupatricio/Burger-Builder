(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3SCF0",BreadTop:"BurgerIngredient_BreadTop__1OU4H",Seeds1:"BurgerIngredient_Seeds1__2Wbov",Seeds2:"BurgerIngredient_Seeds2__1aH0T",Tomato:"BurgerIngredient_Tomato__1ptik",Meat:"BurgerIngredient_Meat__M_ghl",Cheese:"BurgerIngredient_Cheese__3fiFq",Salad:"BurgerIngredient_Salad__8Uoox",Bacon:"BurgerIngredient_Bacon__2WZI6"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__IwjFS",Open:"SideDrawer_Open__ftxb-",Close:"SideDrawer_Close__2e8yy",Logo:"SideDrawer_Logo__2bfe-"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__2zpcq",Label:"BuildControl_Label__3SjG4",Less:"BuildControl_Less__2ONnA",More:"BuildControl_More__3DVOz"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__yKRCw",Logo:"Toolbar_Logo__CemBJ",DesktopOnly:"Toolbar_DesktopOnly__11Ozz"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2Dse4",active:"NavigationItem_active__2Q0RW"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__2t4H4",OrderButton:"BuildControls_OrderButton__1HsnW",enable:"BuildControls_enable__CntUI"}},function(e,t,a){e.exports={Button:"Button_Button__22Afy",Success:"Button_Success__1Bq8e",Danger:"Button_Danger__T0Yi0"}},,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__hrgK-"}},function(e,t,a){e.exports=a.p+"static/media/logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__16VZ7"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__34sym"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3wxDo"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3gPy1"}},function(e,t,a){e.exports={Burger:"Burger_Burger__1q_di"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1rSon"}},,function(e,t,a){e.exports={Loader:"Spinner_Loader__1ClnC",load2:"Spinner_load2__2h9Ks"}},,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),i=(a(40),a(1)),c=a(2),s=a(3),u=a(4),d=function(e){return e.children},m=a(24),p=a.n(m),h=a(9),g=a.n(h),_=a(25),b=a.n(_),f=a(26),v=a.n(f),E=function(e){return r.a.createElement("div",{className:v.a.Logo,style:{heigth:e.heigth}},r.a.createElement("img",{src:b.a,alt:"MyBurger"}))},C=a(27),y=a.n(C),B=a(11),k=a.n(B),w=function(e){return r.a.createElement("li",{className:k.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?k.a.active:null},e.children))},O=function(){return r.a.createElement("ul",{className:y.a.NavigationItems},r.a.createElement(w,{link:"/",active:!0},"Burger Builder"),r.a.createElement(w,{link:"/"},"Checkout"))},S=a(28),N=a.n(S),j=function(e){return r.a.createElement("div",{className:N.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},D=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(j,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(O,null)))},T=a(29),I=a.n(T),L=function(e){return e.show?r.a.createElement("div",{className:I.a.Backdrop,onClick:e.clicked}):null},x=a(7),H=a.n(x),M=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),r.a.createElement(d,null,r.a.createElement(L,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:H.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(O,null))))},P=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToogleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(D,{drawerToggleClicked:this.sideDrawerToogleHandler}),r.a.createElement(M,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),a}(n.Component),A=a(10),U=a(34),W=a(30),R=a.n(W),z=a(6),q=a.n(z),F=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:q.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:q.a.BreadTop},r.a.createElement("div",{className:q.a.Seeds1}),r.a.createElement("div",{className:q.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:q.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:q.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:q.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:q.a.Bacon});break;case"tomato":e=r.a.createElement("div",{className:q.a.Tomato});break;default:e=null}return e}}]),a}(n.Component),Y=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(U.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(F,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:R.a.Burger},r.a.createElement(F,{type:"bread-top"}),t,r.a.createElement(F,{type:"bread-bottom"}))},J=a(12),K=a.n(J),V=a(8),Z=a.n(V),G=function(e){return r.a.createElement("div",{className:Z.a.BuildControl},r.a.createElement("div",{className:Z.a.Label},e.label),r.a.createElement("button",{className:Z.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:Z.a.More,onClick:e.added},"More"))},Q=[{label:"Bacon",type:"bacon"},{label:"Salad",type:"salad"},{label:"Tomato",type:"tomato"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],$=function(e){return r.a.createElement("div",{className:K.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),Q.map((function(t){return r.a.createElement(G,{key:t.label,label:t.label,added:e.ingredientAdded.bind(void 0,t.type),removed:e.ingredientRemoved.bind(void 0,t.type),disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:K.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},"ORDER NOW"))},X=a(31),ee=a.n(X),te=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(L,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ee.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),a}(n.Component),ae=a(13),ne=a.n(ae),re=function(e){return r.a.createElement("button",{className:[ne.a.Button,ne.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},oe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentWillUpdate",value:function(){console.log("[Order Summary} willUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicous burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(re,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(re,{btnType:"Success",clicked:this.props.purchaseContinue},"CONTINUE"))}}]),a}(n.Component),le=a(32),ie=a.n(le).a.create({baseURL:"https://react-my-burger-94228.firebaseio.com/"}),ce=a(33),se=a.n(ce),ue=function(){return r.a.createElement("div",{className:se.a.Loader},"Loading...")},de={salad:.5,cheese:.4,meat:1.3,bacon:.7,tomato:.5},me=function(e,t){return function(a){Object(u.a)(o,a);var n=Object(s.a)(o);function o(){var e;Object(i.a)(this,o);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(c.a)(o,[{key:"componentDidMount",value:function(){var e=this;t.interceptors.request.use((function(t){return e.setState({error:null}),t})),t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(te,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(n.Component)}(function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{bacon:0,salad:0,tomato:0,cheese:0,meat:0},totalPrice:4,purchaseable:!1,purchasing:!1,loading:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(A.a)({},e.state.ingredients);n[t]=a;var r=de[t],o=e.state.totalPrice+r;e.setState({ingredients:n,totalPrice:o}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(a<=0)return null;var n=a-1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var o=de[t],l=e.state.totalPrice-o;e.setState({ingredients:r,totalPrice:l}),e.updatePurchaseState(r)},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.setState({loading:!0});var t={ingredients:e.state.ingredients,price:e.state.totalPrice,customer:{name:"Pato",address:{street:"Teststreet 1",zipCode:"1000",country:"Argentina"},email:"test@gmail.com"},deliveryMethod:"fastest"};ie.post("/orders",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)})).finally((function(){e.setState({loading:!1,purchasing:!1})}))},e}return Object(c.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=r.a.createElement(oe,{purchaseCancelled:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,ingredients:this.state.ingredients,price:this.state.totalPrice});return this.state.loading&&(a=r.a.createElement(ue,null)),r.a.createElement(d,null,r.a.createElement(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),r.a.createElement(Y,{ingredients:this.state.ingredients}),r.a.createElement($,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchaseable:this.state.purchaseable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),a}(n.Component),ie),pe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,null,r.a.createElement(me,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.cc454cdf.chunk.js.map