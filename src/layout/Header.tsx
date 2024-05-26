import { useState } from 'react'
import { Button, Navbar } from "flowbite-react"
import { HiMenuAlt2 } from "react-icons/hi"
import Menu from './Menu'
import { Link } from 'react-router-dom'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
       <Navbar className='bg-[#C72414] rounded-none' fluid rounded>
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