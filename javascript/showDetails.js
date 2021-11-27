const detalles = document.querySelector(".detalles")
let carrito = []
const showDetails =(element) => {
    const products = [JSON.parse(localStorage.getItem("Detalle"))]
    products.forEach(prod => {
         const {id,img,nombre, precio, descripcion} = prod;
         element.innerHTML = `
         <div id="carrusel-images">
             <img src="${img[0]}" alt="">
             <img src="${img[1]}" alt="">
             <img src="${img[2]}" alt="">         
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
         let numeroItems = 0
         const btnCarrito = document.getElementById("addCard")
         btnCarrito.addEventListener('click', async(e) =>{
             numeroItems+=1
             let items =0 
             items += products
             let productoCarrito={
                 numeroItems,
                 items,
             }
             localStorage.setItem("ItemsCarrito", JSON.stringify(productoCarrito))
         })
    })
}
window.addEventListener('DOMContentLoaded',showDetails(detalles))
