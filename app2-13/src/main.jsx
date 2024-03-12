import axios from 'axios'

import ReactDOM from 'react-dom/client'

import App from './App'



ReactDOM.createRoot(document.getElementById('root')).render(<App />)

axios
  .get('http://localhost:3001/persons')
  .then(response => {
    const persons = response.data
    console.log(persons)
  })
