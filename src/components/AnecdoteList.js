import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from '../reducers/notificationReducer'
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
    const filterValue = useSelector(state => state.filter)

    const clickVote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
    }

    const anecdotesToDisplay = [...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .filter((el) => el.content.toLowerCase().includes(filterValue.toLowerCase()))

    return(
        <div>
            {anecdotesToDisplay.map(anecdote =>
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