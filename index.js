var tasks = [], formEl, listEl;
const inputValueName = 'value';
const inputDateName = 'date';
const lsKey = 'TASKS';

function init() {
  formEl = document.getElementById("myForm");
  listEl = document.getElementById("list");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = formEl.elements[inputValueName];
    const inputDate = formEl.elements[inputDateName];
    addTask({
      value: inputValue.value,
      date: inputDate.value
    });
    // reset input
    inputValue.value = null;
    inputDate.value = null;
    inputValue.focus();
  });

  // init value from localstorage
  const lsTasks = localStorage.getItem(lsKey);
  if (lsTasks) {
    JSON.parse(lsTasks).forEach(task => {
      addTask(task);
    })
  }
}

function addTask(task) { // task: { value: string, date: string }
  // add to array and localstorage
  tasks.push(task);
  localStorage.setItem(lsKey, JSON.stringify(tasks));
  console.log(tasks);
  addHtmlElement(task);
}

function addHtmlElement(task) {
  // create html element
  const liEl = document.createElement('li');
  liEl.innerHTML = task.value + ' ' + task.date;
  const buttonEl = document.createElement('button');
  buttonEl.innerHTML = 'Edit';
  buttonEl.addEventListener('click', (ev) => {
    window.location.href = 'edit.html';
  });
  liEl.appendChild(buttonEl);
  listEl.appendChild(liEl);
}

window.onload = init;
