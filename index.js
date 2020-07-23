const task = document.getElementById('task');
const form = document.getElementById('todo-form')
let list = document.getElementById('todoList')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let item = `<li class="list-group-item"> ${task.value}</li>`;
    list.innerHTML += item;

    form.reset();
})