import React, {useEffect, useState} from 'react'
import axios from "axios"
import GroceryListDisplay from '../components/groceries/GroceryListDisplay'
import FridgeDisplay from '../components/groceries/FridgeDisplay'

export default function GroceryDashboard() {
  const [fridge, setFridge] = useState([])
  const [list, setList] = useState([])
  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const session = JSON.parse(sessionStorage.getItem("session"));
        const res = await axios.post("/api/index.php", {
          "type": "userGroceries",
          "sessionID": session["sessionID"]
        });
        console.log(res)
        
        setFridge(res.data['groceries'])

        setList(res.data['listItems'])

      } catch (err) {
        console.log(err)
      }

    }

    fetchGroceries()
  }, [])

  return (
    
    <div className="row">
      <div className="col-sm-12 mb-5 mt-3">
        <GroceryListDisplay items={list} />
      </div>
      <div className="col-sm-12">
        <FridgeDisplay items={fridge} />
      </div>
    </div>

  )
}
