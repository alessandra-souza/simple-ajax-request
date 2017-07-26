
//escutando o botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    
    //previne o comportamento padrão do btn
    event.preventDefault();
    
    //selecionando o form
    var form = document.querySelector("#form-adiciona");
    
    //acessando os inputs através da propriedade name
    var paciente = obtemPacienteDoFormulario(form);
    

    
    //adicionando a validação do paciente
    var erros = validaPaciente(paciente);
    
    if (erros.length > 0) {
        
        //chamando a função para exibir mensagens de erros
        exibeMensagemDeErro(erros);
        
        //return vazio para sair da função
        return;
    }
    
    adicionaPacienteNaTabela(paciente);
    
    //limpando o form com reset
    form.reset();
    
    //limpando as mensagens de erro ao adicionar paciente
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
    
});


function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}


//função para montar TR recebe objeto paciente
function montaTr(paciente) {
    //criando TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //criando TDs e adicionando na TR
    pacienteTr.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTD(paciente.imc, "info-imc"));
    //retorna a TR
    return pacienteTr;
}

//função para montar TD recebe dado + classe e retorna objeto montado
function montaTD(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

//função para adicionar pacientes na tabela, depois da XMLHttpRequest
//recebe um objeto javascript para montar a tabela
function adicionaPacienteNaTabela(paciente) {
    //criando elemento tr
    var pacienteTr = montaTr(paciente);
    //adicionando a tr na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

