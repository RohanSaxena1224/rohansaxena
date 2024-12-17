import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Personal.css';
import { recipes } from './data/recipes';
import { RecipeCard } from './components/RecipeCard';
import {Star, HalfStar} from './components/stars.js';

const books = {
  currentlyReading: [
    {id: 10, image: "/book_images/behave.jpg"},
    
    
  ],
  completed: [
    { id: 2, image: "/book_images/kitchen_confidential.avif", rating: 3.5},
    { id: 1, image: "/book_images/how_to_know_a_person.jpg", rating: 4.5},
    { id: 4, image: "/book_images/greenlights.jpg", rating: 5},
    { id: 3, image: "/book_images/midnight_library.jpg", rating: 4},
    { id: 6, image: "/book_images/flash_boys.jpg", rating: 3},
    { id: 8, image: "/book_images/atomic_habits.jpg", rating: 3.5},
    { id: 9, image: "/book_images/jordan_peterson.jpg", rating: 3.5},
    { id: 8, image: "/book_images/east_eden.jpg", rating: 4},
  ],
  inQueue: [
    { id: 5, image: "/book_images/social_animal.jpg" },
    { id: 7, image: "/book_images/tomorrow.jpg" },
  ]
};

const BookItem = ({ image, isCompleted, rating }) => {
  return (
    <div className={`book-item`}>
      <div className="book-cover">
        <img src={image} alt="Book Cover" />
      </div>
      {isCompleted && (
        <div className="star-rating">
          {Array.from({ length: 5 }, (_, index) => {
            if (index < Math.floor(rating)) {
              return <Star key={index} filled={true} />; // Full star
            } else if (index < rating) {
              return <HalfStar key={index} />; // Half star
            } else {
              return <Star key={index} filled={false} />; // Empty star
            }
          })}
        </div>
      )}
    </div>
  );
};

const BookSection = ({ title, books }) => (
  <div className="book-section">
    <h3 className="section-title">{title}</h3>
    <div className="book-list">
      {books.map(book => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  </div>
);

export default function Personal() {
  const [booksOpen, setBooksOpen] = useState(false);
  const [cooksOpen, setCooksOpen] = useState(false);

  return (
    <div className="personal-page">
      <main>
        <div className="section">
          <button
            onClick={() => setBooksOpen(!booksOpen)}
            className="section-toggle"
          >
            books
            {booksOpen ? <ChevronUp className="toggle-icon" /> : <ChevronDown className="toggle-icon" />}
          </button>
          {booksOpen && (
            <div className="section-content">
              <BookSection title="currently reading" books={books.currentlyReading} />
              <BookSection title="completed" books={books.completed.map(book => ({ ...book, isCompleted: true }))} />
              <BookSection title="in queue" books={books.inQueue} />
            </div>
          )}
        </div>

        <div className="section">
          <button
            onClick={() => setCooksOpen(!cooksOpen)}
            className="section-toggle"
          >
            cooks
            {cooksOpen ? <ChevronUp className="toggle-icon" /> : <ChevronDown className="toggle-icon" />}
          </button>
          {cooksOpen && (
            <div className="section-content">
              <div className="recipe-grid">
                {recipes.map(recipe => (
                  <RecipeCard 
                    key={recipe.id} 
                    title={recipe.title} 
                    image={recipe.image} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
