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

function handleChangePrice() {
  //categoria
  var value = document.getElementById("categoriaSelector").value;
  //cantidad de entradas
  var cant = document.getElementById("inputCantidad").value;

  var total = 0;
  var descuento = 0;
  switch (value) {
    case "1":
      total = cant * 200 - cant * (200 * 0.8);
      descuento = cant * (200 * 0.8);
      break;
    case "2":
      total = cant * 200 - cant * (200 * 0.5);
      descuento = cant * (200 * 0.5);
      break;
    case "3":
      total = cant * 200 - cant * (200 * 0.15);
      descuento = cant * (200 * 0.15);
      break;
  }

  document.getElementById("resultadoTotal").innerHTML = parseFloat(total);
  document.getElementById("descuento").innerHTML = parseFloat(descuento);
}

function onSubmitTicketFinal() {
  //variables
  var resultado = document.getElementById("resultadoTotal").innerHTML;
  var cant = document.getElementById("inputCantidad").value;
  var name = document.getElementById("inputName").value;
  var lastName = document.getElementById("inputLastName").value;
  var cod =
    name[0].toUpperCase() + cant + lastName[0].toUpperCase() + resultado;

  //completo TicketFinal
  document.getElementById("name").innerHTML = name;
  document.getElementById("apellido").innerHTML = lastName;
  document.getElementById("cantTickets").innerHTML = cant;
  document.getElementById("finalPrice").innerHTML = resultado;
  document.getElementById("reservaCode").innerHTML = cod;

  //chequeo
  console.log("nombre: " + name);
  console.log("apellido: " + lastName);
  console.log("cant: " + cant);
  console.log("codigo generado: " + cod);
  console.log("preciototal: " + resultado);
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
