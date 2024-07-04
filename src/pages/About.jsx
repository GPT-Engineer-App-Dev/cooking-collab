import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>About Recipe Share</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Recipe Share is a platform where you can discover and share amazing recipes from around the world. Our mission is to bring together food enthusiasts and help them explore new culinary experiences.
          </p>
          <p>
            Whether you are a professional chef or a home cook, Recipe Share is the perfect place to find inspiration and share your own creations.
          </p>
          <p>
            Our team is passionate about food and dedicated to providing a user-friendly platform for all your recipe needs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;