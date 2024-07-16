import React, {useState} from 'react'
import {Grid} from "@mui/material"
import {FormControl} from "@mui/material"
import {TextField} from "@mui/material"
import {Button} from "@mui/material"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {update} from "../Redux/CRUD/crudSlice"

const Update = () => {
    const {id} = useParams()
    const { userInfo } = useSelector(state => state.crud)
    const existingUser = userInfo.filter(f => f.id==id);
    const {name,email,address,phone} = existingUser[0]
    const [updateName, setUpdateName] = useState(name)
    const [updateEmail, setUpdateEmail] = useState(email)
    const [updateAddress, setUpdateAddress] = useState(address)
    const [updatePhone, setUpdatePhone] = useState(phone)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (event) =>{
        event.preventDefault();
        dispatch(update({
            id:id,
            name:updateName,
            email:updateEmail,
            address:updateAddress,
            phone:updatePhone
        }))
        navigate("/table")
    }
  return (
    <>
    
    <Grid container spacing={2}>
                <Grid item xs={8} md={4}></Grid>

                <Grid item xs={8} md={4} align="center">
                    <h2><u>Update Data</u></h2>

                    <FormControl>

                        <TextField label="Name"
                            variant='outlined'
                            sx={{ mt: 7 }}
                            name="name"
                            value={updateName}
                            onChange={e => setUpdateName(e.target.value)}
                            size="small" />

                        <TextField label="Email"
                            variant='outlined'
                            sx={{ mt: 3 }}
                            name="email"
                            value={updateEmail}
                            onChange={e => setUpdateEmail(e.target.value)}
                            size="small" />

                        <TextField label="Address"
                            variant='outlined'
                            sx={{ mt: 3 }}
                            name="address"
                            value={updateAddress}
                            onChange={e => setUpdateAddress(e.target.value)}
                            size="small" />

                        <TextField label="Phone"
                            variant='outlined'
                            sx={{ mt: 3 }}
                            name="phone"
                            value={updatePhone}
                            onChange={e => setUpdatePhone(e.target.value)}
                            size="small" />

                        <Button variant='contained'
                            sx={{ mt: 3, fontWeight:550}}
                            size="large"
                            type="submit"
                            onClick={handleUpdate}
                            >
                            Update Data
                            </Button>
        
                    </FormControl>
                </Grid>

                <Grid item xs={8} md={4}></Grid>
            </Grid>

    </>
  )
}

export default Update