import Link from 'next/link';

export default function Header() {
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
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-6 py-2">Cadastre-se</Link>
      </nav>
    </header>
  );
}