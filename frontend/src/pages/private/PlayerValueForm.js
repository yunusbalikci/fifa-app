import React, { useState } from 'react';
import axios from 'axios';

const PlayerValueForm = () => {
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
            console.log(response.data.result);  // Sonucu konsola yazdır
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
        <form className='flex space-y-4 w-32 flex-col' onSubmit={handleSubmit}>
            {/* Giriş alanları */}
            <input className='bg-gray-200 rounded-lg p-3'  type="number" name="Overall" value={inputValues.Overall} onChange={handleChange} />
            <input className='bg-gray-200 rounded-lg p-3' type="number" name="Potential" value={inputValues.Potential} onChange={handleChange} />
            <input className='bg-gray-200 rounded-lg p-3' type="number" name="Ball_Control" value={inputValues.Ball_control} onChange={handleChange} />
            <input className='bg-gray-200 rounded-lg p-3' type="number" name="Composure" value={inputValues.Composure} onChange={handleChange} />
            <input className='bg-gray-200 rounded-lg p-3' type="number" name="Reactions" value={inputValues.Reactions} onChange={handleChange} />
            <input className='bg-gray-200 rounded-lg p-3' type="number" name="Age" value={inputValues.Age} onChange={handleChange} />
            {/* Diğer giriş alanları için aynı şekilde devam edebilirsiniz */}
            <button type="submit">Hesapla</button>
            <h1></h1>
        </form>
    );
};

export default PlayerValueForm;
