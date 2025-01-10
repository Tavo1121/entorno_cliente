// let contador= 0;

// let valor=document.getElementById("value");


// if (valor<0) {
//     valor.style.color="red";
// } else if(valor>0) {
//     valor.style.color="green";
// }else{
//     valor.style.color="black";
// }

let count = 0; 
const valor = document.getElementById('value');
const decremento = document.querySelector('.decrease'); 
const resetear = document.querySelector('.reset'); 
const incremento = document.querySelector('.increase'); 
function actualizar() { 
    valor.innerText = count; 
    if (count < 0) { 
        valor.style.color = 'red';
    } else if (count > 0) { 
        valor.style.color = 'green';
    } else { valor.style.color = 'black'; 

    } } 
    decremento.addEventListener('click', () => {
        count--; actualizar(); 
    }); 
    incremento.addEventListener('click', () => { 
        count++; actualizar(); 
    }); 
    resetear.addEventListener('click', () => { 
        count = 0; actualizar(); 
    }); 
    actualizar(); 
