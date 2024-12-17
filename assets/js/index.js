
let data = new Date();
const elementoData = document.getElementById("data_atual");

function atualizaData() {
    if (data.getDay() === 0) {
        data.setDate(data.getDate() + 1); 
    }

    elementoData.textContent = "Agenda: " + data.toLocaleDateString("pt-BR");
}

function verificaHorario() {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();

    const horaAlvo = 12; 
    const minutoAlvo = 5;


    if (hora === horaAlvo && minuto === minutoAlvo) {
        data.setDate(data.getDate() + 1);

        if (data.getDay() === 6) {
            alert("Domingo Estaremos Fechado!");
            data.setDate(data.getDate() + 1);
        }

        console.log("Data atualizada!");
        atualizaData();
    } else {
        console.log("Data não atualizada!");
    }
}
atualizaData();

setInterval(verificaHorario, 60000);
