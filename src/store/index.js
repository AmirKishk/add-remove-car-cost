import { configureStore } from "@reduxjs/toolkit";
import {
  carReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carSlice";

import { formResducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formResducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
