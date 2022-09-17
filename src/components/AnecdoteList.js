import { vote } from "../reducers/anecdoteReducer"
import { newNotification, clear } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from "react-redux"

const Anecdote = ({ anecdote, handleClick }) => {
    return(
        <div>
            <div>
            {anecdote.content}
            </div>
            <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)

    const clickVote = (anecdote) => {
        dispatch(vote(anecdote.id))
        dispatch(newNotification(`you voted '${anecdote.content}'`))
        setTimeout(() => {
            dispatch(clear())
        }, 5000)
    }

    return(
        <div>
            {[...anecdotes]
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                <Anecdote 
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => clickVote(anecdote)}
                />
            )}
        </div>
    )
}

export default AnecdoteList