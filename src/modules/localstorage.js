
export class LocalStorage {
  
  constructor(question) {
    this.question = question
  }
  
  getQuestionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
  }
  
  addLocalStorage() {
    const all = this.getQuestionsFromLocalStorage()
    all.push(this.question)
    localStorage.setItem('questions', JSON.stringify(all))
  }
  
}