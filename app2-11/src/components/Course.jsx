
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

export default Course