const choiceArray = 
    [{ 
        weapon : "sten",
        img : "img/org/Rock-paper-scissors_(rock).png"
    },
    {
        weapon : "sax",
        img : "img/org/Rock-paper-scissors_(scissors).png"
    },
    {
        weapon : "påse",
        img : "img/org/Rock-paper-scissors_(paper).png"
    }];
let livesPlayerOne = 1;
let livesPlayerTwo = 1;
let roundCounter = 0;
console.log(livesPlayerOne);
console.log(livesPlayerTwo);
// let displayScoreOne = document.getElementById('scorePlayerOne');
// let displayScoreTwo = document.getElementById('scorePlayerTwo');


// // console.log('A wins on 0.5/ 0.7 /3');

// function checkResult (result) {
//     if (result == 0.5 || result == 0.7 || result == 3) {
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
    fighterHeader.innerHTML = 'Välj kämpar!';
    document.getElementById('wrapper').appendChild(fighterHeader);
    fighterHeader.id = 'fighterHeader';
    let playerSide = document.createElement('div');
    playerSide.id = 'playerSide';
    playerSide.classList.add('fighterSide');
    document.getElementById('wrapper').appendChild(playerSide);

    let chooseFighterPlayer = document.createElement('div');
    chooseFighterPlayer.classList.add('chooseFighterPlayer');
    chooseFighterPlayer.innerHTML = 'Din kämpe';
    playerSide.appendChild(chooseFighterPlayer);
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

    let chooseFighterComputer = document.createElement('div');
    chooseFighterComputer.classList.add('chooseFighterComputer');
    chooseFighterComputer.innerHTML = 'Datorns kämpe';
    computerSide.appendChild(chooseFighterComputer);

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
    fade(blackFade, playerOne, playerTwo);

    // clears the content underneath and then removes fade filter
    // setTimeout( () => {
    //     document.getElementById('wrapper').innerHTML = '';
    //     blackFade.remove();
    //     playerLeft(playerOne);
    
        // setTimeout( () => {
        //     //creates a picture of chosen player character that slides in from left
        //     let playerSlide = document.createElement('div');
        //     playerSlide.id = 'playerSlide';
        //     let playerSlidePic = document.createElement('img');
        //     playerSlidePic.id = 'playerSlidePic';
        //     playerSlidePic.src = playerOne.picture;
        //     console.log(playerSlidePic);
        //     playerSlide.appendChild(playerSlidePic);
        //     document.getElementById('wrapper').appendChild(playerSlide);
        //     let playerText = document.createElement('div');
        //     playerText.id = 'playerText';
        //     playerText.insertAdjacentHTML('afterbegin', `${playerOne.fighter}`);
        //     playerSlide.appendChild(playerText);

        //     setTimeout( () => {
        //         // creates the text VS
        //         let vsText = document.createElement('div');
        //         vsText.innerHTML = 'VS';
        //         vsText.id ='vs';
        //         document.getElementById('wrapper').appendChild(vsText);
                
        //         setTimeout( () => {
        //             //creates a picture of chosen computer character that slides in from right
        //             let computerSlide = document.createElement('div');
        //             computerSlide.id = 'computerSlide';
        //             let computerText = document.createElement('div');
        //             computerText.id = 'computerText';
        //             computerText.insertAdjacentHTML('afterbegin', `${playerTwo.fighter}`);
        //             computerSlide.appendChild(computerText);
        //             let computerSlidePic = document.createElement('img');
        //             computerSlidePic.id = 'computerSlidePic';
        //             computerSlidePic.src = playerTwo.picture;
        //             computerSlide.appendChild(computerSlidePic);
        //             document.getElementById('wrapper').appendChild(computerSlide);

        //             setTimeout( () => {
        //                 loadMatch();
                        
        //             }, 2000)
        //         }, 500);
        //     }, 700);
        // }, 500);
    // }, 500)
}

