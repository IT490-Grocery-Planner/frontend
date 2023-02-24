import AuthForm from "./components/auth/AuthForm";
import GroceryList from "./pages/GroceryList"
import Logout from "./components/auth/Logout";
import MyFridge from "./pages/MyFridge"
import RecipeLookup from "./pages/RecipeLookup";
import RecipeRating from "./pages/RecipeRating"
import RecipeSpotlight from "./pages/RecipeSpotlight";
import RecipeShare from "./pages/RecipeShare"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout";

function App() {
  return (
    <div className="App">

      <Router>
      
          <Routes>
            {/*User Pages */}
            <Route element={<AuthLayout />}>
              <Route exact path="/" element={<MyFridge />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route exact path="/grocery-list" element={<GroceryList />} />
            </Route>
  
            <Route element={<AuthLayout />}>
              <Route exact path="/recipe-lookup" element={<RecipeLookup />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route exact path="/recipe-rating" element={<RecipeRating />} />
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
