import { backgroundTheme, time, widgetMood } from "./module/utile.js";

const main = document.querySelector(".main")
fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tehran?unitGroup=metric&key=E269F3JEX85HLTGXMEDL3CGGJ&contentType=json",
  {
    method: "GET",
    headers: {},
  }
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(  Number(data.currentConditions.sunset.split("", 2).join("")));
    let body = document.querySelector("body");
    backgroundTheme(data.currentConditions.sunset , body);

    var card = " ";
    card = ` <div class="description">
  <h1>${data.address.toUpperCase()}</h1>
</div>
<div class="temperature">
  <div>
  <h1>${data.currentConditions.temp}&#176</h1>
  </div>
  <div>
  <p class="range "> ${data.days[0].tempmax}&#176 </p>
  <p class="range " > ${data.days[0].tempmin}&#176</p>
</div>
  </div>
  <div class="condition">
  <p>${data.currentConditions.conditions}</p>
  <p>feels like ${data.currentConditions.feelslike}</p>
  <p>UV index ${data.currentConditions.uvindex}</p>

  </div>
<ul class="sunset">
  <li>
  <?xml version="1.0" ?><svg class="sunset-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#f8b62d;}.cls-2{fill:#231815;}</style></defs><title/><g data-name="图层 1" id="图层_1"><path class="cls-1" d="M215.44,305.85h23.82l5.43-5.2a7.65,7.65,0,0,1,10.61,0l5.43,5.2h23.82c0-3.75,2.42-7.5,7.25-7.5h28.36a81.5,81.5,0,0,0-54.33-121.91c-33.28-6.74-68.23,8.91-85.76,37.86a82.85,82.85,0,0,0-.52,84.06H208.2C213,298.35,215.44,302.1,215.44,305.85Z"/><path class="cls-2" d="M180.07,214.3c17.54-28.95,52.48-44.6,85.76-37.86a82.68,82.68,0,0,1,65.94,80.25c.07-9.66,15.07-9.65,15,0a98,98,0,0,0-64-91.07C245,151.8,200.82,164,175.45,195.05c-23.69,29-28.74,69.75-12.79,103.3h16.88A82.85,82.85,0,0,1,180.07,214.3Z"/><path class="cls-2" d="M331.77,256.69c.07,9.65,15.07,9.67,15,0S331.84,247,331.77,256.69Z"/><path class="cls-2" d="M331.77,256.69a83.48,83.48,0,0,1-11.6,41.66H337a97.63,97.63,0,0,0,9.78-41.66C346.84,266.36,331.84,266.34,331.77,256.69Z"/><path class="cls-2" d="M257.5,131.84V98.18c0-9.65-15-9.67-15,0v33.65C242.5,141.49,257.5,141.5,257.5,131.84ZM250,98.18v0Z"/><path class="cls-2" d="M194,144.78l-16.83-29.15c-4.83-8.36-17.79-.81-13,7.57l16.83,29.15C185.92,160.71,198.89,153.16,194,144.78Zm-6.48,3.79-16.83-29.15Z"/><path class="cls-2" d="M108.94,183.91l29.15,16.83c8.38,4.84,15.94-8.12,7.57-13L116.51,171C108.14,166.13,100.57,179.08,108.94,183.91Zm3.79-6.48,29.15,16.83Z"/><path class="cls-2" d="M91.49,264.19h33.65c9.65,0,9.67-15,0-15H91.49C81.84,249.19,81.82,264.19,91.49,264.19Zm0-7.5h0Z"/><path class="cls-2" d="M408.51,249.19H374.86c-9.65,0-9.67,15,0,15h33.65C418.16,264.19,418.18,249.19,408.51,249.19Zm-33.65,7.5h0Z"/><path class="cls-2" d="M361.91,200.74l29.15-16.83c8.36-4.83.81-17.79-7.57-13l-29.15,16.83C346,192.61,353.53,205.58,361.91,200.74Zm25.36-23.3-29.15,16.83Z"/><path class="cls-2" d="M318.9,152.35l16.83-29.15c4.84-8.37-8.12-15.94-13-7.57L306,144.78C301.12,153.15,314.07,160.72,318.9,152.35Zm10.35-32.93-16.83,29.15Z"/><path class="cls-2" d="M407.32,298.35H291.8c-4.83,0-7.24,3.75-7.25,7.5s2.41,7.5,7.25,7.5H407.32C417,313.35,417,298.35,407.32,298.35Z"/><path class="cls-2" d="M171.58,313.35H208.2c4.83,0,7.24-3.75,7.24-7.5s-2.41-7.5-7.24-7.5H92.68c-9.65,0-9.67,15,0,15h78.89Z"/><path class="cls-2" d="M375.15,338.46H294.81l-8.71-8.33-25.37-24.28-5.43-5.2a7.65,7.65,0,0,0-10.61,0l-5.43,5.2-25.18,24.09-8.9,8.51H124.85c-9.65,0-9.67,15,0,15h61.74c7.14,0,14.48.49,21.61,0,3.86-.26,6.59-3.27,9.22-5.92l1-.94L219,346l10.72-10.26,1.77-1.69L250,316.36c6.65,6.5,13.25,13.12,20,19.61,3.5,3.38,7,6.73,10.63,10,.69.63,1.39,1.24,2.08,1.86,1.24,1.11,2.47,2.22,3.73,3.3,5,4.36,15.88,2.34,22,2.34h66.82C384.8,353.46,384.82,338.46,375.15,338.46Z"/><path class="cls-2" d="M346.5,378.57h-193c-9.65,0-9.67,15,0,15h193C356.15,393.57,356.17,378.57,346.5,378.57Z"/></g></svg>
  <p class="sunset-p fs-4">Sunrise ${data.currentConditions.sunrise}</p>
  </li>
  <li>
    <?xml version="1.0" ?><svg class="sunset-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#f8b62d;}.cls-2{fill:#231815;}</style></defs><title/><g data-name="图层 1" id="图层_1"><path class="cls-1" d="M320.17,298.35a81.5,81.5,0,0,0-54.33-121.91c-33.28-6.74-68.23,8.91-85.76,37.86a82.85,82.85,0,0,0-.52,84.06H320.17Z"/><path class="cls-2" d="M331.77,256.69a83.48,83.48,0,0,1-11.6,41.66H337a97.63,97.63,0,0,0,9.78-41.66C346.84,266.36,331.84,266.34,331.77,256.69Z"/><path class="cls-2" d="M180.07,214.3c17.54-28.95,52.48-44.6,85.76-37.86a82.68,82.68,0,0,1,65.94,80.25c.07-9.66,15.07-9.65,15,0a98,98,0,0,0-64-91.07C245,151.8,200.82,164,175.45,195.05c-23.69,29-28.74,69.75-12.79,103.3h16.88A82.85,82.85,0,0,1,180.07,214.3Z"/><path class="cls-2" d="M331.77,256.69c.07,9.65,15.07,9.67,15,0S331.84,247,331.77,256.69Z"/><path class="cls-2" d="M242.5,98.18v33.65c0,9.65,15,9.67,15,0V98.18C257.5,88.53,242.5,88.51,242.5,98.18Zm7.5,33.65v0Z"/><path class="cls-2" d="M164.27,123.2l16.83,29.15c4.83,8.36,17.79.81,13-7.57l-16.83-29.15C172.4,107.28,159.43,114.82,164.27,123.2Zm6.48-3.79,16.83,29.15Z"/><path class="cls-2" d="M116.51,171c-8.37-4.84-15.94,8.12-7.57,13l29.15,16.83c8.38,4.84,15.94-8.12,7.57-13Zm-3.79,6.48,29.15,16.83Z"/><path class="cls-2" d="M91.49,264.19h33.65c9.65,0,9.67-15,0-15H91.49C81.84,249.19,81.82,264.19,91.49,264.19Zm33.65-7.5h0Z"/><path class="cls-2" d="M408.51,249.19H374.86c-9.65,0-9.67,15,0,15h33.65C418.16,264.19,418.18,249.19,408.51,249.19Zm-33.65,7.5h0Z"/><path class="cls-2" d="M383.49,171l-29.15,16.83c-8.36,4.83-.81,17.79,7.57,13l29.15-16.83C399.42,179.09,391.87,166.12,383.49,171Zm-25.36,23.3,29.15-16.83Z"/><path class="cls-2" d="M322.78,115.63,306,144.78c-4.84,8.38,8.12,15.94,13,7.57l16.83-29.15C340.57,114.83,327.61,107.27,322.78,115.63Zm-10.35,32.93,16.83-29.15Z"/><path class="cls-2" d="M407.32,298.35H337q-1.85,3.84-4,7.5H372.7v7.5h34.62C417,313.35,417,298.35,407.32,298.35Z"/><path class="cls-2" d="M92.68,305.85h74q-2.18-3.68-4-7.5h-70c-9.65,0-9.67,15,0,15H127.3v-7.5Z"/><path class="cls-2" d="M320.17,298.35H179.55a77.11,77.11,0,0,0,5,7.5h130.6A83.67,83.67,0,0,0,320.17,298.35Z"/><path class="cls-2" d="M184.59,305.85a77.11,77.11,0,0,1-5-7.5H162.66q1.81,3.82,4,7.5Z"/><path class="cls-2" d="M315.18,305.85H333q2.17-3.66,4-7.5H320.17A83.67,83.67,0,0,1,315.18,305.85Z"/><path class="cls-2" d="M167.12,306.66c-.16-.27-.31-.54-.47-.81H127.3v7.5h44.28C170,311.2,168.52,309,167.12,306.66Z"/><path class="cls-2" d="M191.09,313.35H308.87a82.71,82.71,0,0,0,6.31-7.5H184.59q.92,1.21,1.89,2.38Q188.68,310.91,191.09,313.35Z"/><path class="cls-2" d="M333,305.85q-2.29,3.86-4.91,7.5H372.7v-7.5Z"/><path class="cls-2" d="M308.87,313.35H328q2.62-3.64,4.91-7.5H315.18A82.71,82.71,0,0,1,308.87,313.35Z"/><path class="cls-2" d="M186.47,308.23q-1-1.17-1.89-2.38H166.65c.16.27.31.54.47.81,1.4,2.31,2.89,4.54,4.46,6.69h19.51Q188.69,310.9,186.47,308.23Z"/><path class="cls-2" d="M375.15,346H372.7v7.5h2.45c9.65,0,9.67-15,0-15H372.7V346Z"/><path class="cls-2" d="M124.85,346h2.45v-7.5h-2.45c-9.65,0-9.67,15,0,15h2.45V346Z"/><path class="cls-2" d="M202.89,351.26l2.3,2.2h3Z"/><path class="cls-2" d="M301.91,338.27A93.87,93.87,0,0,1,287.39,346H372.7v-7.5H313.41C309.61,338.46,305.76,338.32,301.91,338.27Z"/><path class="cls-2" d="M291.8,353.46h3l2.3-2.2Z"/><path class="cls-2" d="M291.8,346,250,386l-41.8-40H127.3v7.5h77.89l-2.3-2.2,5.3,2.2h-3l39.51,37.81a7.65,7.65,0,0,0,10.61,0l39.51-37.81h-3l5.3-2.2-2.3,2.2H372.7V346Z"/><path class="cls-2" d="M208.2,346h5.11a98.37,98.37,0,0,1-15.2-7.81c-2.38.14-4.62.31-6.43.31H127.3V346Z"/><path class="cls-2" d="M291.8,338.46c-4.33.3-7.23,4-10.17,6.86L281,346h6.43a93.87,93.87,0,0,0,14.52-7.69C298.53,338.22,295.14,338.23,291.8,338.46Z"/><path class="cls-2" d="M213.65,340.79c-3.53-3.06-9.93-3-15.54-2.65a98.37,98.37,0,0,0,15.2,7.81h6.14Q216.57,343.34,213.65,340.79Z"/><path class="cls-2" d="M255.3,380.66q-2.65-2.53-5.27-5.1l-5.33,5.1Z"/><path class="cls-2" d="M268.47,357.91,250,375.55q2.63,2.57,5.27,5.1H244.7l5.33-5.1c-8.92-8.71-17.73-17.64-26.85-26.15a98.76,98.76,0,0,1-9.87-3.44H208.2L250,386l41.8-40h-4.41a92.29,92.29,0,0,1-10.24,3.65Z"/><path class="cls-2" d="M277.15,349.6A92.29,92.29,0,0,0,287.39,346H281Z"/><path class="cls-2" d="M219.45,346h-6.14a98.76,98.76,0,0,0,9.87,3.44Q221.32,347.67,219.45,346Z"/><path class="cls-2" d="M291.8,378.57c-9.65,0-9.67,15,0,15h54.7c9.65,0,9.67-15,0-15Zm0,7.5h0Z"/><path class="cls-2" d="M208.2,378.57H153.5c-9.65,0-9.67,15,0,15h54.7C217.85,393.57,217.86,378.57,208.2,378.57Zm-54.7,7.5h0Z"/></g></svg>
    <p class="sunset-p fs-4">Sunset ${data.currentConditions.sunset}</p>
    </li>
</ul>`;
    return card;
  })
  .then((card) => {
    let container = document.querySelector(".container");
    container.innerHTML = card;
    time(".description");
  })
  .catch((err) => {
    console.log(err);
  });

//------------------small weather box-----------------------------------
fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tehran?unitGroup=metric&key=E269F3JEX85HLTGXMEDL3CGGJ&contentType=json",
  {
    method: "GET",
    headers: {},
  }
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var card = " ";
    card = ` 
    <div class="icon-box text-end">
    <h1>${data.currentConditions.temp}&#176</h1>
      <div class="range fs-5">
       <p>${data.days[0].tempmax}&#176 </p>
       <p>${data.days[0].tempmin}&#176</p> 
    </div>
    </div>
   <div class="description-wg">
   <h3>${data.address.toUpperCase()}</h3>    
   <p class="condition-wg fs-5">${data.currentConditions.conditions}</p>
   </div>
 `;
    return card;
  })
  .then((card) => {
    let container = document.querySelector(".container-wg");
    container.innerHTML = card;
    time(".description-wg");
  })
  .catch((err) => {
    console.log(err);
  });
//----------------------widget mood------------------
function createWidgetBTN(){
 let Btn = document.createElement('button')
 Btn.classList.add('WGBtn')
 Btn.classList.add('glass')
 Btn.innerText = 'widget mood'
 Btn.addEventListener('click',widgetMood)
 main.appendChild(Btn)
}
createWidgetBTN()