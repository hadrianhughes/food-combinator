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
        <Pane {...state.vegetable} onToggleLock={() => toggleLock('vegetable')} />
        <Pane {...state.carb} onToggleLock={() => toggleLock('carb')} />
        <Pane {...state.meat} onToggleLock={() => toggleLock('meat')} />
      </div>
      <button className="fixed right-12 bottom-12 text-6xl" onClick={generate}>🔄</button>
    </>
  )
}

export default App
