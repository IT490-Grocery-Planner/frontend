import AuthForm from "./components/auth/AuthForm";
import Logout from "./components/auth/Logout";
import GroceryDashboard from "./pages/GroceryDashboard"
import RecipeLookup from "./pages/RecipeLookup";
import SavedRecipes from "./pages/SavedRecipes"
import RecipeSpotlight from "./pages/RecipeSpotlight";
import RecipeShare from "./pages/RecipeShare"
import GroceryAdd from "./pages/GroceryAdd";

import { HashRouter as Router, Routes, Route } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout";

function App() {
  return (
    <div className="App">

      <Router>
      
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
              <Route exact path="/recipe-share" element={<RecipeShare />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route exact path="/recipe-spotlight" element={<RecipeSpotlight />} />
            </Route>
         
      
            
            {/*Authentication */}
            <Route exact path="/auth" element={<AuthForm />} />
            <Route exact path="/logout" element={<Logout />} />

          </Routes>
      </Router>

    </div>
  );
}

export default App;
