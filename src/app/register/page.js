"use client";
import Image from "next/image";
import { useState } from "react";



export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);   
    const [userCreated, setUserCreated] = useState(false);
    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })        
          });
          setCreatingUser(false);
    }
        
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Faça seu cadastro
            </h1>

            <form className="block max-w-xs mx-auto mt-8" onSubmit={handleFormSubmit} >
                <input type="email" placeholder="Email" value={email}
                    disabled ={creatingUser}
                    onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder="Password" value={password}
                    disabled ={creatingUser}
                    onChange={ev => setPassword(ev.target.value)}   />
                <button type="submit" disabled ={creatingUser} >Cadastrar</button>
                <div className="text-center my-4 text-gray-500">
                    Ou entre com
                </div>
                <button className="flex gap-4 justify-center">
                    <Image src={'/google.svg'} alt={''} width={24} height={24} />
                    Fazer login
                </button>
            </form>            
        </section>
    );
}