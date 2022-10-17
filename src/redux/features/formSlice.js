import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShow: false,
  content: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setModalShow: (state, action) => {
      state.modalShow = action.payload;
    },
  },
});

export const { setModalShow } = formSlice.actions;
export default formSlice.reducer;
