// Fonction qui ajoute le nombre total d'articles dans le header
function totalArticle() {
    let totalArt = document.getElementById('TotalArticle')
    let total = 0
    // Récupère le panier depuis le localStorage
    const recupPanier = localStorage.getItem('panier')
    let panier = JSON.parse(recupPanier)
      if (!panier) {
      } else {
          
          for (let camera of panier) {    
              let totalCam = camera.number                
              total += totalCam             
        }
        totalArt.innerHTML += "( " +total + " article(s)" + " )"
    } 
  }
  totalArticle()

