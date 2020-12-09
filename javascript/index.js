// Carousel

// Creation div carousel
let carousel = document.getElementById("carousel");
let div = document.createElement("div");
div.setAttribute("class", "carousel");
// creation image qui contiendra le carousel
let imageCarousel = document.createElement("img");
imageCarousel.setAttribute("name", "carousel");
imageCarousel.setAttribute("class", "slide");

carousel.appendChild(div);
div.appendChild(imageCarousel);

// Init de i
let i = 0;
// Tableau des imgs du carousel
let img = ["./img/cam_3.png", "./img/img_cam_2.jpg", "./img/banniere.png"];
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
	setTimeout("changeImg()", time);
}

// active au chargement de l'img
window.onload = changeImg;

// Récupère la requete depuis request.js
async function getAPI() {
	try {
		const cameras = await getCameras();
		card(cameras);
	} catch (e) {
		console.log(e);
	}
}
getAPI();

//   Indique les paramètres de la carte (d'un article) et appelle toutes les autres fonctions
function cardParameter(txt, url, price, id) {
	let content = document.getElementById("content");
	content.setAttribute("class", "content");

	let divCard = document.createElement("div");
	divCard.setAttribute("class", "card");

	content.appendChild(divCard);

	name(divCard, txt);
	image(divCard, url);

	let cardBody = document.createElement("div");
	cardBody.setAttribute("class", "card-body");
	divCard.appendChild(cardBody);

	priceCam(cardBody, price);
	link(cardBody, id);
}
// fonction appelle du nom
function name(card, txt) {
	let cardTitleCreate = document.createElement("h5");
	let newcardTitleCreate = document.createTextNode(txt);
	cardTitleCreate.setAttribute("class", "card-title");
	card.appendChild(cardTitleCreate);
	cardTitleCreate.appendChild(newcardTitleCreate);
}

// fonction appelle de l'img
function image(card, url) {
	let imgCard = document.createElement("img");
	imgCard.setAttribute("class", "card-img");
	// indique que la src est l'url de l'Img
	imgCard.src = url;
	card.appendChild(imgCard);
}

// fonction appelle du prix
function priceCam(card, price) {
	let cardTextCreate = document.createElement("p");
	let newcardTextCreate = document.createTextNode(`${price / 100} €`);
	cardTextCreate.setAttribute("class", "card-text");
	card.appendChild(cardTextCreate);
	cardTextCreate.appendChild(newcardTextCreate);
}
// fonction appelle du lien
function link(card, id) {
	let link = document.createElement("a");
	link.setAttribute("class", "link");
	link.innerHTML = "Découvrir";
	link.href = `./produit.html?id=${id}`;
	card.appendChild(link);
}
// fonction qui prends l'API
function card(cameras) {
	// Puis qui fait une boucle et ajoute à chaque carte les paramètres
	for (let cards of cameras) {
		cardParameter(cards.name, cards.imageUrl, cards.price, cards._id);
	}
}
