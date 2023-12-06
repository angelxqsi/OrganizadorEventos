// Obtiene todas las preguntas
const questions = document.querySelectorAll('.faq h3');

questions.forEach(question => {
    // Agrega un evento clic a cada pregunta
    question.addEventListener('click', () => {
        // Encuentra la respuesta correspondiente
        const answer = question.nextElementSibling;

        // Si la respuesta está visible, la oculta; de lo contrario, la muestra
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
