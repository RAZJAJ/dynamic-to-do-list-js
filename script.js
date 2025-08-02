document.addEventListener('DOMContentLoaded', () => {
   
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

   
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    
    function createTaskElement(taskText) {
      
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

       
        removeButton.addEventListener('click', () => {
           
            taskList.removeChild(li);

          
            removeTaskFromLocalStorage(taskText);
        });

       
        li.appendChild(removeButton);

        
        taskList.appendChild(li);
    }

   
    function addTask() {
        
        const taskText = taskInput.value.trim();

        
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

       
        createTaskElement(taskText);

      
        saveTaskToLocalStorage(taskText);

       
        taskInput.value = '';
    }

    
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

   
    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

       addButton.addEventListener('click', addTask);

    
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    
    loadTasks();
});
