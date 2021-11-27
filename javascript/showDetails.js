const canvas = document.getElementById('canvas')
const showProduct = JSON.parse(localStorage.getItem('Detalle'))
// console.log(canvas)

const showDetails = (element,canvas) =>{
    
    const {id,nombre,img,precio,descripcion} = element
    canvas.innerHTML = `
    <div id="slider-mobile"></div>
        <div id="list-images">
            <img src=${img[0]} alt="produc image">
            <img src=${img[1]} alt="produc image">
            <img src=${img[2]} alt="produc image">
            
        </div>
        <div id="carrusel-images">
            <div class="product-image" id="uno" style= "background-image: url(${img[0]})";></div>
            <div class="product-image" id="dos" style= "background-image: url(${img[1]})";></div>
            <div class="product-image" id="tres" style= "background-image: url(${img[2]})";></div>          
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
                <a href="#">Click for Sizing</a>
            </div>
        </div>
    `        
}
document.addEventListener('DOMContentLoaded', showDetails(showProduct,canvas))
  