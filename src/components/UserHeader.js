import React from "react"
import { Link } from "react-router-dom";
import { useState } from "react";
import control from "../images/control.png"
import football from "../images/football.png"
import Dashboard from "pages/private/Dashboard";
import admin from 'images/admin.png'
import team from 'images/team.png'
import shedule from 'images/schedule.png'
import statics from 'images/statistic.png'
import health from 'images/health.png'
import training from 'images/training.png'
import competitions from 'images/competitions.png'

export default function UserHeader(){
    const [open,setOpen] = useState(true)
    const Menus = [
        {title: "Dashboard", src:{Dashboard}},
        {title: "Administration", src:{admin}},
        {title: "Team Staff", src:{team}},
        {title: "Competitions", src:{competitions}},
        {title: "Health", src:{health}},
        {title: "Shedule", src:{shedule}},
        {title: "Training", src:{training}},
        {title: "Statistics", src:{statics}},

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
                        <li className="text-gray-300 mt-3 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 duration-200 rounded-md" key={index}>
                            <img src={menu.src} className="w-6 h-6" />

                            <span className={`${!open && "hidden"} origin-left text-xl duration-200`}>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}