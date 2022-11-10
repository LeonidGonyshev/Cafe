const logForm = document.querySelector('#mail')
const pasForm = document.querySelector('#pasword')
const myForm = document.querySelector('.main__form')
const errPaswordEl = document.querySelector('#password-error')
const radioEl = document.querySelector('#happy')
myForm.addEventListener('submit', (event) => {
    if (pasForm.value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/) === null) {
            event.preventDefault()
            //alert('Используйте только латинские буквы,\nдлинна должна быть больше 8 символов,\nобязательно одна буква заглавная,\nодин спецсимвол!')
            errPaswordEl.style.display = 'block'
            pasForm.style.borderColor = 'red'
            errPaswordEl.textContent = 'Ошибка заполнения'
            errPaswordEl.style.color = 'red'
            pasForm.addEventListener('focus', () => {
                pasForm.style.borderColor = '#D58C51'
            })
            pasForm.addEventListener('input', () => {
                errPaswordEl.style.display = 'none'
            })
    }
})