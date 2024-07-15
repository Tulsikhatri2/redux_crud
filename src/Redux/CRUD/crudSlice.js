import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
    name:"crud",
    initialState:{
        userInfo:[],
        data:{},
        form:{name:"", email:"", address:"", phone:""}
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
            return{
                ...state,
                data: [state.userInfo[action.payload]]
                
            }
        }
    }
})

export const {create, remove, update } = crudSlice.actions
export default crudSlice.reducer