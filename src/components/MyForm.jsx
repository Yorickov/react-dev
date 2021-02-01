import React, { useState } from 'react';

const MyForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    city: '',
    country: '',
    address: '',
    acceptRules: false,
  });
  const [submittingState, setSubmit] = useState('fillingForm');

  const handleChangeField = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setForm({ ...form, [target.name]: value });
  };

  const handleBackToForm = () => {
    setSubmit('fillingForm');
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmit('submitted');
  };

  const renderRow = (key) => (
    <tr key={key}>
      <td>{key}</td>
      <td>{form[key].toString()}</td>
    </tr>
  );

  const renderResult = () => {
    const keys = Object.keys(form).sort();
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={handleBackToForm}>Back</button>
        <table key="fieldsValues" className="table">
          <tbody>
            {keys.map(renderRow)}
          </tbody>
        </table>
      </div>
    );
  };

  const renderForm = () => (
    <form onSubmit={handleSubmitForm}>
      <div className="row mb-2">
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="col-form-label">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChangeField}
            value={form.email}
            className="form-control"
            id="inputEmail"
            placeholder="Email"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="col-form-label">Password</label>
          <input
            type="password"
            onChange={handleChangeField}
            value={form.password}
            name="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="inputAddress" className="col-form-label">Address</label>
        <textarea type="text" name="address" value={form.address} onChange={handleChangeField} className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="row mb-2">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity" className="col-form-label">City</label>
          <input type="text" name="city" onChange={handleChangeField} value={form.city} className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCountry" className="col-form-label">Country</label>
          <select id="inputCountry" name="country" onChange={handleChangeField} className="form-control" value={form.country}>
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <div className="form-check">
          <label className="form-check-label" htmlFor="rules">Accept Rules</label>
          <input id="rules" name="acceptRules" className="form-check-input" onChange={handleChangeField} type="checkbox" checked={form.acceptRules} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  );

  switch (submittingState) {
    case 'fillingForm':
      return renderForm();
    case 'submitted':
      return renderResult();
    default:
      throw new Error(`'${submittingState}' - unknown state`);
  }
};

export default MyForm;
