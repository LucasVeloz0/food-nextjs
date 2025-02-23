'use client';
import {useSession} from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  
  const session = useSession();
  const status = session.status;
  return (
    
    <header className='flex justify-between items-center'> 
      
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
      Pizzaria TOP
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>Sobre</Link>
        <Link href={''}>Contato</Link>
        
      </nav>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        {status === 'authenticated' && (
          
          <button onClick={() => signOut()} className="bg-primary rounded-full text-white px-6 py-2">Sair
          </button>
        )}
        {status !== 'authenticated' && (
          <>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-6 py-2">
           Cadastre-se
        </Link>
        </>

        )}
        
      </nav>
    </header>
  );
}