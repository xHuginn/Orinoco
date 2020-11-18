const RecupPanier = localStorage.getItem('panier')

let panier = JSON.parse(RecupPanier)

console.log(JSON.parse(RecupPanier));

function panierContent() {

    if (panier === null) {
        console.log('panier vide');
        let cart = `<h2 class="emptyCart">Votre panier est vide</h2>`

        emptyCart.innerHTML += cart;
    } else {

        for (let camera of panier) {
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
    if (panier === null) {
        console.log('panier vide');
        let emptyCart = `0 €`

        totalCameras.innerHTML += emptyCart;
    } else {
        
        for (let camera of panier) {
    
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




function sendData () {

    let firstName = document.getElementById('prenom').value
    let lastName = document.getElementById('nom').value
    let mail = document.getElementById('mail').value
    let address = document.getElementById('adresse').value
    let codePostal = document.getElementById('codePostal').value
    let city = document.getElementById('ville').value


    let data = {
        firstName : firstName,
        lastName : lastName,
        mail : mail,
        address : address,
        codePostal : codePostal,
        city : city
    }

    console.log(data);

    // document.location.href=`../confirmation.html`

    
    console.log(panier);

    let cart = []
console.log(cart);
    for(let article of panier){
        cart.push(article.id)
    }
    
console.log(cart);

    let donnees = {
        data,
        cart
    }

console.log(donnees);

const options = {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(donnees)
}
     
    
async function getPOST(data) {
    try {
        // {} OU OPTIONS
        console.log(donnees)
        let response = await fetch("http://localhost:3000/api/cameras/order", {
            method: "POST",
            headers: {
            //   'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
      
        let res = await response.json()

        console.log(res);

    } catch (e) {
      console.log(e);
    }
  }
  getPOST(donnees)

// }


// async function getPOST() {
//     try {
//         // {} OU OPTIONS
//         console.log(donnees)
//         let response = await fetch("http://localhost:3000/api/cameras/order", options)
      
//         let res = await response.json()

//         console.log(res);
        // document.location.href=`./confirmation.html`

//     } catch (e) {
//       console.log(e);
//     }
//   }
//   getPOST()
}