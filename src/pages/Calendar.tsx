import CalendarComponent from '../components/CalendarComponent'

const Calendar = () => {
  return (
    <>
      <main id='calendar'>
        <div className='mt-32 mb-20'>
          <h1 className='text-center text-3xl text-white font-bold'>Workouts</h1>
        </div>
        <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>
          
          <CalendarComponent />
        
        </div>
      </main>
    </>
  )
}

export default Calendar