import {url} from './url.js'

const ul = document.querySelector(".list-group")
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
