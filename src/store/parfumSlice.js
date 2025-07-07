import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  items:{},
  count:1
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const itemId = action.payload.id;
      if (state[itemId]) {
        state[itemId] += 1;
      } else {
        state[itemId] = 1;
      }
    },
    decrement: (state, action) => {
      const itemId = action.payload.id;
      if (state[itemId] > 1) {
        state[itemId] -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    AddType:(state,action) =>{
       state.value.push(action.payload)   
    },
    Remove: (state, action) => {
  const clickedId = action.payload;
  if (state.items && state.value) {
    state.value = state.value.filter((item) => item.id !== clickedId);
    delete state.items[clickedId];
  }
}
  },
});

export const { increment, decrement, incrementByAmount,AddType,Remove } = counterSlice.actions;

export default counterSlice.reducer;
