import Index from "./pages/Index.jsx";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import PageSearch from "./pages/PageSearch.jsx";
import Details from "./pages/Details.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
        <Routes>
          <Route path= "/" element={<Index />}/>
          <Route path= "/pagesearch" element={<PageSearch />}/>
          <Route path= "/details/:id" element={<Details />}/>
          <Route path= "/login" element={<Login />}/>
          <Route path= "/register" element={<Register />}/>
          
        </Routes>
    </div>
  );
}

export default App;
