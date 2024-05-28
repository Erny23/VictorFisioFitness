import { Link } from "react-router-dom"
import { FaUserLarge } from 'react-icons/fa6'
import { IoNutrition } from 'react-icons/io5'
import { IoIosChatboxes, IoMdFitness } from 'react-icons/io'

const ButtomsPanel = () => {
  return (
    <>
        <section className='relative z-10 container mx-auto px-4 pb-2 grid grid-cols-2 gap-2'>
        
            <Link to={'/master/clientes'}>
                <div className="flex flex-row items-center justify-between cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
                  <div className="mx-auto text-center font-medium text-gray-500">Clientes</div>
                  <div className="flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 text-white p-2">
                    <FaUserLarge className="mx-1" size={'20'} />
                  </div>
                </div>
            </Link>

            <Link to={'/master/entrenamientos'}>
                <div className="flex flex-row items-center justify-between cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
                  <div className="mx-auto text-center font-medium text-gray-500">Ejercicios</div>
                  <div className="flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 text-white p-2">
                    <IoMdFitness className="mx-1" size={'20'} />
                  </div>
                </div>
            </Link>

            <Link to={'/master/nutrición'}>
                <div className="flex flex-row items-center justify-between cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
                  <div className="mx-auto text-center font-medium text-gray-500">Nutrición</div>
                  <div className="flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 text-white p-2">
                    <IoNutrition className="mx-1" size={'20'} />
                  </div>
                </div>
            </Link>

            <Link to={'/master/chats'}>
                <div className="flex flex-row items-center justify-between cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
                  <div className="mx-auto text-center font-medium text-gray-500">Chats</div>
                  <div className="flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 text-white p-2">
                    <IoIosChatboxes className="mx-1" size={'20'} />
                  </div>
                </div>
            </Link>
        
        </section>
    </>
  )
}

export default ButtomsPanel