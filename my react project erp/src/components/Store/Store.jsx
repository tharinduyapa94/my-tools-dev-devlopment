import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlicer';
import unitReducer from './unitSlicer';
import itmTypeReducer from './itemTypeSlicer';
import accTypeReducer from './accTypeSlicer';

const Store = configureStore({
  reducer: {
    todo: todoReducer,
    untRead:unitReducer,
    itmTypeGet:itmTypeReducer,
    accTyp:accTypeReducer
  }
})

export default Store;