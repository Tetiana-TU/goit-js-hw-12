import{a as L,i as p,S as b}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const m=e=>`<li class="gallery-card">
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
        </li>`,g=(e,r)=>{const a={params:{q:e,key:"48265594-3edacf02e8cadda91195713cc",image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}};return L.get("https://pixabay.com/api/",a)},u=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),y=document.querySelector(".loader"),o=document.querySelector(".js-load-more-btn");let i=1,c="";const h=async e=>{try{if(e.preventDefault(),c=e.currentTarget.elements.user_query.value.trim(),c===""){p.error({message:"Please enter your request",position:"topRight"});return}i=1,o.classList.add("is-hidden"),y.classList.remove("is-hidden");const{data:r}=await g(c,i);if(r.total===0){p.show({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"}),d.innerHTML="";return}r.totalHits>1&&(o.classList.remove("is-hidden"),o.addEventListener("click",f));const a=r.hits.map(t=>m(t)).join("");d.innerHTML=a,y.classList.add("is-hidden"),v(),new b(".js-gallery a",{captionDelay:300,captionsData:"alt"}).refresh(),u.reset()}catch{}};u.addEventListener("submit",h);u.addEventListener("submit",h);const f=async e=>{try{i++;const{data:r}=await g(c,i),a=r.hits.map(l=>m(l)).join("");d.insertAdjacentHTML("beforeend",a),i<=r.totalHits&&(o.classList.add("is-hidden"),o.removeEventListener("click",f),v())}catch(r){console.log(r)}};function v(){let e=document.querySelector(".gallery-card").getBoundingClientRect().height;console.log(document.body.scrollTop,Math.floor(e*2)),window.scrollBy({top:document.body.scrollTop+Math.floor(e*2),behavior:"smooth"})}
//# sourceMappingURL=index.js.map
