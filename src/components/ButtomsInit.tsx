import { FaUserLarge } from "react-icons/fa6"
import { IoNutrition } from "react-icons/io5"
import { IoMdPhotos } from "react-icons/io"
import { IoIosChatboxes } from "react-icons/io"

const BotonesInit = () => {
  return (
    <>
        <section className='relative z-10 container mx-auto px-4 pb-2 grid grid-cols-2 gap-2'>
            
          <div className="flex flex-row items-center cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
            <div className="text-center font-medium text-gray-500">Actualizar medidas</div>
            <div className="mx-auto flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 text-white p-2">
              <FaUserLarge className="mx-1" size={'20'} />
            </div>
          </div>

          <div className="flex flex-row items-center cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
            <div className="text-center font-medium text-gray-500">Registros de nutrición</div>
            <div className="mx-auto flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 text-white p-2">
              <IoNutrition className="mx-1" size={'20'} />
            </div>
          </div>

          <div className="flex flex-row items-center cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
            <div className="text-center font-medium text-gray-500">Agregar fotos de progreso</div>
            <div className="mx-auto flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 text-white p-2">
              <IoMdPhotos className="mx-1" size={'20'} />
            </div>
          </div>

          <div className="flex flex-row items-center cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
            <div className="text-center font-medium text-gray-500">Comenzar chat</div>
            <div className="mx-auto flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 text-white p-2">
              <IoIosChatboxes size={'20'} />
            </div>
          </div>

        </section>
    </>
  )
}

export default BotonesInit