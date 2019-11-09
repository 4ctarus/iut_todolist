var todoList = [], formEl, listEl;
const inputName = 'name';
const lsKey = 'ITEMS';

function init() {
  formEl = document.getElementById("myForm");
  listEl = document.getElementById("list");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = formEl.elements[inputName];
    addTodo(input.value);
    // reset input
    input.value = null;
    input.focus();
  });

  // init value from localstorage
  const lsTodoList = localStorage.getItem(lsKey);
  if (lsTodoList) {
    JSON.parse(lsTodoList).forEach(todo => {
      addTodo(todo);
    })
  }
}

function addTodo(value) {
  // add to array and localstorage
  todoList.push(value);
  localStorage.setItem(lsKey, JSON.stringify(todoList));
  console.log(todoList);
  addHtmlElement(value);
}

function addHtmlElement(value) {
  // create html element
  const listItem = document.createElement('li');
  listItem.innerHTML = value;
  listEl.appendChild(listItem);
}

window.onload = init;
