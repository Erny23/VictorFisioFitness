import { Button } from 'flowbite-react'
import LoginComponent from '../components/LoginComponent'
import { googleLogout } from '@react-oauth/google'

const Login = () => {
  return (
    <>
        <main id='login'>
            <div className='my-14'>
              <h1 className='text-center text-3xl text-white font-bold'>Login</h1>
            </div>
        <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>
            <br />
            <LoginComponent />
        </div>
      </main>
    </>
  )
}

export default Login