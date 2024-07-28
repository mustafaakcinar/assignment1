// Kodlar buraya yazılacak.

const header = document.querySelector(".header")

header.style.backgroundColor = "red"
header.style.color = "white"
header.style.padding = "1rem"
header.style.textAlign = "center"


const title = document.getElementById("title")
title.textContent = "Javascript Dom Assignment 1"

const navItem = document.querySelector(".nav-item")
navItem.style.display = "flex"
navItem.style.justifyContent = "center"
navItem.style.listStyleType = "none"
navItem.style.gap = "1rem"


const username = document.querySelector("#username")
const password = document.querySelector("#password")

username.value = "Poseidon"
password.setAttribute("value","123456")
username.disabled = true
password.setAttribute("type","text")
password.disabled = true

const btn = document.querySelector(".btn")
btn.style.backgroundColor = "orange"
btn.style.color = "black"
btn.style.padding = "0.8rem"
btn.style.borderRadius = "10%"
btn.style.border = "none"
btn.style.cursor = "pointer"
btn.innerHTML = "Giriş Yap"

const projects = document.getElementById("projects")
// const firstChild = projects.querySelector(":first-child") //* 1.yöntem
// const firstChild = projects.firstElementChild //* 2. yöntem
const firstChild = projects.children[0]
firstChild.textContent = "JS Dom Projects"

const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"]


const lastChild = projects.children[projects.children.length-1]

// * 1. yol appendChild
// myProjects.forEach((item)=> {
//     let newElement = document.createElement("li")
//     newElement.textContent = item
//     lastChild.appendChild(newElement)
// })

//* 2.yol innerHTML for döngüsüyle
// for(let item of myProjects){
// lastChild.innerHTML += `<li> ${item} </li>`
// }

// *  3. yol tek tek elle

lastChild.innerHTML = `<li> ${myProjects[0]} </li>` 
lastChild.innerHTML += `<li> ${myProjects[1]} </li>` 
lastChild.innerHTML += `<li> ${myProjects[2]} </li>` 
lastChild.innerHTML += `<li> ${myProjects[3]} </li>` 
lastChild.innerHTML += `<li> ${myProjects[4]} </li>` 