function fade(blackFade, playerOne, playerTwo) {
    //fades screen to black and loads further functions
    setTimeout(()=>{
        document.getElementById('wrapper').innerHTML = '';
        blackFade.remove();
        playerLeft(playerOne, playerTwo);
    }, 500); 
}
function playerLeft(playerOne, playerTwo){
    setTimeout(()=>{
        //creates a picture of chosen player character that slides in from left
        let playerSlide = document.createElement('div');
        playerSlide.id = 'playerSlide';
        let playerSlidePic = document.createElement('img');
        playerSlidePic.id = 'playerSlidePic';
        playerSlidePic.src = playerOne.picture;
        console.log(playerSlidePic);
        playerSlide.appendChild(playerSlidePic);
        document.getElementById('wrapper').appendChild(playerSlide);
        let playerText = document.createElement('div');
        playerText.id = 'playerText';
        playerText.insertAdjacentHTML('afterbegin', `${playerOne.fighter}`);
        playerSlide.appendChild(playerText);
        vsSlide(playerTwo);
    }, 500);
}
function vsSlide(playerTwo){
    setTimeout( () => {
        // creates the text VS
        let vsText = document.createElement('div');
        vsText.innerHTML = 'VS';
        vsText.id ='vs';
        document.getElementById('wrapper').appendChild(vsText);
        playerRight(playerTwo);
    }, 700);
}
function playerRight(playerTwo){
    setTimeout( () => {
        //creates a picture of chosen computer character that slides in from right
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
        document.getElementById('wrapper').appendChild(computerSlide);
        shrinkPlayers(playerSlide, playerSlidePic, playerText, computerSlide, computerSlidePic, computerText);
    }, 500);
}

