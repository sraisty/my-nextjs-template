/* eslint-disable no-console */
import { useState, useEffect } from 'react'

export const useNewFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState<Error | null>(null)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }
        const json = await response.json()
        setData(json)
      } catch (e) {
        console.error(`getData error: `, e)
        setErr(e as Error)
      } finally {
        setLoading(false)
      }
    }
    getData().catch((e) => {
      console.error('Unknown error from getData: ', e)
    })
  }, [url])

  return { data, loading, err }
}
