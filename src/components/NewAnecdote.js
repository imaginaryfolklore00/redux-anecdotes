import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { newNotification, clear } from '../reducers/notificationReducer'

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        
        dispatch(newNotification(`you posted an anecdote: '${content}'`))
        setTimeout(() => {
            dispatch(clear())
        }, 5000)
    }

    return (
    <div>    
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div>
                <input name = "anecdote" />
            </div>
            <button type="submit">create</button>
        </form>
    </div>
    )
}

export default NewAnecdote