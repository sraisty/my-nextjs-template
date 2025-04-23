import { useEffect } from 'react'
import { useStableFunction } from './useStableFunction'

export const useInterval = (durationMS: number, onInterval: () => void) => {
  const handler = useStableFunction(onInterval)

  useEffect(() => {
    const intervalId = setInterval(handler, durationMS)
    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [durationMS])
}
