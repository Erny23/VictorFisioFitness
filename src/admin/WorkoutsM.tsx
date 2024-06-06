import React from 'react'
import FilterWorkoutsList from './components/FilterWorkoutsList'
import WorkoutsList from './components/WorkoutsList'

const WorkoutsM = () => {
  return (
    <>
      <main id='workoutsM'>
          <div className='my-14'>
            <h1 className='text-center text-3xl text-white font-bold'>Ejercicios</h1>
          </div>
          <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>

            <FilterWorkoutsList />

            <WorkoutsList />

          </div>
      </main>
    </>
  )
}

export default WorkoutsM