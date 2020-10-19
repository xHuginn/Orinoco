
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// // PRODUIT
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////


// fetch("http://localhost:3000/api/cameras")
// .then(response => response.json())
// .then(cameras => pageCamera(cameras));


// const cameraParameter = function (url, name, price, lenses, description) {
//     let main = document.getElementById('main-content')
// // 
//     let container = document.getElementById('container')
//     let rowUn = document.createElement('div')
//     rowUn.setAttribute('class', 'row')

// ////
//     let cameraImg = document.createElement('div')
//     cameraImg.setAttribute('class', 'camera-img')

//     let imgOfCamera = document.createElement('img')
//     imgOfCamera.setAttribute('class', 'img_produit')
//     imgOfCamera.src = url
// ////

// //////
//     let divUn = document.createElement('div')
//     divUn.setAttribute('class', 'camera-detail col-md-4 col-xs-12')

    
//     let divDeux = document.createElement('div')
//     divDeux.setAttribute('class', 'title')

//     let h1 = document.createElement('h1')
//     let newh1 = document.createTextNode(`${name}`)
// ////////

// ////////
//     let divTrois = document.createElement('div')
//     divTrois.setAttribute('class', 'line')
// ///////


// ///////
//     let divQuatre = document.createElement('div')
//     divQuatre.setAttribute('class', 'row')
   
//     let divCinq = document.createElement('div')
//     divCinq.setAttribute('class', 'price price-sm center-block')

//     let h2 = document.createElement('h2')
//     let newh2 = document.createTextNode(`${price /100} €`)
// ///////






// //////
//     let form = document.createElement('form')
//     form.setAttribute('method', 'post')

//     let divSix = document.createElement('div')
//     divSix.setAttribute('class', 'select_lentille')
   
//     let h4 = document.createElement('h4')
//     let newh4 = document.createTextNode(`Lentille :`)
//     // let newh4 = document.createTextNode(`Lentilles`)
//     // let choiceLenses = document.createElement('select')
//     // for ()
    
//         // console.log(lenses);
//       let div = document.createElement('div')
      
      

      
      
//       let select = document.createElement('select')
//     //  console.log(camera);
//         for(let textOfCamera of lenses) {
//         console.log(textOfCamera);
//         // let i = cameras.lenses
        
//         let p = document.createTextNode(textOfCamera)
        
        
//         let option = document.createElement('option')
//         select.appendChild(option)
//         option.appendChild(p)
//         }


    
//     // for(let camera of cameras) {
//     //     // console.log(lenses);
//     //   let div = document.getElementById('test')
//     //   let select = document.createElement('select')
      

//     //   div.appendChild(select)
      

//     //  console.log(camera);
//     //     for(let textOfCamera of camera.lenses) {
//     //     console.log(textOfCamera);
//     //     // let i = cameras.lenses
//     //     let p = document.createTextNode(textOfCamera)
        
        
//     //     let option = document.createElement('option')
//     //     select.appendChild(option)
//     //     option.appendChild(p)
//     //     }


//     // }

// //////
//     let divSept = document.createElement('div')
//     divSept.setAttribute('class', 'row')

//     let divhuit = document.createElement('div')
//     divhuit.setAttribute('class', 'col-xs-12')

//     let btn = document.createElement('input')
//     btn.setAttribute('class', 'add_cart_btn')
//     btn.setAttribute('type', 'submit')
//     btn.setAttribute('value', 'Ajouter au panier')
// //////






// //////
//     let divneuf = document.createElement('div')
//     divneuf.setAttribute('class', 'description mt-2')

//     let h5 = document.createElement('h5')
//     let newh5 = document.createTextNode(`Description`)

//     let p = document.createElement('p')
//     let newp = document.createTextNode(`${description}`)   
    
//     // Mise en place du container
//     main.appendChild(container)
//     container.appendChild(rowUn)
//     // Image
//     rowUn.appendChild(cameraImg)
//     cameraImg.appendChild(imgOfCamera)
//     // Récupération div pour nom
//     rowUn.appendChild(divUn)
//     // Nom Cam
//     divUn.appendChild(divDeux)
//     divDeux.appendChild(h1)
//     h1.appendChild(newh1)
//     // Ligne séparation
//     divUn.appendChild(divTrois)
//     // Prix
//     divUn.appendChild(divQuatre)
//     divQuatre.appendChild(divCinq)
//     divCinq.appendChild(h2)
//     h2.appendChild(newh2)
//     // Formulaire (menu selection lentilles + QTY + BTN)
//     divUn.appendChild(form)
//     form.appendChild(divSix)
//     divSix.appendChild(h4)
//     h4.appendChild(newh4)


