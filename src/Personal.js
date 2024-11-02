import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Personal.css';
import { recipes } from './data/recipes';
import { RecipeCard } from './components/RecipeCard';

const books = {
  currentlyReading: [
    {id: 10, image: "/book_images/emotional_agility.jpg"},
    { id: 8, image: "/book_images/east_eden.jpg" },
    
  ],
  completed: [
    { id: 2, image: "/book_images/kitchen_confidential.avif" },
    { id: 1, image: "/book_images/how_to_know_a_person.jpg" },
    { id: 4, image: "/book_images/greenlights.jpg" },
    { id: 3, image: "/book_images/midnight_library.jpg" },
    { id: 6, image: "/book_images/flash_boys.jpg" },
    { id: 8, image: "/book_images/atomic_habits.jpg" },
    { id: 9, image: "/book_images/jordan_peterson.jpg" },
  ],
  inQueue: [
    { id: 5, image: "/book_images/social_animal.jpg" },
    { id: 7, image: "/book_images/tomorrow.jpg" },
  ]
};

const BookItem = ({ title, author, image }) => (
  <div className="book-item">
    <img src={image} alt={title} className="book-cover" />
    <h3 className="book-title">{title}</h3>
    <p className="book-author">{author}</p>
  </div>
);

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
              <BookSection title="completed" books={books.completed} />
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
