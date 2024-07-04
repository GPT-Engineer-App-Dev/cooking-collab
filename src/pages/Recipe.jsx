import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Rating from "@/components/Rating";

const Recipe = () => {
  const { id } = useParams();
  const [averageRating, setAverageRating] = useState(4); // Mock initial average rating

  const handleRatingSubmit = (newRating) => {
    // Mock API call to submit rating and fetch updated average rating
    setTimeout(() => {
      setAverageRating((prevRating) => (prevRating + newRating) / 2); // Simplified average calculation
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <CardHeader>
          <CardTitle>Recipe Title {id}</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </section>
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside">
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
            </ol>
          </section>
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Author Information</h2>
            <p>Author Name</p>
            <p>Short bio of the author.</p>
          </section>
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Average Rating</h2>
            <p>{averageRating.toFixed(1)} / 5</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Rate this Recipe</h2>
            <Rating recipeId={id} initialRating={0} onRatingSubmit={handleRatingSubmit} />
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recipe;