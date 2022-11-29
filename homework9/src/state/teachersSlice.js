import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await axios.get("http://localhost:5000/teachers");

    return response.data;
  }
);

export const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    setTeachersData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTeachers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.data = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setTeachersData } = teachersSlice.actions;

export default teachersSlice.reducer;
