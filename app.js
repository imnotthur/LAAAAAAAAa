const saudacao = document.getElementById("saudacao");
const frase = document.getElementById("frase");
const icone = document.getElementById("icone");

const frasesManha = [
    "Bom dia!",
    "Eu sei que já tá quase na tua hora, mas aceita um recado deste jovem lobo sonhador?"];
const frasesTarde = [
    "Boa tarde!",
    "Que essa tarde seja cheia de cores."];
const frasesNoite = [
    "Boa noite!",
    "Embora não seja está a nossa ultima noite, nem a melhor das despedidas",
    "Mas aceite o recado  deste escorpiano"];

function atualizarSaudacao() {
    const hoje = new Date();
    const hora = hoje.getHours();
    let msgSaudacao, imgFundo, imgIcone, fraseDoMomento;

    if (hora >= 5 && hora < 12) {
        msgSaudacao = "Bom dia!";
        imgFundo = "url(bondia.jpg)";
        imgIcone = "jaotarde.png";
        fraseDoMomento = frasesManha;

    } else if (hora >= 12 && hora < 18) {
        msgSaudacao = "Boa tarde!";
        imgFundo = "url(batarde.jpg)";
        imgIcone = "goodafter.png";
        fraseDoMomento = frasesTarde;

    } else {
        msgSaudacao = "Boa noite!";
        imgFundo = "url(banoite.jpg)";
        imgIcone = "jaotarde (1).jpg";
        fraseDoMomento = frasesNoite;
    }
    saudacao.textContent = msgSaudacao;
    document.body.style.backgroundImage = imgFundo;
    icone.src = imgIcone;
    const randomIndex = Math.floor(Math.random() * fraseDoMomento.length);
    frase.textContent = fraseDoMomento[randomIndex];
}
atualizarSaudacao();
setInterval(atualizarSaudacao, 8000);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log("Service Worker registrado"))
        .catch(err => console.log("Erro no Service Worker:", err));
}





