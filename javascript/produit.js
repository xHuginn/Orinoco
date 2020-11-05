

async function getAPIWithID () {
  try {
    let id = sessionStorage.getItem("id")
    const camera = await getProduit(id)
    console.log(camera);
    cardCamera(camera)
    BtnAjPanier()
    sauvegarderPanier()
    chargerPanier()
    
  } catch (e) {
    console.log(e);
  }
}
getAPIWithID()
const id = "panier"
let panier = chargerPanier()

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

// id
function chargerPanier() {
  const panier = localStorage.getItem(id)
  if (panier === null) {
      return []
  } 
  return JSON.parse(panier)
}

  function ajArticleAuPanier () {
    let id = sessionStorage.getItem("id")
    console.log(id);
    let imageUrl = document.getElementById('imageUrl').src
    console.log(imageUrl);
    let name = document.getElementById('name').textContent
    console.log(name);
    let price = document.getElementById('price').textContent
    console.log(price);
    let nombreDeCameras = Number(document.querySelector('input#selectQTY').value)
    console.log(nombreDeCameras);
    let lentilleChoisie = document.getElementById('select').value
    console.log(lentilleChoisie);


    
    let article = {
      id: id,
      imageUrl : imageUrl,
      name : name,
      price : price,
      nombreDeCameras : nombreDeCameras,
      lentilleChoisie : lentilleChoisie
    }
    // let ArtciclePresent = false

    // for(let [indexCamera, camera] of panier.entries()) {
      
    //   if(article.id === camera.id && article.lentilleChoisie === camera.lentilleChoisie) {
    //     console.log(article.id);
    //     console.log('+1');
    //     panier[indexCamera].nombreDeCameras += article.nombreDeCameras
    //     ArtciclePresent = true
    //   } 
      
    //   if(ArtciclePresent == false) {
    //     console.log('+1 cam');
    //     panier.push(article)
    //   }
    //   sauvegarderPanier(panier)
    // }
     
    // console.log(article);

    if(article.name === name && article.nombreDeCameras === nombreDeCameras) {
      console.log('+1');
      article.nombreDeCameras += nombreDeCameras
      panier.pop()
      panier.push(article)
      sauvegarderPanier(panier)
    } else {
      console.log('--');
      panier.push(article)
      sauvegarderPanier(panier)
    }



  // panier.push(article)


  }

  // id, panier
  function sauvegarderPanier(panier) {
    sessionStorage.setItem(id, JSON.stringify(panier))
  }


function BtnAjPanier () {
  const selectBTN = document.querySelector('#select')
          let btnAjoutPanier = document.getElementById('ajoutPanier')
          btnAjoutPanier.addEventListener('click', AjoutPanier => {
              ajArticleAuPanier()
          })
}