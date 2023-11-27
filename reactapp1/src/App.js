import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import SignIn from "./pages/Signin";
import RegistrationPage from "./pages/RegistrationPage";
import Home from "./pages/Home";


function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;