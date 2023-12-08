window.addEventListener("scroll", function (event) {
    const bodyRect = document.body.getBoundingClientRect().top;
    // console.log(event);
    // console.log(window.pageYOffset);
    // console.log(this);
    // console.log(this.scrollY);
    if (this.scrollY > 500) {
      document
        .getElementsByClassName("main-header")[0]
        .classList.add("menu-fixed");
  
    //   document.body.style.backgroundColor = "#282828";
    } else {
      document
        .getElementsByClassName("main-header")[0]
        .classList.remove("menu-fixed");
    //   document.body.style.backgroundColor = "#202020";
    }
  });

  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    slidesPerView: 3,
    centeredSlides: false,
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