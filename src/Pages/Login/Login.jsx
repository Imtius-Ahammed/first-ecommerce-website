import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useNavigate, useLocation } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '../Shared/Loader/Loader';
import SocialLogin from './SocialLogin';

const Login = () => {
  const { logIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        Swal.fire({
          icon: 'success',
          title: 'Logged In Successful',
          showConfirmButton: false,
          timer: 1000
        })
      })
      .catch(e => {
        console.log(e);
      })
  }

  if(loading){
    return <Loader />
  }

  return (
    <div className='w-5/6 lg:w-1/3 mx-auto mt-10 shadow-2xl p-4 lg:p-10 shadow-emerald-200'>
      <Helmet>
        <title>Ecom BD - Login</title>
      </Helmet>
      <form onSubmit={handleLogin} method="dialog" className='p-4 lg:px-12 flex flex-col gap-4'>
        <h2 className="text-2xl font-bold text-black text-center mb-2 border-b-4 border-black p-2 w-48 mx-auto">Login</h2>
        <p className='text-center mb-5'>Become a part of our community!</p>
        <div className="form-control w-full max-w-full mb-5 border-black border-b-2">
          <input
            type="email"
            name='email'
            placeholder="Enter Your Email"
            className="input w-full max-w-full"
          />
        </div>

        <div className="form-control w-full max-w-full mb-5 border-black border-b-2">
          <input
            type="password"
            name='password'
            placeholder="password"
            className="input w-full max-w-full"
          />
        </div>

        <input className="py-2 uppercase text-sm bg-black hover:bg-red-400 text-white font-bold mb-5 w-full" value='login' type="submit" />

        <div className="divider">OR</div>
        <SocialLogin />
      </form>
      <Link to='/register' className='flex items-center w-full justify-center mt-2'>Don't have an account<span className='font-bold ml-2 underline'>Register</span></Link>
    </div>
  );
};

export default Login;