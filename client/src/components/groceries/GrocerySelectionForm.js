import React, { useState } from 'react'
import axios from 'axios';
export default function GrocerySelectionForm({ select }) {

  const session = JSON.parse(sessionStorage.getItem("session"));
  const [lookup, setLookup] = useState([])
  const [buyDate, setBuyDate] = useState(null);
  const [expirationDate, setexpirationDate] = useState(null);
  const [amount, setAmount] = useState(0);
  const [selection, setSelection] = useState(null)
  const imgURL = 'https://spoonacular.com/cdn/ingredients_100x100/'
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
      })
  }


  const handleSubmitSelection = e => {
    e.preventDefault();

    const finalSelectionData = {
      amount,
      buyDate,
      expirationDate,
      ...selection,
    }

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
                  onClick={() => setSelection(item)}>
                  {item['name']}
                  <div class="image-parent">
                    <img src={imgURL+ item['image']} alt={item['name']} class="img-fluid" />
                  </div>
                </li>
              ))
            }
          </ul>
        ) : (
          <>
            <div class="card my-2">
              <img width="200" src={imgURL + selection['image']} alt={selection['name']} />
              <div class="card-body">
                <h5 class="card-title">{selection['name']}</h5>
              </div>
            </div>
            <form onSubmit={handleSubmitSelection}>
            <label for="buyDate">Buy Date : </label>
            <label for="expDate">Expiration Date : </label>
              <div class="input-group mb-2">
              
                <input className="form-control" type="date"
                  onChange={e => setBuyDate(e.target.value)} placeholder='Buy Date' id='buyDate'/>
                <input className="form-control" type="date"
                  onChange={e => setexpirationDate(e.target.value)} placeholder='Expiration Date' id='expDate' />
              </div>

              <input className="form-control mb-2" onChange={e => setAmount(Number(e.target.value))}
                type="number" name="amount" placeholder='Set Quantity' />
              <input type="submit" value="Submit" class="btn btn-success" />
            </form>
          </>
        )
      }



    </div>

  )
}
