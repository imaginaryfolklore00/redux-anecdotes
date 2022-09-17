import { vote } from "../reducers/anecdoteReducer"
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
    const anecdotes = useSelector(state => state)

    const sortedAnecdotes = [...anecdotes.anecdotes].sort((a, b) => b.votes - a.votes)

    return(
        <div>
            <h2>Anecdotes</h2>
                {sortedAnecdotes
                    .map(anecdote =>
                    <Anecdote 
                        key={anecdote.id}
                        anecdote={anecdote}
                        handleClick={() => dispatch(vote(anecdote.id))}
                    />
                )}
        </div>
    )
}

export default AnecdoteList