import React, {useEffect, useState} from 'react'
import ReqLayout from '../components/commons/ReqLayout'
import GroceryListDisplay from '../components/groceries/GroceryListDisplay'
import FridgeDisplay from '../components/groceries/FridgeDisplay'
import ToFridgeModal from '../components/groceries/ToFridgeModal'
import useApiRequest from '../hooks/useApiRequest'

export default function GroceryDashboard() {
  
  const [listItem, setListItem] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const getUserGroceries = useApiRequest('userGroceries')
  const listToFridge = useApiRequest('listToFridge')

  //move items from shopping list to fridge
  const moveListItem = async (data) => { 
    const grocery = {...data, ...listItem}
    await listToFridge.doRequest({'grocery': grocery})
    closeModal()
  }

  // Open modal to move item from list to fridge
  const openModal = (item) => {
    console.log(item)
    setListItem(item)
    setShowModal(true)
  }

  // Close modal to move item from list to fridge
  const closeModal = () => {
    setListItem(null)
    setShowModal(false)
  }

  // Gets groceru items as soon as page loads
  useEffect(() => {
    getUserGroceries.doRequest()
  }, [getUserGroceries.doRequest, listToFridge.response])
  
  return (

    <div className="row">
      <ToFridgeModal onSubmit={moveListItem} show={showModal} close={closeModal}/>
      <ReqLayout error={getUserGroceries.error} loading={getUserGroceries.loading}>
        {getUserGroceries.response && (
        <>
          <div className="col-sm-12 mb-5 mt-3">
            <GroceryListDisplay addToFridge={openModal} 
            items={getUserGroceries.response.data['listItems']} />
          </div>
          <div className="col-sm-12">
            <FridgeDisplay items={getUserGroceries.response.data['groceries']} />
          </div>
        </>
        )}
    
      </ReqLayout>
    </div>

  )
}
