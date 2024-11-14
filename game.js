
let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#resetbtn");
let newgamebtn= document.querySelector("#newgamebtn");
let messageContainer = document.querySelector(".msgcontainer")
let msg = document.querySelector("#msg"); 
let turnO = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 
const ResetGame =()=>{
 trueO=true;
 enableboxes();
 messageContainer.classList.add("hide"); 
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO = false;
        console.log("YOU CLICKED THE BUTTON")
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();

});
});
const disableboxes =()=>{
    for ( let box of boxes){
        box.disabled=true;
    }
};
const enableboxes =()=>{
    for ( let box of boxes){
        box.disabled=false;
        box.innerText=""; 

    }
};
const showWinner=(winner)=>{
     msg.innerText=`The winner is player ${winner} `
     messageContainer.classList.remove("hide");
     disableboxes();
};


let checkWinner = ()=>{
    for (let pattern of winPattern){
     // console.log(pattern[0], pattern[1], pattern[2]);
   let post1 = boxes[pattern[0]].innerText;
   let post2 = boxes[pattern[1]].innerText ;
   let post3 = boxes[pattern[2]].innerText;
   if(post1 !== "", post2!=="", post3!==""){
    if(post1===post2 && post2===post3){
        console.log("winner is player ", post1)
        showWinner(post1);
    }
   }
    }
} ;
newgamebtn.addEventListener("click",ResetGame);
resetbtn.addEventListener("click",ResetGame);