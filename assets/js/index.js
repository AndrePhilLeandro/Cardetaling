/* Inicio mostrar data */
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
/* Final mostrar data */

/*  inicio capturar nome telefone serviços e enviar para o whatsapp */ 
document.getElementById('formServ').addEventListener('submit', async(event)=>{
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const data  = document.getElementById('data').value.trim();
    const hora = document.getElementById('horario').value.trim();
    const polimento = document.getElementById('polim').checked;
    const cristalizacao = document.getElementById('cris').checked;
    const higienizacao_interna = document.getElementById('higiEx').checked;
    const higienizacao_bancos = document.getElementById('higibanco').checked;
    const vetrificacao = document.getElementById('vetri').checked;

if(!nome|| !telefone){
    alert("Complete os Campos!");
    return;
}

let mensagem = `Olá, meu nome é ${nome}\nAgendamento: ${data} \nHora:${hora}Hrs. \nServiços:\n`;
    if (polimento) mensagem += "- Polimento\n";
    if (cristalizacao) mensagem += "- Cristalização\n";
    if (higienizacao_interna) mensagem += "- Higienização Interna\n";
    if (higienizacao_bancos) mensagem += "- Higienização dos Bancos\n";
    if (vetrificacao) mensagem += "- Vitrificação\n";
    mensagem += `Meu telefone para contato: ${telefone}`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5585999682093&text=${mensagemCodificada}`;
    window.open(whatsappUrl, '_blank');
})
/*  final capturar nome telefone serviços e enviar para o whatsapp */ 

