import React, { useState } from "react";

function SetReviews() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const submitReview = () => {
    // Vérification des validations
    if (name.trim() === "" || email.trim() === "" || review.trim() === "") {
      setError("Veuillez remplir tous les champs");
      return;
    }

    // Vérification de l'email au format valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError("Veuillez saisir une adresse e-mail valide");
      return;
    }

    // Save review to localStorage
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ name, email, review });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    // Vider les champs de saisie et le message d'erreur.
    setName("");
    setEmail("");
    setReview("");
    setError("");
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Avis" />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={submitReview}>Soumettre</button>
    </div>
  );
}

export default SetReviews;
