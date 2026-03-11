// =============================
// SESION
// =============================

function checkSession(){

let session = JSON.parse(localStorage.getItem("session"))

if(!session){
window.location.href="login.html"
}

}

function getUser(){
return JSON.parse(localStorage.getItem("session"))
}

function showUser(){

let user = getUser()

let element = document.getElementById("userName")

if(user && element){
element.innerText = user.name
}

}

function logout(){

localStorage.removeItem("session")

window.location.href="index.html"

}



// =============================
// TRUEQUES
// =============================

let trades = JSON.parse(localStorage.getItem("trades")) || []


function createTrade(){

let titulo = document.getElementById("titulo").value
let descripcion = document.getElementById("descripcion").value
let busca = document.getElementById("busca").value
let imagen = document.getElementById("imagen").value


let trade = {
titulo,
descripcion,
busca,
imagen
}

trades.push(trade)

localStorage.setItem("trades", JSON.stringify(trades))

loadTrades()

}


function loadTrades(){

let container = document.getElementById("tradesContainer")

if(!container) return

container.innerHTML=""

trades.forEach(t => {

container.innerHTML += `

<div class="card">

<img src="${t.imagen}">

<div class="card-body">

<h3>${t.titulo}</h3>

<p>${t.descripcion}</p>

<p class="busca">Busca: ${t.busca}</p>

</div>

</div>

`

})

}