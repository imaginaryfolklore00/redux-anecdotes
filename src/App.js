import React from 'react'
import { vote } from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import NewAnecdote from './components/NewAnecdote'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const clickVote = (id) => {
    dispatch(vote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => clickVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <NewAnecdote />
    </div>
  )
}

export default App