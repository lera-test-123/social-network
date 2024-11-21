import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: [
    {id: 1, name: "Mark"},
    {id: 2, name: "Anna"},
    {id: 3, name: "Larysa"}
  ],
  reducers: {}
})

export default sidebarSlice.reducer;