import React, { useState } from 'react'
import axios from 'axios'
import GrocerySelections from '../components/groceries/GrocerySelections'
import GrocerySelectionForm from '../components/groceries/GrocerySelectionForm'

export default function GroceryAdd() {
  const [grocerySelections, setGrocerySelections] = useState([])

  const addGrocery = (grocery) => {
    //TODO: Add check to prevent duplicate
    setGrocerySelections(prev => [...prev, grocery])
  }

  const submitSelections = async () => {

    try {
      const session = JSON.parse(sessionStorage.getItem("session"));
      const res = await axios.post("/api/index.php", {
        "type": "addGroceries",
        "groceries": grocerySelections,
        "sessionID": session["sessionID"]
      })
      setGrocerySelections([])
      console.log('add groceries', res)
    } catch (err) {
      console.log(err)
    }


  }

  return (
    <div>

      <div className='px-5'>
        <div className='row'>
          <div className='col-sm-5'>
            <GrocerySelectionForm select={addGrocery} />
          </div>
          <div className='col-sm-7'>
            <GrocerySelections
              selections={grocerySelections}
              onSubmit={() => submitSelections()}
            />
          </div>


        </div>
      </div>
    </div>
  )
}
