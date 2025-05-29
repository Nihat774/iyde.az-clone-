import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  count:1
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    AddType:(state,action) =>{
       state.value.push(action.payload)   
    },
    Remove:(state,action)=>{
      const clickedId = action.payload;
      state.value = state.value.filter((item)=>item.id != clickedId);
    }
  },
});

export const { increment, decrement, incrementByAmount,AddType,Remove } = counterSlice.actions;

export default counterSlice.reducer;
