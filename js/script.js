function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

function displayResult(argComputerMove, argPlayerMove){
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        return 'Ty wygrywasz!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        return 'Ty wygrywasz!';
    } else if (playerMove == 'nieznany ruch') {
        return 'Co bez sensu wpisałeś :)';
    } else if (argComputerMove ==  argPlayerMove) {
        return '--- Remis --- ';
    } else {
        return 'Przegrałeś monsinior...';
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch (komputera) to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove =  getMoveName(playerInput);

printMessage('Twój ruch człowieku to: ' + playerMove);

printMessage(displayResult(computerMove, playerMove));

/*if (computerMove == 'kamień' && playerMove == 'papier'){
    return 'Ty wygrywasz!';
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    return 'Ty wygrywasz!';
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    return 'Ty wygrywasz!';
} else if (playerMove == 'nieznany ruch') {
    return 'Co bez sensu wpisałeś :)';
} else if (computerMove ==  playerMove) {
    return '--- Remis --- ';
} else {
    return ''Przegrałeś monsinior...');
}

if (randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else if (randomNumber == 3) {
	computerMove = 'nożyce';
}

if (playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == 2) {
	playerMove = 'papier';
} else if (playerInput == 3) {
	playerMove = 'nożyce';
}*/