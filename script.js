let random = Math.ceil(Math.random() * 10)
document.querySelector('.new-game-btn').onclick = newGame
let attempts = 3
document.querySelector('.game-field').onclick = click



function click(event){
    let target = event.target
    if(attempts == 0){
        document.querySelector('.attempts-span').innerHTML = ' закончились, попробуйте снова'
        alert('Попытки закончились, попробуйте снова')
        return
    }
    attempts -= 1
    if(target.innerHTML == random){
        alert('Победа!')
        newGame()
    }
    document.querySelector('.attempts-span').innerHTML = attempts
}

function newGame(){
    attempts = 3
    random = Math.ceil(Math.random() * 10)
    if(random == 1 || random == 2 || random == 3){
        document.querySelector('.furrer-script').innerHTML = 'Число от 1 до 3'
    }
    if(random == 4 || random == 5 || random == 6){
        document.querySelector('.furrer-script').innerHTML = 'Число от 4 до 6'
    }
    if(random == 6 || random == 7 || random == 8){
        document.querySelector('.furrer-script').innerHTML = 'Число от 6 до 8'
    }
    if(random == 8 || random == 9 || random == 10){
        document.querySelector('.furrer-script').innerHTML = 'Число от 8 до 10'
    }
 
    document.querySelector('.attempts-span').innerHTML = attempts

}

