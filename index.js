const mario = document.querySelector('.mario');
const marioSuper = document.querySelector('.super-mario');
const pipe = document.querySelector('.pipe'); 
const turtle = document.querySelector('.turtle')
const start = document.querySelector('.div-iniciar');   
const restart = document.querySelector('.restart');
const gameOver = document.querySelector('.game-over');  

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
        }, 1000);
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
const personagem = document.querySelector(".mario-two");
const divMario = document.querySelector('.mario-div')
const nextRound = document.querySelector('.div-next-round');
const block = document.querySelector('.block') ;
const blockTwo = document.querySelector('.block2');
const blockFour = document.querySelector('.block4');
const gogumelo =document.querySelector('.gogumelo');
const star = document.querySelector('.star')
const larguraPersonagem = personagem.offsetWidth;
const telaTwo = document.querySelector('.super-mario-game');
const telaOne = document.querySelector('.mario-game');
const telaThree = document.querySelector('.part-two');
const larguraCenario = telaThree.getBoundingClientRect();
const primeiraTelaLargura = telaTwo.offsetWidth;
const body = document.querySelector('.body');
personagem.src = `https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioAndandoLadoDireito.gif?raw=true`;


audioJump = new Audio("images/audios_audioPulo.wav")
audioUp = new Audio("images/Super Mario Bros. 1-Up - QuickSounds.com.mp3")
audioDeath = new Audio('images/Mario Death - QuickSounds.com.mp3')
audioTempoAcabando = new Audio('images/hello-mario.mp3')
audioStartGame = new Audio('images/audios_audioEsperandoIniciarJogo.mp3')
audioAtaque = new Audio('images/silenced-gunshot-81063.mp3')
audioLaught = new Audio('images/evil-laugh-89423.mp3')
audioLaser = new Audio('images/laser-audio.mp3')
audioBoss = new Audio('images/despair-metal.mp3')
audioBoss.volume = '0.5';

let posicao = 0;
let direcao = 0;
let velocidade = 15;

