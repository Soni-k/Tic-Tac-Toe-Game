let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector(".msg");


let turnO = true; //player X, player O
// let count = 0;
 //To Track Draw

//  2D array
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  // count = 0;
	msgContainer.classList.add("hide");
};

// click 0 x 0 x 0 x 0 x 
boxes.forEach((box) => {
  box.addEventListener("click", () => {
		console.log("box are clicked");
		if (turnO === true) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    // box one time click 
		box.disabled = true;

		checkWinner();
	});
});

const checkWinner = () => {
  for(let pattern of winPatterns ){
    // console.log(pattern);
    
    // pattern index
  //  console.log(pattern[0], pattern[1],pattern[2]);

  //  console.log(
  //  	boxes[pattern[0]].innerText,
  //  	boxes[pattern[1]].innerText,
  //  	boxes[pattern[2]].innerText
  //  );

   let pos1Val = boxes[pattern[0]].innerText;
   let pos2Val = boxes[pattern[1]].innerText;
   let pos3Val = boxes[pattern[2]].innerText;

  //  3 box " " mt nhi hai to check krenge 
   if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
    // winner
     if (pos1Val === pos2Val && pos2Val === pos3Val) {
      console.log("winner",pos1Val);
       
      showWinner(pos1Val);
      // return true;
     }  
  }
 }
}; 

const showWinner = (pos1Valwinner) => {
    msg.innerText = `Congratulations, Winner is ${pos1Valwinner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener("click", resetGame); 