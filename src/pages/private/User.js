import 'firebase/auth';
import Header from 'components/Header';
import { Link } from 'react-router-dom';
import dashboard from 'images/dashboard.png'
import admin from 'images/admin.png'
import team from 'images/team.png'
import shedule from 'images/schedule.png'
import statics from 'images/statistic.png'
import health from 'images/health.png'
import training from 'images/training.png'
import competitions from 'images/competitions.png'
import person from 'images/person.jpg'


function User() {
  
  return (
    <div>
      <header class="bg-fifa-blue py-6 lg:py-8  text-fifa-gray font-open uppercase">
                <div class="container flex items-center justify-between space-x-8 lg:space-x-16">
                    <Link to="/" class="pl-4 md:pl-0 text-3xl lg:text-6xl font-bold text-fifa-gray text-transparent bg-gradient-to-r bg-clip-text from-slate-500 to-white">FCMS</Link>
                
                    <div class="block md:hidden pr-4">
                        <div class="space-y-1 cursor-pointer">
                        <div class="bg-fifa-gray w-8 h-1 rounded-full"></div>
                        <div class="bg-fifa-gray w-8 h-1 rounded-full"></div>
                        <div class="bg-fifa-gray w-8 h-1 rounded-full"></div>
                    </div>
                </div>
                
                <nav class="hidden md:flex justify-between flex-1">
                    <div class="flex items-center text-sm lg:text-lg space-x-4 lg:space-x-8">  
                    </div>
                    <div class="flex items-center space-x-4  lg:space-x-8">                   
                      <div class="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
                        <Link to="/register" class="bg-fifa-gray px-3 py-1 hover:bg-gray-300 text-fifa-blue hover:text-fifa-blue cursor-pointer transition duration-300 rounded whitespace-nowrap">LOGOUT</Link>
                      </div>
                    </div>

                </nav>
            </div>    
      </header>

      <div className="grid grid-cols-2 bg-fifa-gray gap-4 font-open text-white">
            <div>
                <div className='ml-5 box-border mt-5 rounded my-auto h-40 w-auto p-4  bg-blue-500 hover:bg-blue-600 transition duration-200'>
                    <img src={dashboard}  className='w-20 h-20'></img>      
                    <h1 className='mt-3 font-bold mr-4 pr-3'>dashboard</h1>     
                </div>
                <div className='ml-5  mt-4'>
                    <div className='flex  my-auto space-x-6 box-border'>
                        <div className='box-border rounded h-40 w-96 p-4 bg-blue-700 hover:bg-blue-800 transition duration-200'>
                            <img src={admin} className='w-20 h-20'></img>
                            <h1 className='mt-3 font-bold mr-5 pr-3'>administration</h1>     
                        </div>
                        <div className='box-border rounded h-40 w-40 bg-yellow-300 hover:bg-yellow-400 transition duration-200'>
                            <img src={competitions} className='w-24 h-24 mx-auto mt-5'></img>
                            <h1 className='font-bold text-center mt-2'>competitions</h1>
                    </div>
                    <div className='box-border rounded h-40 w-40 bg-rose-500 hover:bg-rose-900 transition duration-200'>
                        <img src={health} className='w-24 h-24 mx-auto mt-6'></img>
                        <h1 className='text-center font-bold mt-1'>health</h1>
                    </div>
                </div>
                <div className='flex mt-5 space-x-6 box-border'>
                    <div className='box-border rounded h-40 w-96 bg-green-700 hover:bg-green-800 transition duration-200'>
                        <img src={team} className='w-24 h-24 ml-4 mt-2'></img>
                        <h1 className='mt-3 font-bold mr-4 ml-3 pr-3'>Team Staff</h1>
                    </div>
                    <div className='box-border rounded h-40 w-40 bg-yellow-300 hover:bg-yellow-400 transition duration-200'>
                        <img src={shedule} className='h-28 w-32 mx-auto mt-1'></img>
                        <h1 className='text-center font-bold'>Schedule</h1>
                    </div>
                    <div className='box-border rounded h-40 w-40 bg-red-500 hover:bg-red-900 transition duration-200'>
                        <img src={training} className='w-24 h-24 mx-auto mt-5'></img>
                        <h1 className='font-bold text-center '>Training</h1>
                    </div>             
                    </div>
                    <div className='mt-5 box-border rounded h-40 w-auto mb-5 p-4 bg-rose-600 hover:bg-rose-900 transition duration-200'>
                        <img src={statics} className='w-20 h-20'></img>      
                        <h1 className='mt-3 font-bold mr-4 pr-3'>team statics</h1>     
                    </div>
            </div>
            </div>

            <div>
                <div className="flex">
                <div className='box-border rounded mt-5 h-64 w-56 bg-blue-600 ml-5'>
                    <h1 className='text-center mt-5'>Yunus Balıkcı</h1>
                    <h3 className='text-center text-sm opacity-80 mt-2'>Manager</h3>
                    <img src={person} className='h-20 items-center mt-5 mx-auto w-20 rounded-full'></img>  
                    <button className=' h-10 w-36  mt-24 ml-10 font-open uppercase bg-fifa-blue rounded'>profile</button>     
                 </div>
                 <div className='box-border rounded mt-5 h-80 w-72 bg-blue-600 ml-5'>
                    <h1 className='text-center mt-5'>Thursday</h1>
                 </div>

                 
                  
                    
                 </div>
            </div>
        </div>
      
    </div>
  );
}

export default User;
