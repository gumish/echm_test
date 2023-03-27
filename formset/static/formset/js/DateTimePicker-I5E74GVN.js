import{a as g}from"./chunk-3OMWHE62.js";import{a as d,b as p}from"./chunk-DUNLGLCX.js";import"./chunk-NLMHZ7JJ.js";var m=':is([is=django-datepicker],[is=django-datetimepicker]){--dummy-style: none}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar{box-shadow:#d3d3d3 0 0 1rem}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar [hidden]{display:none !important}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .controls{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #d3d3d3}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .controls button{display:inline-flex;background-color:rgba(0,0,0,0);border:none;padding:0;min-width:28px}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .controls button:hover{background-color:#f0f0f0}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .controls button>svg{margin:0 auto}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .controls time{width:10rem;text-align:center}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .controls.years-view time{opacity:.75}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges{--dummy-style: none}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul{list-style:none;margin:0;padding:0;text-align:center;display:grid;gap:2px}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul.hours{grid-template-columns:repeat(6, 1fr)}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul.hours>li.preselected{border:1px solid #d3d3d3;border-bottom-color:#fff;border-top-left-radius:5px;border-top-right-radius:5px}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul.weekdays,:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul.monthdays{grid-template-columns:repeat(7, 1fr)}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul.monthdays>li.adjacent{color:#606060}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul.months{grid-template-columns:repeat(3, 1fr)}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul.years{grid-template-columns:repeat(4, 1fr)}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul.weekdays{font-weight:bold}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul:not(.weekdays){--dummy-style: none}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul:not(.weekdays)>li.selected{background-color:#009cff;color:#fff}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul:not(.weekdays)>li.selected.today::after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff rgba(0,0,0,0)}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul:not(.weekdays)>li[disabled]{opacity:.5}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul:not(.weekdays)>li:not([disabled]):hover{opacity:1;background-color:#f0f0f0;cursor:pointer}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul.minutes{font-size:smaller;border:1px solid #d3d3d3;margin:-1px 0 3px;padding:0 5px;line-height:inherit}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul>li.today{position:relative}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges ul>li.today::after{position:absolute;content:"";bottom:0;right:0;border-style:solid;border-width:0 0 10px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #009cff rgba(0,0,0,0)}:is([is=django-datepicker],[is=django-datetimepicker])+.dj-calendar .ranges abbr[title]{text-decoration:none}:is([is=django-datepicker],[is=django-datetimepicker])[aria-expanded=false]+.dj-calendar{display:none}:is([is=django-datepicker],[is=django-datetimepicker])[aria-expanded=true]+.dj-calendar{display:block}';var c=class extends p{constructor(e,t){super(e);this.autoZeroRegExps=[];this.autoDelimiterRegExps=[];this.delimiter="-";this.isOpen=!1;this.handleClick=e=>{let t=e.target instanceof Element?e.target:null;for(;t;){if(t.isSameNode(this.calendarElement)||t.isSameNode(this.inputElement))return;t=t.parentElement}this.close(),this.inputElement.blur()};this.handleFocus=e=>{this.dropdownInstance=g(this.inputElement,this.calendarElement,{placement:"bottom-start"}),this.inputElement.setAttribute("aria-expanded","true");let t=this.inputElement.value;this.inputElement.value=t.trimEnd(),this.inputElement.value!==t&&this.inputElement.dispatchEvent(new Event("input")),this.isOpen=!0};this.handleBlur=e=>{this.isOpen?this.inputElement.focus():this.validate()};this.handleInput=e=>{this.isOpen&&this.close(),e instanceof InputEvent&&e.inputType==="insertText"&&(this.inputElement.value=this.inputElement.value.replace("  "," ").replace(this.delimiter.concat(this.delimiter),this.delimiter).replace("::",":"),this.autoZeroRegExps.forEach(t=>{this.inputElement.value.match(t)&&(this.inputElement.value=this.inputElement.value.replace(t,"$10$2"))}),this.autoDelimiterRegExps.forEach(t=>{this.inputElement.value.match(t)&&(this.inputElement.value=this.inputElement.value.concat(this.delimiter))}),this.autoSpaceRegExp&&this.inputElement.value.match(this.autoSpaceRegExp)&&(this.inputElement.value=this.inputElement.value.concat(" ")),this.autoColonRegExp&&this.inputElement.value.match(this.autoColonRegExp)&&(this.inputElement.value=this.inputElement.value.concat(":")))};this.handleChange=e=>{let t=this.validate();t&&this.fetchCalendar(t,this.viewMode)};this.handleKeypress=async e=>{if(!this.isOpen)return;let t=null,s=new Map([["y","m"],["m","w"],["w","h"]]);switch(e.key){case"ArrowUp":await this.navigate(0);break;case"ArrowRight":await this.navigate(1);break;case"ArrowDown":await this.navigate(2);break;case"ArrowLeft":await this.navigate(3);break;case"Escape":this.close();break;case"Tab":this.close(),this.inputElement.blur();break;case"PageUp":t=this.calendarElement.querySelector("button.prev"),t&&await this.fetchCalendar(this.getDate(t),this.viewMode);break;case"PageDown":t=this.calendarElement.querySelector("button.next"),t&&await this.fetchCalendar(this.getDate(t),this.viewMode);break;case"Enter":t=this.calendarElement.querySelector(".ranges .selected"),t&&(this.viewMode==="h"||this.viewMode==="w"&&this.dateOnly?this.selectDate(t):this.fetchCalendar(this.getDate(t),s.get(this.viewMode)));break;default:return}e.preventDefault()};this.turnPrev=()=>{this.fetchCalendar(this.prevSheetDate,this.viewMode)};this.turnNext=()=>{this.fetchCalendar(this.nextSheetDate,this.viewMode)};this.turnNarrow=()=>{this.narrowSheetDate&&(this.viewMode==="m"?this.fetchCalendar(this.narrowSheetDate,"w"):this.viewMode==="y"?this.fetchCalendar(this.narrowSheetDate,"m"):this.fetchCalendar(this.narrowSheetDate,this.viewMode))};this.turnExtend=()=>{this.extendSheetDate&&(this.viewMode==="h"?this.fetchCalendar(this.extendSheetDate,"w"):this.viewMode==="w"?this.fetchCalendar(this.extendSheetDate,"m"):this.fetchCalendar(this.extendSheetDate,"y"))};this.turnToday=()=>{this.dateOnly?this.selectToday():this.fetchCalendar(this.todayDate,"h")};this.selectDay=e=>{e.target instanceof HTMLLIElement&&(this.dateOnly?this.selectDate(e.target):this.fetchCalendar(this.getDate(e.target),"h"))};this.selectMonth=e=>{e.target instanceof HTMLLIElement&&this.fetchCalendar(this.getDate(e.target),"w")};this.selectYear=e=>{e.target instanceof HTMLLIElement&&this.fetchCalendar(this.getDate(e.target),"m")};this.inputElement=e,this.dateOnly=e.getAttribute("is")==="django-datepicker",this.localTime=e.hasAttribute("local-time"),this.setDateTimeFormat(),this.setInitialDate(),t instanceof HTMLElement?this.calendarElement=t:(this.calendarElement=document.createElement("div"),this.fetchCalendar(new Date,"w")),this.setBounds(),this.installEventHandlers(),new MutationObserver(()=>this.registerElement()).observe(this.calendarElement,{childList:!0}),this.transferStyles(),this.registerElement()}getViewMode(){var t;switch((t=this.calendarElement.querySelector(":scope > [aria-label]"))==null?void 0:t.getAttribute("aria-label")){case"hours-view":return"h";case"weeks-view":return"w";case"months-view":return"m";case"years-view":return"y";default:throw new Error(`Unknown aria-label on ${this.calendarElement}`)}}setInitialDate(){this.inputElement.value&&(this.initialDate=this.convertDate(new Date(this.inputElement.value)),this.inputElement.value=this.asString(this.initialDate))}convertDate(e,t=!1){return(this.localTime||t)&&e.setTime(e.getTime()-6e4*e.getTimezoneOffset()),e}setBounds(){let e=this.inputElement.getAttribute("min");e&&(this.minDate=this.convertDate(new Date(e)),this.minWeekDate=new Date(this.minDate),this.minWeekDate.setHours(0,0,0),this.minMonthDate=new Date(this.minWeekDate),this.minMonthDate.setDate(1),this.minYearDate=new Date(this.minMonthDate),this.minYearDate.setMonth(0));let t=this.inputElement.getAttribute("max");t&&(this.maxDate=this.convertDate(new Date(t)),this.maxWeekDate=new Date(this.maxDate),this.maxWeekDate.setHours(23,59,59),this.maxMonthDate=new Date(this.maxWeekDate),this.maxMonthDate.setDate(28),this.maxYearDate=new Date(this.maxMonthDate),this.maxYearDate.setMonth(11));let s=this.inputElement.getAttribute("step");if(s){let i=new Date("1970-01-01 0:00:00"),a=new Date(`1970-01-01 ${s}`);this.interval=(a.getTime()-i.getTime())/6e4}}setDateTimeFormat(){let e=Array(),t=Array(),s=Array();if(this.inputElement.getAttribute("date-format")==="iso"){this.autoZeroRegExps.length=this.autoDelimiterRegExps.length=0,this.autoZeroRegExps.push(new RegExp("^(\\d{4}-)(\\d{1}-)$")),this.autoZeroRegExps.push(new RegExp("^(\\d{4}-\\d{2}-)(\\d{1}\\s)$")),this.autoDelimiterRegExps.push(new RegExp("^\\d{4}$")),this.autoDelimiterRegExps.push(new RegExp("^\\d{4}-\\d{2}$")),this.dateOnly||(this.autoZeroRegExps.push(new RegExp("^(\\d{4}-\\d{2}-\\d{2}\\s)(\\d{1}:)$")),this.autoSpaceRegExp=new RegExp("^\\d{4}-\\d{2}-\\d{2}$"),this.autoColonRegExp=new RegExp("^\\d{4}-\\d{2}-\\d{2}\\s\\d{2}$")),this.dateOnly?this.setExtraAttributes("yyyy-mm-dd","\\d{4}-\\d{2}-\\d{2}"):this.setExtraAttributes("yyyy-mm-dd HH:MM","\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}");return}this.dateTimeFormat=Intl.DateTimeFormat(navigator.language,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1,calendar:"iso8601"}),this.dateTimeFormat.formatToParts().forEach(i=>{switch(i.type){case"day":e.push("dd"),t.push("\\d{2}"),s.push("(?<day>\\d{1,2})");break;case"month":e.push("mm"),t.push("\\d{2}"),s.push("(?<month>\\d{1,2})");break;case"year":e.push("yyyy"),t.push("\\d{4}"),s.push("(?<year>\\d{4})");break;case"literal":[".","/","-"].includes(i.value)&&(this.delimiter=i.value,e.push(i.value),t.push(i.value),s.push(i.value)),this.dateOnly||([", "," "].includes(i.value)&&(e.push(" "),t.push("\\s"),s.push("\\s")),[":"].includes(i.value)&&(e.push(i.value),t.push(i.value),s.push(i.value)));break;case"hour":this.dateOnly||(e.push("HH"),t.push("\\d{2}"),s.push("(?<hour>\\d{1,2})"));break;case"minute":this.dateOnly||(e.push("MM"),t.push("\\d{2}"),s.push("(?<minute>\\d{1,2})"));break;default:break}}),this.dateTimeRegExp=new RegExp(s.join("")),this.autoZeroRegExps.length=this.autoDelimiterRegExps.length=0,this.autoDelimiterRegExps.push(new RegExp("^\\d{2}$")),this.delimiter==="."?(this.autoZeroRegExps.push(new RegExp("^(\\D*)(\\d{1}\\.)$")),this.autoZeroRegExps.push(new RegExp("^(\\d{2}\\.)(\\d{1}\\.)$")),this.autoDelimiterRegExps.push(new RegExp("^\\d{2}\\.\\d{2}$")),this.dateOnly||(this.autoZeroRegExps.push(new RegExp("^(\\d{2}\\.\\d{2}\\.\\d{4}\\s)(\\d{1}:)$")),this.autoSpaceRegExp=new RegExp("^(\\d{2}\\.\\d{2}\\.\\d{4})$"),this.autoColonRegExp=new RegExp("^\\d{2}\\.\\d{2}\\.\\d{4}\\s\\d{2}$"))):(this.autoZeroRegExps.push(new RegExp("^(\\D*)(\\d{1}/)$")),this.autoZeroRegExps.push(new RegExp("^(\\d{2}/)(\\d{1}/)$")),this.autoDelimiterRegExps.push(new RegExp("^\\d{2}/\\d{2}$")),this.dateOnly||(this.autoZeroRegExps.push(new RegExp("^(\\d{2}/\\d{2}/\\d{4}\\s)(\\d{1}:)$")),this.autoSpaceRegExp=new RegExp("^(\\d{2}/\\d{2}/\\d{4})$"),this.autoColonRegExp=new RegExp("^\\d{2}/\\d{2}/\\d{4}\\s\\d{2}$"))),this.setExtraAttributes(e.join(""),t.join(""))}setExtraAttributes(e,t){this.inputElement.hasAttribute("placeholder")||this.inputElement.setAttribute("placeholder",e),this.inputElement.hasAttribute("pattern")||this.inputElement.setAttribute("pattern",t)}installEventHandlers(){this.inputElement.addEventListener("focus",this.handleFocus),this.inputElement.addEventListener("blur",this.handleBlur),this.inputElement.addEventListener("input",this.handleInput),this.inputElement.addEventListener("change",this.handleChange),document.addEventListener("click",this.handleClick),document.addEventListener("keydown",this.handleKeypress)}close(){var e;this.isOpen=!1,this.inputElement.setAttribute("aria-expanded","false"),(e=this.dropdownInstance)==null||e.destroy()}asDate(){if(this.inputElement.value)if(this.dateTimeRegExp){let e=this.inputElement.value.match(this.dateTimeRegExp);if(e&&e.groups)return this.dateOnly?new Date(parseInt(e.groups.year),parseInt(e.groups.month)-1,parseInt(e.groups.day)):new Date(parseInt(e.groups.year),parseInt(e.groups.month)-1,parseInt(e.groups.day),parseInt(e.groups.hour),parseInt(e.groups.minute))}else{let e=new Date(this.inputElement.value);if(!isNaN(e.getTime()))return e}}asUTCDate(e){return new Date(e.getTime()-e.getTimezoneOffset()*6e4)}asString(e){return(this.dateTimeFormat?this.dateTimeFormat.format(e).replace(", "," "):this.asUTCDate(e).toISOString().replace("T"," ")).slice(0,this.dateOnly?10:16)}getDate(e){let t=e instanceof Element?e:this.calendarElement.querySelector(e);if(!(t instanceof Element))throw new Error(`Element ${e} is missing`);let s=t.getAttribute("data-date")??t.getAttribute("datetime");return new Date(s??"")}registerElement(){var i,a,n,r,l;this.viewMode=this.getViewMode(),this.prevSheetDate=this.getDate("button.prev");let e=this.calendarElement.querySelector("button.narrow");this.narrowSheetDate=e?this.getDate(e):void 0,this.todayDate=this.convertDate(new Date(Date.now()),!0),this.nextSheetDate=this.getDate("button.next");let t=this.calendarElement.querySelector("button.extend");switch(this.extendSheetDate=t?this.getDate(t):void 0,(i=this.calendarElement.querySelector("button.prev"))==null||i.addEventListener("click",this.turnPrev,{once:!0}),(a=this.calendarElement.querySelector("button.narrow"))==null||a.addEventListener("click",this.turnNarrow,{once:!0}),(n=this.calendarElement.querySelector("button.extend"))==null||n.addEventListener("click",this.turnExtend,{once:!0}),(r=this.calendarElement.querySelector("button.today"))==null||r.addEventListener("click",this.turnToday,{once:!0}),(l=this.calendarElement.querySelector("button.next"))==null||l.addEventListener("click",this.turnNext,{once:!0}),this.calendarItems=this.calendarElement.querySelectorAll("li[data-date]"),this.viewMode){case"h":this.registerHoursView();break;case"w":this.registerWeeksView();break;case"m":this.registerMonthsView();break;case"y":this.registerYearsView();break}let s=this.calendarElement.querySelector("button.today > svg > text");s instanceof SVGTextElement&&(s.textContent=String(new Date().getDate()))}registerHoursView(){let e=this.todayDate.toISOString().slice(0,13).concat(":00"),t=this.asDate(),s=t?this.asUTCDate(t).toISOString():"";if(this.interval){let a=`repeat(${Math.min(60/this.interval,6)}, 1fr)`;this.calendarElement.querySelectorAll(".ranges ul.minutes").forEach(n=>{n.style.gridTemplateColumns=a})}this.calendarItems.forEach(i=>{i.classList.toggle("selected",i.getAttribute("data-date")===s.slice(0,16));let a=this.getDate(i);this.minDate&&a<this.minDate||this.maxDate&&a>this.maxDate?i.toggleAttribute("disabled",!0):i.addEventListener("click",n=>{n.target instanceof HTMLLIElement&&this.selectDate(n.target)},{once:!0})}),this.calendarElement.querySelectorAll("li[aria-label]").forEach(i=>{var r;let a=i.getAttribute("aria-label");i.classList.toggle("today",a===e);let n=`ul[aria-labelledby="${a}"]`;a.slice(0,13)===s.slice(0,13)&&(i.classList.add("preselected"),(r=this.calendarElement.querySelector(n))==null||r.removeAttribute("hidden")),this.calendarElement.querySelectorAll(`${n} > li[data-date]:not([disabled])`).length===0?i.toggleAttribute("disabled",!0):i.addEventListener("click",l=>{l.target instanceof HTMLLIElement&&this.selectHour(l.target)})})}registerWeeksView(){let e=this.todayDate.toISOString().slice(0,10),t=this.asDate(),s=t?this.asUTCDate(t).toISOString().slice(0,10):null;this.calendarItems.forEach(i=>{i.classList.toggle("today",i.getAttribute("data-date")===e),i.classList.toggle("selected",i.getAttribute("data-date")===s);let a=this.getDate(i);this.minWeekDate&&a<this.minWeekDate||this.maxWeekDate&&a>this.maxWeekDate?i.toggleAttribute("disabled",!0):i.addEventListener("click",this.selectDay)})}registerMonthsView(){let e=this.todayDate.toISOString().slice(0,7),t=this.asDate(),s=t?this.asUTCDate(t).toISOString().slice(0,7):null;this.calendarItems.forEach(i=>{var r;let a=this.getDate(i),n=(r=i.getAttribute("data-date"))==null?void 0:r.slice(0,7);i.classList.toggle("today",n===e),i.classList.toggle("selected",n===s),this.minMonthDate&&a<this.minMonthDate||this.maxMonthDate&&a>this.maxMonthDate?i.toggleAttribute("disabled",!0):i.addEventListener("click",this.selectMonth)})}registerYearsView(){let e=this.todayDate.toISOString().slice(0,4),t=this.asDate(),s=t?this.asUTCDate(t).toISOString().slice(0,4):null;this.calendarItems.forEach(i=>{var r;let a=this.getDate(i),n=(r=i.getAttribute("data-date"))==null?void 0:r.slice(0,4);i.classList.toggle("today",n===e),i.classList.toggle("selected",n===s),this.minYearDate&&a<this.minYearDate||this.maxYearDate&&a>this.maxYearDate?i.toggleAttribute("disabled",!0):i.addEventListener("click",this.selectYear)})}getDelta(e,t){let s=(this.interval??60)<60?new Map([[0,-60],[1,+this.interval],[2,60],[3,-this.interval]]):new Map([[0,-360],[1,60],[2,360],[3,-60]]),i=new Map([[0,-10080],[1,1440],[2,10080],[3,-1440]]),a=this.convertDate(t,!0);switch(this.viewMode){case"h":return new Date(a.getTime()+6e4*s.get(e));case"w":return new Date(a.getTime()+6e4*i.get(e));case"m":switch(e){case 0:a.setMonth(a.getMonth()-3);break;case 1:a.setMonth(a.getMonth()+1);break;case 2:a.setMonth(a.getMonth()+3);break;case 3:a.setMonth(a.getMonth()-1);break}break;case"y":switch(e){case 0:a.setFullYear(t.getFullYear()-4);break;case 1:a.setFullYear(t.getFullYear()+1);break;case 2:a.setFullYear(t.getFullYear()+4);break;case 3:a.setFullYear(t.getFullYear()-1);break}break}return a}async navigate(e){let t=this.calendarElement.querySelector("li[data-date].selected");if(t||(t=this.calendarItems.item(this.calendarItems.length/2)),t){let s=this.getDate(t),i=this.getDelta(e,s),a=r=>r.toISOString().slice(0,this.viewMode==="h"?16:10),n=null;(this.viewMode!=="w"||s.getMonth()===i.getMonth())&&(n=this.calendarElement.querySelector(`.ranges li[data-date="${a(i)}"]`)),n||(await this.fetchCalendar(i,this.viewMode),n=this.calendarElement.querySelector(`.ranges li[data-date="${a(i)}"]`)),n instanceof HTMLLIElement&&(this.viewMode==="h"&&this.selectHour(n),this.setDate(n))}}validate(){let e=this.getValidDate();if(e)return e;this.inputElement.value.length>0&&(this.inputElement.value=this.inputElement.value.concat(" "))}getValidDate(){let e=this.asDate();if(e&&this.asString(e)===this.inputElement.value)return e}async selectToday(){let e=this.todayDate.toISOString().slice(0,10),t=this.calendarElement.querySelector(`li[data-date="${e}"]`);t||(await this.fetchCalendar(this.todayDate,"w"),t=this.calendarElement.querySelector(`li[data-date="${e}"]`)),this.selectDate(t)}setDate(e){this.calendarItems.forEach(s=>{s.classList.toggle("selected",s.isSameNode(e))});let t=e.getAttribute("data-date");this.dateTimeFormat&&(t=this.asString(new Date(t))),this.dateOnly?this.inputElement.value=t.slice(0,10):t.length===10?this.inputElement.value=t.concat(" 12:00"):this.inputElement.value=t.replace("T"," ")}selectDate(e){this.setDate(e),this.close(),this.inputElement.blur(),this.inputElement.dispatchEvent(new Event("input"))}selectHour(e){var i;let t=a=>{a.querySelectorAll("li[data-date]").forEach(n=>{n.addEventListener("click",r=>{r.target instanceof HTMLLIElement&&(r.target.classList.add("selected"),this.selectDate(r.target))},{once:!0})})};this.calendarElement.querySelectorAll("li[aria-label]").forEach(a=>{a.classList.remove("selected","preselected")}),this.calendarElement.querySelectorAll("ul[aria-labelledby]").forEach(a=>{a.toggleAttribute("hidden",!0)});let s=e.getAttribute("aria-label");if(s){let a=this.calendarElement.querySelector(`ul[aria-labelledby="${s}"]`);a instanceof HTMLUListElement&&(e.classList.add("preselected"),a.removeAttribute("hidden"),t(a))}else if(e.parentElement instanceof HTMLUListElement&&e.parentElement.hasAttribute("aria-labelledby")){let a=e.parentElement.getAttribute("aria-labelledby");(i=this.calendarElement.querySelector(`li[aria-label="${a}"]`))==null||i.classList.add("preselected"),e.parentElement.removeAttribute("hidden"),t(e.parentElement)}}controlButton(e){let t=e;for(;!(t instanceof HTMLButtonElement);){if(!(t instanceof Element))throw new Error(`Element ${e} not part of button`);t=t.parentElement}return t}async fetchCalendar(e,t){let s=new URLSearchParams("calendar");s.set("date",e.toISOString().slice(0,10)),s.set("mode",t),this.interval&&s.set("interval",String(this.interval));let i=await fetch(`${this.endpoint}?${s.toString()}`,{method:"GET"});if(i.status===200){let a=await i.text();this.calendarElement.innerHTML=a}else console.error(`Failed to fetch from ${this.endpoint} (status=${i.status})`)}transferStyles(){var s,i,a;for(let n=0;n<document.styleSheets.length;++n){let r=(a=(i=(s=document==null?void 0:document.styleSheets)==null?void 0:s.item(n))==null?void 0:i.cssRules)==null?void 0:a.item(0);if(r instanceof CSSStyleRule&&r.selectorText===':is([is="django-datepicker"], [is="django-datetimepicker"])')return}let e=document.createElement("style");e.innerText=m,document.head.appendChild(e);let t=window.getComputedStyle(this.inputElement).getPropertyValue("height");for(let n=0;e.sheet&&n<e.sheet.cssRules.length;n++){let r=e.sheet.cssRules.item(n),l;switch(r.selectorText){case':is([is="django-datepicker"], [is="django-datetimepicker"]) + .dj-calendar':l=d.extractStyles(this.inputElement,["background-color","border","border-radius","font-family","font-size","font-strech","font-style","font-weight","letter-spacing","white-space","line-height"]),e.sheet.insertRule(`${r.selectorText}{${l}}`,++n);break;case':is([is="django-datepicker"], [is="django-datetimepicker"]) + .dj-calendar .controls':l=d.extractStyles(this.inputElement,["padding"]),e.sheet.insertRule(`${r.selectorText}{${l}}`,++n);break;case':is([is="django-datepicker"], [is="django-datetimepicker"]) + .dj-calendar .ranges':l=d.extractStyles(this.inputElement,["padding"]),e.sheet.insertRule(`${r.selectorText}{${l}}`,++n);break;case':is([is="django-datepicker"], [is="django-datetimepicker"]) + .dj-calendar .ranges ul:not(.weekdays)':l=`line-height: ${t};`,e.sheet.insertRule(`${r.selectorText}{${l}}`,++n);break;case':is([is="django-datepicker"], [is="django-datetimepicker"]) + .dj-calendar .ranges ul.hours > li.preselected':case':is([is="django-datepicker"], [is="django-datetimepicker"]) + .dj-calendar .ranges ul.minutes':this.inputElement.style.transition="none",this.inputElement.classList.add("-focus-"),l=d.extractStyles(this.inputElement,["border-color"]),e.sheet.insertRule(`${r.selectorText}{${l}}`,++n),this.inputElement.classList.remove("-focus-"),this.inputElement.style.transition="",r.selectorText===':is([is="django-datepicker"], [is="django-datetimepicker"]) + .dj-calendar .ranges ul.hours > li.preselected'&&(l=d.extractStyles(this.calendarElement,["background-color"]),l=l.replace("background-color","border-bottom-color"),e.sheet.insertRule(`${r.selectorText}{${l}}`,++n));break;default:break}}}formResetted(e){}formSubmitted(e){}valueAsDate(){let e=this.asDate();return e?(this.localTime||e.setTime(e.getTime()+6e4*e.getTimezoneOffset()),e):null}},o=Symbol("DateTimePickerElement"),E=class extends HTMLInputElement{connectedCallback(){let e=this.closest("django-field-group");if(!e)throw new Error(`Attempt to initialize ${this} outside <django-formset>`);let t=e.querySelector('[aria-label="calendar"]');this[o]=new c(this,t)}get valueAsDate(){return this[o].valueAsDate()}};o;var D=class extends HTMLInputElement{connectedCallback(){let e=this.closest("django-field-group");if(!e)throw new Error(`Attempt to initialize ${this} outside <django-formset>`);let t=e.querySelector('[aria-label="calendar"]');this[o]=new c(this,t)}get valueAsDate(){return this[o].valueAsDate()}};o;export{E as DatePickerElement,D as DateTimePickerElement};
