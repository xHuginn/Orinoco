// Récupère du sessionStorage l'ID
let id = sessionStorage.getItem("id")
let lenses = sessionStorage.getItem("selected")
let qtyCam = sessionStorage.getItem("qty")
console.log(lenses)
// Ajoute l'ID à l'API afin de le récupérer
fetch(`http://localhost:3000/api/cameras/${id}`)
// Si la response est ok alors retourne le JSON sinon error
.then ( response => {
  if (response.ok) {
            return response.json()
    } else {
      console.error(`Retour du serveur : ${response.status}`)
    }
})
// .then(panier => {
  
// })
// Si c'est ok alors camera = (let card)
.then( camera => {

  let panier = (function() {
    let TableauPanier = []

    function Camera(imageUrl, name, qtyCam, lenses, description, price) {
      this.imageUrl = imageUrl
      this.name = name
      this.qtyCam = qtyCam
      this.lenses = lenses
      this.description = description
      this.price = price
    }

    function sauvegarderPanier() {
      sessionStorage.setItem('panier', JSON.stringify(TableauPanier))
    }

    function chargerPanier() {
      
    }

  })
  
    

  let allItems = document.createElement('div')
  allItems.setAttribute('id', 'newItem')
  let card =
//   HTML de la card
        `<div id="article">
            <div class="card">
              <div class="imgOnly">
                <img src="${camera.imageUrl}" class="card-img-top" alt="${camera.name}">
              </div>
              <div class="details"> 
              <h5 class="card-title">${camera.name}</h5> 
                    <div class="card-body">
                    <div class="cart-quantity cart-column">
                      <p>Quantité :</p>
                      <input class="cart-quantity-input" type="number" value="${qtyCam}">
                    </div>
                    <span class="card-text">Lentilles : ${lenses}</span>
                    </div>

                    

                        <div class="card-body">
                          <span class="stock">En stock</span>
                            <p class="card-text">${camera.description}</p>
                            <p class="card-text">${camera.price / 100}€</p>
                            <button type="button" id="deleteCam" class="btn btn-outline-danger">Supprimer</button>
                        </div>
            </div>
          </div>
         </div>`;
        content.innerHTML += card;

  

        
        
        let selectQTY = document.getElementById('selectQTY')

        
        const selectBTN = document.querySelector('#select')
       
        function DelElementOnCart () {
          let deleteCam = document.getElementById('deleteCam')
          deleteCam.addEventListener('click', DeleteCamOnCart => {
          let article = document.getElementById('article')
          let content = document.getElementById('content')      
          // let newDiv = document.getElementById('newDiv')
          content.removeChild(article)   
                })
          }
          DelElementOnCart()



          // function priceOfCommand () {
          //   let totalTTC = document.getElementById('totalTTC')
            
          //   let price = document.createTextNode(`${qtyCam * camera.price / 100} €`)
          //   console.log(price);  

          //   let newParagraph = document.createElement('p')

          //   newParagraph.appendChild(price)
          //   totalTTC.appendChild(newParagraph)

          // }
          // priceOfCommand()

          // function uptdatePrice () {
          //   let qtyOfCam = document.getElementById('qtyOfCam')
          //   let totalTTC = document.getElementById('totalTTC')
            
          //   qtyOfCam.addEventListener('change', uptdate => {
          //   let qtyOfCam = document.getElementById('qtyOfCam').value
            
          //   console.log(qtyOfCam);
            
            
          //   let NewPrice = document.createTextNode(`${qtyOfCam * camera.price / 100} €`)
          //   let newParagraph = document.getElementById('p').innerHTML = NewPrice
          //   // let newParagraph = document.createElement('p').innerHTML = NewPrice
          //   // newParagraph.setAttribute('id', 'p')
          //   // let paragraph = document.getElementById('p')
          //   // paragraph.innerHTML = NewPrice
          //   // let newContent = document.getElementById('p')
          //   // newContent.innerHTML = NewPrice
          //   console.log(NewPrice);  
          //   totalTTC.appendChild(newParagraph)
          //   // newParagraph.appendChild(NewPrice)
            
          //   })
          // }
          // uptdatePrice()









        })
       


//   let cam = document.getElementById('cam')
//   let lense = document.getElementById('lense')
//   let price = document.getElementById('price')
//   let qty = document.getElementById('qty')
//   let cartItems = document.getElementById('cart-items')
//   let allItems = document.createElement('div')
//   allItems.setAttribute('id', 'newItem')
//   let yourCam =
// //   HTML de la card
//         `<div class="cart-row">
//             <div class="cart-item cart-column">
//                     <img src="${camera.imageUrl}" class="cart-item-image" alt="${camera.name}">
//                     <span class="cart-item-title">${camera.name}</span>
//             </div>
//             <span class="card-text">${lenses}</span>
//             <span class="card-text">${camera.price / 100}€</span>

//             <div class="cart-quantity cart-column">
//               <input class="cart-quantity-input" type="number" value="${qtyCam}">
//               <button id="deleteCam" class="btn btn-danger" type="button">Supprimer</button>
//             </div>
//           </div>`;
//           allItems.innerHTML += yourCam;
//         cartItems.appendChild(allItems)
// })

// function Del () {
//   let deleteCam = document.getElementById('deleteCam')
// deleteCam.addEventListener('click', DeleteCamOnCart => {
//   let body = document.querySelector('body')
//   body.style.backgroundColor = "red"
//   // let cartItems = document.getElementById('cart-items')
//   // let allItems = document.getElementById('allItems')      
//   // let newDiv = document.getElementById('newDiv')
//   // cartItems.removeChild(allItems)   
//         })
// })
