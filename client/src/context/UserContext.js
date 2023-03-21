import React, { useContext, useState } from "react"

const UserContext = React.createContext()


export function useAuth() { //custom hook to get user context value data
  return useContext(UserContext)
}

// get session storage helper
const getSessionStorage = (key, initialValue) => {
    try {
      const value = window.sessionStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      // if error, return initial value
      return initialValue;
    }
}

// set session storage helper
function setSessionStorage(key, value) {
    if(typeof value === "object")
        value = JSON.stringify(value);
    
    try {
      window.sessionStorage.setItem(key, value);
    } catch (e) {
      console.log(e)
    }
  }

export function UserProvider({ children }) {
  // current user data state
  const [currentUser, setCurrentUser] = useState(getSessionStorage('session', null))

  const login = (session) => { //Login user based on session, cache user data in session storage

    setSessionStorage('session', session)
    setCurrentUser(session)
    
  }

  const logout = () => { //Logout user by clearing session storage and setting user back to null
    sessionStorage.clear()
    setCurrentUser(null)
  }
  
  const value = { // context data to be passed to further components
    currentUser,
    login,
    logout
  }


  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
