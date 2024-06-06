import React, { useState, useEffect } from 'react'


interface ApiDataType {
  id?: string;
  name?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: string;
  status?: string;
}


const PruebaAPIRest: React.FC = () => {

  const [apiData, setApiData] = useState<ApiDataType>({});

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();

    setApiData(data);

    //console.log(data);

  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <div className='w-full flex justify-center py-5'>
        <div className='w-fit p-2 text-xl font-semibold bg-red-700 text-white rounded-xl'>
        {apiData.status}
        </div>
      </div>
    </>
  )
};

export default PruebaAPIRest;
