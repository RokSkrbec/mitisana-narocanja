import{$t as e,Bt as t,Ft as n,Gt as r,Jt as i,Kt as a,O as o,Qt as s,Rt as c,T as l,Vt as u,Wt as d,Xt as f,Yt as p,Zt as m,an as h,cn as g,fn as _,ln as v,mt as y,on as b,pn as x,sn as S,tn as ee,un as C,x as w,y as T}from"./config-DW9ciqWF.js";import{a as E,i as D,s as te}from"./index-Caf_nhdx.js";import{n as ne,t as O}from"./inputnumber-CfYnqCXG.js";import{t as k}from"./inputtext-CbVjz0Me.js";import{t as A}from"./select-CrYwk2gY.js";var j=o.extend({name:`divider`,style:`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,classes:{root:function(e){var t=e.props;return[`p-divider p-component`,`p-divider-`+t.layout,`p-divider-`+t.type,{"p-divider-left":t.layout===`horizontal`&&(!t.align||t.align===`left`)},{"p-divider-center":t.layout===`horizontal`&&t.align===`center`},{"p-divider-right":t.layout===`horizontal`&&t.align===`right`},{"p-divider-top":t.layout===`vertical`&&t.align===`top`},{"p-divider-center":t.layout===`vertical`&&(!t.align||t.align===`center`)},{"p-divider-bottom":t.layout===`vertical`&&t.align===`bottom`}]},content:`p-divider-content`},inlineStyles:{root:function(e){var t=e.props;return{justifyContent:t.layout===`horizontal`?t.align===`center`||t.align===null?`center`:t.align===`left`?`flex-start`:t.align===`right`?`flex-end`:null:null,alignItems:t.layout===`vertical`?t.align===`center`||t.align===null?`center`:t.align===`top`?`flex-start`:t.align===`bottom`?`flex-end`:null:null}}}}),M={name:`BaseDivider`,extends:l,props:{align:{type:String,default:null},layout:{type:String,default:`horizontal`},type:{type:String,default:`solid`}},style:j,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function N(e){"@babel/helpers - typeof";return N=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},N(e)}function P(e,t,n){return(t=F(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){var t=I(e,`string`);return N(t)==`symbol`?t:t+``}function I(e,t){if(N(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(N(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var L={name:`Divider`,extends:M,inheritAttrs:!1,computed:{dataP:function(){return y(P(P(P({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},R=[`aria-orientation`,`data-p`],z=[`data-p`];function B(n,r,a,o,s,c){return m(),u(`div`,i({class:n.cx(`root`),style:n.sx(`root`),role:`separator`,"aria-orientation":n.layout,"data-p":c.dataP},n.ptmi(`root`)),[n.$slots.default?(m(),u(`div`,i({key:0,class:n.cx(`content`),"data-p":c.dataP},n.ptm(`content`)),[e(n.$slots,`default`)],16,z)):t(``,!0)],16,R)}L.render=B;var V={class:`flex flex-col h-screen bg-gray-50 overflow-hidden`},H={class:`flex items-center gap-3 px-6 py-3 bg-white border-b border-gray-200 flex-shrink-0`},U={class:`flex-1 overflow-y-auto`},W={class:`flex flex-col px-6 py-8 max-w-4xl mx-auto gap-10`},G={class:`flex items-center justify-between mb-4`},K={class:`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3`},q={class:`flex-1 font-medium text-gray-700 truncate`},J={class:`flex items-center justify-between mb-4`},Y={key:0,class:`text-sm text-gray-400 italic`},X={key:1,class:`flex flex-col gap-6`},Z={class:`flex items-center gap-2 mb-2`},re={class:`text-sm font-semibold text-gray-500 uppercase tracking-wide`},ie={key:0,class:`flex flex-col gap-2 pl-5`},ae={class:`flex-1 min-w-0`},oe={class:`font-medium text-gray-700 truncate`},se={class:`text-xs text-gray-400`},ce={key:0},le={key:1,class:`pl-5 text-xs text-gray-400 italic`},ue={class:`flex flex-col gap-4 pt-2`},de={class:`flex flex-col gap-1`},fe={class:`flex flex-col gap-2`},pe={class:`flex flex-wrap gap-2`},me=[`onClick`],he={class:`flex flex-col gap-4 pt-2`},ge={class:`flex flex-col gap-1`},_e={class:`flex flex-col gap-1`},ve={class:`flex flex-col gap-1`},ye={class:`flex flex-col gap-1`},be={class:`flex flex-col gap-2`},xe={class:`flex flex-wrap gap-2`},Se=[`onClick`],Ce={key:0,class:`pi pi-times text-xs text-gray-400`},Q=a({__name:`SettingsView`,setup(e){let i=T(),a=ne(),o=te();p(()=>{a.subscribeAll()}),f(()=>{a.unsubscribeAll()});let l=g(!1),y=g(null),j=S({name:``,color:`#EF4444`});function M(e){y.value=e??null,j.name=e?.name??``,j.color=e?.color??`#EF4444`,l.value=!0}async function N(){y.value?await a.updateCategory(y.value.id,{name:j.name,color:j.color}):await a.addCategory(j.name,j.color),l.value=!1}function P(e){o.require({message:`Ste prepričani, da želite izbrisati kategorijo "${e.name}"?`,header:`Potrdi brisanje`,icon:`pi pi-exclamation-triangle`,rejectLabel:`Prekliči`,acceptLabel:`Izbriši`,acceptClass:`p-button-danger`,accept:()=>a.deleteCategory(e.id)})}let F=g(!1),I=g(null),R=S({name:``,categoryId:``,duration:60,price:null,color:null});function z(e){I.value=e??null,R.name=e?.name??``,R.categoryId=e?.categoryId??``,R.duration=e?.duration??60,R.price=e?.price??null,R.color=e?.color??null,F.value=!0}async function B(){let e={name:R.name,categoryId:R.categoryId,duration:R.duration,...R.price==null?{}:{price:R.price},...R.color?{color:R.color}:{}};I.value?await a.updateAppointmentType(I.value.id,e):await a.addAppointmentType(e),F.value=!1}function Q(e){o.require({message:`Ste prepričani, da želite izbrisati vrsto "${e.name}"?`,header:`Potrdi brisanje`,icon:`pi pi-exclamation-triangle`,rejectLabel:`Prekliči`,acceptLabel:`Izbriši`,acceptClass:`p-button-danger`,accept:()=>a.deleteAppointmentType(e.id)})}function $(e){return a.appointmentTypes.filter(t=>t.categoryId===e)}return(e,o)=>{let f=ee(`tooltip`);return m(),u(`div`,V,[c(`header`,H,[b(r(v(w),{icon:`pi pi-arrow-left`,text:``,rounded:``,onClick:o[0]||=e=>v(i).push(`/`)},null,512),[[f,`Nazaj na koledar`,void 0,{bottom:!0}]]),o[12]||=c(`h1`,{class:`text-lg font-bold text-gray-800`},`Nastavitve`,-1)]),c(`div`,U,[c(`div`,W,[c(`section`,null,[c(`div`,G,[o[13]||=c(`h2`,{class:`text-lg font-semibold text-gray-800`},`Kategorije`,-1),r(v(w),{icon:`pi pi-plus`,label:`Dodaj kategorijo`,size:`small`,onClick:o[1]||=e=>M()})]),c(`div`,K,[(m(!0),u(n,null,s(v(a).categories,e=>(m(),u(`div`,{key:e.id,class:`flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm`},[c(`span`,{class:`w-5 h-5 rounded-full flex-shrink-0`,style:_({backgroundColor:e.color})},null,4),c(`span`,q,x(e.name),1),r(v(w),{icon:`pi pi-pencil`,text:``,size:`small`,onClick:t=>M(e)},null,8,[`onClick`]),r(v(w),{icon:`pi pi-trash`,text:``,size:`small`,severity:`danger`,onClick:t=>P(e)},null,8,[`onClick`])]))),128))])]),r(v(L)),c(`section`,null,[c(`div`,J,[o[14]||=c(`h2`,{class:`text-lg font-semibold text-gray-800`},`Vrste naročil`,-1),r(v(w),{icon:`pi pi-plus`,label:`Dodaj vrsto`,size:`small`,onClick:o[2]||=e=>z()})]),v(a).categories.length===0?(m(),u(`div`,Y,` Najprej dodajte vsaj eno kategorijo. `)):(m(),u(`div`,X,[(m(!0),u(n,null,s(v(a).categories,e=>(m(),u(`div`,{key:e.id},[c(`div`,Z,[c(`span`,{class:`w-3 h-3 rounded-full flex-shrink-0`,style:_({backgroundColor:e.color})},null,4),c(`h3`,re,x(e.name),1)]),$(e.id).length>0?(m(),u(`div`,ie,[(m(!0),u(n,null,s($(e.id),n=>(m(),u(`div`,{key:n.id,class:`flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm`},[c(`span`,{class:`w-4 h-4 rounded-full flex-shrink-0`,style:_({backgroundColor:n.color||e.color})},null,4),c(`div`,ae,[c(`p`,oe,x(n.name),1),c(`p`,se,[d(x(n.duration)+` min `,1),n.price==null?t(``,!0):(m(),u(`span`,ce,` · `+x(n.price.toFixed(2))+` €`,1))])]),r(v(w),{icon:`pi pi-pencil`,text:``,size:`small`,onClick:e=>z(n)},null,8,[`onClick`]),r(v(w),{icon:`pi pi-trash`,text:``,size:`small`,severity:`danger`,onClick:e=>Q(n)},null,8,[`onClick`])]))),128))])):(m(),u(`p`,le,`Ni dodanih vrst.`))]))),128))]))])])]),r(v(E),{visible:l.value,"onUpdate:visible":o[5]||=e=>l.value=e,header:y.value?`Uredi kategorijo`:`Nova kategorija`,modal:``,class:`w-full max-w-sm`},{footer:h(()=>[r(v(w),{label:`Prekliči`,text:``,onClick:o[4]||=e=>l.value=!1}),r(v(w),{label:`Shrani`,disabled:!j.name,onClick:N},null,8,[`disabled`])]),default:h(()=>[c(`div`,ue,[c(`div`,de,[o[15]||=c(`label`,{class:`text-sm font-medium text-gray-600`},`Ime kategorije`,-1),r(v(k),{modelValue:j.name,"onUpdate:modelValue":o[3]||=e=>j.name=e,placeholder:`npr. Manikura`,class:`w-full`},null,8,[`modelValue`])]),c(`div`,fe,[o[16]||=c(`label`,{class:`text-sm font-medium text-gray-600`},`Barva`,-1),c(`div`,pe,[(m(!0),u(n,null,s(v(a).PRESET_COLORS,e=>(m(),u(`button`,{key:e,class:C([`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110`,j.color===e?`border-gray-800 scale-110`:`border-transparent`]),style:_({backgroundColor:e}),onClick:t=>j.color=e},null,14,me))),128))])])])]),_:1},8,[`visible`,`header`]),r(v(E),{visible:F.value,"onUpdate:visible":o[11]||=e=>F.value=e,header:I.value?`Uredi vrsto naročila`:`Nova vrsta naročila`,modal:``,class:`w-full max-w-sm`},{footer:h(()=>[r(v(w),{label:`Prekliči`,text:``,onClick:o[10]||=e=>F.value=!1}),r(v(w),{label:`Shrani`,disabled:!R.name||!R.categoryId,onClick:B},null,8,[`disabled`])]),default:h(()=>[c(`div`,he,[c(`div`,ge,[o[17]||=c(`label`,{class:`text-sm font-medium text-gray-600`},`Ime`,-1),r(v(k),{modelValue:R.name,"onUpdate:modelValue":o[6]||=e=>R.name=e,placeholder:`npr. Gel lak`,class:`w-full`},null,8,[`modelValue`])]),c(`div`,_e,[o[18]||=c(`label`,{class:`text-sm font-medium text-gray-600`},`Kategorija`,-1),r(v(A),{modelValue:R.categoryId,"onUpdate:modelValue":o[7]||=e=>R.categoryId=e,options:v(a).categories,"option-label":`name`,"option-value":`id`,placeholder:`Izberi kategorijo`,class:`w-full`},null,8,[`modelValue`,`options`])]),c(`div`,ve,[o[19]||=c(`label`,{class:`text-sm font-medium text-gray-600`},`Trajanje (minute)`,-1),r(v(O),{modelValue:R.duration,"onUpdate:modelValue":o[8]||=e=>R.duration=e,min:5,step:5,class:`w-full`},null,8,[`modelValue`])]),c(`div`,ye,[o[20]||=c(`label`,{class:`text-sm font-medium text-gray-600`},`Cena (€, opcijsko)`,-1),r(v(O),{modelValue:R.price,"onUpdate:modelValue":o[9]||=e=>R.price=e,min:0,step:.5,"max-fraction-digits":2,placeholder:`npr. 25.00`,class:`w-full`},null,8,[`modelValue`])]),c(`div`,be,[o[21]||=c(`label`,{class:`text-sm font-medium text-gray-600`},`Barva (opcijsko — prepiše barvo kategorije)`,-1),c(`div`,xe,[(m(!0),u(n,null,s([null,...v(a).PRESET_COLORS],e=>(m(),u(`button`,{key:e??`none`,class:C([`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 flex items-center justify-center`,R.color===e?`border-gray-800 scale-110`:`border-gray-200`]),style:_(e?{backgroundColor:e}:{backgroundColor:`#f3f4f6`}),onClick:t=>R.color=e},[e?t(``,!0):(m(),u(`i`,Ce))],14,Se))),128))])])])]),_:1},8,[`visible`,`header`]),r(v(D))])}}});export{Q as default};