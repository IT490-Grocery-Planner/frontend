import React, { useState } from 'react'
import axios from 'axios';
export default function GrocerySelectionForm({ select }) {

  const session = JSON.parse(sessionStorage.getItem("session"));
  const [lookup, setLookup] = useState([])
  const [selection, setSelection] = useState(null)

  const handleSubmitLookup = (e) => {

    e.preventDefault();

    const form_data = new FormData(e.target);
    const form_props = Object.fromEntries(form_data);

    axios.post('/api/index.php', form_props)
      .then((res) => {
        console.log("grocery list", res.data)
        setSelection(null)
        setLookup(res.data['results'])

      }).catch(err => {
        const { data } = err.response
        console.log(data)
        //Check how to flash err messages
      })
  }


  const handleSubmitSelection = e => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const form_props = Object.fromEntries(form_data);
    const finalSelectionData = { ...selection, ...form_props }

    setLookup([])
    setSelection(null)
    select(finalSelectionData)

  }

  return (
    <div>
      <h2>Search Groceries</h2>
      <form onSubmit={handleSubmitLookup}>
        <input type="hidden" value={session['sessionID']} name="sessionID" />
        <input type="hidden" value="grocerylist" name="type" />
        <div class="input-group my-3">
          <input className="form-control" name="search" />
          <input type="submit" value="Lookup" class="btn btn-primary" />
        </div>
      </form>
      {
        selection === null ? (
          <ul class="list-group" style={{ 'height': '400px', 'overflow-y': 'scroll' }}>
            {
              lookup.map(item => (
                <li class="list-group-item d-flex justify-content-between align-items-center"
                  style={{ 'height': '40%', 'cursor': 'pointer' }} key={item['id']}
                  onClick={() => setSelection(res)}>
                  {item['name']}
                  <div class="image-parent">
                    <img src={' https://spoonacular.com/cdn/ingredients_100x100/' + item['image']} class="img-fluid" />
                  </div>
                </li>
              ))
            }
          </ul>
        ) : (
          <div>{selection['name']}</div>
        )
      }

      {
        selection && (
          <form onSubmit={handleSubmitSelection}>
            <div class="input-group ">
              <input className="form-control" type="date" name="buyDate" placeholder='Buy Date' />
              <input className="form-control" type="date" name="expireDate" placeholder='Expiration Date' />
            </div>
            <input className="form-control" type="number" name="amount" placeholder='amount' />
            <input type="submit" value="Submit" class="btn btn-success" />
          </form>
        )
      }

    </div>

  )
}
