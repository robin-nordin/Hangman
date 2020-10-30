// deklarerade ord att välja mellan
let wordList = ["bucket", "hanged"]; 

// väljer ett slumpat ord från listan
let word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word)

let clickedLetters = [];

let splitWord = word.split("");

let numOfGuesses = 0;

// visar klickade bokstäver
function addLetter(result) {
    console.log('Letter clicked: ', result);
    clickedLetters.push(result);
}

// knapp för att starta spelet
document.querySelector('#start').addEventListener('click', function () { 
    for(let i = 0; i <filledArray.length; i++) {
        let shower = document.createElement('p');
        shower.innerHTML = filledArray[i];
        console.log('filledArray', filledArray[i]);
        document.querySelector('#numbers-list').append(shower);
        document.querySelector('#start').style.display = "none";
    }
})

// funktion som visar understräcken
let filledArray = new Array(splitWord.length).fill('_'); 
console.log(filledArray);
function addLetter(result) {
    clickedLetters.push(result);
    console.log('Letters chosen array: ', clickedLetters);
}

// funktion med keyup som registrerar den tangent man tryckt på
window.addEventListener('keyup', function (event) {    
    var pressedButton = event.key;
    if (splitWord.indexOf(pressedButton) !== -1) {
    for (let i = 0; i <splitWord.length; i++) {
        if (splitWord[i] === pressedButton) {
            console.log('You found the letter: ', splitWord[i]);
            filledArray[i] = splitWord[i];
        }
    }
    hasWon()  
    } else {
        numOfGuesses = numOfGuesses + 1;  
        addParts();  
    }
    document.querySelector('#numbers-list').innerHTML = '';
        for(let i = 0; i <filledArray.length; i++) {
            let shower = document.createElement('p');
            shower.innerHTML = filledArray[i];
            console.log('filledArray', filledArray[i]);
            document.querySelector('#numbers-list').append(shower);
        }
});

// funktion som visar SVG:n när man trycker på fel bokstav
document.querySelector('#playagain').addEventListener('click', reset); 
function addParts() {  
    if(numOfGuesses == 1) {
        document.querySelector('figure').classList.add('scaffold');
    } else if (numOfGuesses == 2){
        document.querySelector('figure').classList.add('head');
    } else if (numOfGuesses == 3){
        document.querySelector('figure').classList.add('body');
    } else if (numOfGuesses == 4){
        document.querySelector('figure').classList.add('arms');
    } else if (numOfGuesses == 5){
        document.querySelector('figure').classList.add('legs');
        alert('Oh no! You lost! Want to play again?')
        window.location.reload();
}};

// funktion som visar en overlay när du vinner
function hasWon(){                  
    if (filledArray.join('') === word) {
        document.querySelector('.overlay').classList.add('show');
    }
}

// funktion som gör det möjligt att spela igen
function reset(){
    word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word)
    clickedLetters = [];
    splitWord = word.split("");
    numOfGuesses = 0;
    filledArray = filledArray.fill('_', 0, splitWord.length);
    document.querySelector('.overlay').classList.remove('show'); 
    document.querySelector('#numbers-list').innerHTML = '';
    document.querySelector('figure').classList.remove('scaffold');
    document.querySelector('figure').classList.remove('head');
    document.querySelector('figure').classList.remove('body');
    document.querySelector('figure').classList.remove('arms');
    for(let i = 0; i <filledArray.length; i++) {
        let shower = document.createElement('p');
        shower.innerHTML = filledArray[i];
        console.log('filledArray', filledArray[i]);
        document.querySelector('#numbers-list').append(shower);
    }
} 

