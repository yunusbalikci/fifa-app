// LoginModal.js
import React from "react";
import loginImage1 from "../images/loginimage1.png"
import loginImage2 from "../images/coach.png"
import loginImage3 from "../images/footballer.webp"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center"
      initial = {{ opacity: 0,}}
      animate = {{ opacity:1}}
    >
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-8 rounded shadow-lg z-50"> 

          <div className="container w-max h-max flex px-3 space-x-16 font-bold text-center">
          <Link to="/login" className="block">
              <div className="border p-4 border-gray rounded cursor-pointer" onClick={onClose}>
                <div className="flex flex-col items-center">
                <img className="flex w-36  items-center mx-auto mt-3" alt="loginimage" src={loginImage1}></img>             
                <Link to="/login" className="text-center text-xl mt-5 uppercase">medicine</Link>
                </div>            
              </div>  
          </Link>

          <Link to="/login" className="block">
            <div className="border p-4 border-gray rounded cursor-pointer" onClick={onClose}>
              <div className="flex flex-col items-center">
              <img className="flex w-36  items-center mx-auto mt-3" alt="loginimage" src={loginImage2}></img>             
              <Link to="/login" className="text-center text-xl mt-5 uppercase">coach</Link>
              </div>            
            </div>  
          </Link>

         <Link to="/login" className="block">
            <div className="border p-4 border-gray rounded cursor-pointer" onClick={onClose}>
              <div className="flex flex-col items-center">
              <img className="flex w-36  items-center mx-auto mt-3" alt="loginimage" src={loginImage3}></img>             
              <Link to="/login" className="text-center text-xl mt-5 uppercase">footballer</Link>
              </div>            
            </div>  
          </Link>


        <i onClick={onClose} class="fa-solid fa-x cursor-pointer"></i>
      </div>
      </div>
    </motion.div>
  );
}

export default LoginModal;
