const inp = document.querySelector("#enterToDo")
const btn = document.querySelector("#submit-button")
const list = document.querySelector("#todo-list")

btn.addEventListener('click', function(evt) {
const li = document.createElement('li')
li.textContent = inp.value
inp.value=""
list.appendChild(li)
})

