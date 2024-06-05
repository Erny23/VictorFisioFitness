import React, { useState, useEffect } from 'react'

interface users {
    id?: number,
    nombre?: string,
    peso?: number
}

const PruebaModularAPI: React.FC = () => {

  const [datos, setDatos] = useState<users[]>([]);

  const fetchData = async () => {
    await fetch('/api/ususarios')
      .then(response => {
        setDatos(response.datos); // Almacenar los datos en el estado
      })
      .catch(error => {
        console.error(error); // Manejar el error
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <div className='w-full flex justify-center py-5'>
        <div className='w-fit p-2 text-xl font-semibold bg-red-700 text-white rounded-xl'>
          {datos.map(item => (
            <div key={item.id}>
              <h1>{item.nombre}</h1>
              <p>{item.peso}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default PruebaModularAPI;