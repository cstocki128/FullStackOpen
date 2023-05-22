//import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


const Button = (props) => {
  return (
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StaticLine = (props) => {
  return(
    <tr>
      <td>{props.txt}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statics = (props) => {

  const calcAverage = () => {
    let totalBad = props.bad * -1
    let averageC = 0
    if (props.all !== 0) {
      averageC = (props.good + totalBad) / props.all
    }
    return averageC
  }

  const calcPositive = () => {
    let positiveC = 0
    if (props.all !== 0) {
      positiveC = props.good / props.all
    }
    return positiveC
  }

  let average = calcAverage()
  let positive = calcPositive()

  if (props.all !== 0){
    return(
      <div>
        <p>Statistics</p>
        <table>
          <tbody>
            <StaticLine txt='Good' value={props.good}></StaticLine>
            <StaticLine txt='Neutral' value={props.neutral}></StaticLine>
            <StaticLine txt='Bad' value={props.bad}></StaticLine>
            <StaticLine txt='All' value={props.all}></StaticLine>
            <StaticLine txt='Average' value={average}></StaticLine>
            <StaticLine txt='Positive' value={positive}></StaticLine>
          </tbody>
        </table>
      </div>
    )
  }else
  {
    return(
    <div>
      <p>No feedback given</p>
    </div>
    )
  }
}

const MostVotedAnecdote = (props) => {
  let most = 0
  let index = 0
  for (let i = 0;i < props.anecdotes.length;i++){
     if (props.votes[i] >= most){
    most = props.votes[i]
    index = i
     }
  }
  return(
    <p>{props.anecdotes[index]}</p>
  )
}

const Votes = (props) => {
  return(
    <div>
      <Button handleClick={props.handleClick} text='Vote'></Button>
      <p>Has {props.votes[props.selected]} vote/s</p>
      <h3>Anecdote with most votes</h3>
      <MostVotedAnecdote votes={props.votes} anecdotes={props.anecdotes}></MostVotedAnecdote>
    </div>
  )
}

const Anecdote = (props) => {
  return(
    <div>
      <p>{props.anecdotes[props.selected]}</p>
      <Button handleClick={props.handleClick} text="Click for next anecdote"></Button>
    </div>
  )
}



function App() {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    {
      0:0,
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,
      7:0
    }
  )

  const txtGood = 'Good'
  const txtNeutral = 'Neutral'
  const txtBad = 'Bad'
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
   

  const setToValue = (value,txt) => {
    let updatedAll = all + 1
    console.log( txt,' value now: ',value)
    console.log('all value now: ',updatedAll)

    if(txt === "Good"){
      setGood(value)
    }
    if(txt === "Neutral"){
      setNeutral(value)
    }
    if(txt === "Bad"){
      setBad(value)
    }

    setAll(updatedAll)
  }
  
  
  const setAnecdote = () =>{
    let selectedUpdated = Math.floor((Math.random()*anecdotes.length)) 
    console.log('Selected function:',selectedUpdated)
    setSelected(selectedUpdated)
  }

  const vote = () => {
    const copy = {...votes}
    copy[selected] += 1
    console.log('Votes:',copy)
    setVotes(copy) 
  }
 


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          FullStack Open - Part1-2
        </h1>
        <Anecdote handleClick={() => setAnecdote()}  anecdotes={anecdotes}  selected={selected}></Anecdote>
        <Votes handleClick = {() => vote()} votes={votes} anecdotes={anecdotes} selected={selected}></Votes>
      </header>
        {/* Code here */}
        <h1>Give Feedback</h1>
        <Button handleClick={() => setToValue(good + 1,txtGood)} text={txtGood}></Button>
        <Button handleClick={() => setToValue(neutral + 1,txtNeutral)} text={txtNeutral}></Button>
        <Button handleClick={() => setToValue(bad + 1,txtBad)} text={txtBad}></Button>
        <Statics good={good} neutral={neutral} bad={bad} all={all}></Statics>      
    </div>
  )
}

export default App;
