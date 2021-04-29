(()=>{"use strict";const t=function(t,e,n=!0){const c=document.querySelector("#content");(async function(t){return(await fetch(t,{method:"POST",mode:"cors"})).json()})(`http://api.openweathermap.org/data/2.5/weather?q=${t}&appid=2316fb2f745c7ff1232b9e52f05b2491&units=${e}`).then((t=>{n&&c.removeChild(c.lastChild);const a=t.weather[0].icon,o=document.querySelector("#inputLocation"),s=t.weather[0].main,r=t.weather[0].description,l=`https://api.giphy.com/v1/gifs/translate?api_key=3X2ApJT7aNnInzDc4ImBbzZLzv0UNSGA&s&s=${s.toLowerCase().split(" ").join("-")}-${r.toLowerCase().split(" ").join("-")}`;c.appendChild(function(t,e){let n="";n="metric"===e?"° C":"imperial"===e?"° F":" K";const c=document.createElement("div");c.setAttribute("class","card mb-3 shadow border-0");const a=document.createElement("div");a.setAttribute("class","row g-0 bg-white rounded pb-1");const o=document.createElement("h2");o.setAttribute("class","rounded p-1 text-white text-center card-title align-self-center bg-gradient bg-secondary"),o.textContent=`${t.name}, ${t.sys.country}`;const s=document.createElement("div");s.setAttribute("class","col-4 d-flex justify-content-center");const r=document.createElement("div");r.setAttribute("class","col-4 d-flex justify-content-center");const l=document.createElement("div");l.setAttribute("class","col-4 d-flex justify-content-center");const d=document.createElement("div");d.setAttribute("class","card-body p-0");const i=document.createElement("div");i.setAttribute("class","card-body p-0");const m=document.createElement("div");m.setAttribute("class","card-body p-0");const u=document.createElement("p");u.setAttribute("class","card-text m-0 text-center");const p=document.createElement("small");p.setAttribute("class","text-muted"),p.textContent="Current:";const h=document.createElement("p");h.setAttribute("class","text-center fs-2 m-0 fw-bold align-middle mt-3"),h.textContent=`${t.main.temp}${n}`;const x=document.createElement("p");x.setAttribute("class","card-text m-0 text-center");const C=document.createElement("small");C.setAttribute("class","text-muted"),C.textContent="Maximum:";const g=document.createElement("p");g.setAttribute("class","card-text m-0 text-center fs-5"),g.textContent=`${t.main.temp_max}${n}`;const b=document.createElement("p");b.setAttribute("class","card-text m-0 text-center");const f=document.createElement("small");f.setAttribute("class","text-muted"),f.textContent="Minimum:";const A=document.createElement("p");A.setAttribute("class","card-text m-0 text-center fs-5"),A.textContent=`${t.main.temp_min}${n}`;const E=document.createElement("p");E.setAttribute("class","card-text m-0 text-center");const y=document.createElement("small");y.setAttribute("class","text-muted"),y.textContent="Feel Like:";const S=document.createElement("p");S.setAttribute("class","card-text m-0 text-center fs-5"),S.textContent=`${t.main.feels_like}${n}`;const w=document.createElement("p");w.setAttribute("class","card-text m-0 text-center");const $=document.createElement("small");$.setAttribute("class","text-muted"),$.textContent="Humidity:";const v=document.createElement("p");return v.setAttribute("class","card-text m-0 text-center fs-5"),v.textContent=`${t.main.humidity} %`,u.appendChild(p),d.appendChild(u),d.appendChild(h),x.appendChild(C),i.appendChild(x),i.appendChild(g),b.appendChild(f),i.appendChild(b),i.appendChild(A),E.appendChild(y),m.appendChild(E),m.appendChild(S),w.appendChild($),m.appendChild(w),m.appendChild(v),s.appendChild(d),r.appendChild(i),l.appendChild(m),a.appendChild(o),a.appendChild(s),a.appendChild(r),a.appendChild(l),c.appendChild(a),c}(t,e)),o.value="",async function(t){return(await fetch(t,{mode:"cors"})).json()}(l).then((t=>{const e=document.querySelector("#weatherImg"),n=document.querySelector("#weatherIcon"),c=document.querySelector("#figTitle"),o=document.querySelector("#figDescription");c.textContent=s,o.textContent=r,e.src=t.data.images.original.url,n.src=`http://openweathermap.org/img/wn/${a}@2x.png`}))})).catch((t=>{c.textContent=`${t.message}`}))};let e="London,uk",n="metric";localStorage.getItem("location")?e=localStorage.getItem("location"):localStorage.setItem("location","London,uk"),localStorage.getItem("units")?n=localStorage.getItem("units"):localStorage.setItem("units","metric");const c=document.querySelector("#btnSearch"),a=document.querySelector("#inputLocation"),o=document.querySelector("#selectUnits");t(e,n,!1),c.addEventListener("click",(()=>{e=a.value.match(/^[^,-]+/gi).toString(),localStorage.setItem("location",e),t(localStorage.getItem("location"),localStorage.getItem("units"))})),o.addEventListener("change",(()=>{n=o.value,localStorage.setItem("units",n),t(e,localStorage.getItem("units"))}))})();