import personService from './services/persons'
import { useState, useEffect } from 'react'
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [Message, setMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response.data)
    })
  }, [])

  const addName = event => {
    event.preventDefault()
    const personDude = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === personDude.name)) {
      alert(`${personDude.name} is already added to the phonebook`)
    } else {
      personService.create(personDude).then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')

        setMessage(
          `Added ${personDude.name}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))

        })
        setMessage(
          `Removed ${name}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
    }
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }
  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={Message} />
      <SubmitPerson
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} deletePerson={deletePerson} />
      </ul>
    </div>
  )
}

const SubmitPerson = ({ addName, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Person = ({ person, deletePerson }) => {
  return (
    <p>
      {person.name} {person.number}{' '}
      <button onClick={() => deletePerson(person.id, person.name)}>Delete</button>
    </p>
  )
}

const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map(person => (
        <Person key={person.id} person={person} deletePerson={deletePerson} />
      ))}
    </div>
  )
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="notification">
      {message}
    </div>
  )
}

export default App
