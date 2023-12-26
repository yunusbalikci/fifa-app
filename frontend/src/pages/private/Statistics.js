import React, { useEffect, useState } from 'react';
import UserHeader from 'components/UserHeader';

const Statistics = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [realmadridPlayers, setRealMadridPlayers] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('');

  const apiUrl = 'http://127.0.0.1:8000/api/players/';

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
  };

  return (
    <div className='flex'>
      <UserHeader />
      <div className='ml-3'>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select a position
        </label>
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
        </select>
        <img className='w-32 h-32 items-center justify-center mx-auto mt-2' src='https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png'></img>
        <h2 className='mt-5 mb-3 text-center text-3xl mx-auto justify-center ml-24 font-open'>Real Madrid</h2>
        {realmadridPlayers ? (
          <div className='grid grid-cols-2 grid-rows-1 gap-3'>
            <div className='flex flex-nowrap'>
              <ul className='flex flex-wrap space-x-8 space-y-4 '>
                {realmadridPlayers.map((player) => (
                  <li key={player.sofifa_id}>
                    <div className='bg-gray-100 mt-1 ml-3 w-32 h-32 rounded-lg shadow-md'>
                      --- {player.short_name} - {player.age} - {player.player_positions} - Overall:{player.overall} ---
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='item-center ml-28 mx-auto justify-center mt-10 flex'>
              <img
                src='https://store.donanimhaber.com/43/7e/fc/437efcd169109300e39dcf613061e315.png'
                className='w-96 h-96 mx-auto items-center justify-center'
                alt="Real Madrid Logo"
              ></img>
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
