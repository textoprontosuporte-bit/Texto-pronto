const onboarding = document.getElementById("onboarding");
const home = document.getElementById("home");
const modelos = document.getElementById("modelos");

function salvarOnboarding() {
  localStorage.setItem("onboarding", "ok");
  localStorage.setItem("produto", produto.value);
  localStorage.setItem("publico", publico.value);
  localStorage.setItem("tom", tom.value);
  mostrarHome();
}

function mostrarHome() {
  onboarding.classList.add("hidden");
  home.classList.remove("hidden");
}

function gerarTexto() {
  const produto = localStorage.getItem("produto");
  const publico = localStorage.getItem("publico");
  const tom = localStorage.getItem("tom");

  resultado.value =
    `Texto ${tom} para ${publico} sobre ${produto}. ` +
    `Use este conteúdo como apoio à sua comunicação.`;
}

function abrirModelos() {
  home.classList.add("hidden");
  modelos.classList.remove("hidden");
}

function voltarHome() {
  modelos.classList.add("hidden");
  home.classList.remove("hidden");
}

function resetarOnboarding() {
  localStorage.removeItem("onboarding");
  location.reload();
}

function excluirConta() {
  if (confirm("Deseja excluir sua conta e todos os dados?")) {
    localStorage.clear();
    location.reload();
  }
}

// MODELOS
const gratis = [
  "Legenda simples",
  "Mensagem de apresentação",
  "Post de engajamento"
];

const premium = [
  "Legenda que vende sem parecer vendedor",
  "WhatsApp para fechar venda",
  "Quebra de objeção de preço",
  "CTA forte e claro"
];

window.onload = () => {
  if (localStorage.getItem("onboarding") === "ok") {
    mostrarHome();
  }

  gratis.forEach(m => modelosGratis.innerHTML += `<li>${m}</li>`);
  premium.forEach(m => modelosPremium.innerHTML += `<li>${m} <span class="pro">PRO</span></li>`);
};
