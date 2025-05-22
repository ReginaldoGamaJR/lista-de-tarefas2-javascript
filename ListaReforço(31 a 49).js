const prompt = require('prompt-sync')()
let questao = Number(prompt("Digite o número da questão(31 a 49): "))
switch (questao){
case 31:
        console.log("Questão 31")
        let matriz = eval(prompt("Digite uma matriz(30x30): "))
        let A = Number(prompt("Digite um número: "))
        let qtdIgualA = 0
        for (let linha of matriz){
            for (let x of linha){
                if (x === A){
                    qtdIgualA++
                }
            }
        }
        let novaMatriz = []
    for (let i = 0; i < matriz.length; i++) {
        let novaLinha = []
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === A){
                novaLinha.push("X")
            }
            if (matriz[i][j] !== A) {
                novaLinha.push(matriz[i][j])
            }
        }
        if (novaLinha.length > 0) {
            novaMatriz.push(novaLinha)
        }
    }
        console.log(`A quantidade de valores iguais a ${A} é: ${qtdIgualA}`)
        console.table(novaMatriz)
case 32:
    console.log("Questão 32")
    let matriza = eval(prompt("Digite uma matriz(12x13): "))
    let nova_matriz = []
    let maiorDaLinha = []
    
    for (let linha of matriza){
        let maior = linha[0]
        for (let x of linha){
            
            if (x > maior){
                maior = x
            }
        }
        maiorDaLinha.push(maior)
    }
    console.table(matriza)
    for (let i = 0; i < matriza.length;i++){
        nova_linha = []
        for (let j = 0; j < matriza[0].length;j++){
            nova_linha.push(Number((matriza[i][j] / maiorDaLinha[i]).toFixed(2)))
        }
        nova_matriz.push(nova_linha)
    }
    console.table(nova_matriz)
case 33:
    console.log("Questão 33")
    let matrizb = eval(prompt("Digite uma matriz(3x3): "))
    let somaDiagonalSecundaria = 0
    let qtdDeElementos = 0
    for (let i = 0; i < matrizb.length; i++){  
            somaDiagonalSecundaria += matrizb[i][matrizb.length - 1 - i]
            qtdDeElementos++
        
    }
    let mediaDiagonalSecundaria = (somaDiagonalSecundaria / qtdDeElementos).toFixed(2)   
    for (let i = 0; i < matrizb.length;i++){
        matrizb[i][i] *= mediaDiagonalSecundaria
    }
    console.table(matrizb)
case 34:
    console.log("Questão 34")
    let matrizc = eval(prompt("Digite uma matriz: "))
    let elementoDiagonalPrincipal = []
    for (let i = 0; i < matrizc.length;i++){
        elementoDiagonalPrincipal.push(matrizc[i][i])
    }
    let nova_matriz1 = []
    for (let i = 0; i < matrizc.length;i++){
        let nova_linha1 = []
        for (let j = 0; j < matrizc[0].length;j++){
            nova_linha1.push(matrizc[i][j] * elementoDiagonalPrincipal[i])
        }
        nova_matriz1.push(nova_linha1)
    }
    console.table(nova_matriz1)
case 35:
    console.log("Questão 35")
    let pares = []
    let impares = []
    for (let i = 0; i < 30; i++){
        let numero = Number(prompt(`Digite o valor ${i + 1}: `))
        if (numero % 2 === 0){
            pares.push(numero)
            if (pares.length === 5) {
                console.log(`Vetor de pares encheu: ${pares}`)
                pares = []
            }
        } else {
            impares.push(numero)
            if (impares.length === 5){
                console.log(`Vetor de ímpares encheu: ${impares}`)
                impares = []
            }
        }
    }
    if (pares.length > 0){
        console.log(`Pares restantes: ${pares}`)
    }
    if (impares.length > 0){
        console.log(`Ímpares restantes: ${impares}`)
    }
