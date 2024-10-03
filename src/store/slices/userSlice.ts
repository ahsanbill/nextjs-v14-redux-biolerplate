import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  email: string;
  name: string;
}

/**
 * Default state object with initial values.
 */

let savedUser : UserState = {
   name: '',
   email: ''
}

const savedState = localStorage.getItem('userState')
if (savedState) {
   const parsedState = JSON.parse(savedState)
   savedUser.name = parsedState.name
   savedUser.email = parsedState.email
}

const initialState: UserState = {
  name: savedUser.name,
  email: savedUser.email,
} as const

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setName: (
         state: Draft<typeof initialState>,
         action: PayloadAction<typeof initialState.name>
      ) => {
         state.name = action.payload
      },
      setEmail: (
         state: Draft<typeof initialState>,
         action: PayloadAction<typeof initialState.email>
      ) => {
         state.email = action.payload
      },
   },
})

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user

// Exports all actions
export const { setName, setEmail } = userSlice.actions

export default userSlice.reducer
