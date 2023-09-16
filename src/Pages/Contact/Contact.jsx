import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="h-[800px] container mx-auto lg:flex-row  flex flex-col justify-center items-center mb-6">


<div className="lg:w-6/12 md:w-6/12  p-7 shadow-xl hover:shadow-sky-200 bg-base-50">
    
          <div className="divider font-bold">Contact Us</div>
          <h2 className=" text-center mb-8">
Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <form>
          <div className='flex  '>
          <div className="form-control w-full  mb-5">
           
           <input
             type="text"
             placeholder="Enter Your Name"
          
             
             className="input input-bordered w-full max-w-xs"
           />
           
         </div>
  
         <div className="form-control w-full max-w-xs mb-5">
           
            <input
              type="email"
              placeholder="Enter Your Email"
           
              
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
          </div>
          <div className="form-control  w-full mb-5">
            
           
            <input
              type="text"
              placeholder="Subject"
           
             
              className="input input-bordered w-full"
            />
           
          </div>
          <div className="form-control  w-full mb-5">
            
           
          <textarea className='border p-3' id="w3review" name="w3review" placeholder='Message' rows="5" cols="80">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>
           
          </div>

          <div className='mb-5'>
            <input type="checkbox" /> <span className='mx-2'>Also subscribe us</span>
          </div>
     
         
  
          <button className="btn btn-active btn-neutral">Send Message</button>
      
  
         
        </form>
        </div>
       <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-4/12 lg:w-4/12 md:w-4/12 mb-12 md:mb-0"
      >
        <img  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"  className="w-full" alt="Sample image"  />
      </div>
      
      
     
    </div>
    );
};

export default Contact;