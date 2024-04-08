import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],

  reducers: {
    addTask: (state, action) => {
      // [ Types : "todo.addTsak"  payload : "Allze faire vos course "]

      const newtask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };

      state.push(newtask);
    },

    toggleTask: (state, action) => {
      // [ Types : "todo.addTask"  payload : 20]

      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },

    deleteTask: (state, action) => {
      // [ Types : "todo.addTask"  payload : 20]
      state = state.filter((t) => t.id !== action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