function shrinkPlayers(playerSlide, playerSlidePic, playerText, computerSlide, computerSlidePic, computerText) {
    // loads match screen.
    setTimeout(()=>{
        playerSlide.classList.add('shrinkPic');
        playerSlidePic.classList.add('shrinkPic');
        playerText.classList.add('shrinkPic');
        computerSlide.classList.add('shrinkPicComputer');
        computerSlidePic.classList.add('shrinkPicComputer');
        computerText.classList.add('shrinkPicComputer');
        setTimeout(()=>{
            playerSlidePic.style.width = '250px';
            computerSlidePic.style.width = '250px';
            document.getElementById('vs').remove();
        }, 1000)
        
        loadAssets();
    }, 2000);
}
function loadAssets(){
    roundCounter++;
    console.log(livesPlayerOne, livesPlayerTwo);
    setTimeout(()=>{
        if (roundCounter > 1){
            // let removeStuff = document.querySelector('.playerWeapon');
            // removeStuff.remove();
            document.getElementById('computerHUD').remove();
            document.getElementById('playerHUD').remove();
            document.getElementById('chooseWeaponPrompt').remove();
            document.getElementById('matchText').remove();
        }
        let playerHUD = document.createElement('div');
        playerHUD.id = 'playerHUD';
        document.getElementById('wrapper').appendChild(playerHUD);
        let heartContainerPlayer = document.createElement('div');
        heartContainerPlayer.classList.add('heartContainerPlayer');
        playerHUD.appendChild(heartContainerPlayer);
        loadHearts(heartContainerPlayer, livesPlayerOne, 'Player');

        let computerHUD = document.createElement('div');
        computerHUD.id = 'computerHUD';
        document.getElementById('wrapper').appendChild(computerHUD);
        let computerWeaponWrap = document.createElement('div');
        computerWeaponWrap.classList.add('computerWeaponWrap');
        computerHUD.appendChild(computerWeaponWrap);

        let heartContainerComputer = document.createElement('div');
        heartContainerComputer.classList.add('heartContainerComputer');
        computerHUD.appendChild(heartContainerComputer);
        loadHearts(heartContainerComputer, livesPlayerTwo, 'Computer');

        let matchText = document.createElement('div');
        matchText.id = 'matchText';
        document.getElementById('wrapper').appendChild(matchText);
        
        let playerWeaponText = document.createElement('div');
        playerWeaponText.classList.add('playerWeaponText');
        matchText.appendChild(playerWeaponText);

        let chooseWeaponPrompt = document.createElement('div');
        chooseWeaponPrompt.id = 'chooseWeaponPrompt';
        chooseWeaponPrompt.innerHTML = 'Välj ditt vapen!';
        matchText.appendChild(chooseWeaponPrompt);

        let computerWeaponText = document.createElement('div');
        computerWeaponText.classList.add('playerWeaponText');
        matchText.appendChild(computerWeaponText);

        PvCscreen(computerWeaponText, playerWeaponText);
    }, 1000)
}
function loadHearts(heartContainer, livesPlayer, player){
    for (i = 1; i <= livesPlayer; i++){
            heartContainer.insertAdjacentHTML('beforeend', `<div class = 'heart${player}'></div>`);
            console.log(i);
            console.log(livesPlayerTwo);
    }
}
function PvCscreen (computerWeaponText, playerWeaponText) {
    let weaponHead = document.createElement('div');
    weaponHead.id = 'weaponHead';
    weaponHead.innerHTML = 'Välj ett vapen';
    playerHUD.insertAdjacentElement('beforeend', weaponHead);
    let weaponsWrp = document.createElement('ul');
    weaponsWrp.id = 'weaponsWrp';
    playerHUD.insertAdjacentElement('beforeend', weaponsWrp);
    for (let i=0; i<=2; i++) {
        weaponsWrp.insertAdjacentHTML('beforeend', `<li class = 'weapon'><img src = "${choiceArray[i].img}" id='${choiceArray[i].weapon}' class = 'weapon'</li>`);
        console.log(choiceArray[i].weapon);
    }
    let selectedWeaponText = document.createElement('div');
    selectedWeaponText.classList.add('weaponText');
    playerHUD.appendChild(selectedWeaponText);

    let playerChoice;

    document.getElementById('weaponsWrp').addEventListener('click', function(evt){
        console.log(evt.target.id);
        let btnWrp = document.createElement('ul');
        let btnRoll = document.createElement('li');
        btnRoll.classList.add('btn');
        btnRoll.innerHTML = 'Klunsa!'
        btnRoll.addEventListener('click', function(){
            console.log(playerFighter);
            startFight(btnRoll, weaponsWrp, weaponHead, selectedWeaponText, roundCounter, playerChoice, computerWeaponText, playerWeaponText);
        }); 
        if (playerChoice == undefined){
            chooseWeaponPrompt.innerHTML = '';
            chooseWeaponPrompt.appendChild(btnWrp);
            btnWrp.appendChild(btnRoll);
        }
        let selectedWeapon = document.querySelector('.weaponSelected');
        if (selectedWeapon != null){
            selectedWeapon.classList.remove('weaponSelected');
        }
        switch (evt.target.id) {
            case "sten":
                playerChoice = 1; 
                console.log(playerChoice);
                break;
            case "sax":
                playerChoice = 2;
                console.log(playerChoice);
                break;
            case "påse":
                playerChoice = 3;
                console.log(playerChoice);
                break;
            }
        document.getElementById(evt.target.id).classList.add('weaponSelected');
        selectedWeaponText.innerHTML = evt.target.id;
    });
        
        
}

