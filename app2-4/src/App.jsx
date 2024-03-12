const App = () => {
  const courses = [
    {
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
    
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
      <Course key={course.id} course={course}/>
      )}
      
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
     <h2>{props.course.name}</h2>
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

  const totalExercises = props.parts.reduce((s, p) => s + p.exercises, 0);


  return (
    <div>
      <h4>total of {totalExercises} exercises</h4>
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