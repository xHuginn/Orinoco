// Récupère le panier depuis le localStorage
const RecupPanier = localStorage.getItem('panier')

let panier = JSON.parse(RecupPanier)

console.log(JSON.parse(RecupPanier));

// Change en fonction du panier (s'il est null ou s'il y a des articles)
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
}
panierContent()

// Indique le total du panier
function ajoutTotalPrice() {
    let total = 0
    if (panier === null) {
        console.log('panier vide');
        let emptyCart = `0 €`

        totalCamerasPrix.innerHTML += emptyCart;
    } else {
        
        for (let camera of panier) {
    
            let totalCam = camera.total
                
            total += totalCam
                
        }
        totalCamerasPrix.innerHTML += total + ' €'
    }

}
ajoutTotalPrice()

// Supprime le localStorage ( le panier) et recharge la page
function supprimerPanier() {
    localStorage.clear()
    window.location.reload()
}

// Indique que si le formulaire est bien remplis, alors la fonction sendData() se lance
isTrue = false
function testValidityForm() {

    (function() {     
          document.getElementById("form").addEventListener("submit", function(event) {
            event.target.checkValidity();
            event.preventDefault();
            event.stopPropagation();
            console.log('accept');
            isTrue = true
            sendData()
          }, false);
      }());

      
}

// Envoi les données du formulaire dans la requete POST et envoi l'utilisateur sur la page de confirmation
function sendData () {

    // Récupère les données du form
        let firstName = document.getElementById('prenom').value
        let lastName = document.getElementById('nom').value
        let email = document.getElementById('email').value
        let address = document.getElementById('adresse').value
        let city = document.getElementById('ville').value
    
    // Met les infos dans un objet
        let contact = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            address : address,
            city : city
        }
    
        console.log(contact);
    
        // document.location.href=`../confirmation.html`
    
        
        console.log(panier);
    
        // Récupère les infos (id) des articles du panier et les met dans un objet
        let products = []
    console.log(products);
        for(let article of panier){
            products.push(article.id)
        }
        
    console.log(products);
    
    // Objet qui regroupe toutes les données
        let donnees = {
            contact,
            products
        }
    
    console.log(donnees);
  //  Récupère la requete POST depuis request.js  
    async function getOrderID () {
        try {
          const orderId = await orderID(donnees)
          document.location.href=`./confirmation.html`
          
        } catch (e) {
          console.log(e);
        }
      }
      getOrderID()
    
}




  // Fonction qui ajoute le nombre total d'articles dans le panier (sous-total)
  function TotalArticle() {
    // let totalCameras = document.getElementById('TotalArticle')
  
    let total = 0
  
    // Récupère le panier depuis le localStorage
    const RecupPanier = localStorage.getItem('panier')
  
    let panier = JSON.parse(RecupPanier)
  
      if (!panier) {
          console.log('panier vide');  
      } else {
          
          for (let camera of panier) {
      
              let totalCam = camera.number
                  
              total += totalCam
                  
          }
          totalCameras.innerHTML += "( " +total + " article(s)" + " ) :"
      }
  
  }
  TotalArticle()
