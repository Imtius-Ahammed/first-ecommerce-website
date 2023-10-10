import React from 'react';
import { FaFacebook, FaMailchimp, FaPinterest, FaStar, FaTwitter, FaVoicemail } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const RatingsReviews = () => {
    return (
       <div>
         <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between my-4'>
            <div className='flex items-center gap-2 '>
            <div className="avatar">
  <div className="w-14 rounded-full">
    <img src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" />
  </div>
</div>
                <div>
                    <h2><b>Peter Giroud</b>-September 17,2019</h2>
                    <p>Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est</p>

                </div>

              
            </div>
            <div className='flex text-orange-400'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
            
        </div>
        <hr />
        <h1 className='font-medium'>Add a review</h1>
        <p className='mb-4'>Your email address will not be published. Required fields are marked *</p>
        <p className='mb-2'>Your rating *</p>
    


        <div className='flex gap-3 items-center'>
           <div className=' hover:text-orange-500'><FaStar></FaStar></div>|

           <div className='flex hover:text-orange-500'><FaStar></FaStar><FaStar></FaStar></div>|

           <div className='flex  hover:text-orange-500'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>|

           <div className='flex  hover:text-orange-500'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>|

           <div className='flex  hover:text-orange-500'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>

        </div>



        {/* form */}

        <div>
          <div className=" container mx-auto lg:flex-row  flex flex-col justify-center items-center mb-6 ">
         


         <div className=" w-full  py-5 ">
             
                 <form>
                 <div className="form-control bg-gray-100 hover:border hover:border-red-500  w-full mb-5">
                     
                    
                     <textarea className='p-3 bg-gray-100 hover:border hover:border-red-500 ' id="w3review" name="w3review" placeholder='Message' rows="5" cols="80">
           At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
           </textarea>
                      
                     </div>
                   <div className='flex lg:flex-row flex-col gap-4 '>
                    
                   <div className="form-control w-full  mb-5">
                    
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                   
                      
                      className="input input-bordered w-full bg-gray-100 hover:border hover:border-red-500 "
                    />
                    
                  </div>
           
                  <div className="form-control w-full mb-5">
                    
                     <input
                       type="email"
                       placeholder="Enter Your Email"
                    
                       
                       className="input input-bordered w-full bg-gray-100 hover:border hover:border-red-500 "
                     />
                     
                   </div>
                   </div>
          
              
         
                   <div className='mb-5'>
                     <input type="checkbox" /> <span className='mx-2'>Also subscribe us</span>
                   </div>
              
                  
           
                   <button className="btn btn-active btn-neutral">Send Message</button>
               
           
                  
                 </form>
                 </div>
            
               
               
              
             </div>
         
      </div>




      {/* <div className='grid lg:grid-cols-4 grid-cols-2 '>
        <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaFacebook></FaFacebook> Share on Facebook</Link>
        <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaTwitter></FaTwitter> Tweet this Product</Link> 
        <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaPinterest></FaPinterest>Pin This Product</Link>
        <Link className='flex items-center gap-2 lg:text-2xl text-xl border lg:p-5 p-3 hover:text-red-500'><FaVoicemail></FaVoicemail> Mail This Product</Link>
       
      </div> */}
     
     
       </div>
    );
};

export default RatingsReviews;