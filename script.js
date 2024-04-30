
let boton = document.getElementById("cambio")
boton.addEventListener('click', () => {
    
    if (document.getElementById("borde2").style.color == "lightblue" && document.getElementById("borde2").style.backgroundColor == "slategray") {
        document.getElementById("borde2").style.backgroundColor = "lightblue"
        document.getElementById("borde2").style.color = "slategray"
        document.getElementById("borde").style.border = "1px solid black" 
        
    
    }else{
        document.getElementById("borde2").style.backgroundColor = "slategray"
        document.getElementById("borde2").style.color = "lightblue"
        document.getElementById("borde").style.border = " 1px solid white"
         
    }
});







