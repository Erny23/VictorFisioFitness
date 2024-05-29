import HabitsComponent from '../components/HabitsComponent'

const Habits = () => {
  return (
    <>
        <main id='habits'>
            <div className='my-14'>
              <h1 className='text-center text-3xl text-white font-bold'>Hábitos</h1>
            </div>
            <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>

              <HabitsComponent />

            </div>
        </main>
    </>
  )
}

export default Habits