// INDEX

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



// PANIER

// Utile?
const getPanier = async function() {
    try {
        let response = await fetch('http://localhost:3000/api/cameras')
        
        if (response.ok) {
            let data = await response.json()
            return data
            // console.log(JSON.stringify(data));
        } else {
            console.error(`Retour du serveur : ${response.status}`)
        }
    } catch (e) {
        // console.error(e)
        console.log(e);
    }
}


// CONFIRMATION

async function orderID(data) {
    try {
        // {} OU OPTIONS
        // console.log(donnees)
        let response = await fetch("http://localhost:3000/api/cameras/order", {
            method: "POST",
            headers: {
            //   'Accept': 'application/json',
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