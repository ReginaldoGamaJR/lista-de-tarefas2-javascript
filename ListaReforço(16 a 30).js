const prompt = require('prompt-sync')()
let questao = Number(prompt("Digite o número da questão(16 a 30): "))
switch (questao){
    case 16:
        let numeros = []
        for (let i = 0; i < 20; i++){
            numeros.push(parseInt((Math.random() * 100)))
        }
        console.log("Original: " + numeros)
        
        for (let i = 0; i < numeros.length - 1; i++) {
    let indiceMenor = i;

    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[j] < numeros[indiceMenor]) {
            indiceMenor = j;
        }
    }
    if (indiceMenor !== i) {
        let temp = numeros[i];
        numeros[i] = numeros[indiceMenor];
        numeros[indiceMenor] = temp;
    }
}

console.log("Ordenado:", numeros); 
case 17:
    console.log("Questão 17")
    let nomes = []
    let idades = []
    for (let i = 0; i < 9; i++){
        nomes.push(prompt("Digite o nome: "))
        idades.push(Number(prompt("Digite a idade: ")))
    }
    let menorDeIdade = []
    for (let i = 0; i < 9; i++){
        if (idades[i] < 18){
            menorDeIdade.push(nomes[i])
        }
    }
    console.log(`Os menores de idade são: ${menorDeIdade}`)
case 18:
    console.log("Questão 18")
    console.log("Registro do funcionário")
    let funcionario = {
        nome: prompt("Digite o nome do funcionário: "),
        cargo: prompt("Digite o cargo do funcionário: "),
        salario: parseFloat(prompt("Digite o salário do funcionário: "))
    };
    console.log("Dados do funcionário")
    console.log(`nome: ${funcionario.nome}`)
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
case 19:
    console.log("Questão 19")
    for (let i = 0; i < 5; i++){
        let horas,minuto,segundo;
        do {
            horas = Number(prompt(`Digite as horas (de 0 a 23) do horário ${i + 1}: `))
        } while (isNaN(horas) || horas < 0 || horas > 23);
        do {
            minuto = Number(prompt(`Digite os minutos (de 0 a 59) do horário ${i + 1}: `))
        } while(isNaN(minuto) || minuto < 0 || minuto > 59);
        do {
            segundo = Number(prompt(`Digite os segundos (de 0 a 59) do horário ${i + 1}: `))
        } while(isNaN(segundo) || segundo < 0 || segundo > 59);

        let hh = horas.toString().padStart(2, '0');
        let mm = minuto.toString().padStart(2, '0');
        let ss = segundo.toString().padStart(2, '0');

        console.log(`Horário ${i + 1}: ${hh}.${mm}.${ss}`);
    }
case 20:
    console.log("Questão 20")
    for ( let i = 0; i < 80; i++){
    let funcionarios = {
        matricula: Number(prompt("Digite a matrícula: ")),
        nome: prompt("Digite o nome: "),
        salarioBruto : Number(prompt("Digite o salário bruto: "))
    }
    console.log(`Matrícula: ${funcionarios.matricula}`);
    console.log(`Nome: ${funcionarios.nome}`);
    console.log(`Salário Bruto: R$${funcionarios.salarioBruto}`);
    console.log(`Dedução INSS: R$${((funcionarios.salarioBruto) * 0.12).toFixed(2)}`);
    console.log(`Salário líquido: R$${((funcionarios.salarioBruto) * 0.88).toFixed(2)}`);
    console.log("-----------------------------------------------------");
    }
case 21:
    console.log("Questão 21")
    function pesoIdeal(altura,sexo){
        if (sexo === "H"){
            return console.log(`O seu peso ideal é: ${(72.5 * altura - 58).toFixed(2)}`);
        } else if (sexo === "M"){
            return console.log(`O seu peso ideal é: ${(62.1 * altura - 44.7).toFixed(2)}`);
        }
    }
    let altura = Number(prompt("Digite a sua altura: "));
    let sexo = prompt("Digite o seu sexo (H ou M) : ").toLocaleUpperCase();
    pesoIdeal(altura,sexo);
case 22:
    console.log("Questão 22")
    
    function analisarPopulacao(){
        let somaSalario = 0;
        let filhosTotal = 0;
        let totalPessoas = 0;
        let maiorSalario = null;
        let pessoasMenor350 = 0;
        let continuar;
        do { 
            let salario = parseFloat(prompt("Digite o salário: "));
            let qtdDeFilhos = parseInt(prompt("Digite a quantidade de filhos: "));
            somaSalario += salario;
            filhosTotal += qtdDeFilhos;
            totalPessoas ++;

            if (maiorSalario === null || maiorSalario < salario){
            maiorSalario = salario;
            } 
            if (salario <= 350){
                pessoasMenor350++;
            }
            continuar = (prompt("Deseja continuar (Sim/Nao) ?  ")).toLocaleLowerCase().trim();

        } while (continuar !== "nao");
        
        let mediaSalario = somaSalario / totalPessoas;
        let mediaFilhos = filhosTotal / totalPessoas;
        let percentualPessoas350 = (pessoasMenor350 / totalPessoas) * 100;

        console.log(`A média salarial é: R$${(mediaSalario).toFixed(2)}`)
        console.log(`A média de filhos da população é: ${(mediaFilhos).toFixed(2)}`)
        console.log(`O maior salário é: R$${(maiorSalario).toFixed(2)}`)
        console.log(`O percentual de pessoas com salário abaixo de R$ 350.00 é: ${percentualPessoas350}%`) 
    }
    analisarPopulacao()
case 23:
    console.log("Questão 23")
    matriz = []
    for (let i = 0; i < 7; i++){
        matriz.push([0,0,0,0,0,0,0])
    }
    for (let i = 0; i< 7; i ++){
        for (let j = 0; j < 7; j++){
            if(i === j){
                matriz[i][j] = 1
            }
        }
    }
    console.table(matriz)
case 24:
    console.log("Questão 24")
    let matriza = eval(prompt("Digite uma matriz: "))
    let numerosNegativos = []
    for (let i = 0; i < matriza.length;i++){
        let numerosLinhaNegativos = []
        for(let j = 0; j < matriza[0].length;j++){
            if (matriza[i][j] < 0){
                numerosLinhaNegativos.push(matriza[i][j])
            }
        }
        numerosNegativos.push(numerosLinhaNegativos)
    }  
    console.table(numerosNegativos)
case 25:
    console.log("Questão 25")
    let matrizb = eval(prompt("Digite a matriz: "))
    let somaPorColuna = []
    for (let i = 0; i < matrizb[0].length; i++){
        let soma = 0
        for (let j = 0; j < matrizb.length;j++){
            soma += matrizb[j][i]
        }
        somaPorColuna.push(soma)
    }
    
    console.table(somaPorColuna)
case 26:
    console.log("Questão 26")
    let matrizc = eval(prompt("Digite a primeira matriz: "))
    let matrizd = eval(prompt("Digite a segunda matriz: "))
    let matrizMultiplicaçao= []
    for (let i = 0;i < matrizc.length;i++){
        matrizMultiplicaçao.push([0,0,0,0,0])
    }
    for (let i = 0; i < matrizc.length; i++){
        for (let j = 0; j < matrizc[0].length;j++)
            matrizMultiplicaçao[i][j] = matrizc[i][j] * matrizd[i][j]
    }
    console.table(matrizMultiplicaçao)
case 27:
    console.log("Questão 27")
    let matrize = eval(prompt("Digite uma matriz: "))
    let num = Number(prompt("Digite um número: "))
    let V = []
    for (let i = 0; i < matrize.length; i++ ){
        for (let j = 0; j < matrize[0].length; j++){
            V.push(matrize[i][j] * num)
        }
    }
    console.log(V)
case 28:
    console.log("Questão 28")
    matrizf = eval(prompt("Digite uma matriz: "))
    let somaAcima = 0
    let somaAbaixo = 0
    for (let i = 0; i < matrizf.length;i++){
        for (let j = i + 1; j < matrizf[0].length;j++){
            somaAcima += matrizf[i][j]
        }
    }
    for (let j = 0; j < matrizf[0].length;j++){
        for (let i = j + 1; i < matrizf.length;i++){
            somaAbaixo += matrizf[i][j]
        }
    }
    console.log(`A soma dos elementos acima da diagonal principal é: ${somaAcima}`)
    console.log(`A soma dos elementos abaixo da diagonal principal é: ${somaAbaixo}`)
case 29:
    console.log("Questão 29")
    let matrizg = eval(prompt("Digite uma matriz(5x5): "))
    let somaLinha4 = 0
        for (let j = 0; j < matrizg[0].length;j++){
            somaLinha4 += matrizg[3][j]
        }
    let somaColuna2 = 0
        for (let i = 0; i < matrizg.length;i++){
            somaColuna2 += matrizg[i][1]
        }
    let somaDiagonalPrincipal = 0
        for (let i = 0; i < matrizg.length;i++){
            somaDiagonalPrincipal += matrizg[i][i]
        }
    let somaTodosElementos = 0
    for (let i = 0; i < matrizg.length;i++){
        for (let j = 0; j < matrizg[0].length;j++){
            somaTodosElementos += matrizg[i][j]
        }
    }
    console.log(`A soma dos elementos da linha 4 é: ${somaLinha4}`)
    console.log(`A soma dos elementos da coluna 2 é: ${somaColuna2}`)
    console.log(`A soma dos elementos da diagonal principal é: ${somaDiagonalPrincipal}`)
    console.log(`A soma dos elementos da matriz é: ${somaTodosElementos}`)
    console.table(matrizg)
case 30:
    console.log("Questão 30")
    let matrizh = eval(prompt("Digite uma matriz (5x5): "))
    let sL = []
    let sC = []
    for (let i = 0; i < matrizh.length; i++){
        let somaLinha = 0
        for (let j = 0; j < matrizh[0].length; j ++){
            somaLinha += matrizh[i][j]
        }
        sL.push(somaLinha)
    }
    for (let j = 0; j < matrizh[0].length; j++){
        let somaColuna = 0
        for (let i = 0; i < matrizh.length; i++){
            somaColuna += matrizh[i][j]
        }
        sC.push(somaColuna)
    }
        console.table(matrizh)
        console.log(`Soma de cada linha da matriz: ${sL}`)
        console.log(`Soma de cada coluna da matriz: ${sC}`)
}