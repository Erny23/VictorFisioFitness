import FilterNutritionList from './components/FilterNutritionList'
import NutritionList from './components/NutritionList'

const NutritionM = () => {
  return (
    <>
        <main id='nutritionM'>
            <div className='my-14'>
              <h1 className='text-center text-3xl text-white font-bold'>Nutrición</h1>
            </div>
            <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>

              <FilterNutritionList />

              <NutritionList />

            </div>
        </main>
    </>
  )
}

export default NutritionM