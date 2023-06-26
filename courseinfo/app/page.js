
const Header = (props) => {
  return (
      <h1 className="text-black text-xl">{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <p className='text-black'>
      {props.parts[0].name} {props.parts[0].exercises} <br/>
      {props.parts[1].name} {props.parts[1].exercises} <br/>
      {props.parts[2].name} {props.parts[2].exercises}
    </p>
  )
}

  const Total = (props) => {
  return (
    <p className='text-black'> Number of exercises { props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</p>

  )
}


const App = () => {
  const course = 'Full Stack application development'
  const parts = [
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

  return (
    <div className="bg-white w-screen h-screen">
      <Header 
        course = {course}
      />
      <Content 
        parts = {parts}
      />
      <Total 
        parts = {parts}
      />
      
    </div>
  )
}

export default App 
