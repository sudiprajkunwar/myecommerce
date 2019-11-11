import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productslist from './components/Productslist';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Model from './components/Model';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Productslist} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model />
    </React.Fragment>
  );
}

export default App;
