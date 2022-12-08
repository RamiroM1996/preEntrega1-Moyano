let cardsUp = 0; 
let card1 = null;
let card2 = null; 
let firstResult = null;
let secondResult = null; 
let movements = 0; 
let score = 0;
let booleanTimer = false; 
let timer = 35;
let regresiveTimeId = null;
let initialTime = 35;
//html 

let seeMovements = document.getElementById('movements');
let seeScores = document.getElementById('score');
let seeTime = document.getElementById('timerCount');
//numeros aleatorios 

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; 
numbers = numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers); 

//funciones 
function hideCards() {
    for (let i = 0; i <= 15; i++){
        let blockedCard = document.getElementById(i);
        blockedCard.innerHTML = numbers [i];
        blockedCard.disabled = true;
    }
}



 function elapsedTime() {
    regresiveTimeId = setInterval(() => {
        timer--;
        seeTime.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer== 0) {
            clearInterval(regresiveTimeId);
            hideCards();
        }
    }, 1000);
}


function turnRound(id) {
    
    if(booleanTimer == false) {
        elapsedTime();
        booleanTimer = true;
    }

    cardsUp++;
    console.log(cardsUp); 

    if(cardsUp == 1) {
        //ver primer resultado
        card1 = document.getElementById(id);
        firstResult = numbers[id];  
        card1.innerHTML = firstResult; 

        //Deshabilitar card1
        card1.disabled = true; 
    }else if (cardsUp == 2) {
        card2 = document.getElementById(id);
        secondResult = numbers[id]; 
        card2.innerHTML = secondResult; 

        //deshabilitar card2
        card2.disabled = true;

        //incremento movements 
        movements++;
        seeMovements.innerHTML = `Movimientos: ${movements}`;

        if(firstResult == secondResult) {
            cardsUp = 0; 

            //score 
            score++;
            seeScores.innerHTML = `Aciertos: ${score}`;

            if(score == 8) {
                clearInterval(regresiveTimeId);
                seeScores.innerHTML = `Aciertos: ${score} 😀`;
                seeTime.innerHTML = `Felicitaciones!🎉🎉 lo resolviste en ${initialTime - timer} segundos!`;
                seeMovements.innerHTML = `Movimientos ${movements} 🎉🎉🎉`;
            }
        }else {
            //mostrar cartas durante x milisegundos
            setTimeout(() => {
                card1.innerHTML = " ";
                card2.innerHTML = " "; 
                card1.disabled = false;
                card2.disabled = false;
                cardsUp = 0;
            },800);
        }
    }
}