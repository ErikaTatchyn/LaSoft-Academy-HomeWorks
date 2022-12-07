import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { morphism } from "morphism";

import api from "../api";
import { coursesSchema } from "./schema";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourse",
  async () => {
    const response = await api.get("/courses");
    const morphedData = morphism(coursesSchema, response);
    return morphedData;
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    setCoursesData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setCoursesData } = coursesSlice.actions;

export default coursesSlice.reducer;
