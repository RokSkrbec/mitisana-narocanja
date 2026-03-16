import{$t as e,Bt as t,D as n,Dt as r,Gt as i,Ht as a,Lt as o,Nt as s,Qt as c,Rt as l,Ut as u,Wt as d,Xt as f,an as p,b as m,cn as h,en as g,fn as _,in as v,ln as y,pt as b,qt as x,sn as S,tn as C,v as w,w as T,x as E,y as D,zt as O}from"./config-B45yrKs1.js";import{t as k}from"./index-CIduS8Qk.js";import{t as A}from"./inputtext-CVTBCKIw.js";var j=n.extend({name:`message`,style:`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),M={name:`BaseMessage`,extends:T,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:j,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function N(e){"@babel/helpers - typeof";return N=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},N(e)}function P(e,t,n){return(t=F(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){var t=I(e,`string`);return N(t)==`symbol`?t:t+``}function I(e,t){if(N(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(N(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var L={name:`Message`,extends:M,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return b(P(P({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:E},components:{TimesIcon:D}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},R(e)}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?z(Object(n),!0).forEach(function(t){V(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function V(e,t,n){return(t=H(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){var t=U(e,`string`);return R(t)==`symbol`?t:t+``}function U(e,t){if(R(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(R(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var W=[`data-p`],G=[`data-p`],K=[`data-p`],q=[`aria-label`,`data-p`],J=[`data-p`];function Y(n,i,a,s,u,d){var m=e(`TimesIcon`),h=g(`ripple`);return f(),l(r,x({name:`p-message`,appear:``},n.ptmi(`transition`)),{default:v(function(){return[u.visible?(f(),t(`div`,x({key:0,class:n.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":d.dataP},n.ptm(`root`)),[o(`div`,x({class:n.cx(`contentWrapper`)},n.ptm(`contentWrapper`)),[n.$slots.container?c(n.$slots,`container`,{key:0,closeCallback:d.close}):(f(),t(`div`,x({key:1,class:n.cx(`content`),"data-p":d.dataP},n.ptm(`content`)),[c(n.$slots,`icon`,{class:y(n.cx(`icon`))},function(){return[(f(),l(C(n.icon?`span`:null),x({class:[n.cx(`icon`),n.icon],"data-p":d.dataP},n.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),n.$slots.default?(f(),t(`div`,x({key:0,class:n.cx(`text`),"data-p":d.dataP},n.ptm(`text`)),[c(n.$slots,`default`)],16,K)):O(``,!0),n.closable?p((f(),t(`button`,x({key:1,class:n.cx(`closeButton`),"aria-label":d.closeAriaLabel,type:`button`,onClick:i[0]||=function(e){return d.close(e)},"data-p":d.dataP},B(B({},n.closeButtonProps),n.ptm(`closeButton`))),[c(n.$slots,`closeicon`,{},function(){return[n.closeIcon?(f(),t(`i`,x({key:0,class:[n.cx(`closeIcon`),n.closeIcon],"data-p":d.dataP},n.ptm(`closeIcon`)),null,16,J)):(f(),l(m,x({key:1,class:[n.cx(`closeIcon`),n.closeIcon],"data-p":d.dataP},n.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,q)),[[h]]):O(``,!0)],16,G))],16)],16,W)):O(``,!0)]}),_:3},16)}L.render=Y;var X={class:`min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center`},Z={class:`bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm flex flex-col items-center gap-6`},Q={class:`flex flex-col gap-1`},$={class:`flex flex-col gap-1`},ee=i({__name:`LoginView`,setup(e){let n=k(),r=w(),i=S(!1),c=S(``),p=S(``);async function g(){i.value=!0,await n.loginWithEmail(c.value,p.value),i.value=!1,n.isAuthenticated&&r.push(`/`)}return(e,r)=>(f(),t(`div`,X,[o(`div`,Z,[r[4]||=a(`<div class="flex flex-col items-center gap-2"><div class="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg"><i class="pi pi-calendar text-white text-3xl"></i></div><h1 class="text-2xl font-bold text-gray-800">Mitisana</h1><p class="text-sm text-gray-500">Admin naročanje</p></div>`,1),h(n).error?(f(),l(h(L),{key:0,severity:`error`,closable:!1,class:`w-full text-sm`},{default:v(()=>[u(_(h(n).error),1)]),_:1})):O(``,!0),o(`form`,{class:`w-full flex flex-col gap-3`,onSubmit:s(g,[`prevent`])},[o(`div`,Q,[r[2]||=o(`label`,{class:`text-sm font-medium text-gray-600`},`E-pošta`,-1),d(h(A),{modelValue:c.value,"onUpdate:modelValue":r[0]||=e=>c.value=e,type:`email`,placeholder:`admin@example.com`,class:`w-full`,autocomplete:`email`,required:``},null,8,[`modelValue`])]),o(`div`,$,[r[3]||=o(`label`,{class:`text-sm font-medium text-gray-600`},`Geslo`,-1),d(h(A),{modelValue:p.value,"onUpdate:modelValue":r[1]||=e=>p.value=e,type:`password`,placeholder:`••••••••`,class:`w-full`,autocomplete:`current-password`,required:``},null,8,[`modelValue`])]),d(h(m),{type:`submit`,label:`Prijava`,icon:`pi pi-sign-in`,class:`w-full justify-center mt-1`,loading:i.value},null,8,[`loading`])],32),r[5]||=o(`p`,{class:`text-xs text-gray-400 text-center`},`Dostop samo za administratorje`,-1)])]))}});export{ee as default};