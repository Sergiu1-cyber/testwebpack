
import {input, button} from "./constante"
import {Validator} from './validator'

const valid = new Validator(input, button)

export function validateButton() {
  valid.buttonValidator()
}

export function creez_obiectul() {
  
  if(valid.isValid()) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }
    
    return question
  }
}

