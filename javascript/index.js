// Carousel 
// Init de i
let i = 0;
// Tableau des imgs du carousel
let img = [
    '../img/cam_3.png',
    '../img/img_cam_2.jpg',
    '../img/banniere.png'
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
    let content = document.getElementById('content');
    content.setAttribute('class', 'row')

    let grille = document.createElement('div')
    grille.setAttribute('class', 'col-md-4 col-sm-6')

    content.appendChild(grille);

    let divCard = document.createElement('div');
    divCard.setAttribute('class', 'card mb-4 shadow-sm')

    grille.appendChild(divCard);

    Name(divCard, txt);
    Image(divCard, url);

    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')
    divCard.appendChild(cardBody)

    let divBody = document.createElement('div');
    divBody.setAttribute('class', 'card ')
    Description(cardBody, price);
    Link(cardBody, txt, id);
}
// fonction appelle du nom
function Name(card, txt) {
    let cardTitleCreate = document.createElement('h5')
    let newcardTitleCreate = document.createTextNode(txt);
    cardTitleCreate.setAttribute('class', 'card-title') 
    card.appendChild(cardTitleCreate)
    cardTitleCreate.appendChild(newcardTitleCreate)
}

// fonction appelle de l'img
function Image(card, url) {
    let imgCard = document.createElement('img')
    imgCard.setAttribute('class', 'imgID w-100')
    // indique que la src est l'url de l'Img
    imgCard.src = url
    card.appendChild(imgCard)
}

// fonction appelle du prix
function Description(card, price) {
      let cardTextCreate = document.createElement('p')
    let newcardTextCreate = document.createTextNode(`${price/100} €`); 
    cardTextCreate.setAttribute('class', 'card-text')
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
    link.setAttribute('class', 'btn btn-sm btn-outline-secondary')
}
// fonction qui prends l'API 
function card(cameras) {
// Puis qui fait une boucle et ajoute à chaque carte les paramètres
    for (let cards of cameras) {
        cardParameter(cards.name, cards.imageUrl, cards.price, cards._id);
    }
}