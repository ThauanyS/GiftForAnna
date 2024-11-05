const img = document.querySelector(".content .kado");
const kata = document.querySelector(".content .kata");
const button = document.querySelectorAll(".content button");
const ctn = document.querySelector(".content");
const countdownText = document.getElementById("countdownText"); // Seleciona o texto da contagem regressiva

// Configuração da contagem regressiva para 25/12/2024
const targetDate = new Date("2024-12-25T00:00:00").getTime();

// Função de atualização da contagem regressiva
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownText.textContent = `🎀Tempo até estarmos juntinhas esse natal: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdownText.textContent = "Feliz Natal! 🎄✨";
    clearInterval(countdownInterval);
  }
}

// Função para o clique do botão
function clik(btn) {
  img.src = btn.textContent == "SIM 🤗" ? "img/eyes1.gif" : "img/eyes1.jpg";
  button[0].style.display = "none";
  ctn.style.height = "400px";
  ctn.style.width = "300px";
  kata.textContent = btn.textContent == "SIM 🤗" ? "tou" : "YOU!!!❤️";

  // Exibe a contagem regressiva após o clique
  countdownText.style.display = "block";
  
  // Inicia a atualização da contagem regressiva
  updateCountdown(); // Atualiza imediatamente
  countdownInterval = setInterval(updateCountdown, 1000);
}

function content() {
  ctn.style.width = "300px";
  ctn.style.height = "400px";
  ctn.style.borderRadius = "5px";
  kata.textContent = "Veja o que eu mais desejo para o natal🎁(e pro resto da vida pls)";
}

function pesanHilang() {
  const divpesan = document.querySelector("div.pesan");
  divpesan.style.display = "none";
  content();
  fullLayar();
  musik();
}

function fullLayar() {
  var elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

setTimeout(() => {
  const span = document.querySelector("div.pesan span");
  span.style.opacity = ".2";
  musik();
}, 1000);

function musik() {
  const msk = document.getElementById("lagu");
  msk.play();
  msk.loop = true;
}
setInterval(musik, 147000);

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * 100 + "vw";

  document.getElementById("snow").appendChild(snowflake);

  const duration = Math.random() * 3 + 2;
  snowflake.style.animationDuration = duration + "s";

  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });
}

setInterval(createSnowflake, 300);

// Função para verificar a senha
function verifyPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  const loginScreen = document.getElementById("loginScreen");

  // Defina a senha desejada
  const correctPassword = "annatonta";

  if (passwordInput === correctPassword) {
    loginScreen.style.display = "none"; // Oculta a tela de login
  } else {
    alert("Senha incorreta. Tente novamente.");
  }
}
