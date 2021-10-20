import Create from './pages/Create';
import Notes from './pages/Notes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