function startFight(btnRoll, weaponsWrp, weaponHead, selectedWeaponText, roundCounter, playerChoice, computerWeaponText, playerWeaponText){
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    console.log(computerChoice);
    btnRoll.remove();
    weaponsWrp.remove();
    weaponHead.remove();
    selectedWeaponText.remove();
    let roundText = document.createElement('div');
    roundText.classList.add('roundText');
    roundText.innerHTML = `Omgång ${roundCounter}`;
    document.getElementById('wrapper').appendChild(roundText);
    console.log(roundCounter);
    console.log(playerChoice);
    console.log(computerChoice);

    setTimeout(()=>{
        loadPlayerWeapon(playerChoice, computerChoice, computerWeaponText, playerWeaponText);
    }, 1700);
}
function loadPlayerWeapon(playerChoice, computerChoice, computerWeaponText, playerWeaponText){
    console.log(playerChoice);
    let playerWeapon = document.createElement('img');
    playerWeapon.classList.add('playerWeapon');
    console.log(choiceArray[playerChoice-1]);
    playerWeapon.src = choiceArray[playerChoice-1].img;
    playerHUD.appendChild(playerWeapon);
    console.log(playerChoice);
    setTimeout(()=>{
        loadPlayerWeaponText(playerChoice, computerChoice, computerWeaponText, playerWeaponText);
    }, 700);
}
function loadPlayerWeaponText(playerChoice, computerChoice, playerWeaponText, computerWeaponText){
    playerWeaponText.innerHTML = `Du valde ${choiceArray[playerChoice-1].weapon}`;
    console.log(playerChoice);
    setTimeout(()=> {
        loadComputerWeapon(playerChoice, computerChoice, computerWeaponText, playerWeaponText);
    }, 700);
}
function loadComputerWeapon(playerChoice, computerChoice, computerWeaponText, playerWeaponText){
    console.log(playerChoice);
    let computerWeapon = document.createElement('img');
    computerWeapon.classList.add('computerWeapon');
    console.log(choiceArray[computerChoice-1]);
    computerWeapon.src = choiceArray[computerChoice-1].img;
    console.log(playerChoice);
    document.querySelector('.computerWeaponWrap').insertAdjacentElement('afterbegin', computerWeapon);
    console.log(playerChoice);
    setTimeout(()=> {
        loadComputerWeaponText(playerChoice, computerChoice, computerWeaponText, playerWeaponText);
    }, 700);
}
function loadComputerWeaponText(playerChoice, computerChoice, computerWeaponText, playerWeaponText){
    computerWeaponText.innerHTML = `Motståndaren valde ${choiceArray[computerChoice-1].weapon}`;
    console.log(playerChoice);
    setTimeout(()=>{
        showResults(playerChoice, computerChoice, computerWeaponText, playerWeaponText);
    }, 1000);
}
function showResults(playerChoice, computerChoice, computerWeaponText, playerWeaponText){
    computerWeaponText.innerHTML = '';
    playerWeaponText.innerHTML = '';
    console.log(playerChoice, computerChoice);
    let result = Math.round((playerChoice/computerChoice)*10)/10;
    console.log(result);

    if (result == 0.5 || result == 0.7 || result == 3) {
        // console.log('Spelare ett vinner!');
        // document.getElementById('chooseWeaponPrompt').innerHTML = `${choiceArray[playerChoice-1].weapon} slår ${choiceArray[computerChoice-1].weapon}!`;
        // document.getElementById('chooseWeaponPrompt').classList.add('chooseWeaponPromptFade');
        livesPlayerTwo--;
        console.log(livesPlayerTwo)
        winner('Du vann!', choiceArray[playerChoice-1].weapon, choiceArray[computerChoice-1].weapon);
        
    } else if (result == 1) {
        // console.log("Lika!");
        // document.getElementById('chooseWeaponPrompt').innerHTML = 'Lika!';
        // document.getElementById('chooseWeaponPrompt').classList.add('chooseWeaponPromptFade');
        winner('Lika!', choiceArray[computerChoice-1].weapon, choiceArray[playerChoice-1].weapon, '');
    } else {
        // console.log("Spelare två vinner!");
        // document.getElementById('chooseWeaponPrompt').innerHTML = `${choiceArray[computerChoice-1].weapon} slår ${choiceArray[playerChoice-1].weapon}!`;
        // document.getElementById('chooseWeaponPrompt').classList.add('chooseWeaponPromptFade');
        livesPlayerOne--;
        console.log(livesPlayerOne);
        winner('Motståndaren vann!', choiceArray[computerChoice-1].weapon, choiceArray[playerChoice-1].weapon);  
    }
    
    
}
function winner (winnerMsg, weaponP, weaponC){
    console.log(winnerMsg);
    if (winnerMsg == 'Lika!'){
        document.getElementById('chooseWeaponPrompt').innerHTML = `${winnerMsg}`;
        document.getElementById('chooseWeaponPrompt').classList.add('chooseWeaponPromptFade');
        setTimeout(()=>{
            document.querySelector('.computerWeapon').classList.add('weaponFade');
            document.querySelector('.playerWeapon').classList.add('weaponFade');
            setTimeout(loadAssets(), 1000);
        }, 1000);
    } else {
        document.getElementById('chooseWeaponPrompt').innerHTML = `${weaponP} slår ${weaponC}!`;
        document.getElementById('chooseWeaponPrompt').classList.add('chooseWeaponPromptFade');

        let weaponMoveCounter = 0;
        let weaponMove = setInterval(()=> {
            if (winnerMsg == 'Du vann!'){
                document.querySelector('.playerWeapon').style.left = weaponMoveCounter + 'px';
                weaponMoveCounter += 20;
                console.log(weaponMoveCounter);
            } else {
                document.querySelector('.computerWeapon').style.right = weaponMoveCounter + 'px';
                console.log(weaponMoveCounter);
                weaponMoveCounter += 20;
            }
            if (weaponMoveCounter >= 645){
                clearInterval(weaponMove);
                if (winnerMsg == 'Du vann!'){
                    document.getElementById('computerSlidePic').classList.add('computerShake');
                    document.querySelector('.computerWeapon').classList.add('weaponFade');
                    document.querySelector('.playerWeapon').classList.add('weaponFade');
                    resolveWinner('.heartContainerComputer', 'heartDamageComputer', winnerMsg);
                    // setTimeout(()=>{
                    //     let heartDamageContainer = document.querySelector('.heartContainerComputer');
                    //     let heartDamage = heartDamageContainer.lastChild;
                    //     console.log(heartDamage);
                    //     heartDamage.classList.add('heartDamage');

                    //     let announceWinner = document.createElement('div');
                    //     announceWinner.innerHTML = `${winnerMsg}`;
                    //     announceWinner.classList.add('announceWinner');
                    //     document.getElementById('wrapper').appendChild(announceWinner);
                    // }, 1000);
                } else {
                    document.getElementById('playerSlidePic').classList.add('playerShake');
                    document.querySelector('.computerWeapon').classList.add('weaponFade');
                    document.querySelector('.playerWeapon').classList.add('weaponFade');
                    resolveWinner('.heartContainerPlayer', 'heartDamagePlayer', winnerMsg);
                }
                
            }
        }, 10);
        // setTimeout(()=> {
        //     document.getElementById('chooseWeaponPrompt').classList.remove('chooseWeaponPromptFade');
        //     document.getElementById('chooseWeaponPrompt').innerHTML = `${winnerMsg}`;
        //     setTimeout(()=> {
        //         document.getElementById('chooseWeaponPrompt').classList.add('chooseWeaponPromptFade');
        //     }, 1500)
        // }, 1000);
    }
}
function resolveWinner(heartContainer, damagedHeart, winnerMsg){
    setTimeout(()=>{
        let heartDamageContainer = document.querySelector(heartContainer);
        let heartDamage = heartDamageContainer.lastChild;
        console.log(heartDamage);
        heartDamage.classList.add(damagedHeart);
        

        let announceWinner = document.createElement('div');
        announceWinner.innerHTML = `${winnerMsg}`;
        announceWinner.classList.add('announceWinner');
        document.getElementById('wrapper').appendChild(announceWinner);
        setTimeout(()=> {
            // let removeStuff = document.querySelector('.playerWeapon');
            // removeStuff.remove();
            // document.getElementById('computerHUD').remove();
            // //document.getElementById('computerHUD').remove();
            // document.getElementById('chooseWeaponPrompt').remove();
            // document.getElementById('matchText').remove();
            // document.getElementById('vs').remove();
            if (livesPlayerOne == 0){
                console.log('Motståndaren vinner fajten!');
                console.log(blackFade);
            } else if (livesPlayerTwo == 0) {
                console.log('Du vinner fajtern!');
                console.log(blackFade);
            } else {
                loadAssets();
            }
        }, 2000);
    }, 1000);
}