import { Food } from './types';

export const vegetables: Food[] = [
  { name: 'Carrots', icon: '🥕' },
  { name: 'Spinach', icon: '🍃' },
  { name: 'Cucumber', icon: '🥒' },
  { name: 'Tomatoes', icon: '🍅' },
  { name: 'Onions', icon: '🧅' },
  { name: 'Peas', icon: '🍲' },
  { name: 'Lettuce', icon: '🥬' },
  { name: 'Peppers', icon: '🫑' },
  { name: 'Kale', icon: '🥬' },
  { name: 'Green Beans', icon: '🟢' },
  { name: 'Corn', icon: '🌽' },
  { name: 'Chickpeas/Falafel', icon: '🧆' },
  { name: 'Black Beans', icon: '🫘' },
  { name: 'Avocado', icon: '🥑' },
]

export const meats: Food[] = [
  { name: 'Chicken', icon: '🍗', weight: 2/3 },
  { name: 'Steak', icon: '🥩', weight: 1/12 },
  { name: 'Corned beef', icon: '🥫', weight: 1/12 },
  { name: 'Fish', icon: '🍣', weight: 1/12 },
  { name: 'Sausages', icon: '🌭', weight: 1/12 },
]

export const carbs: Food[] = [
  { name: 'Rice', icon: '🍙', weight: 1/3 },
  { name: 'Potato Salad', icon: '🥔', weight: 2/9 },
  { name: 'Baked Potato', icon: '🥔', weight: 2/9 },
  { name: 'Quinoa', icon: '🌾', weight: 1/9 },
  { name: 'Fries', icon: '🍟', weight: 1/9 },
]
