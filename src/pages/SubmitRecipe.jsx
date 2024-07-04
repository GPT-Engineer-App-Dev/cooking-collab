import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const SubmitRecipe = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Recipe submitted successfully!");
    reset();
    } catch (error) {
      toast.error("Failed to submit recipe. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Submit Your Recipe</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Recipe Title
              </label>
              <Input id="title" {...register("title", { required: "Title is required" })} />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                Ingredients
              </label>
              <Textarea id="ingredients" {...register("ingredients", { required: "Ingredients are required" })} />
              {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients.message}</p>}
            </div>
            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                Instructions
              </label>
              <Textarea id="instructions" {...register("instructions", { required: "Instructions are required" })} />
              {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions.message}</p>}
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image Upload
              </label>
              <Input id="image" type="file" {...register("image", { required: "Image is required" })} />
              {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmitRecipe;