import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0, 0, 0, 0, 0, 0])

  const mostVote = votes.indexOf(Math.max(...votes))
  const handleNextClick = () => {
    let RandomInt
    do {
      RandomInt = Math.floor(Math.random() * 6)
    }
    while (RandomInt === selected)
    setSelected(RandomInt)
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={handleNextClick}>next</button>
      <button onClick={handleVoteClick}>vote</button>
      <h1>Anecdotes with most votes</h1>
      {props.anecdotes[mostVote]}
      <p>has {votes[mostVote]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)