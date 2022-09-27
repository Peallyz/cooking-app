import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modal: false,
        current: 0,
    },
    reducers: {
        //Action a effectuer sur le reducer

        //Autre maniere de noter en destructurant

        //   setToggleModal: (state, {payload}) => {
        //       state.modal = payload;
        //   },

        setToggleModal: (state, action) => {
            state.modal = action.payload;
        },
        setCurrentModal: (state, action) => {
            state.current = action.payload;
        },
    },
});

export const { setToggleModal, setCurrentModal } = modalSlice.actions;
export default modalSlice.reducer;
