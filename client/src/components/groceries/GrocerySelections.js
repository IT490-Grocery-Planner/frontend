import React from 'react'

export default function GrocerySelections({selections}) {
  
  return (
    <div>
        <h2>Select Groceries</h2>
        <ul class="list-group" style={{'height': '500px', 'overflow-y': 'scroll'}}>
        {
          selections.map(grocery => (
            <li class="list-group-item d-flex justify-content-between align-items-center" style={{'height': '40%'}} 
            key={grocery['id']}>
            {grocery['name']}
            <div class="image-parent">
                <img src={' https://spoonacular.com/cdn/ingredients_100x100/'+grocery['image']} class="img-fluid" />
            </div>
          </li>
          ))
        }
       
      </ul>
        
    </div>

  )
}
