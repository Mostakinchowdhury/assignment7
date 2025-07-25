import { quizquestions } from '../question'
const htmlquestion = quizquestions.filter((e) => e.type == 'html')
const qn = document.getElementById('qn')
const qfield = document.getElementById('Question')
const hoptions = Array.from(document.querySelectorAll('.qoption'))
const myform = document.querySelector('form')
const range = document.querySelector('#range')
console.log(qn)
let score = 0,
  serial = 1,
  curid = 0
function randomind() {
  let ind = Math.floor(Math.random() * htmlquestion.length)
  return ind
}
function loadedfunc() {
  if (serial >= 10) {
    qfield.textContent = `${
      score > 8
        ? 'Exilant performence'
        : score < 4
        ? 'So sad be serius'
        : 'Not bad continew practise'
    } you Complete your quiz game and your score is ${score}`
    myform.textContent = ''
  } else {
    curid = randomind()
    qfield.textContent = htmlquestion[curid].question
    htmlquestion[curid].options.forEach((e, i) => {
      hoptions[i].textContent = e
    })
  }
  range.style.backgroundImage = `linear-gradient(to right, #a627f3 0% ${serial * 10}%, #3c4d67 ${
    serial * 10
  }% 100%)`
  qn.textContent = serial
  serial++
}
function handlesubmit(e) {
  e.preventDefault()
  let formdata = new FormData(this)
  let selectedAnswer = htmlquestion[curid].options[formdata.get('quiz')]
  if (!selectedAnswer) {
    alert("You don't select any option.select your choice first to go the next question")
    return
  }
  let origionalanswer = htmlquestion[curid].answer
  if (selectedAnswer == origionalanswer) {
    score++
  }
  const radios = this.querySelectorAll('input[type="radio"][name="quiz"]')
  radios.forEach((radio) => {
    radio.checked = false
  })
  loadedfunc()
}
window.addEventListener('load', loadedfunc)
myform.addEventListener('submit', handlesubmit)
console.log(myform)
