var idade,nome 
var ipi
var anpi

idade = prompt("Insira sua idade")
nome = prompt("Digite seu nome")
var AnoNasc = 2023 - idade

if(idade % 2==0){
ipi="par"
}else{
    ipi="ímpar"
}

if(AnoNasc % 2==0){
anpi="par"
}else{
    anpi="ímpar"
}

console.log("Olá", nome, "você tem", idade, "anos, que é um número", ipi, "e nasceu em", AnoNasc,
 ",que é um número", anpi)

 if(idade>=18){
    console.log("A venda de bebidas alcoólicas está liberada.")
 }else{
    console.log("A venda de bebidas alcoólicas não está liberada.")
 }