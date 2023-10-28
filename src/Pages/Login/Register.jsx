import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {

  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {logOut} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.url.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        const profile = {
          displayName: name,
          photoURL: url
        };
        updateUser(profile)
          .then(() => { })
          .catch(e => {
            console.log(e);
          })
        console.log(user);
        form.reset();
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful',
          showConfirmButton: false,
          timer: 1000
        })
        logOut()
          .then(() => {
            navigate('/login')
          })
      })
      .catch((e) => {
        console.log(e);
      })
  }
  return (
    <div className='w-2/3 lg:w-1/3 mx-auto mt-2 shadow-2xl p-4 lg:p-10 shadow-emerald-200'>
      <form onSubmit={handleSubmit} method="dialog" className='p-4 lg:px-12 flex flex-col gap-4'>
        <h2 className="text-2xl font-bold text-black text-center mb-2 border-b-4 border-black p-2 w-48 mx-auto">Register</h2>
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
            name='password'

            className="input w-full max-w-full"
          />
        </div>

        <input className="py-2 uppercase text-sm bg-black hover:bg-red-400 text-white font-bold mb-5 w-full" value='Register' type="submit" />
      </form>
      <Link to='/login' className='flex items-center w-full justify-center mt-2'>Have an account<span className='font-bold ml-2 underline'>Login</span></Link>
    </div>
  );
};

export default Register;