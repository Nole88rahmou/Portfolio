import { Link } from 'react-router-dom';
import './ProjectPage.css';

function ProjectsPage() {
    return (
        <div className="ProjectPage">
            <h1>Mes Projects</h1>
            <nav>
                <Link to="/projects/project1" className="project-link">Jeu: Tic-Tac-Tao</Link>
                <Link to="/projects/project2" className="project-link">TIFFIN-THALI</Link>
            </nav>
        </div>
    );
}

export default ProjectsPage;

