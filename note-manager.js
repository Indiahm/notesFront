import { Note } from './note.js'; // Importe la classe Note depuis le fichier note.js

export class NoteManager {
  /**
   * Méthode statique pour récupérer la liste des notes depuis le serveur.
   * @returns {Promise<Array<Note>>} - Une promesse résolue avec un tableau d'objets Note.
   */
  static async list() {
    // Effectue une requête GET pour récupérer les notes depuis le serveur
    const response = await fetch('http://localhost:3000/notes/');
    // Parse la réponse en JSON
    const data = await response.json();
    // Mappe les données récupérées en objets Note et les renvoie
    return data.map(obj => new Note(obj.id, obj.text));
  }





  /**
   * Méthode statique pour créer une nouvelle note sur le serveur.
   * @param {Note} note - La note à créer sur le serveur.
   * @returns {Promise<Object>} - Une promesse résolue avec les données de la nouvelle note créée.
   */
  static async create(note) {
    // Effectue une requête POST pour créer une nouvelle note sur le serveur
    const response = await fetch('http://localhost:3000/notes/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note) // Convertit la note en format JSON
    });
    // Parse la réponse en JSON
    const data = await response.json();
    // Renvoie les données de la nouvelle note créée
    return data;
  }





  /**
   * Méthode statique pour supprimer une note du serveur.
   * @param {number} id - L'ID de la note à supprimer sur le serveur.
   */
  static async remove(id) {
    // Effectue une requête DELETE pour supprimer une note sur le serveur
    const response = await fetch('http://localhost:3000/notes/' + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
