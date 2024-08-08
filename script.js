let images = document.querySelectorAll('.item-img');
let message = document.querySelector('.msg');
let restartBtn = document.querySelector('.restartBtn');
let userScoreContainer = document.querySelector('#userScore');
let computerScoreContainer = document.querySelector('#computerScore');
let optionArray = ['Rock' , 'Paper' , 'Scissors'];

images.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        // In the image alt is unique , so we can access image values from alt. 
        let userChoice = e.target.alt;
        let computerChoice = optionArray[randomNum];

        if(userChoice == computerChoice){
            message.innerText = `Match Draw | Both Picked : ${userChoice}`;
            message.style.backgroundColor = '#212121';
        } else{
            if(userChoice == 'Rock'){
                // sci , paper
                if (computerChoice == 'Paper'){
                    message.innerText = `Computer Wins | You Picked : ${userChoice} and Computer Picked : ${computerChoice}`;
                    computerScoreContainer.innerText = Number(computerScoreContainer.innerText) + 1 ;
                    message.style.backgroundColor = 'red';
                } else{
                    message.innerText = `User Wins | You Picked : ${userChoice} and Computer Picked : ${computerChoice}`;
                    userScoreContainer.innerText = Number(userScoreContainer.innerText) + 1 ;
                    message.style.backgroundColor = 'green';
                }
            } else if (userChoice == 'Paper'){
                // rock , scri
                if (computerChoice == 'Rock'){
                    message.innerText = `User Wins | You Picked : ${userChoice} and Computer Picked : ${computerChoice}`;
                    userScoreContainer.innerText = Number(userScoreContainer.innerText) + 1 ;
                    message.style.backgroundColor = 'Green';
                } else{
                    message.innerText = `Computer Wins | You Picked : ${userChoice} and Computer Picked : ${computerChoice}`;
                    computerScoreContainer.innerText = Number(computerScoreContainer.innerText) + 1 ;
                    message.style.backgroundColor = 'red';
                }
            } else if (userChoice == 'Scissors'){
                // rock , paper
                if (computerChoice == 'Rock'){
                    message.innerText = `Computer Wins | You Picked : ${userChoice} and Computer Picked : ${computerChoice}`;
                    computerScoreContainer.innerText = Number(computerScoreContainer.innerText) + 1 ;
                    message.style.backgroundColor = 'red';
                } else{
                    message.innerText = `User Wins | You Picked : ${userChoice} and Computer Picked : ${computerChoice}`;
                    userScoreContainer.innerText = Number(userScoreContainer.innerText) + 1 ;
                    message.style.backgroundColor = 'green';
                }
            }
        }
    })
},false);

restartBtn.addEventListener('click',()=>{
    userScoreContainer.innerText = 0;
    computerScoreContainer.innerText = 0;
    message.innerText = 'Pick Your Move';
    message.style.backgroundColor = '#212121';
},false)