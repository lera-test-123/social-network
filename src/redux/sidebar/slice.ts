import { createSlice } from "@reduxjs/toolkit";


type SidebarType = SidebarObjectType[]

type SidebarObjectType = {
  id: number
  name: string
}

const initialState: SidebarType = [
  {id: 1, name: "Mark"},
  {id: 2, name: "Anna"},
  {id: 3, name: "Larysa"}
]

export const slice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {}
})

export default slice.reducer;