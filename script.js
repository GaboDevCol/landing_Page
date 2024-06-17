$(document).ready(function () {
  // Smooth scrolling para los enlaces internos
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  // Envío del formulario de contacto (simulado)
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    //podemos agregar la logica para enviar el form

    alert("¡Formulario enviado correctamente!");
    $(this)[0].reset();
  });
});

let btn = document.getElementById("toggle-dark-mode");

btn.addEventListener('click', ()=>{
  //cambios en el contenedor
 let container = document.getElementsByClassName('container');
container.forEach(elemento => {
  elemento.style.boxShadow = "0 0 5px green inset, 0 0 10px green, 0 0 20px green";
  elemento.color = "lightgreen";
});

  //Cambiosen la clase product
  let product = document.querySelectorAll(.'product');
  product.forEach(producto =>{
    producto.style.boxShadow = "0 0 7px green inset, 0 0 15px green, 0 0 25px green";
  });
   //Cambios en el cuerpo
  document.getElementById('body').style.background = "Black";
})









