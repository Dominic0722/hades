window.addEventListener("load",function(){
    let grid_box=this.document.querySelector("#grid_box")
    let result=""
    for(let i=0; i<merch_array.length ; i++){

        result +=`
            <section class="grid_item">
            <a href="./detail.html?mid=${merch_array[i].mid}">
                <figure>
                    <img src="./img/hades merch/item${merch_array[i].mid+1}/${merch_array[i].thumbimg}" 
                    data-hover="./img/hades merch/item${merch_array[i].mid+1}/${merch_array[i].hoverimg}"
                    alt="hoodie" class="product_img">
                    <figcaption>
                        <div class="product_info">
                            <p class="product_title">${merch_array[i].mname}</p>
                            <p class="product_price"><span class="super">$</span>${merch_array[i].price}</p>
                        </div>
                        <p class="product_description">${merch_array[i].game}</p>
                    </figcaption>
                </figure>
                </a>
            </section>
        `
    }
    grid_box.innerHTML=result


})