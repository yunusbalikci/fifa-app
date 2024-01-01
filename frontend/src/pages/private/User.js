import 'firebase/auth';
import Header from 'components/Header';
import { Link, Route, Routes } from 'react-router-dom';
import dashboard from 'images/dashboard.png'
import admin from 'images/admin.png'
import team from 'images/team.png'
import shedule from 'images/schedule.png'
import statics from 'images/statistic.png'
import health from 'images/health.png'
import training from 'images/training.png'
import competitions from 'images/competitions.png'
import person from 'images/person.jpg'
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import facebook from 'images/facebook.png'
import twitter from 'images/twitter.png'
import instagram from 'images/instagram.png'
import Dashboard from './Dashboard';

function User() {
    const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api-auth/user/', {
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
        });

        if (response.ok) {
          const content = await response.json();
          setName(content.name);
        } else {
          // Hata durumu için gerekli işlemleri burada yapabilirsiniz.
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data", error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div>
       

      <Header></Header>

      <motion.div
      initial = {{ opacity: 0, translateY:30}}
      animate = {{ opacity:1,translateY:0}}
       className="grid grid-cols-2  bg-fifa-bg gap-4 font-open text-white">
            <div className='ml-5 h-screen'>
                <div className='ml-5 box-border mt-3 rounded my-auto shadow-md h-40 w-auto p-4  bg-fifa-new hover:bg-blue-600 transition duration-200'>
                <Link to="/dashboard" className='flex flex-col  cursor-pointer'>
                    <img src={dashboard} className='w-20 h-20 mb-2' alt='Dashboard'></img>      
                    <span className='font-bold'>Dashboard</span>
                </Link>    
                </div>
                <div className='ml-5  mt-4'>
                    <div className='flex my-auto space-x-6 box-border'>
                        <Link to="/admin" className='box-border rounded h-40 w-96 p-4 shadow-md bg-fifa-newgray hover:bg-fifa-gray2 transition duration-200'>
                            <img src={admin} className='w-20 h-20'></img>
                            <h1 className='mt-3 font-bold mr-5 pr-3'>administration</h1>     
                        </Link>
                        <div className='box-border rounded h-40 w-40 shadow-md bg-fifa-yellow hover:bg-yellow-400 transition duration-200'>
                            <img src={competitions} className='w-24 h-24 mx-auto mt-5'></img>
                            <h1 className='font-bold text-center mt-2'>competitions</h1>
                    </div>
                    <div className='box-border rounded h-40 w-40 shadow-md bg-fifa-new-red hover:bg-fifa-red3 transition duration-200'>
                        <img src={health} className='w-24 h-24 mx-auto mt-6'></img>
                        <h1 className='text-center font-bold mt-1'>health</h1>
                    </div>
                </div>
                <div className='flex mt-5 space-x-6 box-border'>
                    <div className='box-border rounded h-40 w-96 shadow-md bg-fifa-newgray hover:bg-fifa-gray2 transition duration-200'>
                        <img src={team} className='w-24 h-24 ml-4 mt-2'></img>
                        <h1 className='mt-3 font-bold mr-4 ml-3 pr-3'>Team Staff</h1>
                    </div>
                    <div className='box-border rounded h-40 w-40 shadow-md bg-fifa-yellow hover:bg-yellow-400 transition duration-200'>
                        <img src={shedule} className='h-28 w-32 mx-auto mt-1'></img>
                        <h1 className='text-center font-bold'>Schedule</h1>
                    </div>
                    <div className='box-border rounded h-40 w-40 shadow-md bg-fifa-new-red hover:bg-fifa-red3 transition duration-200'>
                        <img src={training} className='w-24 h-24 mx-auto mt-5'></img>
                        <h1 className='font-bold text-center '>Training</h1>
                    </div>             
                    </div>
                    <div className='mt-5 box-border rounded h-40 shadow-md w-auto mb-5 p-4 bg-fifa-new hover:bg-fifa-blue3 transition duration-200'>
                    <Link to="/statistics" className='flex flex-col  cursor-pointer'>

                        <img src={statics} className='w-20 h-20'></img>      
                        <h1 className='mt-3 font-bold mr-4 pr-3'>team statics</h1>     
                    </Link>
                    </div>
            </div>
            </div>

            <div>
                <div className="flex ">
                <div className='box-border shadow-md rounded mt-5 h-64 w-56 bg-fifa-gray2 ml-5'>
                    <h1 className='text-center mt-5'>Yunus Balıkcı</h1>
                    <h3 className='text-center text-sm opacity-80 mt-2'>Manager</h3>
                    <img src={person} className='h-20 items-center mt-5 mx-auto w-20 rounded-full'></img>  
                    <button className=' h-10 w-36  mt-24 shadow-md ml-10 font-open uppercase bg-fifa-newgray rounded'>profile</button>
                    <div className='flex'>
                    <div className='box-border rounded h-20 w-20 bg-fifa-new mt-36 ml-60'>
                        <h1 className='text-center pt-3 lowercase'>5k followers</h1>
                            <div className='flex items-center justify-center box-border h-16 w-20 rounded bg-fifa-new mt-6'>
                                <img src={twitter} className=' h-10 w-10 mx-auto my-3'></img>
                            </div>                       
                    </div>
                    <div className='box-border rounded h-20 w-20 bg-fifa-new-red mt-36 ml-1'>
                        <h1 className='text-center pt-3 lowercase'>5k followers</h1>
                            <div className='flex items-center justify-center box-border h-16 w-20 rounded bg-fifa-new-red mt-6'>
                                <img src={instagram} className=' h-10 w-10 mx-auto my-3'></img>
                            </div>                       
                    </div>
                    <div className='box-border rounded h-20 w-20 bg-fifa-yellow mt-36 ml-1'>
                        <h1 className='text-center pt-3 lowercase'>5k followers</h1>
                            <div className='flex items-center justify-center box-border h-16 w-20 rounded bg-fifa-yellow mt-6'>
                                <img src={facebook} className=' h-10 w-10 mx-auto my-3'></img>
                            </div>                       
                    </div>
                    <div className='box-border rounded h-20 w-20 bg-fifa-newgray mt-36 ml-1'>
                        <h1 className='text-center pt-3 lowercase'>5k followers</h1>
                            <div className='flex items-center justify-center box-border h-16 w-20 rounded bg-fifa-newgray mt-6'>
                                <img src={facebook} className=' h-10 w-10 mx-auto my-3'></img>
                            </div>                       
                    </div>
                    
                    </div>
                    
                       
                      
                 </div>
                 <div className='box-border rounded mt-5'>
                    <div class="flex items-center justify-center py-0 px-4">
                        <div class="max-w-sm w-auto shadow-lg">
                            <div class="md:p-8 p-5  bg-fifa-newgray shadow-md  rounded-t">
                                <div class="px-4 flex items-center justify-between">
                                    <span  tabindex="0" class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">October 2020</span>
                                    <div class="flex items-center">
                                        <button aria-label="calendar backward" class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="15 6 9 12 15 18" />
                                        </svg>
                                    </button>
                                    <button aria-label="calendar forward" class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="9 6 15 12 9 18" />
                                        </svg>
                                    </button>

                                    </div>
                                </div>
                                <div class="flex items-center justify-between pt-12 overflow-x-auto">
                                    <table class="w-full">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="w-full flex justify-center">
                                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="w-full flex justify-center">
                                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="w-full flex justify-center">
                                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="w-full flex justify-center">
                                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="w-full flex justify-center">
                                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="w-full flex justify-center">
                                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="w-full flex justify-center">
                                                        <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">1</p>
                                                    </div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">2</p>
                                                    </div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100">3</p>
                                                    </div>
                                                </td>
                                                <td class="pt-6">
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100">4</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">5</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">6</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">7</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="w-full h-full">
                                                        <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                            <a  role="link" tabindex="0" class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-fifa-blue2 focus:bg-indigo-500 hover:bg-fifa-blue3 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-fifa-blue2 rounded-full">8</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">9</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100">10</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100">11</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">12</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">13</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">14</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">15</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">16</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100">17</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100">18</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">19</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">20</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">21</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">22</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">23</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100">24</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100">25</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">26</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">27</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">28</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">29</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                        <p class="text-base text-gray-500 dark:text-gray-100 font-medium">30</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                 </div> 
                                       
                </div>
                
            </div>
        </motion.div>
      
    </div>
  );
}

export default User;
