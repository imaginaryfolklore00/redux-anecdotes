import { createSlice } from "@reduxjs/toolkit"

const initialState = 'meow'

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        newNotification(state, action) {
            const content = action.payload
            state = content
            return state
        }
    }
})

export const { newNotification } = notificationSlice.actions
export default notificationSlice.reducer