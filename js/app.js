const inp = document.querySelector("#enterToDo")
const btn = document.querySelector("#submit-button")
const list = document.querySelector("#todo-list")
const resetBtn = document.querySelector("#reset-button")

resetBtn.addEventListener('click', function(evt) {
list.innerHTML = "";
})

btn.addEventListener('click', function(evt) {
const li = document.createElement('li')
li.textContent = inp.value
if(inp.value !== ""){
inp.value=""
list.appendChild(li)
}
})

list.addEventListener('click', function(evt){
  evt.target.remove()
})