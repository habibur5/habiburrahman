let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let btns = ["btn1", "btn2", "btn3", "btn4"];
let btnContainer = document.querySelector(".btn-container");
btnContainer.style.pointerEvents = "none";
let highestScore = 0;

document.addEventListener("keypress", function() {
    if(!started) {
        btnContainer.style.pointerEvents = "";
        started = true;
        levelup();
    }
});

function btnFlush(btn){
    btn.classList.add("flush");
    setTimeout(function(){
        btn.classList.remove("flush");
    },250);
}

function levelup(){
    level++;
    userSeq = [];
    h2.innerText  = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4) + 1;
    let bbb = `btn${randIdx}`;
    gameSeq.push(bbb);
    let randBtn = document.querySelector("."+bbb)
    btnFlush(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length) {
            window.setTimeout( levelup, 1000);
        }
    }else{
        
        if(level-1> highestScore) {
            highestScore = level-1;
        }
        h2.innerHTML  = `Game Over! Your score is <b>${level-1}</b> <br> highest score: ${highestScore} <br>Press any Key to start the Game again`;
        btnContainer.style.pointerEvents = "none";
        document.querySelector('body').style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "#f5f5f5";
        }, 250);
        
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlush(btn);
    let userBtn = btn.getAttribute("id");
    userSeq.push(userBtn);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn-container div > div");

allBtns.forEach(element => {
    element.addEventListener("click", btnPress);
});


function reset(){
    level = 0;
    gameSeq = [];
    started = false;
}
