import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const {logIn,signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = ()=>{
    signInWithGoogle(googleProvider)
    .then(res=>{
      const user=res.user;
      console.log(user);
     })
    .catch(e=>{
      console.log(e)
    })
  }


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
      navigate('/')
      alert('logged in successfull')
    })
    .catch(e => {
      console.log(e);
    })
  }

  return (
    <div>
      <form onSubmit={handleLogin} method="dialog" className='p-4 lg:px-12 flex flex-col gap-4'>
        {/* if there is a button in form, it will close the modal */}
        <h2 className="text-2xl font-bold text-black text-center mb-2">Login</h2>
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

        <input className="btn bg-black hover:bg-red-400 text-white font-bold mb-5   text-xl w-full" value='login' type="submit" />

        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className=' text-3xl flex justify-center' type="submit"> <FcGoogle ></FcGoogle></button>

      </form>
    </div>
  );
};

export default Login;