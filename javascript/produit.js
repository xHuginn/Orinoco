// Récupère du sessionStorage l'ID
let id = sessionStorage.getItem("id")
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
// Si c'est ok alors camera = (let card)
.then( camera => {
  let card =
//   HTML de la card
        `<div class="col mb-4">
            <div class="card">
                <h5 id="name" class="card-title">${camera.name}</h5>
                    <img id="imageUrl" src="${camera.imageUrl}" class="img_produit" alt="${camera.name}">

                    <div class="card-body">
                    <div class="inputQTY">
                        <label for="selectQTY">Quantité :</label>
                        <input type="number" id="selectQTY" name="selectQTY"
                        min="1" max="30" value="1">
                    </div>

                    <select id="select" name="lentille">
                        
                        
                    </select>
                    </div>

                        <div class="details">
                            <p id="description" class="card-text">${camera.description}</p>
                            <p id="price" class="card-text">${camera.price / 100}€</p>
                            <button type="button" id="ajoutPanier" class="btn btn-outline-success">Ajouter au panier</button>
                        </div>
            </div>
         </div>`;
        //  <option id="selected" class="disabled" selected disabled value="">Lentilles :</option>
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



        function sauvegarderPanier() {
            sessionStorage.setItem('panier', JSON.stringify(panier))
        }

        let panier = []
        
        let nombreDeCameras = Number(document.querySelector('input#selectQTY').value)
        let lentilleChoisie = document.getElementById('select').value
        
        let imageUrl = document.getElementById('imageUrl').src
        let name = document.getElementById('name').textContent
        let price = document.getElementById('price').textContent

        // function lentilleChoisieFunction () {
        //   lentilleChoisie.addEventListener('change', (event) => {
        //     let result = event.target.value
        //     console.log(result);
        //   });
        // }
        // let lense = lentilleChoisieFunction()

        let article = {
          imageUrl : imageUrl,
          name : name,
          nombreDeCameras : nombreDeCameras,
          lentilleChoisie : lentilleChoisie,
          price : price
        }

          function ajArticleAuPanier () {
            panier.push(article)
              sauvegarderPanier()
              console.log(JSON.stringify(article))
          }

        const selectBTN = document.querySelector('#select')
        let btnAjoutPanier = document.getElementById('ajoutPanier')
        btnAjoutPanier.addEventListener('click', AjoutPanier => {
          let lentilleChoisie = document.getElementById('select').value
          let nombreDeCameras = document.querySelector('input#selectQTY').value
          // console.log(lense);
          console.log(nombreDeCameras);
          console.log(lentilleChoisie);
          console.log(imageUrl);
          console.log(name);
          console.log(price);
          alert(`Lentille : ${lentilleChoisie} nombre de caméras : ${nombreDeCameras}`)
                sessionStorage.setItem('name', name)
                sessionStorage.setItem('image', imageUrl)
                sessionStorage.setItem('price', price)
                sessionStorage.setItem('lentilleChoisie', lentilleChoisie)
                sessionStorage.setItem('nombreDeCameras', nombreDeCameras)
                ajArticleAuPanier()
        })
})












































































































// let nombreDeCameras = Number(document.querySelector('input#selectQTY').value)
// let selectBTNValue = document.getElementById('select').value
// let imageUrl = document.getElementById('imageUrl').src
// let name = document.getElementById('name').textContent
// let price = document.getElementById('price').textContent






//   // let selectValue = document.getElementById('select')
//   //         selectValue.addEventListener('change', function ChangeLense() {
//   //           let value = selectValue.value
//   //           console.log(value);
//   //           // sessionStorage.setItem('selected', value)
//   //         // var index = selectValue.selectedIndex;
//   //       })      
         

//         
//         let name = sessionStorage.getItem("name")
//         let image = sessionStorage.getItem("imageUrl")
//         let price = sessionStorage.getItem("price")
//         let lentilleChoisie = sessionStorage.getItem("lentilleChoisie")
//         let nombreDeCameras = sessionStorage.getItem("nombreDeCameras")

        
        
//           // Chargement du panier
//           function chargerPanier() {
//             TableauPanier = JSON.parse(sessionStorage.getItem('panier'))
//           }
//           if(sessionStorage.getItem('panier') != null) {
//             chargerPanier()
//           }





        

//         const selectBTN = document.querySelector('#select')
//         let btnAjoutPanier = document.getElementById('ajoutPanier')
//         btnAjoutPanier.addEventListener('click', AjoutPanier => {

//           // let qtyCam = document.querySelector('input#selectQTY').value
//           // let qtyCam = Number(document.querySelector('input#selectQTY').value)
//           let selectBTNValue = document.getElementById('select').value
//             if(selectBTNValue == 0) {
//                 alert('Choisissez une lentille !')
//             } else {
//                 sessionStorage.setItem('name', name)
//                 sessionStorage.setItem('image', imageUrl)
//                 sessionStorage.setItem('price', price)
//                 sessionStorage.setItem('lentilleChoisie', lentilleChoisie)
//                 sessionStorage.setItem('nombreDeCameras', nombreDeCameras)
//                 ajArticleAuPanier()
//                 console.log('ok');
//                 console.log(selectBTNValue);
//                 // document.location.href=`./panier.html`
                
                
                
//                 // sessionStorage.clear()
//             }
//         })
// })