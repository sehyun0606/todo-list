const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const icon = document.createElement("i");

const TODOS_KEY = "todos"
let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    saveTodos()
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    li.animate([
        {transform: 'translateY(10px)', opacity: '0' }, {transform: 'translateY(0px)', opacity: '1'}, ],
        {
            duration:300
        }
        )
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);//li안에 span을 넣어줘라.
    li.appendChild(button);
    todoList.appendChild(li);
}
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;//newTodo라는 변수에 값을 저장한뒤 초기화시킴
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}
todoForm.addEventListener("submit" , handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
