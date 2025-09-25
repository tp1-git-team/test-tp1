// JS
const btn = document.querySelector('.btn');   
const msg = document.querySelector('msg');

btn.addEventListener('click', () => {
  msg.textContent = 'Texte modifié avec succès';
  console.log('Bouton cliqué');
});
