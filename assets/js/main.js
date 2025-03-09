// main.js
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-menu a");
  
    // Función para marcar el enlace activo
    function setActiveLink() {
      let currentPosition = window.scrollY + 100; // Ajuste de offset
      navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (section) {
          if (
            section.offsetTop <= currentPosition &&
            section.offsetTop + section.offsetHeight > currentPosition
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    }
  
    // Evento scroll
    window.addEventListener("scroll", setActiveLink);
  });


  function openGallery(id) {
    document.getElementById(id).style.display = "flex";
  }
  
  function closeGallery(id) {
    document.getElementById(id).style.display = "none";
  }
  
  function openFullImage(src) {
    document.getElementById("fullImage").src = src;
    document.getElementById("fullImageModal").style.display = "flex";
  }
  
  function closeFullImage() {
    document.getElementById("fullImageModal").style.display = "none";
  }

  
  let images = []; // Lista de imágenes actuales
let currentIndex = 0; // Índice de la imagen actual

function openGallery(id) {
  const gallery = document.getElementById(id);
  images = Array.from(gallery.querySelectorAll("img")).map(img => img.src);
  currentIndex = 0;
  openFullImage(images[currentIndex]);
}

function openFullImage(src) {
  document.getElementById("fullImage").src = src;
  document.getElementById("fullImageModal").style.display = "flex";
  currentIndex = images.indexOf(src);
}

function closeFullImage() {
  document.getElementById("fullImageModal").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Vuelve al último si retrocede desde el primero
  } else if (currentIndex >= images.length) {
    currentIndex = 0; // Vuelve al primero si avanza desde el último
  }

  document.getElementById("fullImage").src = images[currentIndex];
}

// Permitir navegación con las flechas del teclado
document.addEventListener("keydown", function (event) {
  if (document.getElementById("fullImageModal").style.display === "flex") {
    if (event.key === "ArrowLeft") {
      changeImage(-1);
    } else if (event.key === "ArrowRight") {
      changeImage(1);
    } else if (event.key === "Escape") {
      closeFullImage();
    }
  }
});

// barra adapatable 
document.getElementById("open-menu").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.add("active");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.remove("active");
});
