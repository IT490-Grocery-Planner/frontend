import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import GroceryListDisplay from '../components/groceries/GroceryListDisplay'
import FridgeDisplay from '../components/groceries/FridgeDisplay'
import useApiRequest from '../hooks/useApiRequest'

export default function GroceryDashboard() {

  const { response, error, loading } = useApiRequest('userGroceries')

  return (

    <div className="row">
      {loading && (<>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>)}
      {response && (
        <>
          <div className="col-sm-12 mb-5 mt-3">
            <GroceryListDisplay items={response.data['listItems']} />
          </div>
          <div className="col-sm-12">
            <FridgeDisplay items={response.data['groceries']} />
          </div>
        </>
      )}

    </div>

  )
}
