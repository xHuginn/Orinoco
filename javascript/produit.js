
async function getAPIWithID () {
  try {
    let id = localStorage.getItem("id")
    const camera = await getProduit(id)
    cardCamera(camera)
    BtnAjPanier()
    
  } catch (e) {
    console.log(e);
  }
}
getAPIWithID()

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

                  ajArticleAuPanier()

                })
              }

      
function ajArticleAuPanier  () {
  let panier = JSON.parse(localStorage.getItem('panier')) || [];
  
  // let image = document.getElementById('imageUrl').src 
  let nom = localStorage.getItem('name')
  let prix = document.getElementById('price').textContent
  let nombre = Number(localStorage.getItem('number'))
  let lentille = localStorage.getItem('lense')
  let totalPrix = parseInt(localStorage.getItem('total'))
    console.log(totalPrix);


  let article = {
    // imageOfCam : image,
    name : nom,
    lense : lentille,
    price : prix,
    number : nombre,
    total: totalPrix
  };
    
  let ArtciclePresent = false

  let selectBTNValue = document.querySelector('#select').value

    if(selectBTNValue == 0) {

      alert('Choisissez une lentille !')

    } else {
      for (let [indexCamera, camera] of panier.entries()) {

        if (article.name === camera.name && article.lense === camera.lense) {
          panier[indexCamera].number += article.number
          panier[indexCamera].total += parseInt(article.price) * article.number
            console.log('+1')
          ArtciclePresent = true
        }
      } 
        if (ArtciclePresent == false) {
            panier.push(article)
              console.log('+1 article')
        }

    localStorage.setItem('panier', JSON.stringify(panier));
      console.log(totalPrix);

  }
};