'use client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import type {PropsWithChildren} from 'react'
import {useState} from 'react'

export const ReactQueryProvider = ({children}: PropsWithChildren) => {
  const [client] = useState(() => new QueryClient())

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
