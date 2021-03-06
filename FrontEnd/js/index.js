fetch("http://localhost:3000/api/cameras").then(response => response.json()).then(data => {
    console.log(data)
    let mainElement = document.querySelector("main")
    console.log(mainElement)
    for(let index = 0; index < data.length; index++){
       
       mainElement.innerHTML += displayProduct(data[index]);
    }
}) 

function displayProduct(product){
    return `
    <a href="html/produit.html?id=${product._id}"><article class="camera__article">
        <h1 class="camera__Title">${product.name}</h1>
        <p class="camera__Description">${product.description}</p>
        <p class="camera__Price">${displayPrice(product.price)}</p>
        <img class="camera__Picture" src="${product.imageUrl}">
    </article></a>`
}

// Prix cents > euro 

function displayPrice(price){
    return(price / 100).toFixed(2) + "€"
}