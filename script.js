function getComputerChoice () {
    const num = Math.floor(Math.random() * 3)
    let choice = "";

    if (num === 0) {
        console.log("Rock")
        choice = "Rock";
        choice.toLowerCase()

    } else if (num === 1) {
        console.log("Paper")
        choice = "Paper";
        choice.toLowerCase()

    } else if (num === 2) {
        console.log("Scissor")
        choice = "Scissor";
        choice.toLowerCase()
    }

    return choice
};


function getHumanChoice() {

    let message = window.prompt("Choose : Rock , Paper or Scissor ?")

    return message
}
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore  = 0;

/*function incrementHumanScore(num) {
  return num + 1;
}

function incrementClankaScore(num) {
  return num + 1;
}*/


function playGame(humChoice, clankaChoice) {
   
if ((humChoice === "rock" || humChoice === "Rock") && clankaChoice === "Scissor" || (humChoice === "Scissor" || humChoice === "scissor") && clankaChoice === "Paper" || (humChoice === "Paper" || humChoice === "paper") && clankaChoice === "Rock") {
        humanScore = Number(humanScore) + 1;

   console.log("You win " + humChoice + " beats " + clankaChoice + " !")
   

  console.log("C" + computerScore + ":H" + humanScore)
       
    } else if (clankaChoice === "Rock" && humChoice === "Scissor" || clankaChoice === "Scissor" && humChoice === "Paper" || clankaChoice === "paper" && humChoice === "Rock") {
          

         computerScore = Number(computerScore) + 1;

      console.log("You lost ! " + clankaChoice + " beats " + humChoice + " !")
        console.log("Your choice : " + humChoice)
        console.log("C" + computerScore + ":H" + humanScore)

         } else if (humChoice === clankaChoice || humChoice === clankaChoice) {
             console.log("Tie!")
             computerScore = Number(computerScore) + 1;
             };
     
}
playGame(humanChoice, computerChoice)