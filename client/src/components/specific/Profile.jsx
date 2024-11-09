import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
import { Face } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';

const Profile = () => {
    return (
        <Stack 
            spacing={"1rem"}
            direction={"column"}
            alignItems={"center"}
        >
            <Avatar 
                sx={{ 
                    width: 150, 
                    height: 150,
                    objectFit:"contain",
                    marginBottom:"1rem",
                    border:"5px solid white"
                }}
            />
            <ProfileCard heading={"Bio"} text={"This is my bio"}/>
            <ProfileCard heading={"Username"} text={"@iputuagussetiawan"} Icon={<AlternateEmailIcon/>}/>
            <ProfileCard heading={"Name"} text={"I Putu Agus Setiawan"} Icon={<AccountCircleIcon/>}/>
            <ProfileCard heading={"Join"} text={moment('2023-01-01').fromNow()} Icon={<CalendarMonthIcon/>}/>
        </Stack>
    )
}

const ProfileCard = ({text,Icon,heading}) => {
    return (
        <Stack 
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            color={"white"}
            textAlign={"center"}
        >
            {Icon && Icon}
            <Stack>
                <Typography variant='body1'>{text}</Typography>
                <Typography color='gray' variant='caption'>{heading}</Typography>
            </Stack>
        </Stack>
    )
}
export default Profile