
import {LocalStorage} from "./localstorage"
import {authEmailPassword} from "./autorization"

export class Question {
  
  static create(question) {
    
//    const localSave = new LocalStorage(question)
    
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
//    .then(localSave.addLocalStorage())
  }
  
  static citesc(idToken) {
    if(!idToken) {
      let info = "lipseste Token"
      return `<p>${info}</p>`
    }
    return fetch(`https://proiect-2-5c02a-default-rtdb.europe-west1.firebasedatabase.app/question.json?auth=${idToken}`)
      .then(response => response.json())
      .then(data => {
        return data 
          ? Object.keys(data).map(key => ({
            ...data[key],
            id: key
            }))
          : []
      })
  }
  
  static sterg (id) {
//    alert(id)
    return fetch(`https://proiect-2-5c02a-default-rtdb.europe-west1.firebasedatabase.app/question/${id}.json`,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(res => alert("element sters"))
  }
  
}

