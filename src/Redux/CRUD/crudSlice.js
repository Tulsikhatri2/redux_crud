import { createSlice } from "@reduxjs/toolkit";



const crudSlice = createSlice({
    name:"crud",
    initialState:{
        userInfo:[],
    },
    

    reducers:{
        create:(state,action) => {
            return{
                ...state,
                userInfo:[...state.userInfo, action.payload]
            }
        },
        remove:(state,action) => {
            return{
                ...state,
                userInfo: state.userInfo.filter((item) => item.id !== action.payload)
            }
        },
        update:(state,action) => {
            const {id,name,email,address,phone} = action.payload
            const updated = state.userInfo.find(userInfo => userInfo.id == id)
            if(updated){
                updated.name = name;
                updated.email = email;
                updated.address= address;
                updated.phone = phone
            }
        }
        }
    }
)

export const {create, remove, update } = crudSlice.actions
export default crudSlice.reducer