/*
JOGO DA VELHA
*/

let botaoJaJogado = [];
let im1 = 0;
let im2 = 0;
let im3 = 0;
let im4 = 0;
let im5 = 0;
let im6 = 0;
let im7 = 0;
let im8 = 0;
let im9 = 0;
let imPC1 = 0;
let imPC2 = 0;
let imPC3 = 0;
let imPC4 = 0;
let imPC5 = 0;
let imPC6 = 0;
let imPC7 = 0;
let imPC8 = 0;
let imPC9 = 0;
let pontosJog = 0;
let pontosCPU = 0;
let rodada = 1;
let empateJog =0;
let empateCPU =0;

function fazerLogin() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if (usuario == 'natacha' && senha == 'cesupa') {
        document.getElementById('areaJogo').style.display = 'flex';
        document.getElementById('telaLogin').style.display = 'none';
        document.getElementById('audio').src = "midia/AlertClock20.mp3";
    } else {
        alert("Informações de login erradas");
    }
}

function fazerJogada1() {
    document.getElementById('botIm1').src = "xis.png";
    document.getElementById('bot1').disabled = true;
    document.getElementById('bot1').style.cursor = 'default';
    botaoJaJogado.push(0);
    im1 = 1;
    empateJog++;
    jogadaCPU();
}
function fazerJogada2() {
    document.getElementById('botIm2').src = "xis.png";
    document.getElementById('bot2').disabled = true;
    document.getElementById('bot2').style.cursor = 'default';
    botaoJaJogado.push(1);
    im2 = 1
    empateJog++;
    jogadaCPU();
}
function fazerJogada3() {
    document.getElementById('botIm3').src = "xis.png";
    document.getElementById('bot3').disabled = true;
    document.getElementById('bot3').style.cursor = 'default';
    botaoJaJogado.push(2);
    im3 = 1;
    empateJog++;
    jogadaCPU();
}
function fazerJogada4() {
    document.getElementById('botIm4').src = "xis.png";
    document.getElementById('bot4').disabled = true;
    document.getElementById('bot4').style.cursor = 'default';
    botaoJaJogado.push(3);
    im4 = 1;
    empateJog++;
    jogadaCPU();
}
function fazerJogada5() {
    document.getElementById('botIm5').src = "xis.png";
    document.getElementById('bot5').disabled = true;
    document.getElementById('bot5').style.cursor = 'default';
    botaoJaJogado.push(4);
    im5 = 1;
    empateJog++;
    jogadaCPU();
}
function fazerJogada6() {
    document.getElementById('botIm6').src = "xis.png";
    document.getElementById('bot6').disabled = true;
    document.getElementById('bot6').style.cursor = 'default';
    botaoJaJogado.push(5);
    im6 = 1;
    empateJog++;
    jogadaCPU();
}
function fazerJogada7() {
    document.getElementById('botIm7').src = "xis.png";
    document.getElementById('bot7').disabled = true;
    document.getElementById('bot7').style.cursor = 'default';
    botaoJaJogado.push(6);
    im7 = 1;
    empateJog++;
    jogadaCPU();
}
function fazerJogada8() {
    document.getElementById('botIm8').src = "xis.png";
    document.getElementById('bot8').disabled = true;
    document.getElementById('bot8').style.cursor = 'default';
    botaoJaJogado.push(7);
    im8 = 1;
    empateJog++;
    jogadaCPU();
}
function fazerJogada9() {
    document.getElementById('botIm9').src = "xis.png";
    document.getElementById('bot9').disabled = true;
    document.getElementById('bot9').style.cursor = 'default';
    botaoJaJogado.push(8);
    im9 = 1;
    empateJog++;
    jogadaCPU();
}

