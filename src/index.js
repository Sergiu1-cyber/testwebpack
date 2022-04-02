// import 'normalize.css'
import "./styles/w3.css"
import "../index.html"
import {form, input, button} from "./modules/constante"
import {creez_obiectul, validateButton} from "./modules/utils"
import {Question} from "./modules/questions"
import {Validator} from "./modules/validator"
import {RenderList} from "./modules/renderlist"

const valid = new Validator(input, button)

const log = (x) => document.getElementById('log').innerHTML = `${x}`


// creez ascultatori de evenimente
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', stareaButonului)

// stareaButonului
function stareaButonului() {
  validateButton()
}

// creez obiectul
function submitFormHandler(event) {
  event.preventDefault()
  const question = creez_obiectul()
  const renderlist = new RenderList(question)
  Question.create(question)
    .then( () => {
      valid.submitValidator()
      log(JSON.stringify(question))
    })
  renderlist.render()
}




