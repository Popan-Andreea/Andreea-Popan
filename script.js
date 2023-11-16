var button= document.getElementById("button")
var body=document.getElementById("body")
var nume=document.getElementById("nume")
var prenume=document.getElementById("prenume")
var img=document.getElementById("viitor")
var asteptari=document.getElementById("educatie")
var an=document.getElementById("annastere")

const d = new Date()
var year = d.getFullYear()

button.addEventListener("click", altaviata)
an.addEventListener("mouseover", displayAge)

function displayAge()
{
    an.innerHTML = year - an.innerHTML
}

function altaviata()
{
     nume.innerHTML = "Functie: Avocat"
     prenume.innerHTML = "Locul de munca: Tribunal"
     asteptari.inner.HTML = "Experiente: <ol><li>licenta</li><li>master</li></ol>"
     
     img.src= "2-matrix.jpg"
     

     body.style.backgroundColor= "green"
     bodu.style.color = "brown"

     img.style.opacity = "70%"
     img.style.borderWidth = "25px"
     img.style.width = "300px"
     img.style.height = "200px"
}