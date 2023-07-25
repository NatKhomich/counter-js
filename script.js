const counterElement = document.getElementById('numberArea')
const settingsElement = document.getElementById('settings')
const buttonsElement = document.getElementById('buttons')
const maxInputElement = document.getElementById('maxInput')
const minInputElement = document.getElementById('minInput')

let inputMaxValue = 5
maxInputElement.value = inputMaxValue

let inputMinValue = 0
minInputElement.value = inputMinValue

let counter = 0

const incrementCounter = () => {
    if (inputMaxValue && +counter >= +inputMaxValue) {
        alert('Вы достигли максимального значения')
        return
    }
    counter++
    counterElement.innerText = counter

}

const resetCounter = () => {
    counter = minInputElement.value
    counterElement.innerText = counter
}

const openSettings = () => {
    settingsElement.style.display = 'block'
    counterElement.style.display = 'none'
    buttonsElement.style.display = 'none'
}

const openCounter = () => {
    settingsElement.style.display = 'none'
    counterElement.style.display = 'flex'
    buttonsElement.style.display = 'flex'
}

const resetSettings = () => {
    inputMaxValue = 0
    maxInputElement.value = 0

    inputMinValue = 0
    minInputElement.value = 0
}

maxInputElement.addEventListener('input', () => {
    if(maxInputElement.value < 1) {
        alert('Максимальное значение не может быть меньше 1')
        maxInputElement.value = 0
        return
    }
    if(maxInputElement.value <= minInputElement.value) {
        console.log(inputMinValue)
        alert('Максимальное значение не может быть меньше или равно минимальному')
        maxInputElement.value = inputMaxValue
        return
    }
    inputMaxValue = maxInputElement.value
})

minInputElement.addEventListener('input', () => {
    if(minInputElement.value < 0) {
        alert('Нельзя вводить отрицательные значения')
        minInputElement.value = 0
        return
    }
    if(minInputElement.value >= inputMaxValue) {
        alert('Минимальное значение не может быть больше или равно максимальному')
        minInputElement.value = inputMaxValue
        return
    }
    counter = minInputElement.value
    counterElement.innerText = counter
})