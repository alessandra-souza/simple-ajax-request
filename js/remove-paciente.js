//selecionando todas as TRs
var pacientes = document.querySelectorAll(".paciente");

//pacientes.forEach(function(paciente) {
//    //adicionando escuta de duplo clique
//    paciente.addEventListener("dblclick", function() {
//        console.log("Fui clicado com duplo clique.");
//        //removendo o paciente que foi clicado 2x
//        this.remove();
//    })
//})

//event boolean: a tabela ouve o evento e o filho dela remove
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    //event.target é o filho que foi clicado e parentNode é a tabela pai
    //event.target.parentNode.remove();

    //efeito para colocar um delay com a classe css criada
    event.target.parentNode.classList.add("fadeOut");

    //setTimeout executa com delay
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);
})
