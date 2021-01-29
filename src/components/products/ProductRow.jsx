import React from 'react';
import PropTypes from 'prop-types';

const ProductRow = (props) => {
  const { product: { name, price, stocked } } = props;

  const styledName = stocked ? name : (
    <span style={{ color: 'red' }}>
      {name}
    </span>
  );

  return (
    <tr>
      <td>{styledName}</td>
      <td>{price}</td>
    </tr>
  );
};

ProductRow.propTypes = {
  product: PropTypes.object,
};

export default ProductRow;
