import React from 'react'
import { Food } from '../../types'

export interface IPane {
  food: Food;
  locked: boolean;
  onToggleLock: () => void;
}

const Pane: React.FC<IPane> = ({ food, locked, onToggleLock }) => (
  <div className="flex flex-col justify-center border-r-2 text-center">
    <span className="block text-2xl mb-12 font-medium cursor-default">{food.name}</span>
    <span className="block text-8xl cursor-default mb-12">{food.icon}</span>
    <button className="text-4xl" onClick={onToggleLock}>{locked ? '🔒' : '🔓'}</button>
  </div>
)

export default Pane
