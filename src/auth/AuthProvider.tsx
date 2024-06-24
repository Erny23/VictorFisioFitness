import React from 'react'
import usuarios from '../interfaces/usuarios';
//import password from '../interfaces/password';
import { CredentialResponse } from '@react-oauth/google'

type AuthContextProps = {
    isAuthenticated: boolean;
    email: string | null;
    picture: string | null;
    user: string | null;
    userT: string | null;
    password: string | null;
    login: (form: any, userType: string, credentialResponse?: CredentialResponse) => void;
    logout: () => void;
    authState: () => void;
    
};

export const AuthContext = React.createContext<AuthContextProps>(null as unknown as AuthContextProps);

const AuthProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {

    //function login(form: usuarios, userType: string): void;
    //function login(form: password, userType: string, credentialResponse: CredentialResponse): void;

    const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);
    const [ email, setEmail ] = React.useState(null);
    const [ user, setUser ] = React.useState(null);
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

    async function login (form: any, userType: string, credentialResponse?: CredentialResponse){
        //let data: usuarios;
        if (true) {
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
            let data = await response.json();
            console.log(data.message);
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

            setIsAuthenticated(true);
            setEmail(data.email);
            setUser(data.user);
            setPicture(data.picture);
            setUserT(evalUserT(userType))
            setPassword(data.password);
            authState();

        }else{
            //uso de la api user
            await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            data = form;
        }
        /*
        //asignar datos al local storage
        if(data.picture){
            setPicture(data.picture);
        }
        setIsAuthenticated(true);
        setEmail(data.email);
        setUser(data.user);
        setUserT(evalUserT(userType))
        setPassword(data.password);
        authState();
        */
    };

    const logout = () => {
        setIsAuthenticated(false);
        setEmail(null);
        setUser(null);
        setPicture(null);
        setPassword(null);
        setUserT(null);
        localStorage.removeItem('authState');
    };
    
    const authState = () => {
        if (isAuthenticated === true && email !== null){
            return localStorage.setItem('authState', JSON.stringify({ isAuthenticated, email, user, picture, password, userT }));
            //console.log('login', JSON.parse(localStorage.getItem('authState')!));
        } else if (localStorage.getItem('authState')) {
            const session = JSON.parse(localStorage.getItem('authState')!);
            //console.log('comprobacion', session);
            return(
                setIsAuthenticated(session.isAuthenticated),
                setEmail(session.email),
                setUser(session.user),
                setPicture(session.picture),
                setPassword(session.password),
                setUserT(session.userT)
            )
        }
    };

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, user, picture, userT, password, login, logout, authState }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider