const prompt = require('prompt-sync')()
let sistemaHotel = {
    hoteis: [],
    reservas: []
}
let id = 1
function adicionarHotel(nome, cidade,quartosTotais){
    let hotel = {
        id: id,
        nome: null,
        cidade: null,
        quartosTotais: null,
        quartosDisponíveis: quartosTotais,
    }
    hotel.nome = nome;
    hotel.cidade = cidade;
    hotel.quartosTotais = quartosTotais;
    sistemaHotel.hoteis.push(hotel)
    id += 1
}
function buscarHotel(cidade){
    let hoteisNaCidade = []
    for (let hotel of sistemaHotel.hoteis){
        if(hotel.cidade === cidade){
            hoteisNaCidade.push(hotel.nome)
        }
    }
    if (hoteisNaCidade.length === 0){
        return console.log(`Não há hotéis na cidade ${cidade}`)
    }
    return console.log(hoteisNaCidade)
}
let id1 = 1;
function reservar(idHotel,nomeCliente){   
    let reserva = {
        idReserva: id1,
        nomeCliente: nomeCliente,
        idHotel: idHotel,
    }
    let hotelParaReservar;
    for (let hotel of sistemaHotel.hoteis){
        if (hotel.id === idHotel){
        hotelParaReservar = hotel
        }
    }
    if (hotelParaReservar === undefined){
        return console.log("ID do Hotel não existe")
    }
    if (hotelParaReservar.quartosDisponíveis === 0){
        return console.log(`Não temos quartos disponíveis para o hotel ${idHotel}`)
    } else {
        reserva.idReserva = id1
        id1++
        hotelParaReservar.quartosDisponíveis -= 1
        sistemaHotel.reservas.push(reserva)
        console.log("Hotel reservado com sucesso")
}}
function cancelarReserva(idReserva){
    let indiceDaReserva;
    indiceDaReserva = sistemaHotel.reservas.findIndex(reserva => reserva.idReserva === idReserva);
    if (indiceDaReserva === -1) {
    console.log("O ID da reserva não foi encontrado");
    return
    }
    let reservaParaCancelar = sistemaHotel.reservas[indiceDaReserva];
    let idHotelAssociado = reservaParaCancelar.idHotel
    let hotelEncontrado = null;
    for (let hotel of sistemaHotel.hoteis) {
        if (hotel.id === idHotelAssociado) {
            hotelEncontrado = hotel;
            hotelEncontrado.quartosDisponíveis += 1;
            break;
        }
    }
    sistemaHotel.reservas.splice(indiceDaReserva, 1);
    console.log(`A reserva ${idReserva} foi cancelada com sucesso!`);   
}
function listarReservas() {
    if (sistemaHotel.reservas.length === 0) {
        console.log("Nenhuma reserva encontrada no sistema.");
        return; 
    }
    console.log("--- Lista de Todas as Reservas ---");
    for (const reserva of sistemaHotel.reservas) {
        const hotelDaReserva = sistemaHotel.hoteis.find(hotel => hotel.id === reserva.idHotel);
        console.log(`\nReserva ID: ${reserva.idReserva}`);
        console.log(`  Cliente: ${reserva.nomeCliente}`);
        if (hotelDaReserva) {
            console.log(`  Hotel: ${hotelDaReserva.nome}`);
            console.log(`  Cidade: ${hotelDaReserva.cidade}`);
            console.log(`  Quartos Disponíveis no Hotel: ${hotelDaReserva.quartosDisponíveis}/${hotelDaReserva.quartosTotais}`);
        } else {
            console.log(`  Hotel: [HOTEL NÃO ENCONTRADO - ID: ${reserva.idHotel}]`);
        }
        console.log("---------------------------------");
    }
}
function mostrarHoteisComIds() {
    if (sistemaHotel.hoteis.length === 0) {
        console.log("Nenhum hotel cadastrado no sistema.");
        return; 
    }
    console.log("\n--- Hotéis Disponíveis (ID, Nome, Cidade) ---");
    for (const hotel of sistemaHotel.hoteis) {
        console.log(`ID: ${hotel.id} | Nome: ${hotel.nome} | Cidade: ${hotel.cidade}`);
    }
    console.log("------------------------------------------");
}
let sair;
do {
    console.log("-----------SISTEMA DE HOTEL DO REGINALDO---------------")
    console.log("1 - Adicionar um hotel ")
    console.log("2 - Buscar um hotel ")
    console.log("3 - Reservar um quarto ")
    console.log("4 - Cancelar uma reserva ")
    console.log("5 - Listar todas as reservas ")
    console.log("6 - Hotéis Disponíveis")
    console.log("-------------------------------------------------------")
    let escolha = parseInt(prompt("Digite o número da ação: "))
    switch (escolha) {
        case 1:
            let nome = prompt("Digite o nome do hotel: ")
            let cidade = prompt("Digite a cidade em que o hotel se localiza: ")
            let quartosTotais = parseInt(prompt("Digite a quantidade de quartos do hotel: "))
            adicionarHotel(nome,cidade,quartosTotais)
            console.log("Hotel adicionado ao sistema com sucesso")
            break
        case 2:
            let cidade1 = prompt("Digite a cidade em que desejas procurar os hotéis: ") 
            buscarHotel(cidade1)
            break
        case 3:
            let idHotel = parseInt(prompt("Digite o ID do hotel: "))
            let nomeCliente = prompt("Digite o nome da pessoa que está reservando o hotel: ")
            reservar(idHotel,nomeCliente)  
            break         
        case 4:
            let idReserva = parseInt(prompt("Digite o ID da reserva que desejas cancelar: "))
            cancelarReserva(idReserva)
            break
        case 5:
            listarReservas()
            break
        case 6:
            mostrarHoteisComIds()
    }
sair = prompt("Deseja continuar no menu (sim/nao)? ").trim().toLocaleLowerCase() 
} while ( sair != "nao")
console.log("-------------------SISTEMA FECHANDO--------------------")


