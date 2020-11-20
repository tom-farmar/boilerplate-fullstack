import { Switch, Route } from 'react-router-dom'
import { Hello } from 'components/Hello'

function App() {
  return (
    <div className="App">
      <Hello />
      <Switch>
        <Route
          path="/"
          render={() => <div className="text-green-500">Home</div>}
        />
      </Switch>
    </div>
  )
}

export default App
