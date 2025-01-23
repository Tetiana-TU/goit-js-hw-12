import{a as L,S as b,i as y}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const m=e=>`<li class="gallery-card">
            <article class="card">
            <a class="gallery-link" href="${e.largeImageURL}" target="_blank" rel="noopener noreferrer">
              <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="gallery-container">
              <div class="gallery-item">
                <p class="gallery-title">Likes</p>
                <p class="gallery-count">${e.likes}</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Views</p>
                <p class="gallery-count">${e.views}</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Comments</p>
                <p class="gallery-count">${e.comments}</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Downloads</p>
                <p class="gallery-count">${e.downloads}</p>
              </div>
            </div>
          </article>
        </li>`,g=(e,r)=>{const a={params:{q:e,key:"48265594-3edacf02e8cadda91195713cc",image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}};return L.get("https://pixabay.com/api/",a)},o=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),p=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");let c=1,n="";const w=async e=>{try{if(e.preventDefault(),n=e.currentTarget.elements.user_query.value.trim(),n===""){o.reset(),y.error({message:"Please enter your request",position:"topRight"});return}c=1,i.classList.add("is-hidden"),p.classList.remove("is-hidden");const{data:r}=await g(n,c);if(r.total===0){o.reset(),y.show({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"}),u.innerHTML="",o.reset();return}r.totalHits>1&&(i.classList.remove("is-hidden"),i.addEventListener("click",h));const a=r.hits.map(l=>m(l)).join("");u.innerHTML=a,p.classList.add("is-hidden"),f(),v.refresh(),o.reset()}catch{}};o.addEventListener("submit",w);const h=async e=>{try{c++;const{data:r}=await g(n,c),a=r.hits.map(l=>m(l)).join("");u.insertAdjacentHTML("beforeend",a),f(),v.refresh(),c*15>=r.totalHits&&(i.classList.add("is-hidden"),i.removeEventListener("click",h),p.style.display="none")}catch{}};function f(){let e=document.querySelector(".gallery-card").getBoundingClientRect().height;console.log(document.body.scrollTop,Math.floor(e*2)),window.scrollBy({top:document.body.scrollTop+Math.floor(e*2),behavior:"smooth"})}const v=new b(".js-gallery a",{captionDelay:300,captionsData:"alt"});
//# sourceMappingURL=index.js.map
