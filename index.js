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
const jump = () =>{
    mario.classList.add('jump')
    setTimeout(() =>{
        mario.classList.remove('jump')
    }, 500)
}

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
            audioRoundTwo.loop(1)
            audioStart.pause() //audio
            audioCoin.pause()
        }, 30000)
    }
    if(marioPosition > 80){
        coin.style.display = 'flex';
        audioCoin.play()
        coinContagem.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold" class="bi bi-coin" viewBox="0 0 16 16">
            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
            </svg> +1`;
    } else{
        coin.style.display = 'none';
        coinContagem.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-coin" viewBox="0 0 16 16">
        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
    </svg>`;
    }
},10);

document.addEventListener('keydown', jump); //tecla para pulo

//coin 

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
let nextRound = document.querySelector('.div-next-round');

nextRound.addEventListener('click', () =>{
    telaOne.style.display = 'none';
    telaTwo.style.display = 'block'
})