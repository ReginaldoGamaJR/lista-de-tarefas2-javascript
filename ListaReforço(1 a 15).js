const prompt = require('prompt-sync')()
let questao = Number(prompt("Digite o número da questão(0 a 15):  "))
switch (questao){
case 1 :
    console.log("Questão 1")
    console.log("Esse programa calcula quanto tempo de vida o usuário está perdendo ao utilizar cigarro: ")
    let cigarrosPorDia = Number(prompt("Digite a quantidade de cigarros fumados por dia: "))
    let anosFumando = Number(prompt("Digite a quantidade de anos que tem fumado: "))
    let minutosPerdidos = 10 * cigarrosPorDia * anosFumando * 365
    console.log("A quantidade de dias perdidos de vida é ", (minutosPerdidos/(60 * 24)).toFixed(2))
    break;
case 2:
    console.log("Questão 2")
        let velocidade = Number(prompt("Digite a velocidade do carro (Apenas os números): "))
    if (velocidade > 80){
        console.log("A multa será no valor de: ", (5 * (velocidade - 80)).toFixed(2), "R$")
        console.log("Essa multa é proporcional a quantidade de Km acima do limite de 80")
    } else{
        console.log("Sem multa, velocidade permitida!")
    }
    break;
case 3:
    console.log("Questão 3")
    console.log("Digite a distância que você deseja percorrer (Em números apenas): ")
    let distancia = Number(prompt())
    if(distancia < 200){
        console.log("O valor total é ", (0.5 * distancia).toFixed(2), "R$")
    } else{
        console.log("O valor total é ", (0.45 * distancia).toFixed(2), "R$")
    }
    break;
case 4:
    console.log("Questão 4")
    console.log("Digite o comprimento de 3 segmentos de retas:")
    let seg1 = Number(prompt())
    let seg2 = Number(prompt())
    let seg3 = Number(prompt())
    if (seg1 >= seg2 + seg3 || seg2 >= seg1 + seg3 || seg3 >= seg2 + seg1  ){
        console.log("Não é possível formar um triângulo")
    } else {
        console.log("É possível formar uma triângulo")
    }
    break;
case 5:
    console.log("Questão 5")
    function numerosAleatóriosInteiros (min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() *(max - min + 1)) + min
    }
    console.log("VAMOS JOGAR JoKenPO?")
    let jogadaUsuario = prompt("Qual a sua jogada (Tesoura, Papel ou Pedra) ? ")
    let jogadaDoComputador = numerosAleatóriosInteiros(1,3)
    if (jogadaDoComputador === 1){
        jogadaDoComputador = "Tesoura"
    } else if (jogadaDoComputador === 2){
        jogadaDoComputador = "Papel"
    } else if (jogadaDoComputador === 3){
        jogadaDoComputador = "Pedra"
    }
    let contagem = 3;

    let timer = setInterval(() => {
    console.log(contagem);
    contagem--;
    if (contagem === 2){
        console.log("Jo")
    } else if(contagem === 1){
        console.log("Ken")
    }else{
        console.log("PO!");
        if (jogadaUsuario === "Tesoura" && jogadaDoComputador === "Tesoura"){
            console.log(jogadaUsuario, " X ", jogadaDoComputador, " EMPATE!")
        } else if (jogadaUsuario === "Tesoura" && jogadaDoComputador === "Papel"){
            console.log(jogadaUsuario, " X ", jogadaDoComputador, " GANHOU!")
        } else if (jogadaUsuario === "Tesoura" && jogadaDoComputador === "Pedra"){
            console.log(jogadaUsuario, " X ", jogadaDoComputador, " PERDEU!")
        } else if (jogadaUsuario === "Papel" && jogadaDoComputador === "Tesoura"){
            console.log(jogadaUsuario, " X ", jogadaDoComputador, " PERDEU!")
        } else if (jogadaUsuario === "Papel" && jogadaDoComputador === "Papel"){
            console.log(jogadaUsuario, " X ", jogadaDoComputador, " EMPATE!")
        } else if (jogadaUsuario === "Papel" && jogadaDoComputador === "Pedra"){
            console.log(jogadaUsuario, " X ", jogadaDoComputador, " GANHOU!")
        } else if (jogadaUsuario === "Pedra" && jogadaDoComputador === "Tesoura"){
            console.log(jogadaUsuario, " X ", jogadaDoComputador, " GANHOU!")
        } else if (jogadaUsuario === "Pedra" && jogadaDoComputador === "Papel"){
            console.log(jogadaUsuario, " X ", jogadaDoComputador, " PERDEU!")
        } else if (jogadaUsuario === "Pedra" && jogadaDoComputador === "Pedra"){
            console.log(jogadaUsuario, " X ", jogadaDoComputador, " EMPATE!")
        } 
        clearInterval(timer); // Para a contagem
    }
    }, 1000); // Executa a cada 1000ms (1 segundo)
    break;
case 6:
    console.log("Questão 6")
    let valor = Math.floor(Math.random() * 5) + 1
    let resposta = Number(prompt("Chute um número de 1 a 5: "))
    while(resposta != valor){
        resposta = Number(prompt("Não foi dessa vez, tente novamente: "))
        if(resposta === valor) console.log("Acertou!")
        }
    break;
