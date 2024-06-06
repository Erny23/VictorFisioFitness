import * as React from 'react'
import { useState } from 'react'
import { Button } from 'flowbite-react'
import DetailsComponent from '../components/DetailsComponent'
import MedicalComponent from '../components/MedicalComponent'
import PaymentComponent from '../components/PaymentComponent'

interface DetailsContent {
  title: string;
  content: JSX.Element;
}

interface MedicalContent {
  title: string;
  content: JSX.Element;
}

interface PaymentContent {
  title: string;
  content: JSX.Element;
}

const Settings: React.FC = () => {

  const [ activeComponent, setActiveComponent ] = useState<DetailsContent | MedicalContent | PaymentContent>({ title: 'Details', content: <DetailsComponent /> });

  const handleTitleClick = (componentName: DetailsContent | MedicalContent | PaymentContent) => {
    setActiveComponent(componentName);
  }

  return (
    <>
      <main id='settings'>
        <div className='flex flex-row mt-32 mb-20 overflow-x-auto'>
          <Button className='focus:ring-0' onClick={() => handleTitleClick({ title: 'Details', content: <DetailsComponent /> })}>
            <h1 className='ps-5 text-center text-3xl text-white font-bold'>Detalles</h1>
          </Button>
          <Button className='focus:ring-0' onClick={() => handleTitleClick({ title: 'Medical', content: <MedicalComponent /> })}>
            <h1 className='ps-5 text-center text-3xl text-white font-bold'>Detalles médicos</h1>
          </Button>
          <Button className='focus:ring-0' onClick={() => handleTitleClick({ title: 'Payment', content: <PaymentComponent /> })}>
            <h1 className='ps-5 text-center text-3xl text-white font-bold'>Administrar pagos</h1>
          </Button>
        </div>
        <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>
          {activeComponent.title === 'Details' && <DetailsComponent />}
          {activeComponent.title === 'Medical' && <MedicalComponent />}
          {activeComponent.title === 'Payment' && <PaymentComponent />}
        </div>
      </main>
    </>
  )
}

export default Settings