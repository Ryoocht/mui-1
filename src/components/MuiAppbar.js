import React from 'react'
import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Menu, 
    Typography, 
    Button 
} from '@mui/material'

const MuiAppbar = () => {
  return(
    <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Themeing
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
  )
}

export default MuiAppbar