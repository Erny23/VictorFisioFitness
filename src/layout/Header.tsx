import { useEffect, useState } from 'react'
import { Button, Navbar } from "flowbite-react"
import { HiMenuAlt2 } from "react-icons/hi"
import Menu from './Menu'
import { Link } from 'react-router-dom'

const Header = () => {

  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
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
  }, [])

  return (
    <>
       <Navbar className={`${visible ? 'bg-[#C72414]/80 backdrop-blur' : 'bg-[#C72414]'} fixed w-full top-0 rounded-none z-40`} fluid rounded>
        <Link to={'/'}>
          <Navbar.Brand href="#">
            <span className="self-center whitespace-nowrap text-md text-white font-semibold font-['stencilla']">VictorFisioFitness</span>
          </Navbar.Brand>
        </Link>
        <div className="flex md:order-2">
          <div className="flex items-center justify-center">
            <Button id='menu' color="white" onClick={() => setIsOpen(true)}>
              <HiMenuAlt2 className='text-2xl text-white' />
            </Button>
          </div>
        </div>
      </Navbar>

      <Menu isOpen={isOpen} handleClose={handleClose} />
    </>
  )
}

export default Header