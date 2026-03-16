import{Bt as e,D as t,Gt as n,Jt as r,Lt as i,Pt as a,Qt as o,Ut as s,Wt as c,Xt as l,Yt as u,Zt as d,an as ee,b as f,cn as p,dn as m,en as te,fn as h,in as g,ln as _,on as v,pt as y,qt as b,sn as x,v as S,w as C,zt as w}from"./config-B45yrKs1.js";import{a as T,i as E,s as D}from"./index-lngRsMFK.js";import{n as O,t as k}from"./inputnumber-jemLWR0e.js";import{t as A}from"./inputtext-CVTBCKIw.js";import{t as ne}from"./select-_1wMbDSA.js";var j=t.extend({name:`divider`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-divider p-component`,`p-divider-`+t.layout,`p-divider-`+t.type,{"p-divider-left":t.layout===`horizontal`&&(!t.align||t.align===`left`)},{"p-divider-center":t.layout===`horizontal`&&t.align===`center`},{"p-divider-right":t.layout===`horizontal`&&t.align===`right`},{"p-divider-top":t.layout===`vertical`&&t.align===`top`},{"p-divider-center":t.layout===`vertical`&&(!t.align||t.align===`center`)},{"p-divider-bottom":t.layout===`vertical`&&t.align===`bottom`}]},content:`p-divider-content`},inlineStyles:{root:function(e){var t=e.props;return{justifyContent:t.layout===`horizontal`?t.align===`center`||t.align===null?`center`:t.align===`left`?`flex-start`:t.align===`right`?`flex-end`:null:null,alignItems:t.layout===`vertical`?t.align===`center`||t.align===null?`center`:t.align===`top`?`flex-start`:t.align===`bottom`?`flex-end`:null:null}}}}),M={name:`BaseDivider`,extends:C,props:{align:{type:String,default:null},layout:{type:String,default:`horizontal`},type:{type:String,default:`solid`}},style:j,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function N(e){"@babel/helpers - typeof";return N=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},N(e)}function P(e,t,n){return(t=F(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){var t=I(e,`string`);return N(t)==`symbol`?t:t+``}function I(e,t){if(N(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(N(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var L={name:`Divider`,extends:M,inheritAttrs:!1,computed:{dataP:function(){return y(P(P(P({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},R=[`aria-orientation`,`data-p`],z=[`data-p`];function B(t,n,r,i,a,s){return l(),e(`div`,b({class:t.cx(`root`),style:t.sx(`root`),role:`separator`,"aria-orientation":t.layout,"data-p":s.dataP},t.ptmi(`root`)),[t.$slots.default?(l(),e(`div`,b({key:0,class:t.cx(`content`),"data-p":s.dataP},t.ptm(`content`)),[o(t.$slots,`default`)],16,z)):w(``,!0)],16,R)}L.render=B;var V={class:`flex flex-col h-screen bg-gray-50 overflow-hidden`},H={class:`flex items-center gap-3 px-6 py-3 bg-white border-b border-gray-200 flex-shrink-0`},U={class:`flex-1 overflow-y-auto`},W={class:`flex flex-col px-6 py-8 max-w-4xl mx-auto gap-10`},G={class:`flex items-center justify-between mb-4`},K={class:`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3`},q={class:`flex-1 font-medium text-gray-700 truncate`},J={class:`flex items-center justify-between mb-4`},Y={key:0,class:`text-sm text-gray-400 italic`},X={key:1,class:`flex flex-col gap-6`},Z={class:`flex items-center gap-2 mb-2`},re={class:`text-sm font-semibold text-gray-500 uppercase tracking-wide`},ie={key:0,class:`flex flex-col gap-2 pl-5`},ae={class:`flex-1 min-w-0`},oe={class:`font-medium text-gray-700 truncate`},se={class:`text-xs text-gray-400`},ce={key:0},le={key:1,class:`pl-5 text-xs text-gray-400 italic`},ue={class:`flex flex-col gap-4 pt-2`},de={class:`flex flex-col gap-1`},fe={class:`flex flex-col gap-2`},pe={class:`flex flex-wrap gap-2`},me=[`onClick`],he={class:`flex flex-col gap-4 pt-2`},ge={class:`flex flex-col gap-1`},_e={class:`flex flex-col gap-1`},ve={class:`flex flex-col gap-1`},ye={class:`flex flex-col gap-1`},be={class:`flex flex-col gap-2`},xe={class:`flex flex-wrap gap-2`},Se=[`onClick`],Ce={key:0,class:`pi pi-times text-xs text-gray-400`},Q=n({__name:`SettingsView`,setup(t){let n=S(),o=O(),y=D();r(()=>{o.subscribeAll()}),u(()=>{o.unsubscribeAll()});let b=x(!1),C=x(null),j=v({name:``,color:`#EF4444`});function M(e){C.value=e??null,j.name=e?.name??``,j.color=e?.color??`#EF4444`,b.value=!0}async function N(){C.value?await o.updateCategory(C.value.id,{name:j.name,color:j.color}):await o.addCategory(j.name,j.color),b.value=!1}function P(e){y.require({message:`Ste prepričani, da želite izbrisati kategorijo "${e.name}"?`,header:`Potrdi brisanje`,icon:`pi pi-exclamation-triangle`,rejectLabel:`Prekliči`,acceptLabel:`Izbriši`,acceptClass:`p-button-danger`,accept:()=>o.deleteCategory(e.id)})}let F=x(!1),I=x(null),R=v({name:``,categoryId:``,duration:60,price:null,color:null});function z(e){I.value=e??null,R.name=e?.name??``,R.categoryId=e?.categoryId??``,R.duration=e?.duration??60,R.price=e?.price??null,R.color=e?.color??null,F.value=!0}async function B(){let e={name:R.name,categoryId:R.categoryId,duration:R.duration,...R.price==null?{}:{price:R.price},...R.color?{color:R.color}:{}};I.value?await o.updateAppointmentType(I.value.id,e):await o.addAppointmentType(e),F.value=!1}function Q(e){y.require({message:`Ste prepričani, da želite izbrisati vrsto "${e.name}"?`,header:`Potrdi brisanje`,icon:`pi pi-exclamation-triangle`,rejectLabel:`Prekliči`,acceptLabel:`Izbriši`,acceptClass:`p-button-danger`,accept:()=>o.deleteAppointmentType(e.id)})}function $(e){return o.appointmentTypes.filter(t=>t.categoryId===e)}return(t,r)=>{let u=te(`tooltip`);return l(),e(`div`,V,[i(`header`,H,[ee(c(p(f),{icon:`pi pi-arrow-left`,text:``,rounded:``,onClick:r[0]||=e=>p(n).push(`/`)},null,512),[[u,`Nazaj na koledar`,void 0,{bottom:!0}]]),r[12]||=i(`h1`,{class:`text-lg font-bold text-gray-800`},`Nastavitve`,-1)]),i(`div`,U,[i(`div`,W,[i(`section`,null,[i(`div`,G,[r[13]||=i(`h2`,{class:`text-lg font-semibold text-gray-800`},`Kategorije`,-1),c(p(f),{icon:`pi pi-plus`,label:`Dodaj kategorijo`,size:`small`,onClick:r[1]||=e=>M()})]),i(`div`,K,[(l(!0),e(a,null,d(p(o).categories,t=>(l(),e(`div`,{key:t.id,class:`flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm`},[i(`span`,{class:`w-5 h-5 rounded-full flex-shrink-0`,style:m({backgroundColor:t.color})},null,4),i(`span`,q,h(t.name),1),c(p(f),{icon:`pi pi-pencil`,text:``,size:`small`,onClick:e=>M(t)},null,8,[`onClick`]),c(p(f),{icon:`pi pi-trash`,text:``,size:`small`,severity:`danger`,onClick:e=>P(t)},null,8,[`onClick`])]))),128))])]),c(p(L)),i(`section`,null,[i(`div`,J,[r[14]||=i(`h2`,{class:`text-lg font-semibold text-gray-800`},`Vrste naročil`,-1),c(p(f),{icon:`pi pi-plus`,label:`Dodaj vrsto`,size:`small`,onClick:r[2]||=e=>z()})]),p(o).categories.length===0?(l(),e(`div`,Y,` Najprej dodajte vsaj eno kategorijo. `)):(l(),e(`div`,X,[(l(!0),e(a,null,d(p(o).categories,t=>(l(),e(`div`,{key:t.id},[i(`div`,Z,[i(`span`,{class:`w-3 h-3 rounded-full flex-shrink-0`,style:m({backgroundColor:t.color})},null,4),i(`h3`,re,h(t.name),1)]),$(t.id).length>0?(l(),e(`div`,ie,[(l(!0),e(a,null,d($(t.id),n=>(l(),e(`div`,{key:n.id,class:`flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm`},[i(`span`,{class:`w-4 h-4 rounded-full flex-shrink-0`,style:m({backgroundColor:n.color||t.color})},null,4),i(`div`,ae,[i(`p`,oe,h(n.name),1),i(`p`,se,[s(h(n.duration)+` min `,1),n.price==null?w(``,!0):(l(),e(`span`,ce,` · `+h(n.price.toFixed(2))+` €`,1))])]),c(p(f),{icon:`pi pi-pencil`,text:``,size:`small`,onClick:e=>z(n)},null,8,[`onClick`]),c(p(f),{icon:`pi pi-trash`,text:``,size:`small`,severity:`danger`,onClick:e=>Q(n)},null,8,[`onClick`])]))),128))])):(l(),e(`p`,le,`Ni dodanih vrst.`))]))),128))]))])])]),c(p(T),{visible:b.value,"onUpdate:visible":r[5]||=e=>b.value=e,header:C.value?`Uredi kategorijo`:`Nova kategorija`,modal:``,class:`w-full max-w-sm`},{footer:g(()=>[c(p(f),{label:`Prekliči`,text:``,onClick:r[4]||=e=>b.value=!1}),c(p(f),{label:`Shrani`,disabled:!j.name,onClick:N},null,8,[`disabled`])]),default:g(()=>[i(`div`,ue,[i(`div`,de,[r[15]||=i(`label`,{class:`text-sm font-medium text-gray-600`},`Ime kategorije`,-1),c(p(A),{modelValue:j.name,"onUpdate:modelValue":r[3]||=e=>j.name=e,placeholder:`npr. Manikura`,class:`w-full`},null,8,[`modelValue`])]),i(`div`,fe,[r[16]||=i(`label`,{class:`text-sm font-medium text-gray-600`},`Barva`,-1),i(`div`,pe,[(l(!0),e(a,null,d(p(o).PRESET_COLORS,t=>(l(),e(`button`,{key:t,class:_([`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110`,j.color===t?`border-gray-800 scale-110`:`border-transparent`]),style:m({backgroundColor:t}),onClick:e=>j.color=t},null,14,me))),128))])])])]),_:1},8,[`visible`,`header`]),c(p(T),{visible:F.value,"onUpdate:visible":r[11]||=e=>F.value=e,header:I.value?`Uredi vrsto naročila`:`Nova vrsta naročila`,modal:``,class:`w-full max-w-sm`},{footer:g(()=>[c(p(f),{label:`Prekliči`,text:``,onClick:r[10]||=e=>F.value=!1}),c(p(f),{label:`Shrani`,disabled:!R.name||!R.categoryId,onClick:B},null,8,[`disabled`])]),default:g(()=>[i(`div`,he,[i(`div`,ge,[r[17]||=i(`label`,{class:`text-sm font-medium text-gray-600`},`Ime`,-1),c(p(A),{modelValue:R.name,"onUpdate:modelValue":r[6]||=e=>R.name=e,placeholder:`npr. Gel lak`,class:`w-full`},null,8,[`modelValue`])]),i(`div`,_e,[r[18]||=i(`label`,{class:`text-sm font-medium text-gray-600`},`Kategorija`,-1),c(p(ne),{modelValue:R.categoryId,"onUpdate:modelValue":r[7]||=e=>R.categoryId=e,options:p(o).categories,"option-label":`name`,"option-value":`id`,placeholder:`Izberi kategorijo`,class:`w-full`},null,8,[`modelValue`,`options`])]),i(`div`,ve,[r[19]||=i(`label`,{class:`text-sm font-medium text-gray-600`},`Trajanje (minute)`,-1),c(p(k),{modelValue:R.duration,"onUpdate:modelValue":r[8]||=e=>R.duration=e,min:5,step:5,class:`w-full`},null,8,[`modelValue`])]),i(`div`,ye,[r[20]||=i(`label`,{class:`text-sm font-medium text-gray-600`},`Cena (€, opcijsko)`,-1),c(p(k),{modelValue:R.price,"onUpdate:modelValue":r[9]||=e=>R.price=e,min:0,step:.5,"max-fraction-digits":2,placeholder:`npr. 25.00`,class:`w-full`},null,8,[`modelValue`])]),i(`div`,be,[r[21]||=i(`label`,{class:`text-sm font-medium text-gray-600`},`Barva (opcijsko — prepiše barvo kategorije)`,-1),i(`div`,xe,[(l(!0),e(a,null,d([null,...p(o).PRESET_COLORS],t=>(l(),e(`button`,{key:t??`none`,class:_([`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 flex items-center justify-center`,R.color===t?`border-gray-800 scale-110`:`border-gray-200`]),style:m(t?{backgroundColor:t}:{backgroundColor:`#f3f4f6`}),onClick:e=>R.color=t},[t?w(``,!0):(l(),e(`i`,Ce))],14,Se))),128))])])])]),_:1},8,[`visible`,`header`]),c(p(E))])}}});export{Q as default};