//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);

    //Remove task event
    taskList.addEventListener('click', removeTask);

    //Clear tasks event
    clearBtn.addEventListener('click', clearTasks);

    //Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}


//Add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }else{

        //Create li element
        const li = document.createElement('li');
        li.className = 'collection-item';
        //create text node and append to the li
        li.appendChild(document.createTextNode(taskInput.value));

        //create new link element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></a>';

        //append link to li
        li.appendChild(link);

        //append li to ul
        taskList.appendChild(li);

        //clear input
        taskInput.value = '';
    }

    e.preventDefault();
}


//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }

    e.preventDefault();
}


//Clears Tasks
function clearTasks(e){
    //taskList.innerHTML = '';

    //Faster method
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    e.preventDefault();
}

//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLocaleLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}