'use client'
import {useQuery} from '@tanstack/react-query'
import {ErrorDisplay} from './ErrorDisplay'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const USERS_URL = `${BASE_URL}/users`

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export const UserListContainer = () => {
  const {isPending, error, data} = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(USERS_URL).then((res) => res.json()),
  })
  console.log({isPending, error, data})

  const users: User[] = data ?? []
  if (error) {
    return <ErrorDisplay err={error} />
  }
  if (isPending) {
    return <p>Loading...</p>
  }
  return <UserList users={users} />
}

type UserListProps = {
  users: User[]
}
export const UserList = ({users}: UserListProps) => {
  return (
    <div>
      {users.map((u) => (
        <UserCard user={u} key={u.id} />
      ))}
    </div>
  )
}

const UserCard = ({user}: {user: User}) => {
  return (
    <div
      style={{
        backgroundColor: '#AAAAAA',
        borderRadius: 4,
        padding: 8,
        margin: 32,
      }}
    >
      <p>{user.name}</p>
    </div>
  )
}
