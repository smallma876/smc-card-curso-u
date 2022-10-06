import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../data/products';

describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
