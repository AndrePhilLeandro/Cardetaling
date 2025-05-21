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
    const Limpeza_tec = document.getElementById('limpeTec').checked;
    const polifarois = document.getElementById('polifa').checked;
    const odozizaçao = document.getElementById('odozizaçao').checked;
if(!nome|| !telefone){
    alert("Complete os Campos!");
    return;
}
if(telefone.length < 11 || telefone.length > 11){
alert("Numero de Telefone Invalido!");
return;
}

let mensagem = `Olá, meu nome é ${nome}\nAgendamento: ${data} \nHora:${hora}Hrs. \nServiços:\n`;
    if (polimento) mensagem += "- Polimento\n";
    if (cristalizacao) mensagem += "- Cristalização\n";
    if (higienizacao_interna) mensagem += "- Higienização Interna\n";
    if (higienizacao_bancos) mensagem += "- Higienização dos Bancos\n";
    if (vetrificacao) mensagem += "- Vitrificação\n";
    if (Limpeza_tec) mensagem += "- Limpeza técnica do motor\n";
    if (polifarois) mensagem += "- Polimento de faróis\n";
    if (odozizaçao) mensagem += "- Odorização e eliminação de odores\n";
    mensagem += `Meu telefone para contato: ${telefone}`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=55${telefone}&text=${mensagemCodificada}`;
    window.open(whatsappUrl, '_blank');
})
