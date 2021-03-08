// const choiceArray = ["sten", "påse", "sax"];
// let scorePlayerOne = 0;
// let scorePlayerTwo = 0;
// let displayScoreOne = document.getElementById('scorePlayerOne');
// let displayScoreTwo = document.getElementById('scorePlayerTwo');
// PvCscreen();
// let playerChoice;
// document.getElementById('weaponsWrp').addEventListener('click', function(evt){
//     console.log(evt.target.id);
//     switch (evt.target.id) {
//         case "sten":
//             playerChoice = 1; 
//             console.log(playerChoice);
//             break;
//         case "påse":
//             playerChoice = 2;
//             console.log(playerChoice);
//             break;
//         case "sax":
//             playerChoice = 3;
//             console.log(playerChoice);
//             break;
//     }
// });

// document.getElementById('btnRoll').addEventListener('click', function(){
//     console.log(playerChoice);
//     if (playerChoice === undefined) {
//         document.getElementById('results').innerHTML = 'Välj ett vapen!';
//     } else {
//         PvCroll ();
//     }
// })

// // console.log('A wins on 0.3/ 2 /1.5');

// function checkResult (result) {
//     if (result == 0.3 || result == 2 || result == 1.5) {
//         console.log('Spelare ett vinner!');
//         document.getElementById('results').innerHTML = 'Spelare ett vinner!';
//         scorePlayerOne++;
//         displayScoreOne.innerHTML = scorePlayerOne;
//     } else if (result == 1) {
//         console.log("Lika!");
//         document.getElementById('results').innerHTML = 'Lika!';
//     } else {
//         console.log("Spelare två vinner!");
//         document.getElementById('results').innerHTML = 'Spelare två vinner!';
//         scorePlayerTwo++;
//         displayScoreTwo.innerHTML = scorePlayerTwo;
//     }
//     console.log('result: ',result);
// }

// function printPlayerChoice (playerChoice, computerRandomInt) {
//     document.getElementById('playerOneChoice').innerHTML = `Spelare ett valde ${choiceArray[playerChoice-1]}.`;
//     console.log(choiceArray[playerChoice-1]);
//     document.getElementById('playerTwoChoice').innerHTML = `Spelare två valde ${choiceArray[computerRandomInt-1]}.`;
//     console.log(choiceArray[computerRandomInt-1]);
// }

// function CvCroll () {
//     let randomIntA = Math.floor(Math.random() * 3 + 1);
//     let randomIntB = Math.floor(Math.random() * 3 + 1);
//     console.log('randomInt: ',randomIntA, randomIntB);
//     let result = Math.round((randomIntA/randomIntB)*10)/10;
//     printPlayerChoice(randomIntA, randomIntB);
//     checkResult(result);
// }

// function PvCscreen () {
//     let weaponsWrp = document.createElement('ul');
//     weaponsWrp.id = 'weaponsWrp';
//     document.getElementById('humanPlayer').insertAdjacentElement('beforeend', weaponsWrp);
//     for (let i=0; i<=2; i++) {
//         weaponsWrp.insertAdjacentHTML('beforeend', `<li id='${choiceArray[i]}'>${choiceArray[i]}</li>`);
//     }
    
//     displayScoreOne.innerHTML = scorePlayerOne;
    
//     displayScoreTwo.innerHTML = scorePlayerTwo;
// }

// function PvCroll () {
//     let computerRandomInt = Math.floor(Math.random() * 3 + 1);
//     console.log('randomInt: ', computerRandomInt);
//     let result = Math.round((playerChoice/computerRandomInt)*10)/10;
//     printPlayerChoice(playerChoice, computerRandomInt);
//     checkResult(result);
// }
startScreen();
let playerFighter;
let computerFighter;
let fighterArray = [
    {"fighter" : "Stefan", "id" : "stefan", "picture" : "img/square/stefan-square.jpg"},
    {"fighter" : "Greta", "id" : "greta", "picture" : "img/square/greta-square.jpg"},
    {"fighter" : "Babben", "id" : "babben", "picture" : "img/square/babben-square.jpg"},
    {"fighter" : "Ernst", "id" : "ernst", "picture" : "img/square/ernst-square.jpg"},
    {"fighter" : "Verka Serduchka", "id" : "verka", "picture" : "img/square/verka-square.jpg"},
    {"fighter" : "Gustav Vasa", "id" : "vasa", "picture" : "img/square/gustav_vasa.jpg"},
    {"fighter" : "Torsten", "id" : "torsten", "picture" : "img/square/torsten-square.jpg"},
    {"fighter" : "Hin Håle", "id" : "devil", "picture" : "img/square/baphomet-square.png"},
    {"fighter" : "Slumpad", "id" : "random", "picture" : ""}
];

