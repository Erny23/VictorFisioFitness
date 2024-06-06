import React, { useState, useEffect } from 'react'  


const PruebaModularAPI: React.FC = () => {

  interface usuarios {
    id?: number,
    nombre?: string,
    peso?: number
  }

  const [apiData, setApiData] = useState<usuarios[]>([]);

  const fetchData = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();

    console.log(data);

    setApiData(data.usuarios);

  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <div className='w-full flex justify-center py-5'>
        <div className='w-fit p-2 text-xl font-semibold bg-red-700 text-white rounded-xl'>

        <ul>
          {apiData.map((user) => (
            <li key={user.id}>
              <h2>{user.nombre}</h2>
              <p>{user.peso}</p>
            </li>
          ))}
        </ul>

        </div>
      </div>
    </>
  )
};

export default PruebaModularAPI;
