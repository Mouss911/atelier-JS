 // Fonction pour récupérer les données depuis l'API
 function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const incompleteTodos = data.filter(todo => !todo.completed);
            const completeTodos = data.filter(todo => todo.completed);
            console.log(incompleteTodos);

            displayTodos(incompleteTodos, 'incompleteTodos');
            displayTodos(completeTodos, 'completeTodos');
        })
        .catch(error => console.error('Erreur :', error));
}

// Fonction pour afficher les todos dans une liste donnée
function displayTodos(todos, listId) {
    const list = document.getElementById(listId);
    list.innerHTML = '';

    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
        listItem.style.cursor = 'pointer';

        listItem.addEventListener('click', () => showTodoDetails(todo));

        list.appendChild(listItem);
    });
}

// Fonction pour afficher les détails d'un todo
function showTodoDetails(todo) {
    const todoDetails = document.getElementById('todoDetails');
    todoDetails.innerHTML = `
        <p><strong>ID:</strong> ${todo.id}</p>
        <p><strong>Title:</strong> ${todo.title}</p>
        <p><strong>Completed:</strong> ${todo.completed ? 'Oui' : 'Non'}</p>
    `;
}
// Appel de la fonction pour récupérer les todos au chargement de la page
fetchTodos();

// Fonction pour afficher tous les todos
// function showAllTodos() {
//     const allTodos = data;
//     displayTodos(allTodos, 'incompleteTodos');
//     displayTodos(allTodos, 'completeTodos');
// }

// // Écoutez le clic sur le bouton "Afficher tous les todos"
// const showAllButton = document.getElementById('showAllButton');
// showAllButton.addEventListener('click', showAllTodos);
