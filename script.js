function opencards() {
  var allElems = document.querySelectorAll(".elem");
  var allFullElems = document.querySelectorAll(".fullElem");
  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      allFullElems[elem.id].style.display = "block";
    });
  });
  var allFullElemsBackBtn = document.querySelectorAll(".fullElem .back");
  allFullElemsBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      allFullElems[back.id].style.display = "none";
    });
  });
}
opencards();

function initTodoApp() {
  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  let currentTask = [];

  if (localStorage.getItem('currentTask')) {
    currentTask = JSON.parse(localStorage.getItem('currentTask'));
  } else {
    console.log('Task list is empty');
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");

    if (currentTask.length === 0) {
      allTask.innerHTML = `<div class="no-task-msg">No tasks added yet 💤</div>`;
      return;
    }

    let sum = "";
    currentTask.forEach(function (elem, idx) {
      sum += `<div class="task">
                <h5>${elem.task} <span class="${elem.imp ? 'important' : ''}">imp</span></h5>
                <button data-id="${idx}">Mark as Completed</button>
              </div>`;
    });

    allTask.innerHTML = sum;

    document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        let index = btn.getAttribute("data-id");
        currentTask.splice(index, 1);
        localStorage.setItem("currentTask", JSON.stringify(currentTask));
        renderTask();
      });
    });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ✅ Trim and validate input
  const taskVal = taskInput.value.trim();
  const detailsVal = taskDetailsInput.value.trim();

  if (taskVal === "") {
    alert("Please enter a task before submitting.");
    return;
  }

  currentTask.push({
    task: taskVal,
    details: detailsVal,
    imp: taskCheckbox.checked,
  });

  localStorage.setItem("currentTask", JSON.stringify(currentTask));
  taskInput.value = "";
  taskDetailsInput.value = "";
  taskCheckbox.checked = false;
  renderTask();
});

renderTask(); // Call once to load saved tasks

// localStorage.clear(); // ❌ REMOVE this unless debugging
}

// Run both on page load
opencards();
initTodoApp();



