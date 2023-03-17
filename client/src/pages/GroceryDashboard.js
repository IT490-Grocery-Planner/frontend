import React, {useEffect} from 'react'
import ReqLayout from '../components/commons/ReqLayout'
import GroceryListDisplay from '../components/groceries/GroceryListDisplay'
import FridgeDisplay from '../components/groceries/FridgeDisplay'
import useApiRequest from '../hooks/useApiRequest'

export default function GroceryDashboard() {

  const { response, error, loading, doRequest } = useApiRequest('userGroceries')

  useEffect(() => {
    doRequest()
  }, [doRequest])
  
  return (

    <div className="row">
      <ReqLayout response={response} error={error} loading={loading}>
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
    
      </ReqLayout>
    </div>

  )
}
