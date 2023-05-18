//import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


const Feedback = (props) => {
  console.log('Feedback component props: ',props)
  const giveFeedback = () => {
    props.handleClick(props.feedbackType)
  }

  return (
    <div>
      <button onClick={giveFeedback()}>{props.feedbackType}</button>
    </div>
  )
}

function App() {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (feedbackType) => {
    if(feedbackType === 'Good'){
      // console.log('Good before:',good)
      // let goodUpdated = good + 1
      // setGood(goodUpdated)
      // console.log('Good after:',goodUpdated)
    }

    if(feedbackType === 'Neutral'){
      setNeutral(neutral)
      console.log('Neutral:',good)
    }

    if(feedbackType === 'Bad'){
      setBad(bad)
      console.log('Bad:',bad)
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          FullStack Open - Part1-2
        </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
        {/* Code here */}
        <h1>Give Feedback</h1>
        <Feedback handleClick={handleClick} feedbackType='Good'/> <Feedback handleClick={handleClick} feedbackType='Neutral'/> <Feedback handleClick={handleClick} feedbackType='Bad'/> 
    </div>
  );
}

export default App;
