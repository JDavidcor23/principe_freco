import {url} from './url.js'
const containerProductos = document.querySelector(".productos")

const getProducto = async () =>{
    
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    data.forEach(element =>{
         const {img, nombre, id, precio} = element
         containerProductos.innerHTML+=`
         <div class="card" id="${id}">
         <img src="${img[0]}" alt="">
         <div class="decription-price">
             <h2>${nombre}</h2>
             <p>$${precio}</p>
             <button class="btn btn-primary" id="${id}">Ir</button>
         </div>
     </div>
        `
    })
}
window.addEventListener('DOMContentLoaded',getProducto() )

containerProductos.addEventListener('click', async(e) =>{
    const id = e.target.id

     const btnDetail = e.target.classList.contains
     ("btn-primary")
     const respuesta = await fetch(url)
    const data = await respuesta.json()
     if(btnDetail){
         const objeto = data.find(list => list.id === Number(id))
         localStorage.setItem("Detalle", JSON.stringify(objeto))
           window.location.href = "detalle.html"
     }
})