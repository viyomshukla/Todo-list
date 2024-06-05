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

function appendtoHTML(todotext){
const list=document.getElementById("todoList");
const todo=document.createElement("li");
todo.textContent=todotext
list.appendChild(todo);
}

const todoinput = document.getElementById("todoinput");
const submit = document.getElementById("todobutton");

submit.addEventListener("click", () => {
    const todotext = todoinput.value.trim();
    if (todotext === "") {
        alert("Please enter some todo");
    } else {
        addtodo(todotext);
        appendtoHTML(todotext);
        todoinput.value = ""; 
    }
    todoinput.addEventListener("change",(event)=>{
     console.log(event.target.value);
    })
});
const todo = loadtodo();
todo.todolist.forEach(element => {
   const newtodo= document.createElement("li");
   newtodo.textContent=element;
   const list=document.getElementById("todoList");
   list.appendChild(newtodo);

});
