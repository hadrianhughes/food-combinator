import React from 'react'
import { Food } from '../../types'

const colorClasses = {
  'green': 'bg-green',
  'beige': 'bg-beige',
  'red': 'bg-red',
}

export interface IPane {
  food: Food;
  locked: boolean;
  onToggleLock: () => void;
  color: keyof typeof colorClasses;
}

const Pane: React.FC<IPane> = ({ food, locked, onToggleLock, color }) => (
  <div className={`flex flex-col justify-center border-r-2 text-center ${colorClasses[color]}`}>
    <span className="block text-2xl mb-12 font-medium cursor-default">{food.name}</span>
    <span className="block cursor-default text-6xl mb-12 md:text-8xl">{food.icon}</span>
    <button className="text-4xl" onClick={onToggleLock}>{locked ? '🔒' : '🔓'}</button>
  </div>
)

export default Pane
