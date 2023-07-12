import React from "react";
import { Link } from 'react-router-dom';
import './ReviewsPage.css';

function ReviewsPage() {
    return (
        <div className="reviews-page">
            <h1>Témoignages</h1>
            <nav>
                
                <Link to="/Reviews/Reviews" className="reviews-link">Voir les témoignages</Link> 
                <Link to="/Reviews/SetReviews" className="reviews-link">Ajouter un témoignage</Link>
                
            </nav>
        </div>
    );
}

export default ReviewsPage;