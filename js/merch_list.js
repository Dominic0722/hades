window.addEventListener("load",function(){

    const filterList = document.querySelectorAll('.filter_list');
    let btn_filter = document.querySelectorAll('.filter a')
    btn_filter.forEach(function(btn,index){
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            filterList[index].classList.toggle('show'); // Toggle the hidden class
        });
    })

})



