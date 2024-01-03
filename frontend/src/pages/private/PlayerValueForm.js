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
        <div className='bg-zinc-100'>
            <div className='flex'>
            <UserHeader></UserHeader>
            <div>
                <form className='flex space-y-4 space-x-4' onSubmit={handleSubmit}>
                <label className='block ml-3'>Overall</label>
                <input className='bg-gray-200 w-32 mt-4 h-10 rounded-lg p-3'  type="number" name="Overall" value={inputValues.Overall} onChange={handleChange} />
                <input className='bg-gray-200 w-32 h-10 rounded-lg p-3' type="number" name="Potential" value={inputValues.Potential} onChange={handleChange} />
                <input className='bg-gray-200 w-32 h-10 rounded-lg p-3' type="number" name="Ball_Control" value={inputValues.Ball_control} onChange={handleChange} />
                <input className='bg-gray-200 w-32 h-10 rounded-lg p-3' type="number" name="Composure" value={inputValues.Composure} onChange={handleChange} />
                <input className='bg-gray-200 w-32 h-10 rounded-lg p-3' type="number" name="Reactions" value={inputValues.Reactions} onChange={handleChange} />
                <input className='bg-gray-200 w-32 h-10 rounded-lg p-3' type="number" name="Age" value={inputValues.Age} onChange={handleChange} />
                <button type="submit">Hesapla</button>
                <h1>{result !== null ? `Sonuç: ${parseInt(result)}` : 'M' ? '' : ''}</h1>

                <h1></h1>
                </form>
            </div>
            
            </div>
        
        </div>
    );
};

export default PlayerValueForm;
