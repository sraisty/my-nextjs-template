import { useState, useEffect, useRef, useCallback } from 'react'

// To use:
// const {debouncedVal, cancel} = useDebounce(searchStr, 500)
// call cancel() on unmount, escape key, reset button, etc.

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedVal, setDebouncedVal] = useState<T | null>(null)

  const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancel = useCallback(() => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current)
    }
  }, [])

  useEffect(() => {
    cancel() // clear any previous debounce before starting a new one
    timerIdRef.current = setTimeout(() => setDebouncedVal(value), delay)
    return cancel
  }, [value, delay, cancel])

  return { debouncedVal, cancel }
}
