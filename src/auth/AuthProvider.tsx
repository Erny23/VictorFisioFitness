import React from 'react'
import { CredentialResponse } from '@react-oauth/google'

type AuthContextProps = {
    isAuthenticated: boolean;
    email: string | null;
    user: string | null;
    picture: string | null;
    login: (credentialResponse: CredentialResponse) => void;
    logout: () => void;
    authState: () => void;
};

export const AuthContext = React.createContext<AuthContextProps>(null as unknown as AuthContextProps);

const AuthProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {

    const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);
    const [ email, setEmail ] = React.useState(null);
    const [ user, setUser ] = React.useState(null);
    const [ picture, setPicture ] = React.useState(null);
    
    const login = async(credentialResponse: CredentialResponse) => {
        if (credentialResponse.credential) {
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
            setUser(data.name);
            setPicture(data.picture);
            authState();
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setEmail(null);
        setUser(null);
        setPicture(null);
        localStorage.removeItem('authState');
    };
    
    const authState = () => {
        if (isAuthenticated === true && email !== null && user !== null){
            return localStorage.setItem('authState', JSON.stringify({ isAuthenticated, email, user, picture }));
            //console.log('login', JSON.parse(localStorage.getItem('authState')!));
        } else if (localStorage.getItem('authState')) {
            const session = JSON.parse(localStorage.getItem('authState')!);
            //console.log('comprobacion', session);
            return(
            setIsAuthenticated(session.isAuthenticated),
            setEmail(session.email),
            setUser(session.user),
            setPicture(session.picture))
        }
    };

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, user, picture, login, logout, authState }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider