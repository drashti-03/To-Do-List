const todoList = [];

function renderList() {
    let toDo = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const date = todoObject.date;

        const html = `
        <div class="name">${name}</div>
        <div class="date">${date}</div> 
        <button class="deleteBtn" 
        onclick="
        todoList.splice(${i}, 1);
        renderList();">
        Delete
        </button>`;
        toDo += html;        
    }
    console.log(toDo);
    document.querySelector('.todo-List').innerHTML = toDo;
}



function addToDo() {
    const input = document.querySelector('.name-input');
    const name = input.value;

    const dateInput = document.querySelector('.date-input');
    const date = dateInput.value;

    todoList.push({ name, date});
    console.log(todoList);

    input.value = '';

    renderList();
}