import { useCallback, useState } from "react";

import Input from "../components/Input";

const auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  },[]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5"> 
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl font-semibold mb-8">{variant === 'login' ? 'Sign in' : 'Register'}</h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
              <Input 
                id="name"
                onChange={(e:any)=>setName(e.target.value)}
                value={name}
                label="Username"
              />)}
              <Input 
                id="email"
                type="email"
                onChange={(e:any)=>setEmail(e.target.value)}
                value={email}
                label="Email"
              />
              <Input 
                id="password"
                type="password"
                onChange={(e:any)=>setPassword(e.target.value)}
                value={password}
                label="Password"
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
              {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default auth