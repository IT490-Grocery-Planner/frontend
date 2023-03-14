import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../components/recipes/RecipeCard'

export default function SavedRecipes() {

  const { response, error, loading } = useApiRequest('viewRated')


  return (
     
    <div className="row">
    <h1>Saved Recipes</h1>
    {savedRecipes.map(recipe => (<div className="col-sm-3"><RecipeCard recipe={recipe} save={null}/></div>))}
    </div>
  
  )
  
}
