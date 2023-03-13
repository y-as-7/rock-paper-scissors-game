const btns =document.querySelectorAll("#main button");
const reset = document.getElementById("reset");
let main = document.getElementById('main');
let pick = document.querySelector("#pick");
let choices=['paper','rock','scissors']
let score = document.getElementById("score");
let score_number=0;
let userChoice =undefined;
let win =document.getElementById("win")
let userPick=document.getElementById("you-pick")
let computerPick=document.getElementById("computer-pick")
let userImg = document.querySelector("#you-pick button img");
let computerImg = document.querySelector("#computer-pick button img");
let comWin=document.getElementsByClassName("co");
let UserWin=document.getElementsByClassName("us");
btns.forEach((btn)=>{
    btn.onclick=()=>{
        let computerChoice =choices[Math.floor(  Math.random()*choices.length)]
        main.classList.toggle('none');
        pick.classList.toggle('none');
        userChoice=btn.getAttribute("data-choice")
        if(userChoice==='paper'){
            userImg.src="./images/icon-paper.svg";
            userPick.style.background =
              "linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))";
        }else if (userChoice==='rock') {
            userImg.src="./images/icon-rock.svg";
            userPick.style.background =
            "linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))";
        }else{
            userImg.src="./images/icon-scissors.svg";
            userPick.style.background =
              "linear-gradient( hsl(39, 89%, 49%) , hsl(40, 84%, 53%))";
        }
        if(computerChoice==='paper'){
            computerImg.src="./images/icon-paper.svg";
            computerPick.style.background =
              "linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))";
        }else if (computerChoice==='rock') {
            computerImg.src="./images/icon-rock.svg";
            computerPick.style.background =
            "linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))";
        }else{
            computerImg.src="./images/icon-scissors.svg";
            computerPick.style.background =
              "linear-gradient( hsl(39, 89%, 49%) , hsl(40, 84%, 53%))";
        }
        console.log(userChoice);
        console.log(computerChoice);
        if(userChoice==='rock' && computerChoice==='scissors'){
            score_number++;
            score.innerHTML=score_number;
            win.innerHTML='you win'
            UserWin.classList.add("user-win")
            comWin.classList.remove("user-win");
        }
        else if (userChoice === "paper" && computerChoice === "scissors") {
          score_number++;
          score.innerHTML = score_number;
          win.innerHTML = "you win";
        } else if (userChoice === "rock" && computerChoice === "scissors") {
          score_number++;
          score.innerHTML = score_number;
          win.innerHTML = "you win";
        } else if (userChoice === "scissors" && computerChoice === "paper") {
          score_number++;
          score.innerHTML = score_number;
          win.innerHTML = "you win";
        } else if (userChoice === computerChoice) {
          score.innerHTML = score_number;
          win.innerHTML = "you draw";
        } else {
          win.innerHTML = "you lose";
        }
    }
})

// rules

let ruleBtn = document.getElementById("rule-btn");
let rules= document.querySelector("#rules div")
let close = document.querySelector("#rules div button");

let header = document.getElementById("header");
let main1 = document.getElementById("main");
let pick1 = document.getElementById("pick");

ruleBtn.onclick=()=>{
    rules.classList.toggle("none")
    header.classList.add("opacity")
    main1.classList.add("opacity");
    pick1.classList.add("opacity");
}
close.onclick = () => {
    header.classList.remove("opacity")
    main1.classList.remove("opacity");
    pick1.classList.remove("opacity");
  rules.classList.add("none");
};









reset.onclick=()=>{
    main.classList.toggle("none");
    pick.classList.toggle("none");
}





