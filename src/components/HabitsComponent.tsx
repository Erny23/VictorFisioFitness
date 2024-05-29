import { FaFireFlameCurved } from 'react-icons/fa6'

const HabitsComponent = () => {
  return (
    <>
        <section>
            <div className="container mx-auto px-4 my-10">
                <div className='grid justify-center py-10'>
                    <div className='flex justify-center w-full'>
                        <div className='bg-red-600 p-4 rounded-full'>
                            <FaFireFlameCurved className='text-white text-3xl' />
                        </div>
                    </div>
                    <h2 className='text-center text-xl text-gray-400 font-bold mt-3'>Hábitos</h2>
                    <p className="text-center text-lg text-gray-400">Aquí se mostrará una lista de los hábitos que están asignados a al cliente</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default HabitsComponent