function jogadaCPU() {
    let escolhaCPU = Math.floor(Math.random() * 9);
    do {
        escolhaCPU = Math.floor(Math.random() * 9);
    } while (botaoJaJogado.includes(escolhaCPU))

    switch (escolhaCPU) {
        case 0:
            document.getElementById('botIm1').src = "circulo.jpg";
            document.getElementById('bot1').disabled = true;
            document.getElementById('bot1').style.cursor = 'default';
            botaoJaJogado.push(0);
            imPC1 = 1;
            empateCPU++;
            vencedor();
            break;
        case 1:
            document.getElementById('botIm2').src = "circulo.jpg";
            document.getElementById('bot2').disabled = true;
            document.getElementById('bot2').style.cursor = 'default';
            botaoJaJogado.push(1);
            imPC2 = 1;
            empateCPU++;
            vencedor();
            break;
        case 2:
            document.getElementById('botIm3').src = "circulo.jpg";
            document.getElementById('bot3').disabled = true;
            document.getElementById('bot3').style.cursor = 'default';
            botaoJaJogado.push(2);
            imPC3 = 1;
            empateCPU++;
            vencedor();
            break;
        case 3:
            document.getElementById('botIm4').src = "circulo.jpg";
            document.getElementById('bot4').disabled = true;
            document.getElementById('bot4').style.cursor = 'default';
            botaoJaJogado.push(3);
            imPC4 = 1;
            empateCPU++;
            vencedor();
            break;
        case 4:
            document.getElementById('botIm5').src = "circulo.jpg";
            document.getElementById('bot5').disabled = true;
            document.getElementById('bot5').style.cursor = 'default';
            botaoJaJogado.push(4);
            imPC5 = 1;
            empateCPU++;
            vencedor();
            break;
        case 5:
            document.getElementById('botIm6').src = "circulo.jpg";
            document.getElementById('bot6').disabled = true;
            document.getElementById('bot6').style.cursor = 'default';
            botaoJaJogado.push(5);
            imPC6 = 1;
            empateCPU++;
            vencedor();
            break;
        case 6:
            document.getElementById('botIm7').src = "circulo.jpg";
            document.getElementById('bot7').disabled = true;
            document.getElementById('bot7').style.cursor = 'default';
            botaoJaJogado.push(6);
            imPC7 = 1;
            empateCPU++;
            vencedor();
            break;
        case 7:
            document.getElementById('botIm8').src = "circulo.jpg";
            document.getElementById('bot8').disabled = true;
            document.getElementById('bot8').style.cursor = 'default';
            botaoJaJogado.push(7);
            imPC8 = 1;
            empateCPU++;
            vencedor();
            break;
        case 8:
            document.getElementById('botIm9').src = "circulo.jpg";
            document.getElementById('bot9').disabled = true;
            document.getElementById('bot9').style.cursor = 'default';
            botaoJaJogado.push(8);
            imPC9 = 1;
            empateCPU++;
            vencedor();
            break;
        default:
            break;
    }
}

