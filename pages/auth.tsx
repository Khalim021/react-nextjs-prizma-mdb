import React, { useCallback, useState } from 'react';
import Input from '@/components/Input';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const toggleVar = useCallback(() => {
    setVariant((currVar) => currVar === 'login' ? 'register' : 'login')
  }, []);

  const Userlogin = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profile'
      });

    } catch (error) {
      console.log(error)
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        name,
        email,
        password
      });
      Userlogin()
    } catch (error) {
      console.log(error)
    }
  }, [name, email, password, Userlogin]);


  return (
    <div className="relative bg-[url('/images/naruto-hero.webp')] bg-no-repeat bg-cover bg-center bg-fixed w-full h-full">
      <div className='bg-black lg:bg-opacity-50 w-full h-full'>
        <nav className='px-12 py-5'>
          <img className='rounded-tl-3xl rounded-br-3xl w-40 h-12 object-cover' src='/images/logo.svg.png' alt='logo' />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-50 px-12 py-12 self-center mt-1 
            lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h3 className='text-yellow-400 text-3xl mb-8 font-semibold'>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h3>
            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input type='text' id='name' value={name} 
                onChange={(e: any) => setName(e.target.value)} label='Name'/>
              )}
              <Input type='email' id='email' value={email} 
              onChange={(e: any) => setEmail(e.target.value)} label='Email'/>
              <Input type='password' id='password' value={password} 
              onChange={(e: any) => setPassword(e.target.value)} label='Password'/>
            </div>
            <button onClick={variant === 'login' ? Userlogin : register} className='bg-yellow-400 py-3 text-white font-semibold rounded-md 
            w-full mt-10 hover:bg-yellow-600 transition'>
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
              <div className='flex items-center justify-center transition 
              hover:opacity-75 cursor-pointer bg-white rounded-full w-10 h-10'>
                <FcGoogle size={26} />
              </div>
              <div className='flex items-center justify-center transition 
              hover:opacity-75 cursor-pointer text-blue-700 bg-white rounded-full w-10 h-10'>
                <FaFacebook size={26} />
              </div>
              <div className='flex items-center justify-center transition 
              hover:opacity-75 cursor-pointer text-blue-500 bg-white rounded-full w-10 h-10'>
                <FaTwitter size={26}/>
              </div>
            </div>
            <p className='text-yellow-400 mt-8'>
              {variant === 'login' ? 'First time watching Naruto?' : 'Already have an account?'}
              <span onClick={toggleVar} className='text-white ml-1 
              hover:underline cursor-pointer'>
                {variant === 'login' ? 'Create account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth