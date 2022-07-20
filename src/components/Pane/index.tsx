import React from 'react'
import { Food } from '../../types'

export interface IPane {
  food: Food;
}

const Pane: React.FC<IPane> = ({ food }) => (
  <div className="flex flex-col justify-center border-r-2 text-center">
    <span className="block text-2xl mb-12 font-medium cursor-default">{food.name}</span>
    <span className="block text-8xl cursor-default">{food.icon}</span>
  </div>
)

export default Pane
