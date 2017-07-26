//selecionando o input
var campoFiltro = document.querySelector("#filtrar-tabela");

//adicionando escutador no input com a ação input e função anônima
campoFiltro.addEventListener("input", function () {

    console.log(this.value);

    //comparando o input com o array de pacientes
    var pacientes = document.querySelectorAll(".paciente");

    //se tem algo digitado,...
    if (this.value.length > 0) {

        for (var i = 0; i < pacientes.length; i++) {

            //seleciona o paciente iterado
            var paciente = pacientes[i];
            //seleciona o nome do paciente
            var tdNome = paciente.querySelector(".info-nome");
            //acessando o conteúdo da TD do paciente
            var nome = tdNome.textContent;
            
            //criando expressões regulares, parâmetro i = case insensitive
            var expressao = new RegExp(this.value, "i");
            

            if (!expressao.test(nome)) {
                //escondendo o paciente que for diferente criando a classe invisível no css também
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");

        }

    }
});
