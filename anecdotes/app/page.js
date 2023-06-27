"use client"

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const len = anecdotes.length
  const random = () => {
    return Math.floor(Math.random() * len)
  }
  
  const handleChange = () => {
    setSelected(() => random())
  } 
  
  const [selected, setSelected] = useState(0)
  
  const points = Array(len).fill(0)
  const handleVote = () => {
    const updatedPoints = [...currentPoints];
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
  }

  const [currentPoints, setPoints] = useState(points);

  const maxVote = () => {
    let maxNumber = currentPoints[0];
    let maxNumIndex = 0;
    for (let i = 1; i < len; i++) {
      if (maxNumber < currentPoints[i]) {
        maxNumber = currentPoints[i];
        maxNumIndex = i;
      }
    }
    return maxNumIndex;
  };

  const maxVoteIndex = maxVote();
  console.log(currentPoints, maxVoteIndex);
  return (
    <div>
      <h1>{anecdotes[selected]}</h1><br/>
      <div className="space-x-2">
      <button 
        className="bg-gray-800 rounded p-3 "
        onClick={handleChange}>Next Anecdote
      </button>

      <button 
        className="bg-gray-800 rounded p-3 "
        onClick={handleVote}>votes
      </button>
      </div>

      <div>
        <h1>Anecdote with maxium votes </h1>
        <p>{anecdotes[maxVoteIndex]}</p>
      </div>
    </div>
  )
}

export default App
