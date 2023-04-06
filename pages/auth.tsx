import React, { useCallback, useState } from 'react';
import Input from '@/components/Input';


const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const toggleVar = useCallback(() => {
    setVariant((currVar) => currVar === 'login' ? 'register' : 'login')
  }, []);

  return (
    <div className="relative bg-[url('/images/naruto-hero.webp')] bg-no-repeat bg-cover bg-center bg-fixed w-full h-full">
      <div className='bg-black lg:bg-opacity-50 w-full h-full'>
        <nav className='px-12 py-5'>
          <img className='rounded-tl-3xl rounded-br-3xl w-40 h-24 object-cover' src='/images/logo.jpg' alt='logo' />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-50 px-16 py-16 self-center mt-1 
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
            <button className='bg-yellow-400 py-3 text-white font-semibold rounded-md 
            w-full mt-10 hover:bg-yellow-600 transition'>
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
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