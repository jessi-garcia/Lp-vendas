document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simular envio de e-mail
        setTimeout(() => {
            form.reset();
            formMessage.classList.remove('hidden');
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        }, 1000);
    });
});

