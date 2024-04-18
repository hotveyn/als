import{A as j,e as K,B as L,C as E}from"./esjtI8-P.js";import{a as x,s as N,t as T,al as A,Y as O,b as q,u as W,g as $,k as I,U as v,r as J}from"./C9n3QNrM.js";const F=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function C(r,a){a?a={...F,...a}:a=F;const s=R(a);return s.dispatch(r),s.toString()}const V=Object.freeze(["prototype","__proto__","constructor"]);function R(r){let a="",s=new Map;const e=t=>{a+=t};return{toString(){return a},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let i="";const d=n.length;d<10?i="unknown:["+n+"]":i=n.slice(8,d-1),i=i.toLowerCase();let c=null;if((c=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):r.ignoreUnknown||this.unkown(t,i);else{let u=Object.keys(t);r.unorderedObjects&&(u=u.sort());let o=[];r.respectType!==!1&&!U(t)&&(o=V),r.excludeKeys&&(u=u.filter(l=>!r.excludeKeys(l)),o=o.filter(l=>!r.excludeKeys(l))),e("object:"+(u.length+o.length)+":");const p=l=>{this.dispatch(l),e(":"),r.excludeValues||this.dispatch(t[l]),e(",")};for(const l of u)p(l);for(const l of o)p(l)}},array(t,n){if(n=n===void 0?r.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const c of t)this.dispatch(c);return}const i=new Map,d=t.map(c=>{const u=R(r);u.dispatch(c);for(const[o,p]of u.getContext())i.set(o,p);return u.toString()});return s=i,d.sort(),this.array(d,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),U(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const H="[native code] }",G=H.length;function U(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-G)===H}class w{constructor(a,s){a=this.words=a||[],this.sigBytes=s===void 0?a.length*4:s}toString(a){return(a||Y).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const e=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const Y={stringify(r){const a=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},Q={stringify(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,n=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,d=t<<16|n<<8|i;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)s.push(a.charAt(d>>>6*(3-c)&63))}return s.join("")}},X={parse(r){const a=r.length,s=[];for(let e=0;e<a;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new w(s,a)}},Z={parse(r){return X.parse(unescape(encodeURIComponent(r)))}};class tt{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=Z.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,t),this._data.sigBytes-=n}return new w(s,n)}}class et extends tt{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const M=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],st=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],B=[];class rt extends et{constructor(){super(...arguments),this._hash=new w([...M])}reset(){super.reset(),this._hash=new w([...M])}_doProcessBlock(a,s){const e=this._hash.words;let t=e[0],n=e[1],i=e[2],d=e[3],c=e[4],u=e[5],o=e[6],p=e[7];for(let l=0;l<64;l++){if(l<16)B[l]=a[s+l]|0;else{const _=B[l-15],S=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,y=B[l-2],P=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;B[l]=S+B[l-7]+P+B[l-16]}const b=c&u^~c&o,D=t&n^t&i^n&i,h=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),m=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),f=p+m+b+st[l]+B[l],g=h+D;p=o,o=u,u=c,c=d+f|0,d=i,i=n,n=t,t=f+g|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+i|0,e[3]=e[3]+d|0,e[4]=e[4]+c|0,e[5]=e[5]+u|0,e[6]=e[6]+o|0,e[7]=e[7]+p|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function at(r){return new rt().finalize(r).toString(Q)}function nt(r,a={}){const s=typeof r=="string"?r:C(r,a);return at(s).slice(0,10)}function yt(r,a,s={}){return r===a||C(r,s)===C(a,s)}const it=r=>r==="defer"||r===!1;function ot(...r){var D;const a=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(a);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=K(),i=e,d=()=>null,c=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];t.server=t.server??!0,t.default=t.default??d,t.getCachedData=t.getCachedData??c,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??j.deep,t.dedupe=t.dedupe??"cancel";const u=()=>t.getCachedData(s,n)!=null;if(!n._asyncData[s]||!t.immediate){(D=n.payload._errors)[s]??(D[s]=null);const h=t.deep?x:N;n._asyncData[s]={data:h(t.getCachedData(s,n)??t.default()),pending:x(!u()),error:T(n.payload._errors,s),status:x("idle")}}const o={...n._asyncData[s]};o.refresh=o.execute=(h={})=>{if(n._asyncDataPromises[s]){if(it(h.dedupe??t.dedupe))return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if((h._initial||n.isHydrating&&h._initial!==!1)&&u())return Promise.resolve(t.getCachedData(s,n));o.pending.value=!0,o.status.value="pending";const m=new Promise((f,g)=>{try{f(i(n))}catch(_){g(_)}}).then(async f=>{if(m.cancelled)return n._asyncDataPromises[s];let g=f;t.transform&&(g=await t.transform(f)),t.pick&&(g=lt(g,t.pick)),n.payload.data[s]=g,o.data.value=g,o.error.value=null,o.status.value="success"}).catch(f=>{if(m.cancelled)return n._asyncDataPromises[s];o.error.value=L(f),o.data.value=W(t.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=m,n._asyncDataPromises[s]},o.clear=()=>ct(n,s);const p=()=>o.refresh({_initial:!0}),l=t.server!==!1&&n.payload.serverRendered;{const h=$();if(h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const f=h._nuxtOnBeforeMountCbs;h&&(A(()=>{f.forEach(g=>{g()}),f.splice(0,f.length)}),O(()=>f.splice(0,f.length)))}l&&n.isHydrating&&(o.error.value||u())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):h&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?h._nuxtOnBeforeMountCbs.push(p):t.immediate&&p(),t.watch&&q(t.watch,()=>o.refresh());const m=n.hook("app:data:refresh",async f=>{(!f||f.includes(s))&&await o.refresh()});h&&O(m)}const b=Promise.resolve(n._asyncDataPromises[s]).then(()=>o);return Object.assign(b,o),b}function ct(r,a){a in r.payload.data&&(r.payload.data[a]=void 0),a in r.payload._errors&&(r.payload._errors[a]=null),r._asyncData[a]&&(r._asyncData[a].data.value=void 0,r._asyncData[a].error.value=null,r._asyncData[a].pending.value=!1,r._asyncData[a].status.value="idle"),a in r._asyncDataPromises&&(r._asyncDataPromises[a].cancelled=!0,r._asyncDataPromises[a]=void 0)}function lt(r,a){const s={};for(const e of a)s[e]=r[e];return s}function pt(r,a,s){const[e={},t]=typeof a=="string"?[{},a]:[a,s],n=I(()=>v(r)),i=e.key||nt([t,typeof n.value=="string"?n.value:"",...ut(e)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const d=i===t?"$f"+i:i;if(!e.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:u,default:o,transform:p,pick:l,watch:b,immediate:D,getCachedData:h,deep:m,dedupe:f,...g}=e,_=J({...E,...g,cache:typeof e.cache=="boolean"?void 0:e.cache}),S={server:c,lazy:u,default:o,transform:p,pick:l,immediate:D,getCachedData:h,deep:m,dedupe:f,watch:b===!1?[]:[_,n,...b||[]]};let y;return ot(d,()=>{var z;(z=y==null?void 0:y.abort)==null||z.call(y),y=typeof AbortController<"u"?new AbortController:{};const k=v(e.timeout);return k&&setTimeout(()=>y.abort(),k),(e.$fetch||globalThis.$fetch)(n.value,{signal:y.signal,..._})},S)}function ut(r){var s;const a=[((s=v(r.method))==null?void 0:s.toUpperCase())||"GET",v(r.baseURL)];for(const e of[r.params||r.query]){const t=v(e);if(!t)continue;const n={};for(const[i,d]of Object.entries(t))n[v(i)]=v(d);a.push(n)}return a}export{yt as i,pt as u};
