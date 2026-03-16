import{$t as e,Bt as t,Ct as n,D as r,Dt as i,Gt as a,I as o,It as s,Jt as c,K as l,Lt as u,Nt as d,Pt as f,Q as p,Qt as m,R as h,Rt as g,S as _,St as v,Ut as y,Vt as b,Wt as x,Xt as S,Yt as C,Zt as w,_t as T,an as E,b as D,cn as O,dn as k,en as A,fn as j,ft as M,in as N,ln as P,on as F,pt as I,qt as L,rn as R,sn as z,tn as B,tt as V,ut as ee,v as H,w as U,wt as W,x as G,xt as K,y as te,zt as q}from"./config-B45yrKs1.js";import{n as J,t as ne}from"./portal-D55jaNrn.js";import{a as re,n as ie,o as ae,s as oe,t as se}from"./index-CIduS8Qk.js";import{t as Y}from"./appointments-MOXe-3w4.js";import{n as ce,t as le}from"./inputnumber-jemLWR0e.js";import{t as ue}from"./clients-CpWgzjRL.js";import{n as de,r as fe,t as X}from"./inputtext-CVTBCKIw.js";import{i as pe,n as me,r as he,t as ge}from"./select-GhZ0WV9L.js";import{t as _e}from"./datepicker-B51rL14R.js";import{t as ve}from"./textarea-DPiy0R7S.js";function ye(){let e=z(new Date),t=z(`week`);function n(){e.value=new Date}function r(n){let r=new Date(e.value);t.value===`day`?r.setDate(r.getDate()+n):t.value===`week`?r.setDate(r.getDate()+n*7):r.setMonth(r.getMonth()+n),e.value=r}let i=s(()=>{let t=new Date(e.value),n=t.getDay(),r=t.getDate()-n+(n===0?-6:1);return t.setDate(r),t.setHours(0,0,0,0),t}),a=s(()=>Array.from({length:7},(e,t)=>{let n=new Date(i.value);return n.setDate(n.getDate()+t),n})),o=s(()=>a.value.slice(0,5)),c=s(()=>{let t=e.value.getFullYear(),n=e.value.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),a=new Date(r),o=a.getDay();a.setDate(a.getDate()-(o===0?6:o-1));let s=new Date(i),c=s.getDay();c!==0&&s.setDate(s.getDate()+(7-c));let l=[],u=new Date(a);for(;u<=s;)l.push(new Date(u)),u.setDate(u.getDate()+1);return l}),l=s(()=>{let e=[];for(let t=0;t<24;t++)for(let n=0;n<60;n+=5)e.push(`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`);return e}),u=s(()=>{let n=`sl-SI`;if(t.value===`day`)return e.value.toLocaleDateString(n,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(t.value===`week`){let e=a.value[0],t=a.value[6];return`${e.toLocaleDateString(n,{day:`numeric`,month:`short`})} – ${t.toLocaleDateString(n,{day:`numeric`,month:`short`,year:`numeric`})}`}return e.value.toLocaleDateString(n,{month:`long`,year:`numeric`})});function d(e){return e.getHours()*60+e.getMinutes()}function f(e){return d(e)/5*12}function p(e,t){return(t.getTime()-e.getTime())/6e4/5*12}function m(e){let t=new Date(e),n=t.getMinutes();return t.setMinutes(Math.floor(n/5)*5,0,0),t}function h(e,t){return e.filter(e=>{let n=e.startTime;return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate()})}function g(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function _(t){return t.getMonth()===e.value.getMonth()}return{currentDate:e,view:t,goToToday:n,navigate:r,startOfWeek:i,weekDays:a,workWeekDays:o,monthDays:c,timeSlots:l,headerLabel:u,SLOT_HEIGHT_PX:12,topForTime:f,heightForDuration:p,snapToFiveMinutes:m,appointmentsForDay:h,isSameDay:g,isCurrentMonth:_,minutesFromMidnight:d}}var be=r.extend({name:`togglebutton`,style:`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-togglebutton p-component`,{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-fluid":n.fluid,"p-togglebutton-sm p-inputfield-sm":n.size===`small`,"p-togglebutton-lg p-inputfield-lg":n.size===`large`}]},content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,label:`p-togglebutton-label`}}),xe={name:`BaseToggleButton`,extends:fe,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:`Yes`},offLabel:{type:String,default:`No`},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:be,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function Se(e,t,n){return(t=Ce(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(e){var t=we(e,`string`);return Z(t)==`symbol`?t:t+``}function we(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Te={name:`ToggleButton`,extends:xe,inheritAttrs:!1,emits:[`change`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit(`change`,e))},onBlur:function(e){var t,n;(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return W(this.onLabel)&&W(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:`\xA0`},dataP:function(){return I(Se({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:G}},Ee=[`tabindex`,`disabled`,`aria-pressed`,`aria-label`,`aria-labelledby`,`data-p-checked`,`data-p-disabled`,`data-p`],De=[`data-p`];function Oe(e,n,r,i,a,o){var s=A(`ripple`);return E((S(),t(`button`,L({type:`button`,class:e.cx(`root`),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:n[0]||=function(){return o.onChange&&o.onChange.apply(o,arguments)},onBlur:n[1]||=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}},o.getPTOptions(`root`),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled,"data-p":o.dataP}),[u(`span`,L({class:e.cx(`content`)},o.getPTOptions(`content`),{"data-p":o.dataP}),[m(e.$slots,`default`,{},function(){return[m(e.$slots,`icon`,{value:e.d_value,class:P(e.cx(`icon`))},function(){return[e.onIcon||e.offIcon?(S(),t(`span`,L({key:0,class:[e.cx(`icon`),e.d_value?e.onIcon:e.offIcon]},o.getPTOptions(`icon`)),null,16)):q(``,!0)]}),u(`span`,L({class:e.cx(`label`)},o.getPTOptions(`label`)),j(o.label),17)]})],16,De)],16,Ee)),[[s]])}Te.render=Oe;var ke=r.extend({name:`selectbutton`,style:`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,classes:{root:function(e){var t=e.props,n=e.instance;return[`p-selectbutton p-component`,{"p-invalid":n.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),Ae={name:`BaseSelectButton`,extends:fe,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:ke,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function je(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Pe(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function Me(e){return Ie(e)||Fe(e)||Pe(e)||Ne()}function Ne(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e,t){if(e){if(typeof e==`string`)return Le(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Le(e,t):void 0}}function Fe(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ie(e){if(Array.isArray(e))return Le(e)}function Le(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Re={name:`SelectButton`,extends:Ae,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?n(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?n(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?n(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?n(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple)if(i){if(o=this.d_value.filter(function(e){return!K(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(Me(this.d_value),[a]):[a];else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=je(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(K(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=K(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return I({invalid:this.$invalid})}},directives:{ripple:G},components:{ToggleButton:Te}},ze=[`aria-labelledby`,`data-p`];function Be(n,r,i,a,o,s){var c=e(`ToggleButton`);return S(),t(`div`,L({class:n.cx(`root`),role:`group`,"aria-labelledby":n.ariaLabelledby},n.ptmi(`root`),{"data-p":s.dataP}),[(S(!0),t(f,null,w(n.options,function(e,t){return S(),g(c,{key:s.getOptionRenderKey(e),modelValue:s.isSelected(e),onLabel:s.getOptionLabel(e),offLabel:s.getOptionLabel(e),disabled:n.disabled||s.isOptionDisabled(e),unstyled:n.unstyled,size:n.size,readonly:s.isOptionReadonly(e),onChange:function(n){return s.onOptionSelect(n,e,t)},pt:n.ptm(`pcToggleButton`)},b({_:2},[n.$slots.option?{name:`default`,fn:N(function(){return[m(n.$slots,`option`,{option:e,index:t},function(){return[u(`span`,L({ref_for:!0},n.ptm(`pcToggleButton`).label),j(s.getOptionLabel(e)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,ze)}Re.render=Be;var Ve={class:`border-b border-gray-200 bg-white z-10 flex-shrink-0`},He={class:`flex items-center gap-1 px-2 py-1.5`},Ue={class:`flex-1 text-xs font-semibold text-gray-700 text-center truncate px-1`},We={class:`flex justify-center px-2 pb-1.5`},Ge=a({__name:`CalendarToolbar`,props:{headerLabel:{},view:{}},emits:[`navigate`,`today`,`change-view`,`block-time`],setup(n){let r=[{label:`Dan`,value:`day`},{label:`Teden`,value:`week`},{label:`Mesec`,value:`month`}],i=se(),a=H();async function o(){await i.logout(),a.push(`/login`)}return(i,a)=>{let s=e(`router-link`),c=A(`tooltip`);return S(),t(`header`,Ve,[u(`div`,He,[x(O(D),{icon:`pi pi-chevron-left`,text:``,rounded:``,size:`small`,onClick:a[0]||=e=>i.$emit(`navigate`,-1)}),x(O(D),{label:`Danes`,text:``,size:`small`,class:`!px-2 !text-xs`,onClick:a[1]||=e=>i.$emit(`today`)}),x(O(D),{icon:`pi pi-chevron-right`,text:``,rounded:``,size:`small`,onClick:a[2]||=e=>i.$emit(`navigate`,1)}),u(`span`,Ue,j(n.headerLabel),1),E(x(O(D),{icon:`pi pi-lock`,text:``,rounded:``,size:`small`,severity:`secondary`,onClick:a[3]||=e=>i.$emit(`block-time`)},null,512),[[c,`Blokiraj čas`,void 0,{bottom:!0}]]),x(s,{to:`/clients`},{default:N(()=>[E(x(O(D),{icon:`pi pi-users`,text:``,rounded:``,size:`small`},null,512),[[c,`Stranke`,void 0,{bottom:!0}]])]),_:1}),x(s,{to:`/statistics`},{default:N(()=>[E(x(O(D),{icon:`pi pi-chart-bar`,text:``,rounded:``,size:`small`},null,512),[[c,`Statistika`,void 0,{bottom:!0}]])]),_:1}),x(s,{to:`/settings`},{default:N(()=>[E(x(O(D),{icon:`pi pi-cog`,text:``,rounded:``,size:`small`},null,512),[[c,`Nastavitve`,void 0,{bottom:!0}]])]),_:1}),E(x(O(D),{icon:`pi pi-sign-out`,text:``,rounded:``,size:`small`,severity:`secondary`,onClick:o},null,512),[[c,`Odjava`,void 0,{bottom:!0}]])]),u(`div`,We,[x(O(Re),{"model-value":n.view,options:r,"option-label":`label`,"option-value":`value`,size:`small`,"onUpdate:modelValue":a[4]||=e=>i.$emit(`change-view`,e)},null,8,[`model-value`])])])}}});function Ke(e){let t=Y(),n=z(null),r=z(0);function i(t,i){n.value=t,i.dataTransfer&&(i.dataTransfer.effectAllowed=`move`,i.dataTransfer.setData(`appointmentId`,t.id));let a=i.currentTarget.getBoundingClientRect(),o=i.clientY-a.top;r.value=Math.floor(o/e)*5}function a(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=`move`)}async function o(i,a,o){if(i.preventDefault(),!n.value)return;let s=o.getBoundingClientRect(),c=i.clientY-s.top,l=Math.floor(c/e)*5-r.value,u=new Date(a);u.setHours(0,0,0,0),u.setMinutes(Math.max(0,l));let d=(n.value.endTime.getTime()-n.value.startTime.getTime())/6e4,f=new Date(u.getTime()+d*6e4);await t.updateAppointment(n.value.id,{startTime:u,endTime:f}),n.value=null}function s(){n.value=null}return{dragging:n,onDragStart:i,onDragOver:a,onDrop:o,onDragEnd:s}}var qe=[`draggable`],Je={key:0,class:`absolute inset-0 rounded-lg pointer-events-none z-20 overflow-hidden`},Ye={class:`absolute top-1 right-1 w-4 h-4 -rotate-90`,viewBox:`0 0 16 16`},Xe=[`stroke-dasharray`],Ze={class:`flex items-start gap-1 h-full min-w-0`},Qe={key:0,class:`pi pi-lock text-gray-400 flex-shrink-0 mt-0.5`,style:{"font-size":`10px`}},$e={key:1,class:`pi pi-times-circle flex-shrink-0 mt-0.5 opacity-80`,style:{"font-size":`10px`}},et={key:2,class:`pi pi-user-minus flex-shrink-0 mt-0.5 opacity-80`,style:{"font-size":`10px`}},tt={class:`min-w-0 flex-1`},nt={key:0,class:`opacity-80 truncate leading-tight`},rt=500,it=a({__name:`AppointmentBlock`,props:{appointment:{},top:{},height:{},resizing:{type:Boolean}},emits:[`drag-start`,`drag-end`,`edit`,`resize-start`,`touch-drag-start`],setup(e,{emit:n}){let r=e,i=n,a=z(!1),o=z(0),s=null,c=null,l=0,f=null,p=0,m=0;function h(e){if(r.resizing)return;e.preventDefault();let t=e.touches[0];p=t.clientX,m=t.clientY,f=e,a.value=!0,o.value=0,l=performance.now();function n(){let e=performance.now()-l;o.value=Math.min(e/rt,1),e<rt&&(c=requestAnimationFrame(n))}c=requestAnimationFrame(n),s=setTimeout(()=>{f&&(a.value=!1,o.value=0,i(`touch-drag-start`,r.appointment,f))},rt),window.addEventListener(`touchmove`,g,{passive:!0})}function g(e){let t=e.touches[0],n=t.clientX-p,r=t.clientY-m;Math.sqrt(n*n+r*r)>6&&v()}function _(){s!==null&&(v(),r.resizing||i(`edit`,r.appointment))}function v(){s!==null&&(clearTimeout(s),s=null),c!==null&&(cancelAnimationFrame(c),c=null),window.removeEventListener(`touchmove`,g),a.value=!1,o.value=0,f=null}function y(e){return e.toLocaleTimeString(`sl-SI`,{hour:`2-digit`,minute:`2-digit`})}return(n,r)=>(S(),t(`div`,{class:P([`absolute left-1 right-1 rounded-lg px-2 py-1 text-xs font-medium shadow select-none overflow-hidden group`,[e.resizing?`cursor-ns-resize`:`cursor-grab`,e.appointment.blocked?`text-gray-600`:`text-white`,e.appointment.status===`cancelled`?`opacity-50`:``,a.value?`scale-[1.03] brightness-110`:``]]),style:k({top:`${e.top}px`,height:`${e.height}px`,backgroundColor:e.appointment.blocked?`#e5e7eb`:e.appointment.color,backgroundImage:e.appointment.blocked?`repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.06) 4px, rgba(0,0,0,0.06) 8px)`:e.appointment.status===`cancelled`?`repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(0,0,0,0.15) 4px, rgba(0,0,0,0.15) 8px)`:`none`,borderLeft:e.appointment.blocked?`3px solid #9ca3af`:e.appointment.status===`no-show`?`3px solid rgba(0,0,0,0.35)`:`none`,minHeight:`20px`,zIndex:e.resizing?30:10,transition:`transform 0.15s ease, filter 0.15s ease`}),draggable:!e.resizing,onDragstart:r[2]||=t=>!e.resizing&&n.$emit(`drag-start`,e.appointment,t),onDragend:r[3]||=e=>n.$emit(`drag-end`),onClick:r[4]||=d(t=>!e.resizing&&n.$emit(`edit`,e.appointment),[`stop`]),onTouchstart:d(h,[`stop`]),onTouchend:d(_,[`stop`]),onTouchcancel:d(v,[`stop`])},[a.value?(S(),t(`div`,Je,[r[6]||=u(`div`,{class:`absolute inset-0 bg-white opacity-20 animate-pulse rounded-lg`},null,-1),(S(),t(`svg`,Ye,[r[5]||=u(`circle`,{cx:`8`,cy:`8`,r:`6`,fill:`none`,stroke:`rgba(255,255,255,0.4)`,"stroke-width":`2`},null,-1),u(`circle`,{cx:`8`,cy:`8`,r:`6`,fill:`none`,stroke:`white`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-dasharray":`${o.value*37.7} 37.7`,style:{transition:`stroke-dasharray 0.05s linear`}},null,8,Xe)]))])):q(``,!0),u(`div`,Ze,[e.appointment.blocked?(S(),t(`i`,Qe)):e.appointment.status===`cancelled`?(S(),t(`i`,$e)):e.appointment.status===`no-show`?(S(),t(`i`,et)):q(``,!0),u(`div`,tt,[u(`p`,{class:P([`font-semibold leading-tight truncate`,e.appointment.status===`cancelled`?`line-through`:``])},j(e.appointment.clientName),3),!e.appointment.blocked&&e.height>30?(S(),t(`p`,nt,j(e.appointment.typeName),1)):q(``,!0),e.height>44?(S(),t(`p`,{key:1,class:P([`opacity-70 text-[10px] leading-tight`,e.appointment.blocked?`text-gray-500`:``])},j(y(e.appointment.startTime))+` – `+j(y(e.appointment.endTime)),3)):q(``,!0)])]),u(`div`,{class:`absolute bottom-0 left-0 right-0 h-5 flex items-center justify-center cursor-ns-resize group/handle`,onMousedown:r[0]||=d(t=>n.$emit(`resize-start`,e.appointment,t),[`stop`]),onTouchstart:r[1]||=d(t=>n.$emit(`resize-start`,e.appointment,t),[`stop`,`prevent`])},[u(`div`,{class:P([`w-6 h-0.5 rounded-full opacity-0 group-hover:opacity-60 transition-opacity`,e.appointment.blocked?`bg-gray-500`:`bg-white`])},null,2)],32)],46,qe))}}),at={class:`flex flex-1 min-h-0 overflow-y-auto overflow-x-auto`},ot={class:`sticky left-0 z-20 w-14 flex-shrink-0 flex flex-col bg-white`},st={key:0,class:`flex-shrink-0 border-b border-r border-gray-200`,style:{height:`60px`}},ct={key:0,class:`text-[10px] text-gray-400 -translate-y-2`},lt={class:`flex flex-col flex-1`},ut={key:0,class:`flex flex-shrink-0 border-b border-gray-200 bg-white`,style:{height:`60px`}},dt={class:`flex flex-1`},ft=[`onDrop`],pt=[`onClick`],mt=a({__name:`TimeGrid`,props:{days:{},appointments:{},timeSlots:{},slotHeight:{},topForTime:{type:Function},heightForDuration:{type:Function},snapToFive:{type:Function},appointmentsForDay:{type:Function}},emits:[`add-appointment`,`edit-appointment`],setup(e,{emit:n}){let r=e,i=n,a=z([]),o=s(()=>r.timeSlots.length*r.slotHeight),l=Ke(r.slotHeight),d=Y(),p=z(null),h=z(0),_=null,v=0,y=0;function b(e){return e instanceof TouchEvent?e.touches[0]?.clientY??e.changedTouches[0]?.clientY??0:e.clientY}function x(e,t,n){_=e,p.value=e.id,v=b(t),y=r.heightForDuration(e.startTime,e.endTime),h.value=y,t instanceof TouchEvent?(window.addEventListener(`touchmove`,D,{passive:!1}),window.addEventListener(`touchend`,M),window.addEventListener(`touchcancel`,M)):(window.addEventListener(`mousemove`,E),window.addEventListener(`mouseup`,A))}function T(e){let t=e-v,n=Math.round(t/r.slotHeight)*r.slotHeight,i=r.slotHeight;h.value=Math.max(i,y+n)}function E(e){_&&T(e.clientY)}function D(e){_&&(e.preventDefault(),T(e.touches[0].clientY))}async function A(){window.removeEventListener(`mousemove`,E),window.removeEventListener(`mouseup`,A),await N()}async function M(){window.removeEventListener(`touchmove`,D),window.removeEventListener(`touchend`,M),window.removeEventListener(`touchcancel`,M),await N()}async function N(){if(!_)return;let e=Math.round(h.value/r.slotHeight)*5,t=new Date(_.startTime.getTime()+e*6e4);await d.updateAppointment(_.id,{endTime:t}),p.value=null,_=null}let F=z(null),I=z(0),L=z(-1),R=0;function B(e,t){if(p.value)return;let n=t.touches[0];F.value=e;let i=V(n.clientX);if(L.value=i,i>=0&&i<a.value.length){let t=a.value[i].getBoundingClientRect(),o=r.topForTime(e.startTime);R=n.clientY-t.top-o;let s=r.heightForDuration(e.startTime,e.endTime);R=Math.max(0,Math.min(R,s-r.slotHeight))}I.value=r.topForTime(e.startTime),window.addEventListener(`touchmove`,H,{passive:!1}),window.addEventListener(`touchend`,U),window.addEventListener(`touchcancel`,W)}function V(e){for(let t=0;t<a.value.length;t++){let n=a.value[t].getBoundingClientRect();if(e>=n.left&&e<=n.right)return t}return 0}function ee(e,t){if(t<0||t>=a.value.length)return 0;let n=e-a.value[t].getBoundingClientRect().top-R;return Math.max(0,Math.round(n/r.slotHeight)*r.slotHeight)}function H(e){if(!F.value)return;e.preventDefault();let t=e.touches[0];L.value=V(t.clientX),I.value=ee(t.clientY,L.value)}async function U(e){if(window.removeEventListener(`touchmove`,H),window.removeEventListener(`touchend`,U),window.removeEventListener(`touchcancel`,W),!F.value)return;let t=F.value,n=L.value;F.value=null,L.value=-1;let i=r.days[Math.max(0,Math.min(n,r.days.length-1))],a=Math.round(I.value/r.slotHeight)*5,o=new Date(i);o.setHours(0,0,0,0),o.setMinutes(a);let s=(t.endTime.getTime()-t.startTime.getTime())/6e4,c=new Date(o.getTime()+s*6e4);await d.updateAppointment(t.id,{startTime:o,endTime:c})}function W(){window.removeEventListener(`touchmove`,H),window.removeEventListener(`touchend`,U),window.removeEventListener(`touchcancel`,W),F.value=null,L.value=-1}let G=z(0),K;function te(){let e=new Date;G.value=r.topForTime(e)}c(()=>{te(),K=setInterval(te,6e4);let e=480*(r.slotHeight/5);setTimeout(()=>{let t=a.value[0]?.closest(`.overflow-y-auto`);t&&(t.scrollTop=e)},50)}),C(()=>clearInterval(K));function J(e){let t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function ne(e,t){let[n,r]=t.split(`:`).map(Number),a=new Date(e);a.setHours(n,r,0,0),i(`add-appointment`,a)}function re(e,t){l.onDragStart(e,t)}function ie(e){l.onDragOver(e)}function ae(e,t,n){l.onDrop(e,t,n)}return(n,r)=>(S(),t(`div`,at,[u(`div`,ot,[n.$slots[`day-header`]?(S(),t(`div`,st)):q(``,!0),u(`div`,{class:`relative flex-shrink-0 border-r border-gray-100`,style:k({height:o.value+`px`})},[(S(!0),t(f,null,w(e.timeSlots,(n,r)=>(S(),t(`div`,{key:n,class:`absolute left-0 right-0 flex items-start justify-end pr-2`,style:k({top:`${r*e.slotHeight}px`,height:`${e.slotHeight}px`})},[r%12==0?(S(),t(`span`,ct,j(n),1)):q(``,!0)],4))),128))],4)]),u(`div`,lt,[n.$slots[`day-header`]?(S(),t(`div`,ut,[(S(!0),t(f,null,w(e.days,(e,r)=>(S(),t(`div`,{key:r,class:`flex-1 min-w-[60px]`},[m(n.$slots,`day-header`,{day:e})]))),128))])):q(``,!0),u(`div`,dt,[(S(!0),t(f,null,w(e.days,(i,s)=>(S(),t(`div`,{key:s,ref_for:!0,ref_key:`columnRefs`,ref:a,class:`flex-1 min-w-[60px] border-r border-gray-100 relative`,style:k({height:o.value+`px`}),onDragover:r[3]||=e=>ie(e),onDrop:e=>ae(e,i,a.value[s])},[(S(!0),t(f,null,w(e.timeSlots,(n,r)=>(S(),t(`div`,{key:n,class:P([`absolute left-0 right-0 border-t cursor-pointer hover:bg-pink-50 transition-colors`,r%12==0?`border-gray-200`:`border-gray-50`]),style:k({top:`${r*e.slotHeight}px`,height:`${e.slotHeight}px`}),onClick:e=>ne(i,n)},null,14,pt))),128)),J(i)?(S(),t(`div`,{key:0,class:`absolute left-0 right-0 z-20 pointer-events-none`,style:k({top:`${G.value}px`})},[...r[4]||=[u(`div`,{class:`relative`},[u(`div`,{class:`absolute -left-1 w-2.5 h-2.5 rounded-full bg-pink-500 -translate-y-1/2`}),u(`div`,{class:`border-t-2 border-pink-500`})],-1)]],4)):q(``,!0),(S(!0),t(f,null,w(e.appointmentsForDay(e.appointments,i),t=>(S(),g(it,{key:t.id,appointment:t,top:e.topForTime(t.startTime),height:p.value===t.id?h.value:e.heightForDuration(t.startTime,t.endTime),resizing:p.value===t.id,onDragStart:r[0]||=(e,t)=>re(e,t),onDragEnd:r[1]||=e=>O(l).onDragEnd(),onEdit:e=>n.$emit(`edit-appointment`,t),onResizeStart:(e,t)=>x(e,t,a.value[s]),onTouchDragStart:r[2]||=(e,t)=>B(e,t)},null,8,[`appointment`,`top`,`height`,`resizing`,`onEdit`,`onResizeStart`]))),128)),F.value&&L.value===s?(S(),t(`div`,{key:1,class:`absolute left-1 right-1 rounded-lg opacity-70 pointer-events-none z-40 border-2 border-white`,style:k({top:`${I.value}px`,height:`${F.value?e.heightForDuration(F.value.startTime,F.value.endTime):0}px`,backgroundColor:F.value.blocked?`#e5e7eb`:F.value.color})},null,4)):q(``,!0)],44,ft))),128))])])]))}}),ht={class:`flex flex-col flex-1 min-h-0 overflow-hidden`},gt={class:`flex border-b border-gray-200 bg-white flex-shrink-0`},_t={class:`flex-1 py-2 px-4`},vt={class:`text-[10px] font-medium uppercase opacity-70`},yt={class:`text-lg font-bold leading-none`},bt=a({__name:`DayView`,props:{date:{},appointments:{},timeSlots:{},slotHeight:{},topForTime:{type:Function},heightForDuration:{type:Function},snapToFive:{type:Function},appointmentsForDay:{type:Function}},emits:[`add-appointment`,`edit-appointment`],setup(e){let n=e,r=s(()=>{let e=new Date;return n.date.getFullYear()===e.getFullYear()&&n.date.getMonth()===e.getMonth()&&n.date.getDate()===e.getDate()}),i=s(()=>n.date.toLocaleDateString(`sl-SI`,{weekday:`short`}));return(n,a)=>(S(),t(`div`,ht,[u(`div`,gt,[a[2]||=u(`div`,{class:`w-14 flex-shrink-0`},null,-1),u(`div`,_t,[u(`div`,{class:P([`inline-flex flex-col items-center justify-center w-10 h-10 rounded-full`,r.value?`bg-pink-500 text-white`:`text-gray-700`])},[u(`span`,vt,j(i.value),1),u(`span`,yt,j(e.date.getDate()),1)],2)])]),x(mt,{days:[e.date],appointments:e.appointments,"time-slots":e.timeSlots,"slot-height":e.slotHeight,"top-for-time":e.topForTime,"height-for-duration":e.heightForDuration,"snap-to-five":e.snapToFive,"appointments-for-day":e.appointmentsForDay,onAddAppointment:a[0]||=e=>n.$emit(`add-appointment`,e),onEditAppointment:a[1]||=e=>n.$emit(`edit-appointment`,e)},null,8,[`days`,`appointments`,`time-slots`,`slot-height`,`top-for-time`,`height-for-duration`,`snap-to-five`,`appointments-for-day`])]))}}),xt={class:`flex flex-col flex-1 min-h-0 overflow-hidden`},St={class:`flex flex-col items-center py-2`},Ct={class:`text-[10px] font-medium uppercase text-gray-400`},wt=a({__name:`WeekView`,props:{weekDays:{},appointments:{},timeSlots:{},slotHeight:{},topForTime:{type:Function},heightForDuration:{type:Function},snapToFive:{type:Function},appointmentsForDay:{type:Function}},emits:[`add-appointment`,`edit-appointment`],setup(e){function n(e){let t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}return(r,i)=>(S(),t(`div`,xt,[x(mt,{days:e.weekDays,appointments:e.appointments,"time-slots":e.timeSlots,"slot-height":e.slotHeight,"top-for-time":e.topForTime,"height-for-duration":e.heightForDuration,"snap-to-five":e.snapToFive,"appointments-for-day":e.appointmentsForDay,onAddAppointment:i[0]||=e=>r.$emit(`add-appointment`,e),onEditAppointment:i[1]||=e=>r.$emit(`edit-appointment`,e)},{"day-header":N(({day:e})=>[u(`div`,St,[u(`span`,Ct,j(e.toLocaleDateString(`sl-SI`,{weekday:`short`})),1),u(`div`,{class:P([`w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold mt-0.5`,n(e)?`bg-pink-500 text-white`:`text-gray-700`])},j(e.getDate()),3)])]),_:1},8,[`days`,`appointments`,`time-slots`,`slot-height`,`top-for-time`,`height-for-duration`,`snap-to-five`,`appointments-for-day`])]))}}),Tt={class:`flex flex-col flex-1 overflow-hidden p-4`},Et={class:`grid grid-cols-7 mb-1`},Dt={class:`grid grid-cols-7 flex-1 gap-1 overflow-y-auto`},Ot=[`onClick`],kt={class:`flex justify-end mb-1`},At={class:`flex flex-col gap-0.5 overflow-hidden`},jt=[`onClick`],Mt={key:0,class:`text-[10px] text-gray-400 pl-1`},Nt=a({__name:`MonthView`,props:{currentDate:{},monthDays:{},appointments:{},isSameDay:{type:Function},isCurrentMonth:{type:Function},appointmentsForDay:{type:Function}},emits:[`add-appointment`,`edit-appointment`],setup(e){let n=new Date,r=[`Pon`,`Tor`,`Sre`,`Čet`,`Pet`,`Sob`,`Ned`];function i(e){return e.toLocaleTimeString(`sl-SI`,{hour:`2-digit`,minute:`2-digit`})}return(a,o)=>(S(),t(`div`,Tt,[u(`div`,Et,[(S(),t(f,null,w(r,e=>u(`div`,{key:e,class:`text-center text-[11px] font-semibold uppercase text-gray-400 py-1`},j(e),1)),64))]),u(`div`,Dt,[(S(!0),t(f,null,w(e.monthDays,r=>(S(),t(`div`,{key:r.toISOString(),class:P([`border border-gray-100 rounded-lg p-1 min-h-[80px] cursor-pointer hover:bg-pink-50 transition-colors flex flex-col`,{"opacity-40":!e.isCurrentMonth(r),"ring-2 ring-pink-400":e.isSameDay(r,O(n))}]),onClick:e=>a.$emit(`add-appointment`,r)},[u(`div`,kt,[u(`span`,{class:P([`text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full`,e.isSameDay(r,O(n))?`bg-pink-500 text-white`:`text-gray-600`])},j(r.getDate()),3)]),u(`div`,At,[(S(!0),t(f,null,w(e.appointmentsForDay(e.appointments,r).slice(0,3),e=>(S(),t(`div`,{key:e.id,class:`text-[10px] font-medium text-white rounded px-1 truncate cursor-pointer`,style:k({backgroundColor:e.color}),onClick:d(t=>a.$emit(`edit-appointment`,e),[`stop`])},j(i(e.startTime))+` `+j(e.clientName),13,jt))),128)),e.appointmentsForDay(e.appointments,r).length>3?(S(),t(`div`,Mt,` +`+j(e.appointmentsForDay(e.appointments,r).length-3)+` več `,1)):q(``,!0)])],10,Ot))),128))])]))}}),Pt=r.extend({name:`chip`,style:`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,classes:{root:`p-chip p-component`,image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`}}),Ft={name:`Chip`,extends:{name:`BaseChip`,extends:U,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Pt,provide:function(){return{$pcChip:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`remove`],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)},close:function(e){this.visible=!1,this.$emit(`remove`,e)}},computed:{dataP:function(){return I({removable:this.removable})}},components:{TimesCircleIcon:ie}},It=[`aria-label`,`data-p`],Lt=[`src`];function Rt(e,n,r,i,a,o){return a.visible?(S(),t(`div`,L({key:0,class:e.cx(`root`),"aria-label":e.label},e.ptmi(`root`),{"data-p":o.dataP}),[m(e.$slots,`default`,{},function(){return[e.image?(S(),t(`img`,L({key:0,src:e.image},e.ptm(`image`),{class:e.cx(`image`)}),null,16,Lt)):e.$slots.icon?(S(),g(B(e.$slots.icon),L({key:1,class:e.cx(`icon`)},e.ptm(`icon`)),null,16,[`class`])):e.icon?(S(),t(`span`,L({key:2,class:[e.cx(`icon`),e.icon]},e.ptm(`icon`)),null,16)):q(``,!0),e.label===null?q(``,!0):(S(),t(`div`,L({key:3,class:e.cx(`label`)},e.ptm(`label`)),j(e.label),17))]}),e.removable?m(e.$slots,`removeicon`,{key:0,removeCallback:o.close,keydownCallback:o.onKeydown},function(){return[(S(),g(B(e.removeIcon?`span`:`TimesCircleIcon`),L({class:[e.cx(`removeIcon`),e.removeIcon],onClick:o.close,onKeydown:o.onKeydown},e.ptm(`removeIcon`)),null,16,[`class`,`onClick`,`onKeydown`]))]}):q(``,!0)],16,It)):q(``,!0)}Ft.render=Rt;var zt=r.extend({name:`autocomplete`,style:`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled):hover {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`,classes:{root:function(e){var t=e.instance;return[`p-autocomplete p-component p-inputwrapper`,{"p-invalid":t.$invalid,"p-focus":t.focused,"p-inputwrapper-filled":t.$filled||W(t.inputValue),"p-inputwrapper-focus":t.focused,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-fluid":t.$fluid,"p-autocomplete-clearable":t.isClearIconVisible}]},pcInputText:`p-autocomplete-input`,inputMultiple:function(e){var t=e.instance,n=e.props;return[`p-autocomplete-input-multiple`,{"p-variant-filled":t.$variant===`filled`,"p-disabled":n.disabled}]},clearIcon:`p-autocomplete-clear-icon`,chipItem:function(e){var t=e.instance,n=e.i;return[`p-autocomplete-chip-item`,{"p-focus":t.focusedMultipleOptionIndex===n}]},pcChip:`p-autocomplete-chip`,chipIcon:`p-autocomplete-chip-icon`,inputChip:`p-autocomplete-input-chip`,loader:`p-autocomplete-loader`,dropdown:`p-autocomplete-dropdown`,overlay:`p-autocomplete-overlay p-component`,listContainer:`p-autocomplete-list-container`,list:`p-autocomplete-list`,optionGroup:`p-autocomplete-option-group`,option:function(e){var t=e.instance,n=e.option,r=e.i,i=e.getItemOptions;return[`p-autocomplete-option`,{"p-autocomplete-option-selected":t.isSelected(n),"p-focus":t.focusedOptionIndex===t.getOptionIndex(r,i),"p-disabled":t.isOptionDisabled(n)}]},emptyMessage:`p-autocomplete-empty-message`},inlineStyles:{root:{position:`relative`}}}),Bt={name:`BaseAutoComplete`,extends:de,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:`14rem`},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:`blank`},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:`body`},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:zt,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function Vt(e,t,n){return(t=Ht(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ht(e){var t=Ut(e,`string`);return Q(t)==`symbol`?t:t+``}function Ut(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function Wt(e){return Jt(e)||qt(e)||Kt(e)||Gt()}function Gt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kt(e,t){if(e){if(typeof e==`string`)return Yt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yt(e,t):void 0}}function qt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Jt(e){if(Array.isArray(e))return Yt(e)}function Yt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Xt={name:`AutoComplete`,extends:Bt,inheritAttrs:!1,emits:[`change`,`focus`,`blur`,`item-select`,`item-unselect`,`option-select`,`option-unselect`,`dropdown-click`,`clear`,`complete`,`before-show`,`before-hide`,`show`,`hide`],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,startRangeIndex:-1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1,!this.showEmptyMessage&&this.visibleOptions.length===0&&this.hide()),this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.overlay&&=(J.clear(this.overlay),null)},methods:{getOptionIndex:function(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel:function(e){return this.optionLabel?n(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,t){return(this.dataKey?n(e,this.dataKey):this.getOptionLabel(e))+`_`+t},getPTOptions:function(e,t,n,r){return this.ptm(r,{context:{option:e,index:n,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(n,t),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?n(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return n(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return n(e,this.optionGroupChildren)},getAriaPosInset:function(e){var t=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(e){return t.isOptionGroup(e)}).length:e)+1},show:function(e){this.$emit(`before-show`),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex===-1?this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1:this.focusedOptionIndex,e&&V(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var t=this,n=function(){t.$emit(`before-hide`),t.dirty=e,t.overlayVisible=!1,t.clicked=!1,t.focusedOptionIndex=-1,e&&V(t.multiple?t.$refs.focusInput:t.$refs.focusInput?.$el)};setTimeout(function(){n()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,`focus`),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex===-1?this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1:this.focusedOptionIndex,this.scrollInView(this.focusedOptionIndex)),this.$emit(`focus`,e))},onBlur:function(e){var t,n;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`ShiftLeft`:case`ShiftRight`:this.onShiftKey(e);break;case`Backspace`:this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var t=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var n=e.target.value;this.multiple||this.updateModel(e,n),n.length===0?(this.searching=!1,this.hide(),this.$emit(`clear`)):n.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){t.search(e,n,`input`)},this.delay)):(this.searching=!1,this.hide())}},onChange:function(e){var t=this;if(this.forceSelection){var n=!1;if(this.visibleOptions&&!this.multiple){var r,i=this.multiple?this.$refs.focusInput.value:(r=this.$refs.focusInput)==null||(r=r.$el)==null?void 0:r.value,a=this.visibleOptions.find(function(e){return t.isOptionMatched(e,i||``)});a!==void 0&&(n=!0,!this.isSelected(a)&&this.onOptionSelect(e,a))}if(!n){if(this.multiple)this.$refs.focusInput.value=``;else{var o=this.$refs.focusInput?.$el;o&&(o.value=``)}this.$emit(`clear`),!this.multiple&&this.updateModel(e,null)}}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case`ArrowLeft`:this.onArrowLeftKeyOnMultiple(e);break;case`ArrowRight`:this.onArrowRightKeyOnMultiple(e);break;case`Backspace`:this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&V(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var t=void 0;if(this.overlayVisible)this.hide(!0);else{var n=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;V(n),t=n.value,this.dropdownMode===`blank`?this.search(e,``,`dropdown`):this.dropdownMode===`current`&&this.search(e,t,`dropdown`)}this.$emit(`dropdown-click`,{originalEvent:e,query:t})},onOptionSelect:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,r=this.getOptionValue(t);this.multiple?(this.$refs.focusInput.value=``,this.isSelected(t)||this.updateModel(e,[].concat(Wt(this.d_value||[]),[r]))):this.updateModel(e,r),this.$emit(`item-select`,{originalEvent:e,value:t}),this.$emit(`option-select`,{originalEvent:e,value:t}),n&&this.hide(!0)},onOptionMouseMove:function(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onOptionSelectRange:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(n===-1&&(n=this.findNearestSelectedOptionIndex(r,!0)),r===-1&&(r=this.findNearestSelectedOptionIndex(n)),n!==-1&&r!==-1){var i=Math.min(n,r),a=Math.max(n,r),o=this.visibleOptions.slice(i,a+1).filter(function(e){return t.isValidOption(e)}).filter(function(e){return!t.isSelected(e)}).map(function(e){return t.getOptionValue(e)});this.updateModel(e,[].concat(Wt(this.d_value||[]),Wt(o)))}},onClearClick:function(e){this.updateModel(e,null)},onOverlayClick:function(e){he.emit(`overlay-click`,{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case`Escape`:this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var t=this.focusedOptionIndex===-1?this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex():this.findNextOptionIndex(this.focusedOptionIndex);this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,t),this.changeFocusedOptionIndex(e,t),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var t=this.focusedOptionIndex===-1?this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex():this.findPrevOptionIndex(this.focusedOptionIndex);this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,t,this.startRangeIndex),this.changeFocusedOptionIndex(e,t),e.preventDefault()}},onArrowLeftKey:function(e){var t=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(v(t.value)&&this.$filled?(V(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var t=e.currentTarget,n=t.value.length,r=e.metaKey||e.ctrlKey,i=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&r&&this.onOptionSelectRange(e,i,this.startRangeIndex),t.setSelectionRange(0,e.shiftKey?n:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var t=e.currentTarget,n=t.value.length,r=e.metaKey||e.ctrlKey,i=this.findLastOptionIndex();this.multiple&&e.shiftKey&&r&&this.onOptionSelectRange(e,this.startRangeIndex,i),t.setSelectionRange(e.shiftKey?0:n,n),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&(this.multiple&&e.shiftKey?(this.onOptionSelectRange(e,this.focusedOptionIndex),e.preventDefault()):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&(e.target.value.trim()&&(this.updateModel(e,[].concat(Wt(this.d_value||[]),[e.target.value.trim()])),this.$refs.focusInput.value=``),e.preventDefault())},onSpaceKey:function(e){!this.autoOptionFocus&&this.focusedOptionIndex!==-1&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onBackspaceKey:function(e){if(this.multiple){if(W(this.d_value)&&!this.$refs.focusInput.value){var t=this.d_value[this.d_value.length-1],n=this.d_value.slice(0,-1);this.writeValue(n,e),this.$emit(`item-unselect`,{originalEvent:e,value:t}),this.$emit(`option-unselect`,{originalEvent:e,value:t})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,V(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){J.set(`overlay`,e,this.$primevue.config.zIndex.overlay),l(e,{position:`absolute`,top:`0`}),this.alignOverlay(),this.$attrSelector&&e.setAttribute(this.$attrSelector,``)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit(`show`)},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit(`hide`),this.overlay=null},onOverlayAfterLeave:function(e){J.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo===`self`?h(this.overlay,e):(this.overlay.style.minWidth=ee(e)+`px`,o(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.overlayVisible&&e.overlay&&e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new ae(this.$refs.container,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!p()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,t){return this.isValidOption(e)&&this.getOptionLabel(e)?.toLocaleLowerCase(this.searchLocale)===t.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return W(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,t){return K(e,t,this.equalityKey)},isSelected:function(e){var t=this,n=this.getOptionValue(e);return this.multiple?(this.d_value||[]).some(function(e){return t.isEquals(e,n)}):this.isEquals(this.d_value,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(t){return e.isValidOption(t)})},findLastOptionIndex:function(){var e=this;return T(this.visibleOptions,function(t){return e.isValidOption(t)})},findNextOptionIndex:function(e){var t=this,n=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(e){return t.isValidOption(e)}):-1;return n>-1?n+e+1:e},findPrevOptionIndex:function(e){var t=this,n=e>0?T(this.visibleOptions.slice(0,e),function(e){return t.isValidOption(e)}):-1;return n>-1?n:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(t){return e.isValidSelectedOption(t)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,t,n){t!=null&&(n===`input`&&t.trim().length===0||(this.searching=!0,this.$emit(`complete`,{originalEvent:e,query:t})))},removeOption:function(e,t){var n=this,r=this.d_value[t],i=this.d_value.filter(function(e,n){return n!==t}).map(function(e){return n.getOptionValue(e)});this.updateModel(e,i),this.$emit(`item-unselect`,{originalEvent:e,value:r}),this.$emit(`option-unselect`,{originalEvent:e,value:r}),this.dirty=!0,V(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[t],!1))},scrollInView:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var n=t===-1?e.focusedOptionId:`${e.$id}_${t}`,r=M(e.list,`li[id="${n}"]`);r?r.scrollIntoView&&r.scrollIntoView({block:`nearest`,inline:`start`}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(t===-1?e.focusedOptionIndex:t)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,t){this.writeValue(t,e),this.$emit(`change`,{originalEvent:e,value:t})},flatOptions:function(e){var t=this;return(e||[]).reduce(function(e,n,r){e.push({optionGroup:n,group:!0,index:r});var i=t.getOptionGroupChildren(n);return i&&i.forEach(function(t){return e.push(t)}),e},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,t){this.list=e,t&&t(e)},virtualScrollerRef:function(e){this.virtualScroller=e},findNextSelectedOptionIndex:function(e){var t=this,n=this.$filled&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(e){return t.isValidSelectedOption(e)}):-1;return n>-1?n+e+1:-1},findPrevSelectedOptionIndex:function(e){var t=this,n=this.$filled&&e>0?T(this.visibleOptions.slice(0,e),function(e){return t.isValidSelectedOption(e)}):-1;return n>-1?n:-1},findNearestSelectedOptionIndex:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=-1;return this.$filled&&(t?(n=this.findPrevSelectedOptionIndex(e),n=n===-1?this.findNextSelectedOptionIndex(e):n):(n=this.findNextSelectedOptionIndex(e),n=n===-1?this.findPrevSelectedOptionIndex(e):n)),n>-1?n:e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){return this.$filled?Q(this.d_value)===`object`?this.getOptionLabel(this.d_value)??this.d_value:this.d_value:``},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return W(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll(`{0}`,this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||``},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||``},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||``},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||``},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll(`{0}`,this.multiple?this.d_value.length:`1`):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex===-1?null:`${this.$id}_${this.focusedOptionIndex}`},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex===-1?null:`${this.$id}_multiple_option_${this.focusedMultipleOptionIndex}`},isClearIconVisible:function(){return this.showClear&&this.$filled&&!this.disabled&&!this.loading},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(t){return!e.isOptionGroup(t)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.$id+`_panel`},containerDataP:function(){return I({fluid:this.$fluid})},overlayDataP:function(){return I(Vt({},`portal-`+this.appendTo,`portal-`+this.appendTo))},inputMultipleDataP:function(){return I(Vt({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant===`filled`,empty:!this.$filled},this.size,this.size))}},components:{InputText:X,VirtualScroller:me,Portal:ne,Chip:Ft,ChevronDownIcon:pe,SpinnerIcon:_,TimesIcon:te},directives:{ripple:G}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function Zt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Qt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Zt(Object(n),!0).forEach(function(t){$t(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $t(e,t,n){return(t=en(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function en(e){var t=tn(e,`string`);return $(t)==`symbol`?t:t+``}function tn(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var nn=[`data-p`],rn=[`aria-activedescendant`,`data-p-has-dropdown`,`data-p`],an=[`id`,`aria-label`,`aria-setsize`,`aria-posinset`],on=[`id`,`placeholder`,`tabindex`,`disabled`,`aria-label`,`aria-labelledby`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`aria-invalid`],sn=[`data-p-has-dropdown`],cn=[`disabled`,`aria-expanded`,`aria-controls`],ln=[`id`,`data-p`],un=[`id`,`aria-label`],dn=[`id`],fn=[`id`,`aria-label`,`aria-selected`,`aria-disabled`,`aria-setsize`,`aria-posinset`,`onClick`,`onMousemove`,`data-p-selected`,`data-p-focused`,`data-p-disabled`];function pn(n,r,a,o,s,c){var l=e(`InputText`),d=e(`TimesIcon`),p=e(`Chip`),h=e(`SpinnerIcon`),_=e(`VirtualScroller`),v=e(`Portal`),C=A(`ripple`);return S(),t(`div`,L({ref:`container`,class:n.cx(`root`),style:n.sx(`root`),onClick:r[11]||=function(){return c.onContainerClick&&c.onContainerClick.apply(c,arguments)},"data-p":c.containerDataP},n.ptmi(`root`)),[n.multiple?q(``,!0):(S(),g(l,{key:0,ref:`focusInput`,id:n.inputId,type:`text`,name:n.$formName,class:P([n.cx(`pcInputText`),n.inputClass]),style:k(n.inputStyle),defaultValue:c.inputValue,placeholder:n.placeholder,tabindex:n.disabled?-1:n.tabindex,fluid:n.$fluid,disabled:n.disabled,size:n.size,invalid:n.invalid,variant:n.variant,autocomplete:`off`,role:`combobox`,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,"aria-haspopup":`listbox`,"aria-autocomplete":`list`,"aria-expanded":s.overlayVisible,"aria-controls":s.overlayVisible?c.panelId:void 0,"aria-activedescendant":s.focused?c.focusedOptionId:void 0,onFocus:c.onFocus,onBlur:c.onBlur,onKeydown:c.onKeyDown,onInput:c.onInput,onChange:c.onChange,unstyled:n.unstyled,"data-p-has-dropdown":n.dropdown,pt:n.ptm(`pcInputText`)},null,8,[`id`,`name`,`class`,`style`,`defaultValue`,`placeholder`,`tabindex`,`fluid`,`disabled`,`size`,`invalid`,`variant`,`aria-label`,`aria-labelledby`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`onFocus`,`onBlur`,`onKeydown`,`onInput`,`onChange`,`unstyled`,`data-p-has-dropdown`,`pt`])),c.isClearIconVisible?m(n.$slots,`clearicon`,{key:1,class:P(n.cx(`clearIcon`)),clearCallback:c.onClearClick},function(){return[x(d,L({class:[n.cx(`clearIcon`)],onClick:c.onClearClick},n.ptm(`clearIcon`)),null,16,[`class`,`onClick`])]}):q(``,!0),n.multiple?(S(),t(`ul`,L({key:2,ref:`multiContainer`,class:n.cx(`inputMultiple`),tabindex:`-1`,role:`listbox`,"aria-orientation":`horizontal`,"aria-activedescendant":s.focused?c.focusedMultipleOptionId:void 0,onFocus:r[5]||=function(){return c.onMultipleContainerFocus&&c.onMultipleContainerFocus.apply(c,arguments)},onBlur:r[6]||=function(){return c.onMultipleContainerBlur&&c.onMultipleContainerBlur.apply(c,arguments)},onKeydown:r[7]||=function(){return c.onMultipleContainerKeyDown&&c.onMultipleContainerKeyDown.apply(c,arguments)},"data-p-has-dropdown":n.dropdown,"data-p":c.inputMultipleDataP},n.ptm(`inputMultiple`)),[(S(!0),t(f,null,w(n.d_value,function(e,r){return S(),t(`li`,L({key:`${r}_${c.getOptionLabel(e)}`,id:n.$id+`_multiple_option_`+r,class:n.cx(`chipItem`,{i:r}),role:`option`,"aria-label":c.getOptionLabel(e),"aria-selected":!0,"aria-setsize":n.d_value.length,"aria-posinset":r+1},{ref_for:!0},n.ptm(`chipItem`)),[m(n.$slots,`chip`,L({class:n.cx(`pcChip`),value:e,index:r,removeCallback:function(e){return c.removeOption(e,r)}},{ref_for:!0},n.ptm(`pcChip`)),function(){return[x(p,{class:P(n.cx(`pcChip`)),label:c.getOptionLabel(e),removeIcon:n.chipIcon||n.removeTokenIcon,removable:``,unstyled:n.unstyled,onRemove:function(e){return c.removeOption(e,r)},"data-p-focused":s.focusedMultipleOptionIndex===r,pt:n.ptm(`pcChip`)},{removeicon:N(function(){return[m(n.$slots,n.$slots.chipicon?`chipicon`:`removetokenicon`,{class:P(n.cx(`chipIcon`)),index:r,removeCallback:function(e){return c.removeOption(e,r)}})]}),_:2},1032,[`class`,`label`,`removeIcon`,`unstyled`,`onRemove`,`data-p-focused`,`pt`])]})],16,an)}),128)),u(`li`,L({class:n.cx(`inputChip`),role:`option`},n.ptm(`inputChip`)),[u(`input`,L({ref:`focusInput`,id:n.inputId,type:`text`,style:n.inputStyle,class:n.inputClass,placeholder:n.placeholder,tabindex:n.disabled?-1:n.tabindex,disabled:n.disabled,autocomplete:`off`,role:`combobox`,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,"aria-haspopup":`listbox`,"aria-autocomplete":`list`,"aria-expanded":s.overlayVisible,"aria-controls":n.$id+`_list`,"aria-activedescendant":s.focused?c.focusedOptionId:void 0,"aria-invalid":n.invalid||void 0,onFocus:r[0]||=function(){return c.onFocus&&c.onFocus.apply(c,arguments)},onBlur:r[1]||=function(){return c.onBlur&&c.onBlur.apply(c,arguments)},onKeydown:r[2]||=function(){return c.onKeyDown&&c.onKeyDown.apply(c,arguments)},onInput:r[3]||=function(){return c.onInput&&c.onInput.apply(c,arguments)},onChange:r[4]||=function(){return c.onChange&&c.onChange.apply(c,arguments)}},n.ptm(`input`)),null,16,on)],16)],16,rn)):q(``,!0),s.searching||n.loading?m(n.$slots,n.$slots.loader?`loader`:`loadingicon`,{key:3,class:P(n.cx(`loader`))},function(){return[n.loader||n.loadingIcon?(S(),t(`i`,L({key:0,class:[`pi-spin`,n.cx(`loader`),n.loader,n.loadingIcon],"aria-hidden":`true`,"data-p-has-dropdown":n.dropdown},n.ptm(`loader`)),null,16,sn)):n.loading?(S(),g(h,L({key:1,class:n.cx(`loader`),spin:``,"aria-hidden":`true`,"data-p-has-dropdown":n.dropdown},n.ptm(`loader`)),null,16,[`class`,`data-p-has-dropdown`])):q(``,!0)]}):q(``,!0),m(n.$slots,n.$slots.dropdown?`dropdown`:`dropdownbutton`,{toggleCallback:function(e){return c.onDropdownClick(e)}},function(){return[n.dropdown?(S(),t(`button`,L({key:0,ref:`dropdownButton`,type:`button`,class:[n.cx(`dropdown`),n.dropdownClass],disabled:n.disabled,"aria-haspopup":`listbox`,"aria-expanded":s.overlayVisible,"aria-controls":c.panelId,onClick:r[8]||=function(){return c.onDropdownClick&&c.onDropdownClick.apply(c,arguments)}},n.ptm(`dropdown`)),[m(n.$slots,`dropdownicon`,{class:P(n.dropdownIcon)},function(){return[(S(),g(B(n.dropdownIcon?`span`:`ChevronDownIcon`),L({class:n.dropdownIcon},n.ptm(`dropdownIcon`)),null,16,[`class`]))]})],16,cn)):q(``,!0)]}),n.typeahead?(S(),t(`span`,L({key:4,role:`status`,"aria-live":`polite`,class:`p-hidden-accessible`},n.ptm(`hiddenSearchResult`),{"data-p-hidden-accessible":!0}),j(c.searchResultMessageText),17)):q(``,!0),x(v,{appendTo:n.appendTo},{default:N(function(){return[x(i,L({name:`p-anchored-overlay`,onEnter:c.onOverlayEnter,onAfterEnter:c.onOverlayAfterEnter,onLeave:c.onOverlayLeave,onAfterLeave:c.onOverlayAfterLeave},n.ptm(`transition`)),{default:N(function(){return[s.overlayVisible?(S(),t(`div`,L({key:0,ref:c.overlayRef,id:c.panelId,class:[n.cx(`overlay`),n.panelClass,n.overlayClass],style:Qt(Qt({},n.panelStyle),n.overlayStyle),onClick:r[9]||=function(){return c.onOverlayClick&&c.onOverlayClick.apply(c,arguments)},onKeydown:r[10]||=function(){return c.onOverlayKeyDown&&c.onOverlayKeyDown.apply(c,arguments)},"data-p":c.overlayDataP},n.ptm(`overlay`)),[m(n.$slots,`header`,{value:n.d_value,suggestions:c.visibleOptions}),u(`div`,L({class:n.cx(`listContainer`),style:{"max-height":c.virtualScrollerDisabled?n.scrollHeight:``}},n.ptm(`listContainer`)),[x(_,L({ref:c.virtualScrollerRef},n.virtualScrollerOptions,{style:{height:n.scrollHeight},items:c.visibleOptions,tabindex:-1,disabled:c.virtualScrollerDisabled,pt:n.ptm(`virtualScroller`)}),b({content:N(function(e){var r=e.styleClass,i=e.contentRef,a=e.items,o=e.getItemOptions,l=e.contentStyle,d=e.itemSize;return[u(`ul`,L({ref:function(e){return c.listRef(e,i)},id:n.$id+`_list`,class:[n.cx(`list`),r],style:l,role:`listbox`,"aria-label":c.listAriaLabel},n.ptm(`list`)),[(S(!0),t(f,null,w(a,function(e,r){return S(),t(f,{key:c.getOptionRenderKey(e,c.getOptionIndex(r,o))},[c.isOptionGroup(e)?(S(),t(`li`,L({key:0,id:n.$id+`_`+c.getOptionIndex(r,o),style:{height:d?d+`px`:void 0},class:n.cx(`optionGroup`),role:`option`},{ref_for:!0},n.ptm(`optionGroup`)),[m(n.$slots,`optiongroup`,{option:e.optionGroup,index:c.getOptionIndex(r,o)},function(){return[y(j(c.getOptionGroupLabel(e.optionGroup)),1)]})],16,dn)):E((S(),t(`li`,L({key:1,id:n.$id+`_`+c.getOptionIndex(r,o),style:{height:d?d+`px`:void 0},class:n.cx(`option`,{option:e,i:r,getItemOptions:o}),role:`option`,"aria-label":c.getOptionLabel(e),"aria-selected":c.isSelected(e),"aria-disabled":c.isOptionDisabled(e),"aria-setsize":c.ariaSetSize,"aria-posinset":c.getAriaPosInset(c.getOptionIndex(r,o)),onClick:function(t){return c.onOptionSelect(t,e)},onMousemove:function(e){return c.onOptionMouseMove(e,c.getOptionIndex(r,o))},"data-p-selected":c.isSelected(e),"data-p-focused":s.focusedOptionIndex===c.getOptionIndex(r,o),"data-p-disabled":c.isOptionDisabled(e)},{ref_for:!0},c.getPTOptions(e,o,r,`option`)),[m(n.$slots,`option`,{option:e,index:c.getOptionIndex(r,o)},function(){return[y(j(c.getOptionLabel(e)),1)]})],16,fn)),[[C]])],64)}),128)),n.showEmptyMessage&&(!a||a&&a.length===0)?(S(),t(`li`,L({key:0,class:n.cx(`emptyMessage`),role:`option`},n.ptm(`emptyMessage`)),[m(n.$slots,`empty`,{},function(){return[y(j(c.searchResultMessageText),1)]})],16)):q(``,!0)],16,un)]}),_:2},[n.$slots.loader?{name:`loader`,fn:N(function(e){var t=e.options;return[m(n.$slots,`loader`,{options:t})]}),key:`0`}:void 0]),1040,[`style`,`items`,`disabled`,`pt`])],16),m(n.$slots,`footer`,{value:n.d_value,suggestions:c.visibleOptions}),u(`span`,L({role:`status`,"aria-live":`polite`,class:`p-hidden-accessible`},n.ptm(`hiddenSelectedMessage`),{"data-p-hidden-accessible":!0}),j(c.selectedMessageText),17)],16,ln)):q(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`])],16,nn)}Xt.render=pn;var mn={class:`flex flex-col gap-4 pt-2`},hn={class:`flex rounded-xl overflow-hidden border border-gray-200 text-sm font-medium`},gn={class:`flex flex-col gap-1`},_n={class:`flex gap-2`},vn={class:`flex items-center gap-2`},yn={class:`w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0`},bn={class:`text-pink-600 font-bold text-xs`},xn={class:`text-sm font-medium`},Sn={class:`text-xs text-gray-400`},Cn={key:0,class:`mt-2 border border-gray-200 rounded-xl p-3 bg-gray-50 flex flex-col gap-3`},wn={class:`grid grid-cols-2 gap-2`},Tn={class:`flex flex-col gap-1`},En={class:`flex flex-col gap-1`},Dn={class:`flex flex-col gap-1`},On={class:`flex flex-col gap-1`},kn={class:`flex justify-end gap-2`},An={class:`flex flex-col gap-1`},jn={class:`flex items-center gap-2`},Mn={class:`flex-1`},Nn={key:0,class:`text-xs text-gray-400 ml-auto`},Pn={key:0,class:`text-xs text-gray-500 flex items-center gap-1 mt-0.5`},Fn={class:`font-semibold text-gray-700`},In={key:1,class:`flex flex-col gap-1`},Ln={key:2,class:`flex flex-col gap-1`},Rn={class:`flex gap-2`},zn=[`onClick`],Bn={class:`grid grid-cols-2 gap-3`},Vn={class:`flex flex-col gap-1`},Hn={class:`flex flex-col gap-1`},Un={class:`flex flex-col gap-1`},Wn={class:`flex flex-col gap-1`},Gn={class:`flex justify-between w-full`},Kn={class:`flex gap-2 ml-auto`},qn=a({__name:`AppointmentDialog`,props:{visible:{type:Boolean},appointment:{},initialTime:{},initialBlocked:{type:Boolean}},emits:[`update:visible`,`saved`,`deleted`],setup(e,{emit:n}){let r=e,i=n,a=ce(),o=Y(),c=ue(),l=oe(),d=z(!1),p=s(()=>!!r.appointment),m=z(``),h=z([]),_=s(()=>c.clients.map(e=>({id:e.id,firstName:e.firstName,lastName:e.lastName,phone:e.phone,fullName:`${e.firstName} ${e.lastName}`})));function v(e){let t=e.query.toLowerCase();h.value=_.value.filter(e=>e.fullName.toLowerCase().includes(t)||e.phone.includes(t))}function b(e){V.clientId=e.value.id,V.clientName=e.value.fullName}let C=z(!1),T=z(!1),M=F({firstName:``,lastName:``,phone:``,notes:``});function I(){C.value=!1,M.firstName=``,M.lastName=``,M.phone=``,M.notes=``}async function L(){T.value=!0;try{await c.addClient({firstName:M.firstName,lastName:M.lastName,phone:M.phone,notes:M.notes});let e=c.clients.find(e=>e.firstName===M.firstName&&e.lastName===M.lastName&&e.phone===M.phone);if(e){let t={id:e.id,firstName:e.firstName,lastName:e.lastName,phone:e.phone,fullName:`${e.firstName} ${e.lastName}`};m.value=t,V.clientId=e.id,V.clientName=t.fullName}I()}finally{T.value=!1}}let B=[{value:`confirmed`,label:`Potrjeno`,icon:`pi pi-check-circle`,activeClass:`border-green-400 text-green-700 bg-green-50`},{value:`cancelled`,label:`Odpovedano`,icon:`pi pi-times-circle`,activeClass:`border-red-400 text-red-700 bg-red-50`},{value:`no-show`,label:`Ni prišel`,icon:`pi pi-user-minus`,activeClass:`border-orange-400 text-orange-700 bg-orange-50`}],V=F({blocked:!1,clientId:``,clientName:``,typeId:``,status:`confirmed`,date:new Date,startTime:new Date,duration:60,notes:``}),ee=s(()=>a.categories.map(e=>({label:e.name,items:a.appointmentTypes.filter(t=>t.categoryId===e.id).map(t=>({label:t.name,value:t.id,color:t.color??e.color,duration:t.duration,price:t.price??null}))})).filter(e=>e.items.length>0));function H(){let e=a.getTypeById(V.typeId);e&&(V.duration=e.duration)}let U=s(()=>V.typeId?a.getTypeById(V.typeId)?.price??null:null);R(()=>r.visible,e=>{if(e)if(C.value=!1,I(),r.appointment)V.blocked=r.appointment.blocked??!1,V.clientId=``,V.clientName=r.appointment.clientName,m.value=r.appointment.clientName,V.typeId=r.appointment.typeId,V.status=r.appointment.status??`confirmed`,V.date=new Date(r.appointment.startTime),V.startTime=new Date(r.appointment.startTime),V.duration=(r.appointment.endTime.getTime()-r.appointment.startTime.getTime())/6e4,V.notes=r.appointment.notes??``;else{let e=r.initialTime??new Date;V.blocked=r.initialBlocked??!1,V.clientId=``,V.clientName=``,m.value=``,V.typeId=``,V.status=`confirmed`,V.date=new Date(e),V.startTime=new Date(e),V.duration=60,V.notes=``}});async function W(){d.value=!0;try{let e=new Date(V.date);e.setHours(V.startTime.getHours(),V.startTime.getMinutes(),0,0);let t=new Date(e.getTime()+V.duration*6e4),n;if(V.blocked)n={blocked:!0,status:V.status,clientName:V.clientName,typeId:``,typeName:``,categoryId:``,color:`#e5e7eb`,notes:V.notes,startTime:e,endTime:t};else{let r=a.getTypeById(V.typeId),i=r?a.getCategoryById(r.categoryId):null;n={blocked:!1,status:V.status,clientName:V.clientName,typeId:V.typeId,typeName:r?.name??``,categoryId:r?.categoryId??``,color:r?.color??i?.color??`#94a3b8`,...r?.price==null?{}:{price:r.price},notes:V.notes,startTime:e,endTime:t}}r.appointment?await o.updateAppointment(r.appointment.id,n):await o.addAppointment(n),i(`saved`)}finally{d.value=!1}}function G(){r.appointment&&l.require({message:`Izbriši "${r.appointment.clientName}"?`,header:`Potrdi brisanje`,icon:`pi pi-exclamation-triangle`,rejectLabel:`Prekliči`,acceptLabel:`Izbriši`,acceptClass:`p-button-danger`,accept:async()=>{await o.deleteAppointment(r.appointment.id),i(`deleted`)}})}return(n,r)=>{let i=A(`tooltip`);return S(),g(O(re),{visible:e.visible,"onUpdate:visible":r[16]||=e=>n.$emit(`update:visible`,e),header:p.value?V.blocked?`Uredi blokiran čas`:`Uredi naročilo`:V.blocked?`Blokiran čas`:`Novo naročilo`,modal:``,class:`w-full max-w-md`},{footer:N(()=>[u(`div`,Gn,[p.value?(S(),g(O(D),{key:0,label:`Izbriši`,severity:`danger`,text:``,icon:`pi pi-trash`,onClick:G})):q(``,!0),u(`div`,Kn,[x(O(D),{label:`Prekliči`,text:``,onClick:r[15]||=e=>n.$emit(`update:visible`,!1)}),x(O(D),{label:`Shrani`,disabled:V.blocked?!V.clientName:!V.clientName||!V.typeId,loading:d.value,onClick:W},null,8,[`disabled`,`loading`])])])]),default:N(()=>[u(`div`,mn,[u(`div`,hn,[u(`button`,{class:P([`flex-1 py-2 flex items-center justify-center gap-2 transition-colors`,V.blocked?`bg-white text-gray-500 hover:bg-gray-50`:`bg-pink-500 text-white`]),onClick:r[0]||=e=>V.blocked=!1},[...r[17]||=[u(`i`,{class:`pi pi-calendar`},null,-1),y(` Naročilo `,-1)]],2),u(`button`,{class:P([`flex-1 py-2 flex items-center justify-center gap-2 transition-colors border-l border-gray-200`,V.blocked?`bg-gray-700 text-white`:`bg-white text-gray-500 hover:bg-gray-50`]),onClick:r[1]||=e=>V.blocked=!0},[...r[18]||=[u(`i`,{class:`pi pi-lock`},null,-1),y(` Blokiran čas `,-1)]],2)]),V.blocked?(S(),t(`div`,In,[r[28]||=u(`label`,{class:`text-sm font-medium text-gray-600`},`Naziv`,-1),x(O(X),{modelValue:V.clientName,"onUpdate:modelValue":r[10]||=e=>V.clientName=e,placeholder:`npr. Odmor, Sestanek…`,class:`w-full`},null,8,[`modelValue`])])):(S(),t(f,{key:0},[u(`div`,gn,[r[24]||=u(`label`,{class:`text-sm font-medium text-gray-600`},`Stranka`,-1),u(`div`,_n,[x(O(Xt),{modelValue:m.value,"onUpdate:modelValue":r[2]||=e=>m.value=e,suggestions:h.value,"option-label":`fullName`,placeholder:`Išči stranko...`,class:`flex-1`,"force-selection":``,dropdown:``,onComplete:v,onItemSelect:b,onClear:r[3]||=e=>{V.clientId=``,V.clientName=``}},{option:N(({option:e})=>[u(`div`,vn,[u(`div`,yn,[u(`span`,bn,j(e.firstName[0])+j(e.lastName[0]),1)]),u(`div`,null,[u(`p`,xn,j(e.fullName),1),u(`p`,Sn,j(e.phone),1)])])]),_:1},8,[`modelValue`,`suggestions`]),E(x(O(D),{icon:`pi pi-user-plus`,outlined:``,onClick:r[4]||=e=>C.value=!C.value,class:P(C.value?`ring-2 ring-pink-400`:``)},null,8,[`class`]),[[i,`Dodaj novo stranko`,void 0,{top:!0}]])]),C.value?(S(),t(`div`,Cn,[r[23]||=u(`p`,{class:`text-xs font-semibold text-gray-500 uppercase tracking-wide`},`Nova stranka`,-1),u(`div`,wn,[u(`div`,Tn,[r[19]||=u(`label`,{class:`text-xs font-medium text-gray-500`},`Ime *`,-1),x(O(X),{modelValue:M.firstName,"onUpdate:modelValue":r[5]||=e=>M.firstName=e,placeholder:`Ana`,size:`small`,class:`w-full`},null,8,[`modelValue`])]),u(`div`,En,[r[20]||=u(`label`,{class:`text-xs font-medium text-gray-500`},`Priimek *`,-1),x(O(X),{modelValue:M.lastName,"onUpdate:modelValue":r[6]||=e=>M.lastName=e,placeholder:`Novak`,size:`small`,class:`w-full`},null,8,[`modelValue`])])]),u(`div`,Dn,[r[21]||=u(`label`,{class:`text-xs font-medium text-gray-500`},`Telefon *`,-1),x(O(X),{modelValue:M.phone,"onUpdate:modelValue":r[7]||=e=>M.phone=e,placeholder:`+386 41 123 456`,size:`small`,class:`w-full`},null,8,[`modelValue`])]),u(`div`,On,[r[22]||=u(`label`,{class:`text-xs font-medium text-gray-500`},`Opomba`,-1),x(O(X),{modelValue:M.notes,"onUpdate:modelValue":r[8]||=e=>M.notes=e,placeholder:`Alergije, preference...`,size:`small`,class:`w-full`},null,8,[`modelValue`])]),u(`div`,kn,[x(O(D),{label:`Prekliči`,text:``,size:`small`,onClick:I}),x(O(D),{label:`Dodaj stranko`,size:`small`,icon:`pi pi-check`,disabled:!M.firstName||!M.lastName||!M.phone,loading:T.value,onClick:L},null,8,[`disabled`,`loading`])])])):q(``,!0)]),u(`div`,An,[r[27]||=u(`label`,{class:`text-sm font-medium text-gray-600`},`Vrsta naročila`,-1),x(O(ge),{modelValue:V.typeId,"onUpdate:modelValue":r[9]||=e=>V.typeId=e,options:ee.value,"option-label":`label`,"option-value":`value`,"option-group-label":`label`,"option-group-children":`items`,placeholder:`Izberi vrsto`,class:`w-full`,onChange:H},{option:N(({option:e})=>[u(`div`,jn,[u(`span`,{class:`w-3 h-3 rounded-full flex-shrink-0`,style:k({backgroundColor:e.color})},null,4),u(`span`,Mn,j(e.label),1),e.price==null?q(``,!0):(S(),t(`span`,Nn,j(e.price.toFixed(2))+` €`,1))])]),_:1},8,[`modelValue`,`options`]),U.value==null?q(``,!0):(S(),t(`p`,Pn,[r[25]||=u(`i`,{class:`pi pi-tag`,style:{"font-size":`11px`}},null,-1),r[26]||=y(` Cena: `,-1),u(`span`,Fn,j(U.value.toFixed(2))+` €`,1)]))])],64)),V.blocked?q(``,!0):(S(),t(`div`,Ln,[r[29]||=u(`label`,{class:`text-sm font-medium text-gray-600`},`Status`,-1),u(`div`,Rn,[(S(),t(f,null,w(B,e=>u(`button`,{key:e.value,class:P([`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors`,V.status===e.value?e.activeClass:`border-gray-200 text-gray-400 bg-white hover:bg-gray-50`]),onClick:t=>V.status=e.value},[u(`i`,{class:P(e.icon),style:{"font-size":`11px`}},null,2),y(` `+j(e.label),1)],10,zn)),64))])])),u(`div`,Bn,[u(`div`,Vn,[r[30]||=u(`label`,{class:`text-sm font-medium text-gray-600`},`Datum`,-1),x(O(_e),{modelValue:V.date,"onUpdate:modelValue":r[11]||=e=>V.date=e,"date-format":`dd.mm.yy`,class:`w-full`},null,8,[`modelValue`])]),u(`div`,Hn,[r[31]||=u(`label`,{class:`text-sm font-medium text-gray-600`},`Čas začetka`,-1),x(O(_e),{modelValue:V.startTime,"onUpdate:modelValue":r[12]||=e=>V.startTime=e,"time-only":``,"hour-format":`24`,"step-minute":5,class:`w-full`},null,8,[`modelValue`])])]),u(`div`,Un,[r[32]||=u(`label`,{class:`text-sm font-medium text-gray-600`},`Trajanje (minute)`,-1),x(O(le),{modelValue:V.duration,"onUpdate:modelValue":r[13]||=e=>V.duration=e,min:5,step:5,class:`w-full`},null,8,[`modelValue`])]),u(`div`,Wn,[r[33]||=u(`label`,{class:`text-sm font-medium text-gray-600`},`Opombe`,-1),x(O(ve),{modelValue:V.notes,"onUpdate:modelValue":r[14]||=e=>V.notes=e,rows:`2`,placeholder:`Opcijsko...`,class:`w-full`},null,8,[`modelValue`])])])]),_:1},8,[`visible`,`header`])}}}),Jn={class:`flex flex-col h-screen bg-white overflow-hidden`},Yn={class:`flex-1 min-h-0 overflow-hidden flex flex-col`},Xn=a({__name:`CalendarView`,setup(e){let{currentDate:n,view:r,goToToday:i,navigate:a,weekDays:o,workWeekDays:l,monthDays:d,timeSlots:f,headerLabel:p,SLOT_HEIGHT_PX:m,topForTime:h,heightForDuration:_,snapToFiveMinutes:v,appointmentsForDay:y,isSameDay:b,isCurrentMonth:w}=ye(),T=Y(),E=ce(),D=ue(),k=z(window.innerWidth),A=s(()=>k.value<640);function j(){k.value=window.innerWidth}let M=z(!1),N=z(null),P=z(null),F=z(!1);function I(e){N.value=null,P.value=e,F.value=!1,M.value=!0}function L(e){N.value=e,P.value=null,F.value=!1,M.value=!0}function R(){N.value=null,P.value=new Date,F.value=!0,M.value=!0}return c(()=>{T.subscribe(),E.subscribeAll(),D.subscribe(),window.addEventListener(`resize`,j)}),C(()=>{T.unsubscribeAll(),E.unsubscribeAll(),D.unsubscribeAll(),window.removeEventListener(`resize`,j)}),(e,s)=>(S(),t(`div`,Jn,[x(Ge,{"header-label":O(p),view:O(r),onNavigate:O(a),onToday:O(i),onChangeView:s[0]||=e=>r.value=e,onBlockTime:R},null,8,[`header-label`,`view`,`onNavigate`,`onToday`]),u(`div`,Yn,[O(r)===`day`?(S(),g(bt,{key:0,date:O(n),appointments:O(T).appointments,"time-slots":O(f),"slot-height":O(m),"top-for-time":O(h),"height-for-duration":O(_),"snap-to-five":O(v),"appointments-for-day":O(y),onAddAppointment:I,onEditAppointment:L},null,8,[`date`,`appointments`,`time-slots`,`slot-height`,`top-for-time`,`height-for-duration`,`snap-to-five`,`appointments-for-day`])):O(r)===`week`?(S(),g(wt,{key:1,"week-days":A.value?O(l):O(o),appointments:O(T).appointments,"time-slots":O(f),"slot-height":O(m),"top-for-time":O(h),"height-for-duration":O(_),"snap-to-five":O(v),"appointments-for-day":O(y),onAddAppointment:I,onEditAppointment:L},null,8,[`week-days`,`appointments`,`time-slots`,`slot-height`,`top-for-time`,`height-for-duration`,`snap-to-five`,`appointments-for-day`])):O(r)===`month`?(S(),g(Nt,{key:2,"current-date":O(n),"month-days":O(d),appointments:O(T).appointments,"is-same-day":O(b),"is-current-month":O(w),"appointments-for-day":O(y),onAddAppointment:I,onEditAppointment:L},null,8,[`current-date`,`month-days`,`appointments`,`is-same-day`,`is-current-month`,`appointments-for-day`])):q(``,!0)]),x(qn,{visible:M.value,"onUpdate:visible":s[1]||=e=>M.value=e,appointment:N.value,"initial-time":P.value,"initial-blocked":F.value,onSaved:s[2]||=e=>M.value=!1,onDeleted:s[3]||=e=>M.value=!1},null,8,[`visible`,`appointment`,`initial-time`,`initial-blocked`])]))}});export{Xn as default};