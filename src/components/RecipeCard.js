export const RecipeCard = ({ title, image }) => (
  <div className="recipe-item">
    <img src={image} alt={title} className="recipe-image" />
    <div className="recipe-overlay">
      <h3 className="recipe-title">{title}</h3>
    </div>
  </div>
); 