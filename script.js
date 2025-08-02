document.addEventListener('DOMContentLoaded', function() {
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    
    const addTask = () => {
        const taskText = taskInput.value.trim();
        
        if (!taskText) {
            alert('Please enter a valid task!');
            return;
        }

        
        const taskItem = document.createElement('li');
        
        
        const taskTextElement = document.createElement('span');
        taskTextElement.className = 'task-text';
        taskTextElement.textContent = taskText;
        
      
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = '&times;'; 
        
       
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });

        
        taskItem.append(taskTextElement, deleteButton);
        taskList.appendChild(taskItem);
        
       
        taskInput.value = '';
        taskInput.focus();
    };

    
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Event delegation for task list (better for dynamic elements)
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
});
