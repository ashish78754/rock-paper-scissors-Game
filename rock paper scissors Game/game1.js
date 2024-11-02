let userscore = 0;
let comscore = 0;
let msg=document.querySelector("#msg");
let userscorepara=document.querySelector("#userscore")
let comscorepara=document.querySelector("#comscore")

const showwinner = (userwin,userchoice,comchoice) =>{
    if (userwin){
        userscore++;
        userscorepara.innerText= userscore
        msg.innerText=`You Win! your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comscore++;
        comscorepara.innerText= comscore
        msg.innerText=`You Lose! ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (userchoice) =>{
    let comchoice= gencomchoice();
    if(userchoice===comchoice)
    {
       drawgame();
    }
    else{
        let userwin=0;
        if(userchoice==="rock"){
            userwin = comchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin = comchoice==="scissor"?false:true;
        }
        else{
            userwin = comchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,comchoice);
    }
};

const drawgame =() =>{
    msg.innerText="Game was draw! Play Again";
    msg.style.backgroundColor="cornflowerblue";
}
 
const gencomchoice= (()=> {
    const options = ["rock","paper","scissor"];
    const randomind = Math.floor(Math.random() * 3);
    return options[randomind]; 
})
    

const choices= document.querySelectorAll(".choice");
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice)
    })
})

