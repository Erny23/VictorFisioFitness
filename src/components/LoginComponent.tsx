import React, { useState }from "react"
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { AuthContext } from "../auth/AuthProvider"
import { useNavigate } from "react-router-dom"

const LoginComponent:React.FC = () => {

  const { email, login } = React.useContext(AuthContext);

  const [token, setToken] = useState<CredentialResponse>({});
  const [userType, setUserType] = useState('');
  const [inputVal, setInputVal] = useState({
    password: '',
    cpassword: ''
  });

  const setVal = (e: React.ChangeEvent<HTMLInputElement>) => {

    const {name, value} = e.target;

    setInputVal(() => {
      return{
        ...inputVal,
        [name]: value
      }
    })
  }

  const validateHaddleSubmit = () => {

    const { password, cpassword } = inputVal;

    if(password !== cpassword){
      alert('las contraseñas son distintas');
      return;
    } else if(token.credential === undefined){
      alert('no asigno un correo todavia');
      return;
    }
    login(inputVal, userType, token);
  }

  const navigate = useNavigate();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    setToken(credentialResponse);
  };

  function handleError() {
    console.log("Login error");
  };
/*
  console.log(email);

  console.log(password);

  console.log(token);

  console.log(userType);
*/
  return (
    <>
      <div className="grid justify-center">
        {email === null ? (<GoogleLogin onSuccess={handleSuccess} onError={handleError} useOneTap />) : (navigate('/'))}
        <br />
      </div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
            <input type="password" onChange={e => setVal(e)} name="password" value={inputVal.password} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
            <input type="password" onChange={e => setVal(e)} name="cpassword" value={inputVal.cpassword} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No te creaste una cuenta? <a onClick={() => navigate('/Login resgister')} className="text-blue-600 hover:underline dark:text-blue-500">haz click aqui</a></label>
        <br />
        <br />
        <button type="submit" onClick={() => validateHaddleSubmit()} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button> 
      </form>
      <br />
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          user
                      </th>
                      <th scope="col" className="px-6 py-3">
                          veneficios
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Selected</span>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          admin
                      </th>
                      <td className="px-6 py-4">
                          todos
                      </td>
                      <td className="px-6 py-4">
                          none
                      </td>
                      <button onClick={() => setUserType('admin')} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        selected
                      </button>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          user1
                      </th>
                      <td className="px-6 py-4">
                          mejor rendimiento
                      </td>
                      <td className="px-6 py-4">
                          $600
                      </td>
                      <button onClick={() => setUserType('user1')} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        selected
                      </button>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          user2
                      </th>
                      <td className="px-6 py-4">
                          mejores dietas, mas estricto
                      </td>
                      <td className="px-6 py-4">
                          $200
                      </td>
                      <button onClick={() => setUserType('user2')} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        selected
                      </button>
                  </tr>
              </tbody>
          </table>
      </div>

    </>
  );
};

export default LoginComponent;