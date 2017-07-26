//selecionando e modificando o título da página
var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

//criando array com elements da mesma classe (.paciente)
var pacientes = document.querySelectorAll('.paciente');

//iterando nos elementos da mesma classe
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log('Peso inválido!');
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaEhValida) {
        console.log('Altura inválida!');
        alturaEhValida = false;
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');

    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

//função para calcular imc
function calculaImc(peso, altura) {
    //inicializa imc
    var imc = 0;
    //cálculo imc
    imc = peso / (altura * altura);
    //retorna imc com 2 casas decimais
    return imc.toFixed(2);
}

//função para validar peso
function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

//função para validar altura
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

//função para validar paciente
function validaPaciente(paciente) {
    
    //criando uma array para armazenar os erros
    var erros = [];
    
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco.");
    }
    
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco.");   
    }
    
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }
    
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco.");  
    } 
    
    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido.");
    }
    
    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida.");
    }
    
    //a função retorna a array erros
    return erros;
}

//função para exibir mensagens de erro
function exibeMensagemDeErro(erros) {
    
    //selecionando o elemento html que vai receber as mensagens de erro
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    //iterando na array erros para criar uma li para cada erro que surgir
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}


