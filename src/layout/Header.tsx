import React from 'react'
import { Button, Navbar, Popover } from "flowbite-react"
import { HiMenuAlt2 } from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom'
import Menu from './Menu'

import { AuthContext } from '../auth/AuthProvider'

const Header:React.FC = () => {

  const { isAuthenticated, email, name, picture, authState, logout } = React.useContext(AuthContext);

  authState();

  const [visible, setVisible] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => setIsOpen(false);

  const navigate = useNavigate();

  const content = (
    <div className="w-fit text-sm text-gray-500">
      <div className="border-b border-gray-200 bg-gray-100 text-center px-3 py-2">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <span className="font-base text-gray-600">{email}</span>
      </div>
      <div className="px-3 py-2">
        <div className="w-full flex justify-center">
          <Button className="text-white bg-red-700 w-fit focus:ring-0" onClick={() => {logout(), navigate('/login')}}>Logout</Button>
        </div>
      </div>
    </div>
  );

  React.useEffect(() => {

    authState();

    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled < 70) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar className={`${visible ? 'bg-[#C72414]/80 backdrop-blur' : 'bg-[#C72414]'} fixed w-full top-0 rounded-none z-40`} fluid rounded>
        
        {isAuthenticated !== true && (
        <Link to={'/login'}>
          <Navbar.Brand href="#">
            <span className="py-2.5 self-center whitespace-nowrap text-md text-white font-semibold font-['stencilla']">VictorFisioFitness</span>
          </Navbar.Brand>
        </Link>)}

        {isAuthenticated === true && (
        <Link to={'/'}>
          <Navbar.Brand href="#">
            <span className="py-2.5 self-center whitespace-nowrap text-md text-white font-semibold font-['stencilla']">VictorFisioFitness</span>
          </Navbar.Brand>
        </Link>)}

        <div className="flex flex-row items-center md:order-2">
          <div>

            {/*isAuthenticated === false && (
            <Link to={'/login'}>
              <Button color="gray" size='xs' className='font-bold focus:ring-0'>Login</Button>
            </Link>)*/}

            {isAuthenticated === true && (
            <Popover content={content} trigger="hover">
              <img className='rounded-full w-9 h-9' src={`${picture}`} alt={`${picture}`} />
            </Popover>)}

          </div>

          {isAuthenticated === true && (<div className="flex items-center justify-center">
            <Button id='menu' color="white" onClick={() => setIsOpen(true)}>
              <HiMenuAlt2 className='text-2xl text-white' />
            </Button>
          </div>)}
        </div>

      </Navbar>

      <Menu isOpen={isOpen} handleClose={handleClose} />
    </>
  )
}

export default Header