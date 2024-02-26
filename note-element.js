export class NoteElement {
  /**
   * Méthode statique pour créer un élément de note à partir d'une instance de Note.
   * @param {Note} note - L'objet Note à partir duquel créer l'élément de note.
   * @returns {HTMLElement} - L'élément de note créé.
   */

  
  static create(note) {
    const noteElem = document.createElement('li'); // Crée un nouvel élément li pour afficher une note

    // Remplace le contenu textuel par le texte de la note et un bouton de suppression
    noteElem.innerHTML = `${note.text} - <button data-id="${note.id}">X</button>`;

    return noteElem; // Renvoie l'élément li créé avec le texte de la note et le bouton de suppression
  }
}
