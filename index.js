const mario = document.querySelector('.mario');
const marioSuper = document.querySelector('.super-mario');
const pipe = document.querySelector('.pipe'); 
const turtle = document.querySelector('.turtle')
const start = document.querySelector('.div-iniciar');   
const restart = document.querySelector('.restart');
const gameOver = document.querySelector('.game-over');  
const telaOne = document.querySelector('.mario-game');

audioStart = new Audio('images/goons-electronic-march-video-game-rpg-trolls-ogres-orcs-attack-145267.mp3')
audioFala = new Audio('images/mario-fala.mp3')
audioGameOver = new Audio('images/D2ZZHGM-game-over.mp3')
audioCoin = new Audio('images/retro-video-game-coin-pickup-38299.mp3')
audioRoundTwo = new Audio('images/audio-round-two.mp3')

coinValor = 0;

//start
const startGame = () =>{
    points.style.display = 'block';
    pipe.classList.add('pipe-animation')

    start.style.display = 'none';

    marioSuper.style.top = '5%';
    marioSuper.style.left = '7%';
    marioSuper.style.width = '200px';

    selectDifficult.style.display = 'none';
    choseDifficult.style.display = 'none';

    audioStart.play() //audio
    audioFala.play()
};


//restart
const restartGame = () =>{
    window.location.reload();
    audioGameOver.pause()
}

//jump
document.addEventListener('keydown', function(event){
    if(event.code === "Space"){
        coinValor++;
        mario.classList.add('jump')
        setTimeout(() =>{
            mario.classList.remove('jump')
        },500)
    }
})

//abaixar
function teclaPressionadaBaixo(event){
    if(event.key === "ArrowDown"){
        mario.src = 'https://media.tenor.com/XLTgWDwKXvAAAAAi/super-bad-mario-down-pose.gif';
        mario.style.width = '70px';
        setTimeout(() =>{
            mario.src = 'images/mario.gif';
            mario.style.width = '130px';
        },500)
    }
} document.addEventListener('keydown', teclaPressionadaBaixo);

//loop
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioPositionAbaixar = mario.offsetWidth;
    const turtlePosition = turtle.offsetLeft;

    const coin = document.querySelector('.div-coin');
    const coinContagem = document.querySelector('.p-contagem');

    let youWin = document.querySelector('.div-you-win'); 

    if(pipePosition <= 150 && pipePosition > 0 && marioPosition < 80){
        pipe.classList.remove('pipe-animation');
        pipe.style.left = `${pipePosition}px`;

        turtle.classList.remove('turtle-animation');

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'images/game-over.png';
        mario.style.width = '60px';
        
        gameOver.style.display = 'block';
        audioStart.pause()
        audioGameOver.play()

        restart.style.display = 'block';
    } else if(turtlePosition <= 150 && turtlePosition > 0 && marioPositionAbaixar > 80){
        pipe.classList.remove('pipe-animation');
        pipe.style.left = `${turtlePosition}px`;

        turtle.classList.remove('turtle-animation');

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'images/game-over.png';
        mario.style.width = '60px';
        
        gameOver.style.display = 'block';
        audioStart.pause()
        audioGameOver.play()
    }
    if(pipePosition > 150 && pipePosition > 0 && marioPosition > 80){
        setTimeout(() =>{
            youWin.style.display = 'block';
        
            pipe.classList.remove('pipe-animation')
        
            start.style.display = 'none';
        
            marioSuper.style.display = 'none';
        
            selectDifficult.style.display = 'none';
            choseDifficult.style.display = 'none';

            telaOne.style.border = 'none';

            audioGameOver.pause()
            audioRoundTwo.play()
            audioStart.pause() //audio
            audioCoin.pause()
        }, 30000)
    }
    if(marioPosition > 80){
        coin.style.display = 'flex';
        coinContagem.innerHTML = `<img src="https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/moeda.gif?raw=true" alt="" class="coin" style="width: 25px; height: 25px;"> +${coinValor}`
        audioCoin.play()

    } else{
        coin.style.display = 'none';
        coinContagem.innerHTML = `<img src="https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/moeda.gif?raw=true" alt="" class="coin" style="width: 25px; height: 25px;">`;
    }
},10);

  //pontuação
  const points = document.querySelector('.pontuação');
  let ponto = 0;

  const relogioPontuacao = setInterval(() =>{
    ponto++;
    points.innerHTML = ponto;
  },10);

