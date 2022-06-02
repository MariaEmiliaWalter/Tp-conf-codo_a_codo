
(function () {
    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
      document.querySelector('.offcanvas-collapse').classList.toggle('mt-5')
      addMargin(margin,'mb-3')
    })
  })()

  margin=document.querySelectorAll('.offcanvas-collapse li.nav-item')
  
  // AF => para añadir a todos los elementos 
const addMargin = (elementos,clase) => {
    for (var i = 0; i < elementos.length; i++) {
        // añado a los elementos individuales
        elementos[i].classList.toggle(clase);
     }};
    
