let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");

let newgamebtn = document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const body=document.body;

let turnO=true;//playerx,playery

// let arr2=[["hsf","dfd"],["gfgf","fgg"]];

const winpattens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      //  console.log("box was clicked");
        if(turnO){
            //player 0
            box.innerText="0";
            turnO=false;
            box.style.color="red";
        }else{
            //player X
            box.innerText="X";
            turnO=true;
            box.style.color="yellow";
            
        }
        box.disabled=true;
        checkwinner();
    })
})

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
 
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
 


const showwinner=(winner)=>{
    msg.innerText=`Congrulation ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winpattens){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!="") {
            if(pos1val===pos2val&&pos2val===pos3val)
            {
                // console.log("you win",pos1val);
                showwinner(pos1val);
            }
        }
    }
}