//dificuldade
let selectDifficult = document.querySelector('.p-chosen');
let choseDifficult = document.querySelector('.div-chosen-click');
let closeChosenEasy = document.querySelector('.div-easy-difficult');
let closeChosenMedium= document.querySelector('.div-medium-difficult');
let closeChosenHard= document.querySelector('.div-hard-difficult');

selectDifficult.addEventListener('click', function(){
    choseDifficult.classList.add('abrir-dificuldades');
})

//easy
closeChosenEasy.addEventListener('click', function(){
    startGame().play()
})

//mediun
closeChosenMedium.addEventListener('click', function(){
    points.style.display = 'block';
    selectDifficult.style.display = 'none';
    choseDifficult.classList.remove('abrir-dificuldades');

    pipe.classList.add('pipe-animationM');
    setTimeout(() =>{
        turtle.classList.add('turtle-animation');
    }, 10000)

    start.style.display = 'none';

    marioSuper.style.top = '5%';
    marioSuper.style.left = '7%';
    marioSuper.style.width = '200px';


    audioStart.play() //audio
})

//hard
closeChosenHard.addEventListener('click', function(){
    points.style.display = 'block';
    selectDifficult.style.display = 'none';
    choseDifficult.classList.remove('abrir-dificuldades');

    pipe.classList.add('pipe-animationH')

    start.style.display = 'none';

    marioSuper.style.top = '5%';
    marioSuper.style.left = '7%';
    marioSuper.style.width = '200px';

    audioStart.play() //audio
})

//next round
const telaTwo = document.querySelector('.super-mario-game');
const personagem = document.querySelector(".mario-two");
const nextRound = document.querySelector('.div-next-round');
const block = document.querySelector('.block') ;
const blockTwo = document.querySelector('.block2');
const gogumelo =document.querySelector('.gogumelo');
//const larguraCenario = telaTwo.offsetWidth;
const larguraPersonagem = personagem.offsetWidth;

audioJump = new Audio("images/audios_audioPulo.wav")
audioUp = new Audio("images/Super Mario Bros. 1-Up - QuickSounds.com.mp3")
audioDeath = new Audio('images/Mario Death - QuickSounds.com.mp3')
audioTempoAcabando = new Audio('images/hello-mario.mp3')
audioStartGame = new Audio('images/audios_audioEsperandoIniciarJogo.mp3')

let posicao = 0;
let direcao = 0;
let velocidade = 15;

nextRound.addEventListener('click', () =>{
    telaOne.style.display = 'none';
    telaTwo.style.display = 'block';

    audioStartGame.play()
})

//movimento do personagem
function teclaPressionada(event){
    if(event.key === "ArrowRight"){
        direcao = 1;
        personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioAndandoLadoDireito.gif?raw=true';
    } else if(event.key === "ArrowLeft"){
        direcao = -1;
        personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioAndandoLadoEsquerdo.gif?raw=true';
    } 
}

function teclaSolta(event){
    if(event.key === "ArrowRight"){
        direcao = 0;
        personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioParadoLadoDireito.png?raw=true';
    } else if(event.key === "ArrowLeft"){
        personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioParadoLadoEsquerdo.png?raw=true';
        direcao = 0;
    }
}

function atualizarMovimentos(){
    posicao += direcao * velocidade;
    personagem.style.left = posicao + 'px';
    if(posicao < 0){
        posicao = 0;
    } else if(posicao + larguraPersonagem > larguraCenario){
        posicao = larguraCenario - larguraPersonagem;
    }
}
document.addEventListener('keydown', teclaPressionada);
document.addEventListener('keyup', teclaSolta);
setInterval(atualizarMovimentos, 50);

document.addEventListener('keydown', function(event){
    if(event.key === "ArrowUp"){
        personagem.classList.add('jump2')
        personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioOlhandoParaCimaLadoDireito.png?raw=true';
        audioJump.play()
        setTimeout(() =>{
            personagem.classList.remove('jump2')
            personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioAndandoLadoDireito.gif?raw=true';
        },500)
    }
});

//subir nos blocos
const subirBloco = setInterval(() =>{
const personagemPosition = personagem.getBoundingClientRect();;
const blockPosition = block.getBoundingClientRect();

if(blockPosition.left < personagemPosition.right && blockPosition.right > personagemPosition.left && blockPosition.top < personagemPosition.bottom && blockPosition.bottom > personagemPosition.top){
    clearInterval(subirBloco);
    block.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/blocoVazio.png?raw=true';

    moedasAtual++;
    coinContagemTwo.innerHTML = moedasAtual;

    pontosAtual += +10;
    pontos.innerHTML = pontosAtual;

    audioCoin.play()
}
},10);

