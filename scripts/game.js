/***
 *     ██████   █████  ███    ███ ███████                                       
 *    ██       ██   ██ ████  ████ ██                                            
 *    ██   ███ ███████ ██ ████ ██ █████                                         
 *    ██    ██ ██   ██ ██  ██  ██ ██                                            
 *     ██████  ██   ██ ██      ██ ███████                                       
 *                                                                              
 *    ██████  ███████ ██       █████  ████████ ███████ ██████                   
 *    ██   ██ ██      ██      ██   ██    ██    ██      ██   ██                  
 *    ██████  █████   ██      ███████    ██    █████   ██   ██                  
 *    ██   ██ ██      ██      ██   ██    ██    ██      ██   ██                  
 *    ██   ██ ███████ ███████ ██   ██    ██    ███████ ██████                   
 *                                                                              
 *    ███████ ██    ██ ███    ██  ██████ ████████ ██  ██████  ███    ██ ███████ 
 *    ██      ██    ██ ████   ██ ██         ██    ██ ██    ██ ████   ██ ██      
 *    █████   ██    ██ ██ ██  ██ ██         ██    ██ ██    ██ ██ ██  ██ ███████ 
 *    ██      ██    ██ ██  ██ ██ ██         ██    ██ ██    ██ ██  ██ ██      ██ 
 *    ██       ██████  ██   ████  ██████    ██    ██  ██████  ██   ████ ███████ 
 *                                                                              
 *                                                                              
 */

/**
 * Plays a single round of Rock Paper Scissors against the computer.
 * @param {String} playerSelection - The user's character selection
 * @param {String} computerSelection - The computer's character selection
 * @returns {String} The result of the one round match
 */
 function playRound(playerSelection, computerSelection) {

    /*****************************
    ******************************     
    **      Rules of game:      **
    **      --------------      **
    **  1) rock beats scissors  **
    **  2) scissors beat paper  **
    **  3) paper beats rock     **
    **  4) Same elements tie    **
    ******************************
    *****************************/

    let output = "";

    /* Case for a tie!*/
    if (playerSelection == computerSelection) {
        output = `Human: ${playerSelection} \nComputer: ${computerSelection} \nTie!`;
    }

    /* Cases for player winning*/
    else if (playerSelection == "paper" && computerSelection == "rock") {
        output = `Human: ${playerSelection} \nComputer: ${computerSelection} \nHuman player wins!`;
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        output = `Human: ${playerSelection} \nComputer: ${computerSelection} \nHuman player wins!`;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        output = `Human: ${playerSelection} \nComputer: ${computerSelection} \nHuman player wins!`;
    }

    /* Cases for computer winning */
    else if (computerSelection == "paper" && playerSelection == "rock") {
        output = `Human: ${playerSelection} \nComputer: ${computerSelection} \nComputer wins!`;
    }

    else if (computerSelection == "rock" && playerSelection == "scissors") {
        output = `Human: ${playerSelection} \nComputer: ${computerSelection} \nComputer wins!`;
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        output = `Human: ${playerSelection} \nComputer: ${computerSelection} \nComputer wins!`;
    }

    alert(output);
    return output;

}

/**
 * Game loop that plays through the number of rounds a user selects.
 */
 function game() {
    let counter = 1;
    const rounds = prompt("How many rounds do you want to play?");
    let humanWins = 0;
    let computerWins = 0;

    while(counter <= rounds){

        const playerSelection = characterSelection();
        const computerSelection = computerPlay();
        
        alert(`starting round: ${counter}`)
        let result = playRound(playerSelection, computerSelection);
        if(result.includes("Computer wins!")) computerWins ++;
        if(result.includes("Human player wins!")) humanWins ++;
        counter ++;
        alert(`Ending round...\n\nTally:\nHuman wins: ${humanWins}\nComputer wins:${computerWins}`)
    }
}

/***
 *    ██   ██ ███████ ██      ██████  ███████ ██████                            
 *    ██   ██ ██      ██      ██   ██ ██      ██   ██                           
 *    ███████ █████   ██      ██████  █████   ██████                            
 *    ██   ██ ██      ██      ██      ██      ██   ██                           
 *    ██   ██ ███████ ███████ ██      ███████ ██   ██                           
 *                                                                              
 *    ███████ ██    ██ ███    ██  ██████ ████████ ██  ██████  ███    ██ ███████ 
 *    ██      ██    ██ ████   ██ ██         ██    ██ ██    ██ ████   ██ ██      
 *    █████   ██    ██ ██ ██  ██ ██         ██    ██ ██    ██ ██ ██  ██ ███████ 
 *    ██      ██    ██ ██  ██ ██ ██         ██    ██ ██    ██ ██  ██ ██      ██ 
 *    ██       ██████  ██   ████  ██████    ██    ██  ██████  ██   ████ ███████ 
 *                                                                              
 *                                                                              
 */

/**
 * Generates a random character selection for the computer.
 * @returns {String} Random character (Rock, Paper, or Scissors)
 */
function computerPlay() {
    const seed = Math.floor(Math.random() * 3);
    let selection = "";

    if (seed == 0) {
        selection = "rock";
    }

    else if (seed == 1) {
        selection = "paper";
    }

    else if (seed == 2) {
        selection = "scissors";
    }

    return selection;
}



/**
 * Prompts the user to enter their element selection in order to start the game.
 * @returns {String} The human player's element selection. 
 */
function characterSelection() {
    let option = prompt("What do you choose? (rock, paper, scissors)").toLowerCase();

    let inputCheck = correctInput(option);

    if (!inputCheck) {
        let correctInputFlag = false

        while (!correctInputFlag) {
            alert("Incorrect input... please try again! \n\n\n\nTry checking your spelling or whether your input matches the three possible options.\n\n");
            option = prompt("What do you choose? (rock, paper, scissors)").toLowerCase();
            correctInputFlag = correctInput(option);
        }
    }

    return option;
}

/**
 * Checks whether an element selection is valid.
 * @param {String} input 
 * @returns True or False depending on the validity of the input.
 */
function correctInput(input) {
    if (input == "rock" || input == "paper" || input == "scissors") {
        return true;
    }

    else {
        return false;
    }
}
