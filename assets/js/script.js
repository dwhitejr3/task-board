// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskBtn = $('.btn-success');
const dueDate = $('#task-due-date');
const cardInput = $('.card-input');
const taskNameInput = $('#task-name-input');
const taskDescriptionInput = $('#task-description-input');
const formSubmitBtn = $('.btn-custom');
const toDoCards = $('#todo-cards');

console.log(addTaskBtn);



cardInput.addClass('hide');



// Todo: create a function to generate a unique task id
function generateTaskId() {
  const newTask = {
    name: taskName,
    description: taskType,
    dueDate: taskDate,
    status: 'to-do',
  };
}

// Todo: create a function to create a task card
function createTaskCard(event, task) {
  event.preventDefault();
  console.log('createTaskCard');
  const taskTitle = taskNameInput.val();
  const taskDescription = taskDescriptionInput.val();
  const formDate = dueDate.val();
  console.log(taskDescription);
  console.log(formDate);
  console.log(taskTitle);
  const taskCard = $('<div>')
    .addClass('card task-card draggable my-3');
  const cardHeader = $('<div>').addClass('card-header h4').text(taskTitle);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(taskDescription);
  const cardDueDate = $('<p>').addClass('card-text').text(formDate);
  const cardDeleteBtn = $('<button>').addClass('.btn btn-danger delete').text('Delete');

  cardDeleteBtn.on('click', handleDeleteTask);

  taskCard.draggable();
  taskCard.append(cardHeader);

  const now = dayjs();
  const taskDueDate = dayjs('MM,DD,YYYY');

  if (now.isSame(taskDueDate)) {
    taskCard.addClass('bg-warning text-white');
  } else if (now.isAfter(taskDueDate)) {
    taskCard.addClass('bg-danger text-white');
    cardDeleteBtn.addClass('border-light');

  }

  toDoCards.append(taskCard)

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();
  cardInput.removeClass('hide');
  console.log('log');


}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $(dueDate).datepicker({
    changeMonth: true,
    changeYear: true,
  });
  addTaskBtn.on('click', handleAddTask)
  formSubmitBtn.on('click', createTaskCard);
  toDoCards.droppable(
    {
      accept: ".draggable",
      drop: function () {
        alert("I am dropped");
      }
    }
  );

});

