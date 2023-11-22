var button= document.getElementById("button")
var body= document.getElementById("body")
var nume=document.getElementById("nume")
var prenume=document.getElementById("prenume")
var poza=document.getElementById("poza")
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
     
     poza.src= "2-matrix.jpg"
     

     body.style.backgroundColor="#DDD2BB"
     body.style.color = "brown"

     poza.style.opacity = "70%"
     poza.style.borderWidth = "25px"
     poza.style.width = "300px"
     poza.style.height = "200px"
}