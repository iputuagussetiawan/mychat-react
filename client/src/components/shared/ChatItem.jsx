
import React from 'react'
import { Link } from 'react-router-dom'

const ChatItem = ({
    avatar=[],
    name='',
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChatOpen
}) => {
  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChatOpen(e,_id,groupChat)}>
        <div style={{
            position:'relative',
            display:'flex',
            gap:'1rem',
            alignItems:'center',
            padding:'1rem',
            backgroundColor: sameSender ? 'black' : 'unset',
            color: sameSender ? 'white' : 'black',
            justifyContent:'space-between'
          }}
        >
          <Stack>
            <Typography>{name}</Typography>
            {
              newMessageAlert && (
                <Typography>{newMessageAlert.count} New Message</Typography>
              )
            }
          </Stack>

          {isOnline && (
            <Box
              sx={{
                with:"10px",
                height:"10px",
                borderRadius:"50%",
                backgroundColor:"green",
                position:"absolute",
                top:"50%",
                right:"1rem",
                transform:"translateY(-50%)"
              }}
            />
          )}
        </div>
    </Link>
  )
}

export default memo(ChatItem);