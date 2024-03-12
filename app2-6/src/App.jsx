import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personDude = {
      name: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personDude))
    setNewName("")
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>

        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          
        </div>
          
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
      
    </div>
  )
}


const Person = ({ person }) => {
  return (
    <p>{person.name}</p>
  );
}

export default App