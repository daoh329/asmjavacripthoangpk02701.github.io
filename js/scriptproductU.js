document.getElementById('frmProductCreate').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    if (id === '' || name === '' || price === '' || image === '' || description === '') {
        alert('Vui lòng nhập đủ')
        return
    } else {
        const product = new Product(id, name, price, description, image)
        const isCreate = store.add(product)
        if (isCreate) {
            store.save();
            renderTable(store.getProduct())
        } else {
            alert('false')
        }
    }

})
function renderTable(product) {
    let content = '';
    for (let i = 0; i < product.length; i++) {
        const item = product[i]
        content += `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td><img src="${item.image}" alt="" width="300px"></td>
        <td>
            <a href="detail.html?id=${item.id}&role=user">Xem</a>
        </td>
        </tr>`;

    }
    document.getElementById('tableBody').innerHTML = content;
}
function onRemove(id) {
    const isRemove = store.remove(id)
    if (isRemove) {
        store.save()
        renderTable(store.getProduct())
    } else {
        alert('false')
    }
}
function onEdit(id) {
    var myModal = new bootstrap.Modal(document.getElementById('modalProductEdit'), { keyboard: false })

    const product = store.getById(id)
    document.getElementById('prodId').value = product.id;
    document.getElementById('prodName').value = product.name;
    document.getElementById('prodPrice').value = product.price;
    document.getElementById('prodDescription').value = product.description;
    document.getElementById('prodImage').value = product.image;
    myModal.show();

    document.getElementById('frmProductEdit').addEventListener('submit', function (event) {
        event.preventDefault();
        const id = document.getElementById('prodId').value;
        const name = document.getElementById('prodName').value;
        const price = document.getElementById('prodPrice').value;
        const image = document.getElementById('prodImage').value;
        const description = document.getElementById('prodDescription').value;
        if (id === '' || name === '' || price === '' || image === '' || description === '') {
            alert('Vui lòng nhập đủ')
            return
        } else {
            const product = new Product(id, name, price, description, image)
            const isUpdate = store.update(product)
            if (isUpdate) {
                alert('thành công ')
                store.save();
                renderTable(store.getProduct())
            } else {
                alert('false')
            }
        }

    })
}
function onSearchName() {
    let searchname = document.getElementById('searchname').value;
    let content = '';
    store.save();
    for (let i = 0; i < store.getProduct().length; i++) {
        const item = store.getProduct()[i]
        if (searchname == item.name) {
            content += `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td>${item.image}</td>
        <td>
        <a href="detail.html?id=${item.id}&role=user">Xem</a>
        </td>
        </tr>`;
        }


    }
    document.getElementById('tableBody').innerHTML = content;

}

window.addEventListener('load',loadProd())

function loadProd() {
    store.save();
    store.sapXepTheoId()
    renderTable(store.getProduct())
}
function Sortplus() {
    store.save();
    store.sapXepTheoGia();
    renderTable(store.getProduct())
}
function Sorttru() {
    store.save();
    store.sapXepTheoGia(false);
    renderTable(store.getProduct())
}
// document.addEventListener('load',function(event){
//     store.save()
//     renderTable(store.Product())
// })