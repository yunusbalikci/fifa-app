import React from "react"
import UserHeader from "components/UserHeader"
import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import LiveSearch from "components/LiveSearch";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';





export default function Dashboard(){
    const [jsonResults, setJsonResults] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/players/')
            .then((response) => response.json())
            .then((json) => setJsonResults(json))
            .catch((error) => {
                console.error('Error fetching players:', error);
            });
    }, []);

    const apiUrl = 'http://127.0.0.1:8000/api/players/';


    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // API'den verileri çekmek için bir fonksiyon çağırın
        fetchPlayers();
      }, []); // Component ilk render edildiğinde çalışacak
    
      const fetchPlayers = async () => {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setPlayers(data);
        } catch (error) {
          console.error('Error fetching players:', error);
        }
      };
      const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
      const handlePlayerClick = (player) => {
        setSelectedPlayer(player);
      };
       const handlePlayerChange = (event, value) => {
        setSelectedPlayer(value);
    };


    
const data = [
  {
    subject: 'Shooting',
    fullMark: selectedPlayer?.shooting,
  },
  {
    subject: 'Pace',
  
    fullMark: selectedPlayer?.pace,
  },
  {
    subject: 'Defending',

    fullMark: selectedPlayer?.defending_marking,
  },
  {
    subject: 'Passing',
  
    fullMark: selectedPlayer?.passing,
  },
  {
    subject: 'Ball Control',

    fullMark: selectedPlayer?.skill_ball_control,
  },
  {
    subject: 'Physics',
    fullMark: selectedPlayer?.physic,
  },
  {
    subject: 'Vision',
    fullMark: selectedPlayer?.mentality_vision,
  },
];
    
    

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
                <Stack sx={{ width: 500, margin: "auto" }}>
                <Autocomplete
                    id="player_demo"
                    getOptionLabel={(option) => option.short_name}
                    options={jsonResults}
                    sx={{ width: 300 }}
                    isOptionEqualToValue={(option, value) =>
                        option.short_name === value.short_name
                    }
                    noOptionsText="No players found"
                    renderOption={(props, option) => (
                        <Box component="li" {...props} key={option.id}>
                            {option.short_name}
                        </Box>
                    )}
                    renderInput={(params) => <TextField {...params} label="Search player" />}
                    onChange={handlePlayerChange}
                />
                
                </Stack>

                    <h1 className="text-center text-3xl mt-5" >{selectedPlayer?.short_name}</h1>
                    <div className="flex item-center mx-auto justify-center">
                    {selectedPlayer && (
                        
                      <div className='w-full ml-10 '>
                      <table className="table-auto bg-white w-128 ml-5 h-full rounded-md shadow-md uppercase font-open border text-xl mt-5">
                            <thead>
                                <tr>
                                    <th className="pt-2">abilities</th>
                                    <th className="pt-2">overall</th>
                                </tr>
                            </thead>
                            <tbody className="border ">
                                <tr>
                                    <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">Pace</td>
                                    <td className={`pl-2 duration-200 rounded-md ${selectedPlayer.pace > 75 ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
                                      {selectedPlayer.pace}</td>
                                </tr>
                                <tr>
                                    <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">Mentality</td>
                                    <td className={`pl-2 duration-200 rounded-md ${selectedPlayer.mentality_aggression > 75 ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
                                      {selectedPlayer.mentality_aggression}</td>
                                </tr>
                                <tr>
                                    <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">Jumping</td>
                                    <td className={`pl-2 duration-200 rounded-md ${selectedPlayer.power_jumping > 75 ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
                                      {selectedPlayer.power_jumping}</td>
                                </tr>
                                <tr>
                                    <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">Shooting</td>
                                    <td className={`pl-2 duration-200 rounded-md ${selectedPlayer.shooting > 75 ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
                                      {selectedPlayer.shooting}</td>
                                </tr>
                                <tr>
                                    <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">Passing</td>
                                    <td className={`pl-2 duration-200 rounded-md ${selectedPlayer.passing > 75 ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
                                      {selectedPlayer.passing}</td>
                                </tr>
                                <tr>
                                    <td className="pl-2 hover:bg-gray-100 duration-200 rounded-md">Defending</td>
                                    <td className={`pl-2 duration-200 rounded-md ${selectedPlayer.defending > 75 ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
                                      {selectedPlayer.defending}</td>
                                </tr>
                              
                            </tbody>
                        </table>
                      </div>
                      )}
                    </div>
                    <div className="box-border ml-5 mr-5 mt-10 rounded my-auto shadow-lg h-64 w-auto p-4 bg-white hover:bg-gray-100 transition duration-200">
                        <h1 className="text-center text-lg">View Predictions</h1>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar name={selectedPlayer?.short_name} dataKey="fullMark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
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
                    

                    <h1 className="text-center">Players Details</h1>
                    <div className="w-full bg-white rounded-md shadow-md uppercase font-open border text-xl">
                      <div className="flex">
                        <div className="h-80">
                          <img src="https://sortitoutsidospaces.b-cdn.net/megapacks/cutoutfaces/originals/10.12/7458272.png" className=" mt-5 overflow-hidden h-36 w-48" alt="" />
                          <h1 className="text-center mt-1" >{selectedPlayer?.short_name}</h1>
                          <h2 className="text-center mt-1 text-red-500">-{selectedPlayer?.overall}-</h2>
                          <h3 className="text-center mt-1">{selectedPlayer?.age}y.o</h3>
                        </div>
                        <div className="w-full grid grid-cols-2  grid-rows-1 gap-4">
                          <ul className="list-none">
                            <li className="flex space-y-2 text-lg flex-wrap mb-4">
                              <h1 className="whitespace-nowrap mt-2">Skill Moves</h1> 
                              <img src="https://i.pinimg.com/originals/e8/91/66/e891669c27c833ff0f2db2c083344117.png" className="ml-10 w-6 h-6 " alt="" /> 
                              <p className=" ml-1">{selectedPlayer?.skill_moves}</p>  
                            </li>
                            <li className="flex space-y-2 border-t-fifa-blue border-t-2 text-lg flex-wrap mb-4">
                              <h1 className="whitespace-nowrap mt-2">Pace Moves</h1> 
                              <img src="https://i.pinimg.com/originals/e8/91/66/e891669c27c833ff0f2db2c083344117.png" className="ml-10 w-6 h-6" alt="" /> 
                              <p className=" ml-1">{selectedPlayer?.skill_moves}</p>  
                            </li>
                            <li className="flex space-y-2 border-t-fifa-blue border-t-2 text-lg flex-wrap mb-4">
                              <h1 className="whitespace-nowrap mt-2">Position</h1> 
                              <p className="ml-12 whitespace-nowrap">{selectedPlayer?.player_positions}</p>
                            </li>
                            <li className="flex space-y-2 border-t-fifa-blue border-t-2 text-lg flex-wrap mb-4">
                              <h1 className="whitespace-nowrap mt-2">Foot</h1> 
                              <p className="ml-24">{selectedPlayer?.preferred_foot}</p>
                            </li>
                            <li className="flex space-y-2 border-t-fifa-blue border-t-2 text-lg flex-wrap mb-4">
                              <h1 className="whitespace-nowrap mt-2">Nationality</h1> 
                              <p className="ml-4">{selectedPlayer?.nationality}</p>
                            </li>
                          </ul>

                          <ul className="list-none">
                            <li className="flex space-y-2 text-lg flex-wrap mb-4">
                            <h1 className="whitespace-nowrap mt-2">Body</h1> 
                              <p className="ml-16 ">{selectedPlayer?.body_type}</p>
                            </li>
                            <li className="flex space-y-2 border-t-fifa-blue border-t-2 text-lg flex-wrap mb-4">
                            <h1 className="whitespace-nowrap mt-2">potential</h1> 
                              <p className="ml-12 ">{selectedPlayer?.potential}</p>  
                            </li>
                            <li className="flex space-y-2 border-t-fifa-blue border-t-2 text-lg flex-wrap mb-4">
                              <h1 className="whitespace-nowrap mt-2">dribbling</h1> 
                              <p className="ml-12 ">{selectedPlayer?.dribbling}</p>
                            </li>
                            <li className="flex space-y-2 border-t-fifa-blue border-t-2 text-lg flex-wrap mb-4">
                              <h1 className="whitespace-nowrap mt-2">physic</h1> 
                              <p className="ml-20">{selectedPlayer?.physic}</p>
                            </li>
                            <li className="flex space-y-2 border-t-fifa-blue border-t-2 text-lg flex-wrap mb-4">
                              <h1 className="whitespace-nowrap mt-2">Mentaliy</h1> 
                              <p className="ml-16">{selectedPlayer?.mentality_aggression}</p>
                            </li>
                          </ul>
                        </div>

                        </div>
                    <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
    )
}
