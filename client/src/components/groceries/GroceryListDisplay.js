import React from 'react'

export default function GroceryListDisplay(props) {
const {items} = props
const imgURL = 'https://spoonacular.com/cdn/ingredients_100x100/'
  return (
    <div>
    <h4>Grocery List</h4>
    <ul class="list-group list-group-horizontal mt-4 w-100" style={{overflowX: 'scroll'}}>
        {items.map(grocery => (
            <li class="mx-5 card px-2 list-group-item" style={{width: "10rem"}}>
              
                <img class="card-img-top" src={imgURL + grocery['image']} alt={grocery["name"]} width="100"/>
                    <div className="card-body">
                        {grocery['item']} {(grocery['amount'])}
                    </div>
           
            </li>
        ))}
    </ul>
    </div>
  )
}
