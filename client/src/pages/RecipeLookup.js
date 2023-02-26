import React, {useState} from 'react'
import axios from "axios" 
import RecipeCard from '../components/recipes/RecipeCard'

export default function RecipeLookup() {
  const [keyword, setKeyword] = useState('')
  const [recipes, setRecipes] = useState([])

  console.log(keyword)

  const fetchRecipesByKeyword = async () => {
    const session = JSON.parse(sessionStorage.getItem("session"));

    const res = await axios.post("/lib/api.php", {"type": "keywordrecipe", "keyword": keyword, "sessionID": session["sessionID"] })
    console.log(res.data['results'])
    
    //setRecipes(res.data['results'])
    return
  }

  return (
    <div>
      <h1>Lookup Recipes</h1>
      <input className="form-control" onChange={e => setKeyword(e.target.value)} />
      <button className="btn btn-success mt-3" onClick={fetchRecipesByKeyword}>Lookup</button>
      <div className="row">
      
      {recipes.map(recipe => (<div className="col-sm-3"><RecipeCard recipe /></div>))}
      
      </div>
    </div>
  )
}
