
async function getAPIWithID () {
  try {
    let id = localStorage.getItem("id")
    const camera = await getProduit(id)
    // console.log(camera);
    cardCamera(camera)
    BtnAjPanier()
    // ajArticleAuPanier()
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
      // let name = document.getElementById('name').textContent
      // console.log(name);
      // let number = Number(document.querySelector('input#selectQTY').value)
      // let lense = document.getElementById('select').value

      function BtnAjPanier () {
        const selectBTN = document.querySelector('#select')
                let btnAjoutPanier = document.getElementById('ajoutPanier')
                btnAjoutPanier.addEventListener('click', AjoutPanier => {
                    // ajArticleAuPanier()
                    // let imageUrl = document.getElementById('imageUrl').src
                    
                    // let prix = document.getElementById('price').textContent
                    
                    // addItem(name, number, lense)


                    let name = document.getElementById('name').textContent
                      localStorage.setItem('name', name)
                        console.log(name);
                    let number = Number(document.querySelector('input#selectQTY').value)
                      localStorage.setItem('number', number)
                        console.log(number);
                    let lense = document.getElementById('select').value
                      localStorage.setItem('lense', lense)
                        console.log(lense);
                        ajArticleAuPanier()
                })
      }

      
let ajArticleAuPanier = function () {
  let panier = JSON.parse(localStorage.getItem('panier')) || [];
  
  let nom = localStorage.getItem('name')
  let nombre = Number(localStorage.getItem('number'))
  let lentille = localStorage.getItem('lense')
//  let id = localStorage.getItem("id") 
//  let imageUrl = document.getElementById('imageUrl').src 
//  let nom = document.getElementById('name').textContent 
//  let price = document.getElementById('price').textContent 
//  let nombre = Number(document.querySelector('input#selectQTY').value)
//  let lentille = document.getElementById('select').value


  let article = {
    name : nom,
    number : nombre,
    lense : lentille
  };
  
let ArtciclePresent = false

       for (let [indexCamera, camera] of panier.entries()) {
      if (article.name === camera.name && article.lense === camera.lense) {
        panier[indexCamera].number += article.number
          console.log('+1')
          ArtciclePresent = true
      }
    } 
      if (ArtciclePresent == false) {
          panier.push(article)
          console.log('+1 article')
      }
  localStorage.setItem('panier', JSON.stringify(panier));
};


function total () {
  let total = 0

}
total()

// console.log(JSON.parse(localStorage.getItem('itemsArray')));
// addItem();
// addItem('name1', 'image1', 'price1');

// console.log(JSON.parse(localStorage.getItem('itemsArray')));

// addItem('name2', 'image2', 'price2');

// console.log(JSON.parse(localStorage.getItem('itemsArray')));

      
// id
// function chargerPanier() {
//   const panier = localStorage.getItem(id) 
//   if (panier === null) {
//       return []
//   } 
//   return panier
// }

 
//   function ajArticleAuPanier(nom, image, prix, number, lense) {
//     let oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


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

    
//     localStorage.setItem('itemsArray', JSON.stringify(oldItems));
//     sauvegarderPanier(panier)
//     let test = localStorage.getItem('itemsArray')
//     console.log(JSON.parse(test));
// }
// ajArticleAuPanier('name1', 'image1', 'price1', 'nombre1', 'lense1');

// function sauvegarderPanier(panier) {
//   localStorage.setItem(id, JSON.stringify(panier))
//   }


//   function totalCamera () {

//   }

//   totalCamera()








// let ArtciclePresent = false

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


// let image = document.getElementById('imageUrl').src
// console.log(image);
// let nom = document.getElementById('name').textContent
// let prix = document.getElementById('price').textContent
// let qty = Number(document.querySelector('input#selectQTY').value)
// let lense = document.getElementById('select').value

// let addItem = function () {
//   
  
  
    
 

//     let newItem = {
//       image: image,
//       nom : name,
//       prix : prix,
//       nombreDeCameras : qty,
//       lentilleChoisie : lense
//     }
//   oldItems.push(newItem);
  
//   
// };

// // console.log(JSON.parse(localStorage.getItem('itemsArray')));

// addItem('name1', 'image1', 'price1', 'nombre1', 'lense1');

// // console.log(JSON.parse(localStorage.getItem('itemsArray')));

// // addItem('name2', 'image2', 'price2');

// // console.log(JSON.parse(localStorage.getItem('itemsArray')));
