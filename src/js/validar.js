const itemsDoForm = Array.from(document.querySelectorAll('.item'));
const botaoEnviar = document.getElementById("btn-enviar");

botaoEnviar.addEventListener("click", function (event) {


  itemsDoForm.forEach( (itemSelecionado) => {
    let valor = itemSelecionado.querySelector('.form1');
    let erroPreenchimento = itemSelecionado.querySelector('.texto-erro');

    
      if (valor.value) {
        valor.classList.remove("faltou-prencher");
        valor.classList.add("preenchido");

        erroPreenchimento.classList.add("tirar-erro");

      } else {

        valor.classList.remove("preenchido");
        valor.classList.add("faltou-prencher");

        erroPreenchimento.classList.remove("tirar-erro");

        event.preventDefault();

      }
   
  });
});