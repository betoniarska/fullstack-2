const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1,

    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2,

    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3,
    }
  ]
}

  return (
    
    <div>
      <Course course={course} />
    </div>
    
  )
}
const Course = ({course}) => {
  return (
    <div>
    <Header course={course}/>
    
    <Content content={course.parts}/>
    
    <Total parts={course.parts}/>
    </div>
    

  )
}

const Header = (props) => {

  return (
    <div>
     <h1>{props.course.name}</h1>
    </div>
  )
}



const Part = (props) => {

  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Total = (props) => {

  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);


  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}


const Content = ({content}) => {

  return (
    <div>
      
      {content.map(part => 
      <Part key={part.id} part={part}/>
      )}
      
    </div>

  )
}



export default App