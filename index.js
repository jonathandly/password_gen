const lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const numbers = ['0','1','2','3','4','5','6','7','8','9']
const symbols = ['!','@','#','$','%','^','&','*']

const letterCount = getRandoNumIntInclusive(7, 9)
const numberCount = getRandoNumIntInclusive(1, 3)
const symbolCount = getRandoNumIntInclusive(1, 3)

const randomLower = Math.floor(Math.random() * lowercaseLetters.length);
const randomUpper = Math.floor(Math.random() * uppercaseLetters.length)
const randomNumber = Math.floor(Math.random() * numbers.length)
const randomSymbol = Math.floor(Math.random() * symbols.length)

let password = []

function getRandoNumIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const uppercaseId = document.getElementById('uppercase')
const lowercaseId = document.getElementById('lowercase') 
const numbersId = document.getElementById('numbers')
const symbolsId = document.getElementById('symbols')

const veryDarkGrey = '#18171F'
const darkGrey = '#24232C'
const grey = '#817D92'
const almostWhite = '#E6E5EA'
const neonGreen = '#A4FFAF'
const yellow = '#F8CD65'
const orange = '#FB7C58'
const red = '#F64A4A'

const sliderValue = document.getElementById('sliderValue')
const slider = document.getElementById('rangeSelector').oninput = function() {
    sliderValue.innerHTML = this.value
}

const rangeSelector = document.getElementById('rangeSelector')
window.onload = function() {
    const checkbox = document.getElementsByClassName('checkbox')
    rangeSelector.value = 3
    for(let i = 0; i <= checkbox.length; i++) {
        if(checkbox[i].type == 'checkbox') {
           checkbox[i].checked = false
        }
    }
}

const barOne = document.getElementById('barOne')
const barTwo = document.getElementById('barTwo')
const barThree = document.getElementById('barThree')
const barFour = document.getElementById('barFour')

function boxCheck() {
    let checkCount = 0
    if(uppercaseId.checked && !lowercaseId.checked && !numbersId.checked && !symbolsId.checked) {
        checkCount = 1
    } else if(lowercaseId.checked && !uppercaseId.checked && !numbersId.checked && !symbolsId.checked) {
        checkCount = 1
    } else if(numbersId.checked && !uppercaseId.checked && !lowercaseId.checked && !symbolsId.checked) {
        checkCount = 1
    } else if(symbolsId.checked && !uppercaseId.checked && !lowercaseId.checked && !numbersId.checked) {
        checkCount = 1
    } else if(uppercaseId.checked && lowercaseId.checked && !numbersId.checked && !symbolsId.checked || uppercaseId.checked && numbersId.checked && !lowercaseId.checked && !symbolsId.checked || uppercaseId.checked && symbolsId.checked && !lowercaseId.checked && !numbersId.checked || lowercaseId.checked && numbersId.checked && !uppercaseId.checked && !symbolsId.checked || lowercaseId.checked && symbolsId.checked && !uppercaseId.checked && !numbersId.checked || numbersId.checked && symbolsId.checked && !uppercaseId.checked && !lowercaseId.checked) {
        checkCount = 2
    } else if(uppercaseId.checked && lowercaseId.checked && numbersId.checked && !symbolsId.checked || lowercaseId.checked && numbersId.checked && symbolsId.checked && !uppercaseId.checked || uppercaseId.checked && lowercaseId.checked && symbolsId.checked && !numbersId.checked || uppercaseId.checked && numbersId.checked && symbolsId.checked && !lowercaseId.checked) {
        checkCount = 3
    } else if(uppercaseId.checked && lowercaseId.checked && numbersId.checked && symbolsId.checked) {
        checkCount = 4
    }

    if(checkCount == 0) {
        return (barOne.style.backgroundColor = veryDarkGrey,
            barTwo.style.backgroundColor = veryDarkGrey,
            barThree.style.backgroundColor = veryDarkGrey,
            barFour.style.backgroundColor = veryDarkGrey)
    }

    if(checkCount == 1) {
        console.log(checkCount)
        return (barOne.style.backgroundColor = red,
            barTwo.style.backgroundColor = veryDarkGrey,
            barThree.style.backgroundColor = veryDarkGrey,
            barFour.style.backgroundColor = veryDarkGrey)
    } else if(checkCount == 2) {
        console.log(checkCount)
        return (barOne.style.backgroundColor = orange,
        barTwo.style.backgroundColor = orange,
        barThree.style.backgroundColor = veryDarkGrey,
        barFour.style.backgroundColor = veryDarkGrey)
    } else if(checkCount == 3) {
        console.log(checkCount)
        return (barOne.style.backgroundColor = yellow,
        barTwo.style.backgroundColor = yellow,
        barThree.style.backgroundColor = yellow,
        barFour.style.backgroundColor = veryDarkGrey)
    } else if(checkCount == 4) {
        console.log(checkCount)
        return (barOne.style.backgroundColor = neonGreen,
        barTwo.style.backgroundColor = neonGreen,
        barThree.style.backgroundColor = neonGreen,
        barFour.style.backgroundColor = neonGreen) 
    }
    return checkCount
}

uppercaseId.addEventListener('change', boxCheck)
lowercaseId.addEventListener('change', boxCheck)
numbersId.addEventListener('change', boxCheck)
symbolsId.addEventListener('change', boxCheck)

