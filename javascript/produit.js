
async function getAPIWithID () {
  try {
    let id = localStorage.getItem("id")
    const camera = await getProduit(id)
    console.log(camera);
    cardCamera(camera)
    BtnAjPanier()
    
    // sauvegarderPanier()
    // chargerPanier()
    
  } catch (e) {
    console.log(e);
  }
}
getAPIWithID()
const id = "panier"
// let panier = chargerPanier()
let panier = []
function cardCamera (camera) {
  let card =
  //   HTML de la card
          `<div class="card">
                  <h5 id="name" class="card-title">${camera.name}</h5>
                      <img id="imageUrl" src="${camera.imageUrl}" class="img_produit" alt="${camera.name}">
  
                      <div class="card-body">
                      <div class="inputQTY">
                          <label for="selectQTY">Quantité :</label>
                          <input type="number" id="selectQTY" name="selectQTY"
                          min="1" max="30" value="1">
                      </div>
  
                      <select id="select" name="lentille">
                      <option id="selected" class="disabled" selected disabled value="">Lentilles :</option>
                      </select>
                      </div>
  
                      <div class="infos">
                          <div class="details">
                              <p id="description" class="card-text">${camera.description}</p>
                              <p id="price" class="card-text">${camera.price / 100}€</p>
                          </div>
                              <button type="button" id="ajoutPanier" class="btn btn-outline-success">Ajouter au panier</button>
                      </div>    
              </div>`;
          //  
          //  <option id="newSelected"></option>
          content.innerHTML += card;

          let select = document.getElementById('select')
          for(let i in camera.lenses) {
          let p = document.createTextNode(`${camera.lenses[i]}`)
          let option = document.createElement('option')
          option.value = `${camera.lenses[i]}`
          select.appendChild(option)
          option.appendChild(p)
        }     
      }

      function BtnAjPanier () {
        const selectBTN = document.querySelector('#select')
                let btnAjoutPanier = document.getElementById('ajoutPanier')
                btnAjoutPanier.addEventListener('click', AjoutPanier => {
                    // ajArticleAuPanier()
                    let imageUrl = document.getElementById('imageUrl').src
                    let nom = document.getElementById('name').textContent
                    let prix = document.getElementById('price').textContent
                    let nombreDeCameras = Number(document.querySelector('input#selectQTY').value)
                    let lentilleChoisie = document.getElementById('select').value
                    addItem(name, image, price, nombreDeCameras, lentilleChoisie)
                })
      }
      
// id
// function chargerPanier() {
//   const panier = localStorage.getItem(id) 
//   if (panier === null) {
//       return []
//   } 
//   return panier
// }

 
//   function ajArticleAuPanier() {

//     let id = localStorage.getItem("id")
//     let imageUrl = document.getElementById('imageUrl').src
//     let name = document.getElementById('name').textContent
//     let price = document.getElementById('price').textContent
//     let nombreDeCameras = Number(document.querySelector('input#selectQTY').value)
//     let lentilleChoisie = document.getElementById('select').value


//     let article = {
//       id: id,
//       imageUrl : imageUrl,
//       name : name,
//       price : price,
//       nombreDeCameras : nombreDeCameras,
//       lentilleChoisie : lentilleChoisie
//     }

//     let ArtciclePresent = false

//        for (let [indexCamera, camera] of panier.entries()) {
//       if (article.id === camera.id && article.lentilleChoisie === camera.lentilleChoisie) {
//         panier[indexCamera].nombreDeCameras += article.nombreDeCameras
//           console.log('+1')
//           ArtciclePresent = true
//       }
//     } 
//       if (ArtciclePresent == false) {
//           panier.push(article)
//           console.log('+1 article')
//       }
//     sauvegarderPanier(panier)
// }


// function sauvegarderPanier(panier) {
//   localStorage.setItem(id, JSON.stringify(panier))
//   }


//   function totalCamera () {

//   }

//   totalCamera()












// let image = document.getElementById('imageUrl').src
// console.log(image);
// let nom = document.getElementById('name').textContent
// let prix = document.getElementById('price').textContent
// let qty = Number(document.querySelector('input#selectQTY').value)
// let lense = document.getElementById('select').value

// let addItem = function (name, image, price, nombreDeCameras, lentilleChoisie) {
//   let oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
  
  
    
 

//     let newItem = {
//       image: image,
//       nom : name,
//       prix : prix,
//       nombreDeCameras : qty,
//       lentilleChoisie : lense
//     }
//   oldItems.push(newItem);
  
//   localStorage.setItem('itemsArray', JSON.stringify(oldItems));
// };

// // console.log(JSON.parse(localStorage.getItem('itemsArray')));

// addItem('name1', 'image1', 'price1', 'nombre1', 'lense1');

// // console.log(JSON.parse(localStorage.getItem('itemsArray')));

// // addItem('name2', 'image2', 'price2');

// // console.log(JSON.parse(localStorage.getItem('itemsArray')));
