(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/billSetting/billSetting"],{"01e3":function(e,t,n){"use strict";var o=n("ba07"),a=n.n(o);a.a},"0952":function(e,t,n){"use strict";n.r(t);var o=n("a8f3"),a=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=a.a},"0f88":function(e,t,n){"use strict";n.r(t);var o=n("e66a"),a=n("0952");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("01e3");var i,l=n("f0c5"),u=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=u.exports},a8f3:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n("4795"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,o,a,c,i){try{var l=e[c](i),u=l.value}catch(r){return void n(r)}l.done?t(u):Promise.resolve(u).then(o,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var c=e.apply(t,n);function l(e){i(c,o,a,l,u,"next",e)}function u(e){i(c,o,a,l,u,"throw",e)}l(void 0)}))}}var u={onLoad:function(t){e("log",t," at pages\\billSetting\\billSetting.vue:22"),this.signCodeFlag=Number(t.signCode),this.collectionFlag=Number(t.CollectionFlag)},data:function(){return{signCodeFlag:"",collectionFlag:""}},methods:{goToCollect:function(){o.navigateTo({url:"../collect/collect"})},changeSignCode:function(){var e=this;return l(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.signCodeFlag?e.signCodeFlag=0:e.signCodeFlag=1,t.next=3,e.$fetch(e.$api.signCodeFlag,{signForCodeFlag:e.signCodeFlag},"POST","Form");case 3:n=t.sent,0===n.code?o.showToast({icon:"success",title:n.msg}):o.showToast({icon:"none",title:n.msg});case 5:case"end":return t.stop()}}),t)})))()},changeCollectionCode:function(){var e=this;return l(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.collectionFlag?e.collectionFlag=0:e.collectionFlag=1,t.next=3,e.$fetch(e.$api.collectionCodeFlag,{specialCollectionFlag:e.collectionFlag},"POST","Form");case 3:n=t.sent,0===n.code?o.showToast({icon:"success",title:n.msg}):o.showToast({icon:"none",title:n.msg});case 5:case"end":return t.stop()}}),t)})))()}}};t.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},ba07:function(e,t,n){},e66a:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}))},f0ed:function(e,t,n){"use strict";(function(e){n("7207"),n("921b");o(n("66fd"));var t=o(n("0f88"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["f0ed","common/runtime","common/vendor"]]]);