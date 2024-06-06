import { Button } from 'flowbite-react'
import { FaFireFlameCurved } from 'react-icons/fa6'
import { MdAddToPhotos } from "react-icons/md"

const ChatsList = () => {
  return (
    <>
        <section id="chatsListM">
            <div className='container mx-auto px-8 flex justify-center'>
                <Button color="failure">
                    <MdAddToPhotos className='m-1 text-center text-xl' />
                    <p className='m-1'>Agregar nuevo chat</p>
                </Button>
            </div>
            <div className="container mx-auto px-4 my-10">
                <div className='grid justify-center py-10'>
                    <div className='flex justify-center w-full'>
                        <div className='bg-red-600 p-4 rounded-full'>
                            <FaFireFlameCurved className='text-white text-3xl' />
                        </div>
                    </div>
                    <h2 className='text-center text-xl text-gray-400 font-bold mt-3'>Conversaciones</h2>
                    <p className="text-center text-lg text-gray-400">Aquí se mostrará una lista de las conversaciones con los clientes</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default ChatsList