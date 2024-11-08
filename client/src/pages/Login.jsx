import React from 'react'
import {Button, Container, Paper, TextField, Typography} from '@mui/material'

const Login = () => {
  const [isLogin,setIsLogin] = React.useState(true)
  const toggleLogin = () => setIsLogin(!isLogin);
  return (
    <>
      <Container component={"main"} maxWidth={"xs"} sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", p: 5}}>
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
              <div>register</div>
            )
          }
        </Paper>

      </Container>
    </>
  )
}

export default Login