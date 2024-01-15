import UserHeader from 'components/UserHeader';
import axios from 'axios';

export default function BestEleven(){
    return(
        <div className='flex'>
            <UserHeader></UserHeader>
            <div className="bg-green-500 mt-20 rounded-md shadow-lg mx-auto w-8/12 h-128 relative">
                {/* Pitch Boundary */}
                <div className="border-white border-2 w-full h-full absolute top-0 left-0"></div>
                
                {/* Center Circle */}
                <div className="border-white border-2 rounded-full w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Goal Boxes */}
                <div className="border-white border-2 w-24 h-48 absolute top-1/2 left-0 transform -translate-y-1/2"></div>
                <div className="border-white border-2 w-24 h-48 absolute top-1/2 right-0 transform -translate-y-1/2"></div>

                {/* Penalty Areas */}
                <div className="border-white border-2 ml-20 w-48 h-96 absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="border-white border-2 w-48 -mr-24 h-96 absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2"></div>

                <div className='absolute'>
                    <img className='w-20 h-20 mt-52' src="https://uk.shop.realmadrid.com/cdn/shop/files/courtois-shopbyplayer_2048x.png?v=1686667434" alt="" />
                    <h1 className='mt-1 font-bold uppercase font-open text-gray-800 ml-1'>courtois</h1>
                </div>
                <div className="absolute">
                    <img src="https://www.footyrenders.com/render/Marcelo-21.png" className='w-20 ml-32 mt-32 h-20' alt="" />
                    <h1 className='mt-1 font-bold uppercase font-open text-right mr-1 text-gray-800'>marcelo</h1>
                </div>
                <div className="absolute">
                    <img src="https://www.footyrenders.com/render/Marcelo-21.png" className='w-20 ml-32 mt-64 h-20' alt="" />
                    <h1 className='mt-1 font-bold uppercase font-open text-right mr-1 text-gray-800'></h1>
                </div>
                <div className="absolute">
                    <img src="https://www.footyrenders.com/render/Marcelo-21.png" className='w-20 ml-32 mt-3 h-20' alt="" />
                    <h1 className='mt-1 font-bold uppercase font-open text-right mr-1 text-gray-800'>marcelo</h1>
                </div>
                <div className="absolute">
                    <img src="https://www.footyrenders.com/render/Marcelo-21.png" className='w-20 ml-32 mt-96 h-20' alt="" />
                    <h1 className='mt-1 font-bold uppercase font-open text-right mr-1 text-gray-800'>Carvajal</h1>
                </div>

                {/* Penalty Spots */}
                <div className="border-white border-2 rounded-full -ml-40 w-8 h-8 absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="border-white border-2 rounded-full w-8 h-8 -mr-48 absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>

                {/* Center Line */}
                <div className="border-white border-2 w-full  absolute top-1/2 left-0 transform -translate-y-1/2"></div>
            </div>

        </div>
    )
}