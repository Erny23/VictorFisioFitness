import FilterUserList from './components/FilterUserList'
import UserList from './components/UserList'

const ClientsM = () => {
  return (
    <>
        <main id='clients'>
            <div className='my-14'>
              <h1 className='text-center text-3xl text-white font-bold'>Clientes</h1>
            </div>
            <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>

              <FilterUserList />

              <UserList />

            </div>
        </main>
    </>
  )
}

export default ClientsM