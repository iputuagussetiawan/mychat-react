import React from 'react'
import {Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography} from '@mui/material'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'

const Login = () => {
  const [isLogin,setIsLogin] = React.useState(true)
  const toggleLogin = () => setIsLogin(!isLogin);
  return (
    <>
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
                  }}>
                  <TextField 
                    required 
                    fullWidth
                    label='Username'
                    name='username'
                    margin='normal'
                    variant='outlined'

                  />
                  <TextField 
                    required 
                    fullWidth
                    label='Password'
                    type='password'
                    name='username'
                    margin='normal'
                    variant='outlined'
                    
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
                  }}>
                  <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    
                  />

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

                  />
                   <TextField 
                    required 
                    fullWidth
                    label='Bio'
                    name='bio'
                    margin='normal'
                    variant='outlined'

                  />
                  <TextField 
                    required 
                    fullWidth
                    label='Username'
                    name='username'
                    margin='normal'
                    variant='outlined'

                  />
                  <TextField 
                    required 
                    fullWidth
                    label='Password'
                    type='password'
                    name='username'
                    margin='normal'
                    variant='outlined'
                    
                  />
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
    </>
  )
}

export default Login