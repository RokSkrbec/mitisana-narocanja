import{$ as e,$t as t,Bt as n,C as r,Ct as i,Ft as a,Gt as o,Ht as s,Jt as c,Kt as l,L as u,Lt as d,O as f,Ot as p,Pt as m,Qt as h,Rt as g,S as _,St as v,T as y,Tt as b,Vt as x,Wt as S,Xt as C,Yt as w,Zt as T,an as E,b as D,cn as O,dt as k,en as A,fn as j,in as M,ln as N,mt as P,nn as F,nt as I,on as L,pn as R,pt as z,q as B,sn as ee,tn as V,un as H,vt as U,wt as W,x as G,y as te,z as ne,zt as K}from"./config-DW9ciqWF.js";import{n as q,t as re}from"./portal-yI3mSohz.js";import{a as ie,n as ae,o as oe,s as se,t as ce}from"./index-Caf_nhdx.js";import{t as J}from"./appointments-D0vbDmh-.js";import{n as le,t as ue}from"./inputnumber-CfYnqCXG.js";import{t as de}from"./clients-C1RTiFFc.js";import{n as fe,r as pe,t as Y}from"./inputtext-CbVjz0Me.js";import{i as me,n as he,r as ge,t as _e}from"./select-CrYwk2gY.js";import{t as ve}from"./datepicker-BZigKFIp.js";import{t as ye}from"./textarea-BnnEQoDU.js";function be(){let e=O(new Date),t=O(`week`);function n(){e.value=new Date}function r(n){let r=new Date(e.value);t.value===`day`?r.setDate(r.getDate()+n):t.value===`week`?r.setDate(r.getDate()+n*7):r.setMonth(r.getMonth()+n),e.value=r}let i=d(()=>{let t=new Date(e.value),n=t.getDay(),r=t.getDate()-n+(n===0?-6:1);return t.setDate(r),t.setHours(0,0,0,0),t}),a=d(()=>Array.from({length:7},(e,t)=>{let n=new Date(i.value);return n.setDate(n.getDate()+t),n})),o=d(()=>{let t=e.value.getFullYear(),n=e.value.getMonth(),r=new Date(t,n,1),i=new Date(t,n+1,0),a=new Date(r),o=a.getDay();a.setDate(a.getDate()-(o===0?6:o-1));let s=new Date(i),c=s.getDay();c!==0&&s.setDate(s.getDate()+(7-c));let l=[],u=new Date(a);for(;u<=s;)l.push(new Date(u)),u.setDate(u.getDate()+1);return l}),s=d(()=>{let e=[];for(let t=0;t<24;t++)for(let n=0;n<60;n+=5)e.push(`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`);return e}),c=d(()=>{let n=`sl-SI`;if(t.value===`day`)return e.value.toLocaleDateString(n,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`});if(t.value===`week`){let e=a.value[0],t=a.value[6];return`${e.toLocaleDateString(n,{day:`numeric`,month:`short`})} – ${t.toLocaleDateString(n,{day:`numeric`,month:`short`,year:`numeric`})}`}return e.value.toLocaleDateString(n,{month:`long`,year:`numeric`})});function l(e){return e.getHours()*60+e.getMinutes()}function u(e){return l(e)/5*12}function f(e,t){return(t.getTime()-e.getTime())/6e4/5*12}function p(e){let t=new Date(e),n=t.getMinutes();return t.setMinutes(Math.floor(n/5)*5,0,0),t}function m(e,t){return e.filter(e=>{let n=e.startTime;return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate()})}function h(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function g(t){return t.getMonth()===e.value.getMonth()}return{currentDate:e,view:t,goToToday:n,navigate:r,startOfWeek:i,weekDays:a,monthDays:o,timeSlots:s,headerLabel:c,SLOT_HEIGHT_PX:12,topForTime:u,heightForDuration:f,snapToFiveMinutes:p,appointmentsForDay:m,isSameDay:h,isCurrentMonth:g,minutesFromMidnight:l}}var xe=f.extend({name:`togglebutton`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-togglebutton p-component`,{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-fluid":n.fluid,"p-togglebutton-sm p-inputfield-sm":n.size===`small`,"p-togglebutton-lg p-inputfield-lg":n.size===`large`}]},content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,label:`p-togglebutton-label`}}),Se={name:`BaseToggleButton`,extends:pe,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:`Yes`},offLabel:{type:String,default:`No`},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:xe,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Ce(e,t,n){return(t=we(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(e){var t=Te(e,`string`);return X(t)==`symbol`?t:t+``}function Te(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Ee={name:`ToggleButton`,extends:Se,inheritAttrs:!1,emits:[`change`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit(`change`,e))},onBlur:function(e){var t,n;(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return b(this.onLabel)&&b(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:`\xA0`},dataP:function(){return P(Ce({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:_}},De=[`tabindex`,`disabled`,`aria-pressed`,`aria-label`,`aria-labelledby`,`data-p-checked`,`data-p-disabled`,`data-p`],Oe=[`data-p`];function ke(e,r,i,a,o,s){var l=V(`ripple`);return L((T(),x(`button`,c({type:`button`,class:e.cx(`root`),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:r[0]||=function(){return s.onChange&&s.onChange.apply(s,arguments)},onBlur:r[1]||=function(){return s.onBlur&&s.onBlur.apply(s,arguments)}},s.getPTOptions(`root`),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":s.active,"data-p-disabled":e.disabled,"data-p":s.dataP}),[g(`span`,c({class:e.cx(`content`)},s.getPTOptions(`content`),{"data-p":s.dataP}),[t(e.$slots,`default`,{},function(){return[t(e.$slots,`icon`,{value:e.d_value,class:H(e.cx(`icon`))},function(){return[e.onIcon||e.offIcon?(T(),x(`span`,c({key:0,class:[e.cx(`icon`),e.d_value?e.onIcon:e.offIcon]},s.getPTOptions(`icon`)),null,16)):n(``,!0)]}),g(`span`,c({class:e.cx(`label`)},s.getPTOptions(`label`)),R(s.label),17)]})],16,Oe)],16,De)),[[l]])}Ee.render=ke;var Ae=f.extend({name:`selectbutton`,style:`
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
`,classes:{root:function(e){var t=e.props,n=e.instance;return[`p-selectbutton p-component`,{"p-invalid":n.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),je={name:`BaseSelectButton`,extends:pe,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Ae,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Me(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Fe(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function Ne(e){return Le(e)||Ie(e)||Fe(e)||Pe()}function Pe(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(e,t){if(e){if(typeof e==`string`)return Re(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Re(e,t):void 0}}function Ie(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Le(e){if(Array.isArray(e))return Re(e)}function Re(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var ze={name:`SelectButton`,extends:je,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?W(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?W(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?W(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?W(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple)if(i){if(o=this.d_value.filter(function(e){return!v(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(Ne(this.d_value),[a]):[a];else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=Me(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(v(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=v(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return P({invalid:this.$invalid})}},directives:{ripple:_},components:{ToggleButton:Ee}},Be=[`aria-labelledby`,`data-p`];function Ve(e,n,r,i,o,l){var u=A(`ToggleButton`);return T(),x(`div`,c({class:e.cx(`root`),role:`group`,"aria-labelledby":e.ariaLabelledby},e.ptmi(`root`),{"data-p":l.dataP}),[(T(!0),x(a,null,h(e.options,function(n,r){return T(),K(u,{key:l.getOptionRenderKey(n),modelValue:l.isSelected(n),onLabel:l.getOptionLabel(n),offLabel:l.getOptionLabel(n),disabled:e.disabled||l.isOptionDisabled(n),unstyled:e.unstyled,size:e.size,readonly:l.isOptionReadonly(n),onChange:function(e){return l.onOptionSelect(e,n,r)},pt:e.ptm(`pcToggleButton`)},s({_:2},[e.$slots.option?{name:`default`,fn:E(function(){return[t(e.$slots,`option`,{option:n,index:r},function(){return[g(`span`,c({ref_for:!0},e.ptm(`pcToggleButton`).label),R(l.getOptionLabel(n)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,Be)}ze.render=Ve;var He={class:`border-b border-gray-200 bg-white z-10 flex-shrink-0`},Ue={class:`flex items-center gap-1 px-2 py-1.5`},We={class:`flex-1 text-xs font-semibold text-gray-700 text-center truncate px-1`},Ge={class:`flex justify-center px-2 pb-1.5`},Ke=l({__name:`CalendarToolbar`,props:{headerLabel:{},view:{}},emits:[`navigate`,`today`,`change-view`,`block-time`],setup(e){let t=[{label:`Dan`,value:`day`},{label:`Teden`,value:`week`},{label:`Mesec`,value:`month`}],n=ce(),r=te();async function i(){await n.logout(),r.push(`/login`)}return(n,r)=>{let a=A(`router-link`),s=V(`tooltip`);return T(),x(`header`,He,[g(`div`,Ue,[o(N(G),{icon:`pi pi-chevron-left`,text:``,rounded:``,size:`small`,onClick:r[0]||=e=>n.$emit(`navigate`,-1)}),o(N(G),{label:`Danes`,text:``,size:`small`,class:`!px-2 !text-xs`,onClick:r[1]||=e=>n.$emit(`today`)}),o(N(G),{icon:`pi pi-chevron-right`,text:``,rounded:``,size:`small`,onClick:r[2]||=e=>n.$emit(`navigate`,1)}),g(`span`,We,R(e.headerLabel),1),L(o(N(G),{icon:`pi pi-lock`,text:``,rounded:``,size:`small`,severity:`secondary`,onClick:r[3]||=e=>n.$emit(`block-time`)},null,512),[[s,`Blokiraj čas`,void 0,{bottom:!0}]]),o(a,{to:`/clients`},{default:E(()=>[L(o(N(G),{icon:`pi pi-users`,text:``,rounded:``,size:`small`},null,512),[[s,`Stranke`,void 0,{bottom:!0}]])]),_:1}),o(a,{to:`/statistics`},{default:E(()=>[L(o(N(G),{icon:`pi pi-chart-bar`,text:``,rounded:``,size:`small`},null,512),[[s,`Statistika`,void 0,{bottom:!0}]])]),_:1}),o(a,{to:`/settings`},{default:E(()=>[L(o(N(G),{icon:`pi pi-cog`,text:``,rounded:``,size:`small`},null,512),[[s,`Nastavitve`,void 0,{bottom:!0}]])]),_:1}),L(o(N(G),{icon:`pi pi-sign-out`,text:``,rounded:``,size:`small`,severity:`secondary`,onClick:i},null,512),[[s,`Odjava`,void 0,{bottom:!0}]])]),g(`div`,Ge,[o(N(ze),{"model-value":e.view,options:t,"option-label":`label`,"option-value":`value`,size:`small`,"onUpdate:modelValue":r[4]||=e=>n.$emit(`change-view`,e)},null,8,[`model-value`])])])}}});function qe(e){let t=J(),n=O(null),r=O(0);function i(t,i){n.value=t,i.dataTransfer&&(i.dataTransfer.effectAllowed=`move`,i.dataTransfer.setData(`appointmentId`,t.id));let a=i.currentTarget.getBoundingClientRect(),o=i.clientY-a.top;r.value=Math.floor(o/e)*5}function a(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=`move`)}async function o(i,a,o){if(i.preventDefault(),!n.value)return;let s=o.getBoundingClientRect(),c=i.clientY-s.top,l=Math.floor(c/e)*5-r.value,u=new Date(a);u.setHours(0,0,0,0),u.setMinutes(Math.max(0,l));let d=(n.value.endTime.getTime()-n.value.startTime.getTime())/6e4,f=new Date(u.getTime()+d*6e4);await t.updateAppointment(n.value.id,{startTime:u,endTime:f}),n.value=null}function s(){n.value=null}return{dragging:n,onDragStart:i,onDragOver:a,onDrop:o,onDragEnd:s}}var Je=[`draggable`],Ye={class:`flex items-start gap-1 h-full min-w-0`},Xe={key:0,class:`pi pi-lock text-gray-400 flex-shrink-0 mt-0.5`,style:{"font-size":`10px`}},Ze={key:1,class:`pi pi-times-circle flex-shrink-0 mt-0.5 opacity-80`,style:{"font-size":`10px`}},Qe={key:2,class:`pi pi-user-minus flex-shrink-0 mt-0.5 opacity-80`,style:{"font-size":`10px`}},$e={class:`min-w-0 flex-1`},et={key:0,class:`opacity-80 truncate leading-tight`},tt=l({__name:`AppointmentBlock`,props:{appointment:{},top:{},height:{},resizing:{type:Boolean}},emits:[`drag-start`,`drag-end`,`edit`,`resize-start`,`touch-drag-start`],setup(e){function t(e){return e.toLocaleTimeString(`sl-SI`,{hour:`2-digit`,minute:`2-digit`})}return(r,i)=>(T(),x(`div`,{class:H([`absolute left-1 right-1 rounded-lg px-2 py-1 text-xs font-medium shadow select-none overflow-hidden group`,[e.resizing?`cursor-ns-resize`:`cursor-grab`,e.appointment.blocked?`text-gray-600`:`text-white`,e.appointment.status===`cancelled`?`opacity-50`:``]]),style:j({top:`${e.top}px`,height:`${e.height}px`,backgroundColor:e.appointment.blocked?`#e5e7eb`:e.appointment.color,backgroundImage:e.appointment.blocked?`repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.06) 4px, rgba(0,0,0,0.06) 8px)`:e.appointment.status===`cancelled`?`repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(0,0,0,0.15) 4px, rgba(0,0,0,0.15) 8px)`:`none`,borderLeft:e.appointment.blocked?`3px solid #9ca3af`:e.appointment.status===`no-show`?`3px solid rgba(0,0,0,0.35)`:`none`,minHeight:`20px`,zIndex:e.resizing?30:10}),draggable:!e.resizing,onDragstart:i[2]||=t=>!e.resizing&&r.$emit(`drag-start`,e.appointment,t),onDragend:i[3]||=e=>r.$emit(`drag-end`),onClick:i[4]||=m(t=>!e.resizing&&r.$emit(`edit`,e.appointment),[`stop`]),onTouchstart:i[5]||=m(t=>!e.resizing&&r.$emit(`touch-drag-start`,e.appointment,t),[`stop`,`prevent`])},[g(`div`,Ye,[e.appointment.blocked?(T(),x(`i`,Xe)):e.appointment.status===`cancelled`?(T(),x(`i`,Ze)):e.appointment.status===`no-show`?(T(),x(`i`,Qe)):n(``,!0),g(`div`,$e,[g(`p`,{class:H([`font-semibold leading-tight truncate`,e.appointment.status===`cancelled`?`line-through`:``])},R(e.appointment.clientName),3),!e.appointment.blocked&&e.height>30?(T(),x(`p`,et,R(e.appointment.typeName),1)):n(``,!0),e.height>44?(T(),x(`p`,{key:1,class:H([`opacity-70 text-[10px] leading-tight`,e.appointment.blocked?`text-gray-500`:``])},R(t(e.appointment.startTime))+` – `+R(t(e.appointment.endTime)),3)):n(``,!0)])]),g(`div`,{class:`absolute bottom-0 left-0 right-0 h-5 flex items-center justify-center cursor-ns-resize group/handle`,onMousedown:i[0]||=m(t=>r.$emit(`resize-start`,e.appointment,t),[`stop`]),onTouchstart:i[1]||=m(t=>r.$emit(`resize-start`,e.appointment,t),[`stop`,`prevent`])},[g(`div`,{class:H([`w-6 h-0.5 rounded-full opacity-0 group-hover:opacity-60 transition-opacity`,e.appointment.blocked?`bg-gray-500`:`bg-white`])},null,2)],32)],46,Je))}}),nt={class:`flex flex-1 min-h-0 overflow-y-auto overflow-x-auto`},rt={key:0,class:`text-[10px] text-gray-400 -translate-y-2`},it={class:`flex flex-1`},at=[`onDrop`],ot=[`onClick`],st=l({__name:`TimeGrid`,props:{days:{},appointments:{},timeSlots:{},slotHeight:{},topForTime:{type:Function},heightForDuration:{type:Function},snapToFive:{type:Function},appointmentsForDay:{type:Function}},emits:[`add-appointment`,`edit-appointment`],setup(e,{emit:t}){let r=e,i=t,o=O([]),s=d(()=>r.timeSlots.length*r.slotHeight),c=qe(r.slotHeight),l=J(),u=O(null),f=O(0),p=null,m=0,_=0;function v(e){return e instanceof TouchEvent?e.touches[0]?.clientY??e.changedTouches[0]?.clientY??0:e.clientY}function y(e,t,n){p=e,u.value=e.id,m=v(t),_=r.heightForDuration(e.startTime,e.endTime),f.value=_,t instanceof TouchEvent?(window.addEventListener(`touchmove`,E,{passive:!1}),window.addEventListener(`touchend`,k),window.addEventListener(`touchcancel`,k)):(window.addEventListener(`mousemove`,S),window.addEventListener(`mouseup`,D))}function b(e){let t=e-m,n=Math.round(t/r.slotHeight)*r.slotHeight,i=r.slotHeight;f.value=Math.max(i,_+n)}function S(e){p&&b(e.clientY)}function E(e){p&&(e.preventDefault(),b(e.touches[0].clientY))}async function D(){window.removeEventListener(`mousemove`,S),window.removeEventListener(`mouseup`,D),await A()}async function k(){window.removeEventListener(`touchmove`,E),window.removeEventListener(`touchend`,k),window.removeEventListener(`touchcancel`,k),await A()}async function A(){if(!p)return;let e=Math.round(f.value/r.slotHeight)*5,t=new Date(p.startTime.getTime()+e*6e4);await l.updateAppointment(p.id,{endTime:t}),u.value=null,p=null}let M=O(null),P=O(0),F=O(-1),I=0,L=0,z=0,B=O(!1);function ee(e,t){if(u.value)return;let n=t.touches[0];L=n.clientX,z=n.clientY,B.value=!1,M.value=e;let i=V(n.clientX);if(F.value=i,i>=0&&i<o.value.length){let t=o.value[i].getBoundingClientRect(),a=r.topForTime(e.startTime);I=n.clientY-t.top-a;let s=r.heightForDuration(e.startTime,e.endTime);I=Math.max(0,Math.min(I,s-r.slotHeight))}P.value=r.topForTime(e.startTime),window.addEventListener(`touchmove`,W,{passive:!1}),window.addEventListener(`touchend`,G),window.addEventListener(`touchcancel`,te)}function V(e){for(let t=0;t<o.value.length;t++){let n=o.value[t].getBoundingClientRect();if(e>=n.left&&e<=n.right)return t}return 0}function U(e,t){if(t<0||t>=o.value.length)return 0;let n=e-o.value[t].getBoundingClientRect().top-I;return Math.max(0,Math.round(n/r.slotHeight)*r.slotHeight)}function W(e){if(!M.value)return;e.preventDefault();let t=e.touches[0];if(!B.value){let e=t.clientX-L,n=t.clientY-z;Math.sqrt(e*e+n*n)>8&&(B.value=!0)}F.value=V(t.clientX),P.value=U(t.clientY,F.value)}async function G(e){if(window.removeEventListener(`touchmove`,W),window.removeEventListener(`touchend`,G),window.removeEventListener(`touchcancel`,te),!M.value)return;let t=M.value,n=F.value,a=B.value;if(M.value=null,F.value=-1,B.value=!1,!a){i(`edit-appointment`,t);return}let o=r.days[Math.max(0,Math.min(n,r.days.length-1))],s=Math.round(P.value/r.slotHeight)*5,c=new Date(o);c.setHours(0,0,0,0),c.setMinutes(s);let u=(t.endTime.getTime()-t.startTime.getTime())/6e4,d=new Date(c.getTime()+u*6e4);await l.updateAppointment(t.id,{startTime:c,endTime:d})}function te(){window.removeEventListener(`touchmove`,W),window.removeEventListener(`touchend`,G),window.removeEventListener(`touchcancel`,te),M.value=null,F.value=-1,B.value=!1}let ne=O(0),q;function re(){let e=new Date;ne.value=r.topForTime(e)}w(()=>{re(),q=setInterval(re,6e4);let e=480*(r.slotHeight/5);setTimeout(()=>{let t=o.value[0]?.closest(`.overflow-y-auto`);t&&(t.scrollTop=e)},50)}),C(()=>clearInterval(q));function ie(e){let t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function ae(e,t){let[n,r]=t.split(`:`).map(Number),a=new Date(e);a.setHours(n,r,0,0),i(`add-appointment`,a)}function oe(e,t){c.onDragStart(e,t)}function se(e){c.onDragOver(e)}function ce(e,t,n){c.onDrop(e,t,n)}return(t,r)=>(T(),x(`div`,nt,[g(`div`,{class:`sticky left-0 z-10 w-14 flex-shrink-0 border-r border-gray-100 bg-white relative`,style:j({height:s.value+`px`})},[(T(!0),x(a,null,h(e.timeSlots,(t,r)=>(T(),x(`div`,{key:t,class:`absolute left-0 right-0 flex items-start justify-end pr-2`,style:j({top:`${r*e.slotHeight}px`,height:`${e.slotHeight}px`})},[r%12==0?(T(),x(`span`,rt,R(t),1)):n(``,!0)],4))),128))],4),g(`div`,it,[(T(!0),x(a,null,h(e.days,(i,l)=>(T(),x(`div`,{key:l,ref_for:!0,ref_key:`columnRefs`,ref:o,class:`flex-1 min-w-[80px] border-r border-gray-100 relative`,style:j({height:s.value+`px`}),onDragover:r[3]||=e=>se(e),onDrop:e=>ce(e,i,o.value[l])},[(T(!0),x(a,null,h(e.timeSlots,(t,n)=>(T(),x(`div`,{key:t,class:H([`absolute left-0 right-0 border-t cursor-pointer hover:bg-pink-50 transition-colors`,n%12==0?`border-gray-200`:`border-gray-50`]),style:j({top:`${n*e.slotHeight}px`,height:`${e.slotHeight}px`}),onClick:e=>ae(i,t)},null,14,ot))),128)),ie(i)?(T(),x(`div`,{key:0,class:`absolute left-0 right-0 z-20 pointer-events-none`,style:j({top:`${ne.value}px`})},[...r[4]||=[g(`div`,{class:`relative`},[g(`div`,{class:`absolute -left-1 w-2.5 h-2.5 rounded-full bg-pink-500 -translate-y-1/2`}),g(`div`,{class:`border-t-2 border-pink-500`})],-1)]],4)):n(``,!0),(T(!0),x(a,null,h(e.appointmentsForDay(e.appointments,i),n=>(T(),K(tt,{key:n.id,appointment:n,top:e.topForTime(n.startTime),height:u.value===n.id?f.value:e.heightForDuration(n.startTime,n.endTime),resizing:u.value===n.id,onDragStart:r[0]||=(e,t)=>oe(e,t),onDragEnd:r[1]||=e=>N(c).onDragEnd(),onEdit:e=>t.$emit(`edit-appointment`,n),onResizeStart:(e,t)=>y(e,t,o.value[l]),onTouchDragStart:r[2]||=(e,t)=>ee(e,t)},null,8,[`appointment`,`top`,`height`,`resizing`,`onEdit`,`onResizeStart`]))),128)),M.value&&B.value&&F.value===l?(T(),x(`div`,{key:1,class:`absolute left-1 right-1 rounded-lg opacity-70 pointer-events-none z-40 border-2 border-white`,style:j({top:`${P.value}px`,height:`${M.value?e.heightForDuration(M.value.startTime,M.value.endTime):0}px`,backgroundColor:M.value.blocked?`#e5e7eb`:M.value.color})},null,4)):n(``,!0)],44,at))),128))])]))}}),ct={class:`flex flex-col flex-1 min-h-0 overflow-hidden`},lt={class:`flex border-b border-gray-200 bg-white flex-shrink-0`},ut={class:`flex-1 py-2 px-4`},dt={class:`text-[10px] font-medium uppercase opacity-70`},ft={class:`text-lg font-bold leading-none`},pt=l({__name:`DayView`,props:{date:{},appointments:{},timeSlots:{},slotHeight:{},topForTime:{type:Function},heightForDuration:{type:Function},snapToFive:{type:Function},appointmentsForDay:{type:Function}},emits:[`add-appointment`,`edit-appointment`],setup(e){let t=e,n=d(()=>{let e=new Date;return t.date.getFullYear()===e.getFullYear()&&t.date.getMonth()===e.getMonth()&&t.date.getDate()===e.getDate()}),r=d(()=>t.date.toLocaleDateString(`sl-SI`,{weekday:`short`}));return(t,i)=>(T(),x(`div`,ct,[g(`div`,lt,[i[2]||=g(`div`,{class:`w-14 flex-shrink-0`},null,-1),g(`div`,ut,[g(`div`,{class:H([`inline-flex flex-col items-center justify-center w-10 h-10 rounded-full`,n.value?`bg-pink-500 text-white`:`text-gray-700`])},[g(`span`,dt,R(r.value),1),g(`span`,ft,R(e.date.getDate()),1)],2)])]),o(st,{days:[e.date],appointments:e.appointments,"time-slots":e.timeSlots,"slot-height":e.slotHeight,"top-for-time":e.topForTime,"height-for-duration":e.heightForDuration,"snap-to-five":e.snapToFive,"appointments-for-day":e.appointmentsForDay,onAddAppointment:i[0]||=e=>t.$emit(`add-appointment`,e),onEditAppointment:i[1]||=e=>t.$emit(`edit-appointment`,e)},null,8,[`days`,`appointments`,`time-slots`,`slot-height`,`top-for-time`,`height-for-duration`,`snap-to-five`,`appointments-for-day`])]))}}),mt={class:`flex flex-col flex-1 min-h-0 overflow-hidden`},ht={class:`flex border-b border-gray-200 bg-white flex-shrink-0`},gt={class:`flex flex-1 overflow-x-auto`},_t={class:`text-[10px] font-medium uppercase text-gray-400`},vt=l({__name:`WeekView`,props:{weekDays:{},appointments:{},timeSlots:{},slotHeight:{},topForTime:{type:Function},heightForDuration:{type:Function},snapToFive:{type:Function},appointmentsForDay:{type:Function}},emits:[`add-appointment`,`edit-appointment`],setup(e){function t(e){let t=new Date;return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}return(n,r)=>(T(),x(`div`,mt,[g(`div`,ht,[r[2]||=g(`div`,{class:`w-14 flex-shrink-0`},null,-1),g(`div`,gt,[(T(!0),x(a,null,h(e.weekDays,e=>(T(),x(`div`,{key:e.toISOString(),class:`flex-1 min-w-[80px] flex flex-col items-center py-2`},[g(`span`,_t,R(e.toLocaleDateString(`sl-SI`,{weekday:`short`})),1),g(`div`,{class:H([`w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold mt-0.5`,t(e)?`bg-pink-500 text-white`:`text-gray-700`])},R(e.getDate()),3)]))),128))])]),o(st,{days:e.weekDays,appointments:e.appointments,"time-slots":e.timeSlots,"slot-height":e.slotHeight,"top-for-time":e.topForTime,"height-for-duration":e.heightForDuration,"snap-to-five":e.snapToFive,"appointments-for-day":e.appointmentsForDay,onAddAppointment:r[0]||=e=>n.$emit(`add-appointment`,e),onEditAppointment:r[1]||=e=>n.$emit(`edit-appointment`,e)},null,8,[`days`,`appointments`,`time-slots`,`slot-height`,`top-for-time`,`height-for-duration`,`snap-to-five`,`appointments-for-day`])]))}}),yt={class:`flex flex-col flex-1 overflow-hidden p-4`},bt={class:`grid grid-cols-7 mb-1`},xt={class:`grid grid-cols-7 flex-1 gap-1 overflow-y-auto`},St=[`onClick`],Ct={class:`flex justify-end mb-1`},wt={class:`flex flex-col gap-0.5 overflow-hidden`},Tt=[`onClick`],Et={key:0,class:`text-[10px] text-gray-400 pl-1`},Dt=l({__name:`MonthView`,props:{currentDate:{},monthDays:{},appointments:{},isSameDay:{type:Function},isCurrentMonth:{type:Function},appointmentsForDay:{type:Function}},emits:[`add-appointment`,`edit-appointment`],setup(e){let t=new Date,r=[`Pon`,`Tor`,`Sre`,`Čet`,`Pet`,`Sob`,`Ned`];function i(e){return e.toLocaleTimeString(`sl-SI`,{hour:`2-digit`,minute:`2-digit`})}return(o,s)=>(T(),x(`div`,yt,[g(`div`,bt,[(T(),x(a,null,h(r,e=>g(`div`,{key:e,class:`text-center text-[11px] font-semibold uppercase text-gray-400 py-1`},R(e),1)),64))]),g(`div`,xt,[(T(!0),x(a,null,h(e.monthDays,r=>(T(),x(`div`,{key:r.toISOString(),class:H([`border border-gray-100 rounded-lg p-1 min-h-[80px] cursor-pointer hover:bg-pink-50 transition-colors flex flex-col`,{"opacity-40":!e.isCurrentMonth(r),"ring-2 ring-pink-400":e.isSameDay(r,N(t))}]),onClick:e=>o.$emit(`add-appointment`,r)},[g(`div`,Ct,[g(`span`,{class:H([`text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full`,e.isSameDay(r,N(t))?`bg-pink-500 text-white`:`text-gray-600`])},R(r.getDate()),3)]),g(`div`,wt,[(T(!0),x(a,null,h(e.appointmentsForDay(e.appointments,r).slice(0,3),e=>(T(),x(`div`,{key:e.id,class:`text-[10px] font-medium text-white rounded px-1 truncate cursor-pointer`,style:j({backgroundColor:e.color}),onClick:m(t=>o.$emit(`edit-appointment`,e),[`stop`])},R(i(e.startTime))+` `+R(e.clientName),13,Tt))),128)),e.appointmentsForDay(e.appointments,r).length>3?(T(),x(`div`,Et,` +`+R(e.appointmentsForDay(e.appointments,r).length-3)+` več `,1)):n(``,!0)])],10,St))),128))])]))}}),Ot=f.extend({name:`chip`,style:`
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
`,classes:{root:`p-chip p-component`,image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`}}),kt={name:`Chip`,extends:{name:`BaseChip`,extends:y,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Ot,provide:function(){return{$pcChip:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`remove`],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)},close:function(e){this.visible=!1,this.$emit(`remove`,e)}},computed:{dataP:function(){return P({removable:this.removable})}},components:{TimesCircleIcon:ae}},At=[`aria-label`,`data-p`],jt=[`src`];function Mt(e,r,i,a,o,s){return o.visible?(T(),x(`div`,c({key:0,class:e.cx(`root`),"aria-label":e.label},e.ptmi(`root`),{"data-p":s.dataP}),[t(e.$slots,`default`,{},function(){return[e.image?(T(),x(`img`,c({key:0,src:e.image},e.ptm(`image`),{class:e.cx(`image`)}),null,16,jt)):e.$slots.icon?(T(),K(F(e.$slots.icon),c({key:1,class:e.cx(`icon`)},e.ptm(`icon`)),null,16,[`class`])):e.icon?(T(),x(`span`,c({key:2,class:[e.cx(`icon`),e.icon]},e.ptm(`icon`)),null,16)):n(``,!0),e.label===null?n(``,!0):(T(),x(`div`,c({key:3,class:e.cx(`label`)},e.ptm(`label`)),R(e.label),17))]}),e.removable?t(e.$slots,`removeicon`,{key:0,removeCallback:s.close,keydownCallback:s.onKeydown},function(){return[(T(),K(F(e.removeIcon?`span`:`TimesCircleIcon`),c({class:[e.cx(`removeIcon`),e.removeIcon],onClick:s.close,onKeydown:s.onKeydown},e.ptm(`removeIcon`)),null,16,[`class`,`onClick`,`onKeydown`]))]}):n(``,!0)],16,At)):n(``,!0)}kt.render=Mt;var Nt=f.extend({name:`autocomplete`,style:`
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
`,classes:{root:function(e){var t=e.instance;return[`p-autocomplete p-component p-inputwrapper`,{"p-invalid":t.$invalid,"p-focus":t.focused,"p-inputwrapper-filled":t.$filled||b(t.inputValue),"p-inputwrapper-focus":t.focused,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-fluid":t.$fluid,"p-autocomplete-clearable":t.isClearIconVisible}]},pcInputText:`p-autocomplete-input`,inputMultiple:function(e){var t=e.instance,n=e.props;return[`p-autocomplete-input-multiple`,{"p-variant-filled":t.$variant===`filled`,"p-disabled":n.disabled}]},clearIcon:`p-autocomplete-clear-icon`,chipItem:function(e){var t=e.instance,n=e.i;return[`p-autocomplete-chip-item`,{"p-focus":t.focusedMultipleOptionIndex===n}]},pcChip:`p-autocomplete-chip`,chipIcon:`p-autocomplete-chip-icon`,inputChip:`p-autocomplete-input-chip`,loader:`p-autocomplete-loader`,dropdown:`p-autocomplete-dropdown`,overlay:`p-autocomplete-overlay p-component`,listContainer:`p-autocomplete-list-container`,list:`p-autocomplete-list`,optionGroup:`p-autocomplete-option-group`,option:function(e){var t=e.instance,n=e.option,r=e.i,i=e.getItemOptions;return[`p-autocomplete-option`,{"p-autocomplete-option-selected":t.isSelected(n),"p-focus":t.focusedOptionIndex===t.getOptionIndex(r,i),"p-disabled":t.isOptionDisabled(n)}]},emptyMessage:`p-autocomplete-empty-message`},inlineStyles:{root:{position:`relative`}}}),Pt={name:`BaseAutoComplete`,extends:fe,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:`14rem`},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:`blank`},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:`body`},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Nt,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function Ft(e,t,n){return(t=It(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function It(e){var t=Lt(e,`string`);return Z(t)==`symbol`?t:t+``}function Lt(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function Q(e){return Vt(e)||Bt(e)||zt(e)||Rt()}function Rt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zt(e,t){if(e){if(typeof e==`string`)return Ht(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ht(e,t):void 0}}function Bt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Vt(e){if(Array.isArray(e))return Ht(e)}function Ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Ut={name:`AutoComplete`,extends:Pt,inheritAttrs:!1,emits:[`change`,`focus`,`blur`,`item-select`,`item-unselect`,`option-select`,`option-unselect`,`dropdown-click`,`clear`,`complete`,`before-show`,`before-hide`,`show`,`hide`],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,startRangeIndex:-1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1,!this.showEmptyMessage&&this.visibleOptions.length===0&&this.hide()),this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.overlay&&=(q.clear(this.overlay),null)},methods:{getOptionIndex:function(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel:function(e){return this.optionLabel?W(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,t){return(this.dataKey?W(e,this.dataKey):this.getOptionLabel(e))+`_`+t},getPTOptions:function(e,t,n,r){return this.ptm(r,{context:{option:e,index:n,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(n,t),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?W(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return W(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return W(e,this.optionGroupChildren)},getAriaPosInset:function(e){var t=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(e){return t.isOptionGroup(e)}).length:e)+1},show:function(e){this.$emit(`before-show`),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex===-1?this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1:this.focusedOptionIndex,e&&I(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var t=this,n=function(){t.$emit(`before-hide`),t.dirty=e,t.overlayVisible=!1,t.clicked=!1,t.focusedOptionIndex=-1,e&&I(t.multiple?t.$refs.focusInput:t.$refs.focusInput?.$el)};setTimeout(function(){n()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,`focus`),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex===-1?this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1:this.focusedOptionIndex,this.scrollInView(this.focusedOptionIndex)),this.$emit(`focus`,e))},onBlur:function(e){var t,n;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`ArrowRight`:this.onArrowRightKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`ShiftLeft`:case`ShiftRight`:this.onShiftKey(e);break;case`Backspace`:this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var t=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var n=e.target.value;this.multiple||this.updateModel(e,n),n.length===0?(this.searching=!1,this.hide(),this.$emit(`clear`)):n.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){t.search(e,n,`input`)},this.delay)):(this.searching=!1,this.hide())}},onChange:function(e){var t=this;if(this.forceSelection){var n=!1;if(this.visibleOptions&&!this.multiple){var r,i=this.multiple?this.$refs.focusInput.value:(r=this.$refs.focusInput)==null||(r=r.$el)==null?void 0:r.value,a=this.visibleOptions.find(function(e){return t.isOptionMatched(e,i||``)});a!==void 0&&(n=!0,!this.isSelected(a)&&this.onOptionSelect(e,a))}if(!n){if(this.multiple)this.$refs.focusInput.value=``;else{var o=this.$refs.focusInput?.$el;o&&(o.value=``)}this.$emit(`clear`),!this.multiple&&this.updateModel(e,null)}}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case`ArrowLeft`:this.onArrowLeftKeyOnMultiple(e);break;case`ArrowRight`:this.onArrowRightKeyOnMultiple(e);break;case`Backspace`:this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&I(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var t=void 0;if(this.overlayVisible)this.hide(!0);else{var n=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;I(n),t=n.value,this.dropdownMode===`blank`?this.search(e,``,`dropdown`):this.dropdownMode===`current`&&this.search(e,t,`dropdown`)}this.$emit(`dropdown-click`,{originalEvent:e,query:t})},onOptionSelect:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,r=this.getOptionValue(t);this.multiple?(this.$refs.focusInput.value=``,this.isSelected(t)||this.updateModel(e,[].concat(Q(this.d_value||[]),[r]))):this.updateModel(e,r),this.$emit(`item-select`,{originalEvent:e,value:t}),this.$emit(`option-select`,{originalEvent:e,value:t}),n&&this.hide(!0)},onOptionMouseMove:function(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onOptionSelectRange:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(n===-1&&(n=this.findNearestSelectedOptionIndex(r,!0)),r===-1&&(r=this.findNearestSelectedOptionIndex(n)),n!==-1&&r!==-1){var i=Math.min(n,r),a=Math.max(n,r),o=this.visibleOptions.slice(i,a+1).filter(function(e){return t.isValidOption(e)}).filter(function(e){return!t.isSelected(e)}).map(function(e){return t.getOptionValue(e)});this.updateModel(e,[].concat(Q(this.d_value||[]),Q(o)))}},onClearClick:function(e){this.updateModel(e,null)},onOverlayClick:function(e){ge.emit(`overlay-click`,{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case`Escape`:this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var t=this.focusedOptionIndex===-1?this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex():this.findNextOptionIndex(this.focusedOptionIndex);this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,t),this.changeFocusedOptionIndex(e,t),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var t=this.focusedOptionIndex===-1?this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex():this.findPrevOptionIndex(this.focusedOptionIndex);this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,t,this.startRangeIndex),this.changeFocusedOptionIndex(e,t),e.preventDefault()}},onArrowLeftKey:function(e){var t=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(i(t.value)&&this.$filled?(I(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var t=e.currentTarget,n=t.value.length,r=e.metaKey||e.ctrlKey,i=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&r&&this.onOptionSelectRange(e,i,this.startRangeIndex),t.setSelectionRange(0,e.shiftKey?n:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var t=e.currentTarget,n=t.value.length,r=e.metaKey||e.ctrlKey,i=this.findLastOptionIndex();this.multiple&&e.shiftKey&&r&&this.onOptionSelectRange(e,this.startRangeIndex,i),t.setSelectionRange(e.shiftKey?0:n,n),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&(this.multiple&&e.shiftKey?(this.onOptionSelectRange(e,this.focusedOptionIndex),e.preventDefault()):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&(e.target.value.trim()&&(this.updateModel(e,[].concat(Q(this.d_value||[]),[e.target.value.trim()])),this.$refs.focusInput.value=``),e.preventDefault())},onSpaceKey:function(e){!this.autoOptionFocus&&this.focusedOptionIndex!==-1&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onBackspaceKey:function(e){if(this.multiple){if(b(this.d_value)&&!this.$refs.focusInput.value){var t=this.d_value[this.d_value.length-1],n=this.d_value.slice(0,-1);this.writeValue(n,e),this.$emit(`item-unselect`,{originalEvent:e,value:t}),this.$emit(`option-unselect`,{originalEvent:e,value:t})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,I(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){q.set(`overlay`,e,this.$primevue.config.zIndex.overlay),B(e,{position:`absolute`,top:`0`}),this.alignOverlay(),this.$attrSelector&&e.setAttribute(this.$attrSelector,``)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit(`show`)},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit(`hide`),this.overlay=null},onOverlayAfterLeave:function(e){q.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo===`self`?ne(this.overlay,e):(this.overlay.style.minWidth=k(e)+`px`,u(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.overlayVisible&&e.overlay&&e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new oe(this.$refs.container,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!e()&&t.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,t){return this.isValidOption(e)&&this.getOptionLabel(e)?.toLocaleLowerCase(this.searchLocale)===t.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return b(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,t){return v(e,t,this.equalityKey)},isSelected:function(e){var t=this,n=this.getOptionValue(e);return this.multiple?(this.d_value||[]).some(function(e){return t.isEquals(e,n)}):this.isEquals(this.d_value,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(t){return e.isValidOption(t)})},findLastOptionIndex:function(){var e=this;return U(this.visibleOptions,function(t){return e.isValidOption(t)})},findNextOptionIndex:function(e){var t=this,n=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(e){return t.isValidOption(e)}):-1;return n>-1?n+e+1:e},findPrevOptionIndex:function(e){var t=this,n=e>0?U(this.visibleOptions.slice(0,e),function(e){return t.isValidOption(e)}):-1;return n>-1?n:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(t){return e.isValidSelectedOption(t)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,t,n){t!=null&&(n===`input`&&t.trim().length===0||(this.searching=!0,this.$emit(`complete`,{originalEvent:e,query:t})))},removeOption:function(e,t){var n=this,r=this.d_value[t],i=this.d_value.filter(function(e,n){return n!==t}).map(function(e){return n.getOptionValue(e)});this.updateModel(e,i),this.$emit(`item-unselect`,{originalEvent:e,value:r}),this.$emit(`option-unselect`,{originalEvent:e,value:r}),this.dirty=!0,I(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[t],!1))},scrollInView:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var n=t===-1?e.focusedOptionId:`${e.$id}_${t}`,r=z(e.list,`li[id="${n}"]`);r?r.scrollIntoView&&r.scrollIntoView({block:`nearest`,inline:`start`}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(t===-1?e.focusedOptionIndex:t)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,t){this.writeValue(t,e),this.$emit(`change`,{originalEvent:e,value:t})},flatOptions:function(e){var t=this;return(e||[]).reduce(function(e,n,r){e.push({optionGroup:n,group:!0,index:r});var i=t.getOptionGroupChildren(n);return i&&i.forEach(function(t){return e.push(t)}),e},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,t){this.list=e,t&&t(e)},virtualScrollerRef:function(e){this.virtualScroller=e},findNextSelectedOptionIndex:function(e){var t=this,n=this.$filled&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(e){return t.isValidSelectedOption(e)}):-1;return n>-1?n+e+1:-1},findPrevSelectedOptionIndex:function(e){var t=this,n=this.$filled&&e>0?U(this.visibleOptions.slice(0,e),function(e){return t.isValidSelectedOption(e)}):-1;return n>-1?n:-1},findNearestSelectedOptionIndex:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=-1;return this.$filled&&(t?(n=this.findPrevSelectedOptionIndex(e),n=n===-1?this.findNextSelectedOptionIndex(e):n):(n=this.findNextSelectedOptionIndex(e),n=n===-1?this.findPrevSelectedOptionIndex(e):n)),n>-1?n:e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){return this.$filled?Z(this.d_value)===`object`?this.getOptionLabel(this.d_value)??this.d_value:this.d_value:``},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return b(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll(`{0}`,this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||``},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||``},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||``},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||``},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll(`{0}`,this.multiple?this.d_value.length:`1`):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex===-1?null:`${this.$id}_${this.focusedOptionIndex}`},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex===-1?null:`${this.$id}_multiple_option_${this.focusedMultipleOptionIndex}`},isClearIconVisible:function(){return this.showClear&&this.$filled&&!this.disabled&&!this.loading},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(t){return!e.isOptionGroup(t)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.$id+`_panel`},containerDataP:function(){return P({fluid:this.$fluid})},overlayDataP:function(){return P(Ft({},`portal-`+this.appendTo,`portal-`+this.appendTo))},inputMultipleDataP:function(){return P(Ft({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant===`filled`,empty:!this.$filled},this.size,this.size))}},components:{InputText:Y,VirtualScroller:he,Portal:re,Chip:kt,ChevronDownIcon:me,SpinnerIcon:r,TimesIcon:D},directives:{ripple:_}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function Wt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Wt(Object(n),!0).forEach(function(t){Kt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Kt(e,t,n){return(t=qt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qt(e){var t=Jt(e,`string`);return $(t)==`symbol`?t:t+``}function Jt(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Yt=[`data-p`],Xt=[`aria-activedescendant`,`data-p-has-dropdown`,`data-p`],Zt=[`id`,`aria-label`,`aria-setsize`,`aria-posinset`],Qt=[`id`,`placeholder`,`tabindex`,`disabled`,`aria-label`,`aria-labelledby`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`aria-invalid`],$t=[`data-p-has-dropdown`],en=[`disabled`,`aria-expanded`,`aria-controls`],tn=[`id`,`data-p`],nn=[`id`,`aria-label`],rn=[`id`],an=[`id`,`aria-label`,`aria-selected`,`aria-disabled`,`aria-setsize`,`aria-posinset`,`onClick`,`onMousemove`,`data-p-selected`,`data-p-focused`,`data-p-disabled`];function on(e,r,i,l,u,d){var f=A(`InputText`),m=A(`TimesIcon`),_=A(`Chip`),v=A(`SpinnerIcon`),y=A(`VirtualScroller`),b=A(`Portal`),C=V(`ripple`);return T(),x(`div`,c({ref:`container`,class:e.cx(`root`),style:e.sx(`root`),onClick:r[11]||=function(){return d.onContainerClick&&d.onContainerClick.apply(d,arguments)},"data-p":d.containerDataP},e.ptmi(`root`)),[e.multiple?n(``,!0):(T(),K(f,{key:0,ref:`focusInput`,id:e.inputId,type:`text`,name:e.$formName,class:H([e.cx(`pcInputText`),e.inputClass]),style:j(e.inputStyle),defaultValue:d.inputValue,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,fluid:e.$fluid,disabled:e.disabled,size:e.size,invalid:e.invalid,variant:e.variant,autocomplete:`off`,role:`combobox`,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":`listbox`,"aria-autocomplete":`list`,"aria-expanded":u.overlayVisible,"aria-controls":u.overlayVisible?d.panelId:void 0,"aria-activedescendant":u.focused?d.focusedOptionId:void 0,onFocus:d.onFocus,onBlur:d.onBlur,onKeydown:d.onKeyDown,onInput:d.onInput,onChange:d.onChange,unstyled:e.unstyled,"data-p-has-dropdown":e.dropdown,pt:e.ptm(`pcInputText`)},null,8,[`id`,`name`,`class`,`style`,`defaultValue`,`placeholder`,`tabindex`,`fluid`,`disabled`,`size`,`invalid`,`variant`,`aria-label`,`aria-labelledby`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`onFocus`,`onBlur`,`onKeydown`,`onInput`,`onChange`,`unstyled`,`data-p-has-dropdown`,`pt`])),d.isClearIconVisible?t(e.$slots,`clearicon`,{key:1,class:H(e.cx(`clearIcon`)),clearCallback:d.onClearClick},function(){return[o(m,c({class:[e.cx(`clearIcon`)],onClick:d.onClearClick},e.ptm(`clearIcon`)),null,16,[`class`,`onClick`])]}):n(``,!0),e.multiple?(T(),x(`ul`,c({key:2,ref:`multiContainer`,class:e.cx(`inputMultiple`),tabindex:`-1`,role:`listbox`,"aria-orientation":`horizontal`,"aria-activedescendant":u.focused?d.focusedMultipleOptionId:void 0,onFocus:r[5]||=function(){return d.onMultipleContainerFocus&&d.onMultipleContainerFocus.apply(d,arguments)},onBlur:r[6]||=function(){return d.onMultipleContainerBlur&&d.onMultipleContainerBlur.apply(d,arguments)},onKeydown:r[7]||=function(){return d.onMultipleContainerKeyDown&&d.onMultipleContainerKeyDown.apply(d,arguments)},"data-p-has-dropdown":e.dropdown,"data-p":d.inputMultipleDataP},e.ptm(`inputMultiple`)),[(T(!0),x(a,null,h(e.d_value,function(n,r){return T(),x(`li`,c({key:`${r}_${d.getOptionLabel(n)}`,id:e.$id+`_multiple_option_`+r,class:e.cx(`chipItem`,{i:r}),role:`option`,"aria-label":d.getOptionLabel(n),"aria-selected":!0,"aria-setsize":e.d_value.length,"aria-posinset":r+1},{ref_for:!0},e.ptm(`chipItem`)),[t(e.$slots,`chip`,c({class:e.cx(`pcChip`),value:n,index:r,removeCallback:function(e){return d.removeOption(e,r)}},{ref_for:!0},e.ptm(`pcChip`)),function(){return[o(_,{class:H(e.cx(`pcChip`)),label:d.getOptionLabel(n),removeIcon:e.chipIcon||e.removeTokenIcon,removable:``,unstyled:e.unstyled,onRemove:function(e){return d.removeOption(e,r)},"data-p-focused":u.focusedMultipleOptionIndex===r,pt:e.ptm(`pcChip`)},{removeicon:E(function(){return[t(e.$slots,e.$slots.chipicon?`chipicon`:`removetokenicon`,{class:H(e.cx(`chipIcon`)),index:r,removeCallback:function(e){return d.removeOption(e,r)}})]}),_:2},1032,[`class`,`label`,`removeIcon`,`unstyled`,`onRemove`,`data-p-focused`,`pt`])]})],16,Zt)}),128)),g(`li`,c({class:e.cx(`inputChip`),role:`option`},e.ptm(`inputChip`)),[g(`input`,c({ref:`focusInput`,id:e.inputId,type:`text`,style:e.inputStyle,class:e.inputClass,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,disabled:e.disabled,autocomplete:`off`,role:`combobox`,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":`listbox`,"aria-autocomplete":`list`,"aria-expanded":u.overlayVisible,"aria-controls":e.$id+`_list`,"aria-activedescendant":u.focused?d.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:r[0]||=function(){return d.onFocus&&d.onFocus.apply(d,arguments)},onBlur:r[1]||=function(){return d.onBlur&&d.onBlur.apply(d,arguments)},onKeydown:r[2]||=function(){return d.onKeyDown&&d.onKeyDown.apply(d,arguments)},onInput:r[3]||=function(){return d.onInput&&d.onInput.apply(d,arguments)},onChange:r[4]||=function(){return d.onChange&&d.onChange.apply(d,arguments)}},e.ptm(`input`)),null,16,Qt)],16)],16,Xt)):n(``,!0),u.searching||e.loading?t(e.$slots,e.$slots.loader?`loader`:`loadingicon`,{key:3,class:H(e.cx(`loader`))},function(){return[e.loader||e.loadingIcon?(T(),x(`i`,c({key:0,class:[`pi-spin`,e.cx(`loader`),e.loader,e.loadingIcon],"aria-hidden":`true`,"data-p-has-dropdown":e.dropdown},e.ptm(`loader`)),null,16,$t)):e.loading?(T(),K(v,c({key:1,class:e.cx(`loader`),spin:``,"aria-hidden":`true`,"data-p-has-dropdown":e.dropdown},e.ptm(`loader`)),null,16,[`class`,`data-p-has-dropdown`])):n(``,!0)]}):n(``,!0),t(e.$slots,e.$slots.dropdown?`dropdown`:`dropdownbutton`,{toggleCallback:function(e){return d.onDropdownClick(e)}},function(){return[e.dropdown?(T(),x(`button`,c({key:0,ref:`dropdownButton`,type:`button`,class:[e.cx(`dropdown`),e.dropdownClass],disabled:e.disabled,"aria-haspopup":`listbox`,"aria-expanded":u.overlayVisible,"aria-controls":d.panelId,onClick:r[8]||=function(){return d.onDropdownClick&&d.onDropdownClick.apply(d,arguments)}},e.ptm(`dropdown`)),[t(e.$slots,`dropdownicon`,{class:H(e.dropdownIcon)},function(){return[(T(),K(F(e.dropdownIcon?`span`:`ChevronDownIcon`),c({class:e.dropdownIcon},e.ptm(`dropdownIcon`)),null,16,[`class`]))]})],16,en)):n(``,!0)]}),e.typeahead?(T(),x(`span`,c({key:4,role:`status`,"aria-live":`polite`,class:`p-hidden-accessible`},e.ptm(`hiddenSearchResult`),{"data-p-hidden-accessible":!0}),R(d.searchResultMessageText),17)):n(``,!0),o(b,{appendTo:e.appendTo},{default:E(function(){return[o(p,c({name:`p-anchored-overlay`,onEnter:d.onOverlayEnter,onAfterEnter:d.onOverlayAfterEnter,onLeave:d.onOverlayLeave,onAfterLeave:d.onOverlayAfterLeave},e.ptm(`transition`)),{default:E(function(){return[u.overlayVisible?(T(),x(`div`,c({key:0,ref:d.overlayRef,id:d.panelId,class:[e.cx(`overlay`),e.panelClass,e.overlayClass],style:Gt(Gt({},e.panelStyle),e.overlayStyle),onClick:r[9]||=function(){return d.onOverlayClick&&d.onOverlayClick.apply(d,arguments)},onKeydown:r[10]||=function(){return d.onOverlayKeyDown&&d.onOverlayKeyDown.apply(d,arguments)},"data-p":d.overlayDataP},e.ptm(`overlay`)),[t(e.$slots,`header`,{value:e.d_value,suggestions:d.visibleOptions}),g(`div`,c({class:e.cx(`listContainer`),style:{"max-height":d.virtualScrollerDisabled?e.scrollHeight:``}},e.ptm(`listContainer`)),[o(y,c({ref:d.virtualScrollerRef},e.virtualScrollerOptions,{style:{height:e.scrollHeight},items:d.visibleOptions,tabindex:-1,disabled:d.virtualScrollerDisabled,pt:e.ptm(`virtualScroller`)}),s({content:E(function(r){var i=r.styleClass,o=r.contentRef,s=r.items,l=r.getItemOptions,f=r.contentStyle,p=r.itemSize;return[g(`ul`,c({ref:function(e){return d.listRef(e,o)},id:e.$id+`_list`,class:[e.cx(`list`),i],style:f,role:`listbox`,"aria-label":d.listAriaLabel},e.ptm(`list`)),[(T(!0),x(a,null,h(s,function(n,r){return T(),x(a,{key:d.getOptionRenderKey(n,d.getOptionIndex(r,l))},[d.isOptionGroup(n)?(T(),x(`li`,c({key:0,id:e.$id+`_`+d.getOptionIndex(r,l),style:{height:p?p+`px`:void 0},class:e.cx(`optionGroup`),role:`option`},{ref_for:!0},e.ptm(`optionGroup`)),[t(e.$slots,`optiongroup`,{option:n.optionGroup,index:d.getOptionIndex(r,l)},function(){return[S(R(d.getOptionGroupLabel(n.optionGroup)),1)]})],16,rn)):L((T(),x(`li`,c({key:1,id:e.$id+`_`+d.getOptionIndex(r,l),style:{height:p?p+`px`:void 0},class:e.cx(`option`,{option:n,i:r,getItemOptions:l}),role:`option`,"aria-label":d.getOptionLabel(n),"aria-selected":d.isSelected(n),"aria-disabled":d.isOptionDisabled(n),"aria-setsize":d.ariaSetSize,"aria-posinset":d.getAriaPosInset(d.getOptionIndex(r,l)),onClick:function(e){return d.onOptionSelect(e,n)},onMousemove:function(e){return d.onOptionMouseMove(e,d.getOptionIndex(r,l))},"data-p-selected":d.isSelected(n),"data-p-focused":u.focusedOptionIndex===d.getOptionIndex(r,l),"data-p-disabled":d.isOptionDisabled(n)},{ref_for:!0},d.getPTOptions(n,l,r,`option`)),[t(e.$slots,`option`,{option:n,index:d.getOptionIndex(r,l)},function(){return[S(R(d.getOptionLabel(n)),1)]})],16,an)),[[C]])],64)}),128)),e.showEmptyMessage&&(!s||s&&s.length===0)?(T(),x(`li`,c({key:0,class:e.cx(`emptyMessage`),role:`option`},e.ptm(`emptyMessage`)),[t(e.$slots,`empty`,{},function(){return[S(R(d.searchResultMessageText),1)]})],16)):n(``,!0)],16,nn)]}),_:2},[e.$slots.loader?{name:`loader`,fn:E(function(n){var r=n.options;return[t(e.$slots,`loader`,{options:r})]}),key:`0`}:void 0]),1040,[`style`,`items`,`disabled`,`pt`])],16),t(e.$slots,`footer`,{value:e.d_value,suggestions:d.visibleOptions}),g(`span`,c({role:`status`,"aria-live":`polite`,class:`p-hidden-accessible`},e.ptm(`hiddenSelectedMessage`),{"data-p-hidden-accessible":!0}),R(d.selectedMessageText),17)],16,tn)):n(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`])],16,Yt)}Ut.render=on;var sn={class:`flex flex-col gap-4 pt-2`},cn={class:`flex rounded-xl overflow-hidden border border-gray-200 text-sm font-medium`},ln={class:`flex flex-col gap-1`},un={class:`flex gap-2`},dn={class:`flex items-center gap-2`},fn={class:`w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0`},pn={class:`text-pink-600 font-bold text-xs`},mn={class:`text-sm font-medium`},hn={class:`text-xs text-gray-400`},gn={key:0,class:`mt-2 border border-gray-200 rounded-xl p-3 bg-gray-50 flex flex-col gap-3`},_n={class:`grid grid-cols-2 gap-2`},vn={class:`flex flex-col gap-1`},yn={class:`flex flex-col gap-1`},bn={class:`flex flex-col gap-1`},xn={class:`flex flex-col gap-1`},Sn={class:`flex justify-end gap-2`},Cn={class:`flex flex-col gap-1`},wn={class:`flex items-center gap-2`},Tn={class:`flex-1`},En={key:0,class:`text-xs text-gray-400 ml-auto`},Dn={key:0,class:`text-xs text-gray-500 flex items-center gap-1 mt-0.5`},On={class:`font-semibold text-gray-700`},kn={key:1,class:`flex flex-col gap-1`},An={key:2,class:`flex flex-col gap-1`},jn={class:`flex gap-2`},Mn=[`onClick`],Nn={class:`grid grid-cols-2 gap-3`},Pn={class:`flex flex-col gap-1`},Fn={class:`flex flex-col gap-1`},In={class:`flex flex-col gap-1`},Ln={class:`flex flex-col gap-1`},Rn={class:`flex justify-between w-full`},zn={class:`flex gap-2 ml-auto`},Bn=l({__name:`AppointmentDialog`,props:{visible:{type:Boolean},appointment:{},initialTime:{},initialBlocked:{type:Boolean}},emits:[`update:visible`,`saved`,`deleted`],setup(e,{emit:t}){let r=e,i=t,s=le(),c=J(),l=de(),u=se(),f=O(!1),p=d(()=>!!r.appointment),m=O(``),_=O([]),v=d(()=>l.clients.map(e=>({id:e.id,firstName:e.firstName,lastName:e.lastName,phone:e.phone,fullName:`${e.firstName} ${e.lastName}`})));function y(e){let t=e.query.toLowerCase();_.value=v.value.filter(e=>e.fullName.toLowerCase().includes(t)||e.phone.includes(t))}function b(e){F.clientId=e.value.id,F.clientName=e.value.fullName}let C=O(!1),w=O(!1),D=ee({firstName:``,lastName:``,phone:``,notes:``});function k(){C.value=!1,D.firstName=``,D.lastName=``,D.phone=``,D.notes=``}async function A(){w.value=!0;try{await l.addClient({firstName:D.firstName,lastName:D.lastName,phone:D.phone,notes:D.notes});let e=l.clients.find(e=>e.firstName===D.firstName&&e.lastName===D.lastName&&e.phone===D.phone);if(e){let t={id:e.id,firstName:e.firstName,lastName:e.lastName,phone:e.phone,fullName:`${e.firstName} ${e.lastName}`};m.value=t,F.clientId=e.id,F.clientName=t.fullName}k()}finally{w.value=!1}}let P=[{value:`confirmed`,label:`Potrjeno`,icon:`pi pi-check-circle`,activeClass:`border-green-400 text-green-700 bg-green-50`},{value:`cancelled`,label:`Odpovedano`,icon:`pi pi-times-circle`,activeClass:`border-red-400 text-red-700 bg-red-50`},{value:`no-show`,label:`Ni prišel`,icon:`pi pi-user-minus`,activeClass:`border-orange-400 text-orange-700 bg-orange-50`}],F=ee({blocked:!1,clientId:``,clientName:``,typeId:``,status:`confirmed`,date:new Date,startTime:new Date,duration:60,notes:``}),I=d(()=>s.categories.map(e=>({label:e.name,items:s.appointmentTypes.filter(t=>t.categoryId===e.id).map(t=>({label:t.name,value:t.id,color:t.color??e.color,duration:t.duration,price:t.price??null}))})).filter(e=>e.items.length>0));function z(){let e=s.getTypeById(F.typeId);e&&(F.duration=e.duration)}let B=d(()=>F.typeId?s.getTypeById(F.typeId)?.price??null:null);M(()=>r.visible,e=>{if(e)if(C.value=!1,k(),r.appointment)F.blocked=r.appointment.blocked??!1,F.clientId=``,F.clientName=r.appointment.clientName,m.value=r.appointment.clientName,F.typeId=r.appointment.typeId,F.status=r.appointment.status??`confirmed`,F.date=new Date(r.appointment.startTime),F.startTime=new Date(r.appointment.startTime),F.duration=(r.appointment.endTime.getTime()-r.appointment.startTime.getTime())/6e4,F.notes=r.appointment.notes??``;else{let e=r.initialTime??new Date;F.blocked=r.initialBlocked??!1,F.clientId=``,F.clientName=``,m.value=``,F.typeId=``,F.status=`confirmed`,F.date=new Date(e),F.startTime=new Date(e),F.duration=60,F.notes=``}});async function U(){f.value=!0;try{let e=new Date(F.date);e.setHours(F.startTime.getHours(),F.startTime.getMinutes(),0,0);let t=new Date(e.getTime()+F.duration*6e4),n;if(F.blocked)n={blocked:!0,status:F.status,clientName:F.clientName,typeId:``,typeName:``,categoryId:``,color:`#e5e7eb`,notes:F.notes,startTime:e,endTime:t};else{let r=s.getTypeById(F.typeId),i=r?s.getCategoryById(r.categoryId):null;n={blocked:!1,status:F.status,clientName:F.clientName,typeId:F.typeId,typeName:r?.name??``,categoryId:r?.categoryId??``,color:r?.color??i?.color??`#94a3b8`,...r?.price==null?{}:{price:r.price},notes:F.notes,startTime:e,endTime:t}}r.appointment?await c.updateAppointment(r.appointment.id,n):await c.addAppointment(n),i(`saved`)}finally{f.value=!1}}function W(){r.appointment&&u.require({message:`Izbriši "${r.appointment.clientName}"?`,header:`Potrdi brisanje`,icon:`pi pi-exclamation-triangle`,rejectLabel:`Prekliči`,acceptLabel:`Izbriši`,acceptClass:`p-button-danger`,accept:async()=>{await c.deleteAppointment(r.appointment.id),i(`deleted`)}})}return(t,r)=>{let i=V(`tooltip`);return T(),K(N(ie),{visible:e.visible,"onUpdate:visible":r[16]||=e=>t.$emit(`update:visible`,e),header:p.value?F.blocked?`Uredi blokiran čas`:`Uredi naročilo`:F.blocked?`Blokiran čas`:`Novo naročilo`,modal:``,class:`w-full max-w-md`},{footer:E(()=>[g(`div`,Rn,[p.value?(T(),K(N(G),{key:0,label:`Izbriši`,severity:`danger`,text:``,icon:`pi pi-trash`,onClick:W})):n(``,!0),g(`div`,zn,[o(N(G),{label:`Prekliči`,text:``,onClick:r[15]||=e=>t.$emit(`update:visible`,!1)}),o(N(G),{label:`Shrani`,disabled:F.blocked?!F.clientName:!F.clientName||!F.typeId,loading:f.value,onClick:U},null,8,[`disabled`,`loading`])])])]),default:E(()=>[g(`div`,sn,[g(`div`,cn,[g(`button`,{class:H([`flex-1 py-2 flex items-center justify-center gap-2 transition-colors`,F.blocked?`bg-white text-gray-500 hover:bg-gray-50`:`bg-pink-500 text-white`]),onClick:r[0]||=e=>F.blocked=!1},[...r[17]||=[g(`i`,{class:`pi pi-calendar`},null,-1),S(` Naročilo `,-1)]],2),g(`button`,{class:H([`flex-1 py-2 flex items-center justify-center gap-2 transition-colors border-l border-gray-200`,F.blocked?`bg-gray-700 text-white`:`bg-white text-gray-500 hover:bg-gray-50`]),onClick:r[1]||=e=>F.blocked=!0},[...r[18]||=[g(`i`,{class:`pi pi-lock`},null,-1),S(` Blokiran čas `,-1)]],2)]),F.blocked?(T(),x(`div`,kn,[r[28]||=g(`label`,{class:`text-sm font-medium text-gray-600`},`Naziv`,-1),o(N(Y),{modelValue:F.clientName,"onUpdate:modelValue":r[10]||=e=>F.clientName=e,placeholder:`npr. Odmor, Sestanek…`,class:`w-full`},null,8,[`modelValue`])])):(T(),x(a,{key:0},[g(`div`,ln,[r[24]||=g(`label`,{class:`text-sm font-medium text-gray-600`},`Stranka`,-1),g(`div`,un,[o(N(Ut),{modelValue:m.value,"onUpdate:modelValue":r[2]||=e=>m.value=e,suggestions:_.value,"option-label":`fullName`,placeholder:`Išči stranko...`,class:`flex-1`,"force-selection":``,dropdown:``,onComplete:y,onItemSelect:b,onClear:r[3]||=e=>{F.clientId=``,F.clientName=``}},{option:E(({option:e})=>[g(`div`,dn,[g(`div`,fn,[g(`span`,pn,R(e.firstName[0])+R(e.lastName[0]),1)]),g(`div`,null,[g(`p`,mn,R(e.fullName),1),g(`p`,hn,R(e.phone),1)])])]),_:1},8,[`modelValue`,`suggestions`]),L(o(N(G),{icon:`pi pi-user-plus`,outlined:``,onClick:r[4]||=e=>C.value=!C.value,class:H(C.value?`ring-2 ring-pink-400`:``)},null,8,[`class`]),[[i,`Dodaj novo stranko`,void 0,{top:!0}]])]),C.value?(T(),x(`div`,gn,[r[23]||=g(`p`,{class:`text-xs font-semibold text-gray-500 uppercase tracking-wide`},`Nova stranka`,-1),g(`div`,_n,[g(`div`,vn,[r[19]||=g(`label`,{class:`text-xs font-medium text-gray-500`},`Ime *`,-1),o(N(Y),{modelValue:D.firstName,"onUpdate:modelValue":r[5]||=e=>D.firstName=e,placeholder:`Ana`,size:`small`,class:`w-full`},null,8,[`modelValue`])]),g(`div`,yn,[r[20]||=g(`label`,{class:`text-xs font-medium text-gray-500`},`Priimek *`,-1),o(N(Y),{modelValue:D.lastName,"onUpdate:modelValue":r[6]||=e=>D.lastName=e,placeholder:`Novak`,size:`small`,class:`w-full`},null,8,[`modelValue`])])]),g(`div`,bn,[r[21]||=g(`label`,{class:`text-xs font-medium text-gray-500`},`Telefon *`,-1),o(N(Y),{modelValue:D.phone,"onUpdate:modelValue":r[7]||=e=>D.phone=e,placeholder:`+386 41 123 456`,size:`small`,class:`w-full`},null,8,[`modelValue`])]),g(`div`,xn,[r[22]||=g(`label`,{class:`text-xs font-medium text-gray-500`},`Opomba`,-1),o(N(Y),{modelValue:D.notes,"onUpdate:modelValue":r[8]||=e=>D.notes=e,placeholder:`Alergije, preference...`,size:`small`,class:`w-full`},null,8,[`modelValue`])]),g(`div`,Sn,[o(N(G),{label:`Prekliči`,text:``,size:`small`,onClick:k}),o(N(G),{label:`Dodaj stranko`,size:`small`,icon:`pi pi-check`,disabled:!D.firstName||!D.lastName||!D.phone,loading:w.value,onClick:A},null,8,[`disabled`,`loading`])])])):n(``,!0)]),g(`div`,Cn,[r[27]||=g(`label`,{class:`text-sm font-medium text-gray-600`},`Vrsta naročila`,-1),o(N(_e),{modelValue:F.typeId,"onUpdate:modelValue":r[9]||=e=>F.typeId=e,options:I.value,"option-label":`label`,"option-value":`value`,"option-group-label":`label`,"option-group-children":`items`,placeholder:`Izberi vrsto`,class:`w-full`,onChange:z},{option:E(({option:e})=>[g(`div`,wn,[g(`span`,{class:`w-3 h-3 rounded-full flex-shrink-0`,style:j({backgroundColor:e.color})},null,4),g(`span`,Tn,R(e.label),1),e.price==null?n(``,!0):(T(),x(`span`,En,R(e.price.toFixed(2))+` €`,1))])]),_:1},8,[`modelValue`,`options`]),B.value==null?n(``,!0):(T(),x(`p`,Dn,[r[25]||=g(`i`,{class:`pi pi-tag`,style:{"font-size":`11px`}},null,-1),r[26]||=S(` Cena: `,-1),g(`span`,On,R(B.value.toFixed(2))+` €`,1)]))])],64)),F.blocked?n(``,!0):(T(),x(`div`,An,[r[29]||=g(`label`,{class:`text-sm font-medium text-gray-600`},`Status`,-1),g(`div`,jn,[(T(),x(a,null,h(P,e=>g(`button`,{key:e.value,class:H([`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors`,F.status===e.value?e.activeClass:`border-gray-200 text-gray-400 bg-white hover:bg-gray-50`]),onClick:t=>F.status=e.value},[g(`i`,{class:H(e.icon),style:{"font-size":`11px`}},null,2),S(` `+R(e.label),1)],10,Mn)),64))])])),g(`div`,Nn,[g(`div`,Pn,[r[30]||=g(`label`,{class:`text-sm font-medium text-gray-600`},`Datum`,-1),o(N(ve),{modelValue:F.date,"onUpdate:modelValue":r[11]||=e=>F.date=e,"date-format":`dd.mm.yy`,class:`w-full`},null,8,[`modelValue`])]),g(`div`,Fn,[r[31]||=g(`label`,{class:`text-sm font-medium text-gray-600`},`Čas začetka`,-1),o(N(ve),{modelValue:F.startTime,"onUpdate:modelValue":r[12]||=e=>F.startTime=e,"time-only":``,"hour-format":`24`,"step-minute":5,class:`w-full`},null,8,[`modelValue`])])]),g(`div`,In,[r[32]||=g(`label`,{class:`text-sm font-medium text-gray-600`},`Trajanje (minute)`,-1),o(N(ue),{modelValue:F.duration,"onUpdate:modelValue":r[13]||=e=>F.duration=e,min:5,step:5,class:`w-full`},null,8,[`modelValue`])]),g(`div`,Ln,[r[33]||=g(`label`,{class:`text-sm font-medium text-gray-600`},`Opombe`,-1),o(N(ye),{modelValue:F.notes,"onUpdate:modelValue":r[14]||=e=>F.notes=e,rows:`2`,placeholder:`Opcijsko...`,class:`w-full`},null,8,[`modelValue`])])])]),_:1},8,[`visible`,`header`])}}}),Vn={class:`flex flex-col h-screen bg-white overflow-hidden`},Hn={class:`flex-1 min-h-0 overflow-hidden flex flex-col`},Un=l({__name:`CalendarView`,setup(e){let{currentDate:t,view:r,goToToday:i,navigate:a,weekDays:s,monthDays:c,timeSlots:l,headerLabel:u,SLOT_HEIGHT_PX:d,topForTime:f,heightForDuration:p,snapToFiveMinutes:m,appointmentsForDay:h,isSameDay:_,isCurrentMonth:v}=be(),y=J(),b=le(),S=de(),E=O(!1),D=O(null),k=O(null),A=O(!1);function j(e){D.value=null,k.value=e,A.value=!1,E.value=!0}function M(e){D.value=e,k.value=null,A.value=!1,E.value=!0}function P(){D.value=null,k.value=new Date,A.value=!0,E.value=!0}return w(()=>{y.subscribe(),b.subscribeAll(),S.subscribe()}),C(()=>{y.unsubscribeAll(),b.unsubscribeAll(),S.unsubscribeAll()}),(e,b)=>(T(),x(`div`,Vn,[o(Ke,{"header-label":N(u),view:N(r),onNavigate:N(a),onToday:N(i),onChangeView:b[0]||=e=>r.value=e,onBlockTime:P},null,8,[`header-label`,`view`,`onNavigate`,`onToday`]),g(`div`,Hn,[N(r)===`day`?(T(),K(pt,{key:0,date:N(t),appointments:N(y).appointments,"time-slots":N(l),"slot-height":N(d),"top-for-time":N(f),"height-for-duration":N(p),"snap-to-five":N(m),"appointments-for-day":N(h),onAddAppointment:j,onEditAppointment:M},null,8,[`date`,`appointments`,`time-slots`,`slot-height`,`top-for-time`,`height-for-duration`,`snap-to-five`,`appointments-for-day`])):N(r)===`week`?(T(),K(vt,{key:1,"week-days":N(s),appointments:N(y).appointments,"time-slots":N(l),"slot-height":N(d),"top-for-time":N(f),"height-for-duration":N(p),"snap-to-five":N(m),"appointments-for-day":N(h),onAddAppointment:j,onEditAppointment:M},null,8,[`week-days`,`appointments`,`time-slots`,`slot-height`,`top-for-time`,`height-for-duration`,`snap-to-five`,`appointments-for-day`])):N(r)===`month`?(T(),K(Dt,{key:2,"current-date":N(t),"month-days":N(c),appointments:N(y).appointments,"is-same-day":N(_),"is-current-month":N(v),"appointments-for-day":N(h),onAddAppointment:j,onEditAppointment:M},null,8,[`current-date`,`month-days`,`appointments`,`is-same-day`,`is-current-month`,`appointments-for-day`])):n(``,!0)]),o(Bn,{visible:E.value,"onUpdate:visible":b[1]||=e=>E.value=e,appointment:D.value,"initial-time":k.value,"initial-blocked":A.value,onSaved:b[2]||=e=>E.value=!1,onDeleted:b[3]||=e=>E.value=!1},null,8,[`visible`,`appointment`,`initial-time`,`initial-blocked`])]))}});export{Un as default};