//     divSix.appendChild(div)
//     div.appendChild(select)

//     divSept.appendChild(divhuit)
//     divhuit.appendChild(btn)
//     // Description
//     divUn.appendChild(divneuf)
//     divneuf.appendChild(h5)
//     h5.appendChild(newh5)
//     divneuf.appendChild(p)
//     p.appendChild(newp)
// }

// const pageCamera = function (cameras) {
//     for (product of cameras) {
//         cameraParameter(product.imageUrl, product.name, product.price, product.lenses, product.description)
//     }
// }









// // var data = {
// //     "category" : [
// //     {
// //         id: 1,
// //         product: [{id : 'product_1', type : 'ball'}] 
// //     },
// //     {
// //         id : 2,
// //         product :[{id : 'product_2', type : 'pen'}]
// //     }
// //     ]
// // }

// // function findId(data, idToLookFor) {
// //     var categoryArray = data.category;
// //     for (var i = 0; i < categoryArray.length; i++) {
// //         if (categoryArray[i].id == idToLookFor) {
// //             return(categoryArray[i].product);
// //         }
// //     }
// // }

// // var item = findId(data, 1);
// // // item.id, item.type


// // const cameras = [
// //     {
// //         lenses:["35mm 1.4","50mm 1.6"],
// //         _id:"5be1ed3f1c9d44000030b061",
// //         name:"Zurss 50S",
// //         price:49900,
// //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //         imageUrl:"http://localhost:3000/images/vcam_1.jpg"
// //     },        
// //     {
// //         lenses:["50mm 1.8","60mm 2.8","24-60mm 2.8/4.5"],
// //         _id:"5be1ef211c9d44000030b062",
// //         name:"Hirsch 400DTS",
// //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //         price:309900,
// //         imageUrl:"http://localhost:3000/images/vcam_2.jpg"
// //     },
// //     {
// //         lenses:["25mm 4.5"],
// //         _id:"5be9bc241c9d440000a730e7",
// //         name:"Franck JS 105",
// //         price:209900,
// //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //         imageUrl:"http://localhost:3000/images/vcam_3.jpg"
// //     },
// //     {
// //         lenses:["50mm 1.7","35mm 1.4"],
// //         _id:"5be9c4471c9d440000a730e8",
// //         name:"Kuros TTS",
// //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //         price:159900,
// //         imageUrl:"http://localhost:3000/images/vcam_4.jpg"
// //     },
// //     {
// //         lenses:["50mm 1.4","35mm 1.8","28-200mm 2.8/4.5"],
// //         _id:"5be9c4c71c9d440000a730e9",
// //         name:"Katatone",
// //         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// //         price:59900,
// //         imageUrl:"http://localhost:3000/images/vcam_5.jpg"
// //     }
// // ]

// // var result = cameras.filter(function(element){
// //     if (element._id == 5be9c4c71c9d440000a730e9){
// //         return true;
// //     } else {
// //         return false;
// //     }
// // });




// // var urlParts = window.location.href.split(/\//)
// // //window.location.href = http://domain.com/category/1
// // // urlParts = ['http:', '', 'domain.com', 'category', '1']
// // var id = urlParts.pop();
// // var category = urlParts.pop();

// // var data = JSON.parse('{"category" : [{"id": 1, "product": [{"id" : "product_1", "type" : "ball"}] }, {"id" : 2, "product" :[{"id" : "product_2", "type" : "pen"}] } ]}');

// // function findId(data, idToLookFor) {
// //     var categoryArray = data.category;
// //     for (var i = 0; i < categoryArray.length; i++) {
// //         if (categoryArray[i].id == idToLookFor) {
// //             return(categoryArray[i].product);
// //         }
// //     }
// // }

// // var item = findId(data.category, id);






    

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

                    <select id="select">
                        <option selected disabled >Lentilles :</option>
                    </select>
                    </div>

                        <div class="details">
                            <p class="card-text">${camera.description}</p>
                            <p class="card-text">${camera.price / 100}€</p>
                            <button type="button" class="btn btn-outline-success">Ajouter au panier</button>
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
        
})
