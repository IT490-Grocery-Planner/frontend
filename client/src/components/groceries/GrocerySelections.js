import React from 'react'
import axios from 'axios'

export default function GrocerySelections({ selections }) {
  console.log("selections", selections)
  const submitSelections = async () => {
    const session = JSON.parse(sessionStorage.getItem("session"));

    const res = await axios.post("/api/index.php", {
      "type": "addGroceries",
      "groceries": selections,
      "sessionID": session["sessionID"]
    })

    console.log('add groceries', res)

    return
  }
  return (
    <div>
      <h2>Selected Groceries</h2>
      <ul class="list-group" style={{ 'height': '500px', 'overflow-y': 'scroll' }}>
        {
          selections.map(grocery => (
            <li class="list-group-item d-flex justify-content-between align-items-center" style={{ 'height': '40%' }}
              key={grocery['id']}>
              {grocery['name']} ({grocery['amount']})
              <div class="image-parent">
                <img src={' https://spoonacular.com/cdn/ingredients_100x100/' + grocery['image']} alt={grocery['name']} class="img-fluid" />
              </div>
            </li>
          ))
        }

      </ul>

      {selections.length > 0 && <button className="btn btn-success float-right" onClick={submitSelections}>Submit Selections</button>}
    </div>

  )
}
