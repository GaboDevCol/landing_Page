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

let btn = document.getElementById("darkMode");

 //cambios en el contenedor
 let container = document.getElementsByClassName('container');

for(let i = 0; i < container.length; i++){
  container[i].style.boxShadow = "0 0 5px lightgreen inset, 0 0 10px lightgreen, 0 0 20px lightgreen";
  container[i].style.color = "green";
  container[i].style.borderRadius = "10px";
  container[i].style.border ="solid 1.5px green"
};

  //Cambiosen la clase product
  let product = document.getElementsByClassName('product');
  for( let j = 0; j < product.length; j++){
    product[j].style.boxShadow = "0 0 5px lightgreen inset, 0 0 10px lightgreen, 0 0 20px lightgreen";
    product[j].style.color = "green";
    product[j].style.borderRadius = "10px"
    product[j].style.border ="solid 1.5px green";
  };

   //Cambios en el cuerpo
  document.getElementById('body').style.background = "Black";

//cambio en los botones
let botones = document.getElementsByClassName('buy-button');
  for( let k = 0; k < product.length; k++){
    product[k].style.boxShadow = "0 0 5px lightgreen inset, 0 0 10px lightgreen, 0 0 20px lightgreen";
    product[k].style.color = "green";
    product[k].style.borderRadius = "10px"
    product[k].style.border ="solid 1.5px green"
    product[k].style.background ="transparent"
  };

//cambios en el botòn producto
let pro = document.getElementById('pro');
  pro.style.boxShadow = "0 0 5px lightgreen inset, 0 0 10px lightgreen, 0 0 20px lightgreen";
  pro.style.color = "green";
  pro.style.borderRadius = "10px";
  pro.style.border ="solid 1.5px green";
  pro.style.background ="transparent";

}); 










