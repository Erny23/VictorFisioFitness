import React from "react";

//asignar cuerpo de las respuestas
type LoginContextProvider = {
    password: string | null;
    name: string | null;
}

//
export const LoginContext = React.createContext<LoginContextProvider>(null as unknown as LoginContextProvider);

const LoginProvider: React.FC = () => {}