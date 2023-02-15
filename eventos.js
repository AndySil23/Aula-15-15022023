let idade = prompt("Olá! qual a sua idade?");

alert("Entendi! você tem " + idade);

if (idade < 14) {
    alert("Você é uma criatura pirralhenta!");
} else if (idade < 18) {
    alert("Você é uma criatura aborrescente!");
} else if ( idade < 60) {
    alert("Você é uma criatura proletária!");
} else {
    alert("Você é uma criatura cacurenta!");
}
