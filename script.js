function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function enviarMensagem(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
}
