import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import EquipmentsContainer from './containers/EquipmentsContainer';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={EquipmentsContainer} />
  </BrowserRouter>
)

export default App;
