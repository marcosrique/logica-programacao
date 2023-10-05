//console.log("Olá console!");

//document.write("Olá, documento!");

//window.alert("Olá janela?")


// Lógica de Programação
// Problema: Obeter 3 notas de um aluno, calcular a média,
// exibir a média e exibir a situação do aluno: aprovado,
// em exame ou reprovado.

function mediaAluno() {

    console.log("Início do programa");

   


    // cálculo da média

    nota1 = parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat (document.getElementById('nota2').value);
    nota3 = parseFloat (document.getElementById('nota3').value);

    const media = (parseFloat(nota1+nota2+nota3) / 3).toFixed(2);
    document.getElementById('resultado').innerHTML = 'A média do aluno  é: ' + media + '<br>';

    if (media >= 7) {
        document.getElementById('resultado').innerHTML += 'Situação: APROVADO';
    }

    if (media < 7 && media <=5) {
        document.getElementById('resultado').innerHTML += 'Situação: EXAME';
    } else {
        document.getElementById('resultado').innerHTML += 'Situação: REPROVADO';
    }

}    
