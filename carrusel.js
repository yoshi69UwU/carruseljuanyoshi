// Inicializa el índice de la diapositiva y llama a la función para mostrar las diapositivas
let slideIndex = 0;
showSlides();

// Función para mostrar las diapositivas
function showSlides() {
  // Obtiene todas las diapositivas
  let slides = document.getElementsByClassName("slide");
  // Oculta todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // Incrementa el índice de la diapositiva y asegura que esté en rango
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  // Muestra la diapositiva actual
  slides[slideIndex-1].style.display = "block";  
  // Programa la función para que se ejecute de nuevo después de 2 segundos
  setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
  // Obtiene todas las diapositivas
  let slides = document.getElementsByClassName("slide");
  // Verifica si estamos en la última diapositiva
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  // Oculta todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // Incrementa el índice y muestra la siguiente diapositiva
  slideIndex++;
  slides[slideIndex-1].style.display = "block";  
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {
  // Obtiene todas las diapositivas
  let slides = document.getElementsByClassName("slide");
  // Verifica si estamos en la primera diapositiva
  if (slideIndex <= 1) {
    slideIndex = slides.length + 1;
  }
  // Oculta todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // Decrementa el índice y muestra la diapositiva anterior
  slideIndex--;
  slides[slideIndex-1].style.display = "block";  
}
