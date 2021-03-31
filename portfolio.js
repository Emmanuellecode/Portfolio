
///////////////////////          Effet sur le titre au passage de la souris        ///////////////////////

// Variable qui cible le premier élement h1 de la page.
//let title = document.querySelectorAll('h1');

// Personnalisation de l'élément ciblé
//title[0].onmouseover = () => document.querySelectorAll('h1')[0].textContent = 'Développeur Intégrateur';
//title[0].onmouseout = () => document.querySelectorAll('h1')[0].textContent = 'Emmanuelle Galinat';

// Affichage dans la page
//document.append(title)[0];

/////////////////////////////////////////////////////////////////////////////////////////////////////////


let a = document.querySelector('a');
let button = document.querySelector('button')

function displayNone() {
    document.querySelector('ul').style.display = 'none';
}
function displayVisible() {
    document.querySelector('ul').style.display = 'block';
}
//a.addEventListener('click', displayNone);
//button.addEventListener('click', displayVisible);
//button.removeEventListener('click', displayNone);


