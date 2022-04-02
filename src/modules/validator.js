
export class Validator {
  
  constructor(input, button) {
    this.input = input
    this.button = button
  }
  
  isValid() {
    return this.input.value.length >= 10
  }
  
  submitValidator() {
    this.input.value = ''
    this.button.disabled = true
  }
  
  buttonValidator() {
    this.button.disabled = !this.isValid()
  }
  
}
