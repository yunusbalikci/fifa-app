// LoginModal.js
import React from "react";
import loginImage1 from "../images/loginimage1.png"
import loginImage2 from "../images/coach.png"
import loginImage3 from "../images/footballer.webp"
function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-8 rounded shadow-lg z-50">               
          <div className="container w-max h-max flex px-3 space-x-16 font-bold">
            <div className="border p-4 border-gray rounded cursor-pointer">
              <img className="flex w-36  items-center mx-auto mt-3" alt="loginimage" src={loginImage1}></img>
              <h2 className="text-center text-xl  mt-3">Medicine</h2>
            </div>  
            <div className="border p-4 border-gray rounded cursor-pointer">
              <img className="flex w-36 items-center mx-auto mt-3" alt="loginimage" src={loginImage2}></img>
              <h2 className="text-center text-xl mt-3">Coach</h2>
            </div> 
            <div className="border p-4 border-gray rounded cursor-pointer">
              <img className="flex w-36 items-center mx-auto mt-3" alt="loginimage" src={loginImage3}></img>
              <h2 className="text-center text-xl mt-3">Footballer</h2>
            </div> 
        <i onClick={onClose} class="fa-solid fa-x cursor-pointer"></i>
      </div>
      </div>
    </div>
  );
}

export default LoginModal;
