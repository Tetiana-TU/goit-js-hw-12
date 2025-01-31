import{a as L,S as w,i as n}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const g=e=>`<li class="gallery-card">
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
        </li>`,m=(e,t)=>{const o={params:{q:e,key:"48265594-3edacf02e8cadda91195713cc",image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}};return L.get("https://pixabay.com/api/",o)},l=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),d=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");let c=1,p="";const b=async e=>{try{if(e.preventDefault(),p=e.currentTarget.elements.user_query.value.trim(),p===""){l.reset(),n.error({message:"Please enter your request",position:"topRight"});return}c=1,i.classList.add("is-hidden"),d.classList.remove("is-hidden");const{data:t}=await m(p,c);if(t.total===0){l.reset(),n.show({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"}),u.innerHTML="",l.reset();return}t.totalHits>1&&(i.classList.remove("is-hidden"),i.addEventListener("click",h));const o=t.hits.map(a=>g(a)).join("");u.innerHTML=o,d.classList.add("is-hidden"),f(),v.refresh(),l.reset()}catch(t){d.style.display="none",n.show({message:"error",position:"topRight"}),console.log(t)}};l.addEventListener("submit",b);const h=async e=>{try{c++;const{data:t}=await m(p,c),o=t.hits.map(a=>g(a)).join("");u.insertAdjacentHTML("beforeend",o),f(),v.refresh(),c*15>=t.totalHits&&(i.classList.add("is-hidden"),i.removeEventListener("click",h),d.style.display="none")}catch(t){n.show({message:"error",position:"topRight"}),console.log(t)}};function f(){let e=document.querySelector(".gallery-card").getBoundingClientRect().height;console.log(document.body.scrollTop,Math.floor(e*2)),window.scrollBy({top:document.body.scrollTop+Math.floor(e*2),behavior:"smooth"})}const v=new w(".js-gallery a",{captionDelay:300,captionsData:"alt"});
//# sourceMappingURL=index.js.map
