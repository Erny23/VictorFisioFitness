import React, { useState } from "react";
import { AuthContext } from "../auth/AuthProvider"
import { useNavigate } from "react-router-dom";

const FormLogin: React.FC = () => {

    const { name, login } = React.useContext(AuthContext);

    const [userType, setUserType] = useState('');
    const [inputVal, setInputVal] = useState({
        name: '',
        email: '',
        picture: '',
        password: '',
        cpassword: '',
        user_type: ''
    });

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

        const { password, cpassword } = inputVal;

        if(password !== cpassword){
        alert('las contraseñas son distintas');
        return;
        }

        login(inputVal, userType);
    }

    if(name){
        const navigate = useNavigate();
        navigate('/')
    }
    
    return(
        <>
            <main>
                <div className='mt-32 mb-20'>
                    <h1 className='text-center text-3xl text-white font-bold'>Login</h1>
                </div>
                <div className='w-full h-screen rounded-ss-4xl bg-gray-200 py-5'>
                    <br />
                    <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                            <label form="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" onChange={e => setVal(e)} name="name" value={inputVal.name} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Jose Perez" required />
                        </div>
                        <div className="mb-5">
                            <label form="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" onChange={e => setVal(e)} name="email" value={inputVal.email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example@email.com" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
                            <input type="text" onChange={e => setVal(e)} name="picture" value={inputVal.picture} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="http://picture.com" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                            <input type="password" onChange={e => setVal(e)} name="password" value={inputVal.password} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="***********" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                            <input type="password" onChange={e => setVal(e)} name="cpassword" value={inputVal.cpassword} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                        </div>
                    </form>
                    <br />
                    <button type="submit" onClick={() => validateHaddleSubmit()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                    <br />
                    <br />
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
                </div>
            </main>
        </>
    )
}

export default FormLogin;