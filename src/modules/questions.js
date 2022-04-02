
import {LocalStorage} from "./localstorage"


export class Question {
  static create(question) {
    
    const localSave = new LocalStorage(question)
    
    return fetch("https://proiect-2-5c02a-default-rtdb.europe-west1.firebasedatabase.app/question.json", {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        "Content-Types": "aplication/json"
      }
    })
    .then(response => response.json())
    .then(response => {
      question.id = response.name
      return question
    })
    .then(localSave.addLocalStorage())
  }
}