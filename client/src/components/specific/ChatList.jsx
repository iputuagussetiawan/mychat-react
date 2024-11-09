import { Stack } from '@mui/material'
import React from 'react'

const ChatList = ({
    w="100%",
    chats=[],
    chatId,
    onlineUsers=[],
    newMessageAlert=[
        {
            chatId: "",
            count:0,
        }
    ],
    handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
        {
            chats?.map((chat, index) => (
                <div key={index}>
                    <div onClick={() => handleDeleteChat(chat.id)}>
                        <div>{chat.name}</div>  
                    </div>
                </div>
            ))
        }
    </Stack>
  )
}

export default ChatList