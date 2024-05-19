const mario = document.querySelector('.mario');
const marioSuper = document.querySelector('.super-mario')
const pipe = document.querySelector('.pipe'); 
const start = document.querySelector('.div-iniciar');   
const restart = document.querySelector('.restart')
const gameOver = document.querySelector('.game-over');   
const points = document.querySelector('.pontuação');

audioStart = new Audio('images/goons-electronic-march-video-game-rpg-trolls-ogres-orcs-attack-145267.mp3')
audioGameOver = new Audio('images/D2ZZHGM-game-over.mp3')

//pontuação

//start
const startGame = () =>{
    pipe.classList.add('pipe-animation')
    start.style.display = 'none';
    marioSuper.style.top = '5%';
    marioSuper.style.left = '7%';
    marioSuper.style.width = '200px';

    audioStart.play() //audio
}

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
},10);

document.addEventListener('keydown', jump); //tecla para pulo