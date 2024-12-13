window.addEventListener("load",function(){

    let mid=location.href.split("?")[1].split("=")[1]
    let wrap=this.document.querySelector("#wrap")

    let result_product_gallery = ""
    merch_array[mid].productimgs.forEach(function(item,index){
        result_product_gallery += `<img src="./img/hades merch/item${Number(mid)+1}/${item}" alt="Gallery Image 1"
                    class="gallery_img" onerror="this.style.display='none';" onclick="changeImage(this)">`
    });

    let result_paragraphs = ""
    merch_array[mid].paragraphs.forEach(function(item,index){
        result_paragraphs += `<p>${item}</p>`
    });
    

    

    wrap.innerHTML=`
            <div class="commonFrame product_number merch_txt_desc"><a href="./list.html">Home</a> / ${merch_array[mid].mname}
    </div>
    <section class="product_detail commonFrame">
        
        <div class="product_imgs">
            <!-- main img -->
            <div class="product_main">
                <img src="./img/hades merch/item${Number(mid)+1}/${merch_array[mid].productimgs[0]}" alt=" ${merch_array[mid].mname}"
                    class="main_img" id="main_img">
            </div>
            <!-- gallery imgs -->
            <div class="product_gallery">
               ${result_product_gallery}
            </div>
        </div>
        <div class="product_page">
            <div class="product_header">
                <!-- title -->
                <h6 class="product_title">${merch_array[mid].mname}</h6>
                <div class="price_rating">
                    <!-- price -->
                    <div class="product_price"><span class="super">$</span>${merch_array[mid].price}</div>
                    <div class="product_rating">
                        <span class="stars">
                            <a href="#">
                                <!-- stars -->
                                <img src="./img/star_full.svg" alt="star full">
                                <img src="./img/star_full.svg" alt="star full">
                                <img src="./img/star_full.svg" alt="star full">
                                <img src="./img/star_half.svg" alt="star half">
                                <img src="./img/star_empty.svg" alt="star empty">
                            </a>
                        </span>
                        <!-- reviews -->
                        <span class="reviews">${merch_array[mid].review}</span>
                    </div>
                </div>
            </div>
            <div class="product_size_options">
                <label for="size_buttons">Size:</label>
                <div id="size_buttons" class="size_buttons">
                    <button class="size_button" data-size="xs">XS</button>
                    <button class="size_button" data-size="s">S</button>
                    <button class="size_button" data-size="m">M</button>
                    <button class="size_button" data-size="l">L</button>
                    <button class="size_button" data-size="xl">XL</button>
                    <button class="size_button" data-size="2x">2X</button>
                    <button class="size_button" data-size="3x">3X</button>
                    <button class="size_button" data-size="4x">4X</button>
                </div>
                <a href="#" class="size_guide">Size Guide</a>
            </div>
            <div class="product_add_to_cart">
                <button class="add_to_cart_button">ADD TO CART</button>
            </div>
            <div class="product_desc">
                <p>DESCRIPTION</p>
                <!-- desc -->
                ${result_paragraphs}
            </div>
        </div>
    </section>
    `
})