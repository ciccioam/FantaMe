"use strict";var __={_data:{l:{mh:{},th:{},ch:{},twh:{}},t:{},c:{},u:{},e:{_len:0}},_e:function(a){console.warn("vanilla.js::ERROR: "+a)},s:function(a,t,_){switch(a){case"sd":return void(__._data.sd=t);case"tmp":return void(__._data.tmp=t);case"lm":return __._data.l.m=t,(__._data.l.mh={},t&&t.map)?void t.map(function(a){__._data.l.mh[a.id]=a}):__._e('malformed data for "lm"');case"lt":return __._data.l.t=t,(__._data.l.th={},t&&t.map)?void t.map(function(a){a.nome=a.nome.replace(__iso2utf8re,function(a){return __iso2utf8[a]}),__._data.l.th[a.id]=a}):__._e('malformed data for "lt"');case"p":return void(__._data.l.p=t);case"lo":return void(__._data.l.o=t);case"li":return void(__._data.l.i=t);case"c":return __._data.l.c=t,(__._data.l.ch={},t&&t.map)?void t.map(function(a){__._data.l.ch[a.id]=a}):__._e('malformed data for "c"');case"tw":var e=__.b("tw",t);return __._data.l.tw=e,(__._data.l.twh={},e&&e.map)?void e.map(function(a){__._data.l.twh[a.id]=a}):__._e('malformed data for "tw"');case"ti":return void(__._data.t.i=__.b("tw",t)[0]);case"ci":return t&&(t.inizializzata=Boolean(_)),void(__._data.c.i=t);case"lr":return void(__._data.l.r=t);case"pl":var r=__.b("pl",t);return __._data.p=r,(__._data.ph={},r&&r.map)?void r.map(function(a){__._data.ph[a.id]=a}):__._e('malformed data for "pl"');case"u":return void(__._data.u.i=t);case"e":console.warn("vanilla.js::STORED ERROR ",t);var n=__._data.e._len;return __._data.e["e_"+n]=t,void(__._data.e._len+=1)}},g:function(a,t){switch(a){case"sd":return __._data.sd||{};case"tmp":return __._data.tmp||{};case"lm":return t?__._data.l.mh[t]||{}:__._data.l.m||[];case"lt":return t?__._data.l.th[t]||{}:__._data.l.t||[];case"lr":return __._data.l.r||[];case"p":return __._data.l.p||{};case"lo":return __._data.l.o||{};case"li":return __._data.l.i||{};case"ci":return __._data.c.i||{};case"c":return t?__._data.l.ch[t]||{}:__._data.l.c||[];case"tw":return t?__._data.l.twh[t]||{}:__._data.l.tw||[];case"ti":return __._data.t.i||{};case"pl":return t?__._data.ph[t]||{}:__._data.p||{};case"u":return __._data.u.i||{};case"e":return t?__._data.e[t]||null:__._data.e._len?__._data.e.e_0:null}},u:function(a,t,_){switch(a){case"lt":__._data.l.th[t]=_}},d:function(a,t){var _;try{_=window.atob(a)}catch(a){}return t?_:__.jp(_)},jp:function(a){return a&&JSON.parse(a||"")},dp:function(a,t){var _=t?a:this.d(a);return _&&_.success&&_.data||__.s("e",_)},pb:function(a){return"false"!=String(a.toLowerCase())},ph:function(a){var t=document.createElement("textarea");return t.innerHTML=a,t.value},X:function(a){var t=document.getElementById(a);t.parentNode.removeChild(t)},b:function(a,t){var _={};switch(a){case"tw":if(!t)return __._data.e.tw={error_msgs:[{id:"_mnf",error:"market data not found"}]},[];if(t.id)return[t];if(t.hasOwnProperty("success")){if(!t.success)return __._data.e.tw=t,[];t=t.data}_=t.mercati||t.mercato&&[t.mercato];var e={};_&&_.map(function(a){e[a.id]=a});var r=t.buste||t&&t.busta;r&&r.map(function(a){if(!e[a.id_mercato])return void __._e("sessions: market not found (id:"+a.id_mercato+")");e[a.id_mercato].sessions||(e[a.id_mercato].sessions=[]),e[a.id_mercato].sessions.unshift(a)});var n=t.aste||t&&t.asta&&[t.asta];n&&n.map(function(a){if(!e[a.id_mercato])return void __._e("auctions: market not found (id:"+a.id_mercato+")");e[a.id_mercato].auction=a});var i=t.operazioni||t&&t.operazioni;i&&i.map(function(a){if(!e[a.id_mercato])return void __._e("operations: market not found (id:"+a.id_mercato+")");e[a.id_mercato].customPurchases||(e[a.id_mercato].customPurchases=[]),e[a.id_mercato].customPurchases.unshift(a)});var d=t.scambi||t&&t.scambi;d&&d.map(function(a){if(!e[a.id_mercato])return void __._e("exchanges: market not found (id:"+a.id_mercato+")");e[a.id_mercato].customExchanges||(e[a.id_mercato].customExchanges=[]),e[a.id_mercato].customExchanges.unshift(a)});break;case"pl":if(!t)return __._e("players: data not found"),__._data.e.pl="players: data not found",null;if(t.id)return[t];if(t.map&&t[0]&&t[0].id)return t;if(t.map&&t[0]&&t[0].id_team)return t.reduce(function(a,t){return a.concat(t.calciatori.map(function(a){return a.id_t=t.id_team,a}))},[])}return _},qsa:function(a){return document.querySelectorAll(a)},qs:function(a){return document.querySelector(a)}},__iso2utf8={"Ã§":"ç","Ã‡":"Ç","Ã©":"é","Ã‰":"É","Ã¨":"è","Ãˆ":"È","Ã-­­":"í","Ã":"Í","Ã¬":"ì","ÃŒ":"Ì","Ã³":"ó","Ã“":"Ó","Ã²":"ò","Ã’":"Ò","Ãš":"Ú","Ã¹":"ù","Ã™":"Ù","â":"€","â€“":"–","â€”":"—"};__iso2utf8["Ã"+String.fromCharCode(160)]="à";var __iso2utf8re=new RegExp("("+Object.keys(__iso2utf8).reverse().join("|")+")");