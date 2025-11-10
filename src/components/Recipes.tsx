import React from 'react';

interface RecipesCardProps {
    title: string;
    description: string;
    image: string;
    calories: number;
}

//React.FC denotes a functional component
const RecipeCard: React.FC<RecipesCardProps> = ({ title, description, image, calories}) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
                <p className="text-orange-500 mt-2 text-sm font-medium">~ {calories} kcal</p>
            </div>
        </div>
    );
};

const Recipes: React.FC = () => {
    const recipes = [
        { id: 1, title: 'Quinoa Salad', description: 'A refreshing and healthy quinoa salad.', image: 'https://source.unsplash.com/300x200/?food,quinoa', calories: 320 },
        { id: 2, title: 'Grilled Chicken', description: 'Delicious grilled chicken with herbs.', image: 'https://source.unsplash.com/300x200/?food,chicken', calories: 450 },
        { id: 3, title: 'Veggie Stir Fry', description: 'A quick and easy vegetable stir fry.', image: 'https://source.unsplash.com/300x200/?food,veggies', calories: 280 },
        { id: 4, title: 'Avocado Toast', description: 'Healthy avocado toast with whole grain bread.', image: 'https://source.unsplash.com/300x200/?food,avocado', calories: 350 },
    ]
    return (
        <div className="min-h-screen flex bg-gray-50 px-6 py-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Healthy Recipes</h1>
                <p className="text-gray-600 mb-6">Find recipes that match your taste and health goals</p>
           

            <div className="flex justify-center">
                <input type="text" placeholder="Search for a recipe..." className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition duration-300">Search</button>

             </div>
             </div>
                <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🍽️ Explore Delicious Recipes
      </h1>

      {/* Recipe Cards Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            calories={recipe.calories}
          />
        ))}
        </div>
        </div>

      </div>

    



    );
};

export default Recipes;