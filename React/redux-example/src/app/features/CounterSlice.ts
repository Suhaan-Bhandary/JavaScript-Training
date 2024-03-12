import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
    resetCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { incrementCount, decrementCount, resetCount } =
  counterSlice.actions;
export default counterSlice.reducer;
