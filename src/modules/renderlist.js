import {LocalStorage} from "./localstorage"
import {list} from "./constante"

export class RenderList {
  
  constructor (question) {
    this.question = question
  }
  
  toCard(d) {
    return `
    <div class="w3-panel w3-pale-green">
      <p>${new Date(d.date).toLocaleDateString()}</p>
      <p>${new Date(d.date).toLocaleTimeString()}</p>
      <p>${d.text}</p>
    </div>
    `
  }
  
  render() {
    const ls = new LocalStorage(this.question)
    const data = ls.getQuestionsFromLocalStorage()
    const html = data.length
      ? data.map(this.toCard).join('')
      : `<div class="w3-panel w3-pale-green">Lipsesc date</div>`
      
      list.innerHTML = html
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
