import Create from './pages/Create';
import Notes from './pages/Notes';
import Appbar from './components/Appbar';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#898da3',
    },
    secondary: {
      main: '#8bc34a',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Router>
        <Appbar/>
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
    </ThemeProvider>
  );
}

export default App;
