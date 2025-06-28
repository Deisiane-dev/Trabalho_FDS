const botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");
   botao.addEventListener("click", mostradescricao);
   function mostradescricao(){
    mensagem.innerHTML = "...Não sabia que era impossível. Foi lá e fez. Jean Cocteau";
   }