// INDEX
// Récupère les caméras depuis l'API
const getCameras = async function() {
    try {
        let response = await fetch('http://localhost:3000/api/cameras')
        if (response.ok) {
            let data = await response.json()
            return data
        } else {
            console.error(`Retour du serveur : ${response.status}`)
        }
    } catch (e) {
        console.log(e);
    }
}

// PRODUIT
// Récupère la caméra choisie grâce à son id 
const getProduit = async function(id) {
    try {
        let response = await fetch(`http://localhost:3000/api/cameras/${id}`)  
        if (response.ok) {
            let data = await response.json()
            return data
        } else {
            console.error(`Retour du serveur : ${response.status}`)
        }
    } catch (e) {
        console.log(e);
    }
  }
  
// CONFIRMATION
// Requete POST 
async function orderID(data) {
    try {
        let response = await fetch("http://localhost:3000/api/cameras/order", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        let res = await response.json()
        localStorage.setItem('orderID', JSON.stringify(res))
        return res
    } catch (e) {
      console.log(e);
    }
  }