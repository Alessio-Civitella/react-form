import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [namesArray, setNamesArray] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName !== '') {
      setNamesArray([...namesArray, firstName]); 
      setFirstName(''); 
    }
  };

  const handleDelete = (index) => {
  
    const updatedNames = namesArray.filter((_, i) => i !== index);
    setNamesArray(updatedNames);
  };

  return (
    <div className="container mt-5">
      <form className='form d-flex gap-2' onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control w-50"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Inserisci un nome"
        />
        <button type="submit" className="btn btn-primary">Aggiungi</button>
      </form>

      <div className="mt-4 w-50">
        {namesArray.map((name, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center bg-light p-2 mb-2 rounded">
            <span>{name}</span>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Cancella</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;