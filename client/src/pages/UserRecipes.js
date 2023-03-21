import React, { useEffect, useState } from 'react'
import UserRecipeModal from '../components/recipes/UserRecipeModal'
import UserRecipeCard from '../components/recipes/UserRecipeCard'
import useApiRequest from '../hooks/useApiRequest'
import ReqLayout from '../components/commons/ReqLayout'

export default function UserRecipes() {
  const [showModal, setShowModal] = useState(false)
  const {response: userRecipes, error, loading, doRequest: getUserRecipes} = useApiRequest('getUserRecipe')
  const {response: postResponse, doRequest: postUserRecipe} = useApiRequest('userRecipe')

  const submitUserRecipe = async (recipeData) => {

    await postUserRecipe({ "userRecipe": recipeData })

    setShowModal(false)

  }

  useEffect(() => {
    getUserRecipes()
  }, [getUserRecipes, postResponse])


  return (
    <div className='container'>
      <UserRecipeModal show={showModal} onSubmit={submitUserRecipe} close={() => setShowModal(false)} />
      <div>
        <button className='btn btn-success' onClick={() => setShowModal(true)}>Add Recipe</button>
        <hr />
      </div>
      <div className='row'>
        <ReqLayout error={error} loading={loading}>
          {userRecipes && userRecipes.data.getUserRecipes.map(recipe => (
              <div className="col-sm-3 my-2"><UserRecipeCard recipe={recipe} /></div>
            ))
          }
        </ReqLayout>
      </div>


    </div>
  )
}
