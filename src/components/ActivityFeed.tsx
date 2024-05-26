import { Button, Card } from "flowbite-react"
import { CiFilter } from "react-icons/ci"

const ActivityFeed = () => {
  return (
    <>
        <section className='relative z-10 w-full bg-gray-200'>
            <div className='container mx-auto px-4 py-2'>
                <Card className='w-full'>
                    <div className='flex flex-row items-center justify-between'>
                        <h5 className='text-lg font-bold tracking-tight text-gray-900'>
                            Feed de actividad
                        </h5>
                        <Button>
                            <CiFilter className='text-red-600 text-2xl' />
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    </>
  )
}

export default ActivityFeed