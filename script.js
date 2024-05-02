
let boton = document.getElementById("cambio")
boton.addEventListener('click', () => {
    
    if (document.getElementById("borde2").style.color == "white" && document.getElementById("borde2").style.backgroundColor == "slategray" ) {
        document.getElementById("borde2").style.backgroundColor = "lightblue"
        document.getElementById("borde2").style.color = "black"
        document.getElementById("borde").style.border = "1px solid black" 

        
        
    
    }else{
        document.getElementById("borde2").style.backgroundColor = "slategray"
        document.getElementById("borde2").style.color = "white"
        document.getElementById("borde").style.border = " 1px solid white"
    
        
         
       }
});



let boton2 = document.getElementById("boton2")

function mostrar() {
    

    swal("Estás seguro que quieres hacer esto?", {
        buttons: {
          cancel: "Cancelar",
          defeat: "Obvio microbio",
        },
      })
      .then((value) => {
       if (value == "defeat") {
        window.open("https://web.whatsapp.com");
       }
      });
}






