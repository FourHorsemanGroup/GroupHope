const loginForm = document.querySelector("#login-form");
const cadastroForm = document.querySelector("#cadastro-form");
const cadastroButton = document.querySelector("#cadastro-button");

// Oculta o formulário de cadastro por padrão.
cadastroForm.style.display = "none";

// Adiciona um evento de clique ao botão de cadastro.
cadastroButton.addEventListener("click", function() {
  // Oculta o formulário de login.
  loginForm.style.display = "none";

  // Exibe o formulário de cadastro.
  cadastroForm.style.display = "block";
});