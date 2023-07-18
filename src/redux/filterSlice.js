import { createSlice } from '@reduxjs/toolkit'; // це замінює всю роботу з actionTypes, actionCreator, reducer

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    setContactFilter: (state, action) => action.payload,
  },
});

export const { setContactFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
