function openCards() {
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
                <h5>${elem.task} 
                <span class=${elem.imp}>imp</span></h5>
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
function dayPlanner(){
var hours = Array.from({length: 18}, (elem, idx) => {
  return `${6 + idx}:00 - ${7 + idx}:00`;
});

let wholeDaySum = '';
hours.forEach(function(elem, idx) {
  wholeDaySum += `<div class="day-planner-time">
            <p>${elem}</p>
            <input id=${idx} type="text" placeholder="...">
          </div>`;
});

var dayplanner = document.querySelector('.day-planner');
dayplanner.innerHTML = wholeDaySum;

var dayPlannerInput = document.querySelectorAll('.day-planner input');

// ✅ Load existing data and timestamp
let stored = JSON.parse(localStorage.getItem('dayPlanDataStorage'));
let now = Date.now();
let dayPlandata = [];

if (stored && stored.timestamp && now - stored.timestamp < 24 * 60 * 60 * 1000) {
  // within 24 hours, load data
  dayPlandata = stored.data || [];
} else {
  // more than 24 hours passed, clear old data
  localStorage.removeItem('dayPlanDataStorage');
}

// ✅ Populate inputs
dayPlannerInput.forEach(function(elem) {
  if (dayPlandata[elem.id]) {
    elem.value = dayPlandata[elem.id];
  }

  elem.addEventListener('input', function() {
    dayPlandata[elem.id] = elem.value;

    // Save data along with current timestamp
    localStorage.setItem('dayPlanDataStorage', JSON.stringify({
      timestamp: Date.now(),
      data: dayPlandata
    }));
  });
});
}




// Run both on page load
openCards();
initTodoApp();
dayPlanner();
