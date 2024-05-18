import * as React from 'react'
import ActivityFeed from '../components/ActivityFeed'
import BotonesInit from '../components/ButtomsInit'
import HorarioInit from '../components/CalendarInit'
import HabitsInit from '../components/HabitsInit'

const Home = () => {
  return (
    <>
      <main id='home' className='mt-32'>
        <div className='absolute w-full rounded-ss-full mt-5 h-1/5 z-0 bg-gray-200'></div>

        <BotonesInit />

        <HorarioInit />

        <HabitsInit />

        <ActivityFeed />

      </main>
    </>
  )
}

export default Home