import React, { useState } from 'react'

export default function UserRecipes() {
  const [showModal, setShowModal] = useState(false)

  const submitUserRecipe = (recipeData) => {
    console.log(recipeData)
  }
  return (
    <div className='container'>
        <div>
            <button className='btn btn-success'>Add Recipe</button>
            <hr/>
        </div>
        <div className='row'>

        </div>
    </div>
  )
}
