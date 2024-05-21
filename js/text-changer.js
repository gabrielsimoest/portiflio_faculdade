// Array com os diferentes textos
const jobTitles = ["Desenvolvedor", "Designer", "Programador"];
let currentIndex = 0;

// Função para trocar o texto
function changeJobTitle() {
    const span = document.getElementById('jobTitle');
    span.textContent = jobTitles[currentIndex];
    currentIndex = (currentIndex + 1) % jobTitles.length; // Avança para o próximo índice
}

// Chama a função a cada 2 segundos
setInterval(changeJobTitle, 500);