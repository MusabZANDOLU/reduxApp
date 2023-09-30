import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";

const formSlice = createSlice({
  //çok bir önmemi yok hangi isimle tanımalancağı
  name: "form",
  //çok önemli. başlangıç state imde hangi propertiler var. State güncelleneceği yer reducers içindeki metotlar
  initialState: {
    name: "",
    description: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload; //name dediğimiz yukarıdaki initialState kısmındaki olanlar
    },
    changeDesc(state, action) {
      state.description = action.payload; //description dediğimiz yukarıdaki initialState kısmındaki olanlar
    },
    changeCost(state, action) {
      state.cost = action.payload; //cost dediğimiz yukarıdaki initialState kısmındaki olanlar
    },
  },
  extraReducers(builder) {
    builder.addCase(addCourse, (state, action) => {
      state.name = "";
      state.description = "";
      state.cost = 0;
    });
  },
});
export const { changeName, changeDesc, changeCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
