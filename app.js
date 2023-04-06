// Récupérer les boutons et les divs des catégories
const buttons = document.querySelectorAll('button');
const categories = document.querySelectorAll('.category');

// Parcourir les boutons et ajouter un écouteur d'événement pour chaque clic
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Masquer toutes les catégories
    categories.forEach(category => {
      category.style.display = 'none';
    });

    // Afficher la catégorie correspondante
    const category = document.querySelector(`#${button.textContent.toLowerCase()}`);
    category.style.display = 'block';
  });
});
