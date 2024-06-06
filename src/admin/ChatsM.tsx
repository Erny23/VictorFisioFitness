import React from 'react'
import ChatsList from './components/ChatsList'
import FilterChatsList from './components/FilterChatsList'

const ChatsM = () => {
  return (
    <>
        <main id='chatsM'>
            <div className='my-14'>
              <h1 className='text-center text-3xl text-white font-bold'>Chats</h1>
            </div>
            <div className='w-full h-screen rounded-ss-3xl bg-gray-200 py-5'>

              <FilterChatsList />

              <ChatsList />

            </div>
        </main>
    </>
  )
}

export default ChatsM