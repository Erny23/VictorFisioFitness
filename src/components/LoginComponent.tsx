import React, { useState }from "react"
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { AuthContext } from "../auth/AuthProvider"
import { useNavigate } from "react-router-dom"

const LoginComponent:React.FC = () => {
  //uso del proveedor de login
  const { email, login } = React.useContext(AuthContext);
  //variables necesarias para el login
  const [token, setToken] = useState<CredentialResponse>({});
  const [userType, setUserType] = useState('');
  const [inputVal, setInputVal] = useState({
    password: '',
  });
  //FUNCIONES
  //asignacion de los valores de entrada
  const setVal = (e: React.ChangeEvent<HTMLInputElement>) => {

    const {name, value} = e.target;

    setInputVal(() => {
      return{
        ...inputVal,
        [name]: value
      }
    });
  }
  //Validacion de los valores asignados
  const validateHaddleSubmit = () => {

    if(token.credential === undefined){
      alert('no asigno un correo todavia');
      return;
    }

    login(inputVal, userType, token);
  }
  //funcion cambio de rutas
  const navigate = useNavigate();
  //asignacion de las credenciales de google a la constante (token)
  const handleSuccess = (credentialResponse: CredentialResponse) => {
    setToken(credentialResponse);
  };
  //control de errores
  function handleError() {
    console.log("Login error");
  };

  console.log(email);

  return (
    <>
      <div className="grid justify-center">
        {email === null && (<GoogleLogin onSuccess={handleSuccess} onError={handleError} useOneTap />)}
        <br />
      </div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
            <input type="password" onChange={e => setVal(e)} name="password" value={inputVal.password} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No te creaste una cuenta? <a onClick={() => navigate('/user resgister')} className="text-blue-600 hover:underline dark:text-blue-500">haz click aqui</a></label>
      </form>
      <br />
      <br />

      <button type="submit" onClick={() => validateHaddleSubmit()} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          user
                      </th>
                      <th scope="col" className="px-6 py-3">
                          beneficios
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