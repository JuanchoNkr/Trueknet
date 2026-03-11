let trades = JSON.parse(localStorage.getItem("trades")) || []

function checkSession(){

let session = JSON.parse(localStorage.getItem("session"))

if(!session){
window.location.href="login.html"
}

}

function showUser(){

let user = JSON.parse(localStorage.getItem("session"))

document.getElementById("userName").innerText=user.name

}

function logout(){

localStorage.removeItem("session")

window.location.href="index.html"

}

function createTrade(){

let titulo=document.getElementById("titulo").value
let descripcion=document.getElementById("descripcion").value
let busca=document.getElementById("busca").value
let imagen=document.getElementById("imagen").value
let categoria=document.getElementById("categoria").value

let trade={
id:Date.now(),
titulo,
descripcion,
busca,
imagen,
categoria
}

trades.push(trade)

localStorage.setItem("trades",JSON.stringify(trades))

loadTrades()

}

function loadTrades(){

let container=document.getElementById("tradesContainer")

container.innerHTML=""

trades.forEach(t=>{

container.innerHTML+=`

<div class="card">

<img src="${t.imagen}">

<div class="card-body">

<h3>${t.titulo}</h3>

<p>${t.descripcion}</p>

<p class="busca">Busca: ${t.busca}</p>

<button onclick="viewProduct(${t.id})">Ver detalle</button>

</div>

</div>

`

})

}

function viewProduct(id){

localStorage.setItem("selectedProduct",id)

window.location.href="product.html"

}

function loadProduct(){

let id=localStorage.getItem("selectedProduct")

let product=trades.find(t=>t.id==id)

document.getElementById("productTitle").innerText=product.titulo
document.getElementById("productDescription").innerText=product.descripcion
document.getElementById("productExchange").innerText=product.busca
document.getElementById("productImage").src=product.imagen

}

function makeOffer(){

let offer=document.getElementById("offerInput").value

alert("Propuesta enviada: "+offer)

}

function filterCategory(cat){

let container=document.getElementById("tradesContainer")

container.innerHTML=""

trades
.filter(t=>cat==="todos"||t.categoria===cat)
.forEach(t=>{

container.innerHTML+=`

<div class="card">

<img src="${t.imagen}">

<div class="card-body">

<h3>${t.titulo}</h3>

<p>${t.descripcion}</p>

<button onclick="viewProduct(${t.id})">Ver detalle</button>

</div>

</div>

`

})

}
