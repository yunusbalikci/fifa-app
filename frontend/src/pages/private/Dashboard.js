import React from "react"
import UserHeader from "components/UserHeader"
import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
      subject: 'Shooting',
      A: 120,
      B: 110,
      fullMark: 90,
    },
    {
      subject: 'Mental',
      A: 98,
      B: 130,
      fullMark: 91,
    },
    {
      subject: 'Passing',
      A: 86,
      B: 130,
      fullMark: 76,
    },
    {
      subject: 'Ball Skills',
      A: 99,
      B: 100,
      fullMark: 85,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Vision',
      A: 65,
      B: 85,
      fullMark: 83,
    },
  ];

  


export default function Dashboard(){

    const getBackgroundColor = ({ value }) => {
        if (value < 65){
            return "bg-red-500"
        } else if (value < 75){
            return "bg-orange-500"
        }
        else{
            return "bg-green-500"
        }
        }
    

    return(
        <motion.div
        initial = {{ opacity: 0,}}
        animate = {{ opacity:1}}

        className="bg-zinc-100">
            <div className="flex">
            <UserHeader>
            </UserHeader>
            <div className="grid grid-cols-2 w-full gap-4  bg-zinc-100 gap-4 font-open text-black py-5 pl-3  text-2xl">
                <div>
                    <input placeholder="Search..." className="w-full mb-3 text-xl pl-1 ml-1 font-open border border-gray-300 rounded-lg"></input>
                    <h1>Prediction Player Performance -Player Name-</h1>
                    <div className="flex item-center mx-auto justify-center">
                        <img className="flex item-center mt-10 ml-3 mb-5 w-80 h-80" src="https://pngimg.com/d/football_player_PNG134.png"></img>
                    </div>
                    <div className="box-border ml-5 mr-5 mt-1 rounded my-auto shadow-lg h-96 w-auto p-4 bg-white hover:bg-gray-100 transition duration-200">
                        <h1 className="text-center text-lg">View Predictions</h1>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>                    
      </div>
                </div>
                <div className="ml-1 mr-3">
                    <div className="flex item-end mx-auto justify-end space-x-4 ">
                        <img className="h-8 w-8 rounded-full mt-1 items-end justify-end cursor-pointer hover:bg-fifa-gray duration-300" src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"></img>
                        <img className="h-8 w-8 rounded-full mt-1 items-end justify-end cursor-pointer hover:bg-fifa-gray duration-300" src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"></img>
                        <div className="flex space-x-2 hover:bg-fifa-gray duration-300 rounded-md">
                           <img src="https://img.a.transfermarkt.technology/portrait/big/118-1682605652.jpg?lm=1" className="h-10 w-10 rounded-full"></img> 
                           <p className="mt-1 text-lg">Klopp</p>
                        </div>
                        <img className="h-8 w-8 rounded-full items-end mt-1 justify-end cursor-pointer hover:bg-fifa-gray duration-300" src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"></img>

                    </div>
                    <h1 className="text-center">Administration</h1>
                    <table className="table-auto bg-white w-full h-auto rounded-md shadow-md uppercase font-open border text-xl mt-3">
                        <thead>
                            <tr>
                                <th className="pt-2">abilities</th>
                                <th className="pt-2">overall</th>
                            </tr>
                        </thead>
                        <tbody className="border">
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className={`pl-2  duration-200 rounded-md ${getBackgroundColor({ value: 65 })}`}>{65}</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className={`pl-2  duration-200 rounded-md ${getBackgroundColor({ value: 85 })}`}>{85}</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className={`pl-2  hover:opacity-70 duration-200 rounded-md ${getBackgroundColor({ value: 80 })}`}>{80}</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className={`pl-2  duration-200 rounded-md ${getBackgroundColor({ value: 60 })}`}>{60}</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className={`pl-2  duration-200 rounded-md ${getBackgroundColor({ value: 65 })}`}>{65}</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className={`pl-2  duration-200 rounded-md ${getBackgroundColor({ value: 90 })}`}>{90}</td>
                            </tr>
                          
                        </tbody>
                    </table>
                    <div className="w-full bg-white rounded-md shadow-md mt-10">
                        <h1 className="text-center">ABILITIES GROWTH</h1>
                        <img src="https://miro.medium.com/v2/resize:fit:1942/1*le8ngJPQRImQiPL9gQR-WQ.png"></img>

                    </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
}
