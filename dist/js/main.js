(()=>{"use strict";const e=function({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function r(l){let a=(l-n)/o;a>1&&(a=1);let c=e(a);t(c),a<1&&requestAnimationFrame(r)}))},t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");n.classList.add("status");const r=o.querySelectorAll("input");r.forEach((e=>{e.required=!0}));try{if(!o)throw new Error("Верните форму на место, пожаааалуйста!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{var e;if(Array.from(o.querySelectorAll("input")).every((e=>"3px solid red"!==e.style.border))){new FormData(o);const l={};o.append(n),n.textContent="",n.classList.add("sk-rotating-plane"),t.forEach((e=>{console.info(e);const t=document.getElementById(e.id);"block"!==e.type||"0"===t.textContent?"input"===e.type&&(l[e.id]=t.value):l[e.id]=t.textContent})),(e=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.classList.remove("sk-rotating-plane"),n.textContent="Спасибо, наш менеджер с Вами свяжется!",setTimeout((()=>n.remove()),4e3),r.forEach((e=>{e.value=""}))})).catch((e=>{n.classList.remove("sk-rotating-plane"),n.textContent="Ошибка...",setTimeout((()=>n.remove()),4e3)}))}})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),r=()=>{let e=(new Date("25 march 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/60/60),o=Math.floor(e/60%60),n=Math.floor(e%60);return e<0&&(e=0,t=0,o=0,n=0),{timeRemaining:e,hours:t,minutes:o,seconds:n}},l=()=>{let e=r();e.hours<10?t.textContent="0"+e.hours:t.textContent=e.hours,e.minutes<10?o.textContent="0"+e.minutes:o.textContent=e.minutes,e.seconds<10?n.textContent="0"+e.seconds:n.textContent=e.seconds};(()=>{let e,t=r();l(),t.timeRemaining>0?e=setInterval(l,1e3):clearInterval(e)})()})(),(()=>{const e=document.querySelector("body"),t=document.querySelector("menu"),o=document.querySelector("main>a"),n=document.querySelector("main>a>img"),r=()=>{t.classList.toggle("active-menu")},l=e=>{const t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})};e.addEventListener("click",(e=>{if(e.target.closest(".menu"))r();else if(e.target===n)e.preventDefault(),l(o);else if(e.target.matches("menu>ul>li>a")){let t=e.target.closest("a");e.preventDefault(),l(t),r()}else e.target.closest(".close-btn")?(e.preventDefault(),r()):!e.target.closest("menu")&&t.classList.contains("active-menu")&&t.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),n=document.querySelector(".popup-content");let r=window.screen.width;t.forEach((t=>{t.addEventListener("click",(()=>{console.info("modal.style.display = ",o.style.display),r<768?o.style.display="block":(o.style.display="block",e({duration:1e3,timing:e=>e,draw(e){n.style.left=40*e+"%"}}))}))})),o.addEventListener("click",(e=>{console.info("e.target = ",e.target),console.info("e.target.type = ",e.target.type),e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(o.style.display="none"),e.target.classList.contains("form-btn")&&"submit"===e.target.type&&setTimeout((function(){o.style.display=""}),3e3)}))})(),(()=>{const e=document.querySelectorAll("input.calc-item"),t=document.querySelectorAll("input[id*=name]"),o=document.querySelector(".mess"),n=document.querySelectorAll('input[type="email"]'),r=document.querySelectorAll('input[type="tel"]');function l(e){let t=/\s+/g;e.value=e.value.replace(t," "),(t.test(e.value[0])||t.test(e.value[e.value.length-1]))&&(e.value=e.value.trim())}function a(e){let t=/\-+/g;e.value=e.value.replace(t,"-"),(t.test(e.value[0])||t.test(e.value[e.value.length-1]))&&(e.value=e.value.replace(t,""))}e.forEach((e=>{e.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/\D/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(function(t){t.target.value=t.target.value.replace(/[^а-яА-я\s]/g,""),t.target.value.length<2?e.style.border="3px solid red":e.style.border=""}))})),t.forEach((e=>{e.addEventListener("blur",(function(){l(e),function(e){let t=/[А-Я]/,o=/[а-я]/,n=e.value.split(" "),r=[];n.forEach((n=>{n=o.test(n[0])?n[0].toUpperCase()+n.slice(1).toLowerCase():n,n=t.test(n.slice(1))?n[0].toUpperCase()+n.slice(1).toLowerCase():n,r.push(n),e.value=r.join(" ")}))}(e)}))})),o.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^а-яА-я0-9\s\.\,\:\-\?\!\;]/g,"")})),o.addEventListener("blur",(function(){l(o),a(o)})),n.forEach((e=>{e.addEventListener("input",(function(t){t.target.value=t.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g,"");let o=e.value;t.target.value.length<5||!/[a-zA-Z0-9\-\_\.\!\~\*\']+\@[a-z]+\.[a-z]+/g.test(o)?e.style.border="3px solid red":e.style.border=""}))})),n.forEach((e=>{e.addEventListener("blur",(function(){a(e)}))})),r.forEach((e=>{e.addEventListener("input",(function(t){t.target.value=t.target.value.replace(/[^0-9\(\)\-\+]/g,""),e.value.split("").filter((e=>Number.isInteger(+e))).length<11?e.style.border="3px solid red":e.style.border=""}))})),r.forEach((e=>{e.addEventListener("blur",(function(){a(e)}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e,t,o="portfolio-item-active",n="dot-active")=>{if(document.querySelector(e)&&document.querySelectorAll(t)){const r=document.querySelector(e),l=document.querySelectorAll(t);let a,c,s=0,i=2e3;const u=()=>{let e=document.createElement("ul");e.classList.add("portfolio-dots"),e.innerHTML="";for(let t=0;t<l.length;t++)e.innerHTML+='<li class="dot"></li>';r.append(e),c=document.querySelectorAll(".dot"),c[0].classList.add(n)},d=(e,t,o)=>{e[t].classList.remove(o)},m=(e,t,o)=>{e[t].classList.add(o)},v=()=>{d(l,s,o),d(c,s,n),s++,s>=l.length&&(s=0),m(l,s,o),m(c,s,n)},p=(e=1500)=>{a=setInterval(v,e)},g=()=>{clearInterval(a)};r.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(d(l,s,o),d(c,s,n),e.target.matches("#arrow-right")?s++:e.target.matches("#arrow-left")?s--:e.target.classList.contains("dot")&&c.forEach(((t,o)=>{e.target===t&&(s=o)})),s>=l.length&&(s=0),s<0&&(s=l.length-1),m(l,s,o),m(c,s,n))})),r.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&g()}),!0),r.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&p(i)}),!0),u(),p(i)}})(".portfolio-content",".portfolio-item"),((t=100)=>{const o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.querySelector("#total");o.addEventListener("change",(o=>{o.target!==n&&o.target!==r&&o.target!==l&&o.target!==a||(()=>{console.info("TEST");const o=+n.options[n.selectedIndex].value,s=r.value;let i=0,u=1,d=1;l.value>1&&(u+=+l.value/10),a.value&&a.value<5?d=2:a.value&&a.value<10&&(d=1.5),i=o&&s?t*o*s*u*d:0;let m=i-+c.textContent,v=+c.textContent;e({duration:1e3,timing:e=>e,draw(e){c.textContent=v+Math.round(m*e)}})})()}))})(100),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2"}),t({formId:"form3"})})();