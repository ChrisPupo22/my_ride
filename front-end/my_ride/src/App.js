import React, { useState, useCallback } from 'react'; 
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; 
import MainNavigation from './shared/components/Navigation/MainNavigation'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userId, setUserId] = useState(false); 
  
  const login = useCallback(uid => {
    setIsLoggedIn(true); 
    setUserId(uid); 
  }); 

  const logout = useCallback(() => {
    setIsLoggedIn(false); 
    setUserId(null); 
  }); 


  let routes; 

  //different route options for signed in user vs. non-signed in user
  if (isLoggedIn) {
    routes = (
      <Switch>
      </Switch>
    ); 
  } else {
    routes = (
      <Switch>
        <Route path="/">
          {/* <UserPage /> */}
        </Route>
      </Switch>
    )
  }

  return (
    <Router>
      <MainNavigation />
      <main>{routes}</main>
    </Router>
  ); 
}; 

export default App; 
