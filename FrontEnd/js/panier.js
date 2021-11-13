        // Déclaration de la variable 
        let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
        // L'affichage des produits du panier
        // Selection de la classe ou je vais injecter le code HTML
        let positionElement = document.querySelector(".main__Panier");
        let structureProduitPanier = [];

        // Si le panier est vide = Affichage du Message : Le panier est vide.
        if (produitEnregistreDansLocalStorage === null) {
            const panierVide = `
        <div class="container__Bucket_Empty">
        <div>Le panier est vide.</div>
        </div>
        `;
            positionElement.innerHTML = panierVide;
        }
        // Si le panier n'est pas vide : Afficher les produits dans le localStorage
        else {
            positionElement = document.querySelector(".panier__Product")
            for (k = 0; k < produitEnregistreDansLocalStorage.length; k++) {
                structureProduitPanier =
                    structureProduitPanier +
                    `
                    <div class="container__Recapitulatif">

                    <div class="panier__Picture">
                        <img class="panier__Picture_camera" src="${produitEnregistreDansLocalStorage[k].imageUrl}">
                    </div>

                        <div class="panier__Description"> 
                            <ul>
                                    <li><span class="panier__Id">ID : <p class="panier__Description_typography">${produitEnregistreDansLocalStorage[k].idProduitSelectionner}</p></span></li>
                                    <li><span class="panier__Name">Nom : <p class="panier__Description_typography"> ${produitEnregistreDansLocalStorage[k].nomProduit}</p></span></li>
                                    <li><span class="panier__lense">Lentille : <p class="panier__Description_typography"> ${produitEnregistreDansLocalStorage[k].option__Produit}</p></span></li>
                                    <li><span class="panier__Price"> Prix : <p class="panier__Description_typography"> ${displayPrice(produitEnregistreDansLocalStorage[k].prix)}</p></span></li>
                            <ul>
                        </div>
                    
                    
                        <div> </div>

                        <button class="btn__Delete_Item"><i class="fas fa-trash" id="Icone_Delete"></i></button>
                    </div>
                `;
            }
            if (k == produitEnregistreDansLocalStorage.length) {
                //Injection du code HTML dans la page "Panier"
                positionElement.innerHTML = structureProduitPanier;
            } 
            document.querySelector(".prix__Total").textContent = displayPrice(totalPrice(produitEnregistreDansLocalStorage));
        }
        // Fonction pour additionner les produits du panier
        function totalPrice(products) {
            let total = 0
            for (let index = 0; index < products.length; index++) {
                total += products[index].prix
            }
            console.log(total)
            localStorage.setItem("total", total);
            return total
        }
        // Prix cents > euro 
        function displayPrice(price) {
            return (price / 100).toFixed(2) + "€"
        }
        // Gestion du bouton "Supprimer l'article"
        // Sélection des références de tout les boutons "btn__Delete_Item"

        let btn__Delete_Item = document.querySelectorAll(".btn__Delete_Item");
        for (let l = 0; l < btn__Delete_Item.length; l++) {
            btn__Delete_Item[l].addEventListener("click", (event) => {
                event.preventDefault();
                // Sélection de l'ID du produit en cliquant sur le bouton
                let id_selectionner_suppression = produitEnregistreDansLocalStorage[l].idProduitSelectionner;
                produitEnregistreDansLocalStorage.splice(l, 1);
                // on envoie la variable dans le LocalStorage
                // La transformation en format JSON et l'envoyer dans la key "produit" du LocalStorage
                if (produitEnregistreDansLocalStorage.length > 0) {
                    localStorage.setItem("produit", JSON.stringify(produitEnregistreDansLocalStorage));
                } else {
                    localStorage.removeItem("produit");
                }
                // Alerte pour prévenir que le produit a bien été supprimer et rechargement de la page
                alert("Ce produit a été supprimer du panier.")
                window.location.href = "/FrontEnd/html/panier.html";
            })
        }

        // Le bouton pour vider le panier 
        // Le code HTML du bouton a afficher dans la page
        const btn__Delete_Bucket_html = `
        <div class="btn__Empty_Bucket">
        <button id="btn-Delete-Bucket" type="submit" name="bouton-Delete-Bucket">Vider le panier</button>
        </div>
        `;
        // Insertion du bouton dans le HTML du panier
        positionElement.insertAdjacentHTML("beforeend", btn__Delete_Bucket_html);
        // Selection de la référence du bouton "btn-Delete-Bucket"
        const btn__Delete_Bucket = document.querySelector("#btn-Delete-Bucket");
        // Suppremier de la Key "produit" du localStorage pour vider le panier
        btn__Delete_Bucket.addEventListener('click', (e) => {
            e.preventDefault;
            //.removeitem pour vider le LocalStorage
            localStorage.removeItem("produit");
            // Alerte "Le panier a été vidé"
            alert("Le panier a été vidé.");
            // Chargement de la page panier
            window.location.href = "/FrontEnd/html/panier.html";
        });


        // Le bouton pour passer commande
        // Le code HTML du bouton pour passer commande.

        const btn__checkout_html = `
        <div class="btn__checkout">
        <a href="#formulaireCommande"><button  id="btn-checkout" type="submit" name="bouton-checkout">Passer la commande</button>
        </a></div>
        `;
        // Insertion du bouton dans le HTML du panier

        positionElement.insertAdjacentHTML("beforeend", btn__checkout_html);

        // **************************
        // Le Formulaire de Commande 
        // **************************

        const afficherFormulaireHtml = () => {
            // Séléction element du dom pour le positionnement du formulaire
            const positionElement = document.querySelector(".main__Panier");

            const structureFormulaire = `

            <div id="formulaireCommande">
            <h2 class="formulaireCommande__Title">Remplissez le formulaire pour valider la commande</h2>
            <form>
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" required>
                <label for="nom">Nom :</label>
                <input type="text" id="name" name="name" required>
                <label for="email">E-mail</label>
                <input type="text" id="email" name="email" required>
                <label for="adresse">Adresse :</label>
                <textarea id="adresse" name="adresse" required></textarea>
                <label for="ville">Ville :</label>
                <input type="text" id="ville" name="ville" required>
                <label for="codePostal">Code Postal :</label>
                <input type="text" id="codePostal" name="codePostal" required>

                <button id="envoyerFormulaire" type="submit" name="envoyerFormulaire">
                    Confirmation de la commande
                </button>
            </form>
        </div>
        `;

            // Injection HTML
            positionElement.insertAdjacentHTML("afterend", structureFormulaire);
        };

        // Affichage du formulaire 
        afficherFormulaireHtml();

        // Sélection du bouton Envoyer le formulaire
        const btnEnvoyerFormulaire = document.querySelector("#envoyerFormulaire");
        // --- AddEventListener --- 
        btnEnvoyerFormulaire.addEventListener("click", (e) => {
            e.preventDefault();

            // Création / Définition d'une classe pour fabriquer l'objet dans lequel iront les values du formulaire

            class Formulaire {
                constructor(input) {
                    this.prenom = document.querySelector("#prenom").value;
                    this.nom = document.querySelector("#name").value;
                    this.email = document.querySelector("#email").value;
                    this.adresse = document.querySelector("#adresse").value;
                    this.ville = document.querySelector("#ville").value;
                    this.codePostal = document.querySelector("#codePostal").value;
                    this.input = document.querySelector(`#${input}`).value;
                }
            }

            // Appel de l'instance de classe Formulaire pour créer l'objet formulaireValues 
            const formulaireValues = new Formulaire("ville");

            // Mettre  l'objet "formulaireValues" dans le LocalStorage
            if (prenomControle(formulaireValues.prenom) && nomControle(formulaireValues.nom) && codePostalControle(formulaireValues.codePostal) && emailControle(formulaireValues.email) && adresseControle(formulaireValues.adresse)) {
                localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));
             
                // Mettre les values du formulaire et mettre les produits sélectionnés dans un objet a envoyer vers le serveur
                const aEnvoyer = {
                    contact: {
                        firstName: formulaireValues.prenom,
                        lastName: formulaireValues.nom,
                        address: formulaireValues.adresse,
                        city: formulaireValues.ville,
                        email: formulaireValues.email,
                    },
                    products: produitEnregistreDansLocalStorage.map(elt => elt.idProduitSelectionner),
                };
                envoieVersServeur(aEnvoyer);
            } else {
                alert("Veuillez bien remplir le formulaire.");
            }
        });

        function envoieVersServeur(aEnvoyer){
            // Envoie de l'objet "aEnvoyer" vers le serveur 
            const promise01 = fetch("http://localhost:3000/api/cameras/order", {
                method: "POST",
                body: JSON.stringify(aEnvoyer),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Pour voir le resultat du serveur dans la console 
            promise01.then(async (response) => {
                // si la promesse n'est pas résolu, si elle est rejetée - gestions des erreurs  
                try {
                    const contenu = await response.json();
                    console.log("contenu de response");
                    console.log(contenu);
                    
                    if (response.ok) {
                        console.log(`Resultat de response.ok : ${response.ok}`);
                // Récupération de l'id de la response du serveur 
                console.log("id de response");
                console.log(contenu.orderId);

                // Mettre l'id dans le LocalStorage
                localStorage.setItem("responseId", contenu.orderId);
                
                // Aller vers la page confirmation-commande
                window.location = "confirmation-commande.html";
                

                    } else {
                        console.log(`Réponse du serveur : ${response.status}`);
                        alert(`Problème avec le serveur : erreur ${response.status}`)
                    };

                } catch (e) {

                    console.log("ERREUR qui vient du catch()");
                    console.log(e);
                    alert(`ERREUR qui vient du catch() ${e}`);
                };
            });
        }

        // Mettre le contenu dans les champs du formulaire 
        // Prendre la key dans le LocalStorage et la mettre dans une variable
        const dataLocalStorage = localStorage.getItem("formulaireValues");

        // Convertir la chaine de caractere en objet javascript 
        const dataLocalStorageObjet = JSON.parse(dataLocalStorage);

        // Fonction pour que le champ du formulaire soit rempli par les données du LocalStorage
        function remplirInput(input) {
            document.querySelector(`#${input}`).value = dataLocalStorageObjet[input];

            remplirInput("prenom");
            remplirInput("name");
            remplirInput("email");
            remplirInput("adresse");
            remplirInput("ville");
            remplirInput("codePostal");
        }
        // ************************* Gestion du Formulaire ************************* 

        const textAlert = (value) => {
            return `${value}: Les chiffres et les symboles ne sont pas autorisés \n Minimum 3 caractères, ne pas dépasser les 20 caractères.`;
        }

        const regExPrenomNomVille = (value) => {
            return /^[A-Za-z]{3,20}$/.test(value);
        }

        const regExCodePostal = (value) => {
            return /^[0-9]{4}$/.test(value);
        }

        const regExEmail = (value) => {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(value);
        }

        const regExAdresse = (value) => {
            return /^[A-Za-z0-9\s]{5,50}$/.test(value);
        }

        // Controle de la validité du prenom
        function prenomControle(lePrenom) {
            if (regExPrenomNomVille(lePrenom)) {
                return true;
            } else {
                alert(textAlert("Prenom"));
                return false;
            }
        };
        // Controle de la validité du nom
        function nomControle(leNom) {
            if (regExPrenomNomVille(leNom)) {
                return true;
            } else {
                alert(textAlert("Nom"));
                return false;
            }
        };
        // Controle de la validité du Code Postal
        function codePostalControle(leCodePostal) {
            if (regExCodePostal(leCodePostal)) {
                return true;
            } else {
                alert("Le code postal doit être composé de 4 chiffres.");
                return false;
            }
        };
        // Controle de la validité de l email
        function emailControle(leEmail) {
            if (regExEmail(leEmail)) {
                return true;
            } else {
                alert("L'email n'est pas valide.");
                return false;
            }
        };
        // Controle de la validité de l adresse
        function adresseControle(leAdresse) {
            if (regExAdresse(leAdresse)) {
                return true;
            } else {
                alert("L'adresse n'est pas valide.");
                return false;
            }
        };
