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
    slidesPerView: 3.5,
    direction: 'vertical',
    loop: true,
    spaceBetween: 100,
    freeMode: true,

  })

  station2.on('slideChange', function () {
    // console.log(station3.realIndex);
    station1.slideToLoop(station2.realIndex)


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
  // let count=0
  // let slide=this.document.querySelectorAll(".station3 .train>li")
  // setInterval(function(){
  //     count++
  //     if(count>5){count=0}
  //     slide[0].classList.remove("on")
  //     slide[1].classList.remove("on")
  //     slide[2].classList.remove("on")
  //     slide[3].classList.remove("on")
  //     slide[4].classList.remove("on")
  //     slide[5].classList.remove("on")
  //     slide[count].classList.add("on")
  // },2500)



})