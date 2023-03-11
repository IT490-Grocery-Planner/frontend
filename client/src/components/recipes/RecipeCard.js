import React from 'react'

export default function RecipeCard(props) {
  const {recipe, save} = props
//const baseURL = "https://spoonacular.com/recipeImages/";
  return (
    <div class="card" style={{"width": "18rem"}}>
        <img class="card-img-top" src={recipe['image']} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">{recipe['title']}</h5>
            <a href={recipe['sourceUrl']} target="_blank" class="btn btn-primary">See Recipe</a>
            {save && <button onClick={() => save(recipe)} class="btn btn-success">Save</button>}
        </div>
    </div>
  )
}
