import{a as l,i as u}from"./assets/vendor-BGBn-cxc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function d(o){if(!o){alert("ВВЕДІТЬ ЗАПРОС");return}return l({method:"get",url:"https://pixabay.com/api",params:{q:o,key:"48904272-bbce21e261483c6f45f0aefa4",image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data.total==0?(u.show({title:"Hey",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"}),null):t.data.hits).catch(t=>(console.error("error:"[t]),null))}const p=document.querySelector(".allPicture");function f(o){const t=o.map(({webformatURL:n,largeImageURL:c,tags:e,likes:r,views:i,comments:s,downloads:a})=>`<li class = "onePicture">
        <img src= "${n}" alt="${e}" class ="pictureImage" />
       
            <div class = "tags">
       
            <p><b>Likes</b> <br>${r}</p>
            <p><b>Views</b> <br>${i}</p>
            <p><b>Downloads</b> <br> ${a}</p>
            <p><b>Comments</b> <br> ${s}</p>
       
            </div>

       </li>`).join("");p.insertAdjacentHTML("beforeend",t)}const m=document.querySelector(".imageButton"),g=document.querySelector(".inputs");m.addEventListener("click",()=>{const o=g.value;d(o).then(t=>{console.log(t),f(t)}).catch(t=>console.log(t))});
//# sourceMappingURL=index.js.map
