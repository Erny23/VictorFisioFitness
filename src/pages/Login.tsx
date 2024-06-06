import LoginComponent from '../components/LoginComponent'
import PruebaAPIRest from '../utils/PruebaAPIRest'
import PruebaModularAPI from '../utils/pruebaModularAPI'

const Login = () => {
  return (
    <>
      <main id='login'>
        <div className='mt-32 mb-20'>
          <h1 className='text-center text-3xl text-white font-bold'>Login</h1>
        </div>
        <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>
          <br />
          <LoginComponent />
          <br />
          <PruebaAPIRest />
          <br />
          <PruebaModularAPI />
        </div>
      </main>
    </>
  )
}

export default Login