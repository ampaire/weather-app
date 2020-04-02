!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=document.querySelector(".control"),o=document.getElementById("cityInput"),a=document.getElementById("warn"),c=document.querySelector(".icon"),i=document.querySelector(".weather-status"),s=document.querySelector(".main-temp"),u=document.querySelectorAll(".location>span"),l=document.querySelectorAll(".more-info > p"),m=document.getElementById("weather-forecast"),p=document.querySelector(".date"),d=document.getElementById("switchF"),f=document.getElementById("degrees");var h=(e,t=null)=>{const n=document.createElement("li");let r=!1;n.classList.add("city"),u[0].innerHTML=e.name,u[1].innerHTML=e.country,p.innerHTML=new Date,s.innerHTML=`<i class='fa fa-thermometer-three-quarters'></i>${Math.round(e.temp)}°C`,c.src=`https://openweathermap.org/img/wn/${e.icon}@2x.png`,i.innerHTML="\n  <p> Click on the button to toggle between the temperatures</p>\n  ",l[0].innerHTML=`\n  <span class='b-feel'>Feels Like</span>\n  ${Math.round(e.feelsLike)}°C\n  `,l[1].innerHTML=`\n  <i class='fa fa-temperature-high'></i>\n  <span class='b-feel'>Max temp</span>${Math.round(e.tempMax)}°C, <i class='fa fa-temperature-low'></i>\n  <span class='b-feel'>Min temp</span>${Math.round(e.tempMin)}°C\n  `,f.style.display="block",f.addEventListener("click",()=>{((e,n,o)=>{const a=`<i class='fa fa-thermometer-three-quarters'></i>${Math.round(o)}°C`,c=`<i class='fa fa-thermometer-three-quarters'></i>${Math.round(t)}°F`;r?(n.innerHTML=a,e.innerHTML="Switch to °F",r=!1):(n.innerHTML=c,e.innerHTML="Switch to °C",r=!0)})(f,d,e.temp)}),m.className="show"};var y=e=>{const{description:t,icon:n,main:r}=e.weather[0],{temp:o}=e.main,[a,c]=[e.name,e.sys.country],{dateTime:i}=Date(e.dt);return{description:t,icon:n,main:r,temp:o,name:a,country:c,tempMax:e.main.temp_max,tempMin:e.main.temp_min,feelsLike:e.main.feels_like,dateTime:i}};const b="034b1e6439b4af8304cfb5a8734b6e14";r.addEventListener("submit",e=>{e.preventDefault();let t={};const n=o.value,c=`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=${b}&units=imperial`;fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=${b}&units=metric`,{mode:"cors"}).then(e=>e.json()).then(e=>y(e)).then(e=>{t=e}).then(()=>fetch(c)).then(e=>e.json()).then(e=>y(e)).then(e=>e.temp).then(e=>h(t,e)).catch(()=>{a.textContent="Couldn't fetch weather for this city 😩."}),a.textContent="",r.reset(),o.focus(),(e=>{const t=document.createElement("script");t.src=`https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=abc&tags=${e}`,document.head.appendChild(t),window.abc=function(e){const t=document.querySelector("body");t.style.background=`url('${e.items[3].media.m}') no-repeat`,t.style.backgroundSize="cover"}})(n)})}]);