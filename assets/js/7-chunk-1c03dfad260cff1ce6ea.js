(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6ksh":function(t,e,r){"use strict";var a=r("84RX");r.n(a).a},"84RX":function(t,e,r){},"JfR+":function(t,e,r){},SB7o:function(t,e,r){"use strict";var a=r("yUIU");r.n(a).a},av9v:function(t,e,r){"use strict";r.r(e);var a=r("NthX"),n=r.n(a),i=r("fFdx"),s=r.n(i),o=r("8VmE"),d=r.n(o),l=r("lOrp"),c=function(t,e){return e?"calc( "+t+" / 750 * min(100vw, 452px) + ("+e+") )":"calc( "+t+" / 750 * min(100vw, 452px) )"},u=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},f=["top","bottom","right","left","width","height","minWidth","minHeight","maxWidth","maxHeight","min-width","min-height","max-width","max-height","translate","translateX","translateY"],h=["clipPath"];function m(t,e,r,a,n){void 0===n&&(n=0);var i=[].concat(Object.keys(d()({},e,r))),s=Array.isArray(e)||Array.isArray(r)?[]:{};return i.forEach((function(i){var o=u(e,i)?e[i]:u(a,i)?a[i]:0,d=u(r,i)?r[i]:u(a,i)?a[i]:0;if("object"==typeof o||"object"==typeof d){var l=m(t,o,d,a,n+1),g="";Array.isArray(l)?g=l.join(n>1?" ":","):Object.keys(l).forEach((function(t){g+=t+"("+l[t]+")"})),s[i]=g}else{var p="number"==typeof o||!Number.isNaN(+o),y="number"==typeof d||!Number.isNaN(+d);if(p&&y){var w=Math.round(1e3*(t*(d-o)+o))/1e3;s[i]=f.includes(i)?c(w):w}else if(o===d)s[i]=o;else{var v=p?c(o):o,b=y?c(d):d,x="calc("+t+" * ( "+b+" - "+v+" ) + "+v+")";s[i]=x}}h.includes(i)&&(s["-webkit-"+i]=s[i])})),s}function g(t){var e=t.start,r=t.styles;this.start="number"==typeof e?e:0,this.defaultStyles="object"==typeof r?r:{},this.tweens=[],this.add=function(t){if("object"!=typeof t)return this;if("number"!=typeof t.duration)return this;if(typeof t.duration<=0)return this;var e=t.duration,r=d()({},t);delete r.duration;var a={duration:e,styles:r};return this.tweens.push(a),this},this.generate=function(t){var e=this.start,r=this.tweens;if(t<=e||0===r.length)return{display:"none"};var a=-1,n=d()({},this.defaultStyles);if(r.every((function(r,i){var s=r.duration;return!(t<e+s)&&(e+=s,a=i,n=d()({},n,r.styles),!0)})),!r[a+1])return m(0,n,n);var i=r[a+1].styles||{},s=r[a+1].duration;return m(Math.round(1e3*(t-e)/s)/1e3,n,i,this.defaultStyles)}}var p=[10,10,10,4],y=p.reduce((function(t,e){return t+e})),w=p.map((function(t){return t/y})),v=w,b=-w[0],x=w.map((function(t){return b+=t})),S={width:550,left:110,bottom:"45%",disappearbottom:"145%"},I=v[0]/100,C={width:462,top:c(-36,"45%"),left:116,opacity:1,filter:{brightness:1},clipPath:{polygon:[["0%","100%"],["0%","0%"],["93%","0%"],["93%","100%"]]}},L=new g({start:-2,styles:d()({},C)}).add(d()({duration:2},C,{top:"45%"})).add(d()({duration:25*I},C)).add({duration:50*I}).add({duration:1e-4*I}).add({duration:25*I,width:340,top:"20%",left:62,filter:{brightness:0}}).add({duration:.85*v[1],width:340,top:"20%",left:62,filter:{brightness:0}}).add({duration:.15*v[1],width:340,top:"52%",left:62,filter:{brightness:0}}).add({duration:1*v[2],width:340,top:"52%",left:62,filter:{brightness:0}}).add({duration:.3*v[2],width:340,top:"-48%",left:62,filter:{brightness:0}}),N=v[0]/100,E={width:410,top:c(36,"45%"),left:242,opacity:1,filter:{brightness:1}},O=new g({start:10*N,styles:d()({},E)}).add({duration:1e-4*N,opacity:0,top:c(72,"45%")}).add(d()({duration:25*N},E)).add({duration:40*N}).add({duration:25*N,width:295,top:"20%",left:402,filter:{brightness:0}}).add({duration:.85*v[1],width:295,top:"20%",left:402,filter:{brightness:0}}).add({duration:.15*v[1],width:295,top:"52%",left:402,filter:{brightness:0}}).add({duration:1*v[2],width:295,top:"52%",left:402,filter:{brightness:0}}).add({duration:.3*v[2],top:"-48%",width:295,left:402,filter:{brightness:0}}),k=x[1],j=v[1]/100,$={width:422,top:c(72,"20%"),left:164,opacity:1,filter:{brightness:1}},_=new g({start:k-10*j,styles:d()({},$)}).add({duration:1e-4*j,opacity:0,transform:{translateY:"100%"}}).add(d()({duration:25*j},$,{transform:{translateY:"0%"}})).add({duration:40*j}).add({duration:25*j,width:315,top:c(72,"20%"),left:57}).add({duration:5*j,width:315,top:c(72,"20%"),left:57}).add({duration:15*j,width:315,top:c(36,"52%"),left:57}).add({duration:1*v[2],width:315,top:c(36,"52%"),left:57}).add({duration:.3*v[2],width:315,top:c(36,"-48%"),left:57}),Y=x[1],R=v[1]/100,P={width:422,top:c(180,"20%"),left:164,opacity:1,filter:{brightness:1}},A=new g({start:Y-10*R,styles:d()({},P)}).add({duration:1e-4*R,opacity:0,transform:{translateY:"100%"}}).add(d()({duration:25*R},P,{transform:{translateY:"0%"}})).add({duration:40*R}).add({duration:25*R,width:315,top:c(72,"20%"),left:390}).add({duration:5*R,width:315,top:c(72,"20%"),left:390}).add({duration:15*R,width:315,top:c(36,"52%"),left:390}).add({duration:1*v[2],width:315,top:c(36,"52%"),left:390}).add({duration:.3*v[2],width:315,top:c(36,"-48%"),left:390}),U=x[1],B=v[1]/100,W={width:636,top:c(180,"20%"),left:49,opacity:1,filter:{brightness:1}},z=new g({start:U-10*B,styles:d()({},W)}).add({duration:1e-4*B,width:318,left:208,opacity:0,transform:{translateY:150}}).add(d()({duration:25*B},W,{transform:{translateY:0}})).add({duration:40*B}).add({duration:25*B,width:1272,left:-269,top:"0%",opacity:0}),M=x[1],G=v[1]/100,H=(v[2],{width:1280,bottom:"0%",left:"0%",opacity:1,transform:{translate:["-31%","13%"]}}),J=new g({start:M-10*G,styles:d()({},H)}).add({duration:1e-4*G,opacity:0,transform:{translate:["-31%","63%"]}}).add(d()({duration:25*G},H,{transform:{translate:["-31%","13%"]}})).add({duration:1e-4*G,transform:{rotate:"0deg",translate:["-31%","13%"]}}).add({duration:20*G,transform:{rotate:"-5deg",translate:["-31%","13%"]}}).add({duration:20*G,transform:{rotate:"0deg",translate:["-31%","13%"]}}).add({duration:1e-4*G,transform:{translate:["-31%","13%"]}}).add({duration:25*G,transform:{translate:["-19%","-5%"]}}).add({duration:20*G,width:S.width,left:S.left,bottom:S.bottom,transform:{translate:["0%","0%"]}}).add({duration:v[1],width:S.width,left:S.left,bottom:S.bottom,transform:{translate:["0%","0%"]}}).add({duration:.3*v[2],width:S.width,left:S.left,bottom:S.disappearbottom,transform:{translate:["0%","0%"]}}),T=x[1],F=v[1]/100,X={width:544,bottom:"0%",left:245,opacity:1},D=new g({start:T-10*F,styles:d()({},X)}).add({duration:1e-4*F,opacity:0,transform:{translateY:"100%"}}).add(d()({duration:25*F},X,{transform:{translateY:"0%"}})).add({duration:1e-4*F,transform:{rotate:"0deg"}}).add({duration:20*F,transform:{rotate:"5deg"}}).add({duration:20*F,transform:{rotate:"0deg"}}).add({duration:25*F,left:1e3,opacity:0}),q=x[2],V=v[2]/100,Z={width:904,bottom:"0%",left:0,opacity:1},K=new g({start:q-30*V,styles:d()({},Z)}).add(d()({duration:1e-4*V},Z,{opacity:.5,left:(750-Z.width)/2,transform:{translateY:"100%"}})).add(d()({duration:30*V},Z,{width:S.width,left:S.left,bottom:S.bottom,transform:{translateY:"0%"}})).add(d()({duration:v[1]},Z,{width:S.width,left:S.left,bottom:S.bottom,transform:{translateY:"0%"}})).add(d()({duration:.3*v[2]},Z,{width:S.width,left:S.left,bottom:S.disappearbottom,transform:{translateY:"0%"}})),Q=x[3],tt=v[3]/100,et={width:452,bottom:"0%",left:0,opacity:1},rt=new g({start:Q+160*tt,styles:d()({},et)}).add({duration:1e-4*tt,opacity:.5,transform:{translateY:"100%"}}).add(d()({duration:75*tt},et,{transform:{translateY:"5%"}})),at=x[2],nt=v[2]/100,it=function(t){var e=t<12?-335:1610,r=t<12?160:-160,a={width:160,bottom:c(90+t%3*170,"45%"),left:e+r*(t/3|0),opacity:1},n=new g({start:at,styles:d()({},a)}).add({duration:1e-4*nt,left:295}).add(d()({duration:75*nt},a));return 23===t?n.add(d()({duration:20*nt},a)).add({duration:1e-4*nt,zIndex:1}).add({duration:25*nt,width:465*1.18,bottom:c(-119,"43.5%"),left:144.4189436619718,zIndex:1}).add({duration:15*nt,width:465*1.18,bottom:c(-119,"43.5%"),left:144.4189436619718,zIndex:1}).add({duration:1e-4*nt,display:"none"}):n.add(d()({duration:25*nt},a)).add(d()({duration:30*nt},a,{bottom:c(90+t%3*170,"145%")})),function(t){return n.generate(t)}},st=["幫撐傘自己卻濕一半","把口罩留給需要的人","提醒路人包包沒關","對前面的人說沒關係慢慢來","幫拔鑰匙放車前置物箱","邀新同事一起吃飯","把問路的人載到目的地","幫手沒空的快遞按電梯","為行動不便的人引路","每次都留客人在家吃飯","幫路邊拋錨的車接電","(總是)為身邊的人準備伴手禮","送所有人回家才離開","幫回收婆婆推卡住的車","幫忙糾正前面插隊的人","看到玉蘭花都會買","分享家鄉送來的蔬果","(總是)對服務員說辛苦了","幫路人拉出卡住的機車","主動遞衛生紙給需要的人","椅背不靠到底留空間給後座","幫路人投公車錢","把東西分享給需要的人","幫路人叫救護車"],ot={name:"Select",props:["percentage"],data:function(){return{currentIndex:0,inputName:"",selectedList:[],texts:st}},computed:d()({},Object(l.c)(["loading"]),Object(l.c)("images",{medals:"medals",text5:"select/text5",chat:"select/chat",button2:"select/button2",button3:"select/button3",dot:"select/dot",frame:"select/frame"}),Object(l.c)("game",["selected"]),{initial:function(){return this.percentage<.987}}),watch:{inputName:function(t){for(;t.replace(/[\u4E00-\u9FFF]/g,"xx").length>8;){var e=t.split("");e.pop(),t=e.join("")}this.inputName=t},percentage:function(t){t>.987?this.$root.$emit("hideScroll",!0):this.$root.$emit("hideScroll",!1)}},created:function(){},beforeDestroy:function(){var t=this.$refs.medals;t&&t.removeEventListener("scroll",this.onScroll)},mounted:function(){var t=this;this.loadImamges(["medals","select"]).then((function(){var e=t.$refs.medals;e&&e.addEventListener("scroll",t.onScroll)}))},methods:d()({},Object(l.b)(["setLoading"]),Object(l.b)("images",{loadImamges:"load"}),Object(l.b)("share",{callAPI:"callAPI"}),Object(l.b)("analytics",["callGaButton"]),{onScroll:function(){var t=this.$refs.medals,e=t.scrollWidth,r=t.clientWidth,a=t.scrollLeft,n=this.medals.length,i=a/(e-r+.04385*e);0===i?this.$root.$emit("lockScroll",!1):this.$root.$emit("lockScroll",!0);var s=i*n+.5|0;this.currentIndex=s>n-1?n-1:s},computeZIndex:function(t){var e=10-Math.abs(t-this.currentIndex);return e<0?0:e},onLeft:function(){this.callGaButton("btn_left");var t=this.$refs.medals,e=t.scrollWidth,r=t.clientWidth,a=(t.scrollLeft,this.medals.length),n=e-r+.04385*e,i=this.currentIndex-1;t.scrollTo({left:1.01*i*n/a,behavior:"smooth"})},onRight:function(){this.callGaButton("btn_right");var t=this.$refs.medals,e=t.scrollWidth,r=t.clientWidth,a=(t.scrollLeft,this.medals.length),n=e-r+.04385*e,i=this.currentIndex+1;t.scrollTo({left:1.01*i*n/a,behavior:"smooth"})},onMedal:function(t){var e=this.selectedList.findIndex((function(e){return t===e}));-1!==e?this.selectedList.splice(e,1):this.selectedList.length<9&&this.selectedList.push(t)},createShare:function(){var t=this;this.callGaButton("btn_send"),this.setLoading("感謝圖產生中");var e=this.$refs.canvas2;e.width=846,e.height=820;var r=e.getContext("2d");r.clearRect(0,0,e.width,e.height),function(t,e){if("function"!=typeof(t||{}).drawImage)return!1;var r=e.length,a=[1,1.33,2,2,2,2.5,3,3,3,3][r],n=820/a,i=323/355,s=n*(1-i)+(1===r?(820-n*i)/2:0),o=[2,6].includes(r)?(846-{2:1,6:2}[r]*n*i)/2:13;[1,2,4,6,9].includes(r)?e.forEach((function(e,d){var l=e.img;t.drawImage(l,1===r?s-35:s+n*(d%a),1===r?(846-n*i)/2:o+n*(d/a|0),n,n*i)})):[3,8].includes(r)?e.forEach((function(e,d){var l=e.img;t.drawImage(l,r-d<a?(820-n*i)/a+n*(d%a):s+n*(d%a),2===d&&5===r?o+1.5*n:o+n*(d/a|0),n,n*i)})):5===r?e.forEach((function(e,r){var a=e.img;t.drawImage(a,2===r?(820-n*i)/2:s+1.5*n*((r<2?r:r-1)%2),2===r?o+.75*n:o+1.5*n*((r<2?r:r-1)/2|0),n,n*i)})):7===r&&e.forEach((function(r,d){r.img;e.forEach((function(e,r){var d=e.img;t.drawImage(d,r<6?s+n*(r%a):s+n,r<6?o+n*(r/a|0)+(r%a==1?0:.5*n):o+2*n,n,n*i)}))}))}(r,[].concat(this.medals).reverse().filter((function(e,r){return t.selectedList.includes(r)})));var a=e.toDataURL("image/png").replace(/.*,/,"");return Promise.all([this.callAPI({method:"result",data:{ESOURCE1:this.inputName,ESOURCE2:a,ESOURCE3:this.texts[this.selectedList[0]].replace(/\(.*\)/,"")}}),this.callAPI({method:"share",data:{ESOURCE1:this.inputName,ESOURCE2:a,ESOURCE3:this.texts[this.selectedList[0]].replace(/\(.*\)/,"")}})]).then((function(e){window.localStorage.shareText=JSON.stringify({name:t.inputName,text:t.texts[t.selectedList[0]].replace(/\(.*\)/,"")}),t.setLoading(!1),t.$router.push({name:"result"})})),a},onConfirm:function(){this.selectedList.length&&this.inputName&&this.createShare()}})},dt=(r("zPhN"),r("6ksh"),r("psIG")),lt=Object(dt.a)(ot,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100 h-100 flex-column align-items-center selcet-container"},[r("div",{staticClass:"flex-blocker-5"}),t.loading?t._e():[r("div",{staticClass:"chat"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}})]),r("img",{staticClass:"text5",attrs:{src:t.text5.src}}),r("div",{staticClass:"length",domProps:{textContent:t._s(t.selectedList.length)}}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.percentage>.985,expression:"percentage > 0.985"}],ref:"medals",staticClass:"medals-container w-100 align-items-center"},[r("div",{staticClass:"d-flex align-items-center swipe-container"},t._l([].concat(t.medals).reverse(),(function(e,a){var n=e.src;return r("div",{key:"medals"+a,staticClass:"medal",class:{initial:t.initial},style:Object.assign({},{zIndex:30-(t.currentIndex>a?t.currentIndex-a:a-t.currentIndex)},t.currentIndex===a?{transform:"scale(1.52)"}:{}),on:{click:function(e){return t.onMedal(a)}}},[r("img",{attrs:{src:n}}),t.selectedList.includes(a)?r("img",{staticClass:"medal-frame",attrs:{src:t.frame.src}}):t._e()])})),0)]),r("p",{staticClass:"medals-description",domProps:{textContent:t._s(t.texts[t.currentIndex].replace(/[()]/g,""))}}),t.initial?t._e():r("div",{staticClass:"swipe-group d-flex align-items-center"},[r("img",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex>0,expression:"currentIndex > 0"}],staticClass:"left",attrs:{src:t.button3.src},on:{click:t.onLeft}}),t._l(4,(function(e,a){return r("img",{key:a,staticClass:"dots",class:{black:6*a<=t.currentIndex&&6*(a+1)>t.currentIndex},attrs:{src:t.dot.src}})})),r("img",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex<t.medals.length-1,expression:"currentIndex < (medals.length - 1)"}],staticClass:"right",attrs:{src:t.button3.src},on:{click:t.onRight}})],2),r("img",{directives:[{name:"show",rawName:"v-show",value:!t.initial,expression:"!initial"}],staticClass:"button2",attrs:{src:t.button2.src,disable:!t.selectedList.length||!t.inputName},on:{click:t.onConfirm}}),r("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas2",style:{width:"100%",position:"relative",top:"200px"}})],r("div",{staticClass:"flex-blocker-5"})],2)}),[],!1,null,null,null).exports,ct=new Array(24).fill("").map((function(t,e){return it(e)})),ut={name:"Section1",components:{selectSection:lt},mixins:[],props:{top:{type:[Number,String],default:0},height:{type:[Number,String],default:0}},data:function(){return{randomSet:0,timer:null}},computed:d()({},Object(l.c)(["loading"]),Object(l.c)("images",{text1:"index/text1",text2:"index/text2",text3:"index/text3",text4:"index/text4",textLine:"index/textLine",figure11:"index/figure11",figure12:"index/figure12",figure21:"index/figure21",figure22:"index/figure22",logo2:"index/logo2",button1:"common/button1",can:"index/can",medals:"medals"}),{percentage:function(){var t=document.body;document.querySelectorAll(".sticky-content").forEach((function(e){e.style.height=t.clientHeight+"px"}));var e=this.$refs,r=this.top,a=this.height,n=(e||{}).section,i=n||{},s=i.offsetTop,o=i.clientHeight;if(n){var d=(r-s)/(o-a);if(d>.995)this.$root.$el;return d}return-.1},text1Style:function(){return t=this.percentage,L.generate(t);var t},text2Style:function(){return t=this.percentage,O.generate(t);var t},text3Style:function(){return t=this.percentage,_.generate(t);var t},text4Style:function(){return t=this.percentage,A.generate(t);var t},textLineStyle:function(){return t=this.percentage,z.generate(t);var t},figure1Style:function(){return t=this.percentage,J.generate(t);var t},figure2Style:function(){return t=this.percentage,D.generate(t);var t},canStyle:function(){return t=this.percentage,K.generate(t);var t},selectSectionStyle:function(){return t=this.percentage,rt.generate(t);var t},showButton:function(){return this.percentage>x[3]+.6*v[3]&&this.percentage<x[3]+1.5*v[3]}}),watch:{},mounted:function(){var t=this;return s()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.init();case 1:case"end":return e.stop()}}),e)})))()},updated:function(){},beforeDestroy:function(){},methods:d()({},Object(l.b)(["setLoading"]),Object(l.b)("images",{loadImamges:"load"}),{init:function(){var t=this;return s()(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setLoading(!0),t.setLoading(!1),t.randomSet=2*Math.random()|0;case 3:case"end":return e.stop()}}),e)})))()},medalsStyle:function(t){return ct[t](this.percentage)},onButton:function(){var t=this.$refs,e=this.height,r=((t||{}).section||{}).clientHeight-e;this.$root.$el.scrollTo({top:14*r/12,behavior:"smooth"})}})},ft=(r("SB7o"),Object(dt.a)(ut,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{ref:"section",staticClass:"sticky-container section1"},[r("div",{staticClass:"sticky-content"},[t._l(t.medals,(function(e,a){var n=e.src;return r("img",{key:a,style:t.medalsStyle(a),attrs:{src:n}})})),r("img",{style:t.canStyle,attrs:{src:t.can.src}}),0===t.randomSet?[r("img",{staticClass:"figure",style:t.figure1Style,attrs:{src:t.figure11.src}}),r("img",{staticClass:"figure",style:t.figure2Style,attrs:{src:t.figure21.src}})]:[r("img",{staticClass:"figure",style:t.figure2Style,attrs:{src:t.figure22.src}}),r("img",{staticClass:"figure",style:t.figure1Style,attrs:{src:t.figure12.src}})],r("img",{style:t.text1Style,attrs:{src:t.text1.src}}),r("img",{style:t.text2Style,attrs:{src:t.text2.src}}),r("img",{style:t.textLineStyle,attrs:{src:t.textLine.src}}),r("img",{style:t.text3Style,attrs:{src:t.text3.src}}),r("img",{style:t.text4Style,attrs:{src:t.text4.src}}),r("transition",{attrs:{name:"fade"}},[t.showButton?r("div",{staticClass:"w-100 subtitle-group d-flex flex-column align-items-center"},[r("img",{staticClass:"logo2",attrs:{src:t.logo2.src}}),r("button",{staticClass:"button1",on:{click:t.onButton}},[r("img",{attrs:{src:t.button1.src}})])]):t._e()]),r("selectSection",{style:t.selectSectionStyle,attrs:{percentage:t.percentage}})],2)])}),[],!1,null,null,null));e.default=ft.exports},yUIU:function(t,e,r){},zPhN:function(t,e,r){"use strict";var a=r("JfR+");r.n(a).a}}]);