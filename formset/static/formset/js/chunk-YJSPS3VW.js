import{b as c}from"./chunk-DUNLGLCX.js";var l=class extends c{constructor(n){super(n);this.filterByValues=new Map;this.touch=()=>{this.fieldGroup.classList.remove("dj-untouched","dj-validated"),this.fieldGroup.classList.add("dj-touched")};this.isIncomplete=n.hasAttribute("incomplete")}setupFilters(n){var s;(((s=n.getAttribute("filter-by"))==null?void 0:s.split(","))??[]).forEach(t=>{var i;let e=(i=n.form)==null?void 0:i.elements.namedItem(t);e instanceof HTMLInputElement?(this.filterByValues.set(t,e.value),e.addEventListener("change",o=>{let a=o.currentTarget;a instanceof HTMLInputElement&&(this.filterByValues.set(t,a.value),this.reloadOptions())})):e instanceof HTMLSelectElement&&(this.filterByValues.set(t,Array.from(e.selectedOptions).map(o=>o.value)),e.addEventListener("change",o=>{o.currentTarget instanceof HTMLSelectElement&&(this.filterByValues.set(t,Array.from(e.selectedOptions).map(d=>d.value)),this.reloadOptions())})),Array.from(this.filterByValues.values()).some(o=>o.some(a=>a))&&this.reloadOptions()})}buildFetchQuery(n,r){let s=new URLSearchParams;s.set("offset",String(n)),r&&s.set("search",encodeURIComponent(r));for(let[t,e]of this.filterByValues)typeof e=="string"?s.set(`filter-${t}`,encodeURIComponent(e)):e.forEach(i=>s.append(`filter-${t}`,encodeURIComponent(i)));return s}async loadOptions(n,r){let s=new Headers;s.append("Accept","application/json"),n.set("field",this.fieldName);let t=await fetch(`${this.endpoint}?${n.toString()}`,{method:"GET",headers:s});if(t.status===200){let e=await t.json();typeof e.incomplete=="boolean"&&(this.isIncomplete=e.incomplete),r(e.options)}else console.error(`Failed to fetch from ${this.endpoint} (status=${t.status})`)}};export{l as a};
