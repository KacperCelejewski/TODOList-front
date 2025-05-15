const apiUrl = 'http://localhost:8080/api/tasks';
const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskContentInput = document.getElementById('task-content');
const cards = document.querySelector('.Cards');

async function fetchTasks() {
    try {
        const response = await fetch(apiUrl);
        const tasks = await response.json();
        cards.innerHTML = '';
        tasks.forEach(task => {
            const card = document.createElement('article');
            card.classList.add('card');
            card.setAttribute('aria-label', `Task: ${task.title}`);
            card.innerHTML = `
    <header class="task-status">
      <h2>${task.title}</h2>
      <div class="task">
        <input type="checkbox" id="completed-${task.id}" ${task.completed ? 'checked' : ''} />
        <label for="completed-${task.id}">Completed</label>
      </div>
    </header>
    <p>${task.content}</p>
    <button class="delete-btn" aria-label="Delete task ${task.title}" onclick="deleteTask(${task.id})">Delete</button>
  `;
            cards.appendChild(card);
        });
    } catch (err) {
        console.error('Error fetching tasks:', err);
    }
}

async function createTask(title, content) {
    try {
        if (!title || !content) {
            console.error('Title and content are required to create a task.');
            alert('Title and content are required to create a task.');
            return;
        }
        if (title.length < 3 || content.length < 5) {
            console.error('Title must be at least 3 characters and content at least 5 characters long.');
            alert('Title must be at least 3 characters and content at least 5 characters long.');
            return;
        }
        if (title.length > 50 || content.length > 250) {
            console.error('Title must be less than 50 characters and content less than 200 characters long.');
            alert('Title must be less than 50 characters and content less than 200 characters long.');
            return;
        }
        await fetch(`${apiUrl}/create-task`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content }),
        });
        fetchTasks();
    } catch (err) {
        console.error('Error creating task:', err);
    }
}

cards.addEventListener('change', async (event) => {
    if (event.target.type === 'checkbox') {
        const id = event.target.id.split('-')[1];
        const completed = event.target.checked;

        try {
            await fetch(`${apiUrl}/update/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed }),
            });
            fetchTasks();
        } catch (err) {
            console.error('Error updating task:', err);
        }
    }
});

async function deleteTask(id) {
    try {
        await fetch(`${apiUrl}/delete/${id}`, {
            method: 'DELETE',
        });
        fetchTasks();
    } catch (err) {
        console.error('Error deleting task:', err);
    }
}
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = taskTitleInput.value;
    const content = taskContentInput.value;

    createTask(title, content);
    taskTitleInput.value = '';
    taskContentInput.value = '';
});
fetchTasks();