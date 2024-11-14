document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("resultado");
    const calculadora = document.getElementById("calculadora");

    function adicionar(valor) {
        display.value += valor;
    }

    function calcular() {
        try {
            display.value = eval(display.value); // Avalia a expressão matemática
        } catch (error) {
            display.value = "Erro"; 
        }
    }

    function limpar() {
        display.value = "";
    }

  
    function mudarCorDeFundo() {
        const cores = ["#ffffff", "#FFFF00", "#f0f8ff", "#faebd7", "#f5f5dc","#d3e9091a"];
        let corAtual = calculadora.style.backgroundColor;

        // Altera para a próxima cor
        let novaCorIndex = cores.indexOf(corAtual);
        novaCorIndex = (novaCorIndex + 1) % cores.length;
        calculadora.style.backgroundColor = cores[novaCorIndex];
    }

    
    document.querySelectorAll(".botao[data-value]").forEach(button => {
        button.addEventListener("click", function() {
            const valor = button.getAttribute("data-value");
            adicionar(valor);
        });
    });

    // Evento botão igual
    document.getElementById("igual").addEventListener("click", calcular);

    // Evento botão de limpar
    document.getElementById("limpar").addEventListener("click", limpar);

    //botão de mudar cor
    document.getElementById("mudarCor").addEventListener("click", mudarCorDeFundo);
});
