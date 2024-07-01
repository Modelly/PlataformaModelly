import { useState } from 'react';
import styleStar from './StarRating.module.css'; // Importando estilos personalizados

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className={styleStar.star_rating}>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? styleStar.on : styleStar.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={styleStar.star}>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
