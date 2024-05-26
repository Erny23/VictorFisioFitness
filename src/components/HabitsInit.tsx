import { Card } from "flowbite-react"
import { LuCalendarClock } from "react-icons/lu"
import { IoIosArrowForward } from "react-icons/io"

const HabitsInit = () => {
  return (
    <>
        <section className='relative z-10 w-full bg-gray-200'>
            <div className='container mx-auto px-4 py-2'>
                <Card className='w-full'>
                    <div className='flex flex-row items-center justify-between'>
                        <h5 className='text-lg font-bold tracking-tight text-gray-900'>
                            Hábitos de hoy
                        </h5>
                        <IoIosArrowForward className='text-gray-900 text-2xl' />
                    </div>
                    <div className='grid justify-center py-10'>
                        <div className='flex justify-center w-full'>
                            <div className='bg-red-600 p-4 rounded-full'>
                                <LuCalendarClock className='text-white text-3xl' />
                            </div>
                        </div>
                        <h2 className='text-center text-xl text-gray-400 font-bold mt-3'>No hay hábitos para hoy</h2>
                    </div>
                </Card>
            </div>
        </section>
    </>
  )
}

export default HabitsInit