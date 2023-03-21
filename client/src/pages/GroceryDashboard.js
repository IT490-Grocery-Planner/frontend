import React, {useEffect, useState} from 'react'
import ReqLayout from '../components/commons/ReqLayout'
import GroceryListDisplay from '../components/groceries/GroceryListDisplay'
import FridgeDisplay from '../components/groceries/FridgeDisplay'
import ToFridgeModal from '../components/groceries/ToFridgeModal'
import useApiRequest from '../hooks/useApiRequest'

export default function GroceryDashboard() {

  const { response, error, loading, doRequest } = useApiRequest('userGroceries')
  const [listItem, setListItem] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const moveListItem = async (data) => {
    console.log(listItem)
    console.log(data)

  }

  const openModal = (item) => {
    console.log(item)
    setListItem(item)
    setShowModal(true)
  }
  const closeModal = () => {
    setListItem(null)
    setShowModal(false)
  }

  useEffect(() => {
    doRequest()
  }, [doRequest])
  
  return (

    <div className="row">
      <ToFridgeModal onSubmit={moveListItem} show={showModal} close={closeModal}/>
      <ReqLayout error={error} loading={loading}>
        {response && (
        <>
          <div className="col-sm-12 mb-5 mt-3">
            <GroceryListDisplay addToFridge={openModal} items={response.data['listItems']} />
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
