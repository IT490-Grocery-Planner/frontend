import AuthForm from "./components/auth/AuthForm";
import Logout from "./components/auth/Logout";
import GroceryDashboard from "./pages/GroceryDashboard"
import RecipeLookup from "./pages/RecipeLookup";
import SavedRecipes from "./pages/SavedRecipes"
import RecipeSpotlight from "./pages/RecipeSpotlight";
import UserRecipes from "./pages/UserRecipes";
import GroceryAdd from "./pages/GroceryAdd";

import { UserProvider } from "./context/UserContext";
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout";

function App() {
  return (
    <div className="App">

      <Router>
      <UserProvider>
          <Routes>
            {/*User Pages */}
            <Route element={<AuthLayout />}>
              <Route exact path="/" element={<GroceryDashboard />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route exact path="/grocery-add" element={<GroceryAdd />} />
            </Route>
  
            <Route element={<AuthLayout />}>
              <Route exact path="/recipe-lookup" element={<RecipeLookup />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route exact path="/saved-recipes" element={<SavedRecipes />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route exact path="/my-recipes" element={<UserRecipes />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route exact path="/recipe-spotlight" element={<RecipeSpotlight />} />
            </Route>
         
      
            
            {/*Authentication */}
            <Route exact path="/auth" element={<AuthForm />} />
            <Route exact path="/logout" element={<Logout />} />

          </Routes>

          </UserProvider>
      </Router>

    </div>
  );
}

export default App;
