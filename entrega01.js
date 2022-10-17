let cupoCompra = 1500;
let valorGalleta = 60;
let valorRefresco = 200;
let valorVino = 800;

let usuario = prompt("Ingrese su nombre:");
let edad = Number(prompt("Ingrese edad:"));

let puedeComprarAlcohol = esMayor(edad);

while (cupoCompra > 0) {
  let compra = Number(
    prompt(
      `---Disponible para compra: $${cupoCompra}--- \n\n indique producto que desea comprar \n 1: Galleta \n 2: Refresco \n 3: Vino`
    )
  );

  let valorCompra = 0;

  if (compra == 1) {
    valorCompra = valorGalleta;
  } else if (compra == 2) {
    valorCompra = valorRefresco;
  } else if (compra == 3) {
    valorCompra = valorVino;
  } else {
    alert("Debe ingresar un valor correcto");
  }

  if (compra == 3 && puedeComprarAlcohol == false) {
    alert("No puede comprar alcohol, es menor de edad");
  } else {
    cupoCompra = cupoCompra - valorCompra;
  }
}

alert("Compra finalizada");

function esMayor(edad) {
  if (edad > 17) {
    return true;
  } else {
    return false;
  }
}
