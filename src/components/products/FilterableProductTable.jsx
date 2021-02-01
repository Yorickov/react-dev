import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

const FilterableProductTable = (props) => {
  const [filterText, setText] = useState('');
  const [inStockOnly, setStock] = useState(false);

  const { products } = props;

  const handleFilterTextChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleInStockChange = ({ target: { checked } }) => {
    setStock(checked);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

FilterableProductTable.propTypes = {
  products: PropTypes.array,
};

export default FilterableProductTable;
