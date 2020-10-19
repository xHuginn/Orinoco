// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// //////////////////////////////////////////////
// // ACCEUIL
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
// .then(cameras => card(cameras));


// const cardParameter = function (url, name, description) {

//     let content = document.getElementById('content')
//     content.setAttribute('class', 'row')

//     let grille = document.createElement('div')
//     grille.setAttribute('class', 'col-md-4 col-sm-6')
   

//     let card = document.createElement('div')
//     card.setAttribute('class', 'card mb-4 shadow-sm')
   
//     let imgCard = document.createElement('img')
//     imgCard.setAttribute('class', 'imgID w-100')
//     imgCard.src = url

//     let cardBody = document.createElement('div')
//     cardBody.setAttribute('class', 'card-body')


//     let cardTitleCreate = document.createElement('h5')
//     cardTitleCreate.setAttribute('class', 'card-title')

//     let newcardTitleCreate = document.createTextNode(`${name}`);

//     let cardTextCreate = document.createElement('p')
//     cardTextCreate.setAttribute('class', 'card-text')

//     let newcardTextCreate = document.createTextNode(`${description}`);

//     let button = document.createElement('button')
//     button.setAttribute('class', 'btn btn-sm btn-outline-secondary')

//     let newButton = document.createTextNode(`Découvrir`);
    
    
//     content.appendChild(grille)
//     grille.appendChild(card)
//     card.appendChild(imgCard)
//     card.appendChild(cardBody)
//     cardBody.appendChild(cardTitleCreate)
//     cardTitleCreate.appendChild(newcardTitleCreate)
//     cardBody.appendChild(cardTextCreate)
//     cardTextCreate.appendChild(newcardTextCreate)
//     cardBody.appendChild(button)
//     button.appendChild(newButton)
// }

// const card = function (cameras) {
//     for (cards of cameras) {
//         cardParameter(cards.imageUrl, cards.name, cards.description)
//     }
// }




// let i = 0;

// let img = [
//     './img/cam_3.png',
//     './img/img_cam_2.jpg',
//     './img/banniere.png'
// ];

// let time = 4000;

// function changeImg() {

//     document.carousel.src = img[i];

//     if (i < img.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }

//     setTimeout('changeImg()', time)

// }


// window.onload = changeImg;

// Carousel 
// Init de i
let i = 0;
// Tableau des imgs du carousel
let img = [
    './img/cam_3.png',
    './img/img_cam_2.jpg',
    './img/banniere.png'
];
// Temps où on voit l'img
let time = 4000;
// fonction changement de l'img
function changeImg() {
// changement de la source de l'image avec let i
    document.carousel.src = img[i];
// i parcourt le tableau
    if (i < img.length - 1) {
        i++;
    } else {
        i = 0;
    }
// changement de l'img 
    setTimeout('changeImg()', time)

}

// active au chargement de l'img
window.onload = changeImg;


// appelle de l'API
fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(cameras => card(cameras));

// Fonction paramètres des cartes
function cardParameter(txt, url, price, id) {
    let div = document.getElementById('content');
    let divCard = document.createElement('div');
    divCard.className = "card";
    div.appendChild(divCard);
    Image(divCard, url);
    Name(divCard, txt);
    Description(divCard, price);
    console.log(txt);
    console.log(id);
    Link(divCard, txt, id);
}
// fonction appelle de l'img
function Image(card, url) {
    let imgCard = document.createElement('img')
    imgCard.setAttribute('class', 'imgID')
    // indique que la src est l'url de l'Img
    imgCard.src = url
    card.appendChild(imgCard)
}
// fonction appelle du nom
function Name(card, txt) {
    let cardTitleCreate = document.createElement('h5')
    let newcardTitleCreate = document.createTextNode(txt);
    card.appendChild(cardTitleCreate)
    cardTitleCreate.appendChild(newcardTitleCreate)
}
// fonction appelle du prix
function Description(card, price) {
      let cardTextCreate = document.createElement('p')
    let newcardTextCreate = document.createTextNode(`${price/100} €`); 
    card.appendChild(cardTextCreate)
    cardTextCreate.appendChild(newcardTextCreate)
}
// fonction appelle du lien
function Link(card, name, id) {
    let form = document.createElement('form')
    let link = document.createElement('input')
    link.type="button"
    link.value="Découvrir"
    link.addEventListener('click', ll => {
        // met le nom en sessionStorage ?
        sessionStorage.setItem('name', name)   
        // met l'id en sessionStorage ?  
        sessionStorage.setItem('id', id)
        document.location.href=`./produit.html`
        }) 
    card.appendChild(form);
    form.appendChild(link);

}
// fonction qui prends l'API 
function card(cameras) {
// Puis qui fait une boucle et ajoute à chaque carte les paramètres
    for (let cards of cameras) {
        cardParameter(cards.name, cards.imageUrl, cards.price, cards._id);
    }
}