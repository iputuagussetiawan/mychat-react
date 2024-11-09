import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, useState } from 'react'
import { orange } from '../../constants/color'
import MenuIcon from '@mui/icons-material/Menu'
import { Group, GroupAdd, Search as SearchIcon } from '@mui/icons-material'
import { Add as AddIcon } from '@mui/icons-material'
import { Group as GroupIcon } from '@mui/icons-material'
import { Logout as LogoutIcon } from '@mui/icons-material'
import { Notifications as NotificationsIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SearchDialog=React.lazy(()=>import('../specific/Search'))
const NotificationsDialog=React.lazy(()=>import('../specific/Notifications')) 
const NewGroupDialog=React.lazy(()=>import('../specific/NewGroup'))

const Header = () => {

  const navigate=useNavigate();
  const [isMobile,setIsMobile]=useState(false);
  const [isSearch,setIsSearch]=useState(false);
  const [isNewGroup,setIsNewGroup]=useState(false);
  const [isNotification,setIsNotification]=useState(false);
  const handleMobile = () => {
    setIsMobile(!isMobile);
  }
  const openSearchDialog = () => {
    setIsSearch(!isSearch);
  }

  const openNewGroup = () => {
    setIsNewGroup(!isNewGroup);
  }

  const openNotification = () => {
    setIsNotification(!isNotification);
  }

  const navigateToGroup = () => navigate("/groups")

  const logoutHandler = () => {
    console.log("logout")
  }
  return (
    <>
      <Box sx={{ height: "4rem", flexGrow: 1 }}>
      <AppBar position='static' 
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.5)', // black with 50% opacity
          backdropFilter: 'blur(10px) saturate(180%)',
          WebkitBackdropFilter: 'blur(10px) saturate(180%)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1
        }}
      >
          <Toolbar>
            <Typography
              variant='h6'
              sx={{ display:{xs:"none",sm:"block"} }}
            >Chat App</Typography>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}> 
              <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon></MenuIcon>
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              
              <IconBtn title="Search" onClick={openSearchDialog} icon={<SearchIcon></SearchIcon>}/>
              <IconBtn title="New Group" onClick={openNewGroup}  icon={<AddIcon></AddIcon>}/>
              <IconBtn title="Manage Group" onClick={navigateToGroup} icon={<GroupIcon></GroupIcon>}/>
              <IconBtn title="Notification" onClick={openNotification} icon={<NotificationsIcon></NotificationsIcon>}/>
              <IconBtn title="Logout" onClick={logoutHandler} icon={<LogoutIcon></LogoutIcon>}/>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {
        isSearch && (
          <Suspense fallback={<Backdrop open/>}>
            <SearchDialog/>
          </Suspense>
        )
      }

      {
        isNotification && (
          <Suspense fallback={<Backdrop open/>}>
            <NotificationsDialog/>
          </Suspense>
        )
      }

      {
        isNewGroup && (
          <Suspense fallback={<Backdrop open/>}>
            <NewGroupDialog/>
          </Suspense>
        )
      }
    </>
  )
}

const IconBtn=({title,icon,onClick})=>{
  return (
    <Tooltip title={title}>  
      <IconButton size='large' color='inherit' onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header