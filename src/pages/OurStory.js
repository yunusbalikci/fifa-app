import Header from "components/Header";
import competitions from "images/competitions.png"
import person from "images/person.jpg"
import dashboard from "images/dashboard.png"
import admin from "images/admin.png"
import health from "images/health.png"
import team from 'images/team.png'
import shedule from 'images/schedule.png'
import training from 'images/training.png'
import statics from 'images/statistic.png'



export default function OurStory() {
  return (
    <div>
      <nav>
        <Header></Header>
      </nav>
      
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
                 </div>
                 <div className='box-border rounded mt-5 h-64 w-56 bg-blue-600 ml-5'>
                    <h1 className='text-center mt-5'>Yunus Balıkcı</h1>
                    <h3 className='text-center text-sm opacity-80 mt-2'>Manager</h3>
                    <img src={person} className='h-20 items-center mt-5 mx-auto w-20 rounded-full'></img>       
                 </div>

                 </div>
                 <div className="box-border rounded h-64 w-64 bg-red-700">
                    
                 </div>
            </div>
        </div>
    
    </div>
  );
}
