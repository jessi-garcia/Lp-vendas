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
function comprarPeloWhatsApp(produto) {
    var numero = '51985907028'; // Substitua pelo seu número de telefone
    var mensagem = 'Olá, estou interessado no ' + Meia calça;
    var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensagem);
    window.open(url, '_blank');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var mailtoLink = 'tcheimportacoes@gmail.com?subject=Contato&body=' +
        'Nome: ' + encodeURIComponent(name) + '%0A' +
        'Email: ' + encodeURIComponent(email) + '%0A' +
        'Cidade: ' + encodeURIComponent(city);
    window.location.href = mailtoLink;
});
