// Récupère le panier depuis le localStorage
const recupPanier = localStorage.getItem('panier')
let panier = JSON.parse(recupPanier)
// Change en fonction du panier (s'il est null ou s'il y a des articles)
function panierContent() {
    if (panier === null) {
        let cart = `<h2 class="emptyCart">Votre panier est vide</h2>`
        emptyCart.innerHTML += cart;   
    } else {
        for (let camera of panier) {
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
        let emptyCart = `0 €`
        totalCamerasPrix.innerHTML += ' : ' + emptyCart;
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

let prenomNomValidation = /^[^ ][a-zA-Z '\-éèêëçäà]*[^ ]$/
let addressVilleValidation = /^.{1,80}$/
let emailValidation = /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

function testValidityForm(event) {
    event.preventDefault();    
    console.log('coucou');
    console.log(prenomNomValidation)
   
    if (prenomNomValidation.test(document.getElementById('prenom').value)
        && prenomNomValidation.test(document.getElementById('nom').value)
        && emailValidation.test(document.getElementById('email').value) 
        && addressVilleValidation.test(document.getElementById('ville').value) 
        && addressVilleValidation.test(document.getElementById('adresse').value)) {
 
        sendData()
    
} else {
    alert('Veuillez remplir correctement les champs du formulaire')
    return
}}


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
    // Récupère les infos (id) des articles du panier et les met dans un objet
    let products = []
    for(let article of panier){
        products.push(article.id)
    }

    // Objet qui regroupe toutes les données
    let donnees = {
        contact,
        products
    }

    //  Récupère la requete POST depuis request.js  
    async function getOrderID () {
        try {
            const orderId = await orderID(donnees)
            console.log('reussi');
            document.location.href=`./confirmation.html`
        } catch (e) {
            console.log(e);
        }
    }
    getOrderID()
}


  // Fonction qui ajoute le nombre total d'articles dans le panier (sous-total)
  function totalArticle() {
    let total = 0
    // Récupère le panier depuis le localStorage
    const recupPanier = localStorage.getItem('panier')
    let panier = JSON.parse(recupPanier)
      if (!panier) {
      } else {      
          for (let camera of panier) {
              let totalCam = camera.number        
              total += totalCam         
          }
          totalCameras.innerHTML += "( " +total + " article(s)" + " ) :"
      }
  
  }
  totalArticle()
