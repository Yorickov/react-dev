import React from 'react';
import PropTypes from 'prop-types';
import ProductRow from './ProductRow.jsx';
import ProductCategoryRow from './ProductCategoryRow.jsx';

const ProductTable = (props) => {
  const { products, filterText, inStockOnly } = props;

  const filterProducts = products.filter((product) => (
    product.name.toLowerCase().includes(filterText.toLowerCase())
    && (!inStockOnly || product.stocked)
  ));

  const renderRows = (items) => {
    const rows = [];
    let lastCategory = null;

    items.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />,
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />,
      );

      lastCategory = product.category;
    });

    return rows;
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{renderRows(filterProducts)}</tbody>
    </table>
  );
};

ProductTable.propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
  products: PropTypes.array,
};

export default ProductTable;
