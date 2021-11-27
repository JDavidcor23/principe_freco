import {url} from './url.js'
import { deleProducts } from './deleteProducts.js'
const ul = document.querySelector(".list-group")
const getUser = async () =>{
    
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    data.forEach(element =>{
         const {img, nombre, id} = element
        ul.innerHTML+=`
        <li class="list-group-item">
            <span class="lead">${nombre}</span>
            <img src=${img} width="50px"></img>
            <button id=${id} class="btn btn-dark btm-sm float-end ">
                Borrar
            </button>
        </li>
        `
    })
}

window.addEventListener('DOMContentLoaded', getUser(), deleProducts(ul, url))

// Captura de datos del formulario 
const capturarProductos = () =>{
    const nombre = document.getElementById('inputNombre').value;
    const img1 = document.getElementById('img1').value;
    const img2 = document.getElementById('img2').value;
    const img3 = document.getElementById('img3').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('inputDescripcion').value;
      const producto = {
            nombre,
            img:[img1, img2, img3],
            precio,
            descripcion
        }

    return producto;
}
const btnProducto = document.getElementById("btnProducto");


btnProducto.addEventListener('click', async() =>{
    const nombre = document.getElementById('inputNombre').value;
    const resp = await fetch(url);
    const lista = await resp.json();
    const buscado = lista.find(pro=> pro.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase())
    if(buscado !== undefined){
        const {id,img, descripcion, precio} = buscado
        document.getElementById('img1').value = img[0]
        document.getElementById('img2').value = img[1]
        document.getElementById('img3').value =  img[2]
        document.getElementById('precio').value = precio
        document.getElementById('inputDescripcion').value =descripcion
        document.getElementById('inputId').value =id
        
    }
    else{
        alert("correo no encontrado")
    }
})
const btnModificar = document.getElementById("btnModificar");

btnModificar.addEventListener("click", async () =>{
    const capturaInfo = capturarProductos()

    const id = document.getElementById("inputId").value;

    await fetch(url + id, {
        method: 'PUT',
        body: JSON.stringify(capturaInfo),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
})

const form = document.querySelector('.form-group');

form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const objeto = capturarProductos();


    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }

    })
})


