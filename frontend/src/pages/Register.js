import { motion } from "framer-motion"
import React, {useState} from 'react';
import { Navigate  } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import Header from "components/Header";
import { SyntheticEvent } from 'react';

export default function Register(){

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect,setRedirect] = useState(false)
    const submit = async (e) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/api-auth/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        setRedirect(true)
        
    }

    if(redirect){
        return <Navigate to="/login"/>

    }


    return(
        <motion.div
            initial = {{ opacity: 0,}}
            animate = {{ opacity:1}}>
            <nav>
                <Header></Header>
            </nav>
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">REGISTER</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={submit}>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            
                        </div>
                        <div class="mt-2">
                            <input id="name" name="name" type="password" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="password" required class="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div class="text-sm">
                                <button class="font-semibold text-indigo-600 hover:text-indigo-500" >Already have an account?</button>
                            </div>
                        </div>
                    </div>

                    

                    <div>
                        <button type="submit"  class="flex w-full justify-center rounded-md bg-fifa-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                    </div>
                    </form>

                    <p class="mt-10 text-center text-sm text-gray-500">
                        Not a member? <br></br>
                        <button class="font-semibold leading-6 text-blue-700 hover:text-blue-500" onClick={() => {}}>Start a 14 day free trial</button>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
