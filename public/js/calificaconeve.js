function calificarEvento(btn) {
    const evento = btn.parentElement;
    const calificacion = evento.querySelector('.calificacion');

    const valorCalificacion = prompt('Ingresa la calificación (1-5):');

    const valor = parseInt(valorCalificacion);
    if (!isNaN(valor) && valor >= 1 && valor <= 5) {
        calificacion.setAttribute('data-valor', valor);
        calificacion.textContent = 'Calificación: ' + '★'.repeat(valor) + '☆'.repeat(5 - valor);
    } else {
        alert('Por favor ingresa una calificación válida (1-5).');
    }
}
