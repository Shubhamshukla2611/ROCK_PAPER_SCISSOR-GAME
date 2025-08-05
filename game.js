let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector(".msgcontainer");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");



const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawgame=()=>{
    console.log("game is drawn");
    msg.innerText="game is drawn,try again";
    


}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        console.log("YOU WIN");
        msg.innerText = `YAYYY!! YOU WON, your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;
    } else {
        console.log("YOU LOSE");
        msg.innerText = `You Lose, your ${userchoice} loses against ${compchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore;
    }
}


const playgame = (userchoice) => {
    console.log("userchoice =", userchoice);
    const compchoice = gencompchoice();
    console.log("compchoice =", compchoice);

    if(userchoice===compchoice){
        drawgame();
        

    }else{
        let userwin=true;
        if(userchoice==="rock"){
            // scissor,paper
           userwin= compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            // rock,scissor
            userwin=compchoice==="scissors"?false:true;
        }else{
            // rock,paper

            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
