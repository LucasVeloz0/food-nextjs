'use client';
import Image from "next/image";
import { useState } from "react";
import { signIn } from 'next-auth/react';

export default function LoginPage() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [loginInProgress, setLoginInProgress] = useState(false);
     
     async function handleFormSubmit(ev) {
         ev.preventDefault();
         setLoginInProgress(true);
         
        await signIn('credentials', {email, password, callbackUrl:'/'});

        setLoginInProgress(false);
    }   

    return (
        <section className="mt-8"> 
            
            <h1 className="text-center text-primary text-4xl mb-4" >
                Login
            </h1>
            <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>                
                <input type="email" name="email" placeholder="Email" value={email}
                    disabled ={loginInProgress}
                    onChange={ev => setEmail(ev.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password}
                    disabled ={loginInProgress}
                    onChange={ev => setPassword(ev.target.value)} />
                <button disabled={loginInProgress} type="submit">Login</button>
                <div className="text-center my-4 text-gray-500">
                        Ou acesse com
                </div>
                 <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})}
                     className="flex gap-4 justify-center">
                 <Image src={'/google.svg'} alt={''} width={24} height={24} />
                  Entrar com Google
                 </button>                                 
            </form>
        </section>
    );
}