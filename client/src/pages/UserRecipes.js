import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserRecipeModal from '../components/recipes/UserRecipeModal'
import UserRecipeCard from '../components/recipes/UserRecipeCard'

export default function UserRecipes() {
  const [showModal, setShowModal] = useState(false)
  const [userRecipes, setUserRecipes] = useState([])
  const submitUserRecipe = async (recipeData) => {
    try {
        const session = JSON.parse(sessionStorage.getItem("session"));
        const res = await axios.post("/api/index.php", {
          "type": "userRecipe",
          "sessionID": session["sessionID"],
          "userRecipe": recipeData

        });

        console.log("submit_user_recipe",res)
        
        setShowModal(false)
        await getUserRecipes()

      } catch (err) {
        console.log(err)
      }

    }

  const getUserRecipes = async () => {
    try {
      const session = JSON.parse(sessionStorage.getItem("session"));
      const res = await axios.post("/api/index.php", {
        "type": "getUserRecipe",
        "sessionID": session["sessionID"],

      });

      console.log("get_user_recipes",res)

      setUserRecipes(res.data.getUserRecipes)
  

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUserRecipes()
  }, [])
  
  return (
    <div className='container'>
        <UserRecipeModal show={showModal} onSubmit={submitUserRecipe} close={() => setShowModal(false)}/>
        <div>
            <button className='btn btn-success' onClick={() => setShowModal(true)}>Add Recipe</button>
            <hr/>
        </div>
        <div className='row'>
        {userRecipes.map(recipe => (<div className="col-sm-3"><UserRecipeCard recipe={recipe} /></div>))}
        </div>
    </div>
  )
}
