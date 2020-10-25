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
                <h5 class="card-title">${camera.name}</h5>
                    <img src="${camera.imageUrl}" class="card-img-top" alt="${camera.name}">

                    <div class="card-body">
                    <div class="roo">
                        <label for="selectQTY">Quantité :</label>
                        <input type="number" id="selectQTY" name="selectQTY"
                        min="1" max="30">
                    </div>

                    <select id="select" name="lentille">
                        <option id="selected" selected disabled >Lentilles :</option>
                    </select>
                    </div>

                        <div class="details">
                            <p class="card-text">${camera.description}</p>
                            <p class="card-text">${camera.price / 100}€</p>
                            <button type="button" id="ajoutPanier" class="btn btn-outline-success">Ajouter au panier</button>
                        </div>
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

        let selectQTY = document.getElementById('selectQTY')

        
        const selectBTN = document.querySelector('#select')
        let btnAjoutPanier = document.getElementById('ajoutPanier')
        btnAjoutPanier.addEventListener('click', AjoutPanier => {
            // let selected = document.getElementById('selected')
            // if(selected == "Lentilles :") {
            //     alert('Choisissez une lentille !')
            // } else {
            //     console.log('ok');
            // }

            sessionStorage.setItem('id', id)
            let selectBTNValue = document.querySelector('#select').value
            let qtyElement = document.querySelector('input#selectQTY').value
            sessionStorage.setItem('selected', selectBTNValue)
            sessionStorage.setItem('qty', qtyElement)


            document.location.href=`./panier.html`
        })
})
