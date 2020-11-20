import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

const HELLO = gql`
  query Hello {
    hello
  }
`

export function Hello(props) {
  const [message, setMessage] = useState('smisland island for smorgus')
  useQuery(HELLO, {
    onCompleted: (data) => {
      setMessage(data.hello)
    },
  })

  return <div className="text-blue-500">{message}</div>
}
