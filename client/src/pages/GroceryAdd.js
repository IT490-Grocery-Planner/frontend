import React, { useState } from 'react'
import axios from 'axios'
import GrocerySelections from '../components/groceries/GrocerySelections'
import GrocerySelectionForm from '../components/groceries/GrocerySelectionForm'
import useApiRequest from '../hooks/useApiRequest'

export default function GroceryAdd() {
  const [grocerySelections, setGrocerySelections] = useState([])

  const addGrocery = (grocery) => {
    //TODO: Add check to prevent duplicate
    setGrocerySelections(prev => [...prev, grocery])
  }

  const submitSelections = () => {
    const { response, error, loading } = useApiRequest(
      "addGroceries",
      { "groceries": grocerySelections }
    )

    setGrocerySelections([])

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
