(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector(".navbar");if(!e)return;const t=location.pathname.split("/").pop().replace(".html","");["index","features","updates","download","credits"].forEach((c=>{const s=document.createElement("a");s.href=`${c}.html`,s.innerText=c,s.className=c===t?"selected":"",e.appendChild(s)}))}();const e=document.querySelectorAll(".patch"),t=document.querySelectorAll(".img-split");t.length>1?(function(e){e.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("active")?(e.classList.remove("active"),e.classList.add("inactive")):e.classList.contains("inactive")?(e.classList.remove("inactive"),e.classList.add("active")):e.classList.add("active")}))}))}(t),function(){const e=document.querySelectorAll(".container");e.forEach((e=>{e.addEventListener("mouseover",(e=>{const t=e.target.parentNode,c=t.children[0],s=t.children[1];c.classList.remove("image","active"),c.classList.add("static"),s.classList.remove("static"),s.classList.add("image","active")}))})),e.forEach((e=>{e.addEventListener("mouseout",(e=>{const t=e.target.parentNode,c=t.children[0],s=t.children[1];c.classList.remove("static"),c.classList.add("image","active"),s.classList.remove("image","active"),s.classList.add("static")}))}))}()):e.length>1&&function(e){e[0].classList.toggle("active"),e.forEach((t=>{t.querySelector("h1").addEventListener("click",(()=>{e.forEach((e=>{e===t?e.classList.toggle("active"):e.classList.remove("active")}))}));const c=t.querySelector("pre");c.innerHTML=c.innerHTML.replaceAll("\t","   ")}))}(e)}))})();