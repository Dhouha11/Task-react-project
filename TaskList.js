import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Effectue une requête GET pour récupérer la liste des tâches lors du chargement du composant
    axios.get('http://localhost:3000/tasks') // Assurez-vous de remplacer l'URL par l'URL de votre API
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des tâches :', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Date de Création : {task.createdAt}</p>
            <p>État : {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
