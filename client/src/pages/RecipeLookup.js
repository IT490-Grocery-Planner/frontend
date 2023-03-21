import React, { useMemo, useState, useCallback } from 'react'
import RecipeCard from '../components/recipes/RecipeCard'
import RatingModal from '../components/recipes/RatingModal'
import useApiRequest from '../hooks/useApiRequest'
import ReqLayout from '../components/commons/ReqLayout'

export default function RecipeLookup() {
  const [keyword, setKeyword] = useState('')
  const [query, setQuery] = useState('')
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // Hooks to make different requests
  const keywordRecipe = useApiRequest('keywordrecipe')
  const groceryRecipe = useApiRequest('groceryrecipe')
  const expiredRecipe = useApiRequest('expirerecipe')

  // Trigger requests based on selected query
  const fetchRecipes = useCallback(async (query) => {
    switch (query) {
      case 'keywordrecipe':
        await keywordRecipe.doRequest({ "keyword": keyword })
        break
      case 'groceryrecipe':
        await groceryRecipe.doRequest()
        break
      case 'expirerecipe':
        await expiredRecipe.doRequest()
        break
      default:
        break;
    }
    setQuery(query)

  }, [keywordRecipe, groceryRecipe, groceryRecipe])

  //Get get recipe array based on queries (memoize results to revent unecessary recalculation)
  const recipes = useMemo(() => {
    switch (query) {
      case 'keywordrecipe': 
        // base image url had to be added manually because Spoonacular  didn't provide it for this request
        const baseURL = 'https://spoonacular.com/recipeImages/' 
        return keywordRecipe.response?.data['results'].map(recipe => ({ ...recipe, image: baseURL + recipe.image })) ?? []
      case 'groceryrecipe':
        return groceryRecipe.response?.data ?? []
      case 'expirerecipe':
        return expiredRecipe.response?.data ?? []
      default:
        return [];
    }
  }, [query, groceryRecipe.response, expiredRecipe.response, keywordRecipe.response])

  // Consolidate different loading states into one 
  const loading = useMemo(() => (keywordRecipe.loading || groceryRecipe.loading || expiredRecipe.loading),
    [groceryRecipe.loading, expiredRecipe.loading, keywordRecipe.loading])

  // Consolidate different errors
  const error = useMemo(() => (keywordRecipe.error ?? groceryRecipe.error ?? expiredRecipe.error),
    [groceryRecipe.error, expiredRecipe.error, keywordRecipe.error])

  // Recipe saving/rating state modal handler
  const handleOpen = recipe => {
    setSelectedRecipe(recipe);
    setShowModal(true);

  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };

  return (
    <div>

      <RatingModal show={showModal} selection={selectedRecipe} close={handleClose} />
      
      <h4>Lookup Recipes From:</h4>
      
      <div className='input-group my-3'>
        <div class="input-group-prepend">
          <button className="btn btn-success" disabled={loading} type='button' onClick={() => fetchRecipes('groceryrecipe')}>All Groceries</button>
          <button className="btn btn-danger" disabled={loading}  type='button' onClick={() => fetchRecipes('expirerecipe')}>Near-Expired Groceries</button>
          <button className="btn btn-primary"  disabled={loading} type='button' onClick={() => fetchRecipes('keywordrecipe')}>Keyword</button>
        </div>
        <input className="form-control" onChange={e => setKeyword(e.target.value)} placeholder="keyword (default random)" />
      </div>

      <div className="row">
        <ReqLayout error={error} loading={loading}>
          {loading || recipes.map(recipe => (
            <div className="col-sm-3 my-1">
              <RecipeCard recipe={recipe}>
                <div class="d-grid mx-auto">
                  <button onClick={() => handleOpen(recipe)} class="btn btn-success">Save</button>
                </div>
              </RecipeCard>
            </div>))}
        </ReqLayout>
      </div>
    </div>
  )
}
