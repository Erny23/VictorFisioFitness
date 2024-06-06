import ButtomsPanel from './components/ButtomsPanel'
import HabitsAssigned from './components/HabitsAssigned'
import UsersActivities from './components/UsersActivities'
import WorkoutsAssigned from './components/WorkoutsAssigned'

const HomeM = () => {
  return (
    <>
      <main id='homeM' className='mt-32'>
        <div className='absolute w-full rounded-ss-full mt-5 h-1/5 z-0 bg-gray-200'></div>

        <ButtomsPanel />

        <WorkoutsAssigned />

        <HabitsAssigned />

        <UsersActivities />

      </main>
    </>
  )
}

export default HomeM