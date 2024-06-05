function loadtodo(){

    /**
     *JSON.paser->> string->array
     * 
     */
    const todo = JSON.parse(localStorage.getItem("todo")) || {"todolist":[]};
    console.log(todo);
    return todo;
}

function addtodo(todotext){
    const todo = loadtodo();
    todo.todolist.push(todotext);
    localStorage.setItem("todo", JSON.stringify(todo));
}

const todoinput = document.getElementById("todoinput");
const submit = document.getElementById("todobutton");

submit.addEventListener("click", () => {
    const todotext = todoinput.value.trim();
    if (todotext === "") {
        alert("Please enter some todo");
    } else {
        addtodo(todotext);
        todoinput.value = "";  // Clear the input field after adding the todo
    }
    todoinput.addEventListener("change",(event)=>{
     console.log(event.target.value);
    })
});
