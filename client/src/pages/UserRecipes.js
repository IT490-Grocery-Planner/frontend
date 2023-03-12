import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserRecipeModal from '../components/recipes/UserRecipeModal'

export default function UserRecipes() {
  const [showModal, setShowModal] = useState(false)

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

      } catch (err) {
        console.log(err)
      }

    }

  
  return (
    <div className='container'>
        <UserRecipeModal show={showModal} onSubmit={submitUserRecipe} close={() => setShowModal(false)}/>
        <div>
            <button className='btn btn-success' onClick={() => setShowModal(true)}>Add Recipe</button>
            <hr/>
        </div>
        <div className='row'>

        </div>
    </div>
  )
}
