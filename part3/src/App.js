// import logo from './logo.svg';
import './App.css';

const Part = (props) => {
  console.log('Part: ',props);
  return(
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Header = (props) => {
  console.log('Header: ',props);
  return(
    <h2>
      {props.txt}
    </h2>
  )
}

const Content = (props) => {
  console.log('Content: ', props)
  return(
    <div>
      {props.parts.map(part =>
        <Part key={part.id} part={part}></Part>
      )}
    </div>
  )
}

const Sumatory = ({parts}) => {

  // for(let i=0;i < parts.length;i++){
  //   total += parts[i].exercises
  // }

  let total = parts.reduce((sum,item)=> sum + item.exercises,0)

  return(
    <b><p>Total of {total} exercises</p></b>
  )
}

const Course = (props) =>{
  console.log('Course: ',props.course);
  return(
    <div>
      <Header txt={props.course.name}></Header>
      <Content parts={props.course.parts}></Content>
      <Sumatory parts={props.course.parts}></Sumatory>
    </div>
  )
}

const Courses = ({courses}) => {
  console.log('Courses: ',courses);
  return(
    <div>
      {courses.map(course =>
        <Course key={course.id} course={course}></Course>
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>
          FullStackOpen - Part 3
        </p>
      </header>
        <Courses courses={courses} />
    </div>
  );
}

export default App;
