
//ESTE ES UN SITIO PARA CUALCULAR EL IVA 

function calcularIva (){
let numeroACalcular 
do{
  numeroACalcular = parseFloat(prompt("Ingrese el número al que quiera calcularle el IVA"));
} while (isNaN(numeroACalcular));

let ivaCalculo = numeroACalcular * 0.21;
alert("El IVA de su numero es " + ivaCalculo)
}

function preguntarSiSigue(){
    return prompt("Desea calcular otro numero? (si/no)").toLowerCase();
}

   calcularIva();
   let seguirCalculando = true;
   
   while(seguirCalculando){
       let respuesta = preguntarSiSigue();

     if(respuesta === "si"){
      calcularIva();
     } else if(respuesta === "no"){
      seguirCalculando = false;
     }
      else {
      alert("Por favor ingrese una respuesta valida")
      }
    }

alert("Gracias por utilizar el calculador de IVA");
      
    

