import React, { useState, useEffect } from 'react'

<<<<<<< Updated upstream
=======
interface ApiDataType {
  id?: string;
  name?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: string;
  status?: string;
}

>>>>>>> Stashed changes
const PruebaAPIRest: React.FC = () => {

  interface usuarios {
    id?: number,
    nombre?: string,
    peso?: number
  }

  const [apiData, setApiData] = useState<usuarios[]>([]);

  const fetchData = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
<<<<<<< Updated upstream
    setApiData(data.usuarios);
=======
    setApiData(data);
    //console.log(data);
>>>>>>> Stashed changes
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <div className='w-full flex justify-center py-5'>
        <div className='w-fit p-2 text-xl font-semibold bg-red-700 text-white rounded-xl'>
<<<<<<< Updated upstream
        <ul>
          {apiData.map((user) => (
            <li key={user.id}>
              <h2>{user.nombre}</h2>
              <p>{user.peso}</p>
            </li>
          ))}
        </ul>
=======
          {apiData.status}
>>>>>>> Stashed changes
        </div>
      </div>
    </>
  )
};

export default PruebaAPIRest;
