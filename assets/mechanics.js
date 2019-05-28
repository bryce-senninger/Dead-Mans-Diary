let pages = [
    'April 14th: "Morning breaks, birds chirp outside the dusty broken shutters of my bedside window."', 
    'May 10th: "Just ten more minutes."',
    'September 4th: "The cupboard is empty."',
    'January 7th: "I heard the sound of muffled voices from upstairs. I can\'t sleep. I wonder what they\'re saying..."',
    'October 31st: "Screams and laughter outside the dusty broken shutters. What a silly combination."'
]

let options = [
    "<b>-cigarette</b>",
    "<b>-make tea</b>",
    "<b>-adjust blinds</b>",
    "<b>-do nothing</b>",
    "<b>-do something</b>",
    "<b>-take a shot</b>",
    "<b>-drink beer</b>",
    "<b>-check phone</b>",
]

var cigarettes = 0;

var cupsOfTea = 0;

var timesSleptIn = 0;

var shots = 0;

var beers = 0;

var missedCalls = 0;

var nah = 0;

var pageIndex = 0;


function choosePage(){
    let newPage = pages[Math.floor(Math.random()*pages.length)];
    document.getElementById("pageText").innerHTML = newPage;
}

function listOption1(){
    let choice1 = options[Math.floor(Math.random()*options.length)];
    document.getElementById("option1").innerHTML = choice1;
    if (choice1 === options[0]) {
        document.getElementById("option1").addEventListener("click", increaseCigs);
    } else if (choice1 === options[1]) {
        document.getElementById("option1").addEventListener("click", increaseCups);
    } else if (choice1 === options[2]) {
        document.getElementById("option1").addEventListener("click", increaseSleep);
    } else if (choice1 === options[5]) {
        document.getElementById("option1").addEventListener("click", increaseShots);
    } else if (choice1 === options[6]) {
        document.getElementById("option1").addEventListener("click", increaseBeers);
    } else if (choice1 === options[7]) {
        document.getElementById("option1").addEventListener("click", increaseCalls);
    } else {
        document.getElementById("option1").addEventListener("click", increaseNots);
    }
}

function listOption2(){
    let choice2 = options[Math.floor(Math.random()*options.length)];
    document.getElementById("option2").innerHTML = choice2;
    if (choice2 === options[0]) {
        document.getElementById("option2").addEventListener("click", increaseCigs);
    } else if (choice2 === options[1]) {
        document.getElementById("option2").addEventListener("click", increaseCups);
    } else if (choice2 === options[2]) {
        document.getElementById("option2").addEventListener("click", increaseSleep);
    } else if (choice2 === options[5]) {
        document.getElementById("option2").addEventListener("click", increaseShots);
    } else if (choice2 === options[6]) {
        document.getElementById("option2").addEventListener("click", increaseBeers);
    } else if (choice2 === options[7]) {
        document.getElementById("option2").addEventListener("click", increaseCalls);
    } else {
        document.getElementById("option2").addEventListener("click", increaseNots);
    }
}

function increaseCigs(){
    let cigCount = cigarettes + 1;
    document.getElementById("cigarettes").innerHTML = "Cigarettes: " + cigCount;
}

function increaseCups(){
    let cupCount = cupsOfTea + 1;
    document.getElementById("cupsOfTea").innerHTML = "Cups of tea: " + cupCount;
}

function increaseSleep(){
    let sleepCount = timesSleptIn + 1;
    document.getElementById("timesSleptIn").innerHTML = "Times slept in: " + sleepCount;
}

function increaseShots(){
    let shotCount = shots + 1;
    document.getElementById("shots").innerHTML = "Shots taken: " + shotCount;
}

function increaseBeers(){
    let beerCount = beers + 1;
    document.getElementById("beers").innerHTML = "Beers consumed: " + beerCount;
}

function increaseCalls(){
    let callCount = missedCalls + 1;
    document.getElementById("missedCalls").innerHTML = "Missed calls: " + callCount;
}

function increaseNots(){
    let timesNo = nah + 1;
    document.getElementById("notToday").innerHTML = "Not today: " + timesNo;
}


choosePage();

listOption1();

listOption2();








