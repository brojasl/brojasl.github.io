let currentIndex = 0;

function moveSlide(step) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  
  currentIndex = (currentIndex + step + totalItems) % totalItems;
  const newTransform = -currentIndex * 100;
  
  document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sugerencias-form');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const sugerencia = document.getElementById('sugerencia').value;

        if (nombre && sugerencia) {
            feedback.innerHTML = `<p>Gracias, ${nombre}, por tu sugerencia: "${sugerencia}"</p>`;
            form.reset();
        } else {
            feedback.innerHTML = '<p>Por favor, completa todos los campos del formulario.</p>';
        }
    });
});


const textsContainer = document.querySelector('.carousel-texts');
const texts = document.querySelectorAll('.text');
let currentIndex = 0;

function showNextText() {
  currentIndex = (currentIndex + 1) % texts.length; // Avanza al siguiente texto
  const offset = -currentIndex * 100; // Calcula el desplazamiento
  textsContainer.style.transform = `translateX(${offset}%)`;
}

// Cambia el texto cada 3 segundos
setInterval(showNextText, 3000);

