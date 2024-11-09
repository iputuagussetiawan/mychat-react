import React from 'react'
import {Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography} from '@mui/material'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from '../utils/validators';
import { bgGradient } from '../constants/color';

const Login = () => {
  const [isLogin,setIsLogin] = React.useState(true)
  const toggleLogin = () => setIsLogin(!isLogin);

  const name=useInputValidation("");
  const bio=useInputValidation("");
  const username=useInputValidation("", usernameValidator);
  const password=useStrongPassword();

  const avatar=useFileHandler("single");


  const handleLogin  = (e) => {
    e.preventDefault();
  }
  const handleSignUp = (e) => {
    e.preventDefault();
  }
  return (
    <div style={{backgroundImage: bgGradient}}>
      <Container 
        component={"main"} 
        maxWidth={"xs"} 
        sx={{
          height: "100vh", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          p: 5
        }}>
        <Paper 
          elevation={2} 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4
          }}
        >
          {
            isLogin ? (
              <>
                <Typography variant='h5'>login</Typography>
                <form style={{
                    width: "100%",
                    marginTop: "1rem"
                  }}
                  onSubmit={handleLogin}
                  >
                  <TextField 
                    required 
                    fullWidth
                    label='Username'
                    name='username'
                    margin='normal'
                    variant='outlined'
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                  {
                    username.error && (
                      <Typography color={"error"} variant='caption'>{username.error}</Typography>
                    )
                  }
                  <TextField 
                    required 
                    fullWidth
                    label='Password'
                    type='password'
                    name='username'
                    margin='normal'
                    variant='outlined'
                    value={password.value}
                    onChange={password.changeHandler}

                    
                  />
                  <Button 
                    sx={{mt: "1rem"}}
                    variant='contained' 
                    color='primary' 
                    type='submit'
                    fullWidth
                  >
                    Login
                  </Button>
                  <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                  <Button 
                    sx={{mt: "1rem"}}
                    variant='text' 
                    onClick={toggleLogin}
                    fullWidth
                  >
                    Register
                  </Button>
                </form>
              </>
            ) : (
              <>
              <Typography variant='h5'>Sign Up</Typography>
                <form style={{
                    width: "100%",
                    marginTop: "1rem"
                  }}
                  onSubmit={handleSignUp}
                  >
                  <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />
                    {
                    avatar.error && (
                      <Typography m={"1rem"} color={"error"} variant='caption'>{avatar.error}</Typography>
                    )
                  }

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>
                  <TextField 
                    required 
                    fullWidth
                    label='Name'
                    name='name'
                    margin='normal'
                    variant='outlined'
                    value={name.value}
                    onChange={name.changeHandler}

                  />
                   <TextField 
                    required 
                    fullWidth
                    label='Bio'
                    name='bio'
                    margin='normal'
                    variant='outlined'
                    value={bio.value}
                    onChange={bio.changeHandler}
                  />
                  <TextField 
                    required 
                    fullWidth
                    label='Username'
                    name='username'
                    margin='normal'
                    variant='outlined'
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                  {
                    username.error && (
                      <Typography color={"error"} variant='caption'>{username.error}</Typography>
                    )
                  }
                  <TextField 
                    required 
                    fullWidth
                    label='Password'
                    type='password'
                    name='password'
                    margin='normal'
                    variant='outlined'
                    value={password.value}
                    onChange={password.changeHandler}
                  />
                  {
                    password.error && (
                      <Typography color={"error"} variant='caption'>{password.error}</Typography>
                    )
                  }
                  <Button 
                    sx={{mt: "1rem"}}
                    variant='contained' 
                    color='primary' 
                    type='submit'
                    fullWidth
                  >
                    Sign Up
                  </Button>
                  <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                  <Button 
                    sx={{mt: "1rem"}}
                    variant='text' 
                    onClick={toggleLogin}
                    fullWidth
                  >
                    Login
                  </Button>
                </form>
            </>
            )
          }
        </Paper>

      </Container>
    </div>
  )
}

export default Login