import React from 'react'
import { EventType } from './App'

type UseDataContextType = {
  events: EventType[],
  setEvents: (events: EventType[]) => void
}
export const eventContext = React.createContext<UseDataContextType>({
  events: [],
  setEvents: () => undefined
})
