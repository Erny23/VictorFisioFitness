import { Button, TextInput} from 'flowbite-react'
import { IoSearchSharp } from 'react-icons/io5'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import { CiFilter } from 'react-icons/ci'

const FilterUserList = () => {
  return (
    <>
        <section id='filterUserList'>
          <div className='container mx-auto px-8'>
              <TextInput id="search" type="text" icon={IoSearchSharp} placeholder="Buscar" />
              <div className='flex flex-row justify-end py-3'>
                <Button>
                  <CgArrowsExchangeAltV className='text-3xl text-red-700' />
                </Button>
                <Button>
                  <CiFilter className='text-3xl text-red-700' />
                </Button>
              </div>
          </div>
      </section>
    </>
  )
}

export default FilterUserList