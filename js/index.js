window.addEventListener("load", function () {
  const station1 = new Swiper(".station1", {
    loop: true,
    // autoplay:true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  })
  const station2 = new Swiper(".station2", {
    loop: true,
    freeMode: true,
    breakpoints: {
      280: {
        direction: "horizontal",
        spaceBetween: 14,
        slidesPerView: 3.5,
      },
      968: {
        direction: "vertical",
        spaceBetween: 20,
        slidesPerView: 'auto',
      },
    },

  })

  station2.on('slideChange', function () {
    // 슬라이드2번째가 어떤 변경사항이 있을 때 마다 실행되는 소스코드
    // 여기서 의미하는 realIndex 는 현재 루프모드 상황인데 루프모드 상황 안에서 보여지는 슬라이드의 순번을 의미 0,1,2,...
    // console.log(station3.realIndex);
    station1.slideToLoop(station2.realIndex)
    station3list_array.forEach(function(litag){
      litag.classList.remove("on")
    })
    station3list_array[station2.realIndex].classList.add("on")
  });

  let station3list_array = this.document.querySelectorAll(".station3 li")
  station2.on('click', function () {
    // console.log(Number(this.clickedSlide.getAttribute("data-swiper-slide-index"))) 
    let idx = Number(this.clickedSlide.getAttribute("data-swiper-slide-index"))
    station1.slideToLoop(idx)
    station2.slideToLoop(idx)
    station3list_array.forEach(function(litag){
      litag.classList.remove("on")
    })
    station3list_array[idx].classList.add("on")
    
    return false

  });
  this.document.querySelectorAll(".station2 a").forEach(function(atag){
    atag.addEventListener("click",function(e){
      e.preventDefault()
    })
  })



  // 동영상 재생/일시정지
  const video = document.getElementById('trailer');

  // 클릭 이벤트 추가
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play(); // 비디오 재생
    } else {
      video.pause(); // 비디오 일시정지
    }
  });
  let btn_open=this.document.querySelector(".btn_open")
  let hidden_gnb=this.document.querySelector(".hidden_gnb")
  let btn_close=this.document.querySelector(".btn_close")

  btn_open.addEventListener("click",function(){
    hidden_gnb.classList.add("on")
  })
  btn_close.addEventListener("click",function(){
    hidden_gnb.classList.remove("on")
  })



})