import { Button, Card } from "flowbite-react"
import { CiFilter } from "react-icons/ci"

const UsersActivities = () => {
  return (
    <>
        <section className='relative z-10 w-full bg-gray-200'>
            <div className='container mx-auto px-4 py-2'>
                <Card className='w-full'>
                    <div className='flex flex-row items-center justify-between'>
                        <h5 className='text-lg font-bold tracking-tight text-gray-900'>
                            Actividades completadas
                        </h5>
                        <Button>
                            <CiFilter className='text-red-600 text-2xl' />
                        </Button>
                    </div>
                    <div className='grid justify-center py-10'>
                        <h2 className='text-center text-xl text-gray-400 font-bold mt-3'>Actividades que completas</h2>
                        <p className='text-center text-gray-400 mt-3'>Aquí se muestran las actividades asignadas a los usuarios y que fueron marcadas como completadas</p>
                    </div>
                </Card>
            </div>
        </section>
    </>
  )
}

export default UsersActivities