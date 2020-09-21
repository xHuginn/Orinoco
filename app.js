//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// ACCEUIL
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(cameras => card(cameras));


const cardParameter = function (url, name, description) {

    let content = document.getElementById('content')
    content.setAttribute('class', 'row')

    let grille = document.createElement('div')
    grille.setAttribute('class', 'col-md-4 col-sm-6')
   

    let card = document.createElement('div')
    card.setAttribute('class', 'card mb-4 shadow-sm')
   
    let imgCard = document.createElement('img')
    imgCard.setAttribute('class', 'imgID w-100')
    imgCard.src = url

    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')


    let cardTitleCreate = document.createElement('h5')
    cardTitleCreate.setAttribute('class', 'card-title')

    let newcardTitleCreate = document.createTextNode(`${name}`);

    let cardTextCreate = document.createElement('p')
    cardTextCreate.setAttribute('class', 'card-text')

    let newcardTextCreate = document.createTextNode(`${description}`);

    let button = document.createElement('button')
    button.setAttribute('class', 'btn btn-sm btn-outline-secondary')

    let newButton = document.createTextNode(`Découvrir`);
    
    
    content.appendChild(grille)
    grille.appendChild(card)
    card.appendChild(imgCard)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitleCreate)
    cardTitleCreate.appendChild(newcardTitleCreate)
    cardBody.appendChild(cardTextCreate)
    cardTextCreate.appendChild(newcardTextCreate)
    cardBody.appendChild(button)
    button.appendChild(newButton)
}

const card = function (cameras) {
    for (cards of cameras) {
        cardParameter(cards.imageUrl, cards.name, cards.description)
    }
}




let i = 0;

let img = [
    './img/cam_3.png',
    './img/img_cam_2.jpg',
    './img/banniere.png'
];

let time = 4000;

function changeImg() {

    document.carousel.src = img[i];

    if (i < img.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time)

}


window.onload = changeImg;


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// PRODUIT
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


// fetch("http://localhost:3000/api/cameras")
// .then(response => response.json())
// .then(cameras => pageCamera(cameras));


// const cameraParameter = function (url, name, price, lenses, description) {
//     let cameraImg = document.getElementById('camera-img')
//     cameraImg.setAttribute('class', 'camera-img col-md-8 col-xs-12')

//     let imgOfCamera = document.createElement('img')
//     imgOfCamera.setAttribute('class', 'img_produit')
//     imgOfCamera.src = url

    


//     // let grille = document.createElement('div')
//     // grille.setAttribute('class', 'col-md-4 col-sm-6')
   

//     // let card = document.createElement('div')
//     // card.setAttribute('class', 'card mb-4 shadow-sm')
   
   

//     // let cardBody = document.createElement('div')
//     // cardBody.setAttribute('class', 'card-body')


//     // let cardTitleCreate = document.createElement('h5')
//     // cardTitleCreate.setAttribute('class', 'card-title')

//     // let newcardTitleCreate = document.createTextNode(`${name}`);

//     // let cardTextCreate = document.createElement('p')
//     // cardTextCreate.setAttribute('class', 'card-text')

//     // let newcardTextCreate = document.createTextNode(`${description}`);

//     // let button = document.createElement('button')
//     // button.setAttribute('class', 'btn btn-sm btn-outline-secondary')

//     // let newButton = document.createTextNode(`Découvrir`);
    
    
//     // content.appendChild(grille)
//     // grille.appendChild(card)
//     // card.appendChild(imgCard)
//     // card.appendChild(cardBody)
//     // cardBody.appendChild(cardTitleCreate)
//     // cardTitleCreate.appendChild(newcardTitleCreate)
//     // cardBody.appendChild(cardTextCreate)
//     // cardTextCreate.appendChild(newcardTextCreate)
//     // cardBody.appendChild(button)
//     // button.appendChild(newButton)
// }

// const pageCamera = function (cameras) {
//     for (cards of cameras) {
//         cameraParameter(cards.imageUrl, cards.name, cards.description)
//     }
// }












