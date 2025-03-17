'use client';
import {useSession} from 'next-auth/react';
import {redirect} from "next/navigation";
import Image from 'next/image';
import { useState } from 'react';

export default function ProfilePage() {
    const session = useSession();
    const [userName, setUserName] = useState(session?.data?.user?.name);
    const {status} = session;

    async function handleProfileInfoUpdate(ev) {
        ev.preventDefault();
        const response = await fetch('/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: userName})
        });
        console.log('Atualizando perfil');
    }

    if (status === 'loading') {
        return 'Loading...';
    }
    if (status !== 'authenticated') {
        return  redirect('/login');
    }

    const userImage = session.data.user.image;

  return (
    <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4" >
            Perfil
        </h1>
        <form className="max-w-md mx-auto">
        <div className='flex gap-4 items-center'>
            <div>
                <div className='p-2 rounded-lg relative'>                    
                     <Image className='rounded-lg w-full h-full mb-1' src={userImage} width={250} height={250} alt={'avatar'} />                    
                     <button type="button" className='text-primary underline'>Editar</button>
                </div>
            </div>
            <form className='grow' onSubmit={handleProfileInfoUpdate}>
                <input type="text"  placeholder='Nome e sobrenome' 
                value={userName} 
                onChange={ev => setUserName(ev.target.value)} />
                <input type="email" disabled={true} value={session.data.user.email} />
                <button type="submit">Salvar</button>
            </form>
        </div>
        </form>

    </section>
  );
}