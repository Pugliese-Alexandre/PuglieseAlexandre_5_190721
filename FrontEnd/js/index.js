fetch("http://localhost:3000/api/cameras").then(response => response.json()).then(data => {
    console.log(data)
    let mainElement = document.querySelector("main")
    console.log(mainElement)
    for(let index = 0; index < data.length; index++){
        console.log(data[index])
        console.log(data[index].name)
        console.log(data[index].description)
        console.log(data[index].price)
        console.log(data[index].imageUrl)
        mainElement.innerHTML += `<h1 class="camera__Title">${data[index].name}</h1>`
        mainElement.innerHTML += `<p class="camera__Description">${data[index].description}</p>`
        mainElement.innerHTML += `<p class="camera__Price">${data[index].price}</p>`
        mainElement.innerHTML += `<img class="camera__Picture">${data[index].imageUrl}</img>`
    }
}) 

// TEST : Style 

const albumId = response[0].albumId;
const id = response[0].id;
const thumbnailUrl = response[0].thumbnailUrl;
const title = response[0].title;
const url = response[0].url;

console.log(albumId);
console.log(id);
console.log(thumbnailUrl);
console.log(title);
console.log(url);
