let colorButton = document.querySelector('#color')
let placeButton = document.querySelector('#place')
let ritualButton = document.querySelector('#ritual')

colorButton.addEventListener('click', colorButtonClick)
placeButton.addEventListener('click', placeButtonClick)
ritualButton.addEventListener('click', ritualButtonClick)

let colorText = document.querySelector('#colorText')
let placeText = document.querySelector('#placeText')
let ritualText = document.querySelector('#ritualText')

function colorButtonClick(){
    colorText.textContent = "Blue"
}

function placeButtonClick(){
    placeText.textContent = "Puerto Rico"
}

function ritualButtonClick(){
    ritualText.textContent = "Grabbing a McGriddle and a large Diet Coke before class"
}

let myFace = document.querySelector("#mitch")
myFace.addEventListener('mouseover', watchIt)

function watchIt(){
    alert('Please watch what you are doing with that mouse pointer. You just moved over my face. It is very irritating. Do not let it happen again, please. Thanks!')
}