import React, { useState } from 'react';
import axios from 'axios';
import UserHeader from 'components/UserHeader';

const PlayerValueForm = () => {

    const [result, setResult] = useState(null);


    const [inputValues, setInputValues] = useState({
        Overall: 0,
        Potential: 0,
        Ball_control: 0,
        Composure: 0,
        Reactions: 0,
        Age: 0,
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/player-value-guess/', inputValues);
            console.log(response);  // Sunucu cevabını konsola yazdır
            setResult(response.data.prediction);  // Sonucu state'e yerleştir
            
   
        } catch (error) {
            console.error('Error while making API request', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };


    return (
        <div className='bg-zinc-100 font-open'>
            <div className='flex'>
            <UserHeader></UserHeader>
            

            <div class="w-full max-w-xs ml-28 mt-10 flex-wrap">
                <div className='bg-white p-3 shadow-md border-blue-500 border-2 border-opacity-40 rounded'>
                    <h1 className='text-3xl font-open text-center'>Player Value AI</h1>
                </div>
                <form onSubmit={handleSubmit} class="bg-white flex flex-wrap border-2 border-t-0 border-blue-500 border-opacity-40 pl-12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Overall
                    </label>
                    <input class="shadow appearance-none border rounded-lg w-24 py-2 px-3 hover:border-blue-500 focus:border-blue-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"type="number" name="Overall" value={inputValues.Overall} onChange={handleChange} placeholder="Overall"/>
                    </div>
                    <div class="mb-4 ml-8">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Potential
                    </label>
                    <input class="shadow appearance-none border rounded-lg hover:border-blue-500 focus:border-blue-500 w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="Potential" value={inputValues.Potential} onChange={handleChange} placeholder="Overall"/>
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Ball Control
                    </label>
                    <input class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="Ball_Control" value={inputValues.Ball_control} onChange={handleChange} placeholder="Overall"/>
                    </div>
                    <div class="mb-4 ml-8">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Composure
                    </label>
                    <input class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="Composure" value={inputValues.Composure} onChange={handleChange} placeholder="Overall"/>
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Reaction
                    </label>
                    <input class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="Reactions" value={inputValues.Reactions} onChange={handleChange} placeholder="Overall"/>
                    </div>
                    <div class="mb-4 ml-8">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Age
                    </label>
                    <input class="shadow appearance-none border hover:border-blue-500 focus:border-blue-500 rounded-lg w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="Age" value={inputValues.Age} onChange={handleChange} placeholder="Overall"/>
                    </div>
        
                    <div class="flex flex-col mx-auto items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Cost</button>
                    <h1 className='mt-3 text-gray-700 text-sm font-bold block'>{result !== null ? `Sonuç: ${parseInt(result)}M` : 'M' ? '' : ''}</h1>
                    </div>
                </form>
                </div>

            
            </div>
        
        </div>
    );
};

export default PlayerValueForm;
