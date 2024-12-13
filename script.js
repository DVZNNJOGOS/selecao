function startGame(game) {
  const portal = document.getElementById("portal");
  const container = document.querySelector(".container");

  // Adiciona a animação do portal
  portal.classList.add("animate");

  // Adiciona efeito de sugamento
  container.style.animation = "suction 1.5s forwards";

  // Redireciona após a animação
  setTimeout(() => {
    if (game === "subway") {
      window.location.href = "https://szhong.4399.com/4399swf//upload_swf/ftp38/liuxinyu/20220308/1/index.html";
    } else if (game === "devil") {
      window.location.href = "https://bitlifeonline.github.io/level-devil/";
    }
  }, 1500);
}

// Efeito de sucção nos ícones
const style = document.createElement("style");
style.innerHTML = `
@keyframes suction {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5) rotate(15deg);
  }
  100% {
    transform: scale(0) rotate(720deg);
    opacity: 0;
  }
}
.container {
  animation: none;
}
`;
document.head.appendChild(style);