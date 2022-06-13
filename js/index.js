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
const toggleAllElements = (elementos, clase) => {
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].classList.toggle(clase);
  }
};

var resultado = document.getElementById("resultadoTotal");
var cant = document.getElementById("inputCantidad");
var email = document.getElementById("inputEmail");
var firstName = document.getElementById("inputName");
var lastName = document.getElementById("inputLastName");
var category = document.getElementById("categoriaSelector");
var btnVerTicket= document.getElementById('btnReservar');
var btnSpinner = document.getElementById('btnSpinner');
var btnFinal = document.getElementById('btnTicketFinal');



function handleChangePrice() {
  let categoryValue =category.value
  let cantValue = cant.value;

  let total = 0;
  let descuento = 0;
  
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




function onSubmitTicketFinal() {
  let cod = firstName.value[0].toUpperCase() + cant.value + lastName.value[0].toUpperCase() + resultado.innerHTML;
//completo TicketFinal
  document.getElementById("firstName").innerHTML = firstName;
  document.getElementById("apellido").innerHTML = lastName;
  document.getElementById("cantTickets").innerHTML = cant;
  document.getElementById("finalPrice").innerHTML = resultado;
  document.getElementById("reservaCode").innerHTML = cod;

// after submit 

let btnClass= btnVerTicket.classList
let btnSpinnerClass = btnSpinner.classList
let btnFinalClass = btnFinal.classList
btnClass.add('d-none')
btnSpinnerClass.remove('d-none')

setTimeout(function() {
btnSpinnerClass.remove('d-none')
btnClass.remove('d-none')
btnSpinnerClass.add('d-none')
btnVerTicket.innerHTML= '¡Listo!'
btnClass.add('disabled')
}, 1500)

btnFinalClass.remove('disabled')
}

//NO FUNCIONA
function reset(){
  let btnClass= btnVerTicket.classList
  btnClass.remove('disabled')
  btnVerTicket.innerHTML= 'Reservar ticket'
  cant.value = ''
  email.value = ''
  firstName.value = ''
  lastName.value = ''
  category.value = ''
  resultado.value= ''
};


function beforeSubmit() {
let btnClass= btnVerTicket.classList
btnClass.add('disabled')
let firstNameValue=firstName.value.length
let lastNameValue=lastName.value.length
let emailValue=email.value.length

if(emailValue != 0 && firstNameValue != 0 && lastNameValue != 0 && cant.value > 0){
  btnClass.remove('disabled')
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

function handleSelectDiscount(id){
  category.value = id
  handleChangePrice()
}