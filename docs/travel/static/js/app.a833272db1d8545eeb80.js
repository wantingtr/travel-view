webpackJsonp([1],{"/+jB":function(t,e){},"4nae":function(t,e){},"4z1c":function(t,e){},"6DOZ":function(t,e){},"9n10":function(t,e){},"B0+R":function(t,e){},DIvF:function(t,e){},Eq4s:function(t,e){},FVIq:function(t,e){},JMve:function(t,e){},Keb6:function(t,e){},LcTp:function(t,e){},M6Sr:function(t,e){},MxzG:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("B0+R")},null,null).exports,r=i("DVXL"),o=i.n(r),c=i("/ocq"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.$store.state.city)+"\n      "),e("span",{staticClass:"iconfont icon-down"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont icon-find"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var d=i("VU/8")({name:"homeHeader"},l,!1,function(t){i("/+jB")},"data-v-31bce26e",null).exports,u={name:"homeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-image",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var p=i("VU/8")(u,h,!1,function(t){i("Keb6")},"data-v-ae485ece",null).exports,v={name:"homeIcons",props:{iconList:Array},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-text"},[t._v(t._s(e.title))])])}))}))],1)},staticRenderFns:[]};var f=i("VU/8")(v,m,!1,function(t){i("jvFy")},"data-v-efe5c4e6",null).exports,_={name:"HomeRecommend",props:{recommendList:Array}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),t._v(" "),i("ul",[i("router-link",{attrs:{to:"./detail/"}},t._l(t.recommendList,function(e,s){return i("li",{key:s,staticClass:"item border-bottom"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-content"},[t._v(t._s(e.content))]),t._v(" "),i("button",{staticClass:"item-button",attrs:{type:"button",name:"button"}},[t._v("查看详情")])])])}))],1)])},staticRenderFns:[]};var y=i("VU/8")(_,w,!1,function(t){i("FVIq")},"data-v-429994f2",null).exports,C={name:"HomeWeekend",props:{weekendList:Array}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.weekendList,function(e,s){return i("li",{key:s,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-content"},[t._v(t._s(e.content))])])])}))])},staticRenderFns:[]};var b=i("VU/8")(C,g,!1,function(t){i("yF5v")},"data-v-d584f2da",null).exports,k=i("mtWM"),$=i.n(k),x={name:"home",components:{homeHeader:d,homeSwiper:p,homeIcons:f,HomeRecommend:y,HomeWeekend:b},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[]}},methods:{getHomeInfo:function(){$.a.get("/api/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.getHomeInfo()}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var L=i("VU/8")(x,S,!1,function(t){i("P5ds")},null,null).exports,E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"iconfont"},[this._v("")])])],1)},staticRenderFns:[]};var F=i("VU/8")({name:"cityHeader"},E,!1,function(t){i("z8KS")},"data-v-b95daa20",null).exports,I=i("GQaK"),N={name:"search",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new I.a(this.$refs.search)},methods:{changeCity:function(t){this.$store.commit("changeCity",t),this.$router.push("./")}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"searchCity"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"inputSearch",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.changeCity(e.name)}}},[t._v("\n      "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var U=i("VU/8")(N,R,!1,function(t){i("LcTp")},"data-v-6671f16f",null).exports,V={name:"list",mounted:function(){this.scroll=new I.a(this.$refs.wrapper)},props:{cities:Object,hotCities:Array,letter:String},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},methods:{changeCity:function(t){this.$store.commit("changeCity",t),this.$router.push("./")}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",{},[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button"},[t._v(t._s(this.$store.state.city))])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,on:{click:function(i){t.changeCity(e.name)}}},[i("div",{staticClass:"button"},[t._v("\n            "+t._s(e.name)+"\n          ")])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.changeCity(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))])})],2)])},staticRenderFns:[]};var O=i("VU/8")(V,A,!1,function(t){i("6DOZ")},"data-v-a7fec4f4",null).exports,G={name:"cityAlphabet",props:{cities:Object},handleClick:function(t){this.$emit("change",t.target.innerText)}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.cities,function(e,s){return i("li",{key:s,staticClass:"item"},[t._v(t._s(s))])}))},staticRenderFns:[]};var T={name:"city",components:{cityHeader:F,search:U,list:O,cityAlphabet:i("VU/8")(G,H,!1,function(t){i("JMve")},"data-v-29a3421c",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){$.a.get("/api/city.json").then(this.handleGetCity)},handleGetCity:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleClick:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("city-header"),t._v(" "),i("search",{attrs:{cities:t.cities}}),t._v(" "),i("list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("cityAlphabet",{attrs:{cities:t.cities},on:{change:t.handleClick}})],1)},staticRenderFns:[]};var D=i("VU/8")(T,j,!1,function(t){i("Eq4s")},"data-v-8d0b094e",null).exports,B={name:"commonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{turnGallary:function(){this.$emit("close")}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.turnGallary}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-image",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var z=i("VU/8")(B,M,!1,function(t){i("DIvF")},"data-v-429b3fe4",null).exports,P={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var q=i("VU/8")({name:"fade"},P,!1,function(t){i("MxzG")},"data-v-cb429f58",null).exports,K={name:"banner",props:{sightName:String,bannerImg:String,gallaryImgs:Array,categoryList:Array},data:function(){return{showGallary:!1}},components:{commonGallary:z,fade:q},methods:{showgallary:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{staticClass:"banner",on:{click:t.showgallary}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("p",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),t._v(" "),t._m(0)])]),t._v(" "),i("fade",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video"},[e("p",{staticClass:"video-info"},[this._v("视频")]),this._v(" "),e("span",{staticClass:"iconfont icon-down"},[this._v("")])])}]};var J=i("VU/8")(K,W,!1,function(t){i("OoHl")},"data-v-0d502262",null).exports,X={name:"detailHeader",data:function(){return{showABS:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showABS=!1}else this.showABS=!0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showABS,expression:"showABS"}],staticClass:"header-abs",attrs:{rag:"div",to:"/"}},[e("span",{staticClass:"iconfont"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showABS,expression:"!showABS"}],staticClass:"header-fixed",style:this.opacityStyle},[this._v("\n    景点详情\n    "),e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"iconfont"},[this._v("")])])],1)],1)},staticRenderFns:[]};var Z=i("VU/8")(X,Y,!1,function(t){i("4z1c")},"data-v-0ae01244",null).exports,Q={name:"detailList",props:{list:Array}},tt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detailList",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var et={name:"detail",components:{banner:J,detailHeader:Z,detailList:i("VU/8")(Q,tt,!1,function(t){i("RiNs")},"data-v-28ce12ed",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},mounted:function(){this.getDetailInfo()},methods:{getDetailInfo:function(){$.a.get("./api/detail.json").then(this.handleGetDetail)},handleGetDetail:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.list=e.categoryList,this.gallaryImgs=e.gallaryImgs}}}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var st=i("VU/8")(et,it,!1,function(t){i("4nae")},"data-v-391b91cd",null).exports;s.a.use(c.a);var nt=new c.a({routes:[{path:"/",name:"home",component:L},{path:"/city",name:"city",component:D},{path:"/detail",name:"detail",component:st}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),at=(i("9n10"),i("M6Sr"),i("TzC8"),i("F3EI")),rt=i.n(at),ot=i("NYxO"),ct="上海";try{localStorage.city&&(ct=localStorage.city)}catch(t){}var lt={city:ct},dt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(ot.a);var ut=new ot.a.Store({state:lt,mutations:dt});i("v2ns");s.a.config.productionTip=!1,o.a.attach(document.body),s.a.use(rt.a),new s.a({el:"#app",router:nt,store:ut,components:{App:a},template:"<App/>"})},OoHl:function(t,e){},P5ds:function(t,e){},RiNs:function(t,e){},TzC8:function(t,e){},jvFy:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},yF5v:function(t,e){},z8KS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a833272db1d8545eeb80.js.map