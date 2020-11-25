// Fonction qui ajoute le nombre total d'articles dans le header
function TotalArticle() {
    let totalArt = document.getElementById('TotalArticle')
  
    let total = 0
  
    // Récupère le panier depuis le localStorage
    const RecupPanier = localStorage.getItem('panier')
  
    let panier = JSON.parse(RecupPanier)
  
      if (!panier) {
          console.log('panier vide');  
      } else {
          
          for (let camera of panier) {
      
              let totalCam = camera.number
                  
              total += totalCam
                  
          }
          totalArt.innerHTML += "( " +total + " article(s)" + " )"
      }
  
  }
  TotalArticle()

