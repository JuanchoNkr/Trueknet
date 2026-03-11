function register(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

let users = JSON.parse(localStorage.getItem("users")) || []

users.push({name,email,password})

localStorage.setItem("users",JSON.stringify(users))

alert("Usuario registrado")

window.location.href="login.html"

}

function login(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

let users = JSON.parse(localStorage.getItem("users")) || []

let user = users.find(u => u.email===email && u.password===password)

if(user){

localStorage.setItem("session",JSON.stringify(user))

window.location.href="dashboard.html"

}else{

alert("Credenciales incorrectas")

}

}
