(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cancelOrder/cancelOrder"],{"03a0":function(e,n,t){"use strict";var r=t("dbc3"),c=t.n(r);c.a},"16c7":function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=a(t("4795"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,r,c,a,o){try{var i=e[a](o),u=i.value}catch(s){return void t(s)}i.done?n(u):Promise.resolve(u).then(r,c)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function i(e){o(a,r,c,i,u,"next",e)}function u(e){o(a,r,c,i,u,"throw",e)}i(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/jyf-Parser/index")]).then(function(){return resolve(t("3654"))}.bind(null,t)).catch(t.oe)},s={onLoad:function(n){e("log",n," at pages\\cancelOrder\\cancelOrder.vue:29"),this.orderId=n.orderId,this.initRichText()},data:function(){return{orderId:"",cancelPerson:"",cancelRichText:"",isComplaint:-1,cancelList:["信息填写错误,重新下单","临时有事，我不需要了","其他原因"]}},components:{parser:u},methods:{cancelSubmit:function(){var n=this;return i(c.default.mark((function t(){var a;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=n.cancelPerson.trim()){t.next=3;break}return r.showToast({icon:"none",title:"请填写取消订单的原因"}),t.abrupt("return");case 3:return t.next=5,n.$fetch(n.$api.orderCancel,{orderId:n.orderId,cancelRemark:n.cancelPerson},"POST","Form");case 5:a=t.sent,e("log",a," at pages\\cancelOrder\\cancelOrder.vue:55"),0==a.code?(n.cancelPerson="",r.showToast({icon:"success",title:"取消订单成功"}),r.setStorageSync("userSelect",6),setTimeout((function(){r.switchTab({url:"../order/order"})}),1e3)):r.showToast({icon:"none",title:a.msg});case 8:case"end":return t.stop()}}),t)})))()},initRichText:function(){var e=this;return i(c.default.mark((function n(){var t;return c.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$fetch(e.$api.articleType,{type:8},"Post","Form");case 2:t=n.sent,0==t.code&&(e.cancelRichText=t.data[0].articleContent);case 4:case"end":return n.stop()}}),n)})))()},handleClick:function(n,t){n!=this.isComplaint?this.isComplaint=n:this.isComplaint=-1,e("log",t," at pages\\cancelOrder\\cancelOrder.vue:89"),this.cancelPerson=t}}};n.default=s}).call(this,t("0de9")["default"],t("6e42")["default"])},"1de5":function(e,n,t){"use strict";t.r(n);var r=t("b406"),c=t("ad29");for(var a in c)"default"!==a&&function(e){t.d(n,e,(function(){return c[e]}))}(a);t("03a0");var o,i=t("f0c5"),u=Object(i["a"])(c["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=u.exports},ad29:function(e,n,t){"use strict";t.r(n);var r=t("16c7"),c=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=c.a},b406:function(e,n,t){"use strict";var r,c=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}))},dbc3:function(e,n,t){},e76c:function(e,n,t){"use strict";(function(e){t("7207"),t("921b");r(t("66fd"));var n=r(t("1de5"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])}},[["e76c","common/runtime","common/vendor"]]]);