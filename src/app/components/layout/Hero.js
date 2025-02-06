import Image from 'next/image';
import Right from '../icons/Rigth';

export default function Hero() {
    return (
        <section className="hero mt-4"> 
            <div className="py-12"> 
               <h1 className="text-4xl font-semibold">
                Nada <br/> é melhor <br/> que uma&nbsp; 
                <span className="text-primary">Pizza</span>
                </h1>
               <p className="my-6 text-gray-500 text-sm">Sabor inigualável, ingredientes selecionados e uma experiência que vai conquistar o seu paladar.</p>
                <div className='flex gap-4 text-sm'>
                <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                    Peça já
                    <Right />
                </button>
                <button className="flex gap2 py-2 text-gray-600 font-semibold">
                    Saiba mais
                    <Right />
                </button>
            </div>
            </div>
            
                
            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt="Pizza"  className="rounded-full mt-8 mx-auto" />
            </div>
        
                
            
        </section>
    );
}