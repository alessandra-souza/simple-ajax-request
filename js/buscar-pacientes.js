//selecionando o botão buscar pacientes
var botaoAdicionar = document.querySelector("#buscar-pacientes");

//adicionando listener no botão
botaoAdicionar.addEventListener("click", function () {

    //XMLHttpRequest - objeto do js responsável por fazer requisições http
    var xhr = new XMLHttpRequest();

    //inicializando a requisição abrindo a conexão com o servidor buscado
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    //adicionando listener no xhr
    xhr.addEventListener("load", function () {
        
        //mensagem de erro ajax acima do botão buscar pacientes
        var erroAjax = document.querySelector("#erro-ajax");

        //capturando erros de requisição
        if (xhr.status == 200) {
            
            //esconde mensagem de erro ajax
            erroAjax.classList.add("invisivel");

            //acessando o texto do servidor buscado
            var resposta = xhr.responseText;

            //transformando JSON em objetos javascript
            var pacientes = JSON.parse(resposta);

            //adicionando os novos pacientes na tabela
            pacientes.forEach(function (paciente) {
                //chamando a função para adicionar pacientes na tabela
                adicionaPacienteNaTabela(paciente);
            });

        } else {
            
            //mostra mensagem de erro ajax
            erroAjax.classList.remove("invisivel");
            
        }

    });
    
    //enviando a requisição
    xhr.send();

});
