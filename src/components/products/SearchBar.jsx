import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const {
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockChange,
  } = props;

  return (
    <form>
      <div className="mb-3">
        <input
          data-test="filter"
          type="text"
          placeholder="Search..."
          className="form-control"
          value={filterText}
          onChange={onFilterTextChange}
        />
      </div>
      <div className="mb-3">
        <input
          data-test="checked"
          type="checkbox"
          className="form-check"
          checked={inStockOnly}
          onChange={onInStockChange}
          />
      </div>
      <p>
        {' '}
        Only show products in stock
      </p>
    </form>
  );
};

SearchBar.propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
  onFilterTextChange: PropTypes.func,
  onInStockChange: PropTypes.func,
};

export default SearchBar;
