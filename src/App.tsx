import React from 'react';
import { selectFood } from './lib'
import { vegetables, meats, carbs } from './data'
import './App.css';

const App = () => (
  <div className="grid grid-cols-3 h-full">
    <div className="border-r-2 text-center">
      {selectFood(vegetables).name}
    </div>
    <div className="border-r-2 text-center">
      {selectFood(carbs).name}
    </div>
    <div className="text-center">
      {selectFood(meats).name}
    </div>
  </div>
)

export default App
