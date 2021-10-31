
// Récupération de l'id de la commande (provenant du serveur) dans le local Storage
const responseId = localStorage.getItem("responseId");
console.log(`responseId : ${responseId}`);

// Récupération du prix total de la commande 
const prixTotal = displayPrice(localStorage.getItem("total"));
console.log(`prixTotal : ${prixTotal}`);

// La structure HTML de la page Confirmation Commande
// Selection élément du DOM pour le positionnement
const positionElement = document.querySelector("#main__Recapitulatif_Commande");
const structureConfirmationCommande = `
<div class="container__Recapitulatif_Commande">
    <h2>Récapitulatif de votre commande</h2>
        <div class="recapitulatif_Commande">
            <p class="recapitulatif__Commande_text">Merci pour votre commande.</p>
            <p class="recapitulatif__Commande_text">Votre commande numéro: <span class="recapitulatif__Commande_Numero">${responseId}</span> a bien été validée.</p>
            <p class="recapitulatif__Commande_text">Le montant de votre commande est de <span class="recapitulatif__Commande_Price">${prixTotal}</span></p>
            <p class="recapitulatif__Commande_text">Au plaisir de vous revoir.</p>
        </div>
</div>
`;

// Injection HTML 
positionElement.insertAdjacentHTML("afterbegin", structureConfirmationCommande);

// Effacer tout le local storage sauf le formulaire 
function enleverCleLocalStorage(key) {
    localStorage.removeItem(key);
};

enleverCleLocalStorage("prixTotal");
enleverCleLocalStorage("produit");
enleverCleLocalStorage("responseId");


// Prix cents > euro 

function displayPrice(price) {
    return (price / 100).toFixed(2) + "€"
}