document.getElementById('pickFighter').addEventListener('click', function(){
    fighterPicker();
})

function startScreen () {
    let startMenu = document.createElement('ul');
        startMenu.insertAdjacentHTML('beforeend', `<li id = 'pickFighter' class = 'btn'>Välj kämpe</li>`);
        document.getElementById('wrapper').appendChild(startMenu);
}

function fighterPicker () {
    document.getElementById('wrapper').innerHTML = '';

    let fighterHeader = document.createElement('header');
    fighterHeader.innerHTML = 'Välj din kämpe!';
    document.getElementById('wrapper').appendChild(fighterHeader);
    fighterHeader.id = 'fighterHeader';
    let playerSide = document.createElement('div');
    playerSide.id = 'playerSide';
    playerSide.classList.add('fighterSide');
    document.getElementById('wrapper').appendChild(playerSide);

    console.log(fighterArray);
    // let fighterWrapper = document.createElement('div');
    // fighterWrapper.classList.add('fighterWrapper');

    // for (fighter in fighterArray) {
    //     if (fighterArray[fighter].id == 'random') {
    //         fighterWrapper.insertAdjacentHTML('beforeend', `<div class = "fighter" id = "${fighterArray[fighter].id}P">?</div>`);
    //     } else {
    //         fighterWrapper.insertAdjacentHTML('beforeend', `<img src="${fighterArray[fighter].picture}" class = "fighter" id = "${fighterArray[fighter].id}P">`);
    //     }
    // }
    // playerSide.appendChild(fighterWrapper);

    let fighterWrapperP = document.createElement('div');
    fighterWrapperP.classList.add('fighterWrapper');

    for (fighter in fighterArray) {
        if (fighterArray[fighter].id == 'random') {
            fighterWrapperP.insertAdjacentHTML('beforeend', `<div class = "fighter ${fighterArray[fighter].id}" id = "${fighterArray[fighter].id}P">?</div>`);
        } else {
            fighterWrapperP.insertAdjacentHTML('beforeend', `<div class = "fighter ${fighterArray[fighter].id}"><img src="${fighterArray[fighter].picture}" class = "fighter ${fighterArray[fighter].id}" id = "${fighterArray[fighter].id}P"></div>`);
        }
    }
    playerSide.appendChild(fighterWrapperP);
    let chosenFighterP = document.createElement('div');
    chosenFighterP.id = 'chosenFighterP';
    chosenFighterP.classList.add('chosenFighter');
    playerSide.appendChild(chosenFighterP);

    let computerSide = document.createElement('div');
    computerSide.id = 'computerSide';
    playerSide.classList.add('fighterSide');
    document.getElementById('wrapper').appendChild(computerSide);

    let fighterWrapperC = document.createElement('div');
    fighterWrapperC.classList.add('fighterWrapper');

    for (fighter in fighterArray) {
        if (fighterArray[fighter].id == 'random') {
            fighterWrapperC.insertAdjacentHTML('beforeend', `<div class = "fighter ${fighterArray[fighter].id}" id = "${fighterArray[fighter].id}C">?</div>`);
        } else {
            fighterWrapperC.insertAdjacentHTML('beforeend', `<div class = "fighter ${fighterArray[fighter].id}"><img src="${fighterArray[fighter].picture}" class = "fighter ${fighterArray[fighter].id}" id = "${fighterArray[fighter].id}C"/></div>`);
        }
    }
    computerSide.appendChild(fighterWrapperC);
    let chosenFighterC = document.createElement('div');
    chosenFighterC.id = 'chosenFighterC';
    chosenFighterC.classList.add('chosenFighter');
    computerSide.appendChild(chosenFighterC);

    let startFightMessage = document.createElement('div');
    startFightMessage.id = 'startFightMessage';
    document.getElementById('wrapper').appendChild(startFightMessage);

    let buttonWrapper = document.createElement('div');
    buttonWrapper.id = 'buttonWrapper';
    document.getElementById('wrapper').appendChild(buttonWrapper);

    let buttonList = document.createElement('ul');
    buttonList.id = 'buttonList';
    buttonWrapper.appendChild(buttonList);

    buttonList.insertAdjacentHTML('beforeend', `<li id = 'startFightButton' class = 'btn'>Börja fajten!</li>`);

    fighterWrapperP.addEventListener('click', function(evt){
        console.log(evt);
        let selected = document.querySelector('.fighterSelectedP');
        if (selected != null){
            selected.classList.remove('fighterSelectedP');
        }
        for (fighter in fighterArray) {
            if (evt.target.classList[1] == fighterArray[fighter].id){
                console.log(fighterArray[fighter].fighter);
                if (fighterArray[fighter].fighter == 'Slumpad') {
                    let randomFighterP = Math.floor(Math.random() * 8);
                    playerFighter = fighterArray[randomFighterP]//.fighter;
                } else {
                    playerFighter = fighterArray[fighter]//.fighter;
                }
                chosenFighterP.innerHTML = fighterArray[fighter].fighter;
                document.getElementById(evt.target.id).classList.add('fighterSelectedP');
            }
        }
    });

    fighterWrapperC.addEventListener('click', function(evt){
        console.log(evt);
        let selected = document.querySelector('.fighterSelectedC');
        if (selected != null){
            selected.classList.remove('fighterSelectedC');
        }
        for (fighter in fighterArray) {
            if (evt.target.classList[1] == fighterArray[fighter].id){
                console.log(fighterArray[fighter].fighter);
                if (fighterArray[fighter].fighter == 'Slumpad') {
                    let randomFighterC = Math.floor(Math.random() * 8);
                    console.log(randomFighterC);
                    computerFighter = fighterArray[randomFighterC]//.fighter;
                } else {
                    computerFighter = fighterArray[fighter]//.fighter;
                }
                chosenFighterC.innerHTML = fighterArray[fighter].fighter;
                document.getElementById(evt.target.id).classList.add('fighterSelectedC');
            }
        }
    });

    document.getElementById('startFightButton').addEventListener('click', function(){
        //console.log(playerFighter);
        if (playerFighter === undefined || computerFighter === undefined){
            console.log('Välj en kämpe för dig själv och datorn!');
            startFightMessage.innerHTML = 'Välj en kämpe för dig själv och datorn!';
        }
        else {
            // startFightMessage.innerHTML = `${playerFighter.fighter} vs ${computerFighter.fighter}!`;
            loadFightScreen(playerFighter, computerFighter);
        }
    });
}

