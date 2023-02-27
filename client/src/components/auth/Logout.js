import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const history = useNavigate()

  useEffect(() => {
    sessionStorage.clear()
    history('/auth')
  }, [history])
  

  return <div></div>
}
