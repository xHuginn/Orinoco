// Récupère l'orderID de la requete POST
const GetorderId = localStorage.getItem("orderID")
// Parse la requete
let orderId = JSON.parse(GetorderId)

console.log(orderId);
// Récupère le panier
const RecupPanier = localStorage.getItem('panier')

let panier = JSON.parse(RecupPanier)

console.log(JSON.parse(RecupPanier));

// Affiche les infos de l'orderID + le panier et clean le localStorage lorsque l'utilisateur revient à la page d'acceuil
function confirmationContent() {

    let confirmationCommande = 
      `<h3>Merci pour votre commande !</h3>

      <p>Votre commande numéro <span>${orderId.orderId}2</span> arrivera d'ici deux semaines !</p>

      <div class="recapCommande">
        <h5>Récapitulatif :</h5>

        <p>${orderId.contact.firstName} ${orderId.contact.lastName}</p> 
        <p>Adresse email : ${orderId.contact.email}</p>
        <p>adresse : ${orderId.contact.address} ${orderId.contact.city} </p>
        
        <table>
        <thead>
          <tr>
            <th colspan="6">Vos articles :</th>
          </tr>
        </thead>
    
        <tbody id="tbody">
          <tr class="info">
            <td id="picAndName">Nom :</td>
            <td id="lense">Lentille choisie :</td>
            <td id="quantity">Quantité :</td>
          </tr>
        </tbody>
        </table>
      
        <p id="totalPrice">Total : </p>


        <h5><a href="index.html" onclick="supprLocalStorage()">Retourner à l'acceuil</a></h5>
        </div>`
  
      confirmation.innerHTML += confirmationCommande


    
    for (let camera of panier) {
        console.log('panier plein');
      let cart =
      //   HTML de la card
            `<tr id="panierContent">
                <td>${camera.name}</td>
                <td>${camera.lense}</td>
                <td>${camera.number}</td>
    
            </tr>`;
            tbody.innerHTML += cart;
          }

        ajoutTotalPrice()
        
    }
    confirmationContent()

    // Indique le total du panier
    function ajoutTotalPrice() {

      let total = 0
          
          for (let camera of panier) {
      
              let totalCam = camera.total
                  
              total += totalCam
                  
          }
          totalPrice.innerHTML += total + ' €'
  
  }

  // Clear le panier dans le localStorage
  function supprLocalStorage() {
    localStorage.clear()
  }