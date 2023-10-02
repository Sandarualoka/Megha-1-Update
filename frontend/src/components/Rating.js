import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex items-center mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`text-4xl ${
            star <= rating ? 'text-yellow-500' : 'text-gray-400'
          }`}
          onClick={() => handleRatingClick(star)}
        >
          &#9733; {/* Unicode star character */}
        </button>
      ))}
      <p className="ml-2">{rating} stars</p>
    </div>
  );
};

export default StarRating;
