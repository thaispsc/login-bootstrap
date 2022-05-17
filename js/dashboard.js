const cadastrarModal = document.querySelector("#cadastrar-modal");
const alertaCadastrar = document.querySelector("#alerta");

cadastrarModal.onclick = (event) => {
  alertaCadastrar.style.display = "block";
  setTimeout(() => {
    alerta.style.display = "none";
}, 2000)
};
