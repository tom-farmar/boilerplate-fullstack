import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from 'utils/apollo-client'

export function AppProviders({ children }) {
  return (
    <ApolloProvider client={client}>
      <Router>{children}</Router>
    </ApolloProvider>
  )
}
