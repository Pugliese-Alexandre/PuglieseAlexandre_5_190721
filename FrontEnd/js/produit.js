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
         </ul> 
            <form >
                <label for="option__Produit">
                    <select name="option__Produit" id="option__Produit">
                    ${data.lenses.map(lense => '<option>' + lense +'</option>').join('')}
                    </select>
                </label>
        </form>
    </div>
       </div>
<div class="bouton__Commander">
       <button id="btn-envoyer" type="submit" name="btn-envoyer"> <i class="fas fa-shopping-cart" id="fas-btn"></i>Ajouter au panier</button>    
       </div>
    `;
    const idForm = document.querySelector("#option__Produit")
    console.log(idForm)
    //Sélection du bouton ajouter l'article au panier
    const btn_envoyerPanier = document.querySelector("#btn-envoyer")
    console.log("btn -", btn_envoyerPanier)

    // Ecouter le bouton et envoyer le panier

    btn_envoyerPanier.addEventListener("click", (event) => {
        event.preventDefault()

        //Mettre le choix de l'utilisateuir dans une variable 
        const choixForm = idForm.value;

        // Récupération des valeurs du formulaire 

        let option__Produit = {
            nomProduit: data.name,
            idProduitSelectionner: data._id,
            option__Produit: choixForm,
            prix: data.price / 100
        }

        console.log(option__Produit);
    });


}).catch(error => {
    console.error("rien ici")
    let container = document.querySelector(".main__Produit_PageSecondaire");

    container.innerHTML = `<h2 class="message__Erreur">${error.message}</h2>`
})


// Prix cents > euro 

function displayPrice(price) {
    return (price / 100).toFixed(2) + "€"
}

// Bouton Commander 

var cart = 0
var btnAdd = document.querySelector('#btn-envoyer')
var element = document.querySelector('btn-envoyer')
element.innerText = cart
btnAdd.addEventListener('click', function(){

    cart++
    element.innerText = cart
    console.log(cart);
})
