import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modal.slice";

//Combine les Reducers
export default configureStore({
    reducer: {
        modal: modalReducer,
    },
});