case 7:
    console.log("Questão 7")
    let carro = (prompt("Digite qual o tipo do carro (Popular ou Luxo) : "))
    carro = carro.toLowerCase()
    let dias = Number(prompt("Digite a quantidade de dias de aluguel: "))
    let kmPercorridos = Number(prompt("Digite a quantidade total de km percorridos (Somente em números): "))
    if (carro === "popular"){
        let preço = 0
        preço = 90 * dias
        if (kmPercorridos <= 100 ){
            preço += 0.2 * kmPercorridos
        } else{
            preço += 0.1 * kmPercorridos
        } 
        console.log("O valor total do aluguel é ", preço, "R$")

    } else if  (carro === "luxo") {
        let preço = 0
        preço = 150 * dias
        if (kmPercorridos <= 200){
            preço += 0.3 * kmPercorridos
        } else {
            preço += 0.25 * kmPercorridos
        } 
        console.log("O valor total do aluguel é ", preço, "R$")
    } else {
        console.log("Tipo de carro inexistente")
    }   
    break;
case 8:
    console.log("Questão 8")
    let horasDeExercicios = Number(prompt("Digite a quantidade de horas cheias de exercício no mês: "))
    let qtdDePontos = 0
    if (horasDeExercicios <= 10){
        qtdDePontos = 2 * horasDeExercicios
    } else if (horasDeExercicios > 10 && horasDeExercicios <= 20){
        qtdDePontos = 5 * horasDeExercicios
    } else {
        qtdDePontos = 10 * horasDeExercicios
    }
    console.log("Você fez ", qtdDePontos, "pontos, e vai receber um total de: ", qtdDePontos * 0.05, "R$")
break;
case 9:
    console.log("Questão 9")
    let salarioHomens = 0
    let salarioMulheres = 0
    let continuar = null
    do {
        let sexo = prompt("Qual o sexo do funcionário? (H para homens e M para mulheres) ")
        let salario = Number(prompt("Quanto esse funcionário ganha? "))
        sexo = sexo.trim().toUpperCase();
        if (sexo === "H") {
            salarioHomens += salario;
        }else if (sexo === "M") {
            salarioMulheres += salario;
        }else {
            console.log("Sexo inválido, digite H ou M.");
        }
        continuar = prompt("Deseja continuar? (Sim ou Nao) ")
        continuar = continuar.trim().toLowerCase()
    } while (continuar != "nao")
console.log(`O total de salários pagos aos homens é R$${salarioHomens}, e das mulheres é R$${salarioMulheres}`)
case 10:
    console.log("Questão 10")
    let soma = 0;
    let menor = null;
    let qtdDeNumeros = 0;
    let pares = 0;
    let continuar1 = null;
    do {
        let valor = Number(prompt("Digite um número: "));
        if (menor === null || valor < menor) {
            menor = valor;
        }
        if (valor % 2 === 0) {
            pares ++;
        }
        soma += valor;
        qtdDeNumeros++;
        continuar1 = prompt("Deseja continuar? (não utilize acentos) ");
        continuar1 = continuar1.trim().toLowerCase();
    } while (continuar1 != "nao")
        console.log(`A soma dos números é ${soma}`);
        console.log(`O menor valor é ${menor}`);
        console.log(`A média entre os valores é ${soma / qtdDeNumeros}`);
        console.log(`A quantidade de pares é ${pares}`);
case 11:
    console.log("Questão 11") 
    let primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "))
    let razao = Number(prompt("Digite a razão da sequência: "))
    for (let i = 0; i < 10; i++){
        console.log(primeiroTermo + razao * i)
    }
    let soma1 = (primeiroTermo + (primeiroTermo + razao * 9)) * 5
    console.log(`A soma da sequência é: ${soma1}` )
case 12:
    console.log("Questão 12")
    let v1 = 0
    let v2 = 1
    console.log(v1)
    console.log(v2)
    for (let i = 0; i < 8; i ++){
        let v3 = v2 + v1
        console.log(v3)
        v1 = v2
        v2 = v3    
    }
case 13:
    console.log("Questão 13")
    let sequenciaDeFibonacci = []
    let v11 = 0
    let v22 = 1
    sequenciaDeFibonacci.push(v11)
    sequenciaDeFibonacci.push(v22)
    for (let i = 0; i < 13; i ++){
        let v33 = v22 + v11
        sequenciaDeFibonacci.push(v33)
        v11 = v22
        v22 = v33  
    }
    console.log(sequenciaDeFibonacci)
case 14:
    console.log("Questão 14")
    let nomes = []
    for (let i = 0; i < 7; i++){
        let nome = prompt("Digite o nome: ")
        nomes.push(nome)
    }
    let nomesInvertidos = []
    for (let i = 0; i < 7; i++){
        nomesInvertidos.push(nomes[6-i])
    } 
    console.log(nomesInvertidos)
case 15:
    console.log("Questão 15")
    let numerosDigitados = []
    for(let i = 0; i < 10; i++){
        numerosDigitados.push(Number(prompt("Digite um número: ")))
    }
    for(let i = 0; i < 10; i++){
        if (numerosDigitados[i] % 2 === 0){
            console.log(`|${numerosDigitados[i]} é par e está no índice ${i}|`)
        }
    }
}