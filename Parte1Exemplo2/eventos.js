let LadoA = prompt("Qual o lado A?");
let LadoB = prompt("Qual o lado B?");
let LadoC = prompt("Qual o lado C?");

if (LadoA == LadoB && LadoB == LadoC) {
    alert ("Mulher, teu triangulo é um equilatero!");
}
else if (LadoA != LadoB && LadoB != LadoC && LadoC != LadoA) {
    alert ("Mulher, teu triangulo é um iscaleno!");
}
else {
    alert ("Mulher, teu triangulo é um isoceles!");
}
