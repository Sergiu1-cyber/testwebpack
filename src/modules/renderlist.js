import {LocalStorage} from "./localstorage"
import {list} from "./constante"
import {Question} from "./questions"
import {getData} from "../index"

export class RenderList {
  
  constructor (question) {
    this.question = question
  }
  
  click(e) {
    Question.sterg(e.target.value)
    getData()
//    alert(e.target.value)
  }
  
  toCard(d) {
    return `
    <div class="w3-panel w3-pale-green">
      <p>${d.id}</p>
      <p>${new Date(d.date).toLocaleDateString()}</p>
      <p>${new Date(d.date).toLocaleTimeString()}</p>
      <p>${d.text}</p>
      <button 
        class="w3-btn w3-red"
        value="${d.id}"
        >clear</button>
    </div>
    `
  }
  
  render() {
    const data = this.question
    const html = data.length
      ? data.map(this.toCard).join('')
      : `<div class="w3-panel w3-pale-green">Lipsesc date</div>`
      
      list.innerHTML = html
      
      const btn = list.querySelectorAll('button')
      btn.forEach( b => b.addEventListener('click', this.click))
  }
  
  renderList() {
    const ls = new LocalStorage(this.question)
    const data = ls.getQuestionsFromLocalStorage()
    const html = data.length
      ? data.map(this.toCard).join('')
      : `<div class="w3-panel w3-pale-green">Lipsesc date</div>`
      
      list.innerHTML = html
  }
  
}
