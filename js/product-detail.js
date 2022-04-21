window.addEventListener('load', function (event) {
    const param = new URLSearchParams(window.location.search)
    const id = param.get('id');
    const role = param.get('role')
    const product = store.getById(id);

    if (product) {
        document.getElementById('name').textContent = product.name
        document.getElementById('price').textContent = product.price
        document.getElementById('description').textContent = product.description
        document.getElementById('image').src = product.image
    }

    if (role == 'admin') {
        let content = `
            <li class="list-group-item"><a href="trangchu.html?role=admin">trangchu</a></li>
            <li class="list-group-item"><a href="productAdmin.html">List sản phẩm</a></li>
        `;
        document.getElementById('menu-comtinue').innerHTML = content;
    } else if (role == 'user') {
        let content = `
            <li class="list-group-item"><a href="trangchu.html?role=user">trangchu</a></li>
            <li class="list-group-item"><a href="productUser.html">List sản phẩm</a></li>
        `;
        document.getElementById('menu-comtinue').innerHTML = content;
    }

})