function vencedor() {
    let resultado = "";

    if ((im1 == 1 && im2 == 1 && im3 == 1) ||
        (im4 == 1 && im5 == 1 && im6 == 1) ||
        (im7 == 1 && im8 == 1 && im9 == 1) ||
        (im1 == 1 && im4 == 1 && im7 == 1) ||
        (im2 == 1 && im5 == 1 && im8 == 1) ||
        (im3 == 1 && im6 == 1 && im9 == 1) ||
        (im1 == 1 && im5 == 1 && im9 == 1) ||
        (im3 == 1 && im5 == 1 && im7 == 1)) {
        resultado = `Natacha venceu a rodada ${rodada}!`;
        pontosJog++;
        rodada++;
        document.getElementById('rodada').innerText = `Rodada ${rodada}`;
        zerarJogo();

    } else if ((imPC1 == 1 && imPC2 == 1 && imPC3 == 1) ||
        (imPC4 == 1 && imPC5 == 1 && imPC6 == 1) ||
        (imPC7 == 1 && imPC8 == 1 && imPC9 == 1) ||
        (imPC1 == 1 && imPC4 == 1 && imPC7 == 1) ||
        (imPC2 == 1 && imPC5 == 1 && imPC8 == 1) ||
        (imPC3 == 1 && imPC6 == 1 && imPC9 == 1) ||
        (imPC1 == 1 && imPC5 == 1 && imPC9 == 1) ||
        (imPC3 == 1 && imPC5 == 1 && imPC7 == 1)) {
        resultado = `CPU venceu a rodada ${rodada}!`;
        pontosCPU++;
        rodada++;
        document.getElementById('rodada').innerText = `Rodada ${rodada}`;
        zerarJogo();
    }

    if (empateJog==4 && empateCPU==4) {
        resultado = `A rodada ${rodada} EMPATOU`;
        pontosJog++;
        pontosCPU++;
        rodada++;
        document.getElementById('rodada').innerText = `Rodada ${rodada}`;
        zerarJogo();
    }

    if (pontosJog == 3 && pontosCPU == 3) {
        resultado = "PARTIDA ENCERRADA! Natacha e CPU Empataram";
        document.getElementById('rodada').innerText = "";
        zerarJogo();
        document.getElementById('jogadas').style.display = 'none';
        document.getElementById('painelVencedor').style.display = 'flex';
    } else if (pontosJog == 3) {
        resultado = "PARTIDA ENCERRADA! Natacha venceu";
        document.getElementById('rodada').innerText = "";
        zerarJogo();
        document.getElementById('jogadas').style.display = 'none';
        document.getElementById('painelVencedor').style.display = 'flex';
    } else if (pontosCPU == 3) {
        resultado = "PARTIDA ENCERRADA! CPU venceu";
        document.getElementById('rodada').innerText = "";
        zerarJogo();
        document.getElementById('jogadas').style.display = 'none';
        document.getElementById('painelVencedor').style.display = 'flex';
    }
    document.getElementById('mensagemVencedor').innerText = resultado;
    document.getElementById('pontosJog').innerText = `Pontos: ${pontosJog}`;
    document.getElementById('pontosCPU').innerText = `Pontos: ${pontosCPU}`;
}


function zerarJogo() {
    document.getElementById('botIm1').src = "botaoZerado.png";
    document.getElementById('botIm2').src = "botaoZerado.png";
    document.getElementById('botIm3').src = "botaoZerado.png";
    document.getElementById('botIm4').src = "botaoZerado.png";
    document.getElementById('botIm5').src = "botaoZerado.png";
    document.getElementById('botIm6').src = "botaoZerado.png";
    document.getElementById('botIm7').src = "botaoZerado.png";
    document.getElementById('botIm8').src = "botaoZerado.png";
    document.getElementById('botIm9').src = "botaoZerado.png";
    document.getElementById('bot1').disabled = false;
    document.getElementById('bot2').disabled = false;
    document.getElementById('bot3').disabled = false;
    document.getElementById('bot4').disabled = false;
    document.getElementById('bot5').disabled = false;
    document.getElementById('bot6').disabled = false;
    document.getElementById('bot7').disabled = false;
    document.getElementById('bot8').disabled = false;
    document.getElementById('bot9').disabled = false;
    document.getElementById('bot1').style.cursor = 'pointer';
    document.getElementById('bot2').style.cursor = 'pointer';
    document.getElementById('bot3').style.cursor = 'pointer';
    document.getElementById('bot4').style.cursor = 'pointer';
    document.getElementById('bot5').style.cursor = 'pointer';
    document.getElementById('bot6').style.cursor = 'pointer';
    document.getElementById('bot7').style.cursor = 'pointer';
    document.getElementById('bot8').style.cursor = 'pointer';
    document.getElementById('bot9').style.cursor = 'pointer';
    botaoJaJogado = [];
    im1 = 0;
    im2 = 0;
    im3 = 0;
    im4 = 0;
    im5 = 0;
    im6 = 0;
    im7 = 0;
    im8 = 0;
    im9 = 0;
    imPC1 = 0;
    imPC2 = 0;
    imPC3 = 0;
    imPC4 = 0;
    imPC5 = 0;
    imPC6 = 0;
    imPC7 = 0;
    imPC8 = 0;
    imPC9 = 0;
    empateJog =0;
    empateCPU =0;
}