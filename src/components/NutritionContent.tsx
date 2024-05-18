import { Button, TextInput } from 'flowbite-react'
import { IoSearchSharp } from "react-icons/io5"
import { CiFilter } from "react-icons/ci"
import { CgArrowsExchangeAltV } from "react-icons/cg"
import { GiKnifeFork } from "react-icons/gi"

const NutritionContent = () => {
  return (
    <>
      <div id='filterNutrition'>
        <div className='container mx-auto px-8'>
            <TextInput id="search" type="text" icon={IoSearchSharp} placeholder="Buscar" />
            <div className='flex flex-row justify-end py-3'>
              <Button>
                <CgArrowsExchangeAltV className='text-3xl text-red-700' />
              </Button>
              <Button>
                <CiFilter className='text-3xl text-red-700' />
              </Button>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-10">
        <div className='grid justify-center py-10'>
            <div className='flex justify-center w-full'>
                <div className='bg-red-600 p-4 rounded-full'>
                    <GiKnifeFork className='text-white text-3xl' />
                </div>
            </div>
            <h2 className='text-center text-xl text-gray-400 font-bold mt-3'>¿Nada que ver aquí?</h2>
            <p className="text-center text-lg text-gray-400">Empieza haciendo click en el botón de la barra de acciones para crear tu primer plan</p>
        </div>
      </div>
    </>
  )
}

export default NutritionContent