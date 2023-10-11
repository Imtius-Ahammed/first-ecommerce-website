import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.url.value;
    const pass = form.pass.value;
    console.log(name, email, url, pass);

  }
  return (
    <div>
      <form onSubmit={() => handleSubmit()} method="dialog" className='p-4 lg:px-12 flex flex-col gap-4'>
        {/* if there is a button in form, it will close the modal */}
        <h2 className="text-2xl font-bold text-black text-center mb-2">Register</h2>
        <p className='text-center mb-5'>Become a part of our community!</p>

        <div className="form-control w-full max-w-full mb-5 border-black border-b-2">
          <input
            type="text"
            placeholder="Enter Your Name"
            name='name'
            className="input w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full mb-5 border-black border-b-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            name='email'

            className="input w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full mb-5 border-black border-b-2">
          <input
            type="text"
            placeholder="Enter Your Img Url"
            name='url'

            className="input w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full mb-5 border-black border-b-2">
          <input
            type="password"
            placeholder="password"
            name='pass'

            className="input w-full max-w-full"
          />
        </div>

        <input className="btn bg-black hover:bg-red-400 text-white font-bold mb-5   text-xl w-full" value='Register' type="submit" />

        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>

    </div>
  );
};

export default Register;