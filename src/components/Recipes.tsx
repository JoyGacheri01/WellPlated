import React from 'react';

const Recipes: React.FC = () => {
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
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                 {/* Example Recipe Card */}
                 {[1, 2, 3, 4, 5, 6].map((id) => (
                <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">

                 <img src={`https://source.unsplash.com/300x200/?food,recipe,${id}`} alt="Recipe" className="w-full h-40 object-cover"/>
                 <div className="p-4">
                   <h2 className="text-lg font-semibold text-gray-800 mb-2">Recipe {id} </h2>
                   <p className="text-sm text-gray-600">
                   A quick and healthy dish for your daily meals.
              </p>
              <p className="text-orange-500 mt-2 text-sm font-medium">
                ~ 350 kcal
              </p>
                </div>
          </div>
        ))}
      </div>

    


        </div>
    );
};

export default Recipes;