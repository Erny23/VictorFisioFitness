import { FaFireFlameCurved } from 'react-icons/fa6'

const AllWorkoutsAssigned = () => {
  return (
    <>
        <main id='allWorkoutsM'>
          <div className='my-14'>
            <h1 className='text-center text-3xl text-white font-bold'>Entrenamientos asignados para hoy</h1>
          </div>
          <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>

            <div className="container mx-auto px-4 my-10">
                <div className='grid justify-center py-10'>
                    <div className='flex justify-center w-full'>
                        <div className='bg-red-600 p-4 rounded-full'>
                            <FaFireFlameCurved className='text-white text-3xl' />
                        </div>
                    </div>
                    <h2 className='text-center text-xl text-gray-400 font-bold mt-3'>Entrenamientos</h2>
                    <p className="text-center text-lg text-gray-400">Aquí se mostrará la lista de los ejercicios asignados a los clientes el día de hoy</p>
                </div>
            </div>

          </div>
      </main>
    </>
  )
}

export default AllWorkoutsAssigned