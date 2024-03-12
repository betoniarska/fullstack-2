import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

  const addName = (event) => {
    event.preventDefault()
    const personDude = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    if (persons.some(person => person.name === personDude.name)){
      alert(`${personDude.name} is already added to the phonebook`)
      setNewName("")
      setNewNumber("")

    } else {
      
      setPersons(persons.concat(personDude))
      setNewName("")
      setNewNumber("")
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <SubmitPerson 
        addName={addName} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} />
      </ul>
      
    </div>
  )
}

const SubmitPerson = ({ addName, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={addName}>
      <div>name: <input value={newName} onChange={handleNameChange}/></div>
      <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};


const Person = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
  );
}



const Persons = ({persons}) => {
  return (
    <div>
      {persons.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
}

export default App