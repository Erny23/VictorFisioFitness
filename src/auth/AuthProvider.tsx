import React from 'react'
import { useNavigate } from "react-router-dom";
import usuarios from '../interfaces/usuarios';
import password from '../interfaces/password';
import { CredentialResponse } from '@react-oauth/google'

type AuthContextProps = {
    isAuthenticated: boolean;
    email: string | null;
    picture: string | null;
    name: string | null;
    userT: string | null;
    password: string | null;
    login: (form: usuarios | password, userType: string, credentialResponse?: CredentialResponse) => void;
    logout: () => void;
    authState: () => void;
    confirmUser: (form: usuarios) => Promise<boolean | string>;
};

export const AuthContext = React.createContext<AuthContextProps>(null as unknown as AuthContextProps);

const AuthProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {

    //Inicializacion de variables del login
    const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);
    const [ email, setEmail ] = React.useState(null);
    const [ name, setName ] = React.useState(null);
    const [ picture, setPicture ] = React.useState(null);
    const [ userT, setUserT] = React.useState(null);
    const [ password, setPassword] = React.useState(null);
    const navigate = useNavigate();

    //funcion para evaluar el tipo de usuario
    const evalUserT = ( userT: string) =>{
        let res: string = 'general';
        if(userT === 'admin'){
            res = userT
        } else if( userT === 'user1'){
            res = userT
        } else if( userT === 'user2'){
            res = userT
        }
        return res;
    }

    //sobrecarga de metodos; Donde se hace asignacion del tipo de dato a recibir
    //function login(form: usuarios, userType: string): void;
    //function login(form: password, userType: string, credentialResponse: CredentialResponse): void;

    //Implementacion de la funcion login
    async function login (form: usuarios | password, userType: string, credentialResponse?: CredentialResponse){
        //Inicializando variable de tipo usuarios
        let data: usuarios;
        //Inicio de la funcion
        if (credentialResponse?.credential) {
            // usar el api de google
            const response = await fetch('/api/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: credentialResponse.credential
                })
            });
            //obtener los datos del api de google
            data = await response.json();
            //asignar al objeto (data) los parametros faltantes desdes el formulario
            data.password = form.password;
            data.user_type = evalUserT(userType);
            //Enviar el objeto (data) a la api user
            const getUser = await confirmUser(data);

            if(getUser === 'error password') return;

            if(!getUser){
                fetch('/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }

        } else if('name' in form){
            const getUser = await confirmUser(form);

            if(getUser === 'error password') return;

            if(!getUser){
                form.user_type = evalUserT(form.user_type);
                //uso de la api user
                await fetch('/api/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                })
            }
            
            //El formulario es el objeto que tiene todos los datos necesarios para el registro
            //por lo tanto se asigna a la variable data que tiene la interfaz de usuario
            data = form;

        }
        //asignar las variables de este componente
        if(data.picture){
            setPicture(data.picture);
        }
        setIsAuthenticated(true);
        setEmail(data.email);
        setName(data.name);
        setUserT(evalUserT(userType));
        setPassword(data.password);
        //usar la funcion del local Storage
        authState();
    };
    //deslogearse
    const logout = () => {
        setIsAuthenticated(false);
        setEmail(null);
        setName(null);
        setPicture(null);
        setPassword(null);
        setUserT(null);
        localStorage.removeItem('authState');
    };
    //Funcion que asigna las variables al local storage
    const authState = () => {
        if (isAuthenticated === true && email !== null){
            navigate('/');
            return localStorage.setItem('authState', JSON.stringify({ isAuthenticated, email, name, picture, password, userT }));
            //console.log('login', JSON.parse(localStorage.getItem('authState')!));
        } else if (localStorage.getItem('authState')) {
            const session = JSON.parse(localStorage.getItem('authState')!);
            //console.log('comprobacion', session);
            return(
                setIsAuthenticated(session.isAuthenticated),
                setEmail(session.email),
                setName(session.name),
                setPicture(session.picture),
                setPassword(session.password),
                setUserT(session.userT)
            )
        }
    };

    //confirmar si el usuario esta registrado
    const confirmUser = async (form: usuarios) => {
        //obtengo la respuesta del api user
        const response = await fetch('/api/user');
        const datosJson = await response.json();
        const user = JSON.parse(datosJson);
        // recorro la lista de usuarios que existen la base de datos
        for(const u of user){
            if(u.correo === form.email){
                if(u.password === form.password){
                    return true;
                }
                alert('contraseña incorrecta');
                return 'error password'
            }
        }
        return false;
    }

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, name, picture, userT, password, login, logout, authState, confirmUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;