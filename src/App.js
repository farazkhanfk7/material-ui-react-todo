import Create from './pages/Create';
import Notes from './pages/Notes';
import Appbar from './components/Appbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Appbar/>
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
