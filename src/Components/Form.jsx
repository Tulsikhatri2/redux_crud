import React, { useState } from 'react'
import { FormControl } from '@mui/material'
import { Button } from "@mui/material"
import { TextField } from "@mui/material"
import { Grid } from "@mui/material"
import { useDispatch } from 'react-redux'
import { create } from '../Redux/CRUD/crudSlice'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [formData, setFormData] = useState({ name: "", email: "", address: "", phone: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(formData)
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(formData.name==="" || formData.email==="" || formData.address==="" || formData.phone===""){
           alert("All Fields Are Mandatory..!!") 
        }
        else{
            dispatch(create(
                {
                    id: crypto.randomUUID(),
                    name: formData.name,
                    email: formData.email,
                    address: formData.address,
                    phone: formData.phone
    
                }
            ))
            setFormData({
                name:"",
                email:"",
                address:"",
                phone:""
            }
            )
            navigate("/table")
        } 
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8} md={4}></Grid>

                <Grid item xs={8} md={4} align="center">
                    <h2><u>Form</u></h2>

                    <FormControl>

                        <TextField label="Name"
                            variant='outlined'
                            sx={{ mt: 7 }}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            size="small" />

                        <TextField label="Email"
                            variant='outlined'
                            sx={{ mt: 3 }}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            size="small" />

                        <TextField label="Address"
                            variant='outlined'
                            sx={{ mt: 3 }}
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            size="small" />

                        <TextField label="Phone"
                            variant='outlined'
                            sx={{ mt: 3 }}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            size="small" />

                        <Button variant='contained'
                            sx={{ mt: 3, fontWeight:550}}
                            size="large"
                            type="submit"
                            onClick={handleSubmit}>
                            Submit Data
                            </Button>
        
                    </FormControl>
                </Grid>

                <Grid item xs={8} md={4}></Grid>
            </Grid>
        </>
    )
}

export default Form