case 36:
    console.log("Questão 36")
    let gabarito = JSON.parse(prompt("Digite o vetor gabarito [x,x,x,x,x,x,x,x,x,x,x,x,x]: "))
    for (let i = 0; i < 100; i ++){
        let qtdDeAcertos = 0
        let resposta = JSON.parse(prompt(`Digite o vetor do apostador ${i + 1}`))
        for (let j = 0; j < 13;j++){
            if (resposta[j] === gabarito[j]){
                qtdDeAcertos++
            }
        }
        console.log(`O apostador número ${i + 1} acertou ${qtdDeAcertos} números`)
        if (qtdDeAcertos === 13){
            console.log(`Parabéns, tu és o ganhador!`)
        }     
    }
case 37:
    console.log("Questão 37")
    let G = JSON.parse(prompt("Digite o gabarito [x,x,x...x]:  "))
    for (let i = 0; i < 50;i++){
        let R = JSON.parse(prompt(`Digite a resposta do aluno ${i + 1}: `))
        let qtdDeAcertos1 = 0
        for (let j = 0; j < 20;j++){
            if (G[j] === R[j]){
                qtdDeAcertos1++
            }
        }
        if (qtdDeAcertos1 >= 12){
            console.log(`O aluno ${i + 1} acertou ${qtdDeAcertos1} questões e foi APROVADO`)
        } else {
            console.log(`O aluno ${i + 1} acertou ${qtdDeAcertos1} questões e foi REPROVADO`)
        }
    }
case 38:
    console.log("Questão 38")
    let vetor1 = JSON.parse(prompt("Digite o vetor com os 6 inteiros [a,b,c,d,e,f]: "))
    console.log("1 - Soma dos elementos")
    console.log("2 - Produto dos elementos")
    console.log("3 - Média dos elementos")
    console.log("4 - Ordenar")
    console.log("5 - Mostrar o vetor")
    let chave = prompt("Digite o número da operação desejada")
    switch (chave) {
        case "1":
            let soma = 0
            for (let i = 0; i < 6;i++){
                soma += vetor1[i]  
            }
            console.log(`A soma dos elementos do vetor é: ${soma}`)
            break
        case "2":
            let produto = 1
            for (let i = 0; i < 6;i++){
                produto *= vetor1[i]
            }
            console.log(`O produto dos elementos do vetor é: ${produto}`)
            break
        case "3":
            let soma1 = 0
            for (let i = 0; i < 6;i++){
                soma1 += vetor1[i]
            }
            let media = soma1 / 6
            console.log(`A média do vetor é: ${media}`)
            break
        case "4":
            console.log(vetor1.sort((A,b) => A - b))
            break
        case "5":
            console.log(vetor1)
            break
    }
case 39:
    console.log("Questão 39")
    let vetor2 = JSON.parse(prompt("Digite o vetor de 100 posições [x,x,x...x]: "))
    let vetor3 = []
    for (let i = 0; i < 100;i++){
        if (Number(vetor2[i]) > 0){
            vetor3.push(Number(vetor2[i]))
        }
    }
    console.log(vetor3)
case 40:
    console.log("Questão 40")
    let gabarito1 = JSON.parse(prompt("Digite o gabarito da loto [x,x,x,x,x]: "))
    for (let i = 0; i < 50; i++){
        let resposta3 = JSON.parse(prompt("Digite a resposta do apostador: "))
        let qtdDeAcertos2 = 0
        for (let j = 0; j < 5; j++){
            if (gabarito1[j] === resposta3[j]){
                qtdDeAcertos2++
            }
        }
        if (qtdDeAcertos2 === 5){
            console.log(`O apostador número ${i + 1} foi um Ganhador`)
        }
    }
case 41:
    console.log("Questão 41")
    let pessoa = {
        nome: "Reginaldo Gama Junior",
        idade: 22,
        email: "Reginaldojrgama@gmail.com"
    }
    console.log(pessoa.email)
