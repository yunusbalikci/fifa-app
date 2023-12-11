import React from "react"
import UserHeader from "components/UserHeader"
import Radar from "images/radar.png"
export default function Dashboard(){
    return(
        <div className="bg-fifa-gray">
            <div className="flex">
            <UserHeader></UserHeader>
            <div className="grid grid-cols-2 w-full gap-4  bg-fifa-bg gap-4 font-open text-black py-5 pl-3 font-bold text-2xl">
                <div>
                    <h1>Prediction Player Performance -Player Name-</h1>
                    <div className="flex item-center mx-auto justify-center">
                        <img className="flex item-center mt-10 ml-3 mb-5 w-96 h-96" src="https://pngimg.com/d/football_player_PNG134.png"></img>
                    </div>
                    <div className="box-border ml-5 mr-5 mt-1 rounded my-auto shadow-lg h-52 w-auto p-4 bg-white hover:bg-gray-100 transition duration-200">
                        <h1 className="text-center text-lg">View Predictions</h1>
                        <img className="w-80  mx-auto" src={Radar}></img>
                    </div>
                </div>
                <div className="ml-1 mr-3">
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
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">90</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">90</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">90</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">90</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">90</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">90</td>
                            </tr>
                            <tr>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">add</td>
                                <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">90</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="w-full bg-white rounded-md shadow-md mt-3">
                        <h1 className="text-center">ABILITIES GROWTH</h1>
                        <img src="https://miro.medium.com/v2/resize:fit:1942/1*le8ngJPQRImQiPL9gQR-WQ.png"></img>

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}