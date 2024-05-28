import * as React from 'react'
import { Drawer } from "flowbite-react"
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io"
import { LiaDumbbellSolid } from "react-icons/lia"
import { GiKnifeFork } from "react-icons/gi"
import { FaInfo } from "react-icons/fa6"
import { FaRegLightbulb } from "react-icons/fa"
import { LuSettings2 } from "react-icons/lu"
import { IoMenuSharp } from "react-icons/io5"

const Menu: React.FC<{ isOpen: boolean; handleClose: () => void }> = ({ isOpen, handleClose }) => {
  return (
    <>
        <Drawer open={isOpen} onClose={handleClose} position="top">
        <Drawer.Header titleIcon={IoMenuSharp} title="Menu" />
        <Drawer.Items>
          <div className="grid grid-cols-3 gap-2 p-4 md:grid-cols-4 lg:grid-cols-5">
            <Link to="/" onClick={handleClose}>
              <div className="cursor-pointer rounded-lg bg-gray-100 p-4 hover:bg-gray-200">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 p-2 dark:bg-gray-600">
                  <IoMdHome size={'24'} className='text-white' />
                </div>
                <div className="text-center text-sm font-medium text-gray-500">Inicio</div>
              </div>
            </Link>
            <Link to={"/workouts"} onClick={handleClose}>
              <div className="cursor-pointer rounded-lg bg-gray-100 p-4 hover:bg-gray-200">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 p-2 dark:bg-gray-600">
                  <LiaDumbbellSolid size={'24'} className='text-white' />
                </div>
                <div className="text-center text-sm font-medium text-gray-500">Workouts</div>
              </div>
            </Link>
            <Link to={"/nutrition"} onClick={handleClose}>
              <div className="cursor-pointer rounded-lg bg-gray-100 p-4 hover:bg-gray-200">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 p-2 dark:bg-gray-600">
                  <GiKnifeFork size={'24'} className='text-white' />
                </div>
                <div className="text-center text-sm font-medium text-gray-500">Nutrición</div>
              </div>
            </Link>
            <Link to={"/results"} onClick={handleClose}>
              <div className="cursor-pointer rounded-lg bg-gray-100 p-4 hover:bg-gray-200">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 p-2">
                  <FaInfo size={'24'} className='text-white' />
                </div>
                <div className="text-center text-sm font-medium text-gray-500">Resultados</div>
              </div>
            </Link>
            <Link to={"/programs"} onClick={handleClose}>
              <div className="cursor-pointer rounded-lg bg-gray-100 p-4 hover:bg-gray-200 ">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 p-2">
                  <FaRegLightbulb size={'24'} className='text-white' />
                </div>
                <div className="text-center text-sm font-medium text-gray-500">Programas</div>
              </div>
            </Link>
            <Link to={"/settings"} onClick={handleClose}>
              <div className="cursor-pointer rounded-lg bg-gray-100 p-4 hover:bg-gray-200">
                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-red-700 p-2">
                  <LuSettings2 size={'24'} className='text-white' />
                </div>
                <div className="text-center text-sm font-medium text-gray-500">Configuración</div>
              </div>
            </Link>
          </div>
          <div className='w-full flex justify-end text-sm text-black font-semibold'>Versión: 0.0.1</div>
        </Drawer.Items>
      </Drawer>
    </>
  )
}

export default Menu