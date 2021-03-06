import "w3-css"
// import "./styles/w3.css"
import "../index.html"
import {form, input, button /*renove*/, p} from "./modules/constante"
import {creez_obiectul, validateButton} from "./modules/utils"
import {Question} from "./modules/questions"
import {Validator} from "./modules/validator"
import {RenderList} from "./modules/renderlist"
import {authEmailPassword} from "./modules/autorization"



//import {email, password, apiKey} from './modules/constante'

const valid = new Validator(input, button)

// const log = (x) => document.getElementById('log').innerHTML = `${x}`

// creez ascultatori de evenimente
window.addEventListener('load', getData)
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', stareaButonului)
input.addEventListener('input', binding)

//renove.addEventListener('click', getData)


// stareaButonului
function stareaButonului() {
  validateButton()
}

// creez obiectul
function submitFormHandler(event) {
  event.preventDefault()
  const question = creez_obiectul()
  //const renderlist = new RenderList(question)
  Question.create(question)
    .then( () => {
      valid.submitValidator()
//      log(JSON.stringify(question))
      getData()
    })
}

export function getData() {
	authEmailPassword()
	  .then( Question.citesc )
	  .then( data => {
	    const renderlist = new RenderList(data)
	    renderlist.render()
	  } )
	}

function binding (e) {
  p.innerHTML = e.target.value
}


