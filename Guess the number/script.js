let guesses = [];
let correctNumber = getRandomNumber();
//console.log(correctNumber);

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
};


function playGame() {
    let numberGuess = document.getElementById('number-guess').value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

function displayResult(numberGuess) {
    if (numberGuess < correctNumber) {
        // console.log("Too low");
        showNumberBelow();
    }
    else if (numberGuess > correctNumber) {
        // console.log("Too high");
        showNumberAbove();
    }
    else {
        // console.log("You got it right");
        showYouWon();
    }
}

function initGame() {
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
}

function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}


function getRandomNumber() {
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
}

/*function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);
}*/

function saveGuessHistory(guess) {
    guesses.push(guess);
}

function displayHistory() {
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>";
    while (index >= 0) {
        list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>";
        index -= 1;
    }
    list += '</ul>';
    document.getElementById("history").innerHTML = list;
    //     let historyList = document.getElementById("history");
    //   historyList.innerHTML = "";

    //   for (let i = guesses.length - 1; i >= 0; i--) {
    //     let listItem = document.createElement("li");
    //     listItem.textContent = "You guessed " + guesses[i];
    //     listItem.classList.add("list-group-item");
    //     historyList.appendChild(listItem);
    //   }
}

function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialogClass = "alert alert-warning";
            break;
        case "won":
            dialogClass = "alert alert-success";
            break;
        default:
            dialogClass = "alert";
    }

    return "<div class='" + dialogClass + "' role='alert'>" + text + "</div>";
    // switch (dialogType) {
    //     case "warning":
    //         dialog = "<div class='alert alert-warning' role='alert'>";
    //         break;
    //     case 'won':
    //         dialog = "<div class='alert alert-success' role='alert'>";
    //         break;
    //     default:
    //         dialog = "<div class='alert' role='alert'>";
    // }

    // dialog += text;
    // dialog += "</div>";
    // return dialog;
}


function showYouWon() {
    const text = "Awesome job, you got it!";
    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!";
    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

