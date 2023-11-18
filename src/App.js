import Header from "components/Header";
import Home from "pages/Home";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import About from "pages/About";
import OurStory from "pages/OurStory";
import Pricing from "pages/Pricing";
import GetStarted from "pages/GetStarted";
import Footer from "components/Footer";

function App() {
  return (
    <>
    <nav>
      <Header></Header>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/ourstory" element={<OurStory/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/getstarted" element={<GetStarted/>}></Route>
    </Routes>
    <Footer>
      <Footer></Footer>
    </Footer>

    
    </>
  );
}

export default App;
