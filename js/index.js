window.addEventListener("load",function(){
    const station1 = new Swiper(".station1",{
        loop:true,
        // autoplay:true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      })
      const station2 = new Swiper(".station2",{
        slidesPerView:3.5,
        direction: 'vertical',
        loop:true,
        spaceBetween: 100,
        freeMode: true,

      })

      station2.on('slideChange', function () {
        // console.log(station3.realIndex);
        station1.slideToLoop(station2.realIndex)
        
        
      });

      station2.on('click', function () {
        // console.log(Number(this.clickedSlide.getAttribute("data-swiper-slide-index"))) 
        let idx = Number(this.clickedSlide.getAttribute("data-swiper-slide-index"))
        station1.slideToLoop(idx)
        station2.slideToLoop(idx)

      });



})