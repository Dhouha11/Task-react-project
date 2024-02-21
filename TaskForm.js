import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      title: title,
      description: description,
      // Ajoutez d'autres propriétés de la tâche si nécessaire
    };

    // Effectue une requête POST pour créer une nouvelle tâche
    axios.post('http://localhost:3000/tasks', newTask) // Assurez-vous de remplacer l'URL par l'URL de votre API
      .then(response => {
        console.log('Tâche créée avec succès :', response.data);
        // Actualiser la liste des tâches ou afficher un message de confirmation
      })
      .catch(error => {
        console.error('Erreur lors de la création de la tâche :', error);
        // Afficher un message d'erreur à l'utilisateur
      });
  };

  return (
    <div>
      <h2>Créer une Nouvelle Tâche</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Titre :
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description :
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default TaskForm;
