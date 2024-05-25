const mario = document.querySelector('.mario');
const marioSuper = document.querySelector('.super-mario')
const pipe = document.querySelector('.pipe'); 
const start = document.querySelector('.div-iniciar');   
const restart = document.querySelector('.restart')
const gameOver = document.querySelector('.game-over');  
const telaOne = document.querySelector('.mario-game')
const telaTwo = document.querySelector('.super-mario-game')

audioStart = new Audio('images/goons-electronic-march-video-game-rpg-trolls-ogres-orcs-attack-145267.mp3')
audioFala = new Audio('images/mario-fala.mp3')
audioGameOver = new Audio('images/D2ZZHGM-game-over.mp3')
audioCoin = new Audio('images/retro-video-game-coin-pickup-38299.mp3')
audioRoundTwo = new Audio('images/audio-round-two.mp3')

coinValor = 0;

//start
const startGame = () =>{
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

//loop
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // pontução
    const marioPositionTwo = +window.getComputedStyle(pipe).right.replace('px', '');
    const points = document.querySelector('.pontuação');
    points.innerHTML = `${marioPositionTwo}`

    const coin = document.querySelector('.div-coin');
    const coinContagem = document.querySelector('.p-contagem');

    let youWin = document.querySelector('.div-you-win'); 

    if(pipePosition <= 150 && pipePosition > 0 && marioPosition < 80){
        pipe.classList.remove('pipe-animation');
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'images/game-over.png';
        mario.style.width = '80px';
        
        gameOver.style.display = 'block';
        audioStart.pause()
        audioGameOver.play()

        restart.style.display = 'block';
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
            audioRoundTwo.loop(0)
            audioStart.pause() //audio
            audioCoin.pause()
        }, 30000)
    }
    if(marioPosition > 80){
        coin.style.display = 'flex';
        coinContagem.innerHTML = `<img src="https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/moeda.gif?raw=true" alt="" class="coin"> +${coinValor}`
        audioCoin.play()

    } else{
        coin.style.display = 'none';
        coinContagem.innerHTML = `<img src="https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/moeda.gif?raw=true" alt="" class="coin">`;
    }
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
    selectDifficult.style.display = 'none';
    choseDifficult.classList.remove('abrir-dificuldades');

    pipe.classList.add('pipe-animationM')

    start.style.display = 'none';

    marioSuper.style.top = '5%';
    marioSuper.style.left = '7%';
    marioSuper.style.width = '200px';

    audioStart.play() //audio
})

//hard
closeChosenHard.addEventListener('click', function(){
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
const personagem = document.querySelector(".mario-two");
const nextRound = document.querySelector('.div-next-round');
const larguraCenario = telaTwo.offsetWidth;
const larguraPersonagem = personagem.offsetWidth;

audioJump = new Audio("images/maro-jump-sound-effect_1.mp3")
//audioJump.volume = '0.7';
audioUp = new Audio("images/Super Mario Bros. 1-Up - QuickSounds.com.mp3")

let posicao = 0;
let direcao = 0;
let velocidade = 10;

nextRound.addEventListener('click', () =>{
    telaOne.style.display = 'none';
    telaTwo.style.display = 'block'

    audioStart.play()
    audio.start.loop(1)
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
    } else if(posicao +larguraPersonagem > larguraCenario){
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
const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
const personagemPositionDirecao = personagem.offsetLeft;
const block = document.querySelector('.block')
//console.log(personagemPositionDirecao)

/*if(personagemPosition >90 && personagemPositionDirecao >= 470 && personagemPosition <860){
    personagem.style.bottom = '185px';
}else if(personagemPositionDirecao > 0 && personagemPosition < 470){
    personagem.style.bottom = '90px';
}*/if(personagemPosition >= 275 && personagemPositionDirecao > 1100 && personagemPositionDirecao < 1200){
    block.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/blocoVazio.png?raw=true';

    moedasAtual++;
    coinContagemTwo.innerHTML = moedasAtual;
    pontosAtual++;
    pontos.innerHTML = pontosAtual;
    audioUp.play()
}
},10);

//moedas 
const pontos = document.querySelector('.p-conatem-moedas2')
const coinContagemTwo = document.querySelector('.p-conatem-moedas')

let moedasAtual = 0;
let pontosAtual = 0;