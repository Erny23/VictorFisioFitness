import { useState } from 'react'
import { ListGroup } from 'flowbite-react'
import ResultsTracker from '../components/ResultsTracker'
import ProgressPhotos from '../components/ProgressPhotos'
import IntegrationActivity from '../components/IntegrationActivity'

interface ResultsTracker {
  title: string;
  content: JSX.Element;
}

interface ProgressPhotos {
  title: string;
  content: JSX.Element;
}

interface IntegrationActivity {
  title: string;
  content: JSX.Element;
}

const Results: React.FC = () => {

  const [ activeComponent, setActiveComponent ] = useState<ResultsTracker | ProgressPhotos | IntegrationActivity>({ title: 'ResultsTracker', content: <ResultsTracker /> });

  const handleTitleClick = (componentName: ResultsTracker | ProgressPhotos | IntegrationActivity) => {
    setActiveComponent(componentName);
  }

  return (
    <>
      <main id='results'>
        <div className='mt-32 mb-20'>
          <h1 className='text-center text-3xl text-white font-bold'>Resultados</h1>
        </div>
        <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>
          <div className="container mx-auto px-4 flex-col justify-center mt-5">
            <ListGroup className="w-full">
              <ListGroup.Item onClick={() => handleTitleClick({ title: 'ResultsTracker', content: <ResultsTracker /> })}>Seguimiento de resultados</ListGroup.Item>
              <ListGroup.Item onClick={() => handleTitleClick({ title: 'ProgressPhotos', content: <ProgressPhotos /> })}>Fotos de progreso</ListGroup.Item>
              <ListGroup.Item onClick={() => handleTitleClick({ title: 'IntegrationActivity', content: <IntegrationActivity /> })}>Actividades de integración</ListGroup.Item>
            </ListGroup>
            <br />
            <div className=''>
              {activeComponent.title === 'ResultsTracker' && <ResultsTracker />}
              {activeComponent.title === 'ProgressPhotos' && <ProgressPhotos />}
              {activeComponent.title === 'IntegrationActivity' && <IntegrationActivity />}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Results