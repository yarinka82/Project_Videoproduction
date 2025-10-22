import{a as l}from"./assets/vendor-ngrFHoWO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();l.defaults.baseURL="http://127.0.0.1:8000/api";async function u(){return await l.get("/faq/")}async function p(){const o=document.querySelector(".faq-right");try{const s=(await u()).data;s.status===200?(s.list.length===0?o.innerHTML="<p>Wird gerade befüllt…</p>":(o.innerHTML=s.list.map(e=>`<div class="faq-accordion">
            <div class="spark"></div>
        <button class="faq-accordion-toggle">
          <h6 class="faq-acordion-title">
            ${e.question}
          </h6>

          <div class="faq-icon">
            <svg class="faq-icon" width="24" height="24">
              <use href="/img/sprite.svg#icon-plus"></use>
            </svg>
          </div>
        </button>
        <div class="faq-accordion-content">
          <p>
           ${e.answer}
          </p>
        </div>
       </div> 
         `).join(""),document.querySelectorAll(".faq-accordion").forEach((e,t)=>{setTimeout(()=>{e.classList.remove("hidden"),e.classList.add("visible")},300+t*600)})),f()):container.innerHTML=`<p style='color: black;'>Fehler: ${json.message}</p>`}catch{o.innerHTML="<p style='color: black;'>Serverfehler, bitte später versuchen.</p>"}}document.querySelector(".faq-right").addEventListener("click",o=>{const r=o.target.closest(".faq-accordion-toggle");if(!r)return;const s=r.closest(".faq-accordion"),n=s.querySelector(".faq-accordion-content"),e=s.classList.contains("open");document.querySelectorAll(".faq-accordion").forEach(t=>{t.classList.remove("open"),t.querySelector(".faq-accordion-content").style.maxHeight=null}),e||(s.classList.add("open"),n.style.maxHeight=n.scrollHeight+"px")});const d=document.getElementById("faq"),g=document.querySelector(".faq-title-h2"),h=new IntersectionObserver((o,r)=>{o.forEach(s=>{s.isIntersecting&&(p(),g.classList.add("visible"),r.unobserve(d))})},{threshold:.2});h.observe(d);const m=document.querySelector(".faq-dark-tag");let c=0;const q="http://localhost:8000";m.addEventListener("click",()=>{c++,console.log("🚀 ~ count:",c),c===5&&(window.open(`${q}/admin/faq/faq/`,"_blank","noopener,noreferrer"),c=0)});let i=0;function f(){const o=document.querySelectorAll(".spark");o.forEach((r,s)=>r.classList.toggle("active",s===i)),setTimeout(()=>{o[i].classList.remove("active"),i=(i+1)%o.length,f()},1e3)}
//# sourceMappingURL=index.js.map
