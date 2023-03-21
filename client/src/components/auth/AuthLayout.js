import { useState, useEffect } from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import AppNavbar from "../commons/AppNavbar"
import axios from "axios"
import { useAuth } from "../../context/UserContext"
export default function AuthLayout() {

  const [valid, setValid] = useState(null)
  const {currentUser} = useAuth()
  const location = useLocation();

  useEffect(() => {
    const validateSession = async () => {
      if (currentUser !== null) {
        console.log("session", currentUser)
        try {
          const res = await axios.post('/api/authenticate.php', { "type": 'validateSession', "sessionID": currentUser["sessionID"] })
          const { data } = res

          console.log("validate_session_res", res)

          if (data.valid === 1) {
            setValid(true)
            return
          }
        } catch (err) {
          console.log(err)
        }
      }

      setValid(false)
    }

    validateSession()
  }, [location, currentUser])

  if (valid === null) return null;

  return valid && currentUser ? (
    <>
      <AppNavbar />
      <div class='container mt-5'>
        <Outlet />
      </div>
    </>
  ) : <Navigate to={"/auth"} replace />

}
