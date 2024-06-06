import { FaUserLarge } from 'react-icons/fa6'

const UserList = () => {
  return (
    <>
        <section id="userList">
            <div className="container mx-auto px-4 my-10">
                <div className='grid justify-center py-10'>
                    <div className='flex justify-center w-full'>
                        <div className='bg-red-600 p-4 rounded-full'>
                            <FaUserLarge className='text-white text-3xl' />
                        </div>
                    </div>
                    <h2 className='text-center text-xl text-gray-400 font-bold mt-3'>Clientes</h2>
                    <p className="text-center text-lg text-gray-400">Tus clientes se mostrarán aquí</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default UserList