import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: null,
  loading: false,
  error: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setFormData, setLoading, setError } = formSlice.actions;
export default formSlice.reducer; 