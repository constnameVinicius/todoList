// === Selectors === 
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".tudo-btn")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector('.filter-todo')
console.log(todoBtn, todoInput, todoList)

// Event Listeners
todoBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)
// Functions
function addTodo(e){
    e.preventDefault()

    if(!todoInput.value){
        alert('Please Fill Out The Field')
        return;
    }
    // Todo DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // Create List Item
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo)
    todoInput.value = ''

    // Check Mark Btn
    const completedBtn = document.createElement('button')
    completedBtn.innerHTML = '<ion-icon name="checkbox-outline"></ion-icon>'
    completedBtn.classList.add('complete-btn')

    // Delete Btn
    const trashBtn = document.createElement('button')
    trashBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'
    trashBtn.classList.add('trash-btn')

    todoDiv.appendChild(completedBtn)
    todoDiv.appendChild(trashBtn)

    // Append to list
    todoList.appendChild(todoDiv)
}

function deleteCheck(e){
    const item = e.target
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement
        // Animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

