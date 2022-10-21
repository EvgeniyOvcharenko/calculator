import { createSlice } from '@reduxjs/toolkit';

export const calculator = createSlice({
  name: 'calculator',
  initialState: {
    value: '0'
  },
  reducers: {
    saveResult: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { saveResult } =
  calculator.actions;

export default calculator.reducer;
