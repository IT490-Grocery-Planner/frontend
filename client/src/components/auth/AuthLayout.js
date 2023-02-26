import {useState, useEffect } from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import AppNavbar from "../commons/AppNavbar"
import axios from "axios"
export default function AuthLayout() {

  const [valid, setValid] = useState(null)
  const location = useLocation();
  
  useEffect(() => {
    const validateSession = async () => {
      const session = JSON.parse(sessionStorage.getItem("session"));
      if (session) {
        console.log("session", session)
        const res = await axios.post('/api/authenticate.php', { "type": 'validateSession', "sessionID": session["sessionID"] })
        const {data} = res
       
        console.log("validate_session_res", res)

        if (data.valid === 1) {
          setValid(true)
          return
        }   
      } 

      setValid(false)
    }

    validateSession()
  }, [])

  if (valid === null) return null;

  return valid ? (
    <>
      <AppNavbar />
      <div class='container mt-5'>
        <Outlet />
      </div>
    </>
  ) : <Navigate to="/logout" replace state={{ from: location }} />;

}
