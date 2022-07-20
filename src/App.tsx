import React, { useCallback, useState } from 'react';
import { selectFood } from './lib'
import { vegetables, meats, carbs } from './data'
import { AppState } from './types'
import Pane from './components/Pane'

const stateMapping = {
  'vegetable': vegetables,
  'meat': meats,
  'carb': carbs,
}

const App = () => {
  const [state, setState] = useState<AppState>({
    vegetable: { food: selectFood(vegetables), locked: false },
    carb: { food: selectFood(carbs), locked: false },
    meat: { food: selectFood(meats), locked: false },
  })

  const generate = useCallback(() => {
    const _changeEntry = (entry: keyof typeof stateMapping, _state: AppState): AppState => {
      if (_state[entry].locked) { return _state }
      return {
        ..._state,
        [entry]: {
          ..._state[entry],
          food: selectFood(stateMapping[entry]),
        },
      }
    }

    const newState =
      _changeEntry(
        'vegetable',
        _changeEntry(
          'carb',
          _changeEntry(
            'meat',
            state
          )
        )
      )

    setState(newState)
  }, [state])

  const toggleLock = useCallback((entry: keyof typeof stateMapping) => {
    setState({
      ...state,
      [entry]: {
        ...state[entry],
        locked: !state[entry].locked,
      },
    })
  }, [state])

  return (
    <>
      <div className="grid grid-cols-3 h-full">
        <Pane {...state.vegetable} onToggleLock={() => toggleLock('vegetable')} color="green" />
        <Pane {...state.carb} onToggleLock={() => toggleLock('carb')} color="beige" />
        <Pane {...state.meat} onToggleLock={() => toggleLock('meat')} color="red" />
      </div>
      <button className="fixed bottom-24 right-1/2 translate-x-1/2 text-6xl md:right-12 md:bottom-12 md:transform-none" onClick={generate}>🔄</button>
    </>
  )
}

export default App
