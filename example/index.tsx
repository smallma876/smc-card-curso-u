import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  //img: './coffee-mug.png'
};

const App = () => {
  return (
    <>
      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 15,
        }}
      >
        {({ reset, isMaxCountReached, count, increaseBy, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
