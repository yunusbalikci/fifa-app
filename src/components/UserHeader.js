import React from "react"
import { useState } from "react";
import control from "../images/control.png"
import football from "../images/football.png"


export default function UserHeader(){
    const [open,setOpen] = useState(true)
    const Menus = [
        {title: "Dashboard", src:"https://cdn-icons-png.flaticon.com/512/187/187474.png"},
        {title: "Administration", src:"https://cdn-icons-png.flaticon.com/512/2082/2082875.png"},
        {title: "Team Staff", src:"https://cdn-icons-png.flaticon.com/512/236/236811.png"},
        {title: "Competitions", src:"https://cdn-icons-png.flaticon.com/512/4012/4012470.png", gap : true},
        {title: "Health", src:"https://brisdoc.co.uk/wp-content/uploads/2020/12/Health-Icon-1.svg"},
        {title: "Shedule", src:"https://cdn-icons-png.flaticon.com/512/3652/3652191.png"},
        {title: "Training", src:"https://cdn-icons-png.flaticon.com/512/861/861534.png", gap : true},
        {title: "Statistics", src:"https://cdn-icons-png.flaticon.com/512/1011/1011579.png"},

    ]
    return(
        <div className="flex">
            <div className={`${open ? "w-72" : "w-24 "} duration-300 h-screen p-5 pt-8 bg-fifa-blue relative`}>
                <img src={control} alt="" className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-fifa-gray ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}></img>
                <div className="flex gap-x-4 items-center">
                    <img className={`cursor-pointer duration-500 w-16 h-16 ${open && "rotate-[360deg]"}`} src={football}></img>
                    <h1 className={`font-open text-white origin-left text-xl ${!open && "hidden"} duration-300 `}>FCMS</h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((menu, index) => (
                        <li className={`text-gray-300 mt-3 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 duration-200 rounded-md ${menu.gap ? "mt-9" : "mt-2"} `} key={index}>
                            <img src={menu.src} className="w-8 h-8" />

                            <span className={`${!open && "hidden"} origin-left text-xl duration-200`}>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>

            
        </div>
    )
}