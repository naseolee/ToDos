const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    /*
    toDos.forEach((val, index) => {
        if (val.id.toString() === li.id) toDos.splice(index, 1);
        saveToDos();
    });
    */
    toDos = toDos.filter(toDo => {return toDo.id !== parseInt(li.id)});
    saveToDos();
    li.remove();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.setAttribute("id",newToDoObj.id);
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    wasLoggedIn();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(),
        text: newToDo
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}
