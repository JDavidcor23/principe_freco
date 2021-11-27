import {url} from './url.js'
import { deleProducts } from './deleteProducts.js'
const ul = document.querySelector(".list-group")
const canvas = document.querySelector('canvas')
const getUser = async () =>{
    
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    data.forEach(element =>{
         const {img, nombre, id} = element
        ul.innerHTML+=`
        <li class="list-group-item">
            <span class="lead">${nombre}</span>
            <img src=${img[0]} width="50px"></img>
            <button id=${id} class="btn btn-dark btm-sm float-end ">
                Borrar
            </button>
        </li>
        `
    })
}

window.addEventListener('DOMContentLoaded', getUser)

// Captura de datos del formulario 
const capturarDatos = () =>{
    const nombre = document.getElementById('inputNombre').value;
    const img1 = document.getElementById('img1').value;
    const img2 = document.getElementById('img2').value;
    const img3 = document.getElementById('img3').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('inputDescripcion').value;

    const user = {
        nombre,
        img1,
        img2,
        img3,
        precio,
        descripcion
    }

return user;
}

//PETICION POST 

const form = document.querySelector('.form-group');

form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const objeto = capturarDatos();


    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }

    })
})


window.addEventListener('DOMContentLoaded', deleProducts(ul, url))
