import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

class FilterableProductTable extends Component {
  state = { filterText: '', inStockOnly: false };

  handleFilterTextChange = ({ target: { value } }) => {
    this.setState({ filterText: value });
  };

  handleInStockChange = ({ target: { checked } }) => {
    this.setState({ inStockOnly: checked });
  };

  render() {
    const { products } = this.props;
    const { filterText, inStockOnly } = this.state;

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.array,
};

export default FilterableProductTable;
