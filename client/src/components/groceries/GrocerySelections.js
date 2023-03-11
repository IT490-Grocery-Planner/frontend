import React from 'react'


export default function GrocerySelections({ selections, onSubmit }) {

  const handlesubmit = () => {
    onSubmit();
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

      {selections.length > 0 && <button className="btn btn-success float-right" onClick={handlesubmit}>Submit Selections</button>}
    </div>

  )
}
