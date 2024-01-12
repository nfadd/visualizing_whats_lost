(this["webpackJsonpreact-capacitor-example"]=this["webpackJsonpreact-capacitor-example"]||[]).push([[7],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return y}));var r=n(2),o=n.n(r),a=n(5),i=n(17),c=n(10),u=new WeakMap,s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;u.has(e)!==n&&(n?l(e,t,r):f(e,t))},d=function(e){return e===e.getRootNode().activeElement},l=function(e,t,n){var r=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),u.set(e,o);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},f=function(e,t){var n=u.get(e);n&&(u.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},p=function(e,t,n){if(!n||!t)return function(){};var r=function(n){d(t)&&s(e,t,n)},o=function(){return s(e,t,!1)},a=function(){return r(!0)},i=function(){return r(!1)};return Object(c.a)(n,"ionScrollStart",a),Object(c.a)(n,"ionScrollEnd",i),t.addEventListener("blur",o),function(){Object(c.b)(n,"ionScrollStart",a),Object(c.b)(n,"ionScrollEnd",i),t.addEventListener("ionBlur",o)}},v="input, textarea, [no-blur], [contenteditable]",m=function(e,t,n){var r=e.closest("ion-item,[ion-item]")||e;return b(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},b=function(e,t,n,r){var o=e.top,a=e.bottom,i=t.top,c=i+15,u=.75*Math.min(t.bottom,r-n)-a,s=c-o,d=Math.round(u<0?-u:s>0?-s:0),l=Math.min(d,o-i),f=Math.abs(l)/.3;return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(o-c)}},h=function(e,t,n,r,o){var a,i=function(e){a=Object(c.o)(e)},u=function(i){if(a){var u=Object(c.o)(i);g(6,a,u)||d(t)||(i.stopPropagation(),w(e,t,n,r,o))}};return e.addEventListener("touchstart",i,!0),e.addEventListener("touchend",u,!0),function(){e.removeEventListener("touchstart",i,!0),e.removeEventListener("touchend",u,!0)}},w=function(){var e=Object(a.a)(o.a.mark((function e(t,n,r,u,d){var l,f,p,v,b,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r||u){e.next=2;break}return e.abrupt("return");case 2:if(l=m(t,r||u,d),!(r&&Math.abs(l.scrollAmount)<4)){e.next=6;break}return n.focus(),e.abrupt("return");case 6:if(s(t,n,!0,l.inputSafeY),n.focus(),Object(c.q)((function(){return t.click()})),"undefined"===typeof window){e.next=22;break}if(p=function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",p),!r){e.next=6;break}return e.next=6,Object(i.b)(r,0,l.scrollAmount,l.scrollDuration);case 6:s(t,n,!1,l.inputSafeY),n.focus();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",p)},!r){e.next=21;break}return e.next=15,Object(i.d)(r);case 15:if(b=e.sent,h=b.scrollHeight-b.clientHeight,!(l.scrollAmount>h-b.scrollTop)){e.next=21;break}return"password"===n.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",p),f=setTimeout(p,1e3),e.abrupt("return");case 21:p();case 22:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),g=function(e,t,n){if(t&&n){var r=t.x-n.x,o=t.y-n.y;return r*r+o*o>e*e}return!1},E=function(e,t){var n,r;if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&"ION-SEARCHBAR"!==(null===(r=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.tagName)){var o=Object(i.a)(e);if(null!==o){var a=o.$ionPaddingTimer;a&&clearTimeout(a),t>0?o.style.setProperty("--keyboard-offset","".concat(t,"px")):o.$ionPaddingTimer=setTimeout((function(){o.style.setProperty("--keyboard-offset","0px")}),120)}}},y=function(e){var t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),l=Array.from(t.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,m=new WeakMap,b=function(){var e=Object(a.a)(o.a.mark((function e(t){var a,s,d,l,v,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return Object(c.c)(t,e)}));case 2:if(a=t.shadowRoot||t,s=a.querySelector("input")||a.querySelector("textarea"),d=Object(i.a)(t),l=d?null:t.closest("ion-footer"),s){e.next=8;break}return e.abrupt("return");case 8:d&&u&&!f.has(t)&&(v=p(t,s,d),f.set(t,v)),(d||l)&&r&&!m.has(t)&&(b=h(t,s,d,l,n),m.set(t,b));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();s&&function(){var e=!0,t=!1,n=document,r=function(){t=!0},o=function(){e=!0},a=function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(v)){var a=r.target;a!==o&&(a.matches(v)||a.closest(v)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}};Object(c.a)(n,"ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",a,!1)}(),d&&function(e){var t=document,n=function(t){E(t.target,e)},r=function(e){E(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",r)}(n);for(var w=0,g=l;w<g.length;w++){var y=g[w];b(y)}t.addEventListener("ionInputDidLoad",(function(e){b(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){if(u){var t=f.get(e);t&&t(),f.delete(e)}if(r){var n=m.get(e);n&&n(),m.delete(e)}}(e.detail)}))}}}]);
//# sourceMappingURL=7.77154f51.chunk.js.map