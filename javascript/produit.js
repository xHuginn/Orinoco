// Récupère l'id du produit
let id = localStorage.getItem("id")

// effectue la requete depuis request.js
async function getAPIWithID () {
  try {
    const camera = await getProduit(id)
    cardCamera(camera)
    BtnAjPanier()
    
  } catch (e) {
    console.log(e);
  }
}
getAPIWithID()
// Créer la carte
function cardCamera (camera) {
  let card =
  //   HTML de la card
          `<div class="card">
                  <h5 id="name" class="card-title">${camera.name}</h5>
                      <img id="imageOfCam" src="${camera.imageUrl}" class="img_produit" alt="${camera.name}">
  
                      <div class="card-body">
                      <div class="inputQTY">
                          <label for="selectQTY">Quantité :</label>
                          <input type="number" id="selectQTY" name="selectQTY"
                          min="1" max="30" value="1">
                      </div>
  
                      <select id="select" name="lentille">
                      <option id="selected" class="disabled" selected disabled value="0">Lentilles :</option>
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
      
      // Ajoute les éléments au panier en les envoyant d'abord au localStorage
      function BtnAjPanier () {
        const selectBTN = document.querySelector('#select')
                let btnAjoutPanier = document.getElementById('ajoutPanier')
                btnAjoutPanier.addEventListener('click', AjoutPanier => {

                    let imageOfCam = document.getElementById('imageOfCam').src
                      localStorage.setItem('imageOfCam', imageOfCam)
                        console.log(imageOfCam);

                    let name = document.getElementById('name').textContent
                      localStorage.setItem('name', name)
                        console.log(name)

                    let price = document.getElementById('price').textContent
                        localStorage.setItem('price', price)
                        console.log(price);

                    let number = Number(document.querySelector('input#selectQTY').value)
                      localStorage.setItem('number', number)
                        console.log(number);

                    let lense = document.getElementById('select').value
                      localStorage.setItem('lense', lense)
                        console.log(lense);

                    let total = `${number * parseInt(price)}€`
                      localStorage.setItem('total', total)
                        console.log(total);

                    localStorage.setItem(id, id)
                      console.log(id);

                  ajArticleAuPanier()

                })
              }
// Charge le panier en fonction de s'il est plein ou vide puis le retourne
function charger () {
  let panier = JSON.parse(localStorage.getItem('panier')) || [];
  return panier
}
// Sauvegarde le panier dans le localStorage
function sauvegarder (panier) {
  localStorage.setItem('panier', JSON.stringify(panier));
}
      
// ajoute un article au panier
function ajArticleAuPanier () {
  
  let panier = charger()
  // Récupère les infos de BtnAjPanier()
  let image = localStorage.getItem('imageOfCam')
  let nom = localStorage.getItem('name')
  let prix = parseInt(document.getElementById('price').textContent)
  let nombre = Number(localStorage.getItem('number'))
  let lentille = localStorage.getItem('lense')
  let totalPrix = parseInt(localStorage.getItem('total'))
    console.log(totalPrix);

// Met les infos dans un objet
  let article = {
    imageOfCam : image,
    name : nom,
    lense : lentille,
    price : prix,
    number : nombre,
    total: totalPrix,
    id: id
  };
  // indique si l'article est présent et l'initialise à false
  let ArtciclePresent = false
// Si aucune lentille n'est choisie, lance une alert
  let selectBTNValue = document.querySelector('#select').value

    if(selectBTNValue == 0) {

      alert('Choisissez une lentille !')

    } else {
      // Compare les infos grâce à .entries()
      for (let [indexCamera, camera] of panier.entries()) {

        // Si un article est === à la caméra et à la lentille alors on ajoute le nombre au localStorage puis on indique que l'article est présent
        if (article.name === camera.name && article.lense === camera.lense) {
          panier[indexCamera].number += article.number
          panier[indexCamera].total += parseInt(article.price) * article.number
            console.log('+1')
          ArtciclePresent = true
        }
      } 
      // Si l'article n'est pas présent alors on l'ajoute au panier
        if (ArtciclePresent == false) {
            panier.push(article)
              console.log('+1 article')
        }

        sauvegarder(panier)
      console.log(totalPrix);

  }
};