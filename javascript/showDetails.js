
export const showDetails = (element, canvas) => {
    const {id,nombre,img,precio,descripcion}
    canvas.innerHTML =+ `
    <div id="slider-mobile"></div>
        <div id="list-images">
            <img src=${img[0]} alt="produc image">
            <img src=${img[1]} alt="produc image">
            <img src=${img[2]} alt="produc image">
            
        </div>
        <div id="carrusel-images">
            <div class="product-image" id="uno"></div>
            <div class="product-image" id="dos"></div>
            <div class="product-image" id="tres"></div>          
        </div>
        <div id="detalle-container">
            <div id="name-container">
                <h2>${nombre}</h2>
            </div>            
            <div id="price"><span>$</span>${precio}</div>
            <div id="size">
                <p>Size</p>
                <div id="size-content">
                    <ul id="size-list">
                        <li class="size-active">S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
                </div>
            </div>
            <div id="butons">
                <button id="addCard">ADD TO CART</button>
                <button id="buy">BUY IT NOW</button>
            </div>
            <div id="description">
                <p>${descripcion}</p>
                <a href="">Click for Sizing</a>
            </div>
        </div>
    `
    
       
    
}
  