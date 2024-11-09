import React from 'react'
import Header from './Header'
import Title from '../shared/Title';
import Grid from '@mui/material/Grid2';
import { sampleChats } from '../../constants/sampleData';
import ChatList from '../specific/Chatlist';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';

const AppLayout = () =>WrappedComponent=> {

  function AppLayoutComponent(props){
    const params=useParams();
    const chatId=params.chatId;
    const handleDeleteChat=(e,_id,groupChat)=>{
      e.preventDefault();
      console.log("delete chat",_id,groupChat)
    }
    return (
        <>
          <Title/>
          <Header/>
          <Grid container style={{ height: "calc(100vh - 4rem)" }}>
            <Grid 
              size={{ sm: 4, md: 3}} 
              sx={{ display: { xs: "none", sm: "block" } }} 
              style={{ height: "100%" }}
            >
              <ChatList 
                chats={sampleChats} 
                chatId={chatId} 
                handleDeleteChat={handleDeleteChat}
              />
            </Grid>
            <Grid size={{ xs: 12,sm:8,md:5,lg:6 }} style={{ height: "100%" }} bgcolor={"primary.main"}>
              <WrappedComponent {...props}/>
            </Grid>
            <Grid  
              size={{ md: 4, lg:3}} 
              sx={{ 
                height: "100%", 
                display: { xs: "none", md: "block" }, 
                padding: "2rem", 
                bgcolor: "rgba(0,0,0,0.85)" 
              }} 
            >
              <Profile/>
            </Grid>
          </Grid>
        </>
    )
  }
  return AppLayoutComponent;
}

export default AppLayout