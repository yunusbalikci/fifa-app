import Header from "components/Header";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "pages/About";
import OurStory from "pages/OurStory";
import Pricing from "pages/Pricing";
import GetStarted from "pages/GetStarted";
import Footer from "components/Footer";
import Login from "pages/Login";
import Register from "pages/Register";
import User from "pages/private/User"
import Dashboard from "pages/private/Dashboard";
import Statistics from "pages/private/Statistics";

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/ourstory" element={<OurStory/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/getstarted" element={<GetStarted/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/user" element={<User></User>}></Route>
      <Route path="/statistics" element={<Statistics></Statistics>}></Route>
    </Routes>
    <Footer>
      <Footer></Footer>
    </Footer>

    
    </>
  );
}

export default App;
