import React from 'react';
//import { Route, IndexRoute, } from 'react-router';
import { Route} from 'react-router-dom';

import Home from './routes/Home';
import Cars from './routes/Cars';
import Categories from './routes/catalog/Categories';
import Product from './routes/catalog/Product';
// import Layout from './containers/Layout';

const Routes = props => {
  return (
      <div >
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cars" component={Cars} />
      </div>
  )
};

export default Routes;


