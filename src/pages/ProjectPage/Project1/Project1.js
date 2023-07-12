import React from 'react';
import './Project1.css';
import { Link } from 'react-router-dom';

function Project1() {
    return (
        <div className="project">
            <img src="/pictures/project1.jpg" alt="Projet1" className="project-image" />
            <h2 className="project-title">Projet 1: Jeux TicTacTao</h2>
            <p className="project-description">Ceci est une description du Projet 1: Le jeu TicTacToe, aussi connu sous le nom de Morpion, est un jeu de société informel pour deux joueurs, qui peut être facilement joué sur une feuille de papier. Le jeu se joue sur une grille de 3x3, où les joueurs prennent des tours pour placer un marqueur (habituellement une croix ou un cercle) dans une cellule vide de la grille. Le but du jeu est d'être le premier à obtenir trois de ses propres marqueurs en ligne, que ce soit horizontalement, verticalement ou en diagonale.
                En termes de développement avec React, le jeu TicTacToe est un bon choix pour s'entraîner à utiliser l'état et les props de React, ainsi que pour comprendre comment le concept de "lifting state up" fonctionne. Le jeu implique un certain nombre de composants interactifs, y compris les cellules individuelles de la grille de jeu, ainsi qu'un composant de tableau de bord pour afficher le joueur actuel et le gagnant du jeu. </p>
            <ul className="project-tech-list">
                Liste des technologies utilisées:
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>

            </ul>
            <Link to="https://github.com/username/projet1" className="project-link">Code Source (Lien vers le github)</Link>
        </div>
    );
}

export default Project1;
