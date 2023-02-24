import React, {useEffect} from 'react'
import axios from "axios" 

export default function RecipeLookup() {
  const [keyword, setKeyword] = useState('')
  
  const fetchRecipesByKeyword = async () => {
    const session = JSON.parse(sessionStorage.getItem("session"));

    const res = axios.post("/lib/api.php", {"type": "keywordrecipe", "keyword": keyword, "sessionID": session["sessionID"] })
    console.log(res)
  }

  return (
    <div>
      <h1>Lookup Recipes</h1>
      <input className="from-control" onChange={e => setKeyword(e.target.value)} />
      <button className="btn btn-success" onClick={fetchRecipesByKeyword}>Lookup</button>
    </div>
  )
}
