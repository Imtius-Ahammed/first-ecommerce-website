import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useNavigate } from 'react-router';

const Login = () => {
  
  const {logIn} = useContext(AuthContext);
  const navigate = useNavigate();

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

      </form>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

    </div>
  );
};

export default Login;