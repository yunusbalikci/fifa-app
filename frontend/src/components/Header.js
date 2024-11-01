import React from "react";
import LoginModal from "./LoginModal";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({name}) {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [loggedInName, setLoggedInName] = useState(name);

    const handleLoginClick = () => {
        setLoginModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setLoginModalOpen(false);
      };
  
    const Logout = async () => {
      await fetch('http://127.0.0.1:8000/api-auth/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });
  
      console.log("logged out");
      setLoggedInName(''); // Çıkış yapıldığında ismi sıfırla
    };

    let menu;
    
    if(loggedInName === ''){
      menu = (
        <header class="bg-fifa-blue py-3 lg:py-5 text-fifa-gray font-open uppercase">
          <div class="container flex items-center justify-between space-x-8 lg:space-x-16">
            <Link to="/" class="pl-4 md:pl-0 text-3xl lg:text-6xl font-bold text-fifa-gray text-transparent bg-gradient-to-r bg-clip-text from-slate-500 to-white">FCMS</Link>
            <div class="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
              <p>{loggedInName}</p>
              <a href="javascript:;" class="hover:text-white transistion duration-300" onClick={Logout}>Logout</a>
            </div>
          </div>
        </header>
      );
  
        
        
    } else {
      menu = (
        <header class="bg-fifa-blue py-3 lg:py-5 text-fifa-gray font-open uppercase">
        <nav class="container hidden md:flex justify-between flex-1">
                <div class="flex items-center text-sm lg:text-lg space-x-4 lg:space-x-8">
                    <Link to="/" class="pl-4 md:pl-0 text-3xl lg:text-6xl font-bold text-fifa-gray text-transparent bg-gradient-to-r bg-clip-text from-slate-500 to-white">FCMS</Link>
                    <Link to="/about" class="hover:text-white transition duration-300">About</Link>
                    <Link to="/ourstory" class="hover:text-white transition duration-300 whitespace-nowrap">Our Story</Link>
                    <Link to="/pricing" class="hover:text-white transition duration-300">Pricing</Link>
                    <Link to="/getstarted" class="hover:text-white transition duration-300 whitespace-nowrap">Get Started</Link>
                </div>
                <div class="flex items-center space-x-4  lg:space-x-8">
                    <form >
                        <div class="gruop border-r px-4 mx-4 py-1 border-fifa-gray">
                            <input type="text" class="opacity-0 group-hover:opacity-100 bg-transparent border-b border-fifa-gray focus:outline-none w-24 lg:w-44 transition duration-300"></input>
                        </div>
                    </form>
                    <div class="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
                        <p>{name}</p>
                        <a href="javascript:;" onClick={handleLoginClick} class="hover:text-white transistion duration-300">Login</a>
                        <Link to="/register" class="bg-fifa-gray px-3 py-1 hover:bg-gray-300 text-fifa-blue hover:text-fifa-blue cursor-pointer transition duration-300 rounded whitespace-nowrap">Sign Up</Link>
                    </div>
                </div>
            </nav>
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />

            </header>

    )
       
        return <>{menu}</>;
      }

 
 
    return (
        <div className="">
            <header class="bg-fifa-blue py-3 lg:py-5 text-fifa-gray font-open uppercase">
                <div class="container flex items-center justify-between space-x-8 lg:space-x-16">
                    <Link to="/" class="pl-4 md:pl-0 text-3xl lg:text-6xl font-bold text-fifa-gray text-transparent bg-gradient-to-r bg-clip-text from-slate-500 to-white">FCMS</Link>
                
                    <div class="block md:hidden pr-4">
                        <div class="space-y-1 cursor-pointer">
                        <div class="bg-fifa-gray w-8 h-1 rounded-full"></div>
                        <div class="bg-fifa-gray w-8 h-1 rounded-full"></div>
                        <div class="bg-fifa-gray w-8 h-1 rounded-full"></div>
                    </div>
                </div>
                
                {menu}
            </div>    
            </header>
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default Header;
