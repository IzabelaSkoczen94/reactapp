(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),o=a.n(c),s=(a(18),a(7)),i=a.n(s),l=a(11),u=a(8),p=a(1),m=a(2),d=a(4),h=a(3),y=a(5),f=(a(6),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"product"}),this.props.items.map(function(t){return n.a.createElement("div",{key:t.id,id:"product"},n.a.createElement("div",{className:"product-box"},n.a.createElement("div",null,n.a.createElement("img",{className:"product-box--image",src:t.photo,alt:"Logo"})),n.a.createElement("div",null,n.a.createElement("h2",null,t.name),n.a.createElement("pre",null,t.price," zl"),n.a.createElement("p",null,t.description),n.a.createElement("button",{className:"js-product-add",item:t,onClick:function(){return e.props.addItem(t,t.id)}},"Dodaj do koszyka"))))}))}}]),t}(n.a.Component)),v=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"cart"}),this.props.products.map(function(t){return n.a.createElement("div",{key:t.id+10},n.a.createElement("ul",{className:"user-cart--list"},n.a.createElement("li",null,n.a.createElement("button",{key:t.id,onClick:function(){return e.props.deleteItem(t.id)}},"x"),t.id-1," - ",t.name," - ",t.price," zl")))}))}}]),t}(n.a.Component),E=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={productsArray:[],basketArray:[],totalprice:0,value:""},a.deleteItem=function(e){var t=Object(u.a)(a.state.basketArray);t=t.filter(function(t){return t.id!==e}),console.log(t),a.setState({basketArray:t})},a.addItem=function(e){var t=parseFloat(e.price);a.state.basketArray.includes(e)?alert("Wybrany produkt jest juz w koszyku"):a.setState(function(r){return{basketArray:[].concat(Object(u.a)(r.basketArray),[e]),totalprice:a.state.totalprice+t}})},a.productSortByPriceAscending=function(e){console.log("sortowanie po cenie rosnaca");var t=a.state.productsArray.sort(function(e,t){return e.price-t.price});a.setState({productsArray:t})},a.productSortByPriceDescending=function(e){console.log("sortowanie po cenie malejaca");var t=a.state.productsArray.sort(function(e,t){return t.price-e.price});a.setState({productsArray:t})},a.productSortByortByName=function(e){console.log("sortowanie po nazwie");var t=a.state.productsArray.sort(function(e,t){return e.name.localeCompare(t.name)});a.setState({productsArray:t})},a.handleChange=function(e){a.setState({value:e.target.value})},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"http://private-1c19e-reactlesson.apiary-mock.com/products",fetch("http://private-1c19e-reactlesson.apiary-mock.com/products").then(function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()}).then(function(e){t.setState({productsArray:e})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.productsArray,a=this.state.basketArray;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"header-app"},n.a.createElement("img",{className:"header-app--logo",src:"logo.png",alt:"Logo"}),"My-shop application"),n.a.createElement("div",{className:"container"},n.a.createElement("section",{className:"product-list"},n.a.createElement("button",{ref:"namesorting",className:"js-sort",id:"namesorting",onClick:function(t){return e.productSortByortByName(t)}},"Sortuj po nazwie A-Z"),n.a.createElement("button",{className:"js-sort",id:"priceascending",onClick:function(t){return e.productSortByPriceAscending(t)}},"Sortuj po cenie rosnaca"),n.a.createElement("button",{className:"js-sort",id:"pricedescending",onClick:function(t){return e.productSortByPriceDescending(t)}},"Sortuj po cenie malejaca"),n.a.createElement("div",{className:"search"},n.a.createElement("input",{value:this.state.value,onChange:this.handleChange,className:"search-input",placeholder:"Szukaj..."})),n.a.createElement(f,{items:t,addItem:this.addItem})),n.a.createElement("section",{className:"user-cart"},n.a.createElement("h4",null,"Tw\xf3j koszyk"),n.a.createElement(v,{products:a,deleteItem:this.deleteItem}),n.a.createElement("section",{className:"total-price"},this.state.totalprice," z\u0142"))),n.a.createElement("footer",{className:"footer"},"Copyright by my-shop - 2018")))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.76e97875.chunk.js.map