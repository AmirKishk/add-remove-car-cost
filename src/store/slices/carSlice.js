import { nanoid, createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    mars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.mars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.mars.filter((car) => {
        return car.id !== action.payload;
      });
      state.mars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;
