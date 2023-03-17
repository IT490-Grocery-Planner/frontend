import React from 'react'

export default function RecipeCard({recipe, children}) {
//const baseURL = "https://spoonacular.com/recipeImages/";
  return (
    <div class="card" style={{"width": "18rem"}}>
        
        <img class="card-img-top" src={recipe['image']} alt={recipe['title']}/>
        <div class="card-body">
            <h5 class="card-title">{recipe['title']}</h5>
            <a href={recipe['sourceUrl']} rel="noreferrer" target="_blank" class="btn btn-primary">See Recipe</a> 
        </div>
        <div class='card-footer'>{children}</div>
    </div>
  )
}
