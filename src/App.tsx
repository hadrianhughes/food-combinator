import React from 'react';
import { selectFood } from './lib'
import { vegetables, meats, carbs } from './data'
import Pane from './components/Pane'

const App = () => (
  <div className="grid grid-cols-3 h-full">
    <Pane food={selectFood(vegetables)} />
    <Pane food={selectFood(carbs)} />
    <Pane food={selectFood(meats)} />
  </div>
)

export default App
