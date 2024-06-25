import React from 'react'
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
    login: (form: usuarios | password, userType: string, credentialResponse?: CredentialResponse) => Promise<string>;
    logout: () => void;
    confirmDates: () => void;
    authState: () => void;
};

export const AuthContext = React.createContext<AuthContextProps>(null as unknown as AuthContextProps);

const AuthProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {

    //function login(form: usuarios, userType: string): void;
    //function login(form: password, userType: string, credentialResponse: CredentialResponse): void;

    const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);
    const [ email, setEmail ] = React.useState(null);
    const [ name, setName ] = React.useState(null);
    const [ picture, setPicture ] = React.useState(null);
    const [ userT, setUserT] = React.useState(null);
    const [ password, setPassword] = React.useState(null);

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

    async function login (form: usuarios | password, userType: string, credentialResponse?: CredentialResponse){

        let data: usuarios | password;
        
        if (credentialResponse?.credential && !email) {
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
            //obtener datos del api google
            const data = await response.json();
            data.password = form.password;
            data.user_type = userType;
            // usar el api de user
            fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

        }else if(!password){
            //uso de la api user
            await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            data = form;
            
        } else{
            return 'no puden enviar los datos, ya esta registrado'
        }
        
        //asignar datos al local storage
        if(data.picture){
            setPicture(data.picture);
        }
        setIsAuthenticated(true);
        setEmail(data.email);
        setName(data.name);
        setUserT(evalUserT(userType))
        setPassword(data.password);
        authState();
        return 'Se enviaron los datos de forma exitosa';
    };

    const logout = () => {
        setIsAuthenticated(false);
        setEmail(null);
        setName(null);
        setPicture(null);
        setPassword(null);
        setUserT(null);
        localStorage.removeItem('authState');
    };

    async function confirmDates() {
        const respuesta = await fetch('api/user');

        const userData = await respuesta.json();
        console.log(userData[0]);
    } 
    
    const authState = () => {
        if (isAuthenticated === true && email !== null){
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, name, picture, userT, password, login, logout, confirmDates, authState }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider