P5_Pugliese_Alexandre

#Comment lancer le projet

Ouvrir le dossier dans un éditeur comme VSCode.
Dans un terminal aller dans le dossier backend.
Entrer la commande : npm install
Ensuite entrer la commande "npm start" pour lancer le backend. 
Le terminal doit rester activer tout le long du fonctionnement du site.

Si vous avez live server. Aller dans le dossier FrontEnd et sélectionner le fichier index.html
choisir l'option Open With Live Server. 

Si vous n'avez pas live server vous pouvez simplement lancer le fichier index.html dans votre navigateur.

---------------------------------

Orinoco : 

Architecture générale
L’application web sera composée de 4 pages :
● une page de vue sous forme de liste, montrant tous les articles disponibles
à la vente ;
● une page “produit”, qui affiche de manière dynamique l'élément
sélectionné par l'utilisateur et lui permet de personnaliser le produit et de
l'ajouter à son panier ;
● une page “panier” contenant un résumé des produits dans le panier, le prix
total et un formulaire permettant de passer une commande. Les données
du formulaire doivent être correctes et bien formatées avant d'être
renvoyées au back-end. Par exemple, pas de texte dans les champs date ;
● une page de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant le prix total et l'identifiant de commande envoyé
par le serveur.
Produits présentés
Dans un premier temps, une seule catégorie de produits sera présentée.
Choix à faire entre les 3 propositions suivantes :
● ours en peluche faits à la main ;
● caméras vintage ;
● meubles en chêne.
Planification de tests unitaires
Planifiez une suite de tests unitaires pour couvrir au minimum 80 % de la base de
code pour le front-end. Vous devrez formaliser un plan pour atteindre ce résultat,
sans obligation d’écrire ces tests Expliquez quelles lignes seront testées, et quels
“test cases” seront envisagés.
Informations complémentaires
Pour le MVP, la personnalisation du produit ne sera pas fonctionnelle : la page
contenant un seul article aura un menu déroulant permettant à l'utilisateur de
choisir une option de personnalisation, mais celle-ci ne sera ni envoyée au serveur
ni reflétée dans la réponse du serveur.
Le code source devra être indenté et utiliser des commentaires. Il devra
également utiliser des fonctions globales.
Concernant l’API, des promesses devront être utilisées pour éviter les rappels.
Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.
Technologies utilisées
HTML, CSS, JavaScript.
URL des API
● Ours en peluche faits à la main : http://localhost:3000/api/teddies
● Caméras vintage : http://localhost:3000/api/cameras
● Meubles en chêne : http://localhost:3000/api/furniture
Validation des données
Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs
firstName, lastName, address, city et email. Le tableau des produits envoyé au
backend doit être un array de strings products. Les types de ces champs et leur
présence doivent être validés avant l’envoi des données au serveur.
