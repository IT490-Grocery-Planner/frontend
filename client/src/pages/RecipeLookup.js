import React, {useState} from 'react'
import axios from "axios" 
import RecipeCard from '../components/recipes/RecipeCard'
import RatingModal from '../components/recipes/RatingModal'

export default function RecipeLookup() {
  const [keyword, setKeyword] = useState('')
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const fetchRecipesByKeyword = async () => {
    const session = JSON.parse(sessionStorage.getItem("session"));

    const res = await axios.post("/api/index.php", {"type": "keywordrecipe", "keyword": keyword, "sessionID": session["sessionID"] })
    console.log(res.data['results'])
    
    setRecipes(res.data['results'])
    return
  }
  const fetchRecipesFromGroceries = async (aboutToExpire) => {
    const session = JSON.parse(sessionStorage.getItem("session"));
    const type = aboutToExpire ? "expirerecipe" : "groceryrecipe"
    const res = await axios.post("/api/index.php", {"type": type, "sessionID": session["sessionID"] })
    console.log(res)
    
    setRecipes(res.data)
    return
  }


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
      <h1>Lookup Recipes</h1>
      <RatingModal show={showModal} selection={selectedRecipe} close={handleClose} />

      <div className='input-group'>
        <input className="form-control" onChange={e => setKeyword(e.target.value)} />
        <input type="submit" className="btn btn-primary mt-3" value="From Keyword" onClick={fetchRecipesByKeyword} />
      </div>
      
      <input type="submit" className="form-control btn btn-success mt-3" value="From Groceries"  onClick={() => fetchRecipesFromGroceries(false)} />
      <input type="submit" className="form-control btn btn-danger mt-3" value="From Groceries About to Expire"  onClick={() => fetchRecipesFromGroceries(true)} />

      <div className="row mt-4">
      
      {recipes.map(recipe => (
        <div className="col-sm-3 my-1">
          <RecipeCard recipe={recipe}>
            <button onClick={handleOpen} class="btn btn-success">Save</button>  
          </RecipeCard>
        </div>))}
      
      </div>
    </div>
  )
}
