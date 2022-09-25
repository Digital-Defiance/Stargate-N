import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { uuid } from '../entities/_abstract'



export interface ChevronState {
  keys: uuid[],
  values?: unknown[]
}

const initialState: ChevronState = {
  keys: [],
}

const chevronSlice = createSlice({
  name: 'chevronSlice',
  initialState,
  reducers: {
    setState: (_state, _action: PayloadAction<any>) => {

    },
  },
})


export default chevronSlice.reducer

