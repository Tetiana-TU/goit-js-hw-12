import{a as u,i as c,S as p}from"./assets/vendor-DEenWwFD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y=r=>`<li class="gallery-card">
            <article class="card">
            <a class="gallery-link" href="${r.largeImageURL}" target="_blank" rel="noopener noreferrer">
              <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <div class="gallery-container">
              <div class="gallery-item">
                <p class="gallery-title">Likes</p>
                <p class="gallery-count">${r.likes}</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Views</p>
                <p class="gallery-count">${r.views}</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Comments</p>
                <p class="gallery-count">${r.comments}</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Downloads</p>
                <p class="gallery-count">${r.downloads}</p>
              </div>
            </div>
          </article>
        </li>`,m=r=>{const a=new URLSearchParams({q:r,key:"48265594-3edacf02e8cadda91195713cc",image_type:"photo",orientation:"horizontal",safesearch:"true",page:"1",per_page:"15",totalHits:"value"});return u.get(`https://pixabay.com/api/?${a}`)},d=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),n=document.querySelector(".loader");document.querySelector(".btn");const g=async r=>{try{r.preventDefault();const a=r.currentTarget.elements.user_query.value.trim();if(a===""){c.error({message:"Please enter your request",position:"topRight"});return}n.classList.remove("is-hidden");const s=await m(a);if(s.data.total===0){c.error({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"}),i.innerHTML="";return}const l=s.data.hits.map(t=>y(t)).join("");i.innerHTML=l,n.classList.add("is-hidden"),new p(".js-gallery a",{captionDelay:300,captionsData:"alt"}).refresh(),d.reset()}catch{}};d.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
