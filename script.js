// Elements

const para = document.querySelector("#resultDisplay")
const scoreDisplay = document.querySelector(".score")
const matchPointDisplayer = document.querySelector("#matchPointDisplayer")

const ScissorButton = document.querySelector(".scissor")
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")


// Numbers

let humanScore = 0;
let computerScore  = 0;
const maxPoint = 5;

// You idiot this is literally such a dumb simple idea how come you not think about this.
function resetGamePoints() {
   humanScore = 0;
   computerScore = 0;
} 




// The following function gets the computer choice (its random obviously smh)
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

let humanChoice = "";


// The following functions are temporary as they might not be the most efficient (not sure)

function choseRock() {
   humanChoice = "Rock"
   console.log("You chose Rock!")
}

function chosePaper() {
  humanChoice = "Paper"
  console.log("You chose Paper!")
}

function choseScissor() {
    humanChoice = "Scissor"
    console.log("You chose scissor!")
}



function playGame() {
    let computerChoice = getComputerChoice();
    console.log(humanScore, computerScore)


    //Win conditions
if ((humanChoice === "Rock") && computerChoice === "Scissor" || (humanChoice === "Scissor") && computerChoice === "Paper" || (humanChoice === "Paper") && computerChoice === "Rock") {
        humanScore += 1;

        if (humanScore === maxPoint) {
            console.log("Max points Reached!")


            matchPointDisplayer.textContent = "Max points Reached! Match ended . You won!"

            setTimeout(() => {
                resetGamePoints()

                scoreDisplay.textContent = `Score : You (${humanScore}) & Bot (${computerScore})`
           
                 matchPointDisplayer.textContent = "New match starting soon..." 
                 para.textContent = ""

                console.log("Points removed!")
            }, 2000)

        
              setInterval(()=> {

                       console.log('This is a SetInterval method')
                    }, 3000)
            
        }

   console.log("You win " + humanChoice + " beats " + computerChoice + " !")
   para.textContent = "You win, " + humanChoice + " beats " + computerChoice + " !"
   scoreDisplay.textContent = `Score : You (${humanScore}) & Bot (${computerScore})`
   

  console.log(`[${computerScore}]` + " : " + `[${humanScore}]` )
       
    //
    } else if (computerChoice === "Rock" && humanChoice === "Scissor" || computerChoice === "Scissor" && humanChoice === "Paper" || computerChoice === "Paper" && humanChoice === "Rock") {
            para.textContent = "You Lost, " + computerChoice + " beats " + humanChoice + " !"
          scoreDisplay.textContent = `Score : You (${humanScore}) & Bot (${computerScore})`

         computerScore = computerScore + 1;


          if (computerScore === maxPoint) {
            console.log("Max points Reached!")

                     
                    setInterval(()=> {

                       console.log('This is a SetInterval method')
                    }, 2000)

            matchPointDisplayer.textContent = "Max points Reached! Match ended . You Loose!"
            scoreDisplay.textContent = `Score : You (${humanScore}) & Bot (${computerScore})`
            

            setTimeout(() => {
                 resetGamePoints()

             scoreDisplay.textContent = `Score : You (${0}) & Bot (${0})`
             matchPointDisplayer.textContent = ""
             para.textContent = ""

                console.log("Points removed!")
            }, 2000)

            setTimeout(() => {
                matchPointDisplayer.textContent = "..."
            }, 2000)
        }

      console.log("You lost ! " + computerChoice + " beats " + humanChoice + " !")
         
        console.log("Your choice : " + humanChoice)
        console.log(`[${computerScore}]` + " : " + `[${humanScore}]` )

         } else if (humanChoice === computerChoice) {
               scoreDisplay.textContent = `Score : You (${humanScore}) & Bot (${computerScore})`
               para.textContent = "Tie !"
             console.log("Tie!")
             };

             scoreDisplay.textContent = `Score : You (${humanScore}) & Bot (${computerScore})`
     
}