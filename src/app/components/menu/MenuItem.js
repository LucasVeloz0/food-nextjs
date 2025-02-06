export default function MenuItem() {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all'>
        <div className="text-center">
          <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto" alt="Pizza" />  
        </div>

         <h4 className='font-semibold text-xl my-3'>Pizza de Pepperoni</h4>
         <p className='text-gray-500 text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin sit amet libero eu semper.</p>
         <button className='bg-primary text-white px-8 py-2 rounded-full mt-4'>Por R$ 49,90</button>
    </div>
  );
}