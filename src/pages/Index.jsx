import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Recipe Share</h1>
        <p className="text-lg text-muted-foreground">Discover and share amazing recipes from around the world.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the recipe.</p>
              <Link to="/recipe/1" className="text-primary">Read more</Link>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the recipe.</p>
              <Link to="/recipe/2" className="text-primary">Read more</Link>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the recipe.</p>
              <Link to="/recipe/3" className="text-primary">Read more</Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title 4</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the recipe.</p>
              <Link to="/recipe/4" className="text-primary">Read more</Link>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title 5</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the recipe.</p>
              <Link to="/recipe/5" className="text-primary">Read more</Link>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title 6</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the recipe.</p>
              <Link to="/recipe/6" className="text-primary">Read more</Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;