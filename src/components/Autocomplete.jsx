import React, { useState } from 'react';
import api from '../lib/api';

const Autocomplete = () => {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState('');

  const handleChangeText = async ({ target: { value } }) => {
    if (value === '') {
      setCountries([]);
      setText('');
      return;
    }
    setText(value);
    const res = await api.get('/countries', { key: value });
    setCountries(res.data);
  };

  const renderCountries = () => (
    <ul>
      {countries.map((c) => <li key={c}>{c}</li>)}
    </ul>
  );

  return (
    <div>
      <form>
        <div className="mb-3">
          <input type="text" onChange={handleChangeText} value={text} className="form-control" placeholder="Enter Country" />
        </div>
      </form>
      {countries.length > 0 && renderCountries() }
    </div>
  );
};

export default Autocomplete;