function loadFightScreen (playerOne, playerTwo) {
    // fades screen to black
    let blackFade = document.createElement('div');
    blackFade.id = "blackFade";
    document.querySelector('main').insertAdjacentElement('afterbegin', blackFade);

    setTimeout( () => {
        document.getElementById('wrapper').innerHTML = '';
        blackFade.remove();
    
        setTimeout( () => {
            //creates a picture of chosen player character that slides in from left
            let playerSlide = document.createElement('div');
            playerSlide.id = 'playerSlide';
            let playerSlidePic = document.createElement('img');
            playerSlidePic.id = 'playerSlidePic';
            playerSlidePic.src = playerOne.picture;
            console.log(playerSlidePic);
            playerSlide.appendChild(playerSlidePic);
            blackFade.appendChild(playerSlide);
            let playerText = document.createElement('div');
            playerText.id = 'playerText';
            playerText.insertAdjacentHTML('afterbegin', `${playerOne.fighter}`);
            playerSlide.appendChild(playerText);

            setTimeout( () => {
                // creates the text VS
                let vsText = document.createElement('div');
                vsText.innerHTML = 'VS';
                vsText.id ='vs';
                blackFade.appendChild(vsText);
                
                setTimeout( () => {
                    //creates a picture of chosen computer character that slides in from left
                    let computerSlide = document.createElement('div');
                    computerSlide.id = 'computerSlide';
                    let computerText = document.createElement('div');
                    computerText.id = 'computerText';
                    computerText.insertAdjacentHTML('afterbegin', `${playerTwo.fighter}`);
                    computerSlide.appendChild(computerText);
                    let computerSlidePic = document.createElement('img');
                    computerSlidePic.id = 'computerSlidePic';
                    computerSlidePic.src = playerTwo.picture;
                    computerSlide.appendChild(computerSlidePic);
                    blackFade.appendChild(computerSlide);

                    setTimeout( () => {
                        loadMatch();
                    }, 2000)
                }, 500);
            }, 700);
        }, 500);
    }, 500)
}

function loadMatch() {
    document.getElementById('wrapper').innerHTML = '';
    
}