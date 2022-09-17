import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message: '',
    visible: false
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        newNotification(state, action) {
            const content = action.payload
            state.message = content
            state.visible = true
        },
        clear(state, action) {
            return initialState
        }
    }
})

export const { newNotification, clear } = notificationSlice.actions
export default notificationSlice.reducer