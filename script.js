document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text from the input field
        const taskText = taskInput.value.trim();

        // Check if the task text is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return; // Exit the function if the input is empty
        }

        // Create new list item (li) and a remove button
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add an event listener to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the new list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listeners
    // Event listener for the "Add Task" button click
    addButton.addEventListener('click', addTask);

    // Event listener for the 'Enter' key press in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
