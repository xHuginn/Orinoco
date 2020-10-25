fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(cameras => card(cameras));


const cardParameter = function (url, text, price) {

    let get = document.getElementById('content')

    let div = document.createElement('div')
    div.setAttribute('class', 'container')
   
    let imgCard = document.createElement('img')
    imgCard.setAttribute('id', 'imgID')
    imgCard.setAttribute('class', 'imgID')
    imgCard.src = url


    get.appendChild(div)
    div.appendChild(imgCard)

}

const card = function (cameras) {
    for (cards of cameras) {
        cardParameter(cards.imageUrl, cards.name, cards.price)
    }
}