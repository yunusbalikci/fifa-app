import React, { useEffect, useState } from 'react';
import UserHeader from 'components/UserHeader';

const Statistics = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [realmadridPlayers, setRealMadridPlayers] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const apiUrl = 'http://127.0.0.1:8000/api/players/';


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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const allPlayersData = await response.json();

        setAllPlayers(allPlayersData);
      } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Real Madrid oyuncularını seçilen pozisyona göre filtrele
    const filteredPlayers = allPlayers.filter(
      (player) => player.club === 'Real Madrid' && player.player_positions === selectedPosition
    );
    setRealMadridPlayers(filteredPlayers);
  }, [selectedPosition, allPlayers]);

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value);
    setSelectedPlayer(null);
  };

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className='flex bg-zinc-50'>
      <UserHeader />
      <div className='ml-3 mt-5'>
        <select
          id="countries"
          className="bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handlePositionChange}
        >
          <option value="">Choose a position</option>
          <option value="GK">GK</option>
          <option value="CB">CB</option>
          <option value="CM">CM</option>
          <option value="CDM">CDM</option>
          <option value="RW">RW</option>
          <option value="RB">RB</option>
          <option value="LW">LW</option>
          <option value="ST">ST</option>
          <option value="CF, ST">CF</option>
        </select>
        {realmadridPlayers ? (
          <div className='grid grid-cols-2 grid-rows-1 gap-3'>
            <div className='flex flex-nowrap'>
              <ul className='flex flex-wrap space-x-8 space-y-4 '>
                {realmadridPlayers.map((player) => (
                  <li key={player.sofifa_id} onClick={() => handlePlayerClick(player)} className='mt-4 ml-7'>
                    <div className='bg-gray-50 mt-1 ml-3 w-44 h-auto  border-blue-200 border-2 rounded-lg shadow-md cursor-pointer'>
                      <p className='text-2xl font-open  text-center p-2 font-bold'>{player.short_name}</p>
                      <h3 className='text-xl font-open text-right mr-3'>{player.age}</h3>
                      <img className='rounded-lg' src="https://b.fssta.com/uploads/application/soccer/headshots/884.png" alt="" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='item-center ml-28 mx-auto justify-center mt-5 flex'>
               {selectedPlayer && (
                <div className='w-full'>
                  <table className="table-auto bg-white w-96 h-full rounded-md shadow-md uppercase font-open border text-xl mt-3">
                        <thead>
                            <tr>
                                <th className="pt-2">abilities</th>
                                <th className="pt-2">overall</th>
                            </tr>
                        </thead>
                        <tbody className="border">
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
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;
