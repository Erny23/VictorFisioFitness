import * as React from 'react'
import ContentPrograms from '../components/ContentPrograms'
import FilterPrograms from '../components/FilterPrograms'

const Programs = () => {
  return (
    <>
      <main id='programs'>
        <div className='mt-32 mb-20'>
          <h1 className='text-center text-3xl text-white font-bold'>Programas</h1>
        </div>
        <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>

          <FilterPrograms />

          <ContentPrograms />
        
        </div>
      </main>
    </>
  )
}

export default Programs