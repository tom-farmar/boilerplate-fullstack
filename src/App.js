import { ApolloProvider } from '@apollo/client'
import { client } from 'utils/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Hello } from 'components/Hello'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Hello />
          <Switch>
            <Route
              path="/"
              render={() => <div className="text-green-500">Home</div>}
            />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
