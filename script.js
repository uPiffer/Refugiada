
function salvar(){
  var email = document.getElementById("email").value
  var senha = document.getElementById("senha").value

  localStorage.setItem("user", email)
  localStorage.setItem("content", senha)
}

function enviar(){
  alert("Confira seu E-mail para continuar a troca de Senha")
}


function verificar(){
  var lemail = document.getElementById("lemail").value
  var lsenha = document.getElementById("lsenha").value
  if(lemail.length != 0 || lsenha.length !=0){
  alert("Bem vindo!")
  window.location.href = "org.html";
  }else if(lemail.length ==0 || lsenha.lenght ==0){
    alert("Ops, errou algo, tente novamente!")
  }
}