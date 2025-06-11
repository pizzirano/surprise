const memories = [
    {
      image: "assets/images/love.jpeg",
      text: "Nossa primeira viagem juntos 🧳✨"
    },
    {
      image: "assets/images/love2.jpeg",
      text: "Aquele domingo de preguiça vendo filmes 🍿❤️"
    },
    {
      image: "assets/images/foto3.jpg",
      text: "Quando rimos tanto que até choramos 😂💞"
    },
    {
      image: "assets/images/love4.jpg",
      text: "Nosso aniversário de namoro 💐🎉"
    },
    {
      image: "assets/images/video.mp4",
      text: "Só sei que te amo mais a cada dia 💖🌟"
    }
  ];
  
  let currentIndex = 0;
  
  const textElement = document.getElementById('memoryText');
  const imageElement = document.getElementById('memoryImage');
  const videoElement = document.getElementById('memoryVideo');
  const buttonElement = document.getElementById('nextMemoryBtn');
  const jsConfetti = new JSConfetti();
  
  buttonElement.addEventListener('click', () => {
    if (currentIndex < memories.length) {
      const memory = memories[currentIndex];
      const isVideo = memory.image.endsWith('.mp4');
  
      textElement.textContent = memory.text;
  
      if (isVideo) {
        imageElement.style.display = "none";
        videoElement.style.display = "block";
        videoElement.src = memory.image;
        videoElement.load();
        videoElement.play();
      } else {
        videoElement.pause();
        videoElement.style.display = "none";
        imageElement.style.display = "block";
        imageElement.src = memory.image;
      }
  
      jsConfetti.addConfetti();
      currentIndex++;
    } else {
      textElement.textContent = "✨ Que venham muitas memórias novas! Te amo! 💕";
      imageElement.style.display = "none";
      videoElement.style.display = "none";
      buttonElement.style.display = "none";
      jsConfetti.addConfetti();
    }
  });
  
  window.onload = () => {
    const music = document.getElementById('musicAudio');
    music.volume = 0.5;
    music.play().catch(() => {
      console.log("Reprodução automática bloqueada. O usuário precisa interagir.");
    });
  };