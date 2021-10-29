var nome = prompt("Qual o seu nome?") //coletar o nome do visitante
alert("Seja Bem Vindo, " + nome + "!") // utilizando nome coletado para concatenar uma saudação
var n1 = 38;
var n2 = Number.parseInt(prompt("Quantos anos você tem?"));
if (n2 < n1){
    alert("Tenho 38 anos, e zero problemas em ter um chefe mais novo que eu!")
}
else if (n2 == n1){
    alert("Será um prazer ter um chefe da minha idade");
}
else {
    alert("Tenho certeza de que aprenderei muito com sua experiência!");
}
var msg = document.getElementById('msg')
msg.innerText = "Olá " + nome + "! " + "Bem vindo ao meu curriculo";
msg.style.textAlign = 'center'
msg.style.fontSize = '32px'
msg.style.fontFamily = 'Arial'
msg.style.color = 'rgb(18, 29, 29);'
msg.style.textShadow = '2px 2px 1px rgb(189, 147, 147)'