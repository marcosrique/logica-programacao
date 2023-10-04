//console.log("Olá console!");

//document.write("Olá, documento!");

//window.alert("Olá janela?")


// Lógica de Programação
// Problema: Obeter 3 notas de um aluno, calcular a média,
// exibir a média e exibir a situação do aluno: aprovado,
// em exame ou reprovado.

console.log("Início do programa");

// declaração de variáveis

let nota1, nota2, nota3;


// cálculo da média

nota1 = parseFloat (prompt("Digita a primeira nota do aluno:"));
nota2 = parseFloat (prompt("Digita a segunda nota do aluno:"));
nota3 = parseFloat (prompt("Digita a terceira nota do aluno:"));

const media = parseFloat(nota1+nota2+nota3) / 3;
const media_p = media.toFixed(2)

if (media <= 5)
    
    alert("Reprovado com média: " + media_p);
else
    alert("Aprovado com média: " + media_p);
