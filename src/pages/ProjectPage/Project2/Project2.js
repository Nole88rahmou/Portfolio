import React from 'react';
import './Project2.css';


function Project2() {
    return (
        <div className="project">
            <img src="/pictures/project2.jpg" alt=" Projet2" className="project-image" />
            <h2 className="project-title">Projet 2: Menu de restaurant</h2>
            <p className="project-description">Ceci est une description du Projet 1: La création d'une page web pour un menu de restaurant est un excellent moyen de mettre en pratique et de démontrer vos compétences en React.js. Le projet consisterait à développer une application web simple, mais attrayante et fonctionnelle, qui affiche les différents plats proposés par le restaurant.</p>
            <ul className="project-tech-list">
                la liste des technologies utilisées
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
            <a href="https://github.com/username/projet1" className="project-link">Code Source (Lien vers le github)</a>
        </div>
    );
}

export default Project2;