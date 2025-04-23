/* eslint-disable no-console */

import { useState, useEffect, useCallback, useRef } from 'react'

export const useFetchWithCancel = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState<null | Error>(null)

  const controllerRef = useRef<AbortController | null>(null)

  const cancel = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort()
    }
  }, [])

  useEffect(() => {
    controllerRef.current = new AbortController()

    const getData = async () => {
      setData(null)
      setErr(null)
      setLoading(true)
      try {
        const response = await fetch(url, {
          signal: controllerRef?.current?.signal,
        })
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }
        const json = await response.json()
        setData(json)
      } catch (e) {
        setErr(e as Error)
        console.error('Error: ', e)
      } finally {
        setLoading(false)
      }
    }
    getData().catch((e) => {
      console.error('Unhandled error in getData(): ', e)
    })

    return () => controllerRef.current?.abort()
  }, [url])

  return { data, loading, err, cancel }
}
