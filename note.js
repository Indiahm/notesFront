export class Note {
  /**
   * Constructeur de la classe Note.
   * @param {number} id - L'identifiant de la note.
   * @param {string} text - Le contenu textuel de la note.
   * @param {string} author - L'auteur de la note.
   * @param {Date} date - La date de création de la note.
   */
  constructor(id, text, author, date) {
    this.id = id; // Initialise l'identifiant de la note
    this.text = text; // Initialise le contenu textuel de la note
    this.author = author; // Initialise l'auteur de la note
    this.date = date; // Initialise la date de création de la note
  }

  /**
   * Méthode pour afficher toutes les informations de la note.
   * @returns {string} - Une chaîne de caractères représentant toutes les informations de la note.
   */
  fullDisplay() {
    // Formate la date en une chaîne de caractères au format de date local
    const formattedDate = this.date.toLocaleDateString();
    // Concatène les informations de la note dans une chaîne de caractères
    const display = `
      Text: ${this.text} - Author: ${this.author}
       - Date: ${formattedDate}
    `;
    return display; // Renvoie la chaîne de caractères représentant toutes les informations de la note
  }

  /**
   * Méthode pour obtenir la longueur du contenu textuel de la note.
   * @returns {number} - La longueur du contenu textuel de la note.
   */
  length() {
    return this.text.length; // Renvoie la longueur du contenu textuel de la note
  }
}