//bloco especial
const baterBloco = setInterval(() =>{

const personagemPosition = personagem.getBoundingClientRect();
const blockPositionTwo = blockTwo.getBoundingClientRect();
console.log(blockPositionTwo)

if(blockPositionTwo.left < personagemPosition.right && blockPositionTwo.right > personagemPosition.left && blockPositionTwo.top < personagemPosition.bottom && blockPositionTwo.bottom> personagemPosition.top){
    clearInterval(baterBloco);
    blockTwo.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/blocoVazio.png?raw=true';
    gogumelo.style.display = 'block';

    moedasAtual++;
    coinContagemTwo.innerHTML = moedasAtual;

    pontosAtual += +10;
    pontos.innerHTML = pontosAtual;

    audioCoin.play()
}
},10);

//comer cogumelo
function comerCogumelo(){
    const cogumeloPosition = gogumelo.getBoundingClientRect();
    const personagemPosition = personagem.getBoundingClientRect();
    setTimeout(() =>{
        gogumelo.style.display = 'none';
    },7000)

    if(cogumeloPosition.left < personagemPosition.right && cogumeloPosition.right > personagemPosition.left){
        gogumelo.style.display = 'none';
        personagem.style.width = '65px';

        velocidade = 25;
        vidaAtual++
        vida.innerHTML = vidaAtual

        audioUp.play()

        setTimeout(() =>{
            personagem.style.width = '50px';
            velocidade = 15;
        }, 7000);
    }
} setInterval(comerCogumelo, 500);

//moedas 
const pontos = document.querySelector('.p-conatem-moedas2');
const coinContagemTwo = document.querySelector('.p-conatem-moedas');
const vida = document.querySelector('.p-vida');
const tempo = document.querySelector('.time')
const inimigo = document.querySelector('.inimigo');
const gameOverTwo = document.querySelector('.game-over-two');

let tempoAtual = 400;
let moedasAtual = 0;
let pontosAtual = 0;
let vidaAtual = 5;

//colisao inimigo
const colisaoInimigo = setInterval(() =>{
    const inimigoPosition = inimigo.getBoundingClientRect();
    const personagemPosition = personagem.getBoundingClientRect();
    const overlay = document.querySelector('.overlay')
    if(inimigoPosition.left < personagemPosition.right && inimigoPosition.right > personagemPosition.left && inimigoPosition.top < personagemPosition.bottom){
        personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioMorto.gif?raw=true';
        personagem.style.animation = 'none';
        gameOverTwo.style.display = 'block';

        inimigo.style.animation = 'none';

        pararTeclas();
        vida.innerHTML = '<img src="https://www.svgrepo.com/show/398320/skull-and-crossbones.svg" alt="" style="width: 35px; height: 35px; margin-top: 10px;">';

        audioDeath.play()
        audioJump.volume = '0';
    }
},10);

function matarInimigo(){
    const inimigoPosition = inimigo.getBoundingClientRect();
    const personagemPosition = personagem.getBoundingClientRect();
    if(inimigoPosition.left < personagemPosition.right && inimigoPosition.right > personagemPosition.left && inimigoPosition.top > personagemPosition.bottom){
        inimigo.src = 'https://media.tenor.com/3sXzkGext5gAAAAi/super-bad-mario-kick.gif';
        inimigo.style.width = '100px';
        mario.src = '';
        setTimeout(() =>{
            inimigo.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/cogumelo.png?raw=true';
            inimigo.style.width = '30px';
        }, 1000)
        moedasAtual++;
        coinContagemTwo.innerHTML = moedasAtual;

        audioCoin.play()

        inimigo.classList.add('inimigo-animation-death');
    } 
}
setInterval(matarInimigo, 500);

function relogio(){
    tempoAtual--;
    tempo.textContent = tempoAtual;
    if(tempoAtual === 0){
        personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioMorto.gif?raw=true';
        personagem.style.animation = 'none';
        gameOverTwo.style.display = 'block';

        pararTeclas();
        clearInterval(checarRelogio);
        vida.innerHTML = '<img src="https://www.svgrepo.com/show/398320/skull-and-crossbones.svg" alt="" style="width: 35px; height: 35px; margin-top: 10px;">';


        audioDeath.play()
        audioJump.volume = '0';
    } else if(tempoAtual === 300){
        audioTempoAcabando.play()
    }
}
checarRelogio = setInterval(relogio, 1000);

/*retirar teclas*/
function pararTeclas(){
    document.removeEventListener('keydown', teclaPressionada)
    document.removeEventListener('keydown', teclaSolta)
}