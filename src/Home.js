import React, { useState } from 'react';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDonutsClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target.className === 'modal show') {
      handleCloseModal();
    }
  };

  return (
    <>
      <div className="content">
        <div className="text-section">
          <h1 className="name">rohan saxena</h1>
          <p className="sub-text">mechatronic systems engineering & ivey hba</p>
          <p className="sub-text">senior analyst – product & data @ bmo</p>
          
          <ul className="bullet-points">
            <li>born in mumbai, india; raised in calgary, alberta</li>
            <li>love to cook, read, workout, and play volleyball</li>
            <li>also really love <span className="highlight" onClick={handleDonutsClick}>donuts</span></li>
            <li>here's <a 
              href="/RohanSaxena_Resume.pdf" 
              download="RohanSaxena_Resume.pdf"
              className="highlight"
              style={{ textDecoration: 'none' }}
            >one page</a> where i brag about myself</li>
          </ul>
        </div>

        <div className="image-section">
          <img src="/child_photo.png" alt="Rohan as a child" className="profile-image" />
        </div>
      </div>

      <div className="contact-section">
        <a href="https://app.beliapp.com/lists/rsaxena6?_branch_match_id=1345170483207064847&utm_medium=my_profile_link&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0rNyUwsKNBLztcHUvpFxYkVqXmJZvZ1RalpqUVFmXnp8UlF%2BeXFqUW2zhlF%2BbmpAJq9Wxw5AAAA" target="_blank" rel="noopener noreferrer">
          <img src="/beli.jpg" alt="Beli" className="contact-logo" />
        </a>
        <a href="https://www.linkedin.com/in/rsaxena6/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.jpeg" alt="LinkedIn" className="contact-logo" />
        </a>
        <a href="mailto:rohansaxena1738@gmail.com">
          <img src="/email.jpg" alt="Gmail" className="contact-logo" />
        </a>
        <a href="https://www.strava.com/athletes/85256264" target="_blank" rel="noopener noreferrer">
          <img src="/strava_logo.png" alt="Strava" className="contact-logo" />
        </a>
      </div>

      {isModalOpen && (
        <div className="modal show" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src="/donuts.jpeg" alt="Donuts" />
            <a 
              href="https://www.eatcops.com/collections/600" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="highlight"
              style={{ display: 'block', textAlign: 'center' }}
            >
              my go-to order
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
