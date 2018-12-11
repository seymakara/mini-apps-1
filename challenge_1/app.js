var xFlag = true;
var counter = 0;
var ifwin = false;
var lastWinner;
var player1 = "X"
var player2 = "O"


var winCheck = function () {

    var cell1 = document.getElementById('one');
    var cell2 = document.getElementById('two');
    var cell3 = document.getElementById('three');
    var cell4 = document.getElementById('four');
    var cell5 = document.getElementById('five');
    var cell6 = document.getElementById('six');
    var cell7 = document.getElementById('seven');
    var cell8 = document.getElementById('eight');
    var cell9 = document.getElementById('nine');

    var winningOptions = {
        'option1': (cell1.innerText === "X" || cell1.innerText === "O") && cell1.innerText === cell2.innerText && cell2.innerText === cell3.innerText,
        'option2': (cell4.innerText === "X" || cell4.innerText === "O") && cell4.innerText === cell5.innerText && cell5.innerText === cell6.innerText,
        'option3': (cell7.innerText === "X" || cell7.innerText === "O") && cell7.innerText === cell8.innerText && cell8.innerText === cell9.innerText,

        'option4': (cell1.innerText === "X" || cell1.innerText === "O") && cell1.innerText === cell4.innerText && cell4.innerText === cell7.innerText,
        'option5': (cell2.innerText === "X" || cell2.innerText === "O") && cell2.innerText === cell5.innerText && cell5.innerText === cell8.innerText,
        'option6': (cell3.innerText === "X" || cell3.innerText === "O") && cell3.innerText === cell6.innerText && cell6.innerText === cell9.innerText,

        'option7': (cell1.innerText === "X" || cell1.innerText === "O") && cell1.innerText === cell5.innerText && cell5.innerText === cell9.innerText,
        'option8': (cell3.innerText === "X" || cell3.innerText === "O") && cell3.innerText === cell5.innerText && cell5.innerText === cell7.innerText,
    }
    for (var option in winningOptions) {
        if (winningOptions[option]) {
            ifwin = true;
            stopGame()
        } else if (counter === 9) {
            ifwin = false;
            stopGame()
        }
    }
}

function stopGame() {
    var announce = document.getElementById('result')
    if (counter === 9 && ifwin === false) {
        announce.innerText = "No winners! It is a tie!";
    } else if (counter % 2 === 1 && ifwin === true) {
        announce.innerText = "Congrats! Player 1 wins!!!";
        lastWinner = player1;
    } else if (counter % 2 === 0 && ifwin === true) {
        announce.innerText = "Congrats! Player 2 wins!!!";
        lastWinner = player2;
    }
}
function addX(id) {
    var cell = document.getElementById(id);

    if (cell.innerHTML === "&nbsp;") {
        if (xFlag) {
            cell.innerText = player1
            xFlag = false;
        } else {
            cell.innerText = player2
            xFlag = true;
        }
        counter++
    } else {
        alert('Pick an empty square')
    }
}

function play(id) {
    if (!ifwin) {
        addX(id);
        winCheck()
    }
}

function resetGame() {
    var announce = document.getElementById('result')
    var cells = document.querySelectorAll('.cells');

    cells.forEach(cell => {
        cell.innerHTML = "&nbsp;"
    })

    announce.innerText = '';
    counter = 0;
    ifwin = false;
    // xFlag = true;

    if (lastWinner === player1) {
        xFlag = true;
    } else if (lastWinner === player2) {
        xFlag = false;
    }

}





