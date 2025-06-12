document.addEventListener('DOMContentLoaded', () => {
  const memories = [
    { text: "Tudo começou com um sorriso… e desde então, o meu coração soube que era você.", image: "assets/images/foto1.jpeg" },
    { text: "Entre cafés, filmes e conversas bobas, encontrei nos pequenos momentos o meu lar ❤️", image: "assets/images/foto2.jpeg" },
    { text: "Nem sempre foi fácil, mas mesmo nas tempestades, você sempre foi meu abrigo 💞", image: "assets/images/foto3.jpeg" },
    { text: "Neste Dia dos Namorados, só tenho um pedido: que a gente nunca pare de escrever essa linda história", image: "assets/images/love4.jpeg" },
    { text: "Só sei que te amo mais a cada dia 💖🌟", image: "assets/images/video.mp4" }
  ];

  let currentIndex = -1;

  const textElement = document.getElementById('memoryText');
  const imageElement = document.getElementById('memoryImage');
  const videoElement = document.getElementById('memoryVideo');
  const mediaContainer = document.querySelector('.media-container');
  const buttonElement = document.getElementById('nextMemoryBtn');
  const jsConfetti = new JSConfetti();

  buttonElement.addEventListener('click', () => {
    currentIndex++;

    // Último frame (surpresa final)
    if (currentIndex >= memories.length) {
      textElement.innerHTML = "✨ Que venham muitas memórias novas! Te amo! 💕<br><br><img src='https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif' style='width: 180px; border-radius: 12px; margin-top: 1rem;'>";
      imageElement.style.display = "none";
      imageElement.src = "";
      videoElement.style.display = "none";
      videoElement.src = "";
      mediaContainer.style.display = "none";
      buttonElement.style.display = "none";

      jsConfetti.addConfetti({
        emojis: ['💖', '💘', '💕', '❤️', '🥰', '💌'],
        confettiRadius: 6,
        confettiNumber: 80,
      });

      return;
    }

    const memory = memories[currentIndex];
    const isVideo = memory.image.endsWith('.mp4');

    textElement.textContent = memory.text;
    mediaContainer.style.display = "flex";

    if (isVideo) {
      imageElement.style.display = "none";
      imageElement.src = "";
      videoElement.style.display = "block";
      videoElement.src = memory.image;
      videoElement.load();
      videoElement.play();
    } else {
      videoElement.pause();
      videoElement.style.display = "none";
      videoElement.src = "";
      imageElement.style.display = "block";
      imageElement.src = memory.image;
    }

    jsConfetti.addConfetti({
      emojis: ['💖', '💘', '💕', '❤️', '🥰', '💌'],
      confettiRadius: 5,
      confettiNumber: 60,
    });
  });

  // Música de fundo
  const music = document.getElementById('musicAudio');
  music.volume = 0.5;
  music.play().catch(() => {
    console.log("Reprodução automática bloqueada. O usuário precisa interagir.");
  });
});