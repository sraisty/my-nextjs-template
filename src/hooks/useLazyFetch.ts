/* eslint-disable no-console */
import {useCallback} from 'react'

export const useLazyFetch = <T>() => {
  const lazyFetch = useCallback(async (url: string) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('HTTP Error')
      }
      const json: T = await response.json()
      return {data: json, error: null}
    } catch (e) {
      const error = e as Error
      console.error(error.message)
      return {data: null, error}
    }
  }, [])

  return {lazyFetch}
}

// USAGE
// const { lazyFetch } = useLazyFetch<UserData>();
// const [loading, setLoading] = useState(false);
// const [userData, setUserData] = useState<UserData | null>(null);

// const handleFetch = async () => {
//   setLoading(true);
//   try {
//     const result = await lazyFetch('/api/user/123');
//     if (result.data) {
//       setUserData(result.data);
//     }
//   } finally {
//     setLoading(false);
//   }
// }
