import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';

const SocialLogin = () => {

    const googleProvider = new GoogleAuthProvider();
    const { signInWithGoogle, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();

    const handleGoogleLogin = () => {
        signInWithGoogle(googleProvider)
            .then(res => {
                const user = res.user;
                const saveUser = { name: user.displayName, email: user.email }

                axiosSecure.post('/users', saveUser)
                    .then(() => {
                        navigate('/');
                    })
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <button onClick={handleGoogleLogin} className=' text-3xl flex justify-center' type="submit"> <FcGoogle /></button>
    );
};

export default SocialLogin;