import{a as d}from"./chunk-YJSPS3VW.js";import{a as g}from"./chunk-KDP4ZIAK.js";import{a as u,b as p}from"./chunk-3QOWKIV7.js";import"./chunk-UH6WZALW.js";import{a as r}from"./chunk-DUNLGLCX.js";import{b as L}from"./chunk-NLMHZ7JJ.js";var f=L(g());var h=class extends d{constructor(e,t){var o;super(e);this.historicalValues=[];this.historyCursor=0;this.lastRemoteQuery=new URLSearchParams;this.declaredStyles=document.createElement("style"),this.declaredStyles.innerText=u,document.head.appendChild(this.declaredStyles),this.selectorElement=e,this.containerElement=this.fieldGroup.querySelector(".dj-dual-selector"),e.setAttribute("multiple","multiple");let l=this.fieldGroup.querySelectorAll('input[type="text"]');l.length===2&&(this.searchLeftInput=l[0],this.searchRightInput=l[1],this.searchLeftInput.addEventListener("input",n=>this.leftLookup()),this.searchRightInput.addEventListener("input",n=>this.rightLookup()));let s=this.fieldGroup.querySelectorAll(`select:not([is="${t}"])`);if(s.length>=1)if(this.selectLeftElement=s.item(0),s.length===2)this.selectRightElement=s.item(1);else{let n=this.fieldGroup.querySelector("django-sortable-select");this.selectRightElement=n}else throw new Error(`<select is="${t}"> requires two <select>-elements`);this.moveAllRightButton=this.fieldGroup.querySelector("button.dj-move-all-right"),this.moveSelectedRightButton=this.fieldGroup.querySelector("button.dj-move-selected-right"),this.moveSelectedLeftButton=this.fieldGroup.querySelector("button.dj-move-selected-left"),this.moveAllLeftButton=this.fieldGroup.querySelector("button.dj-move-all-left"),this.undoButton=this.fieldGroup.querySelector("button.dj-undo-selected"),this.redoButton=this.fieldGroup.querySelector("button.dj-redo-selected"),this.selectorElement.classList.add("dj-concealed");let i=(o=e.parentElement)==null?void 0:o.querySelector("template.select-no-results");this.renderNoResults=n=>i?(0,f.default)(i.innerHTML)(n):"No results",this.installEventHandlers(),this.initialize(),this.transferStyles(),this.setButtonsState(),this.setupFilters(e)}installEventHandlers(){var e,t,l,s,i,o;this.selectLeftElement.addEventListener("focus",this.touch),this.selectLeftElement.addEventListener("dblclick",n=>this.moveOptionRight(n.target)),this.selectLeftElement.addEventListener("scroll",n=>this.selectLeftScrolled()),this.selectRightElement.addEventListener("focus",this.touch),this.selectRightElement.addEventListener("dblclick",n=>this.moveOptionLeft(n.target)),this.selectRightElement.addEventListener("options-sorted",n=>this.optionsSorted()),(e=this.moveAllRightButton)==null||e.addEventListener("click",n=>this.moveAllOptionsRight()),(t=this.moveSelectedRightButton)==null||t.addEventListener("click",n=>this.moveSelectedOptionsRight()),(l=this.moveSelectedLeftButton)==null||l.addEventListener("click",n=>this.moveSelectedOptionsLeft()),(s=this.moveAllLeftButton)==null||s.addEventListener("click",n=>this.moveAllOptionsLeft()),(i=this.undoButton)==null||i.addEventListener("click",n=>this.unOrRedo(-1)),(o=this.redoButton)==null||o.addEventListener("click",n=>this.unOrRedo(1))}initialize(){let e=[];this.selectorElement.querySelectorAll(":scope > option").forEach(s=>{let i={id:s.value,label:s.label};s.selected?(this.addOptionToSelectElement(i,this.selectRightElement),e.push(s.value)):this.addOptionToSelectElement(i,this.selectLeftElement),s.replaceChildren()}),this.selectorElement.querySelectorAll(":scope > optgroup").forEach(s=>{s.querySelectorAll("option").forEach(i=>{let o={id:i.value,label:i.label,optgroup:s.label};i.selected?(this.addOptionToSelectElement(o,this.selectRightElement),e.push(i.value)):this.addOptionToSelectElement(o,this.selectLeftElement),i.replaceChildren()}),s.replaceWith(...s.childNodes)}),this.historicalValues.push(e),this.setHistoryCursor(0),this.selectRightElement instanceof p&&this.selectRightElement.initialize(this.selectLeftElement)}addNoResultsOption(e,t){let l=new Option(this.renderNoResults({input:t}));l.disabled=!0,e.add(l)}addOptionToSelectElement(e,t){let l=t.querySelector(`option[value="${e.id}"]`);if(l instanceof HTMLOptionElement)return l;let s=new Option(e.label,e.id);if(typeof e.optgroup=="string"){let i=t.querySelector(`optgroup[label="${e.optgroup}"]`);i||(i=document.createElement("optgroup"),i instanceof HTMLOptGroupElement&&(i.label=e.optgroup,t.add(i))),i.appendChild(s)}else t.add(s);return s}selectLeftScrolled(){if(!this.isIncomplete)return;this.selectLeftElement.scrollHeight-this.selectLeftElement.scrollTop<=this.selectLeftElement.offsetHeight&&this.remoteLookup()}remoteLookup(){var l;let e,t=(l=this.searchLeftInput)==null?void 0:l.value;if(t){let s=this.selectLeftElement.querySelectorAll("option:not([hidden])").length;e=this.buildFetchQuery(s,t)}else e=this.buildFetchQuery(this.selectorElement.childElementCount);this.lastRemoteQuery!==e&&(this.lastRemoteQuery=e,this.loadOptions(e,s=>s.forEach(i=>{if(!this.selectorElement.querySelector(`option[value="${i.id}"]`)){let o=this.addOptionToSelectElement(i,this.selectLeftElement).cloneNode(!1);this.selectorElement.add(o)}this.setButtonsState()})))}selectorChanged(){var e;this.selectorElement.querySelectorAll("option").forEach(t=>{t.selected=!!this.selectRightElement.querySelector(`option[value="${t.value}"]`)}),this.setButtonsState(),(e=this.containerElement)==null||e.classList.toggle("invalid",!this.selectorElement.checkValidity()),this.selectorElement.dispatchEvent(new Event("change"))}setButtonsState(){let e=!this.selectLeftElement.querySelector("option:not([hidden])");this.moveAllRightButton.disabled=e,this.moveSelectedRightButton.disabled=e,e=!this.selectRightElement.querySelector("option:not([hidden])"),this.moveAllLeftButton.disabled=e,this.moveSelectedLeftButton.disabled=e}clearSearchFields(){var e,t;this.searchLeftInput&&(this.searchLeftInput.value=""),this.searchRightInput&&(this.searchRightInput.value=""),(e=this.selectLeftElement.querySelector("option[disabled]"))==null||e.remove(),(t=this.selectRightElement.querySelector("option[disabled]"))==null||t.remove(),this.selectLeftElement.querySelectorAll("option").forEach(l=>l.hidden=!1),this.selectRightElement.querySelectorAll("option").forEach(l=>l.hidden=!1)}optionsMoved(){let e=Array.from(this.selectRightElement.querySelectorAll("option"));this.historicalValues.splice(this.historyCursor+1),this.historicalValues.push(e.map(t=>t.value)),this.setHistoryCursor(this.historicalValues.length-1),this.selectorChanged()}optionsSorted(){this.selectorElement.querySelectorAll("option:checked").forEach(e=>e.remove()),this.selectRightElement.querySelectorAll("option").forEach(e=>{let t=e.cloneNode(!1);t.selected=!0,this.selectorElement.add(t)}),this.optionsMoved()}moveOptionToSelectElement(e,t){let l=e.parentElement;if(l instanceof HTMLOptGroupElement){let s=t.querySelector(`optgroup[label="${l.label}"]`);if(s instanceof HTMLOptGroupElement)s.appendChild(e),s.hidden=!1;else{let i=document.createElement("optgroup");i.label=l.label,i.appendChild(e),t.add(i)}l.querySelector("option")||l.remove()}else t.add(e)}moveOptionRight(e){e instanceof HTMLOptionElement&&(this.moveOptionToSelectElement(e,this.selectRightElement),this.selectLeftScrolled(),this.hideOptionGroups(this.selectLeftElement),this.optionsMoved())}moveAllOptionsRight(){this.selectLeftElement.querySelectorAll("option:not([hidden])").forEach(e=>{this.moveOptionToSelectElement(e,this.selectRightElement)}),this.clearSearchFields(),this.selectLeftScrolled(),this.optionsMoved()}moveSelectedOptionsRight(){this.selectLeftElement.querySelectorAll("option:checked").forEach(e=>{this.moveOptionToSelectElement(e,this.selectRightElement)}),this.hideOptionGroups(this.selectLeftElement),this.optionsMoved()}moveSelectedOptionsLeft(){this.selectRightElement.querySelectorAll("option:checked").forEach(e=>{this.moveOptionToSelectElement(e,this.selectLeftElement)}),this.hideOptionGroups(this.selectRightElement),this.optionsMoved()}moveAllOptionsLeft(){this.selectRightElement.querySelectorAll("option:not([hidden])").forEach(e=>{this.moveOptionToSelectElement(e,this.selectLeftElement)}),this.clearSearchFields(),this.optionsMoved()}moveOptionLeft(e){e instanceof HTMLOptionElement&&(this.moveOptionToSelectElement(e,this.selectLeftElement),this.hideOptionGroups(this.selectRightElement),this.optionsMoved())}hideOptionGroups(e){e.querySelectorAll("optgroup").forEach(t=>{t.hidden=!t.querySelector("option:not([hidden])")})}leftLookup(){var l;let e=((l=this.searchLeftInput)==null?void 0:l.value)??"",t=this.lookup(this.selectLeftElement,e);this.isIncomplete&&t<this.selectLeftElement.size&&(this.remoteLookup(),t=this.lookup(this.selectLeftElement,e)),this.setButtonsState(),t===0&&this.addNoResultsOption(this.selectLeftElement,e)}rightLookup(){var t;let e=((t=this.searchRightInput)==null?void 0:t.value)??"";this.lookup(this.selectRightElement,e)===0&&this.addNoResultsOption(this.selectRightElement,e)}lookup(e,t){var s;(s=e.querySelector("option[disabled]"))==null||s.remove();let l=e.querySelectorAll("option");if(t){t=t.toLowerCase();let i=0;return l.forEach(o=>{(o.hidden=o.text.toLowerCase().indexOf(t)===-1)&&i++}),this.hideOptionGroups(e),l.length-i}return l.forEach(i=>i.hidden=!1),e.querySelectorAll("optgroup").forEach(i=>i.hidden=!1),l.length}unOrRedo(e){this.clearSearchFields();let t=this.historyCursor+e;if(t<0||t>=this.historicalValues.length)return;let l=this.historicalValues[t];Array.from(this.selectRightElement.querySelectorAll("option")).filter(o=>l.indexOf(o.value)===-1).forEach(o=>{this.moveOptionToSelectElement(o,this.selectLeftElement)}),Array.from(this.selectLeftElement.querySelectorAll("option")).filter(o=>l.indexOf(o.value)!==-1).forEach(o=>{this.moveOptionToSelectElement(o,this.selectRightElement)}),this.selectRightElement.tagName==="DJANGO-SORTABLE-SELECT"&&(l.forEach(o=>{var a;let n=this.selectRightElement.querySelector(`:scope > option[value="${o}"]`);if(n)this.selectRightElement.insertAdjacentElement("beforeend",n);else{let c=this.selectRightElement.querySelector(`:scope > optgroup > option[value="${o}"]`);c&&((a=c.parentElement)==null||a.insertAdjacentElement("beforeend",c))}}),this.optionsSorted()),this.setHistoryCursor(t),this.selectorChanged()}setHistoryCursor(e){this.historyCursor=e,this.undoButton&&(this.undoButton.disabled=e===0),this.redoButton&&(this.redoButton.disabled=e===this.historicalValues.length-1)}transferStyles(){let e=this.declaredStyles.sheet,t=r.extractStyles(this.selectLeftElement,["background-color"]);e.insertRule(`django-formset django-field-group .dj-dual-selector .left-column{${t}}`,0),t=r.extractStyles(this.selectRightElement,["background-color"]),e.insertRule(`django-formset django-field-group .dj-dual-selector .right-column{${t}}`,1),e.insertRule(".dj-dual-selector select, .dj-dual-selector input{background-color: transparent;}",2),t=r.extractStyles(this.selectLeftElement,["height"]),e.insertRule(`django-formset django-field-group .dj-dual-selector select{${t}}`,3)}formResetted(e){var i;this.clearSearchFields();let t=this.historicalValues[0];this.historicalValues.splice(1),this.setHistoryCursor(0),Array.from(this.selectRightElement.querySelectorAll("option")).filter(o=>t.indexOf(o.value)===-1).forEach(o=>{this.moveOptionToSelectElement(o,this.selectLeftElement)}),Array.from(this.selectLeftElement.querySelectorAll("option")).filter(o=>t.indexOf(o.value)!==-1).forEach(o=>{this.moveOptionToSelectElement(o,this.selectRightElement)}),this.selectorChanged(),(i=this.containerElement)==null||i.classList.remove("invalid")}formSubmitted(e){this.clearSearchFields(),this.historicalValues.splice(0,this.historicalValues.length-1),this.setHistoryCursor(0)}reloadOptions(){var t;this.selectorElement.replaceChildren(),this.selectLeftElement.replaceChildren(),this.selectRightElement.replaceChildren(),this.clearSearchFields(),this.fieldGroup.classList.remove("dj-dirty","dj-touched","dj-validated"),this.fieldGroup.classList.add("dj-untouched","dj-pristine"),(t=this.containerElement)==null||t.classList.remove("invalid");let e=this.fieldGroup.querySelector(".dj-errorlist > .dj-placeholder");e&&(e.innerHTML=""),this.remoteLookup(),this.historicalValues.splice(1),this.setHistoryCursor(0)}},m=Symbol("DualSelectorElement"),E=class extends HTMLSelectElement{connectedCallback(){this[m]=new h(this,"django-dual-selector")}};m;export{h as DualSelector,E as DualSelectorElement};