// EJERCICIO 1
// Declara tres variables: una para tu nombre, otra para tu edad y otra para tu ciudad. 
// Luego, usa console.log para mostrar una frase que digao "Hola, mi nombre es _____, tengo _____ años y vivo en _____".
// Luego, haz un bloque if/else que verifique si la edad es igual o mayor a 18;
// - Si es que sí, imprime "Soy mayor de edad"
// - Si es que no, imprime "Soy menor de edad"
let nombre = "Fabio"
let edad = 19
let ciudad = "Madrid"
console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}`);
if (edad > 18) {
    console.log("Soy mayor de edad")
} else {
    console.log("Soy menor de edad")

}

// EJERCICIO 2
// Utiliza un bucle `while` para imprimir los cuadrados de los números del 1 al 10.
let resultado
for (let i = 0; i < 11; i++) {
    resultado = i * i;
    console.log(resultado)
}

// EJERCICIO 3
// Dado el HTML proporcionado, crea un evento (sólo 1) asociado al botón, que realice lo siguiente:
// - Sustituye el texto del parrafo 1 por "Texto cambiado"
// - Cambiar el color de letra del parrafo 2 por "red"
const parrafo1= document.querySelector('.parrafo1');
const parrafo2= document.querySelector('.parrafo2');
const boton= document.querySelector('.boton');

boton.addEventListener('click',()=>{


    parrafo1.textContent="Texto cambiado";
  parrafo2.style.color="red";




    });
