import { useState } from 'react'
import { Button } from 'flowbite-react'
import NutritionContent from '../components/NutritionContent'
import FoodContent from '../components/FoodContent'
import DrinksContent from '../components/DrinksContent'

interface NutritionComponent {
  title: string;
  content: JSX.Element;
}

interface ComidasComponent {
  title: string;
  content: JSX.Element;
}

interface BebidasComponent {
  title: string;
  content: JSX.Element;
}

const Nutrition: React.FC = () => {

  const [ activeComponent, setActiveComponent ] = useState<NutritionComponent | ComidasComponent | BebidasComponent>({ title: 'Nutrition', content: <NutritionContent /> });

  const handleTitleClick = (componentName: NutritionComponent | ComidasComponent | BebidasComponent) => {
    setActiveComponent(componentName);
  }

  return (
    <>
      <main id='nutrition'>
        <div className='flex flex-row my-14'>
          <Button className='focus:ring-0' onClick={() => handleTitleClick({ title: 'Nutrition', content: <NutritionContent /> })}>
            <h1 className='ps-5 text-center text-3xl text-white font-bold'>Nutrición</h1>
          </Button>
          <Button className='focus:ring-0' onClick={() => handleTitleClick({ title: 'Comidas', content: <FoodContent /> })}>
            <h1 className='ps-5 text-center text-3xl text-white font-bold'>Comidas</h1>
          </Button>
          <Button className='focus:ring-0' onClick={() => handleTitleClick({ title: 'Bebidas', content: <DrinksContent /> })}>
            <h1 className='ps-5 text-center text-3xl text-white font-bold'>Bebidas</h1>
          </Button>
        </div>
        <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>
          {activeComponent.title === 'Nutrition' && <NutritionContent />}
          {activeComponent.title === 'Comidas' && <FoodContent />}
          {activeComponent.title === 'Bebidas' && <DrinksContent />}
        </div>
      </main>
    </>
  )
}

export default Nutrition