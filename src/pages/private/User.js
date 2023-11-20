import 'firebase/auth';
import Header from 'components/Header';
import { Link } from 'react-router-dom';
import dashboard from 'images/dashboard.png'
import admin from 'images/admin.png'


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

      <div className='bg-zinc-100'>
        <div className='container mx-auto py-10 pb-8 text-xl text-white'>
          <div className='box-border h-36 w-3/5 p-4  bg-blue-400'>
            <img src={dashboard}  className='w-20 h-20'></img>      
            <h1 className='mt-3 font-bold mr-4 pr-3'>dashboard</h1>     
          </div>
          <div className='flex mt-5 space-x-6 box-border'>
            <div className='box-border h-40 w-80 p-4 bg-red-700 transition duration-200'>
              <img src={admin} className='w-20 h-20'></img>
              <h1 className='mt-3 font-bold mr-4 pr-3'>administration</h1>     
            </div>
            <div className='box-border h-40 w-36 bg-yellow-500 transition duration-200'></div>
            <div className='box-border h-40 w-36 bg-red-500 transition duration-200'></div>
          </div>

          <div className='flex mt-5 space-x-6 box-border'>
            <div className='box-border h-40 w-80 bg-green-700 hover:bg-green-800 transition duration-200'></div>
            <div className='box-border h-40 w-36 bg-yellow-500 transition duration-200'></div>
            <div className='box-border h-40 w-36 bg-red-500 transition duration-200'></div>
          </div>

          <div className='mt-5 box-border h-36 w-3/5 p-4  bg-red-700'>
            <img src={dashboard} className='w-20 h-20'></img>      
            <h1 className='mt-3 font-bold mr-4 pr-3'>team statics</h1>     
          </div>
        </div>

      </div>

    </div>
  );
}

export default User;
