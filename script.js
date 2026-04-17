document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtenemos los valores
            const name = document.getElementById('name').value;

            // Simulamos el envío de datos
            formResponse.textContent = `¡Gracias, ${name}! Tu mensaje ha sido enviado correctamente.`;
            formResponse.style.color = '#28a745'; // Color verde de éxito

            // Limpiamos el formulario después de 2 segundos
            setTimeout(() => {
                contactForm.reset();
            }, 2000);
        });
    }
});