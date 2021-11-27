const productEndpoint = " http://localhost:4004/productos";
btnDelete = document.querySelector('list-group');



btnDelete.addEventListener('click', async (e) => {
    const btnEliminar = e.target.classList.contains('btn-dark');

    if (btnEliminar === true) {
        const id = e.target.id;
        await fetch(productEndpoint + id, {
            method: 'DELETE'
        })
    }

})