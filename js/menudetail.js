window.addEventListener('load', xuatsp())
function xuatsp(event) {
  const param = new URLSearchParams(window.location.search)
  const role = param.get('role')
  const products = store.getProduct();



  if (role == 'admin') {
    let productshoww = '';
    for (let i = 0; i < products.length; i++) {
      a = products[i].name
      b = products[i].price
      c = products[i].description
      d = products[i].image
      e = `<a href="detail.html?id=${products[i].id}&role=admin">Xem Chi tiết</a>`;
      productshoww +=
        `<div class="a100px floatleft">    
        <div class="imggg">
          <img id="image" src="${d}" class="a100" alt="...">
        </div>
        <div class="card-body">
          <h3 id="name">${a}</h3>
          <h5 id="price">${b}</h5>
          <p id="description" class="black left sizesmall" >${c}</p>
          ${e}
        </div>
        </div>`;
    }
    document.getElementById('productshow').innerHTML = productshoww;

    let menumain = `
            <ul>
                <li><a href="./productAdmin.html">List SP</a></li>
                <li><a href="trangchu.html">Logout</a></li>
            </ul>    
    `;
    document.getElementById('menumain').innerHTML = menumain;
  } else if (role == 'user') {
    let productshoww = '';
    for (let i = 0; i < products.length; i++) {
      a = products[i].name
      b = products[i].price
      c = products[i].description
      d = products[i].image
      e = `<a href="detail.html?id=${products[i].id}&role=user">Xem Chi tiết</a>`;
      productshoww +=
        `<div class="a100px floatleft">    
        <div class="imggg">
          <img id="image" src="${d}" class="a100" alt="...">
        </div>
        <div class="card-body">
          <h3 id="name">${a}</h3>
          <h5 id="price">${b}</h5>
          <p id="description" class="black left sizesmall" >${c}</p>
          ${e}
        </div>
        </div>`;

    }
    document.getElementById('productshow').innerHTML = productshoww;
    let menumain = `
            <ul>
              <li><a href="./productUser.html">List SP</a></li>
                <li><a href="trangchu.html">Logout</a></li>
            </ul>    
        `;
    document.getElementById('menumain').innerHTML = menumain;
  }

}

function Sortplus() {
  store.save();
  store.sapXepTheoGia();
  xuatsp()
}
function Sorttru() {
  store.save();
  store.sapXepTheoGia(false);
  xuatsp()
}
function onSearchName() {
  const param = new URLSearchParams(window.location.search)
  const role = param.get('role')
  let searchname = document.getElementById('searchname').value;
  let productshowww = '';
  store.save();
  for (let i = 0; i < store.getProduct().length; i++) {
    const products = store.getProduct()[i]
    if (searchname == products.name) {
      if (role == 'admin') {
        let productshoww = '';
        
          a = products.name
          b = products.price
          c = products.description
          d = products.image
          e = `<a href="detail.html?id=${products.id}&role=admin">Xem Chi tiết</a>`;
          productshoww +=
            `<div class="a100px floatleft">    
            <div class="imggg">
              <img id="image" src="${d}" class="a100" alt="...">
            </div>
            <div class="card-bod
              <h3 id="name">${a}</h3>
              <h5 id="price">${b}</h5>
              <p id="description" class="black left sizesmall" >${c}</p>
              ${e}
            </div>
            </div>`;
        
        productshowww += productshoww;
      } else if (role == 'user') {
        let productshoww = '';
        
          a = products.name
          b = products.price
          c = products.description
          d = products.image
          e = `<a href="detail.html?id=${products.id}&role=user">Xem Chi tiết</a>`;
          productshoww +=
            `<div class="a100px floatleft">    
            <div class="imggg">
              <img id="image" src="${d}" class="a100" alt="...">
            </div>
            <div class="card-body">
              <h3 id="name">${a}</h3>
              <h5 id="price">${b}</h5>
              <p id="description" class="black left sizesmall" >${c}</p>
              ${e}
            </div>
            </div>`;
        
        productshowww += productshoww;
      }
    }

    
  }
  console.log(productshowww)
  document.getElementById('productshow').innerHTML = productshowww;
}