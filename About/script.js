// El texto de presentación con el efecto de tipeo
const text = "Soy Lautaro, conocido en el mundo digital como Begdevs. Estoy dando mis primeros pasos en el emocionante universo del desarrollo full-stack. Mi viaje comenzó descubriendo python, y ahora estoy expandiendo mis habilidades para abarcar tanto el front-end como el back-end. Mi enfoque está en construir experiencias web impactantes y funcionales. Estoy perfeccionando mis habilidades en HTML y CSS, mientras exploro nuevas tecnologías y herramientas en el desarrollo web. Mi objetivo es combinar la estética con la funcionalidad para crear soluciones robustas y atractivas. Estoy entusiasmado por continuar aprendiendo y creciendo en esta carrera, y estoy abierto a nuevas oportunidades y desafíos. Gracias por visitar mi portafolio y conocer más sobre mi trabajo. ¡Espero que disfrutes explorando mis proyectos!";

// Selecciona el elemento donde se aplicará el efecto de tipeo
const typingEffect = document.getElementById('typing-effect');

// Función que aplica el efecto de tipeo
function typeText(text, element) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Ajusta la velocidad del efecto de tipeo aquí
        }
    }
    type();
}

// Llama a la función con el texto y el elemento objetivo
typeText(text, typingEffect);
