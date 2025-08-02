document.addEventListener('DOMContentLoaded', function() {
   
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

       function addTask() {
        
        const taskText = taskInput.value.trim();
        
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
       
        const li = document.createElement('li');
        
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
       
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
       
        removeButton.addEventListener('click', function() {
            li.remove();
        });
        
      
        li.appendChild(taskSpan);
        li.appendChild(removeButton);
        taskList.appendChild(li);
        
       
        taskInput.value = '';
        taskInput.focus();
    }

   
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
