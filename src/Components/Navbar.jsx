import React from 'react'
import { AppBar } from '@mui/material'
import {Box} from "@mui/material"
import {Toolbar} from "@mui/material"
import {Button} from "@mui/material"
import {IconButton} from "@mui/material"
import DataObjectIcon from '@mui/icons-material/DataObject';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <Box sx={{flexGrow:1}}>
        <AppBar position="static">
            <Toolbar>

                <IconButton 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr:2}}>
                    <DataObjectIcon/>
                </IconButton>

                <Link to="/form">
                <Button color="inherit" sx={{fontWeight: "550", color:"white"}}>Form</Button>
                </Link>

                <Link to="/table">
                <Button color="inherit" sx={{fontWeight: "550", color:"white"}}>Table</Button>
                </Link>

            </Toolbar>
        </AppBar>

    </Box>
    </>
  )
}

export default Navbar