"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);   
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })        
              });
              if (response.ok) {
                setUserCreated(true);
              } else {
                setError(true);
              }
              setCreatingUser(false);
        }
      
        
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Faça seu cadastro
            </h1>

            {userCreated && (
                <div className="my-2 text-center">
                    Cadastro concluido com sucesso! <br />
                     <Link className="underLine" href="/login">Entrar &raquo;</Link>
                </div>
            )}
            {error && (
                <div className="my-2 text-center text-red-500">
                    Ocorreu um erro ao criar o usuário <br/>
                    Tente novamente mais tarde
                </div>
            )}

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
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Ja tem cadastro? <Link className="underline" href={'/login'}>Acesse aqui &raquo; </Link>
                </div>

            </form>            
        </section>
    );
}