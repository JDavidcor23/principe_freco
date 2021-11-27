export const showDetails = async(element,productEndpoint) => {
    const products = await productEndpoint;
    products.forEach(prod => {
        const {id,name,img} = prod;
        element.innerHTML += `
        <li class="card" style="width: 18rem;">
        <div class="card-body" >
        <img src=${img} class="card-img-top" alt="...">
          <h5 class="card-title">${name}</h5>
          <a href="#" id=${id} class="btn btn-outline-dark " style="background-color: #db7093;">Detail</a>
        </div>
      </li>
        `
    })
}
  