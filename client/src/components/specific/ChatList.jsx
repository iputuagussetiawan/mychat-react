import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'

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
            {chats?.map((data,index) => {
                const {avatar,_id,name,groupChat,members}=data
                const newMessageAlertData=newMessageAlert.find(({chatId})=>chatId===_id)
                const isOnline=members.some((member)=>onlineUsers.includes(_id))
                return (
                    <ChatItem 
                        index={index}
                        key={_id} // add a unique key to each ChatItem
                        newMessageAlert={newMessageAlertData} 
                        avatar={avatar} 
                        name={name} 
                        _id={_id} 
                        groupChat={groupChat} 
                        members={members} 
                        handleDeleteChatOpen={handleDeleteChat}
                        isOnline={isOnline}
                        sameSender={chatId===_id}
                    />
                )
            })}
        </Stack>
    )
}

export default ChatList