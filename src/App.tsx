import React from 'react'

//Barra de navegacion
import Header from "./layout/Header"
import Footer from "./layout/Footer"

//Enrutador
import Router from './routes/router'

//Contexto
import { AuthContext } from './auth/AuthProvider'

//Estilos
import './styles/App.css'

const App:React.FC = () => {

    const { isAuthenticated, confirmDates, authState } = React.useContext(AuthContext);

    authState();
    console.log(isAuthenticated);
    confirmDates()

  return (
    <>
      <Header />
      <Router isAuthenticated={isAuthenticated} />
      <Footer />
    </>
  )
}

export default App