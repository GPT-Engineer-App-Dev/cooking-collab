import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Rating = ({ recipeId, initialRating, onRatingSubmit }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  const handleRatingSubmit = () => {
    onRatingSubmit(rating);
    toast.success("Rating submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1 mb-2">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <Star
              key={index}
              className={`h-6 w-6 cursor-pointer ${
                ratingValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
      </div>
      <Button onClick={handleRatingSubmit}>Submit Rating</Button>
    </div>
  );
};

export default Rating;