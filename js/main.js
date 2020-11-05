// Exibir dados selecionados

//Variaveis
let qtdInformada = document.getElementById('txtQtd');
let estampa = document.getElementById('estampa');
let precoUnd = 0;
let vlrTotal = 0;

//variaveis de resposta
let imagem = document.getElementById('imagem');
let produto = document.getElementById('rProduto');
let gola = document.getElementById('rGola');
let tipoEstampa = document.getElementById('rEstampa');
let cor = document.getElementById('rCor');
let embalagem = document.getElementById('rEmbalagem');
let qualidade = document.getElementById('rQualidade');
let quantidade = document.getElementById('rQuantidade');
let total = document.getElementById('rTotal');

window.onload = () => {
    atualiza();
}
function atualiza() {
     camisa = {
        gola: gola.innerHTML = verificaGola(),
        tipoEstampa: verificaEstampa(),
        Cor: cor.innerHTML = verificaCor(),

        embalagem: rEmbalagem.innerHTML = $('#embalagem').val() === 'bulk' ? 'Embalagem: Bulk - Sem plástico' : 'Embalagem: Unitária - Com plástico',
        qualidade: rQualidade.innerHTML = $('#normal').prop('checked') === true ? 'Qualidade: Qualidade Normal(150g/m2)' : 'Qualidade: Qualidade Alta(190g/m2)',
        quantidade: quantidade.innerHTML = 'Quantidade: ' + qtdInformada.value,
        total: total.innerHTML = calculaTotal()
    }
}

function verificaGola() {
    return $('#golaV').prop('checked') === true ? 'Gola: Gola V' : 'Gola: Gola Normal';
}

function verificaCor() {
    return $('#cor1').prop('checked') === true ? 'Cor: Branca' : 'Cor: Colorida';
}

function verificaEstampa() {
    if (estampa.value == 'comEstampa') {
        if (verificaCor() === 'Cor: Branca') {
            if (verificaGola() === 'Gola: Gola V') {
                //Se a camisa for Branca e Com gola V
                produto.innerHTML = 'Produto: Camisa Branca Gola V'
                imagem.src = 'imagens/v-white-personalized.jpg';
                tipoEstampa.innerHTML = 'Estampa: "Beija Flor" ';
                precoUnd = 13.5;
            } else {
                //Se a camisa for Branca com gola Normal
                produto.innerHTML = 'Produto: Camisa Branca Gola Normal'
                imagem.src = 'imagens/normal-white-personalized.jpg';
                tipoEstampa.innerHTML = 'Estampa: "I vote in Cthulhu" ';
                precoUnd = 13.5;
            }

        } else { //se não for branca
            if (verificaGola() === 'Gola: Gola V') {
                //Se a camisa for colorida e Com gola V
                produto.innerHTML = 'Produto: Camisa Cor Gola V'
                imagem.src = 'imagens/v-color-personalized.png';
                tipoEstampa.innerHTML = 'Estampa: "Assassin\'s Creed" ';
                precoUnd = 14.5;
            } else {
                //Se a camisa for colorida com gola Normal
                produto.innerHTML = 'Produto: Camisa Cor Gola Normal'
                imagem.src = 'imagens/normal-color-personalized.jpg';
                tipoEstampa.innerHTML = 'Estampa: "Ninja Warrior in Training" ';
                precoUnd = 15.5;
            }
        }
    } else {//se não tiver estampa
        if (verificaCor() === 'Cor: Branca') {
            if (verificaGola() === 'Gola: Gola V') {
                //Se a camisa for branca e Com gola V
                produto.innerHTML = 'Produto: Camisa Branca Gola V'
                imagem.src = 'imagens/v-white.jpg';
                tipoEstampa.innerHTML = 'Estampa: Sem Estampa ';
                precoUnd = 10.5;
            } else {
                //Se a camisa for branca com gola Normal
                produto.innerHTML = 'Produto: Camisa Branca Gola Normal'
                imagem.src = 'imagens/normal-white.jpg';
                tipoEstampa.innerHTML = 'Estampa: Sem Estampa ';
                precoUnd = 13;
            }
        } else {//se a cor não for branca
            if (verificaGola() === 'Gola: Gola V') {
                //Se a camisa for colorida e Com gola V
                produto.innerHTML = 'Produto: Camisa Cor Gola V'
                imagem.src = 'imagens/v-color.jpg';
                tipoEstampa.innerHTML = 'Estampa: Sem Estampa ';
                precoUnd = 11.5;
            } else {
                //Se a camisa for colorida com gola Normal
                produto.innerHTML = 'Produto: Camisa Cor Gola Normal'
                imagem.src = 'imagens/normal-color.jpg';
                tipoEstampa.innerHTML = 'Estampa: Sem Estampa ';
                precoUnd = 12.5;
            }
        }
    }    
}

function calculaTotal() {
    let novoPreco = 0;
    let precoEmbalagem = verificaEmbalagem();
    
    if ($('#alta').prop('checked') === true) {
        //aumenta em 12% o preço unitario caso a qualidade seja alta
        novoPreco = ((precoUnd * 1.12));

        vlrTotal = ((novoPreco * qtdInformada.value) + precoEmbalagem);
    } else {
        vlrTotal = ((precoUnd * qtdInformada.value) + precoEmbalagem);
    }
    return veriricaDescontoQtd(vlrTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;

}

function verificaEmbalagem(){
    //aumenta 0.15 centavos para cada camisa caso a embalagem seja unitaria
    
    if ($('#embalagem').val() === 'unitaria') {
        return (qtdInformada.value * 0.15);
    } else {
        return 0;
    }
}

function veriricaDescontoQtd(vlr) {
    if (qtdInformada.value > 1000) {
        return (vlr * 0.85);
    } else if (qtdInformada.value > 500) {
        return (vlr * 0.90);
    } else if (qtdInformada.value > 100) {
        return (vlr * 0.95);
    } else {
        return vlr;
    }
}
$(function () {
    $('[data-toggle="popover"]').popover()
  })

