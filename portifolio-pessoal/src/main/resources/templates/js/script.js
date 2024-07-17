document.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 60) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const boxesProjects = document.querySelector('.project-slide');

let index = 0;

function updateCarousel() {
    const offset = -index * (325 + 20); // Largura dos itens + o espaço entre eles
    boxesProjects.style.transform = `translateX(${offset}px)`;
}

function updateButtons() {
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index >= 2; // 2 porque você tem 3 itens e só pode avançar 2 vezes
}

nextBtn.addEventListener('click', () => {
    if (index < 2) { // Pode avançar 2 vezes
        index++;
        updateCarousel();
        updateButtons();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) { // Começar do início
        index--;
        updateCarousel();
        updateButtons();
    }
});

// Inicializa o carrossel e os botões
updateButtons();

// Adiciona um listener para verificar se a tela é menor e atualizar o carrossel
window.addEventListener('resize', () => {
    updateCarousel();
});

// Inicializa o AOS
AOS.init({
    duration: 1000, // Duração da animação em milissegundos
    easing: 'ease-in-out', // Tipo de easing
});

function sendEmail() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, message })
    })
    .then(response => response.text())
    .then(data => {
        alert('Email enviado com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}