import{createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity: 0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            if(state.products.find(product => product.id === action.payload.id) == null) {
                state.products.push({...action.payload, quantity: 1})
            }
            else {
                state.products.find(product => product.id === action.payload.id).quantity++;
            }
            state.total += +action.payload.price.split("$")[0];
        },
        removeProduct:(state, action)=> {
            if(state.products.find(product => product.id === action.payload.id) == null) return;
            state.quantity -= 1;
            state.products.find(product => product.id === action.payload.id).quantity--;
            state.total -= +action.payload.price.split("$")[0];
            if(state.products.find(product => product.id === action.payload.id).quantity === 0) {
                state.products.splice(state.products.map(product => product.id).indexOf(action.payload.id), 1)
            }
        }
    }
})
export const {addProduct, removeProduct}=cartSlice.actions;
export default cartSlice.reducer;