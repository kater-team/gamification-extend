module.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=19)}([function(t,n){t.exports=flarum.core.compat["forum/app"]},function(t,n,e){t.exports=function(){"use strict";var t=6e4,n=36e5,e="millisecond",o="second",r="minute",s="hour",i="day",a="week",u="month",c="quarter",f="year",l="date",m="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,n,e){var o=String(t);return!o||o.length>=n?t:""+Array(n+1-o.length).join(e)+t},y={s:v,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),o=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+v(o,2,"0")+":"+v(r,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var o=12*(e.year()-n.year())+(e.month()-n.month()),r=n.clone().add(o,u),s=e-r<0,i=n.clone().add(o+(s?-1:1),u);return+(-(o+(e-r)/(s?r-i:i-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:f,w:a,d:i,D:l,h:s,m:r,s:o,ms:e,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",M={};M[_]=p;var $=function(t){return t instanceof D},g=function t(n,e,o){var r;if(!n)return _;if("string"==typeof n){var s=n.toLowerCase();M[s]&&(r=s),e&&(M[s]=e,r=s);var i=n.split("-");if(!r&&i.length>1)return t(i[0])}else{var a=n.name;M[a]=n,r=a}return!o&&r&&(_=r),r||!o&&_},w=function(t,n){if($(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new D(e)},b=y;b.l=g,b.i=$,b.w=function(t,n){return w(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var D=function(){function p(t){this.$L=g(t.locale,null,!0),this.parse(t)}var v=p.prototype;return v.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(b.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var o=n.match(d);if(o){var r=o[2]-1||0,s=(o[7]||"0").substring(0,3);return e?new Date(Date.UTC(o[1],r,o[3]||1,o[4]||0,o[5]||0,o[6]||0,s)):new Date(o[1],r,o[3]||1,o[4]||0,o[5]||0,o[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return b},v.isValid=function(){return!(this.$d.toString()===m)},v.isSame=function(t,n){var e=w(t);return this.startOf(n)<=e&&e<=this.endOf(n)},v.isAfter=function(t,n){return w(t)<this.startOf(n)},v.isBefore=function(t,n){return this.endOf(n)<w(t)},v.$g=function(t,n,e){return b.u(t)?this[n]:this.set(e,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,n){var e=this,c=!!b.u(n)||n,m=b.p(t),d=function(t,n){var o=b.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return c?o:o.endOf(i)},h=function(t,n){return b.w(e.toDate()[t].apply(e.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},p=this.$W,v=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(m){case f:return c?d(1,0):d(31,11);case u:return c?d(1,v):d(0,v+1);case a:var M=this.$locale().weekStart||0,$=(p<M?p+7:p)-M;return d(c?y-$:y+(6-$),v);case i:case l:return h(_+"Hours",0);case s:return h(_+"Minutes",1);case r:return h(_+"Seconds",2);case o:return h(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,n){var a,c=b.p(t),m="set"+(this.$u?"UTC":""),d=(a={},a[i]=m+"Date",a[l]=m+"Date",a[u]=m+"Month",a[f]=m+"FullYear",a[s]=m+"Hours",a[r]=m+"Minutes",a[o]=m+"Seconds",a[e]=m+"Milliseconds",a)[c],h=c===i?this.$D+(n-this.$W):n;if(c===u||c===f){var p=this.clone().set(l,1);p.$d[d](h),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},v.set=function(t,n){return this.clone().$set(t,n)},v.get=function(t){return this[b.p(t)]()},v.add=function(e,c){var l,m=this;e=Number(e);var d=b.p(c),h=function(t){var n=w(m);return b.w(n.date(n.date()+Math.round(t*e)),m)};if(d===u)return this.set(u,this.$M+e);if(d===f)return this.set(f,this.$y+e);if(d===i)return h(1);if(d===a)return h(7);var p=(l={},l[r]=t,l[s]=n,l[o]=1e3,l)[d]||1,v=this.$d.getTime()+e*p;return b.w(v,this)},v.subtract=function(t,n){return this.add(-1*t,n)},v.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||m;var o=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),s=this.$H,i=this.$m,a=this.$M,u=e.weekdays,c=e.months,f=function(t,e,r,s){return t&&(t[e]||t(n,o))||r[e].slice(0,s)},l=function(t){return b.s(s%12||12,t,"0")},d=e.meridiem||function(t,n,e){var o=t<12?"AM":"PM";return e?o.toLowerCase():o},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:b.s(a+1,2,"0"),MMM:f(e.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:f(e.weekdaysMin,this.$W,u,2),ddd:f(e.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:b.s(s,2,"0"),h:l(1),hh:l(2),a:d(s,i,!0),A:d(s,i,!1),m:String(i),mm:b.s(i,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return o.replace(h,(function(t,n){return n||p[t]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(e,l,m){var d,h=b.p(l),p=w(e),v=(p.utcOffset()-this.utcOffset())*t,y=this-p,_=b.m(this,p);return _=(d={},d[f]=_/12,d[u]=_,d[c]=_/3,d[a]=(y-v)/6048e5,d[i]=(y-v)/864e5,d[s]=y/n,d[r]=y/t,d[o]=y/1e3,d)[h]||y,m?_:b.a(_)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return M[this.$L]},v.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),o=g(t,n,!0);return o&&(e.$L=o),e},v.clone=function(){return b.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),Y=D.prototype;return w.prototype=Y,[["$ms",e],["$s",o],["$m",r],["$H",s],["$W",i],["$M",u],["$y",f],["$D",l]].forEach((function(t){Y[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),w.extend=function(t,n){return t.$i||(t(n,D,w),t.$i=!0),w},w.locale=g,w.isDayjs=$,w.unix=function(t){return w(1e3*t)},w.en=M[_],w.Ls=M,w.p={},w}()},function(t,n){t.exports=flarum.core.compat["common/extend"]},function(t,n){t.exports=flarum.core.compat["forum/components/CommentPost"]},function(t,n,e){t.exports=function(){"use strict";return function(t,n,e){t=t||{};var o=n.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,n,e,r){return o.fromToBase(t,n,e,r)}e.en.relativeTime=r,o.fromToBase=function(n,o,s,i,a){for(var u,c,f,l=s.$locale().relativeTime||r,m=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=m.length,h=0;h<d;h+=1){var p=m[h];p.d&&(u=i?e(n).diff(s,p.d,!0):s.diff(n,p.d,!0));var v=(t.rounding||Math.round)(Math.abs(u));if(f=u>0,v<=p.r||!p.r){v<=1&&h>0&&(p=m[h-1]);var y=l[p.l];a&&(v=a(""+v)),c="string"==typeof y?y.replace("%d",v):y(v,o,p.l,f);break}}if(o)return c;var _=f?l.future:l.past;return"function"==typeof _?_(c):_.replace("%s",c)},o.to=function(t,n){return s(t,n,this,!0)},o.from=function(t,n){return s(t,n,this)};var i=function(t){return t.$u?e.utc():e()};o.toNow=function(t){return this.to(i(this),t)},o.fromNow=function(t){return this.from(i(this),t)}}}()},function(t,n){t.exports=flarum.core.compat["common/utils/classList"]},function(t,n){t.exports=flarum.core.compat["common/Model"]},function(t,n){t.exports=flarum.core.compat["common/models/Post"]},function(t,n){t.exports=flarum.core.compat["common/components/Button"]},,function(t,n){t.exports=flarum.core.compat["common/components/Modal"]},function(t,n){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,n){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["common/helpers/username"]},function(t,n){t.exports=flarum.core.compat["common/components/Link"]},function(t,n){t.exports=flarum.core.compat["forum/utils/DiscussionControls"]},function(t,n){t.exports=flarum.core.compat["common/helpers/fullTime"]},function(t,n){t.exports=flarum.core.compat["forum/components/PostMeta"]},,function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),s=e(6),i=e.n(s),a=e(7),u=e.n(a),c=e(2),f=e(3),l=e.n(f),d=e(5),h=e.n(d),p=e(8),v=e.n(p);function y(t,n){return(y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t})(t,n)}function _(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,y(t,n)}var M=e(10),g=e.n(M),w=e(11),b=e.n(w),D=e(12),Y=e.n(D),S=e(13),x=e.n(S),O=e(14),L=e.n(O),P=function(t){function n(){return t.apply(this,arguments)||this}_(n,t);var e=n.prototype;return e.className=function(){return"VotesModal Modal--small"},e.title=function(){return r.a.translator.trans("fof-gamification.forum.modal.title")},e.oninit=function(n){t.prototype.oninit.call(this,n),this.showTypes=this.attrs.showTypes||[],this.loading=!this.attrs.post.upvotes()||!this.attrs.post.downvotes(),this.loading&&this.load()},e.content=function(){var t=this;return this.loading?m("div",{className:"Modal-body"},m(b.a,null)):m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},this.showTypes.map((function(n){var e=t.attrs.post[n]();if(e&&e.length)return m("div",null,m("legend",null,r.a.translator.trans("fof-gamification.forum.modal."+n+"_label")),e.map((function(t){return m("li",null,m(L.a,{href:r.a.route.user(t)},Y()(t)," ",x()(t)))})))}))))},e.load=function(){return r.a.store.find("posts",this.attrs.post.id(),{include:"upvotes,downvotes"}).then(this.loaded.bind(this))},n}(g.a),H=e(15),T=e.n(H),N=function(t,n){void 0===n&&(n=!1);var e=r.a.data["fof-gamification."+t];return n?!!parseInt(e):e},k=function(){Object(c.extend)(l.a.prototype,"actionItems",(function(t){var n=this;if(t.has("votes")){var e=this.attrs.post,o=e.hasDownvoted(),s=e.hasUpvoted(),i=N("iconName")||"thumbs",a=N("upVotesOnly",!0),u=e.canSeeVotes(),c=!r.a.session.user||e.canVote(),f=function(t,o){return function(t,n,e,o,s){if(void 0===s&&(s=t.discussion()),r.a.session.user){if(!s||s.canVote()||t.canVote())return n&&e&&(n=!1,e=!1),o&&o(!0),m.redraw(),t.save([n,e,"vote"]).then((function(){return null}),(function(){return null})).then((function(){o&&o(!1),s&&s.pushAttributes({votes:t.votes()}),m.redraw()}))}else T.a.replyAction.call(s,!0)}(e,t,o,(function(t){return n.voteLoading=t}))},l=m("div",{className:h()("CommentPost-votes",N("useAlternateLayout",!0)&&"alternateLayout")},v.a.component({icon:this.voteLoading?void 0:"fas fa-fw fa-"+i+"-up",className:h()("Post-vote Post-upvote",s&&"Post-vote--active"),loading:this.voteLoading,disabled:this.voteLoading||!c||!u,onclick:function(){return f(!s,!1)},"aria-label":r.a.translator.trans("fof-gamification.forum.post.upvote_button")},r.a.translator.trans("kater-gamificationextend.forum.votes.up")),m("label",{className:"Post-points",onclick:function(){return r.a.modal.show(P,{post:e,showTypes:["upvotes"]})}},parseInt(e.upvotes_sum())<1?"-":e.upvotes_sum()),!a&&v.a.component({icon:this.voteLoading?void 0:"fas fa-fw fa-"+i+"-down",className:h()("Post-vote Post-downvote",o&&"Post-vote--active"),loading:this.voteLoading,disabled:!c||!u,onclick:function(){return f(!1,!o)},"aria-label":r.a.translator.trans("fof-gamification.forum.post.downvote_button")},r.a.translator.trans("kater-gamificationextend.forum.votes.down")),!a&&m("label",{className:"Post-points",onclick:function(){return r.a.modal.show(P,{post:e,showTypes:["downvotes"]})}},parseInt(e.downvotes_sum())<6?"-":e.downvotes_sum()));t.setContent("votes",l)}}))},j=e(1),C=e.n(j),A=e(4),I=e.n(A);function V(t){var n=C()(t),e=n.format(),o=n.format("YYYY年M月D日dddd HH:mm"),r=function(t){var n=C()(t),e=C()();return n.isAfter(e)&&(n=e),n.diff(C()())<-2592e6?n.format("YYYY年M月D日  HH:mm"):n.fromNow()}(t);return n.diff(C()())<-2592e6?m("time",{pubdate:!0,datetime:e,title:o},r):m("time",{pubdate:!0,datetime:e,title:o,"data-humantime":!0},r)}C.a.extend(I.a),C.a.locale({name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}}),C.a.extend(I.a);var W=e(16),U=e.n(W),z=e(17),B=function(t){function n(){return t.apply(this,arguments)||this}return _(n,t),n.prototype.view=function(){var t=this.attrs.post,n=t.createdAt(),e=this.getPermalink(t),o="ontouchstart"in document.documentElement;return m("div",{className:"Dropdown PostMeta"},m("a",{className:"Dropdown-toggle",onclick:function(t){var n=this;setTimeout((function(){return $(n).parent().find(".PostMeta-permalink").select()})),t.redraw=!1},"data-toggle":"dropdown"},V(n)),m("div",{className:"Dropdown-menu dropdown-menu"},m("span",{className:"PostMeta-number"},r.a.translator.trans("core.forum.post.number_tooltip",{number:t.number()}))," ",m("span",{className:"PostMeta-time"},U()(n))," ",m("span",{className:"PostMeta-ip"},t.data.attributes.ipAddress),o?m("a",{className:"Button PostMeta-permalink",href:e},e):m("input",{className:"FormControl PostMeta-permalink",value:e,onclick:function(t){return t.stopPropagation()}})))},n}(e.n(z).a);r.a.initializers.add("kater/gamificationextend",(function(){u.a.prototype.upvotes_sum=i.a.attribute("upvotes_sum"),u.a.prototype.downvotes_sum=i.a.attribute("downvotes_sum"),k(),Object(c.extend)(l.a.prototype,"headerItems",(function(t){var n=this.attrs.post;t.add("louceng",m("div",n.number()+app.translator.trans("kater-gamificationextend.forum.louceng"))),t.has("meta")&&t.setContent("meta",B.component({post:n}))}))}),-10)}]);
//# sourceMappingURL=forum.js.map