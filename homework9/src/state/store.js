import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import coursesReducer from "./coursesSlice";
import teachersReducer from "./teachersSlice";

export default configureStore({
  reducer: {
    courses: coursesReducer,
    teachers: teachersReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
