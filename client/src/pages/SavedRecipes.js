import React, { useEffect } from 'react'

import RecipeCard from '../components/recipes/RecipeCard'
import ReqLayout from '../components/commons/ReqLayout'
import useApiRequest from '../hooks/useApiRequest'

export default function SavedRecipes() {

  const { response, error, loading, doRequest } = useApiRequest('viewRated')

  useEffect(() => {
    doRequest()
  }, [doRequest])

  return (
    <>
      <h1>Saved Recipes</h1>
      <div className="row">
        <ReqLayout error={error} loading={loading}>
          {response && response.data.userRatedRecipes.map(recipe => (
            <div className="col-sm-3 my-2">
              <RecipeCard recipe={recipe}>
                {recipe.rating}
              </RecipeCard>
            </div>
          ))}
        </ReqLayout>
      </div>
    </>
  )

}
