
import Link from 'next/link';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import HomeMenu from './components/layout/HomeMenu';
import SectionHeaders from './components/layout/SectionHeaders';

export default function Home() {
  return (
    <>     
    <Hero />
    <HomeMenu />
    <section className='text-center my-16'>
      <SectionHeaders 
      subHeader={'Nossa historia'} 
      mainHeader={'Sobre nós'} 
    />
    <div className='max-w-2xl mx-auto mt-4 text-gray-500 flex-col gap-4'>
     <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p> 
     <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     </p> 
    </div>    
    </section>
    <section className='text-center my-8'>
      <SectionHeaders
      subHeader={'Don\'t hesitate'}
      mainHeader={'Contato'}
      />
      <div className='mt-8'>
        <a className='text-4xl my-8 underline text-gray-500' href='tel:+5515996969696'>+55 15 99696-9696</a>
      </div>
      
    </section>
    
    </>
  )
}
