import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
           <form method="dialog" className='p-4 lg:px-12 flex flex-col gap-4'>
      {/* if there is a button in form, it will close the modal */}
      <h2 className="text-2xl font-bold text-black text-center mb-2">Login</h2>
      <p className='text-center mb-5'>Become a part of our community!</p>    
        <div className="form-control w-full max-w-full mb-5 border-black border-b-2">
         
          <input
            type="email"
            placeholder="Enter Your Email"
          
            
            className="input w-full max-w-full"
          />
         
        </div>
        <div className="form-control w-full max-w-full mb-5 border-black border-b-2">
         
          <input 
            type="password"
            placeholder="password"
          
           
            className="input w-full max-w-full"
          />
         
        
        </div>
       
       
       

       
        <input className="btn bg-black hover:bg-red-400 text-white font-bold mb-5   text-xl w-full" value='login' type="submit" />
     

       
    
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <button className='flex justify-center  mt-2'>Don't have an account?<Link className='font-bold ml-2 underline'>Register</Link></button>

      
    </form>
  
        </div>
    );
};

export default Login;