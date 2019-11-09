var tasks = [], formEl, listEl;
const inputValueName = 'value';
const inputDateName = 'date';
const lsKey = 'TASKS';

function init() {
  formEl = document.getElementById("editForm");
  listEl = document.getElementById("list");

  const lsTasks = localStorage.getItem(lsKey);
  const tasks = JSON.parse(lsTasks) || [];

  const inputValue = formEl.elements[inputValueName];
  const inputDate = formEl.elements[inputDateName];
  const index = window.location.hash.substr(1);

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    tasks[index] = {
      value: inputValue.value,
      date: inputDate.value
    };
    localStorage.setItem(lsKey, JSON.stringify(tasks));
    window.location.href = 'index.html';
  });

  // init value from localstorage
  if (tasks[index]) {
    inputValue.value = tasks[index].value;
    inputDate.value = tasks[index].date;
  }
}


window.onload = init;
