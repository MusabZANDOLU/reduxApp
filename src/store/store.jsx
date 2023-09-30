import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { courseReducer } from "./slices/courseSlice";

export const store = configureStore({
  //hangi slice kullanmak istenirse reducer ın içerisine o yazılır.
  reducer: {
    form: formReducer,
    courses: courseReducer,
  },
});
