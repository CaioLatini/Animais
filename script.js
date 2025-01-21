let currentAudio = null; // Armazena a referência do áudio atual

function playSound(animalSound) {
    // Se já houver um áudio tocando, pare-o
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reseta o áudio para o começo
    }

    // Cria um novo áudio
    currentAudio = new Audio(`audio/${animalSound}`);
    currentAudio.play();
}

window.onload = function() {
    // Função para embaralhar a ordem dos cards
    function shuffleSections() {
        const main = document.querySelector('main');
        const sections = Array.from(main.querySelectorAll('section'));
        
        // Embaralha os elementos da lista
        for (let i = sections.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sections[i], sections[j]] = [sections[j], sections[i]]; // Troca os elementos
        }

        // Remove as sections existentes e adiciona as novas na ordem embaralhada
        sections.forEach(section => main.appendChild(section));
    }

    // Chama a função de embaralhamento quando a página é carregada
    shuffleSections();

    // Adiciona evento de clique às imagens
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.addEventListener("click", function () {
            const videoBanner = document.getElementById("videoBanner");
            const animalVideo = document.getElementById("animalVideo");
            const videoSource = animalVideo.querySelector("source");

            // Define a origem do vídeo com base no atributo alt da imagem
            const videoSrc = `videos/${this.alt.toLowerCase()}.mp4`;
            videoSource.src = videoSrc;

            // Carrega o vídeo e exibe o banner
            animalVideo.load();
            videoBanner.classList.remove("hidden");
        });
    });

    // Fecha o banner de vídeo
    document.getElementById("closeBanner").addEventListener("click", function () {
        const videoBanner = document.getElementById("videoBanner");
        const animalVideo = document.getElementById("animalVideo");

        videoBanner.classList.add("hidden");
        animalVideo.pause();
        animalVideo.currentTime = 0;
    });
};

console.log("Caminho do vídeo:", videoSrc);
