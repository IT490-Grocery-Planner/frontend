import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../components/recipes/RecipeCard'

export default function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([])

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const session = JSON.parse(sessionStorage.getItem("session"));
        const res = await axios.post("/api/index.php", {
          "type": "viewRated",
          "sessionID": session["sessionID"]
        });
    
        console.log("view_saved_recipes", res)
        setSavedRecipes(res.data.userRatedRecipes)

      } catch (err) {
        console.log(err)
      }

    }

    fetchSavedRecipes()
    
  }, [])


  return (
    <>
    <h1>Saved Recipes</h1>
    <div className="row">
    {savedRecipes.map(recipe => (<div className="col-sm-3"><RecipeCard recipe={recipe} save={null}/></div>))}
    </div>
    </>
  )
  
}
