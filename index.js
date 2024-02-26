import { Note } from './note.js';
import { NoteManager } from './note-manager.js';
import { NoteElement } from './note-element.js';

// le modèle
let notes = []; // Tableau pour stocker les notes
const minChars = 6; // Nombre minimum de caractères requis pour une note

// Récupération des éléments du DOM
const inputElem = document.getElementById('my-input');
const listElem = document.getElementById('list');
const errorMsg = document.getElementById('error-msg');
const form = document.getElementsByTagName('form')[0];

// Fonction pour mettre à jour le compteur du nombre de notes
function updateCounter() {
  document.getElementById('count').innerText = notes.length;
}

// Fonction pour ajouter une note au modèle
function addNoteToModel() {
  notes.push(inputElem.value);
}

// Fonction pour ajouter une note à la vue
function addNoteToView() {
  let newItem = document.createElement('li');
  newItem.innerText = inputElem.value;
  listElem.appendChild(newItem);
}

// Fonction pour ajouter une note
function addNote() {
  addNoteToModel();
  addNoteToView();
}

// Fonction pour réinitialiser le champ de saisie
function resetInput() {
  inputElem.value = '';
}

// Fonction pour vérifier la validité du champ de saisie
function isValid() {
  return (inputElem.value.length >= minChars);
}

// Fonction pour afficher le message d'erreur
function showError() {
  errorMsg.style.display = 'block';
}

// Fonction pour masquer le message d'erreur
function hideError() {
  errorMsg.style.display = 'none';
}

// Écouteur d'événements pour vérifier la validité du champ de saisie à chaque changement
inputElem.addEventListener('change', function (event) {
  if (isValid()) {
    hideError();
  } else {
    showError();
  }
});

// Gestion de la soumission du formulaire
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Empêche le rechargement de la page
  if (isValid()) {
    const newNote = new Note(null, inputElem.value); // Crée une nouvelle note
    await NoteManager.create(newNote); // Sauvegarde la note
    await refreshNote(); // Rafraîchit les notes affichées
    resetInput(); // Réinitialise le champ de saisie
  }
});

// Écouteur d'événements pour supprimer une note lorsqu'elle est cliquée dans la liste
listElem.addEventListener('click', event => {
  const id = +event.target.getAttribute('data-id');
  if (!isNaN(id)) {
    NoteManager.remove(id);
  }
});

// Affiche le nombre minimum de caractères requis dans le message d'erreur
document.querySelector('#error-msg span').innerText = minChars;

// Fonction pour rafraîchir les notes affichées
async function refreshNote() {
  notes = await NoteManager.list(); // Récupère la liste des notes
  let noteElements = notes.map(note => NoteElement.create(note)); // Crée les éléments de note correspondants
  listElem.innerHTML = ''; // Vide la liste des notes actuellement affichées
  noteElements.forEach(noteElem => listElem.appendChild(noteElem)); // Ajoute chaque élément de note à la liste
}

refreshNote(); // Appel initial pour afficher les notes
