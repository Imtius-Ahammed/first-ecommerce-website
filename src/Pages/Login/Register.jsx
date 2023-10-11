import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import {FcGoogle} from '@react-icons/all-files/fc/FcGoogle'

const Register = () => {
  const googleProvider = new GoogleAuthProvider();
  

  const { createUser, updateUser,signInWithGoogle } = useContext(AuthContext);


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
        .then(() => {})
        .catch(e => {
          console.log(e);
        })
        console.log(user);
        form.reset();
        alert('user created successfully')
      })
      .catch((e) => {
        console.log(e);
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} method="dialog" className='p-4 lg:px-12 flex flex-col gap-4'>
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
            name='password'

            className="input w-full max-w-full"
          />
        </div>

        <input className="btn bg-black hover:bg-red-400 text-white font-bold mb-5   text-xl w-full" value='Register' type="submit" />
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className=' text-3xl flex justify-center' type="submit"> <FcGoogle ></FcGoogle></button>

      </form>
    </div>
  );
};

export default Register;