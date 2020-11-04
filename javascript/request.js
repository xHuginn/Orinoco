// // INDEX

const getCameras = async function() {
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
// getCameras()

// Produit

const getProduit = async function(id) {
    try {
        
        let response = await fetch(`http://localhost:3000/api/cameras/${id}`)
        
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
// getProduit()
