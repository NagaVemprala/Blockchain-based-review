(this["webpackJsonpecommercefinal-react"]=this["webpackJsonpecommercefinal-react"]||[]).push([[0],{129:function(e,t,n){e.exports=n(305)},134:function(e,t,n){},136:function(e,t,n){},170:function(e,t){},172:function(e,t){},205:function(e,t){},207:function(e,t){},236:function(e,t){},237:function(e,t){},305:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(122),u=n.n(r),s=(n(134),n(33)),o=n.n(s),c=n(60),p=n(123),l=n(124),m=n(127),y=n(125),b=n(128),d=(n(136),n(126)),v=new(n.n(d).a)(window.web3.currentProvider),w=new v.eth.Contract([{constant:!0,inputs:[],name:"getReviewsMappingValue",outputs:[{components:[{name:"reviewerAddress",type:"address"},{name:"productId",type:"uint256"},{name:"totalUpdates",type:"uint256"},{name:"reviewText",type:"string"},{name:"averageRating",type:"uint256"},{name:"allReviewRatings",type:"uint256[]"}],name:"",type:"tuple[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"users",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"reviewNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_reviewNumber",type:"uint256"}],name:"verifyReviewRating",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"manager",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"productNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"initialMessage",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"newUser",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"exist",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_senderAddress",type:"address"},{name:"_reviewNumber",type:"uint256"}],name:"transferFunds",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_reviewNumber",type:"uint256"},{name:"_rating",type:"uint256"}],name:"rateReview",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"allProductReviews",outputs:[{name:"reviewerAddress",type:"address"},{name:"productId",type:"uint256"},{name:"totalUpdates",type:"uint256"},{name:"reviewText",type:"string"},{name:"averageRating",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"allProducts",outputs:[{name:"productId",type:"uint256"},{name:"productDescription",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_reviewText",type:"string"},{name:"_productId",type:"uint256"}],name:"writeReview",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_productDescription",type:"string"}],name:"addProduct",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}],"0x213c666AC07B91B885858B2f8fb629d0cc7d5fBD"),f=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).onSubmit=function(){var e=Object(c.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v.eth.getAccounts();case 3:return a=e.sent,n.setState({message:"Waiting on transaction success..."}),e.next=7,w.methods.writeReview(n.state.reviewText,1).send({from:a[0]});case 7:n.setState({message:"Your review is submitted!",reviewText:""});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={manager:"",productNumber:"",reviewNumber:"",reviewText:"",message:""},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.methods.manager().call();case 2:return t=e.sent,e.next=5,w.methods.productNumber().call();case 5:return n=e.sent,e.next=8,w.methods.reviewNumber().call();case 8:a=e.sent,this.setState({manager:t,productNumber:n,reviewNumber:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log(w),i.a.createElement("div",null,i.a.createElement("h2",null," Blockchain-based product review Crypto-rewards platform "),i.a.createElement("hr",null),i.a.createElement("p",null," Contract is deployed by ",this.state.manager," "),i.a.createElement("hr",null),i.a.createElement("p",null," There are a total of ",this.state.reviewNumber," reviews available on the platform "),i.a.createElement("hr",null),i.a.createElement("p",null," There are a total of ",this.state.productNumber," products for which users can write or rate reviews "),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("h4",null,"Write Review for Product 1 "),i.a.createElement("div",null,i.a.createElement("label",null,"Enter your review text and Submit "),i.a.createElement("input",{type:"text",name:"reviewText",onChange:function(t){return e.setState({reviewText:t.target.value})}})),i.a.createElement("button",null,"Enter")),i.a.createElement("h1",null,this.state.message))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.50beac23.chunk.js.map