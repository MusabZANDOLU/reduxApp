// index.js de store import etmeyi unutma!!!!!!!
import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoid spesifik id bilgisi üretir.

const courseSlice = createSlice({
  name: "courses", //çok bir önmemi yok hangi isimle tanımalancağı
  //çok önemli. başlangıç state imde hangi propertiler var. State güncelleneceği yer reducers içindeki metotlar
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse(state, action) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCourse(state, action) {
      const updatedCourses = state.data.filter((course) => {
        return course.id !== action.payload;
      });
      state.data = updatedCourses;
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCourse, removeCourse, changeSearchTerm } = courseSlice.actions;

export const courseReducer = courseSlice.reducer;
