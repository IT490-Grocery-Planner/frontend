import React from 'react'

export default function GroceryListDisplay({items, addToFridge}) {
  
  const imgURL = 'https://spoonacular.com/cdn/ingredients_100x100/'
  return (
    <div>
      <h4>Grocery List</h4>
      <div class="d-flex flex-row flex-nowrap">
        {items.map(grocery => (
          <div class="mx-2 card" style={{ width: "10rem" }} onClick={() => addToFridge(grocery)}>

            <img  src={imgURL + grocery['image']} alt={grocery["name"]} />
            <div className="card-footer">
              {grocery['item']} {(grocery['amount'])}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
