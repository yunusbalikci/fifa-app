import Header from "components/Header";
import Home from "pages/Home";
import { Route,Routes, BrowserRouter } from "react-router-dom";
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
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api-auth/user/', {
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
        });

        if (response.ok) {
          const content = await response.json();
          setName(content.name);
        } else {
          // Hata durumu için gerekli işlemleri burada yapabilirsiniz.
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home/>} />
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
    </>
  );
}

export default App;
