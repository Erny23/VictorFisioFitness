import React, { useState } from "react";
import { AuthContext } from "../auth/AuthProvider"
//import { useNavigate } from "react-router-dom";
import FormUserRegister from "../components/FormUserRegister";
import TableUserType from "../components/TableUserType";

const Register: React.FC = () => {

    const { login } = React.useContext(AuthContext);

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
    
    return(
        <>
            <main>
                <div className='mt-32 mb-20'>
                    <h1 className='text-center text-3xl text-white font-bold'>User Register</h1>
                </div>
                <div className='w-full h-screen rounded-ss-4xl bg-gray-200 py-5'>
                    <br />
                    <FormUserRegister setVal={setVal} inputVal={inputVal} validateHaddleSubmit={validateHaddleSubmit}/>
                    <br />
                    <TableUserType setUserType={setUserType}/>
                </div>
            </main>
        </>
    )
}

export default Register;