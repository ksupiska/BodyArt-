import React, { useState } from "react";

import '../css/star-rating.css'

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index} className="star-label">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              aria-label={`Рейтинг ${ratingValue} из 5`}
              onClick={() => onRatingChange(ratingValue)}
              className="star-input"
            />
            <svg
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              viewBox="0 0 24 24"
              fill={
                ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
              }
              width="24"
              height="24"
              role="img"
              aria-hidden={ratingValue <= (hover || rating) ? "false" : "true"} // Исправлено значение на строку
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
