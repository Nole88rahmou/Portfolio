import React, { useState, useEffect } from "react";
import './Reviews.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    // Get reviews from localStorage
    const localStorageReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    if(localStorageReviews.length === 0) {
      // If there are no reviews in localStorage, add the default one
      const defaultReview = {
        name: "Unknown",
        review: "J'avais le plaisir de travailler avec Monsieur Meradji :)"
      };
      localStorageReviews.push(defaultReview);
      localStorage.setItem("reviews", JSON.stringify(localStorageReviews));
    }
    setReviews(localStorageReviews); // This line will ensure that the default review is set in the state as well
  }, []);

  const handleEdit = index => {
    setEditingIndex(index);
  }

  const handleSave = index => {
    const newReviews = [...reviews];
    localStorage.setItem("reviews", JSON.stringify(newReviews));
    setEditingIndex(null);
  }

  const handleDelete = index => {
    const newReviews = reviews.filter((review, i) => i !== index);
    setReviews(newReviews);
    localStorage.setItem("reviews", JSON.stringify(newReviews));
  }

  const handleInputChange = (event, index) => {
    const newReviews = [...reviews];
    newReviews[index].review = event.target.value;
    setReviews(newReviews);
  }

  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <h2>{review.name}</h2>
          {editingIndex === index ? 
            <>
              <textarea className="review-input" value={review.review} onChange={(event) => handleInputChange(event, index)} />
              <button className="review-button" onClick={() => handleSave(index)}>Sauvegarder</button>
            </>
            :
            <>
              <p>{review.review}</p>
              <button className="review-button" onClick={() => handleEdit(index)}>Modifier</button>
            </>
          }
          <button className="review-button-supp" onClick={() => handleDelete(index)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
