import React from 'react';
import FilterableProductTable from '../src/components/products/FilterableProductTable.jsx';

const products = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
];

it('FilterableProductTable', () => {
  const wrapper = mount(<FilterableProductTable products={products} />);
  expect(wrapper.render()).toMatchSnapshot();

  const filter = wrapper.find('[data-test="filter"]');
  const checked = wrapper.find('[data-test="checked"]');

  filter.simulate('change', { target: { value: 'ball' } });
  expect(wrapper.render()).toMatchSnapshot();

  filter.simulate('change', { target: { value: '' } });
  checked.simulate('change', { target: { checked: true } });
  expect(wrapper.render()).toMatchSnapshot();
});
