// Récuperation de la chaine de requête dans l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

// Exrtaire l'id
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);

const leId = urlSearchParams.get("id")
console.log(leId);
fetch("http://localhost:3000/api/cameras/" + leId).then(response => response.json()).then(data => {
    console.log(data)
    if (data._id === undefined) {
        throw new Error("Le produit que vous avez séléctionné est inexistant.")
    }
    //on recup le conteneur
    let container = document.querySelector(".main__Produit_PageSecondaire");

    container.innerHTML = `
    <div class="produit_PageSecondaire">
    <div class="produit__Picture_PageSecondaire">
        <img class="image__Camera_PageSecondaire" src="${data.imageUrl}">
    </div>
    <div class="produit__Informations_PageSecondaire">
        <ul>        
            <li>ID : <span class="produit__ID_PageSecondaire">${data._id}</span></li>
            <li>Nom : <span class="produit__Name_PageSecondaire">${data.name}</span></li>
            <li>Description : <span class="produit__Description_PageSecondaire">${data.description}</span></li>
            <li>Prix : <span class="produit__Price_PageSecondaire">${displayPrice(data.price)}</span></li>
    </br>  
            <form >
                <label for="option__Produit">
                    <select name="option__Produit" id="option__Produit">
                    ${data.lenses.map(lense => '<option>' + lense +'</option>').join('')}
                </label>
            </form>
        </ul>
    </div>
    
<div class="ajouter__Panier">
<button id="btn-envoyer" type="submit" name="btn-envoyer">Ajouter au panier</button>
</div>

    </div>
    `;

}).catch(error => {
    console.error("rien ici")
    let container = document.querySelector(".main__Produit_PageSecondaire");

    container.innerHTML = `<h2 class="message__Erreur">${error.message}</h2>`
})


// Prix cents > euro 

function displayPrice(price){
    return(price / 100).toFixed(2) + "€"
}