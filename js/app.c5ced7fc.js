(function(e){function t(t){for(var a,i,r=t[0],s=t[1],l=t[2],u=0,b=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},c={app:0},o=[];function i(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"36d304e2"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=i(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}c[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/fb-crawled-frontend/",r.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2239:function(e,t,n){"use strict";n("4c6b")},"23c4":function(e,t,n){},"2a3f":function(e,t,n){"use strict";n("43aa")},"43aa":function(e,t,n){},"4c6b":function(e,t,n){},"53ba":function(e,t,n){},"70dc":function(e,t,n){"use strict";n("7d28")},7535:function(e,t,n){"use strict";n("f155")},"7d28":function(e,t,n){},"8e5d":function(e,t,n){"use strict";n("53ba")},b5b2:function(e,t,n){"use strict";n("23c4")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t){var n=Object(a["x"])("router-view");return Object(a["p"])(),Object(a["d"])(n)}n("70dc");const o={};o.render=c;var i=o,r=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),s={class:"postpage-wrapper"},l=Object(a["g"])("h1",null,"Fb爬文列表",-1),u={key:1},d={class:"checkbox-wrapper"},b=Object(a["g"])("hr",null,null,-1);function p(e,t,n,c,o,i){var r=Object(a["x"])("EmptyMessage"),p=Object(a["x"])("Checkbox"),g=Object(a["x"])("PostList");return Object(a["p"])(),Object(a["d"])("div",s,[l,e.postPageState.state.loading?(Object(a["p"])(),Object(a["d"])(r,{key:0,message:"Loading..."})):Object(a["e"])("",!0),e.postPageState.state.queriedPosts?(Object(a["p"])(),Object(a["d"])("div",u,[Object(a["g"])("p",null,Object(a["z"])("資料更新時間: ".concat(e.postPageState.createdAt)),1),Object(a["g"])("div",d,[Object(a["g"])(p,{labelName:"過濾今天貼文",modelValue:e.postPageState.isFilteringTodayToggle,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.postPageState.isFilteringTodayToggle=t})},null,8,["modelValue"]),Object(a["g"])(p,{labelName:"過濾貼文內有連結",modelValue:e.postPageState.isFilteringHaveLinksToggle,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.postPageState.isFilteringHaveLinksToggle=t})},null,8,["modelValue"]),Object(a["g"])(p,{labelName:"過濾已點擊連結之貼文",modelValue:e.postPageState.isHideClickedLinkToggle,"onUpdate:modelValue":[t[3]||(t[3]=function(t){return e.postPageState.isHideClickedLinkToggle=t}),t[4]||(t[4]=function(){return e.postPageState.handleToggleHideClickedLink()})]},null,8,["modelValue"])]),b,Object(a["g"])("div",null,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.postPageState.allFetchedFeeds,(function(e,t){return Object(a["p"])(),Object(a["d"])(g,{key:t,postListData:e},null,8,["postListData"])})),128))])])):Object(a["e"])("",!0)])}var g=n("d4ec"),f=n("bee2"),O=n("262e"),j=n("2caf"),h=n("9ab4"),m=n("ce1f"),k=n("5530"),v=n("1da1"),P=(n("96cf"),n("d81d"),function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=Object(a["v"])(e),n=function(){t.value=!t.value};return{toggle:t,handleToggle:n}}),y=P,S=n("2909"),L=(n("4de4"),{filterByConditions:function(e,t){var n=Object(S["a"])(e);return t.isFilteringHaveLinks&&(n=n.filter((function(e){return e.metaOptions.haveLinks}))),t.isFilteringToday&&(n=n.filter((function(e){return e.metaOptions.isToday}))),n}}),w=L,D=n("5502"),C=function(){function e(){Object(g["a"])(this,e),this.LSKey="fb-crawled-post-data",this.wholeDayTime=864e5,this.timeRangeForUpdatingData=.6*this.wholeDayTime,this.dataFromLS=this.getDataFromLS(),this.shouldDonwloadData=this.checkShouldDonwloadData()}return Object(f["a"])(e,[{key:"getDataFromLS",value:function(){var e=localStorage.getItem(this.LSKey);return e?JSON.parse(e):void 0}},{key:"getTimeFromPostData",value:function(e){return e?new Date(e.creationTime).getTime():0}},{key:"checkShouldDonwloadData",value:function(){var e=(new Date).getTime(),t=this.getTimeFromPostData(this.dataFromLS);return e-t>this.timeRangeForUpdatingData}},{key:"updateDataToLS",value:function(e){localStorage.setItem(this.LSKey,JSON.stringify(e))}}]),e}(),F=C,T=n("2591"),x={fixDataFromDatabase:function(e){return Object(k["a"])(Object(k["a"])({},e),{},{allFetchedFeeds:e.allFetchedFeeds.map((function(e){return Object(k["a"])(Object(k["a"])({},e),{},{allExtractedStories:e.allExtractedStories?e.allExtractedStories:[]})}))})}},I=x,_=Object({NODE_ENV:"production",BASE_URL:"/fb-crawled-frontend/"}).FIREBASE_API_KEY,E={apiKey:_,authDomain:"fb-crawled.firebaseapp.com",databaseURL:"https://fb-crawled-default-rtdb.firebaseio.com",storageBucket:"fb-crawled.appspot.com"};T["a"].initializeApp(E);var H=T["a"].database(),N=H.ref(),V=function(){try{return N.child("crawled-data").get().then((function(e){if(e.exists()){var t=e.val(),n=I.fixDataFromDatabase(t);return console.log(n),n}console.log("No data available")}))}catch(e){return Promise.resolve(void 0)}},z=V,A=new F,M=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!A.shouldDonwloadData){e.next=8;break}return e.next=3,z();case 3:return t=e.sent,t&&A.updateDataToLS(t),e.abrupt("return",t);case 8:return e.abrupt("return",A.dataFromLS);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=M,R=function(){var e=Object(D["b"])(),t=y(!0),n=t.toggle,c=y(!0),o=c.toggle,i=Object(a["b"])((function(){return e.state.isHideClickedLink})),r=Object(a["u"])({loading:!1,queriedPosts:void 0}),s=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.loading=!0,e.next=3,q();case 3:t=e.sent,n=t?Object(k["a"])(Object(k["a"])({},t),{},{allFetchedFeeds:t.allFetchedFeeds.map((function(e){return Object(k["a"])(Object(k["a"])({},e),{},{posts:e.allExtractedStories})}))}):void 0,r.queriedPosts=n,r.loading=!1;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){return e.dispatch("handleToggleHideClickedLink")},u=Object(a["b"])((function(){return r.queriedPosts?new Date(r.queriedPosts.creationTime).toLocaleString():""})),d=Object(a["b"])((function(){return r.queriedPosts?r.queriedPosts.allFetchedFeeds.map((function(e){return Object(k["a"])(Object(k["a"])({},e),{},{posts:e.allExtractedStories?w.filterByConditions(e.allExtractedStories,{isFilteringToday:n.value,isFilteringHaveLinks:o.value}):[]})})):[]}));return console.log(d),{state:r,createdAt:u,allFetchedFeeds:d,isFilteringTodayToggle:n,isFilteringHaveLinksToggle:o,isHideClickedLinkToggle:i,handleQueryPosts:s,handleToggleHideClickedLink:l}},U=R,K=Object(a["F"])("data-v-bb381c88");Object(a["t"])("data-v-bb381c88");var B={key:0,class:"post-list-wrapper"},J={key:1,class:"item-wrapper"};Object(a["q"])();var Q=K((function(e,t,n,c,o,i){var r=Object(a["x"])("EmptyMessage"),s=Object(a["x"])("PostItem");return e.shouldShowPosts?(Object(a["p"])(),Object(a["d"])("div",B,[Object(a["g"])("h2",null,Object(a["z"])(e.postListData.profileName),1),e.shouldShowPosts?(Object(a["p"])(),Object(a["d"])("div",J,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.postListData.posts,(function(e,t){return Object(a["p"])(),Object(a["d"])(s,{key:t,singlePostData:e},null,8,["singlePostData"])})),128))])):(Object(a["p"])(),Object(a["d"])(r,{key:0,message:"無符合條件貼文"}))])):Object(a["e"])("",!0)})),$=(n("9911"),n("b0c0"),Object(a["F"])("data-v-78d55162"));Object(a["t"])("data-v-78d55162");var Y={class:"post-item-wrapper col-4"},G={class:"post-item"},W={key:0},X=Object(a["g"])("hr",null,null,-1),Z={class:"story-message-wrapper"},ee=Object(a["g"])("hr",null,null,-1);Object(a["q"])();var te=$((function(e,t,n,c,o,i){return Object(a["D"])((Object(a["p"])(),Object(a["d"])("div",Y,[Object(a["g"])("div",G,[Object(a["g"])("div",null,[Object(a["g"])("p",null,Object(a["z"])(e.singlePostData.creationTime.timeLocaleStr),1)]),Object(a["g"])("div",null,[Object(a["g"])("a",{href:e.singlePostData.postLink.link,target:"_blank",onClick:t[1]||(t[1]=function(t){return e.state.handleClickPostItem(e.singlePostData.id)}),onMouseup:t[2]||(t[2]=Object(a["E"])((function(t){return e.state.handleClickPostItem(e.singlePostData.id)}),["middle"]))},Object(a["z"])(e.singlePostData.postLink.name),41,["href"])]),e.singlePostData.links.links?(Object(a["p"])(),Object(a["d"])("div",W,[Object(a["g"])("h3",null,Object(a["z"])(e.singlePostData.links.name),1),Object(a["g"])("div",null,[Object(a["g"])("div",null,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.singlePostData.links.links,(function(e,t){return Object(a["p"])(),Object(a["d"])("a",{key:t,href:e,target:"_blank"},Object(a["z"])(e),9,["href"])})),128))])])])):Object(a["e"])("",!0),X,Object(a["g"])("div",Z,[Object(a["g"])("p",null,Object(a["z"])(e.singlePostData.storyMessageText.text),1)]),ee,Object(a["g"])("div",null,[Object(a["g"])("p",null,Object(a["z"])(e.feedbackText),1)])])],512)),[[a["B"],!e.state.shouldHideClickedPost]])})),ne=(n("99af"),n("5c40")),ae=(n("caad"),n("2532"),n("fb6a"),function(){function e(){Object(g["a"])(this,e),this.LSKey="clicked-post-ids",this.maxClickedPostIdsLength=1e3,this.clickedPostIds=this.getClickedPostIds()}return Object(f["a"])(e,[{key:"initCheckPostClicked",value:function(e){return this.clickedPostIds.includes(e)}},{key:"getClickedPostIds",value:function(){var e=localStorage.getItem(this.LSKey),t=e?JSON.parse(e):[];return t}},{key:"checkAndTrimClickedPostIds",value:function(){this.clickedPostIds.length>this.maxClickedPostIdsLength&&(this.clickedPostIds=this.clickedPostIds.slice(1,this.clickedPostIds.length))}},{key:"update",value:function(e,t){this.clickedPostIds.includes(e)||(this.clickedPostIds.push(e),this.checkAndTrimClickedPostIds(),localStorage.setItem(this.LSKey,JSON.stringify(this.clickedPostIds)),t&&t(e))}}]),e}()),ce=new ae,oe=function(e){var t=e.postId,n=Object(D["b"])(),c=y(),o=Object(a["b"])((function(){return ce.initCheckPostClicked(t)})),i=Object(a["b"])((function(){return n.state.isHideClickedLink})),r=Object(a["b"])((function(){return i.value&&(o.value||!c.toggle.value)})),s=function(e){c.handleToggle(),n.dispatch("handleUpdateClickedPosts",{postId:e})};return Object(k["a"])({shouldHideClickedPost:r,handleClickPostItem:s},c)},ie=oe,re=function(e){Object(O["a"])(n,e);var t=Object(j["a"])(n);function n(){var e;return Object(g["a"])(this,n),e=t.apply(this,arguments),e.feedbackText=Object(ne["d"])((function(){var t=e.singlePostData.feedback,n=t.reactionCount,a=t.shareCount;return"按讚數: ".concat(n,", 分享數: ").concat(a)})),e.state=Object(m["c"])((function(){return ie({postId:e.singlePostData.id})})),e}return n}(m["b"]);re=Object(h["__decorate"])([Object(m["a"])({props:{singlePostData:Object}})],re);var se=re;n("8e5d");se.render=te,se.__scopeId="data-v-78d55162";var le=se,ue=Object(a["F"])("data-v-e0355b48"),de=ue((function(e,t,n,c,o,i){return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])("h2",null,Object(a["z"])(n.message||"Empty"),1)])})),be={name:"EmptyMessage",props:{message:String}};n("b5b2");be.render=de,be.__scopeId="data-v-e0355b48";var pe=be,ge=function(e){Object(O["a"])(n,e);var t=Object(j["a"])(n);function n(){return Object(g["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"shouldShowPosts",get:function(){return this.postListData.posts.length>0}},{key:"created",value:function(){this.$watch("postListData",(function(e,t){console.log(e)}))}}]),n}(m["b"]);ge=Object(h["__decorate"])([Object(m["a"])({name:"PostList",props:{postListData:{profileName:String,posts:Array}},components:{PostItem:le,EmptyMessage:pe}})],ge);var fe=ge;n("2a3f");fe.render=Q,fe.__scopeId="data-v-bb381c88";var Oe=fe,je=Object(a["F"])("data-v-84ab385c"),he=je((function(e,t,n,c,o,i){return Object(a["p"])(),Object(a["d"])("label",null,[Object(a["g"])("input",{type:"checkbox",checked:n.modelValue,onChange:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.checked)})},null,40,["checked"]),Object(a["f"])(" "+Object(a["z"])(n.labelName),1)])})),me={name:"Checkbox",props:{modelValue:Boolean,labelName:String},emits:["on-change-checkbox"]};n("2239");me.render=he,me.__scopeId="data-v-84ab385c";var ke=me,ve=function(e){Object(O["a"])(n,e);var t=Object(j["a"])(n);function n(){var e;return Object(g["a"])(this,n),e=t.apply(this,arguments),e.postPageState=Object(m["c"])((function(){return U()})),e}return Object(f["a"])(n,[{key:"created",value:function(){this.postPageState.handleQueryPosts()}}]),n}(m["b"]);ve=Object(h["__decorate"])([Object(m["a"])({name:"PostPage",components:{PostList:Oe,Checkbox:ke,EmptyMessage:pe}})],ve);var Pe=ve;n("7535");Pe.render=p;var ye=Pe,Se=(n("dfb1"),[{path:"/",name:"Home",component:ye},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]),Le=Object(r["a"])({history:Object(r["b"])("/fb-crawled-frontend/"),routes:Se}),we=Le,De=Object(D["a"])({state:{isHideClickedLink:!0,clickedPostIds:ce.clickedPostIds},mutations:{toggleHideClickedLink:function(e){e.isHideClickedLink=!e.isHideClickedLink},updateClickedPosts:function(e,t){ce.update(t.postId),e.clickedPostIds=ce.clickedPostIds}},actions:{handleToggleHideClickedLink:function(e){e.commit("toggleHideClickedLink")},handleUpdateClickedPosts:function(e,t){e.commit("updateClickedPosts",t)}},modules:{}});Object(a["c"])(i).use(De).use(we).mount("#app")},dfb1:function(e,t,n){},f155:function(e,t,n){}});
//# sourceMappingURL=app.c5ced7fc.js.map