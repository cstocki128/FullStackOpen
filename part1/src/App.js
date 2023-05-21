//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react'

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/



const Header = (props) => {
  console.log(`Header component`)
  return(
    <h1>{props.course.name}</h1>
  )
}


const Part = (props) => {
  console.log(`part component`)
  let parts = props.course.parts
  let infoFormat = (parts) => {
    let partsF = []
    let partF = ''
    for(let i=0;i<parts.length;i++){
      partF = parts[i].name+': '+parts[i].exercises
      partsF.push(partF)
    }
    return partsF
  }
  let partsFormated = infoFormat(parts)

  return(
    <div>
            { 
              <p>{partsFormated[0]}</p>
            } 
            { 
              <p>{partsFormated[1]}</p>
            } 
            { 
              <p>{partsFormated[2]}</p>
            } 
    </div>
  )
}

const Total = (props) => {
  console.log(`Total component`)
  let calculo = (props) => {
    let totalEx = 0
    let part
    let partsL = props.course.parts.length
    for(let i=0; i<partsL; i++){
      part = props.course.parts[i]
      totalEx += part.exercises
    }
    return totalEx
  }
  let total = calculo(props) 
  
  return(
    <div>
    <p>Number of exercises: {total}</p>
    </div>
  )
}

// const Display = ({ counter }) => <div>{counter}</div>

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  console.log(`App component`)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const Button = (props) => {
    console.log('props value is', props)
    const { handleClick, text } = props
    return (
    <button onClick={handleClick}>
      {text}
    </button>
    )
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      
      <Header course={course}/>
      <Part course={course}  />
      <Total course={course} />

      {left}
      <Button handleClick= {handleLeftClick} text='Left'/>
      <Button handleClick= {handleRightClick} text='Right'/>
      {right}
      
      <History allClicks={allClicks} />
      Total: {total}
    </div>
  )
}


export default App;
