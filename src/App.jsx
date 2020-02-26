import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import EquipmentsContainer from './containers/EquipmentsContainer';
import EquipmentContainer from './containers/EquipmentContainer';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={EquipmentsContainer} />
    <Route exact path="/equipment/:equipmentKey" component={EquipmentContainer} />
  </BrowserRouter>
)

export default App;
