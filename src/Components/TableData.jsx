import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Table } from "@mui/material"
import { TableContainer } from "@mui/material"
import { TableHead } from "@mui/material"
import { TableBody } from "@mui/material"
import { TableRow } from "@mui/material"
import { TableCell } from "@mui/material"
import { Edit } from '@mui/icons-material'
import { DeleteForever } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {remove} from "../Redux/CRUD/crudSlice"
import {update} from "../Redux/CRUD/crudSlice"
import { useDispatch } from 'react-redux'

const TableData = () => {

  const { userInfo } = useSelector(state => state.crud)
  const {data} = useSelector(state => state.crud)
  const dispatch = useDispatch()
  // console.log(userInfo)

  if(userInfo.length === 0){
    return(
      <>
      <Box sx={{height:"90vh",width:"100%",display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <Typography variant="h4">Please add some data</Typography>
       <Link to="/form"> <Button variant="contained" sx={{mt:3, fontWeight:550}}>ADD DATA</Button></Link>
      </Box>
      </>
    )
  }

  const handleEdit = (id) => {
    dispatch(update(id))
    console.log(data)
  }

  const handleDelete=(id)=> {
    dispatch(remove(id))
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8} md={2}></Grid>

        <Grid item xs={8} md={8} align="center">
          <h2><u>Table</u></h2>
          <TableContainer>

            <Table sx={{ mt: 3 }} size="small">

              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>S. No.</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Name</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Email</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Address</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Number</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Update</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Delete</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {
                  userInfo.map((user, index)=> {
                    return(
                    <TableRow key={index}>
                      <TableCell align="center" sx={{ fontWeight: 400 }}>{index+1}</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 400 }}>{user.name}</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 400 }}>{user.email}</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 400 }}>{user.address}</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 400 }}>{user.phone}</TableCell>

                      <TableCell align="center" sx={{ fontWeight: 400 }}>
                        <Button onClick={()=>handleEdit(user.id)}>
                          <Edit />
                        </Button>
                      </TableCell>

                      <TableCell align="center" sx={{ fontWeight: 400 }}>
                        <Button onClick={()=>handleDelete(user.id)} color="error">
                          <DeleteForever />
                        </Button>
                      </TableCell>

                    </TableRow>
                    )
                  })

                }
              </TableBody>
              
            </Table>
          </TableContainer>
          <Link to="/form"> <Button variant="contained" sx={{mt:3, fontWeight:550}}>ADD MORE DATA</Button></Link>
        </Grid>

        <Grid item xs={8} md={2}></Grid>
      </Grid>
    </>
  )
}

export default TableData