import './App.css'
import { useState } from 'react'


function App() {

  const [firstName, setFirstName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  

  const namesArray = [""]

  setFirstName(namesArray);

  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text"
        value={firstName}
        onChange={e => { setFirstName(e.target.value)}}/>
        <button>Stampa</button>
        
      </form>
    </>
  )
}

export default App