case 42:
    console.log("Questão 42")
    let dados = {
    nome: "Reginaldo",
    idade: 22,
    notas: [10, 9.5, 10],
    hobbies: ["Programar", "leitura"],
    cidade: "Rio de Janeiro",
    valores: [100, 200]
    }
    function filtrarArrays(obj){
        let resultado = {}
        for (let chave in obj){
            if(Array.isArray(obj[chave])){
                resultado[chave] = obj[chave]
            }
        }     
        return resultado
    }
    console.log(filtrarArrays(dados))
case 43:
    console.log("Questão 43")
    let obj1 = JSON.parse(prompt("Digite as características do primeiro objeto: "))
    let obj2 = JSON.parse(prompt("Digite as características do segundo objeto: "))
    let obj3 = {}
    function unirObjetos(obj1,obj2){
        for (let chave in obj1){
            obj3[chave] = obj1[chave]
        }
       for (let chave in obj2){
            obj3[chave] = obj2[chave]
        }
        return obj3
    }  
    console.log(unirObjetos(obj1,obj2))
case 44:
    console.log("Questão 44")
    let objnovo = JSON.parse(prompt("Digite as características do objeto desejado: "))
    let qtdDeStrings = 0
    for (let chave in objnovo){
        if (typeof objnovo[chave] === "string"){
            qtdDeStrings++
        }
    }
    console.log(`Existem ${qtdDeStrings} propriedas em string nesse objeto`)
case 45:
    console.log("Questão 45")
    let vetor4 = JSON.parse(prompt("Digite o vetor de strings: "))
    let obj4 = {};
    for (let x of vetor4){
        if (obj4[x]){
            obj4[x]++
        } else{
            obj4[x] = 1;
        }
    }
    console.table(obj4)
case 46:
    console.log("Questão 46")
    let vendas = JSON.parse(prompt("Digite os objetos de vendas: "))
    let somaVendas = {}
    for (let x of vendas){
        if (somaVendas[x.vendedor]){
            somaVendas[x.vendedor] += x.valor
        } else{
            somaVendas[x.vendedor] = x.valor
        }
    }   
    console.table(somaVendas)
case 47:
    console.log("Questão 47")
    let obj5 = JSON.parse(prompt("Digite aqui o objeto que queres mudar: "));
    function Dobrar(x){
        return 2 * x
    }
    function MudarObjeto(entrada,funçaoTransformar){
        let objetoNovo = {};
        for (let x in entrada){
            let valorInicial = entrada[x];
            let valorTransformado = funçaoTransformar(valorInicial)
            objetoNovo[x] = valorTransformado
        }
        return objetoNovo
    }
    console.table(MudarObjeto(obj5, Dobrar))
case 48:
    console.log("Questão 48")
    let inventarioLojaA = JSON.parse(prompt("Digite o inventário da Loja A como um objeto: "))
    let inventarioLojaB = JSON.parse(prompt("Digite o inventário da Loja B como um objeto: "))
    function UnirInventarios(inv1,inv2){
        let inventarioUnido = {}
        for (let x in inv1){
            if(inventarioUnido[x]){
                inventarioUnido[x] += inv1[x]
            } else {
                inventarioUnido[x] = inv1[x]
            }
        }
        for (let x in inv2){
            if(inventarioUnido[x]){
                inventarioUnido[x] += inv2[x]
            } else {
                inventarioUnido[x] = inv2[x]
            }
        }
        return inventarioUnido
    }
    console.table(UnirInventarios(inventarioLojaA,inventarioLojaB))
case 49:
    console.log("Questão 49")
    let transaçoes = JSON.parse(prompt("Digite as transações financeiras: "))
    function transaçoesMudadas(objx){
        let novaTransaçao = {}
        for (let x of objx){
            if (novaTransaçao[x.categoria]){
                novaTransaçao[x.categoria].subtotal += x.valor
                novaTransaçao[x.categoria].transaçoes.push(x.id)
            } else {
                novaTransaçao[x.categoria] = { transaçoes: [], subtotal: 0 };  
                novaTransaçao[x.categoria].subtotal += x.valor
                novaTransaçao[x.categoria].transaçoes.push(x.id)
            }

        }
        return novaTransaçao
    }
    console.table(transaçoesMudadas(transaçoes))
}