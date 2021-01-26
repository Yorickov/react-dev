import React, { Component } from 'react';
import api from '../lib/api';

class Autocomplete extends Component {
  state = { text: '', countries: [] };

  handleChangeText = async ({ target: { value } }) => {
    if (value === '') {
      this.setState({ text: '', countries: [] });
      return;
    }
    this.setState({ text: value });

    const res = await api.get('/countries', { key: value });
    this.setState({ countries: res.data });
  };

  renderCountries() {
    const { countries } = this.state;

    return (
      <ul>
        {countries.map((c) => <li key={c}>{c}</li>)}
      </ul>
    );
  }

  render() {
    const { text, countries } = this.state;

    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" onChange={this.handleChangeText} value={text} className="form-control" placeholder="Enter Country" />
          </div>
        </form>
        {countries.length > 0 && this.renderCountries() }
      </div>
    );
  }
}

export default Autocomplete;
