



function calcularPrecio(precioBase, descuento){
    if(precioBase <=0 || descuento < 0 || descuento> 100){
        console.log("Los valores ingresados son invalidos")
      }
    
      if(descuento === 0 ){
        
        return precioBase 
      }
      if(descuento > 0 && descuento <= 100 ){
        let precioFinal = precioBase - (precioBase * descuento / 100);
         console.log("El precio final es: " + precioFinal);
        return precioFinal;

      }
   
  
}

let descuento = 2;
let precioBase = 1000;
let total = precioBase - descuento;
let precioFinal = calcularPrecio(precioBase, descuento)



