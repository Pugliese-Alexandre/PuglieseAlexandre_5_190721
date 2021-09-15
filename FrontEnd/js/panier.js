        // Déclaration de la variable 
        let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
        console.log(produitEnregistreDansLocalStorage)

        // L'affichage des produits du panier
        // Selection de la classe ou je vais injecter le code HTML
        let positionElement = document.querySelector(".main__Panier");
        console.log(positionElement);

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
                        <img class="panier__Picture_camera">${produitEnregistreDansLocalStorage[k].imageUrl}</img>
                    </div>

                        <div class="panier__Description"> 
                            <ul>
                                    <li><span class="panier__Id">ID : <p class="panier__Description_typography">${produitEnregistreDansLocalStorage[k].idProduitSelectionner}</p></span></li>
                                    <li><span class="panier__Name">Nom : <p class="panier__Description_typography"> ${produitEnregistreDansLocalStorage[k].nomProduit}</p></span></li>
                                    <li><span class="panier__lense">Lentille : <p class="panier__Description_typography"> ${produitEnregistreDansLocalStorage[k].lenses}</p></span></li>
                                    <li><span class="panier__Price"> Prix : <p class="panier__Description_typography"> ${displayPrice(produitEnregistreDansLocalStorage[k].prix)}</p></span></li>
                            <ul>
                        </div>
                    
                    
                        <div> </div>

                        <button class="btn__Delete_Item"><i class="fas fa-trash" id="Icone_Delete"></i></button>
                    </div>
                `;
            }
            if (k == produitEnregistreDansLocalStorage.length) {
                //Injection du code HTML dans la pa page "Panier"
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
            return total
        }

        // Prix cents > euro 

        function displayPrice(price) {
            return (price / 100).toFixed(2) + "€"
        }

        // Gestion du bouton "Supprimer l'article"

        // Sélection des références de tout les boutons "btn__Delete_Item"

        let btn__Delete_Item = document.querySelectorAll(".btn__Delete_Item");
        console.log(btn__Delete_Item);

        for (let l = 0; l < btn__Delete_Item.length; l++) {
            btn__Delete_Item[1].addEventListener("click", (event) => {
                event.preventDefault();

                // Sélection de l'ID du produit en cliquant sur le bouton

                let id_selectionner_suppression = produitEnregistreDansLocalStorage[l].idProduitSelectionner;
                console.log("id_selectionner_suppression");
                console.log(id_selectionner_suppression);

                produitEnregistreDansLocalStorage = produitEnregistreDansLocalStorage.filter(el => el.id_ProduitSelectionner !== id_selectionner_suppression);
                console.log(produitEnregistreDansLocalStorage);

                // on envoie la variable dans le LocalStorage
                // La transformation en format JSON et l'envoyer dans la key "produit" du LocalStorage

                localStorage.setItem("produit", JSON.stringify(produitEnregistreDansLocalStorage));

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
        console.log(positionElement);
        // Insertion du bouton dans le HTML du panier

        positionElement.insertAdjacentHTML("beforeend", btn__Delete_Bucket_html);

        // Selection de la référence du bouton "btn-Delete-Bucket"
        const btn__Delete_Bucket = document.querySelector("#btn-Delete-Bucket");
        console.log(btn__Delete_Bucket);

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
        <button id="btn-checkout" type="submit" name="bouton-checkout">Passer la commande</button>
        </div>
        `;
        // Insertion du bouton dans le HTML du panier

        positionElement.insertAdjacentHTML("beforeend", btn__checkout_html);