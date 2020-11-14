const panier = localStorage.getItem('panier')

let testPanier = JSON.parse(panier)

console.log(JSON.parse(panier));

function panierContent() {

    if (testPanier === null) {
        console.log('panier vide');
        let cart = `<h2 class="emptyCart">Votre panier est vide</h2>`

        emptyCart.innerHTML += cart;
    } else {

        for (let camera of testPanier) {
            console.log('panier plein');
            let cart =
            //   HTML de la card
                  `<tr id="panierContent">
                  <td><img src="${camera.imageOfCam}" class="img_produit" alt="${camera.name}"></td>
                      <td>${camera.name}</td>
                      <td>${camera.lense}</td>
                      <td>${camera.price} €</td>
                      <td>${camera.number}</td>
                      <td>${camera.number * parseInt(camera.price)}€</td>
          
                  </tr>`;
                  tbody.innerHTML += cart;
                }
    }



     
      // td class="totalCamera">${camera.number * parseInt(camera.price)}€</td>
}
panierContent()

function ajoutTotalPrice() {
    let total = 0
    if (testPanier === null) {
        console.log('panier vide');
        let emptyCart = `0 €`

        totalCameras.innerHTML += emptyCart;
    } else {
        
        for (let camera of testPanier) {
    
            let totalCam = camera.total
                
            total += totalCam
                
        }
        totalCameras.innerHTML += total + ' €'
    }








    

}
ajoutTotalPrice()


function supprimerPanier() {
    localStorage.clear()
    window.location.reload()
}


// function total() {
//     let total = 0

//     for(let camera of testPanier) {

//         let total = 0

//         let totalCamera = document.getElementsByClassName('totalCamera')
//         console.log(totalCamera);



//     let totalPrice = 

//         `
//         <p>${total * totalCamera}</p>
//         `
//         totalCameras.innerHTML += totalPrice

// }

// }

// total()

// function cartCount() {
// console.log('test5');
//     //Variable initialisation du total à 0
//     let total = 0

//     //boucle qui reccup les keys du Panier
//     for (let keys of Object.keys(localStorage)) {
//         //boucle sur les objets de la clé pour ajouter les quantité au fur et a mesure
//         for (let product of JSON.parse(localStorage[keys])) {
//             total += product.quantity
//         }
//     }
//     addQuantityTotal(total)
// }
// cartCount()
// //Fonction qui permet de mettre le total dans le DOM
// function addQuantityTotal(total) {
//     let cartQuantityTotal = document.getElementById('cart_count')
//     let contenu = document.createTextNode(total)
//     cartQuantityTotal.appendChild(contenu)
// }






// function cartParameter(url, txt, lense, price, quantity) {
//   let tbody = document.getElementById('tbody');
//     console.log('rer');
//   let tr = document.createElement('tr');
//   tbody.appendChild(tr);

//   let td = document.createElement('td');
//   tr.appendChild(td)
  

//   image(td, url);
//   name(td, txt);
//   // lense(td, lense)

//   Price(td, price);
//   // quantity(td, quantity);
// }

// // fonction appelle de l'img
// function image(cart, url) {
//   let td = document.createElement('td');
//   let imgcart = document.createElement('img')
//   imgcart.setAttribute('class', 'img_produit')
//   // indique que la src est l'url de l'Img
//   imgcart.src = url
//   cart.appendChild(td)
//   td.appendChild(imgcart)
// }

// // fonction appelle du nom
// function name(cart, txt) {
//   let td = document.createElement('td');
//   let newcartTitleCreate = document.createTextNode(txt);
//   cart.appendChild(td)
//   td.appendChild(newcartTitleCreate)
// }

// function lense(cart, lense) {
//   let td = document.createElement('td');
//   let lentilleChoisie = document.createTextNode(`${lense}`)
//   cart.appendChild(td)
//   td.appendChild(lentilleChoisie)
// }

// // fonction appelle du prix
// function Price(cart, price) {
//   let td = document.createElement('td');
//   let newcartTextCreate = document.createTextNode(`${price/100} €`);
//   cart.appendChild(td)
//   td.appendChild(newcartTextCreate)
// }
// // fonction appelle du lien
// function quantity(cart, quantity) {
//   let td = document.createElement('td');
//   let newcartTextCreate = document.createTextNode(`${number}`);
//   cart.appendChild(td)
//   td.appendChild(newcartTextCreate)
// }

// // fonction qui prends l'API 
// function cart(testPanier) {
// // Puis qui fait une boucle et ajoute à chaque carte les paramètres
//   for (let cart of testPanier) {
//     console.log('fesz');
//     cartParameter(cart.imageUrl, cart.name, cart.lense, cart.price, cart.number);
//   }
// }














// list(JSON.parse(panier));

// function totalTest() {

//   let total = 0

//   Object.keys(obj).forEach(function (key) {

//     let nombre = parseInt(obj.number)

//     let prix = parseInt(obj.price)

// });

//   total += `${product.number * product.price}`
  
// }
// totalTest()

// function listTest (listTest) {
//   for (let i = 0; i < listTest.length; i++) {
//     totalTest(listTest[i]);
//   }
// }

// listTest(JSON.parse(panier));


















// function test(obj){

//   let tr = document.createElement('tr');
//   // boucle for
  
//   for (let cameras of JSON.parse(panier)) {
    
    
//     let image = cameras.imageOfCam
//     let img = document.createElement('img')
//     img.setAttribute('src', `${image}`)
//     img.setAttribute('class', 'img_produit')

//     let td = document.createElement('td');
//     // let contenuDeLObjet = cameras.imageOfCam;
//     // td.textContent = `${contenuDeLObjet}`
//     tr.appendChild(td);
//     td.appendChild(img)
//     // Object.keys(obj).forEach(function (key) {

//     //   let td = document.createElement('td');
//     //   let contenuDeLObjet = obj[key];
//     //     td.textContent = `${contenuDeLObjet}`
//     //   tr.appendChild(td);
//     // });
//     document.querySelector('#tbody').appendChild(tr);
//     }
// }
//   // document.querySelector('#tbody').appendChild(tr);

// test()



// function list (list) {
//   for (let i = 0; i < list.length; i++) {
//       test(list[i]);
//   }
// }















// function totalPrice (obj) {

  
//   Object.keys(obj).forEach(function (key) {
 
//    let nombre = parseInt(obj.number)
 
//    let prix = parseInt(obj.price)
 
//    console.log(`${key} : ${nombre * prix}`);
//      });
//   }

//   function list (list) {
//    for (let i = 0; i < list.length; i++) {
//      totalPrice(list[i]);
//    }
//  }
 
//  list(JSON.parse(localStorage.getItem('panier')));
