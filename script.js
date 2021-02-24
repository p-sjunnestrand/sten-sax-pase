document.getElementById('roll').addEventListener('click', function() {
    let randomIntA = Math.floor(Math.random() * 3 + 1);
    let randomIntB = Math.floor(Math.random() * 3 + 1);
    console.log('randomInt: ',randomIntA, randomIntB);
    let result = Math.round((randomIntA/randomIntB)*10)/10;
    playerChoice(randomIntA, randomIntB);
    checkResult(result);
    
});
console.log('A wins on 0.3/ 2 /1.5');

function checkResult (result) {
    if (result == 0.3 || result == 2 || result == 1.5) {
        console.log('Spelare ett vinner!');
        document.getElementById('result').innerHTML = 'Spelare ett vinner!';
    } else if (result == 1) {
        console.log("Lika!");
        document.getElementById('result').innerHTML = 'Lika!';
    } else {
        console.log("Spelare två vinner!");
        document.getElementById('result').innerHTML = 'Spelare två vinner!';
    }
    console.log('result: ',result);
}

function playerChoice (playerA, playerB) {
    switch (playerA) {
        case 1:
            console.log("Spelare ett valde sten");
            document.getElementById('playerOneChoice').innerHTML = 'Spelare ett valde sten.';
            break;
        case 2:
            console.log("Spelare ett valde påse");
            document.getElementById('playerOneChoice').innerHTML = 'Spelare ett valde påse.';
            break;
        case 3:
            console.log("Spelare ett valde sax");
            document.getElementById('playerOneChoice').innerHTML = 'Spelare ett valde sax.';
            break;
    }
    console.log('playerA: ',playerA);
    switch (playerB) {
        case 1:
            console.log("Spelare två valde sten");
            document.getElementById('playerTwoChoice').innerHTML = 'Spelare två valde sten.';
            break;
        case 2:
            console.log("Spelare två valde påse");
            document.getElementById('playerTwoChoice').innerHTML = 'Spelare två valde påse.';
            break;
        case 3:
            console.log("Spelare två valde sax");
            document.getElementById('playerTwoChoice').innerHTML = 'Spelare två valde sax.';
            break;
    }
    console.log('playerB: ',playerB);
}