nextRound.addEventListener('click', () =>{
    telaOne.style.display = 'none';
    telaTwo.style.display = 'block';
    telaThree.style.display = 'block';

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
function teclaPressionadaBoss(event){
    if(event.key === "ArrowRight"){
        direcao = 1;
        personagem.src = 'https://media.tenor.com/HcAfAfuQQlIAAAAi/mx-powerdown-fnf.gif';
    } else if(event.key === "ArrowLeft"){
        direcao = -1;
        personagem.src = 'https://media.tenor.com/HcAfAfuQQlIAAAAi/mx-powerdown-fnf.gif';
    } 
}
function teclaSoltaBoss(event){
    if(event.key === "ArrowRight"){
        direcao = 0;
        personagem.src = 'https://media.tenor.com/NJ1Z5ymf5S8AAAAi/mx-powerdown-fnf.gif';
    } else if(event.key === "ArrowLeft"){
        direcao = 0;
        personagem.src = 'https://media.tenor.com/NJ1Z5ymf5S8AAAAi/mx-powerdown-fnf.gif';
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
    const personagemPosition = personagem.getBoundingClientRect();

    posicao += direcao * velocidade;
    personagem.style.left = posicao + 'px';
    if(posicao < 0){
        posicao = 0;
    } else if(posicao + larguraPersonagem > 4000){
        posicao = 4000 - larguraPersonagem;
    }
    else if(posicao + personagemPosition.left >= 2300){
        body.style.overflowX = 'hidden';
    } else if(posicao + personagemPosition.left >= 2000){
        body.style.overflowX = 'visible';
        body.style.overflowY = 'hidden';
    }
}
document.addEventListener('keydown', teclaPressionada);
document.removeEventListener('keydown', teclaPressionadaBoss);
document.addEventListener('keyup', teclaSolta);
document.removeEventListener('keyup', teclaSoltaBoss);
setInterval(atualizarMovimentos, 50);

function jump(event){
    if(event.code === "Space"){
        personagem.classList.add('jump2')
        personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioOlhandoParaCimaLadoDireito.png?raw=true';
        audioJump.play()
        setTimeout(() =>{
            personagem.classList.remove('jump2')
            personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioAndandoLadoDireito.gif?raw=true';
        },500)
    }
} document.addEventListener('keydown', jump)

function jump2(event){
    if(event.code === "Space"){
        personagem.classList.add('jump3')
        personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioOlhandoParaCimaLadoDireito.png?raw=true';
        audioJump.play()
        setTimeout(() =>{
            personagem.classList.remove('jump3')
            personagem.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/marioAndandoLadoDireito.gif?raw=true';
        },500)
    }
} document.removeEventListener('keydown', jump2)

function jump3(event){
    if(event.code === "Space"){
        personagem.classList.add('jump4')
        personagem.src = 'https://media.tenor.com/NJ1Z5ymf5S8AAAAi/mx-powerdown-fnf.gif';
        audioJump.play()
        setTimeout(() =>{
            personagem.classList.remove('jump4')
            personagem.src = 'https://media.tenor.com/NJ1Z5ymf5S8AAAAi/mx-powerdown-fnf.gif';
        },650)
    }
} document.removeEventListener('keydown', jump3);

//subir nos blocos
const subirBloco = setInterval(() =>{
const personagemPosition = personagem.getBoundingClientRect();
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

const baterBlocoFour = setInterval(() =>{

    const personagemPosition = personagem.getBoundingClientRect();
    const blockPositionFour = blockFour.getBoundingClientRect();
    //telaOne.log(blockPositionTwo)
    
    if(blockPositionFour.left < personagemPosition.right && blockPositionFour.right > personagemPosition.left && blockPositionFour.top < personagemPosition.bottom && blockPositionFour.bottom> personagemPosition.top){
        clearInterval(baterBlocoFour);
        blockFour.src = 'https://github.com/JohnnyPeffer/jogoMario/blob/main/imagens/blocoVazio.png?raw=true';
        star.style.display = 'block';
    
        moedasAtual++;
        coinContagemTwo.innerHTML = moedasAtual;
    
        pontosAtual += +10;
        pontos.innerHTML = pontosAtual;
    
        audioCoin.play()
        audioUp.play()
    }
},10)
;
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

//comer estrela
function comerEstrela(){
    const personagemPosition = personagem.getBoundingClientRect();
    const starPosition = star.getBoundingClientRect();

    if(starPosition.left < personagemPosition.right && starPosition.right > personagemPosition.left && personagemPosition.top < starPosition.bottom){


        star.style.display = 'none';
        personagem.style.width = '200px';
        personagem.src = 'https://media.tenor.com/Yi1KpZShPK8AAAAi/penguin-madness-combat.gif';

        vidaAtual++;
        vida.innerHTML = vidaAtual;

        velocidade = 0;

        audioUp.play()
        audioBoss.play()

        setTimeout(() =>{
            clearInterval(comerEstrela,10)
            document.addEventListener('keydown', jump3)
            document.removeEventListener('keydown', jump)

            document.removeEventListener('keydown', teclaPressionada);
            document.addEventListener('keydown', teclaPressionadaBoss);

            document.removeEventListener('keyup', teclaSolta);
            document.addEventListener('keyup', teclaSoltaBoss);

            personagem.style.width = '100px';
            personagem.src = 'https://media.tenor.com/JU0r-sla_AkAAAAi/ultra-m-old.gif';

            velocidade = 30;
        }, 1000);
    }
} 

//moedas 
const pontos = document.querySelector('.p-conatem-moedas2');
const coinContagemTwo = document.querySelector('.p-conatem-moedas');
const vida = document.querySelector('.p-vida');
const tempo = document.querySelector('.time');
const inimigo = document.querySelector('.inimigo');
const gameOverTwo = document.querySelector('.game-over-two');
const flowerInimigo = document.querySelector('.boss');
const ataqueBoss = document.querySelector('.ataque-boss');
const vidaInimigo = document.querySelector('.form-vida-inimigo');
const vidaPorcentagem = document.querySelector('.div-vida-inimigo');
const cage = document.querySelector('.div-cage');
const hud = document.querySelector('.div-hud');

let tempoAtual = 400;
let moedasAtual = 0;
let pontosAtual = 0;
let vidaAtual = 5;
let vidaBoss = 100;
let estaAtirando = false;

function ganharVidaComMoedas(){
    clearInterval(ganharVidaComMoedas)
    if(moedasAtual === 20){
        vidaAtual++
        vida.innerHTML = vidaAtual;
    }
} setInterval(ganharVidaComMoedas, 10);

//colisao inimigo
/*const colisaoInimigo = setInterval(() =>{
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
},10);*/

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
    } else if (inimigoPosition.bottom < 90){
        clearInterval(matarInimigo, 10);
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

/*movimento da câmera*/
/*(function(){
    var cnv = document.querySelector('canvas');
    var ctx = cnv.getContext('2d')

    //recursos
    var backgroud = telaTwo;
    function loop(){
        window.requestAnimationFrame(loop, cnv);
        uptade();
        render();
    }
    function uptade(){

    }
    function render(){
        ctx.drawImage(backgroud, 0, 0, 10, 900, 0, 0, 10, 900);
    }
    loop();
})*/

//part boss
const subir = setInterval(() =>{
    const personagemPosition  = personagem.getBoundingClientRect();
    const telaBoss = document.querySelector('.bloco-teste');
    const telaBossResolucao = telaBoss.getBoundingClientRect();
   

    if(telaBossResolucao.left < personagemPosition.right && telaBossResolucao.right > personagemPosition.left && personagemPosition.bottom > telaBossResolucao.top){
        setInterval(comerEstrela, 500);
        setInterval(atirarTwo, 10)
        /*document.addEventListener('keydown', (event) =>{
            if(event.code === 'KeyQ'){
                atirarTwo();
                estaAtirando = true;
            }
        });

        document.addEventListener('keyup', (event) =>{
            if(event.code === 'KeyQ'){
                estaAtirando = false;
            }
        });*/

        document.addEventListener('keydown', ataque);

        vidaInimigo.style.display = 'block';
        flowerInimigo.style.display = 'block';

        cage.style.display = 'block';

        ataqueBoss.style.display = 'block';
        ataqueBoss.classList.add('ataque-boss-animation');

        document.addEventListener('keydown', jump2)
        document.removeEventListener('keydown', jump)

        personagem.style.bottom = '185px';

        hud.style.width = '83%';
        hud.style.left = '115%';
        
        audioLaught.play();

        setTimeout(() =>{
            ataqueBoss.classList.remove('ataque-boss-animation');
            ataqueBoss.classList.add('ataque-boss-animation2')
        },7000)
    }else{
        personagem.style.bottom = '90px';
    } 
},10);

//ataque mario
function ataque(event){
    const personagemPosition  = personagem.getBoundingClientRect();
    const tiro = document.querySelector('.ataque-mario');

    if(event.code === 'KeyQ'){
        tiro.style.display = 'block';
    }
    setTimeout(() =>{
        tiro.style.display = 'none';
    }, 1500)
}

//dano e ataque ao boss
const danoInimigo = setInterval(() =>{
    const tiro = document.querySelector('.ataque-mario');
    vidaPorcentagem.setAttribute("data-vida", vidaBoss);
    let vidaBossAtual = parseInt(flowerInimigo.getAttribute("data-vida"), 10)

    flowerInimigo.forEach((ataque) =>{
        const bossPosition = flowerInimigo.getBoundingClientRect();
        const ataqueMarioPosition = tiro.getBoundingClientRect();

        if(bossPosition.left < ataqueMarioPosition.right && bossPosition.left > ataqueMarioPosition.right){
            vidaBossAtual--;
        } else if(vidaBossAtual === 0){
            
        }
    })
}, 10);

const atirarTwo = () =>{
    if(estaAtirando){
        criarAtaque(posicao);
    }
}

const criarAtaque = (personagemPositionRight) =>{
    const ataqueBossTwo = document.createElement('div');
    ataqueBossTwo.className = 'inimigo';
    ataqueBossTwo.style.position = 'absolute';
    ataqueBossTwo.style.width= '10px';
    ataqueBossTwo.style.height = '10px';
    ataqueBossTwo.style.borderRadius = '65%';
    ataqueBossTwo.style.background = 'red';
    ataqueBossTwo.style.right = personagemPositionRight + 'px';
    telaThree.appendChild(ataqueBossTwo);
}; 