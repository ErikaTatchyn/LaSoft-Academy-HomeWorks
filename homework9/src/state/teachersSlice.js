import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { morphism } from "morphism";
import api from "../api";

import { teachersSchema } from "./schema";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await api.get("/teachers");

    return morphism(teachersSchema, response);
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
