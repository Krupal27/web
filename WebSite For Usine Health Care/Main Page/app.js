// Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  // centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Animation
AOS.init({
    duration: 3000,
  });

// Redirect Other page

document.getElementById("Nav-home").addEventListener("click", function () {
  // console.log("called");
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/index.html#";  
})

document.getElementById("Nav-about").addEventListener("click", function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/About%20Us/index.html"
})

document.getElementById("Nav-team").addEventListener("click",function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/Team/index.html"
})

document.getElementById("Nav-services").addEventListener("click", function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/Services/index.html"
})

document.getElementById("Nav-event").addEventListener("click", function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/News%20%26%20Events/index.html" 
})

document.getElementById("Nav-contact").addEventListener("click", function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/Contact%20Us/index.html"
})

document.getElementById("for-enquiry").addEventListener("click" , function (){
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/Enquiry/index.html#home"
})

document.getElementById("foot-doctor").addEventListener("click", function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/Team/index.html"
})

document.getElementById("foot-service").addEventListener("click", function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/Services/index.html"
})

document.getElementById("foot-event").addEventListener("click", function (){
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/News%20%26%20Events/index.html"
})

document.getElementById("foot-contact").addEventListener("click", function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/Contact%20Us/index.html"
})

document.getElementById("foot-call").addEventListener("click", function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/index.html#"
})

document.getElementById("foot-fixed-contact").addEventListener("click", function () {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/Contact%20Us/index.html"
})

document.getElementById("Slide-1").addEventListener("click", () =>{
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/1%20Laboratory%20Test/index.html"
})

document.getElementById("Slide-2").addEventListener("click", () =>{
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/2%20ECG/index.html"
})

document.getElementById("Slide-3").addEventListener("click", () =>{
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/3%20X-ray/index.html"
})

document.getElementById("Slide-4").addEventListener('click', () =>{
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/4%20Complate%20Health%20Checkup/index.html"
})

document.getElementById("Slide-5").addEventListener("click", ()=>{
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/5%20Form%2032%20%26%2033/index.html"
})

document.getElementById("Slide-6").addEventListener("click", () =>{
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/6%20Audiomatry%20chechup/index.html"
})

document.getElementById("Slide-7").addEventListener("click", () =>{
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/7%20spirometry%20chechup/index.html"
})

document.getElementById("Dr.Ashish").addEventListener('click', () => {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/8%20Dr.%20Ashish%20Bhensdadiya/index.html"
})

document.getElementById("Dr.Kevin").addEventListener("click", () =>{
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/9%20Dr.%20kevin%20Bhensdadiya/index.html#"
})

document.getElementById("Dr.Kishan").addEventListener("click", () => {
  window.location.href="file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/10%20Dr.%20Kishan%20Bhensdadiya/index.html"
})

document.getElementsByClassName("swiper-slide").addEventListener("click", () => {
  window.location.href= "file:///d%3A/web/WebSite%20For%20Usine%20Health%20Care/News%20%26%20Events/index.html"
})