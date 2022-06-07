(function () {
  "use strict";

  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
      document.querySelector(".offcanvas-collapse").classList.toggle("mt-5");
      toggleAllElements(margin, "mb-3");
    });
})();

var margin = document.querySelectorAll(".offcanvas-collapse li.nav-item");

//Añade a todos los elementos de esa clase
const toggleAllElements = (elementos, clase) => {
  for (var i = 0; i < elementos.length; i++) {
    // añado a los elementos individuales
    elementos[i].classList.toggle(clase);
  }
};

var resultado = document.getElementById("resultadoTotal");
var cant = document.getElementById("inputCantidad");
var email = document.getElementById("inputEmail");
var firstName = document.getElementById("inputName");
var lastName = document.getElementById("inputLastName");
var category = document.getElementById("categoriaSelector");

function handleChangePrice() {

  let categoryValue =category.value
  let cantValue = cant.value;

  var total = 0;
  var descuento = 0;
  switch (categoryValue) {
    case "1":
      total = cantValue * 200 - cantValue * (200 * 0.8);
      descuento = cantValue * (200 * 0.8);
      break;
    case "2":
      total = cantValue * 200 - cantValue * (200 * 0.5);
      descuento = cantValue * (200 * 0.5);
      break;
    case "3":
      total = cantValue * 200 - cantValue * (200 * 0.15);
      descuento = cantValue * (200 * 0.15);
      break;
  }

  resultado.innerHTML = parseFloat(total);
  document.getElementById("descuento").innerHTML = parseFloat(descuento);
}



// var btn= document.getElementById('btnReservar').innerHTML;
// do{btn.classList.add('disabled')}
// while(email.length()==0);





function onSubmitTicketFinal() {
  var cod = firstName[0].value.toUpperCase() + cant.value + lastName[0].value.toUpperCase() + resultado.innerHTML;
//completo TicketFinal
  document.getElementById("firstName").innerHTML = firstName;
  document.getElementById("apellido").innerHTML = lastName;
  document.getElementById("cantTickets").innerHTML = cant;
  document.getElementById("finalPrice").innerHTML = resultado;
  document.getElementById("reservaCode").innerHTML = cod;

// after submit 
//cambiar button => spin => ¡listo!   
// ambos buttons => toggle con class display hidden. 
}


function beforeSubmit() {
var btn= document.getElementById('btnReservar').classList
btn.add('disabled')
let firstNameValue=firstName.value.length
let lastNameValue=lastName.value.length
let emailValue=email.value.length

if(emailValue != 0 && firstNameValue != 0 && lastNameValue != 0 && cant.value > 0){
  btn.remove('disabled')
  }
 
}


function imprimir(id) {
  var printResumen = document.getElementById(id).innerHTML;
  w = window.open();
  w.document.write(printResumen);
  w.document.close();
  w.focus();
  w.print();
  w.close();
  return true;
}

function reservar(){
  // var btn= document.getElementById('btnReservar').innerHTML
  // do{
  //   btn.classList.remove('diseable')
  // }
  // while (resultado.length()!==0 && cant.length()!==0 && firstName.length()!==0 && lastName.length()!==0 && cod.length()!==0)


// <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
//             <span class="visually-hidden">Loading...</span>

}
