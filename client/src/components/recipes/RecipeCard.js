import React from 'react'

export default function RecipeCard({recipe}) {
const baseURL = "https://spoonacular.com/recipeImages/";
  return (
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src={baseURL+recipe.image} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">{recipe.title}</h5>
            <a href={recipe.sourceURL} class="btn btn-primary">See Recipe</a>
        </div>
    </div>
  )
}
